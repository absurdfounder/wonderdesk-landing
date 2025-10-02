"use client";

import React, { useState } from "react";

type SocialProvider = 'google' | 'discord' | 'telegram' | 'github' | 'twitch' | 'steam' | 'farcaster' | 'line' | 'x' | 'tiktok' | 'facebook' | 'apple';
type Wallet = 'metamask' | 'rainbow' | 'rabby' | 'okx' | 'bitget' | 'zerion' | 'coinbaseWallet' | 'trustWallet' | 'binance' | 'safepal';

export default function AuthLanding() {
    const [showWallets, setShowWallets] = useState(false);
    const [showBuilder, setShowBuilder] = useState(false);

    // Builder state
    const [socialProviders, setSocialProviders] = useState({
        google: true,
        discord: true,
        telegram: true,
        github: false,
        twitch: false,
        steam: false,
        farcaster: true,
        line: false,
        x: true,
        tiktok: false,
        facebook: false,
        apple: false,
    });
    const [showEmail, setShowEmail] = useState(true);
    const [showPhone, setShowPhone] = useState(true);
    const [showPasskey, setShowPasskey] = useState(true);
    const [showWallet, setShowWallet] = useState(true);
    const [showGuest, setShowGuest] = useState(false);
    const [showCoinbase, setShowCoinbase] = useState(false);

    const [wallets, setWallets] = useState({
        metamask: true,
        rainbow: true,
        rabby: true,
        okx: true,
        bitget: false,
        zerion: true,
        coinbaseWallet: true,
        trustWallet: true,
        binance: false,
        safepal: false,
    });

    const [activeTab, setActiveTab] = useState('modal');
    const [walletsExpanded, setWalletsExpanded] = useState(true);
    const [modalOptionsExpanded, setModalOptionsExpanded] = useState(false);
    const [appearanceExpanded, setAppearanceExpanded] = useState(false);
    const [previewShowWallets, setPreviewShowWallets] = useState(false);

    const toggleSocialProvider = (provider: SocialProvider) => {
        setSocialProviders(prev => ({ ...prev, [provider]: !prev[provider] }));
    };

    const toggleWallet = (wallet: Wallet) => {
        setWallets(prev => ({ ...prev, [wallet]: !prev[wallet] }));
    };

    const getEnabledWalletsList = () => {
        return Object.entries(wallets).filter(([_, enabled]) => enabled);
    };

    return (
        <div 
            className="min-h-screen flex flex-col"
            style={{
                backgroundImage: "linear-gradient(rgb(255 255 255 / 59%), rgba(255, 255, 255, 0)), url(https://dazzling-cat.netlify.app/cloudbackground.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Compact Navbar */}
            <nav className="bg-white/80 backdrop-blur-md py-3 px-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="https://dazzling-cat.netlify.app/wonderauth.png" className="h-7" alt="WonderAuth" />
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="text-slate-600 hover:text-slate-900 font-medium transition-colors text-sm">Sign in</button>
                        <button className="px-4 py-2 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-sm text-sm">Get Started</button>
                    </div>
                </div>
            </nav>

            {/* Main Content - Side by Side */}
            <div className="flex-1 flex items-center overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Headline Section */}
                        <div>
                            <h1 className="font-funneldisplay text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tighter tracking-tighter mb-4">
                                <span className="text-4xl sm:text-5xl gradient-text-accent" style={{
                                    background: 'linear-gradient(to right, rgb(5 132 155), rgb(18 179 208)) text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>Web3</span> Auth That Doesn’t Drain Your Treasury.
                            </h1>
                            <p className="text-base text-slate-500 sm:text-lg md:text-lg mb-6 max-w-xl">
                                Stop building auth from scratch. Add social logins, magic links, passkeys, and 2FA to your app in minutes. Secure, scalable, and developer-friendly.
                            </p>
                            <div className="flex flex-col gap-3">
                                <button 
                                    onClick={() => setShowBuilder(true)}
                                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out rounded-md shadow bg-slate-700 hover:bg-slate-900 w-fit cursor-pointer"
                                >
                                    <strong className="mr-1">Create a sign box</strong>
                                </button>
                                <p className="text-sm text-slate-700">
                                    <strong>Free</strong> for up to 1,000 users. No credit card required.
                                </p>
                                <p className="text-sm text-slate-500 pt-2">
                                    <span className="font-semibold text-slate-700">8KB total bundle size</span> • Supports 20+ providers • Zero config
                                </p>
                            </div>
                        </div>

                        {/* Right - Auth Widget */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="bg-white/50 backdrop-blur-md rounded-2xl p-4 w-full max-w-md">
                                <div className="text-center mb-3">
                                    <p className="text-sm font-semibold text-slate-500 mb-2 font-funneldisplay">TRY DEMO</p>
                                </div>

                                <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 relative">
                                    {showWallets && (
                                        <div className="flex items-center justify-between mb-4">
                                            <button
                                                onClick={() => setShowWallets(false)}
                                                className="flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                                <h4 className="text-lg font-bold text-slate-900 ml-2">Sign in</h4>
                                            </button>
                                            <button className="text-slate-400 hover:text-slate-600 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    )}

                                    {!showWallets ? (
                                        <>
                                            {!showWallets && <h4 className="text-xl font-bold text-slate-900 mb-4">Sign in</h4>}

                                            <div className="grid grid-cols-4 gap-2 mb-4">
                                                <button className="aspect-square flex items-center justify-center bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all">
                                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                                                    </svg>
                                                </button>
                                                <button className="aspect-square flex items-center justify-center bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:shadow-md transition-all">
                                                    <svg className="w-5 h-5 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                                                    </svg>
                                                </button>
                                                <button className="aspect-square flex items-center justify-center border border-slate-200 rounded-xl hover:bg-slate-50 hover:shadow-md transition-all">
                                                    <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                    </svg>
                                                </button>
                                                <button className="aspect-square flex items-center justify-center bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:shadow-md transition-all">
                                                    <svg className="w-5 h-5 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="grid grid-cols-2 gap-2 mb-4">
                                                <button className="flex items-center justify-center gap-2 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:shadow-md transition-all">
                                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                                    </svg>
                                                    <span className="font-medium text-slate-700 text-sm">Apple</span>
                                                </button>
                                                <button className="flex items-center justify-center gap-2 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:shadow-md transition-all">
                                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                    <span className="font-medium text-slate-700 text-sm">GitHub</span>
                                                </button>
                                            </div>

                                            <button className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:shadow-md transition-all mb-2">
                                                <span className="text-slate-500 font-medium text-sm">Email address</span>
                                                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>

                                            <button className="w-full flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:shadow-md transition-all mb-3">
                                                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                <span className="text-slate-700 font-medium text-sm">Phone number</span>
                                            </button>

                                            <div className="relative mb-3">
                                                <div className="absolute inset-0 flex items-center">
                                                    <div className="w-full border-t border-slate-200"></div>
                                                </div>
                                                <div className="relative flex justify-center">
                                                    <span className="px-3 bg-white text-slate-400 text-xs font-medium">OR</span>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => setShowWallets(true)}
                                                className="w-full flex items-center justify-start gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:shadow-md transition-all mb-3"
                                            >
                                                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                                </svg>
                                                <span className="text-slate-700 font-medium text-sm">Connect a Wallet</span>
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <div className="space-y-2 mb-3 max-h-96 overflow-y-auto">
                                                {['MetaMask', 'Coinbase Wallet', 'Rainbow', 'Zerion', 'Rabby', 'OKX Wallet'].map((wallet) => (
                                                    <button key={wallet} className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:shadow-md transition-all">
                                                        <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M22.6 7.8l-10-5c-.4-.2-.8-.2-1.2 0l-10 5c-.4.2-.6.6-.6 1s.2.8.6 1l10 5c.2.1.4.1.6.1s.4 0 .6-.1l10-5c.4-.2.6-.6.6-1s-.2-.8-.6-1z" />
                                                            </svg>
                                                        </div>
                                                        <span className="text-base font-semibold text-slate-900">{wallet}</span>
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="flex items-center justify-between text-xs mb-2">
                                                <span className="text-slate-500">New to wallets?</span>
                                                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">Get started</a>
                                            </div>
                                        </>
                                    )}

                                    <div className="text-center">
                                        <p className="text-xs text-slate-400 font-medium flex items-center justify-center gap-1 filter grayscale">
                                            Powered by
                                            <img src="https://dazzling-cat.netlify.app/wonderauth.png" className="h-4 opacity-75" alt="WonderAuth" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Builder Modal */}
            {showBuilder && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl h-[90vh] flex flex-col">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900">Auth Builder</h2>
                            <button
                                onClick={() => setShowBuilder(false)}
                                className="text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex-1 flex overflow-hidden">
                            {/* Left Panel - Configuration */}
                            <div className="w-1/3 border-r border-slate-200 overflow-y-auto p-6">
                                <div className="mb-6">
                                    <button
                                        onClick={() => setWalletsExpanded(!walletsExpanded)}
                                        className="w-full flex items-center justify-between mb-4 text-left"
                                    >
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                            </svg>
                                            <span className="font-semibold text-slate-900">Wallets</span>
                                        </div>
                                        <svg className={`w-5 h-5 transition-transform ${walletsExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {walletsExpanded && (
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm font-medium text-slate-700">In-App Wallet</span>
                                                </div>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-700"></div>
                                                </label>
                                            </div>

                                            <div className="grid grid-cols-3 gap-2">
                                                {Object.entries({
                                                    google: 'Google',
                                                    discord: 'Discord',
                                                    telegram: 'Telegram',
                                                    github: 'Github',
                                                    twitch: 'Twitch',
                                                    steam: 'Steam',
                                                    farcaster: 'Farcaster',
                                                    x: 'X',
                                                    tiktok: 'Tiktok',
                                                    facebook: 'Facebook',
                                                    apple: 'Apple',
                                                }).map(([key, label]) => (
                                                    <label key={key} className="flex items-center gap-2 text-sm cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            checked={socialProviders[key as SocialProvider]}
                                                            onChange={() => toggleSocialProvider(key as SocialProvider)}
                                                            className="w-4 h-4 rounded border-slate-300 text-slate-700 focus:ring-slate-700"
                                                        />
                                                        <span className="text-slate-700">{label}</span>
                                                    </label>
                                                ))}
                                            </div>

                                            <div className="space-y-2 pt-2">
                                                <label className="flex items-center gap-2 text-sm cursor-pointer">
                                                    <input type="checkbox" checked={showEmail} onChange={() => setShowEmail(!showEmail)} className="w-4 h-4 rounded border-slate-300 text-slate-700 focus:ring-slate-700" />
                                                    <span className="text-slate-700">Email</span>
                                                </label>
                                                <label className="flex items-center gap-2 text-sm cursor-pointer">
                                                    <input type="checkbox" checked={showPasskey} onChange={() => setShowPasskey(!showPasskey)} className="w-4 h-4 rounded border-slate-300 text-slate-700 focus:ring-slate-700" />
                                                    <span className="text-slate-700">Passkey</span>
                                                </label>
                                                <label className="flex items-center gap-2 text-sm cursor-pointer">
                                                    <input type="checkbox" checked={showPhone} onChange={() => setShowPhone(!showPhone)} className="w-4 h-4 rounded border-slate-300 text-slate-700 focus:ring-slate-700" />
                                                    <span className="text-slate-700">Phone</span>
                                                </label>
                                            </div>

                                            <div className="pt-4 border-t border-slate-200">
                                                <p className="text-sm font-semibold text-slate-900 mb-3">Other Wallets</p>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {Object.entries({
                                                        metamask: 'MetaMask',
                                                        rainbow: 'Rainbow',
                                                        rabby: 'Rabby',
                                                        okx: 'OKX Wallet',
                                                        bitget: 'Bitget Wallet',
                                                        zerion: 'Zerion',
                                                        coinbaseWallet: 'Coinbase Wallet',
                                                        trustWallet: 'Trust Wallet',
                                                    }).map(([key, label]) => (
                                                        <div key={key} className="flex items-center justify-between text-sm p-2 bg-slate-50 rounded hover:bg-slate-100">
                                                            <span className="text-slate-700 text-xs">{label}</span>
                                                            <input
                                                                type="checkbox"
                                                                checked={wallets[key as Wallet]}
                                                                onChange={() => toggleWallet(key as Wallet)}
                                                                className="w-4 h-4 rounded border-slate-300 text-slate-700 focus:ring-slate-700"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Right Panel - Preview */}
                            <div className="flex-1 bg-slate-50 p-6 overflow-y-auto">
                                <div className="flex gap-2 mb-6">
                                    <button onClick={() => setActiveTab('modal')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'modal' ? 'bg-white text-slate-900 shadow' : 'text-slate-600 hover:text-slate-900'}`}>Modal</button>
                                    <button onClick={() => setActiveTab('button')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'button' ? 'bg-white text-slate-900 shadow' : 'text-slate-600 hover:text-slate-900'}`}>Button</button>
                                    <button onClick={() => setActiveTab('code')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'code' ? 'bg-white text-slate-900 shadow' : 'text-slate-600 hover:text-slate-900'}`}>Code</button>
                                </div>

                                {activeTab === 'modal' && (
                                    <div className="flex items-center justify-center min-h-[600px]">
                                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 w-full max-w-md relative">
                                            {previewShowWallets && (
                                                <button onClick={() => setPreviewShowWallets(false)} className="absolute top-6 left-6 text-slate-400 hover:text-slate-600 transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                    </svg>
                                                </button>
                                            )}

                                            <button className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>

                                            <div className="mb-8">
                                                <h4 className="text-2xl font-bold text-slate-900">Sign in</h4>
                                            </div>

                                            {!previewShowWallets ? (
                                                <>
                                                    {(socialProviders.google || socialProviders.discord || socialProviders.telegram || socialProviders.x) && (
                                                        <div className="grid grid-cols-4 gap-3 mb-6">
                                                            {socialProviders.google && (
                                                                <button className="aspect-square flex items-center justify-center bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                                                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                                                                    </svg>
                                                                </button>
                                                            )}
                                                            {socialProviders.discord && (
                                                                <button className="aspect-square flex items-center justify-center bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                                                                    <svg className="w-6 h-6 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                                                                    </svg>
                                                                </button>
                                                            )}
                                                            {socialProviders.x && (
                                                                <button className="aspect-square flex items-center justify-center border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                                                                    <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                                    </svg>
                                                                </button>
                                                            )}
                                                        </div>
                                                    )}

                                                    {showEmail && (
                                                        <button className="w-full flex items-center justify-between px-5 py-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all mb-3">
                                                            <span className="text-slate-500 font-medium">Email address</span>
                                                            <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </button>
                                                    )}

                                                    {showPhone && (
                                                        <button className="w-full flex items-center gap-3 px-5 py-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all mb-6">
                                                            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                            </svg>
                                                            <span className="text-slate-700 font-medium">Phone number</span>
                                                        </button>
                                                    )}

                                                    {showWallet && getEnabledWalletsList().length > 0 && (
                                                        <>
                                                            <div className="relative mb-6">
                                                                <div className="absolute inset-0 flex items-center">
                                                                    <div className="w-full border-t border-slate-200"></div>
                                                                </div>
                                                                <div className="relative flex justify-center">
                                                                    <span className="px-4 bg-white text-slate-400 text-sm font-medium">OR</span>
                                                                </div>
                                                            </div>

                                                            <button
                                                                onClick={() => setPreviewShowWallets(true)}
                                                                className="w-full flex items-center justify-center gap-3 px-5 py-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all mb-6"
                                                            >
                                                                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                                                </svg>
                                                                <span className="text-slate-700 font-medium">Connect a Wallet</span>
                                                            </button>
                                                        </>
                                                    )}
                                                </>
                                            ) : (
                                                <>
                                                    <div className="space-y-2 mb-6">
                                                        {getEnabledWalletsList().map(([key, _]) => (
                                                            <button key={key} className="w-full flex items-center gap-4 px-5 py-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                                                                <div className="w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                                                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M22.6 7.8l-10-5c-.4-.2-.8-.2-1.2 0l-10 5c-.4.2-.6.6-.6 1s.2.8.6 1l10 5c.2.1.4.1.6.1s.4 0 .6-.1l10-5c.4-.2.6-.6.6-1s-.2-.8-.6-1z" />
                                                                    </svg>
                                                                </div>
                                                                <span className="text-lg font-semibold text-slate-900 capitalize">
                                                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                                                </span>
                                                            </button>
                                                        ))}
                                                    </div>

                                                    <div className="flex items-center justify-between text-sm mb-4">
                                                        <span className="text-slate-500">New to wallets?</span>
                                                        <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">Get started</a>
                                                    </div>
                                                </>
                                            )}

                                            <div className="text-center">
                                                <p className="text-sm text-slate-400 font-medium flex items-center justify-center gap-1 filter grayscale">
                                                    Powered by
                                                    <img src="https://dazzling-cat.netlify.app/wonderauth.png" className="h-5 opacity-75" alt="WonderAuth" />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'button' && (
                                    <div className="flex items-center justify-center min-h-[600px]">
                                        <button className="px-8 py-4 bg-slate-700 text-white rounded-xl font-semibold text-lg hover:bg-slate-900 transition-colors shadow-lg">
                                            Sign in with Wonder
                                        </button>
                                    </div>
                                )}

                                {activeTab === 'code' && (
                                    <div className="bg-slate-900 rounded-xl p-6 text-slate-100 font-mono text-sm">
                                        <pre className="whitespace-pre-wrap">
{`import { WonderAuth } from '@wonder/auth';

export default function App() {
  return (
    <WonderAuth
      config={{
        providers: {
          social: ${JSON.stringify(Object.entries(socialProviders).filter(([_, v]) => v).map(([k]) => k), null, 10)},
          email: ${showEmail},
          phone: ${showPhone},
          passkey: ${showPasskey},
        },
        wallets: ${JSON.stringify(Object.entries(wallets).filter(([_, v]) => v).map(([k]) => k), null, 10)},
      }}
    />
  );
}`}
                                        </pre>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}