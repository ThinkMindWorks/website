module.exports = [
"[project]/thinkmindlabs/pages/products.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Products
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thinkmindlabs/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thinkmindlabs/node_modules/next/link.js [ssr] (ecmascript)");
;
;
;
const PRODUCTS = [
    {
        tag: 'SaaS · Voice & Text AI Agent',
        tagColor: '#ff6200',
        tagBg: 'rgba(255,98,0,0.12)',
        title: 'OpenVoce.ai',
        subtitle: "World's fastest AI concierge agent",
        desc: "Create a Voice and Text AI Agent chatbot in minutes. OpenVoce acts as your concierge, pre-sales, sales, customer care, customer success and fulfillment officer — all in one agent. From zero to live in under 5 minutes.",
        features: [
            'Live in under 5 minutes',
            'Voice & Text native',
            'Pre-sales & customer care',
            'No ML expertise needed'
        ],
        status: 'Live',
        badge: 'World\'s Fastest',
        accent: '#ff6200',
        bg: 'linear-gradient(135deg, #1a0d00 0%, #111 100%)',
        image: 'https://framerusercontent.com/images/cak7U7dY4h898WLby7suvljdOcA.jpg?width=1200',
        url: 'https://openvoce.ai',
        urlLabel: 'Visit openvoce.ai'
    },
    {
        tag: 'PaaS · Enterprise AI Voice Stack',
        tagColor: '#7c6fff',
        tagBg: 'rgba(124,111,255,0.12)',
        title: 'Pravakta.ai',
        subtitle: 'Sovereign AI Voice Stack as a Service',
        desc: "100+ pre-trained voice agents ready for your enterprise. Human-like voice interactions with empathy, tone, context awareness, emotions and multilingual capability. Deployed over WebRTC, QR Codes and SIP. Your stack, your infrastructure, your data — always.",
        features: [
            '100+ pre-trained voice agents',
            'WebRTC, QR & SIP deployment',
            'AI Co-Pilot analytics dashboard',
            'Full sovereign infrastructure'
        ],
        status: 'Live',
        badge: "World's 1st AI Stack as a Service",
        accent: '#7c6fff',
        bg: 'linear-gradient(135deg, #0a0714 0%, #111 100%)',
        image: 'https://framerusercontent.com/images/xKHWSysrgFe1ub1CxmcYLHQdpc.jpg?width=800',
        url: 'https://pravakta.ai',
        urlLabel: 'Visit pravakta.ai'
    },
    {
        tag: 'PaaS · Retail Conversational AI',
        tagColor: '#00e5a0',
        tagBg: 'rgba(0,229,160,0.1)',
        title: 'TalkBuy.ai',
        subtitle: 'Sell more in conversation',
        desc: "A voice and text retail AI agent powered by your catalog, prices, and inventory. Customers browse, ask questions, watch reviews, get how-to help and transact — all in natural conversation. Built for eCommerce, D2C, dropshipping, marketplace and quick-commerce brands.",
        features: [
            'Catalog-powered AI agent',
            'In-conversation transactions',
            'eCommerce & offline retail',
            'D2C, dropshipping, marketplace'
        ],
        status: 'Live',
        accent: '#00e5a0',
        bg: 'linear-gradient(135deg, #001a10 0%, #111 100%)',
        image: 'https://framerusercontent.com/images/v2Cxh5gAzf3y5i5rvV7stpdreY.jpg?width=800',
        url: 'https://talkbuy.ai',
        urlLabel: 'Visit talkbuy.ai'
    },
    {
        tag: 'Enterprise · Clinical AI Agent',
        tagColor: '#38bdf8',
        tagBg: 'rgba(56,189,248,0.1)',
        title: 'AgentForDoc.ai',
        subtitle: 'AI medical coordinator, always available',
        desc: "A clinically trained voice and text AI agent that listens to doctor-patient interactions, infers clinical understanding, summarises diagnosis and answers anything about patient records, reports, scans and prescriptions in natural conversation. Integrates with HIS, ERP and medical systems.",
        features: [
            'Live consultation listener',
            'Patient record Q&A (GPT-like)',
            'HIS / ERP integration',
            'Near real-time updates'
        ],
        status: 'Live',
        accent: '#38bdf8',
        bg: 'linear-gradient(135deg, #001627 0%, #111 100%)',
        image: 'https://framerusercontent.com/images/B4iHZ4n8YkDGgjtcjPiGagMwMzA.jpg?width=800',
        url: 'https://agentfordoc.ai',
        urlLabel: 'Visit agentfordoc.ai'
    },
    {
        tag: 'Coming Soon',
        tagColor: '#ffdd00',
        tagBg: 'rgba(255,221,0,0.08)',
        title: 'More Agents',
        subtitle: 'In constant build mode',
        desc: "TallyAgent, FinOps Agent, RecruitAgent and more are in active development. ThinkMindLabs is always building. New agents are born every quarter — each one solving one enterprise problem, perfectly.",
        features: [
            'TallyAgent — Accounting AI',
            'FinOps Agent — Finance operations',
            'RecruitAgent — Hiring & HR AI',
            'And more in build...'
        ],
        status: 'Coming Soon',
        accent: '#ffdd00',
        bg: 'linear-gradient(135deg, #1a1500 0%, #111 100%)',
        image: 'https://framerusercontent.com/images/ju62vkEreDoQkpYoSbxnVoVcnzo.jpg?width=800',
        url: '/contact',
        urlLabel: 'Join Waitlist'
    }
];
const DELIVERY = [
    {
        icon: '☁️',
        title: 'SaaS',
        desc: 'Fully managed, cloud-hosted. Sign up and deploy in minutes. OpenVoce.ai and TalkBuy.ai are SaaS-first.'
    },
    {
        icon: '⚙️',
        title: 'PaaS',
        desc: 'Platform on your infrastructure. You own the stack, we provide the intelligence. Pravakta.ai is our flagship PaaS.'
    },
    {
        icon: '🏛️',
        title: 'Custom Enterprise',
        desc: 'Sovereign AI deployments built to your spec — on your cloud, on-premise, or hybrid. Full IP and data ownership.'
    }
];
function Products() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Products — ThinkMindLabs"
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/products.js",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "OpenVoce.ai, Pravakta.ai, TalkBuy.ai, AgentForDoc.ai — deployment-ready AI products from ThinkMindLabs."
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/products.js",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/thinkmindlabs/pages/products.js",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "page-hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "section-label",
                            children: "Our Products"
                        }, void 0, false, {
                            fileName: "[project]/thinkmindlabs/pages/products.js",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                            className: "section-title",
                            style: {
                                fontSize: 'clamp(48px, 6vw, 80px)',
                                marginBottom: 12
                            },
                            children: [
                                "One problem.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/products.js",
                                    lineNumber: 102,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("em", {
                                    children: "Solved perfectly."
                                }, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/products.js",
                                    lineNumber: 102,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/thinkmindlabs/pages/products.js",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "section-body",
                            children: "Every ThinkMindLabs product is born to solve a single business problem with precision. SaaS, PaaS, or sovereign enterprise deployment — choose the model that fits."
                        }, void 0, false, {
                            fileName: "[project]/thinkmindlabs/pages/products.js",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/thinkmindlabs/pages/products.js",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/thinkmindlabs/pages/products.js",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "section",
                style: {
                    paddingTop: 24,
                    paddingBottom: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: 16,
                            marginBottom: 16
                        },
                        className: "delivery-grid",
                        children: DELIVERY.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'var(--color-bg-elevated)',
                                    border: '1px solid var(--color-border)',
                                    borderRadius: 'var(--radius-xl)',
                                    padding: '16px 18px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 28,
                                            marginBottom: 14
                                        },
                                        children: d.icon
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/products.js",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 16,
                                            fontWeight: 700,
                                            color: 'var(--color-text-primary)',
                                            marginBottom: 8,
                                            letterSpacing: '-0.01em'
                                        },
                                        children: d.title
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/products.js",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 14,
                                            color: 'var(--color-text-secondary)',
                                            lineHeight: 1.65
                                        },
                                        children: d.desc
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/products.js",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, d.title, true, {
                                fileName: "[project]/thinkmindlabs/pages/products.js",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/products.js",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/thinkmindlabs/pages/products.js",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/thinkmindlabs/pages/products.js",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 28
                        },
                        children: PRODUCTS.map((product, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                                    gap: 24,
                                    alignItems: 'center'
                                },
                                className: "product-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            order: i % 2 === 0 ? 0 : 1,
                                            borderRadius: 'var(--radius-xl)',
                                            overflow: 'hidden',
                                            aspectRatio: '4/3',
                                            background: '#111',
                                            position: 'relative'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                src: product.image,
                                                alt: product.title,
                                                style: {
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    display: 'block'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/thinkmindlabs/pages/products.js",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this),
                                            product.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    top: 16,
                                                    left: 16,
                                                    background: 'rgba(0,0,0,0.65)',
                                                    backdropFilter: 'blur(8px)',
                                                    border: `1px solid ${product.accent}44`,
                                                    borderRadius: 999,
                                                    padding: '5px 14px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 11,
                                                        fontFamily: 'var(--font-mono)',
                                                        color: product.accent,
                                                        letterSpacing: '0.04em'
                                                    },
                                                    children: product.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/thinkmindlabs/pages/products.js",
                                                    lineNumber: 136,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/thinkmindlabs/pages/products.js",
                                                lineNumber: 135,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/thinkmindlabs/pages/products.js",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            order: i % 2 === 0 ? 1 : 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "card-tag",
                                                style: {
                                                    color: product.tagColor,
                                                    background: product.tagBg,
                                                    marginBottom: 12,
                                                    display: 'inline-block'
                                                },
                                                children: product.tag
                                            }, void 0, false, {
                                                fileName: "[project]/thinkmindlabs/pages/products.js",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontFamily: 'var(--font-product)',
                                                    fontSize: 'clamp(36px, 4vw, 52px)',
                                                    fontWeight: 800,
                                                    letterSpacing: '-0.03em',
                                                    marginBottom: 12,
                                                    lineHeight: 1.05
                                                },
                                                children: product.title
                                            }, void 0, false, {
                                                fileName: "[project]/thinkmindlabs/pages/products.js",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: 16,
                                                    fontWeight: 600,
                                                    color: product.tagColor,
                                                    marginBottom: 16,
                                                    letterSpacing: '-0.01em'
                                                },
                                                children: product.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/thinkmindlabs/pages/products.js",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: 15,
                                                    color: 'var(--color-text-secondary)',
                                                    lineHeight: 1.75,
                                                    marginBottom: 16
                                                },
                                                children: product.desc
                                            }, void 0, false, {
                                                fileName: "[project]/thinkmindlabs/pages/products.js",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                                style: {
                                                    listStyle: 'none',
                                                    padding: 0,
                                                    margin: '0 0 32px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 10
                                                },
                                                children: product.features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                        style: {
                                                            fontSize: 14,
                                                            color: 'var(--color-text-secondary)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 10
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    width: 6,
                                                                    height: 6,
                                                                    borderRadius: '50%',
                                                                    background: product.accent,
                                                                    flexShrink: 0
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/thinkmindlabs/pages/products.js",
                                                                lineNumber: 149,
                                                                columnNumber: 25
                                                            }, this),
                                                            f
                                                        ]
                                                    }, f, true, {
                                                        fileName: "[project]/thinkmindlabs/pages/products.js",
                                                        lineNumber: 148,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/thinkmindlabs/pages/products.js",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 12,
                                                    alignItems: 'center',
                                                    flexWrap: 'wrap'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                        href: product.url,
                                                        target: product.url.startsWith('http') ? '_blank' : '_self',
                                                        rel: "noopener",
                                                        style: {
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: 8,
                                                            padding: '12px 24px',
                                                            borderRadius: 999,
                                                            background: product.accent,
                                                            color: product.accent === '#ffdd00' ? '#000' : '#fff',
                                                            fontSize: 14,
                                                            fontWeight: 600,
                                                            textDecoration: 'none',
                                                            transition: 'opacity 0.2s'
                                                        },
                                                        children: [
                                                            product.urlLabel,
                                                            " →"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/thinkmindlabs/pages/products.js",
                                                        lineNumber: 155,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: 'var(--font-mono)',
                                                            fontSize: 11,
                                                            color: product.status === 'Live' ? '#00e5a0' : product.status === 'Coming Soon' ? '#ffdd00' : 'var(--color-text-muted)',
                                                            letterSpacing: '0.05em',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: [
                                                            product.status === 'Live' ? '● ' : '○ ',
                                                            product.status
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/thinkmindlabs/pages/products.js",
                                                        lineNumber: 158,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/thinkmindlabs/pages/products.js",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/thinkmindlabs/pages/products.js",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, product.title, true, {
                                fileName: "[project]/thinkmindlabs/pages/products.js",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/products.js",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/thinkmindlabs/pages/products.js",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/thinkmindlabs/pages/products.js",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "cta-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "cta-title",
                            children: [
                                "Need a custom",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/products.js",
                                    lineNumber: 172,
                                    columnNumber: 50
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("em", {
                                    children: "enterprise deployment?"
                                }, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/products.js",
                                    lineNumber: 172,
                                    columnNumber: 56
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/thinkmindlabs/pages/products.js",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "cta-subtitle",
                            children: "We build sovereign AI stacks for enterprises. Your infrastructure, your data, your AI."
                        }, void 0, false, {
                            fileName: "[project]/thinkmindlabs/pages/products.js",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 12,
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "btn btn-orange",
                                style: {
                                    padding: '14px 32px',
                                    fontSize: 15
                                },
                                children: "Talk to Our Team →"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/products.js",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/thinkmindlabs/pages/products.js",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/thinkmindlabs/pages/products.js",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/thinkmindlabs/pages/products.js",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 768px) {
          .product-row { grid-template-columns: 1fr !important; }
          .product-row > div { order: unset !important; }
          .delivery-grid { grid-template-columns: 1fr !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/thinkmindlabs/pages/products.js",
                lineNumber: 180,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__d93a66ae._.js.map