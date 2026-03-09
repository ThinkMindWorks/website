(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/thinkmindlabs/components/LegalPage.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LegalPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thinkmindlabs/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thinkmindlabs/node_modules/next/link.js [client] (ecmascript)");
;
;
const LEGAL_PAGES = [
    {
        href: '/privacy-policy',
        label: 'Privacy Policy'
    },
    {
        href: '/terms-of-service',
        label: 'Terms of Service'
    },
    {
        href: '/cookie-policy',
        label: 'Cookie Policy'
    },
    {
        href: '/security',
        label: 'Security'
    }
];
function LegalPage({ title, subtitle, lastUpdated, effectiveDate, children, currentHref }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-hero",
                style: {
                    paddingBottom: 48
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "section-label",
                            children: "Legal"
                        }, void 0, false, {
                            fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "section-title",
                            style: {
                                fontSize: 'clamp(40px, 5vw, 68px)',
                                marginBottom: 16
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-body",
                            style: {
                                marginBottom: 20
                            },
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 20,
                                flexWrap: 'wrap',
                                marginTop: 8
                            },
                            children: [
                                lastUpdated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: 12,
                                        color: 'var(--color-text-muted)'
                                    },
                                    children: [
                                        "Last updated: ",
                                        lastUpdated
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this),
                                effectiveDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: 12,
                                        color: 'var(--color-text-muted)'
                                    },
                                    children: [
                                        "Effective: ",
                                        effectiveDate
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                style: {
                    paddingTop: 48
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '220px 1fr',
                            gap: 64,
                            alignItems: 'flex-start'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'sticky',
                                    top: 96
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 11,
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em',
                                            color: 'var(--color-text-muted)',
                                            marginBottom: 16
                                        },
                                        children: "Legal Documents"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 2
                                        },
                                        children: LEGAL_PAGES.map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: page.href,
                                                style: {
                                                    display: 'block',
                                                    padding: '9px 14px',
                                                    borderRadius: 'var(--radius-md)',
                                                    fontSize: 14,
                                                    fontWeight: currentHref === page.href ? 600 : 400,
                                                    color: currentHref === page.href ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                                                    background: currentHref === page.href ? 'rgba(255,98,0,0.08)' : 'transparent',
                                                    borderLeft: currentHref === page.href ? '2px solid var(--accent-orange)' : '2px solid transparent',
                                                    transition: 'all 0.2s',
                                                    textDecoration: 'none'
                                                },
                                                children: page.label
                                            }, page.href, false, {
                                                fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: 40,
                                            padding: '20px',
                                            background: 'var(--color-bg-elevated)',
                                            border: '1px solid var(--color-border)',
                                            borderRadius: 'var(--radius-lg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: 12,
                                                    color: 'var(--color-text-muted)',
                                                    lineHeight: 1.65,
                                                    marginBottom: 12
                                                },
                                                children: "Questions about our legal documents?"
                                            }, void 0, false, {
                                                fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:legal@thinkmindlabs.com",
                                                style: {
                                                    fontSize: 13,
                                                    color: 'var(--accent-orange)',
                                                    fontWeight: 600
                                                },
                                                children: "legal@thinkmindlabs.com"
                                            }, void 0, false, {
                                                fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    minWidth: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "legal-content",
                                    children: children
                                }, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .legal-content h2 {
          font-family: var(--font-display);
          font-size: clamp(22px, 2.5vw, 30px);
          letter-spacing: -0.02em;
          color: var(--color-text-primary);
          margin: 48px 0 16px;
          padding-top: 48px;
          border-top: 1px solid var(--color-border);
          line-height: 1.1;
        }
        .legal-content h2:first-child {
          margin-top: 0;
          padding-top: 0;
          border-top: none;
        }
        .legal-content h3 {
          font-size: 17px;
          font-weight: 700;
          color: var(--color-text-primary);
          margin: 28px 0 10px;
          letter-spacing: -0.01em;
        }
        .legal-content p {
          font-size: 15px;
          color: rgba(255,255,255,0.62);
          line-height: 1.8;
          margin: 0 0 16px;
        }
        .legal-content ul, .legal-content ol {
          margin: 12px 0 20px 0;
          padding-left: 0;
          list-style: none;
        }
        .legal-content ul li, .legal-content ol li {
          font-size: 15px;
          color: rgba(255,255,255,0.62);
          line-height: 1.75;
          padding: 6px 0 6px 24px;
          position: relative;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .legal-content ul li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent-orange);
          font-size: 13px;
        }
        .legal-content ol {
          counter-reset: legal-counter;
        }
        .legal-content ol li {
          counter-increment: legal-counter;
        }
        .legal-content ol li::before {
          content: counter(legal-counter) '.';
          position: absolute;
          left: 0;
          color: var(--accent-orange);
          font-size: 13px;
          font-family: var(--font-mono);
          font-weight: 600;
        }
        .legal-content a {
          color: var(--accent-orange);
          text-decoration: none;
        }
        .legal-content a:hover {
          text-decoration: underline;
        }
        .legal-content strong {
          color: var(--color-text-primary);
          font-weight: 600;
        }
        .legal-content .legal-highlight {
          background: rgba(255,98,0,0.06);
          border: 1px solid rgba(255,98,0,0.15);
          border-left: 3px solid var(--accent-orange);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          margin: 20px 0;
        }
        .legal-content .legal-highlight p {
          margin: 0;
          color: rgba(255,255,255,0.75);
        }
        .legal-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          font-size: 14px;
        }
        .legal-content th {
          text-align: left;
          padding: 10px 16px;
          background: var(--color-bg-elevated);
          color: var(--color-text-secondary);
          font-weight: 600;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid var(--color-border);
        }
        .legal-content td {
          padding: 12px 16px;
          color: rgba(255,255,255,0.6);
          border-bottom: 1px solid rgba(255,255,255,0.04);
          line-height: 1.6;
          vertical-align: top;
        }
        @media (max-width: 768px) {
          .legal-content h2 {
            margin-top: 36px;
            padding-top: 36px;
          }
        }
        @media (max-width: 900px) {
          .legal-sidebar-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/thinkmindlabs/components/LegalPage.js",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = LegalPage;
var _c;
__turbopack_context__.k.register(_c, "LegalPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/thinkmindlabs/pages/terms-of-service.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TermsOfService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thinkmindlabs/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thinkmindlabs/node_modules/next/head.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$components$2f$LegalPage$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thinkmindlabs/components/LegalPage.js [client] (ecmascript)");
;
;
;
function TermsOfService() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Terms of Service — ThinkMindLabs"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "ThinkMindLabs Terms of Service — the legal agreement governing use of our AI platform and services."
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$components$2f$LegalPage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Terms of Service",
                subtitle: "The legal agreement between you and ThinkMindLabs governing access to and use of our AI platform and services.",
                lastUpdated: "1 January 2025",
                effectiveDate: "1 January 2025",
                currentHref: "/terms-of-service",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "legal-highlight",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Please read these Terms carefully before using ThinkMindLabs."
                                }, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                    lineNumber: 20,
                                    columnNumber: 14
                                }, this),
                                " By accessing or using our Services, you agree to be bound by these Terms. If you are entering into this agreement on behalf of a company or organisation, you represent that you have authority to bind that entity."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "1. Definitions"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: '"Agreement"'
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this),
                                    " means these Terms of Service together with any Order Form, Statement of Work, or Enterprise Agreement executed between the parties."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: '"Services"'
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this),
                                    " means the AI infrastructure platform, APIs, developer tools, and related products provided by ThinkMindLabs."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: '"Customer"'
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this),
                                    " or ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: '"you"'
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 27,
                                        columnNumber: 46
                                    }, this),
                                    " means the individual or legal entity accessing the Services."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: '"Customer Data"'
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this),
                                    " means all data, content, or materials submitted to the Services by or on behalf of Customer."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: '"Output"'
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this),
                                    " means results, content, or inferences generated by the Services in response to Customer inputs."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: '"Confidential Information"'
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this),
                                    " means non-public information disclosed by either party that is designated as confidential or should reasonably be understood as such."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "2. Account Registration and Access"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "To access the Services, you must create an account and provide accurate, complete, and current information. You are responsible for:"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Maintaining the confidentiality of your API keys and account credentials"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "All activity that occurs under your account, whether authorised by you or not"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "Notifying us immediately at ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:security@thinkmindlabs.com",
                                        children: "security@thinkmindlabs.com"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 38,
                                        columnNumber: 43
                                    }, this),
                                    " of any unauthorised access or security breach"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Ensuring all users accessing Services under your account comply with these Terms"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "We reserve the right to suspend or terminate accounts that provide false information or violate these Terms."
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "3. Permitted Use and Restrictions"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "3.1 Permitted Use"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Subject to payment of applicable fees and compliance with these Terms, ThinkMindLabs grants you a limited, non-exclusive, non-transferable, revocable licence to access and use the Services for your internal business purposes."
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "3.2 Prohibited Activities"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "You must not use the Services to:"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Generate, distribute, or facilitate content that is illegal, harmful, defamatory, or infringes third-party intellectual property rights"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Develop weapons of mass destruction, bioweapons, cyberweapons, or tools designed to cause physical harm"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Create CSAM or any content that sexually exploits minors"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Conduct large-scale disinformation campaigns, election interference, or synthetic identity fraud"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Reverse-engineer, decompile, or attempt to extract our model weights or proprietary algorithms"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Scrape, crawl, or extract data from the Services beyond what is permitted by the API"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Resell, sublicense, or white-label the Services without prior written consent"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Circumvent rate limits, security controls, or usage restrictions"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Introduce malware, viruses, or malicious code into the Services or our infrastructure"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "4. Customer Data and Privacy"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "As between the parties, you retain all ownership of Customer Data. You grant ThinkMindLabs a limited licence to process Customer Data solely to provide the Services."
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "We do not use Customer Data to train our models without your explicit opt-in consent"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Enterprise customers on dedicated infrastructure benefit from complete data isolation"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "You represent and warrant that you have all necessary rights and consents to provide Customer Data to us"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "You are solely responsible for the accuracy, legality, and appropriateness of Customer Data"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "5. Intellectual Property"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "5.1 ThinkMindLabs IP"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "ThinkMindLabs retains all rights, title, and interest in the Services, our technology, models, APIs, documentation, and all associated intellectual property. These Terms do not grant you any rights to our IP except the limited licence described in Section 3.1."
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "5.2 Customer IP and Output Ownership"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "You retain ownership of Customer Data. Subject to your compliance with these Terms and payment of all applicable fees, ThinkMindLabs assigns to you all rights in Output generated specifically for you through the Services, to the extent such assignment is permissible under applicable law."
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "5.3 Feedback"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "If you provide suggestions or feedback about the Services, you grant ThinkMindLabs an irrevocable, worldwide, royalty-free licence to use such feedback without any obligation to you."
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "6. Fees, Payment and Taxes"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Fees are as set out on our pricing page or in your Order Form and are payable in advance unless otherwise agreed"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "All fees are non-refundable except as expressly stated in these Terms or required by law"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "We may modify fees with 30 days written notice; continued use after the effective date constitutes acceptance"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Overdue amounts accrue interest at 1.5% per month or the maximum rate permitted by law, whichever is lower"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "You are responsible for all applicable taxes; we will collect GST/VAT where required by law"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "7. Confidentiality"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Each party agrees to: (a) keep the other party's Confidential Information strictly confidential; (b) use it only to fulfil obligations or exercise rights under this Agreement; and (c) restrict access to those with a need to know who are bound by equivalent confidentiality obligations. These obligations survive termination for 5 years."
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "8. Warranties and Disclaimers"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "ThinkMindLabs warrants that the Services will perform materially as described in our documentation. TO THE MAXIMUM EXTENT PERMITTED BY LAW, ALL OTHER WARRANTIES — EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT — ARE DISCLAIMED."
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "AI-generated Output may be inaccurate, incomplete, or inappropriate for your use case. You are solely responsible for validating Output before relying on it for any decision, particularly in regulated or high-stakes contexts."
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "9. Limitation of Liability"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "NEITHER PARTY WILL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "THINKMINDLABS'S TOTAL CUMULATIVE LIABILITY FOR ALL CLAIMS UNDER THIS AGREEMENT WILL NOT EXCEED THE GREATER OF (A) THE FEES PAID BY YOU IN THE 12 MONTHS PRECEDING THE CLAIM OR (B) USD 100"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "These limitations apply regardless of the theory of liability and even if a party has been advised of the possibility of such damages."
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "10. Indemnification"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "You agree to indemnify, defend, and hold harmless ThinkMindLabs and its officers, directors, employees, and agents from any claims, damages, losses, and expenses (including reasonable legal fees) arising from: (a) your use of the Services; (b) your Customer Data; (c) your violation of these Terms; or (d) your violation of any applicable law or third-party rights."
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "11. Term and Termination"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "These Terms commence on your first use of the Services and continue until terminated"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "You may terminate at any time by closing your account and ceasing use of the Services"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "We may suspend or terminate your access immediately for material breach, non-payment, or suspected illegal activity"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "For non-material breaches, we will provide 30 days written notice and opportunity to cure"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Upon termination, your licence ends immediately; we will retain Customer Data for 30 days to allow export, then delete it"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "12. Governing Law and Dispute Resolution"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "These Terms are governed by the laws of India, without regard to conflict of law principles."
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Informal resolution:"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    " Parties will first attempt to resolve disputes informally within 30 days of written notice"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Arbitration:"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    " Unresolved disputes will be referred to binding arbitration under the Arbitration and Conciliation Act 1996, with a single arbitrator, conducted in English, seated in Gurugram, Haryana"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Consumer/GDPR exceptions:"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    " Nothing in this clause prevents EU/UK users from bringing claims before their local courts or supervisory authorities under GDPR"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Class action waiver:"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    " Claims may only be brought in individual capacity, not as a class or collective action"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "13. General Provisions"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Entire agreement:"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    " These Terms constitute the entire agreement between the parties and supersede all prior discussions or agreements on this subject"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Severability:"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    " If any provision is found unenforceable, the remaining provisions continue in full force"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Waiver:"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    " Failure to enforce any provision is not a waiver of our rights"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Assignment:"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    " You may not assign these Terms without our prior written consent; we may assign freely"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Force majeure:"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this),
                                    " Neither party is liable for delays caused by circumstances beyond their reasonable control"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Notices:"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    " Legal notices must be sent to ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:legal@thinkmindlabs.com",
                                        children: "legal@thinkmindlabs.com"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 132,
                                        columnNumber: 71
                                    }, this),
                                    " and to your registered email address"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "14. Contact"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Legal:"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:legal@thinkmindlabs.com",
                                        children: "legal@thinkmindlabs.com"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 137,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "General:"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:ai@thinkmindlabs.com",
                                        children: "ai@thinkmindlabs.com"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 138,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Address:"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    " ThinkMindLabs Private Limited, Cyber City, Gurugram, Haryana 122002, India"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/thinkmindlabs/pages/terms-of-service.js",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = TermsOfService;
var _c;
__turbopack_context__.k.register(_c, "TermsOfService");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/thinkmindlabs/pages/terms-of-service.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/terms-of-service";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/thinkmindlabs/pages/terms-of-service.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/thinkmindlabs/pages/terms-of-service\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/thinkmindlabs/pages/terms-of-service.js [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__ec36b271._.js.map