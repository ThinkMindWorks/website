module.exports = [
"[project]/thinkmindlabs/pages/notes.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Notes
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thinkmindlabs/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thinkmindlabs/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
;
const POSTS = [
    {
        tag: 'Product',
        date: 'Mar 2025',
        title: 'Why we built OpenVoce.ai — and why it deploys in under 5 minutes',
        excerpt: 'Most AI chatbot builders take weeks to configure and months to tune. We believed that was wrong. Here is how we engineered OpenVoce to be live in under 5 minutes without compromising on quality.',
        featured: true,
        readTime: '6 min'
    },
    {
        tag: 'Engineering',
        date: 'Feb 2025',
        title: 'Building sovereign AI: why your enterprise data must never leave your infrastructure',
        excerpt: 'As AI adoption accelerates, data sovereignty is becoming the defining enterprise concern. We explain our architecture and why Pravakta.ai was designed from day one to run entirely on customer-owned infrastructure.',
        readTime: '8 min'
    },
    {
        tag: 'Product',
        date: 'Feb 2025',
        title: 'Pravakta.ai: how we trained 100+ voice agents before launch',
        excerpt: 'Pre-trained agents are our moat. Before Pravakta.ai shipped, we trained over 100 domain-specific voice agents across healthcare, retail, banking and customer service. This is how.',
        readTime: '7 min'
    },
    {
        tag: 'Thinking',
        date: 'Jan 2025',
        title: 'The future of retail is conversational — TalkBuy and the end of the search bar',
        excerpt: 'E-commerce search is broken. Customers know what they want but can\'t always describe it in keywords. Conversational AI changes this entirely. The TalkBuy thesis.',
        readTime: '5 min'
    },
    {
        tag: 'Engineering',
        date: 'Jan 2025',
        title: 'WebRTC vs SIP for AI voice agents: what we learned building Pravakta',
        excerpt: 'We support both WebRTC and SIP in Pravakta.ai. Each has tradeoffs for enterprise deployments. After months of production data, here is what we recommend and why.',
        readTime: '9 min'
    },
    {
        tag: 'Healthcare',
        date: 'Dec 2024',
        title: 'AgentForDoc.ai: building a clinical AI agent that listens like a human coordinator',
        excerpt: 'Clinical documentation is one of the most expensive and error-prone processes in healthcare. We built an AI agent that listens, infers and summarises — in real time, inside your HIS.',
        readTime: '10 min'
    },
    {
        tag: 'Thinking',
        date: 'Nov 2024',
        title: 'Build with AI, Build for AI, Build to integrate — the ThinkMindLabs mantra',
        excerpt: 'Our three-word engineering philosophy sounds simple. But it shapes every product decision we make — from architecture to UX to pricing. Here is what it actually means in practice.',
        readTime: '4 min'
    },
    {
        tag: 'Engineering',
        date: 'Oct 2024',
        title: 'How we use AI Workers to ship products as a team of 5',
        excerpt: 'We are 5 humans. But we operate like a team of 100+. Our AI Workers handle code generation, testing, content, QA and deployment pipelines. This is our actual workflow.',
        readTime: '7 min'
    }
];
const TAGS = [
    'All',
    'Engineering',
    'Product',
    'Healthcare',
    'Thinking'
];
function Notes() {
    const [activeTag, setActiveTag] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('All');
    const filtered = activeTag === 'All' ? POSTS : POSTS.filter((p)=>p.tag === activeTag);
    const featured = filtered.find((p)=>p.featured);
    const rest = filtered.filter((p)=>!p.featured);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Notes — ThinkMindLabs"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/notes.js",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Engineering notes, product thinking and AI insights from the ThinkMindLabs lab."
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/notes.js",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/thinkmindlabs/pages/notes.js",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "page-hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "section-label",
                            children: "Lab Notes"
                        }, void 0, false, {
                            fileName: "[project]/thinkmindlabs/pages/notes.js",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                            className: "section-title",
                            style: {
                                fontSize: 'clamp(48px, 6vw, 80px)',
                                marginBottom: 12
                            },
                            children: [
                                "Thinking out",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("em", {
                                    children: "loud."
                                }, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                                    lineNumber: 84,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/thinkmindlabs/pages/notes.js",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "section-body",
                            children: "Engineering notes, product decisions, and AI insights from the ThinkMindLabs team. We write about what we build and why we build it."
                        }, void 0, false, {
                            fileName: "[project]/thinkmindlabs/pages/notes.js",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/thinkmindlabs/pages/notes.js",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "section",
                style: {
                    paddingTop: 28
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 8,
                                marginBottom: 16,
                                flexWrap: 'wrap'
                            },
                            children: TAGS.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTag(tag),
                                    style: {
                                        padding: '8px 18px',
                                        borderRadius: 999,
                                        fontSize: 13,
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        border: '1px solid',
                                        transition: 'all 0.2s',
                                        borderColor: activeTag === tag ? 'var(--accent-orange)' : 'var(--color-border)',
                                        background: activeTag === tag ? 'rgba(255,98,0,0.1)' : 'transparent',
                                        color: activeTag === tag ? 'var(--accent-orange)' : 'var(--color-text-secondary)'
                                    },
                                    children: tag
                                }, tag, false, {
                                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/thinkmindlabs/pages/notes.js",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                background: 'var(--color-bg-elevated)',
                                border: '1px solid var(--color-border)',
                                borderRadius: 'var(--radius-xl)',
                                padding: '14px 18px',
                                marginBottom: 18,
                                cursor: 'pointer',
                                transition: 'border-color 0.3s'
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.borderColor = 'rgba(255,98,0,0.3)',
                            onMouseLeave: (e)=>e.currentTarget.style.borderColor = 'var(--color-border)',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        marginBottom: 12,
                                        flexWrap: 'wrap',
                                        gap: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: 10,
                                                alignItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "card-tag",
                                                    style: {
                                                        color: 'var(--accent-orange)',
                                                        background: 'rgba(255,98,0,0.1)',
                                                        margin: 0
                                                    },
                                                    children: featured.tag
                                                }, void 0, false, {
                                                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: 'var(--font-mono)',
                                                        fontSize: 11,
                                                        color: 'var(--color-text-muted)',
                                                        letterSpacing: '0.04em',
                                                        textTransform: 'uppercase'
                                                    },
                                                    children: "Featured"
                                                }, void 0, false, {
                                                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/thinkmindlabs/pages/notes.js",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: 'var(--font-mono)',
                                                fontSize: 12,
                                                color: 'var(--color-text-muted)'
                                            },
                                            children: [
                                                featured.date,
                                                " · ",
                                                featured.readTime,
                                                " read"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/thinkmindlabs/pages/notes.js",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: 'var(--font-display)',
                                        fontSize: 'clamp(24px, 3vw, 36px)',
                                        letterSpacing: '-0.02em',
                                        marginBottom: 16,
                                        lineHeight: 1.15
                                    },
                                    children: featured.title
                                }, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 15,
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: 1.75,
                                        maxWidth: 680
                                    },
                                    children: featured.excerpt
                                }, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: 24
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 13,
                                            color: 'var(--accent-orange)',
                                            fontWeight: 600
                                        },
                                        children: "Read post →"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/notes.js",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/thinkmindlabs/pages/notes.js",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: 16
                            },
                            className: "notes-grid",
                            children: rest.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: 'var(--color-bg-elevated)',
                                        border: '1px solid var(--color-border)',
                                        borderRadius: 'var(--radius-xl)',
                                        padding: '18px 20px',
                                        cursor: 'pointer',
                                        transition: 'border-color 0.3s',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        minHeight: 220
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.borderColor = 'rgba(255,98,0,0.2)',
                                    onMouseLeave: (e)=>e.currentTarget.style.borderColor = 'var(--color-border)',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        marginBottom: 16,
                                                        flexWrap: 'wrap',
                                                        gap: 8
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "card-tag",
                                                            style: {
                                                                color: 'var(--accent-orange)',
                                                                background: 'rgba(255,98,0,0.1)',
                                                                margin: 0,
                                                                fontSize: 11
                                                            },
                                                            children: post.tag
                                                        }, void 0, false, {
                                                            fileName: "[project]/thinkmindlabs/pages/notes.js",
                                                            lineNumber: 133,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: 'var(--font-mono)',
                                                                fontSize: 11,
                                                                color: 'var(--color-text-muted)'
                                                            },
                                                            children: post.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/thinkmindlabs/pages/notes.js",
                                                            lineNumber: 134,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: 17,
                                                        fontWeight: 700,
                                                        letterSpacing: '-0.02em',
                                                        lineHeight: 1.3,
                                                        marginBottom: 12,
                                                        color: 'var(--color-text-primary)'
                                                    },
                                                    children: post.title
                                                }, void 0, false, {
                                                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: 14,
                                                        color: 'var(--color-text-secondary)',
                                                        lineHeight: 1.65
                                                    },
                                                    children: post.excerpt
                                                }, void 0, false, {
                                                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/thinkmindlabs/pages/notes.js",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 20,
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 13,
                                                        color: 'var(--accent-orange)',
                                                        fontWeight: 600
                                                    },
                                                    children: "Read →"
                                                }, void 0, false, {
                                                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: 'var(--font-mono)',
                                                        fontSize: 11,
                                                        color: 'var(--color-text-muted)'
                                                    },
                                                    children: [
                                                        post.readTime,
                                                        " read"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/thinkmindlabs/pages/notes.js",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, post.title, true, {
                                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/thinkmindlabs/pages/notes.js",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 80,
                                background: 'linear-gradient(135deg, rgba(255,98,0,0.06), transparent)',
                                border: '1px solid rgba(255,98,0,0.15)',
                                borderRadius: 'var(--radius-xl)',
                                padding: '16px',
                                textAlign: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "section-label",
                                    children: "Stay in the loop"
                                }, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: 'var(--font-display)',
                                        fontSize: 'clamp(24px, 3vw, 36px)',
                                        letterSpacing: '-0.02em',
                                        marginBottom: 12
                                    },
                                    children: "Lab notes in your inbox"
                                }, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 15,
                                        color: 'var(--color-text-secondary)',
                                        marginBottom: 18,
                                        maxWidth: 480,
                                        margin: '0 auto 32px'
                                    },
                                    children: "We write when we build something interesting. No spam, no newsletters for the sake of it."
                                }, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 12,
                                        justifyContent: 'center',
                                        maxWidth: 440,
                                        margin: '0 auto',
                                        flexWrap: 'wrap'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: "you@company.com",
                                            className: "form-input",
                                            style: {
                                                flex: 1,
                                                minWidth: 200
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/thinkmindlabs/pages/notes.js",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            className: "btn btn-orange",
                                            style: {
                                                padding: '12px 24px',
                                                whiteSpace: 'nowrap'
                                            },
                                            children: "Subscribe →"
                                        }, void 0, false, {
                                            fileName: "[project]/thinkmindlabs/pages/notes.js",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/thinkmindlabs/pages/notes.js",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/thinkmindlabs/pages/notes.js",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/thinkmindlabs/pages/notes.js",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 768px) {
          .notes-grid { grid-template-columns: 1fr !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/thinkmindlabs/pages/notes.js",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ad43476b._.js.map