module.exports = [
"[project]/thinkmindlabs/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thinkmindlabs/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thinkmindlabs/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
;
const HERO_LINES = [
    {
        top: 'Build with AI.',
        mid: 'Build for AI.',
        bot: 'Build to integrate.'
    },
    {
        top: 'AI Workers.',
        mid: 'Human Vision.',
        bot: 'Real Results.'
    },
    {
        top: 'Sovereign AI.',
        mid: 'Your Stack.',
        bot: 'Your Control.'
    },
    {
        top: 'Deploy in',
        mid: 'Minutes.',
        bot: 'Not Months.'
    },
    {
        top: 'Born to perform.',
        mid: 'Built for',
        bot: 'Enterprise.'
    }
];
const PRODUCTS = [
    {
        year: '2024',
        category: 'Voice & Text AI Agent · SaaS',
        title: 'OpenVoce.ai',
        bg: '#ff6200',
        textColor: '#000000',
        image: 'https://framerusercontent.com/images/cak7U7dY4h898WLby7suvljdOcA.jpg?width=1200',
        url: 'https://openvoce.ai'
    },
    {
        year: '2024',
        category: 'Enterprise AI Voice Stack · PaaS',
        title: 'Pravakta.ai',
        bg: '#0a0a1a',
        textColor: '#7c6fff',
        image: 'https://framerusercontent.com/images/xKHWSysrgFe1ub1CxmcYLHQdpc.jpg?width=800',
        url: 'https://pravakta.ai'
    },
    {
        year: '2025',
        category: 'Retail Conversational AI · PaaS',
        title: 'TalkBuy.ai',
        bg: '#00261a',
        textColor: '#00e5a0',
        image: 'https://framerusercontent.com/images/v2Cxh5gAzf3y5i5rvV7stpdreY.jpg?width=800',
        url: 'https://talkbuy.ai'
    },
    {
        year: '2025',
        category: 'Clinical AI Agent · Enterprise',
        title: 'AgentForDoc.ai',
        bg: '#001a2e',
        textColor: '#38bdf8',
        image: 'https://framerusercontent.com/images/B4iHZ4n8YkDGgjtcjPiGagMwMzA.jpg?width=800',
        url: 'https://agentfordoc.ai'
    }
];
const MARQUEE_ITEMS = [
    'OpenVoce.ai',
    'Pravakta.ai',
    'TalkBuy.ai',
    'AgentForDoc.ai',
    'Voice AI',
    'Generative AI',
    'Sovereign AI Stack',
    'AI Native',
    'OpenVoce.ai',
    'Pravakta.ai',
    'TalkBuy.ai',
    'AgentForDoc.ai',
    'Voice AI',
    'Generative AI',
    'Sovereign AI Stack',
    'AI Native'
];
const PILLARS = [
    {
        num: '01',
        icon: '🎙️',
        title: 'Voice-First AI',
        desc: 'Every product we ship starts with voice as the primary interface. We believe the future of human-AI interaction is spoken, not typed.'
    },
    {
        num: '02',
        icon: '⚡',
        title: 'Deploy in Minutes',
        desc: 'Our agents are born, trained and ready. From zero to live AI agent in under 5 minutes. No ML expertise needed.'
    },
    {
        num: '03',
        icon: '🏛️',
        title: 'Sovereign by Design',
        desc: 'Your data, your infrastructure, your AI. Pravakta\'s enterprise stack runs entirely on infrastructure you own and control.'
    },
    {
        num: '04',
        icon: '🔗',
        title: 'Integrates Everywhere',
        desc: 'WebRTC, SIP, CRM, ERP, HIS — our agents plug into your existing stack. Build with AI, build for AI, build to integrate.'
    }
];
function FolderCard({ product, index, openIndex, setOpenIndex }) {
    const isOpen = openIndex === index;
    const isDark = product.textColor === '#000000';
    const metaColor = isDark ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.4)';
    const dividerColor = isDark ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.08)';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        onClick: ()=>setOpenIndex(isOpen ? null : index),
        style: {
            background: product.bg,
            borderRadius: 20,
            overflow: 'hidden',
            cursor: 'pointer',
            boxShadow: isOpen ? '0 40px 100px rgba(0,0,0,0.5)' : '0 2px 16px rgba(0,0,0,0.2)',
            transition: 'box-shadow 0.45s cubic-bezier(0.23,1,0.32,1)',
            userSelect: 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    padding: '10px 18px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: `1px solid ${dividerColor}`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: 'var(--font-mono)',
                            fontSize: 12,
                            color: metaColor,
                            letterSpacing: '0.04em'
                        },
                        children: product.year
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/index.js",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: 'var(--font-mono)',
                            fontSize: 12,
                            color: metaColor,
                            letterSpacing: '0.04em'
                        },
                        children: product.category
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/index.js",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/thinkmindlabs/pages/index.js",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    padding: '22px 28px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        style: {
                            fontFamily: 'var(--font-product)',
                            fontSize: 'clamp(28px, 4vw, 48px)',
                            letterSpacing: '-0.03em',
                            fontWeight: 800,
                            color: product.textColor,
                            lineHeight: 1,
                            margin: 0
                        },
                        children: product.title
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/index.js",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            transform: isOpen ? 'rotate(-45deg)' : 'rotate(0deg)',
                            transition: 'transform 0.45s cubic-bezier(0.23,1,0.32,1)',
                            flexShrink: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                            width: "30",
                            height: "30",
                            viewBox: "0 0 30 30",
                            fill: "none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                d: "M7 23L23 7M23 7H9M23 7V21",
                                stroke: product.textColor,
                                strokeWidth: "2.4",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/index.js",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/thinkmindlabs/pages/index.js",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/index.js",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/thinkmindlabs/pages/index.js",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    maxHeight: isOpen ? '500px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.6s cubic-bezier(0.23,1,0.32,1)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'relative'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                            src: product.image,
                            alt: product.title,
                            style: {
                                width: '100%',
                                height: 400,
                                objectFit: 'cover',
                                display: 'block',
                                transform: isOpen ? 'scale(1)' : 'scale(1.06)',
                                transition: 'transform 0.65s cubic-bezier(0.23,1,0.32,1)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/thinkmindlabs/pages/index.js",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '55%',
                                background: `linear-gradient(to bottom, transparent, ${product.bg})`,
                                pointerEvents: 'none'
                            }
                        }, void 0, false, {
                            fileName: "[project]/thinkmindlabs/pages/index.js",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                bottom: 24,
                                left: 28,
                                right: 28,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen ? 'translateY(0)' : 'translateY(14px)',
                                transition: 'opacity 0.3s ease 0.25s, transform 0.3s ease 0.25s'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: product.url,
                                target: "_blank",
                                rel: "noopener",
                                onClick: (e)=>e.stopPropagation(),
                                style: {
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    padding: '10px 22px',
                                    borderRadius: 999,
                                    background: 'rgba(0,0,0,0.4)',
                                    backdropFilter: 'blur(14px)',
                                    color: '#fff',
                                    fontSize: 13,
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    border: '1px solid rgba(255,255,255,0.18)'
                                },
                                children: [
                                    "Visit ",
                                    product.title,
                                    " →"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/index.js",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/thinkmindlabs/pages/index.js",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/thinkmindlabs/pages/index.js",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/thinkmindlabs/pages/index.js",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/thinkmindlabs/pages/index.js",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
function Home() {
    const heroRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const [lineIndex, setLineIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('visible');
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const VISIBLE = 3200, EXIT = 500, ENTER = 500;
        const cycle = ()=>{
            setPhase('exit');
            setTimeout(()=>{
                setLineIndex((i)=>(i + 1) % HERO_LINES.length);
                setPhase('enter');
                setTimeout(()=>setPhase('visible'), ENTER);
            }, EXIT);
        };
        const t = setInterval(cycle, VISIBLE + EXIT + ENTER);
        return ()=>clearInterval(t);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const el = heroRef.current;
        if (!el) return;
        const onMove = (e)=>{
            const r = el.getBoundingClientRect();
            el.style.setProperty('--mouse-x', `${((e.clientX - r.left) / r.width - 0.5) * 30}px`);
            el.style.setProperty('--mouse-y', `${((e.clientY - r.top) / r.height - 0.5) * 30}px`);
        };
        el.addEventListener('mousemove', onMove);
        return ()=>el.removeEventListener('mousemove', onMove);
    }, []);
    const current = HERO_LINES[lineIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "ThinkMindLabs — AI Lab. Born to Build."
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/index.js",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "ThinkMindLabs is an AI Lab building deployment-ready AI products. OpenVoce.ai, Pravakta.ai, TalkBuy.ai, AgentForDoc.ai — AI that works from minute one."
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/index.js",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/thinkmindlabs/pages/index.js",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "hero",
                ref: heroRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "hero-bg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "hero-bg-gradient"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/index.js",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "hero-bg-grid"
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/index.js",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/thinkmindlabs/pages/index.js",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "hero-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "hero-badge animate-in",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "hero-badge-dot"
                                        }, void 0, false, {
                                            fileName: "[project]/thinkmindlabs/pages/index.js",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        "AI Lab · 5 Humans · 100+ AI Workers"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/thinkmindlabs/pages/index.js",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                    className: "hero-title animate-in delay-1",
                                    style: {
                                        transition: 'opacity 0.45s cubic-bezier(0.23,1,0.32,1), transform 0.45s cubic-bezier(0.23,1,0.32,1)',
                                        opacity: phase === 'exit' ? 0 : 1,
                                        transform: phase === 'exit' ? 'translateY(-24px) scale(0.97)' : phase === 'enter' ? 'translateY(24px) scale(0.97)' : 'translateY(0) scale(1)'
                                    },
                                    children: [
                                        current.top,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/thinkmindlabs/pages/index.js",
                                            lineNumber: 164,
                                            columnNumber: 28
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("em", {
                                            children: current.mid
                                        }, void 0, false, {
                                            fileName: "[project]/thinkmindlabs/pages/index.js",
                                            lineNumber: 164,
                                            columnNumber: 34
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/thinkmindlabs/pages/index.js",
                                            lineNumber: 164,
                                            columnNumber: 56
                                        }, this),
                                        current.bot
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/thinkmindlabs/pages/index.js",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "hero-subtitle animate-in delay-2",
                                    children: "We are an AI-native lab of generative minds building deployment-ready products that solve one business problem — perfectly. SaaS, PaaS, and sovereign enterprise AI stacks."
                                }, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/index.js",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "hero-actions animate-in delay-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/products",
                                            className: "btn btn-orange",
                                            children: "Explore Our Products →"
                                        }, void 0, false, {
                                            fileName: "[project]/thinkmindlabs/pages/index.js",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/about",
                                            className: "btn btn-ghost",
                                            style: {
                                                border: '1px solid rgba(255,255,255,0.12)',
                                                color: 'var(--color-text-primary)'
                                            },
                                            children: "Meet the Lab"
                                        }, void 0, false, {
                                            fileName: "[project]/thinkmindlabs/pages/index.js",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/thinkmindlabs/pages/index.js",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "hero-stats animate-in delay-4",
                                    children: [
                                        {
                                            value: '4',
                                            label: 'Live Products'
                                        },
                                        {
                                            value: '5 min',
                                            label: 'To Deploy'
                                        },
                                        {
                                            value: '100+',
                                            label: 'AI Workers'
                                        },
                                        {
                                            value: '3',
                                            label: 'Delivery Models'
                                        }
                                    ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 28
                                            },
                                            children: [
                                                i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "hero-stat-divider"
                                                }, void 0, false, {
                                                    fileName: "[project]/thinkmindlabs/pages/index.js",
                                                    lineNumber: 181,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "hero-stat",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "hero-stat-value",
                                                            children: s.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/thinkmindlabs/pages/index.js",
                                                            lineNumber: 183,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "hero-stat-label",
                                                            children: s.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/thinkmindlabs/pages/index.js",
                                                            lineNumber: 184,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/thinkmindlabs/pages/index.js",
                                                    lineNumber: 182,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, s.label, true, {
                                            fileName: "[project]/thinkmindlabs/pages/index.js",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/index.js",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/thinkmindlabs/pages/index.js",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/thinkmindlabs/pages/index.js",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/thinkmindlabs/pages/index.js",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "marquee-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "marquee-track",
                    children: MARQUEE_ITEMS.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "marquee-item",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "marquee-dot"
                                }, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/index.js",
                                    lineNumber: 197,
                                    columnNumber: 51
                                }, this),
                                item
                            ]
                        }, i, true, {
                            fileName: "[project]/thinkmindlabs/pages/index.js",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/thinkmindlabs/pages/index.js",
                    lineNumber: 195,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/thinkmindlabs/pages/index.js",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                marginBottom: 16
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "section-label",
                                            children: "Our Products"
                                        }, void 0, false, {
                                            fileName: "[project]/thinkmindlabs/pages/index.js",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                            className: "section-title",
                                            children: [
                                                "One problem.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/thinkmindlabs/pages/index.js",
                                                    lineNumber: 208,
                                                    columnNumber: 57
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("em", {
                                                    children: "Solved perfectly."
                                                }, void 0, false, {
                                                    fileName: "[project]/thinkmindlabs/pages/index.js",
                                                    lineNumber: 208,
                                                    columnNumber: 63
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/thinkmindlabs/pages/index.js",
                                            lineNumber: 208,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/thinkmindlabs/pages/index.js",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/products",
                                    className: "btn btn-ghost",
                                    style: {
                                        border: '1px solid var(--color-border)',
                                        flexShrink: 0,
                                        color: 'var(--color-text-secondary)'
                                    },
                                    children: "View all →"
                                }, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/index.js",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/thinkmindlabs/pages/index.js",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: 11,
                                fontFamily: 'var(--font-mono)',
                                color: 'var(--color-text-muted)',
                                marginBottom: 14,
                                letterSpacing: '0.05em'
                            },
                            children: "↓ CLICK ANY CARD TO EXPAND"
                        }, void 0, false, {
                            fileName: "[project]/thinkmindlabs/pages/index.js",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 10
                            },
                            children: PRODUCTS.map((product, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FolderCard, {
                                    product: product,
                                    index: i,
                                    openIndex: openIndex,
                                    setOpenIndex: setOpenIndex
                                }, product.title, false, {
                                    fileName: "[project]/thinkmindlabs/pages/index.js",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/thinkmindlabs/pages/index.js",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/thinkmindlabs/pages/index.js",
                    lineNumber: 204,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/thinkmindlabs/pages/index.js",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "section",
                style: {
                    background: 'linear-gradient(to bottom, transparent, rgba(255,98,0,0.02), transparent)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "two-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "section-label",
                                        children: "How We Build"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/index.js",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "section-title",
                                        children: [
                                            "Generative minds.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/thinkmindlabs/pages/index.js",
                                                lineNumber: 227,
                                                columnNumber: 62
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("em", {
                                                children: "Deployment-ready"
                                            }, void 0, false, {
                                                fileName: "[project]/thinkmindlabs/pages/index.js",
                                                lineNumber: 227,
                                                columnNumber: 68
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/thinkmindlabs/pages/index.js",
                                                lineNumber: 227,
                                                columnNumber: 93
                                            }, this),
                                            "products."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/thinkmindlabs/pages/index.js",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "section-body",
                                        style: {
                                            marginBottom: 14
                                        },
                                        children: "Fresh out of college, AI-native, and obsessed with shipping. Our mantra is simple — Build with AI, Build for AI, Build to integrate with AI. Every product solves one problem, perfectly, for businesses of all sizes."
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/index.js",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about",
                                        className: "btn btn-orange",
                                        children: "Meet the Team →"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/index.js",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/index.js",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "feature-list",
                                children: PILLARS.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: "feature-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "feature-num",
                                                children: f.num
                                            }, void 0, false, {
                                                fileName: "[project]/thinkmindlabs/pages/index.js",
                                                lineNumber: 236,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "feature-content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "feature-title",
                                                        children: f.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/thinkmindlabs/pages/index.js",
                                                        lineNumber: 238,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "feature-desc",
                                                        children: f.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/thinkmindlabs/pages/index.js",
                                                        lineNumber: 239,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/thinkmindlabs/pages/index.js",
                                                lineNumber: 237,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "feature-icon",
                                                children: f.icon
                                            }, void 0, false, {
                                                fileName: "[project]/thinkmindlabs/pages/index.js",
                                                lineNumber: 241,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, f.num, true, {
                                        fileName: "[project]/thinkmindlabs/pages/index.js",
                                        lineNumber: 235,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/index.js",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/thinkmindlabs/pages/index.js",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/thinkmindlabs/pages/index.js",
                    lineNumber: 223,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/thinkmindlabs/pages/index.js",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container",
                    style: {
                        maxWidth: 860
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "quote-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "quote-text",
                                children: "We are not a services company. We are not a consultancy. We are an AI Lab that ships products. Every product we build solves one problem, perfectly — and we put it to work in your business from day one."
                            }, void 0, false, {
                                fileName: "[project]/thinkmindlabs/pages/index.js",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "quote-author",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "quote-avatar",
                                        children: "🧠"
                                    }, void 0, false, {
                                        fileName: "[project]/thinkmindlabs/pages/index.js",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "quote-name",
                                                children: "ThinkMindLabs Founders"
                                            }, void 0, false, {
                                                fileName: "[project]/thinkmindlabs/pages/index.js",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "quote-role",
                                                children: "100+ years of combined enterprise experience · Gurugram, India"
                                            }, void 0, false, {
                                                fileName: "[project]/thinkmindlabs/pages/index.js",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/thinkmindlabs/pages/index.js",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thinkmindlabs/pages/index.js",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/thinkmindlabs/pages/index.js",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/thinkmindlabs/pages/index.js",
                    lineNumber: 251,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/thinkmindlabs/pages/index.js",
                lineNumber: 250,
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
                                "Ready to deploy",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/index.js",
                                    lineNumber: 270,
                                    columnNumber: 52
                                }, this),
                                "your ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("em", {
                                    children: "AI Stack?"
                                }, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/index.js",
                                    lineNumber: 270,
                                    columnNumber: 63
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/thinkmindlabs/pages/index.js",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "cta-subtitle",
                            children: "Talk to our team. An AI agent is waiting to answer your questions right now."
                        }, void 0, false, {
                            fileName: "[project]/thinkmindlabs/pages/index.js",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 12,
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thinkmindlabs$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "btn btn-orange",
                                    style: {
                                        padding: '14px 32px',
                                        fontSize: 15
                                    },
                                    children: "Talk to Us →"
                                }, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/index.js",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: "https://pravakta.ai",
                                    target: "_blank",
                                    rel: "noopener",
                                    className: "btn btn-ghost",
                                    style: {
                                        border: '1px solid var(--color-border)',
                                        padding: '14px 32px',
                                        fontSize: 15,
                                        color: 'var(--color-text-primary)'
                                    },
                                    children: "Try Pravakta.ai Voice Agent"
                                }, void 0, false, {
                                    fileName: "[project]/thinkmindlabs/pages/index.js",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/thinkmindlabs/pages/index.js",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/thinkmindlabs/pages/index.js",
                    lineNumber: 269,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/thinkmindlabs/pages/index.js",
                lineNumber: 268,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__684b7321._.js.map