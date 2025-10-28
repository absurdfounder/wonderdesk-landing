"use client";

import React, { useState } from "react";
import { X, Wallet, ChevronDown, ArrowLeft,ArrowRight, Mail, Phone, Key, Check } from "lucide-react";
import Link from "next/link";
type SocialProvider = 'google' | 'discord' | 'telegram' | 'github' | 'twitch' | 'steam' | 'farcaster' | 'line' | 'x' | 'tiktok' | 'facebook' | 'apple';
type WalletType = 'metamask' | 'rainbow' | 'rabby' | 'okx' | 'zerion' | 'coinbaseWallet' | 'trustWallet' | 'binance' | 'safepal';

const walletLogos: Record<string, string> = {
    metamask: 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg',
    rainbow: 'https://avatars.githubusercontent.com/u/48327834?s=280&v=4',
    rabby: 'https://rabby.io/assets/images/logo-128.png',
    okx: 'https://play-lh.googleusercontent.com/N00SbjLJJrhg4hbdnkk3Llk2oedNNgCU29DvR9cpep7Lr0VkzvBkmLqajWNgFb0d7IOO=w240-h480-rw',
    coinbaseWallet: 'https://raw.githubusercontent.com/gist/taycaldwell/2291907115c0bb5589bc346661435007/raw/280eafdc84cb80ed0c60e36b4d0c563f6dca6b3e/cbw.svg',
    zerion: 'https://play-lh.googleusercontent.com/lxl3CQLYmbY7kHtMn3ehz06ebEIIxYOETf8hlWPNW6L3ZPxuhSrnIq-4k5T89gd4gA',
    trustWallet: 'https://trustwallet.com/assets/images/media/assets/TWT.png',
};

const walletNames: Record<string, string> = {
    metamask: 'MetaMask',
    rainbow: 'Rainbow',
    rabby: 'Rabby',
    okx: 'OKX Wallet',
    coinbaseWallet: 'Coinbase Wallet',
    zerion: 'Zerion',
    trustWallet: 'Trust Wallet',
};

export default function AuthLanding() {
    const [showWallets, setShowWallets] = useState(false);
    const [showBuilder, setShowBuilder] = useState(false);

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

    const [wallets, setWallets] = useState({
        metamask: true,
        rainbow: true,
        rabby: true,
        okx: true,
        zerion: true,
        coinbaseWallet: true,
        trustWallet: true,
        binance: false,
        safepal: false,
    });

    const [activeTab, setActiveTab] = useState('modal');
    const [configExpanded, setConfigExpanded] = useState(true);
    const [previewShowWallets, setPreviewShowWallets] = useState(false);

    const toggleSocialProvider = (provider: SocialProvider) => {
        setSocialProviders(prev => ({ ...prev, [provider]: !prev[provider] }));
    };

    const toggleWallet = (wallet: WalletType) => {
        setWallets(prev => ({ ...prev, [wallet]: !prev[wallet] }));
    };

    const getEnabledWalletsList = () => {
        return Object.entries(wallets).filter(([_, enabled]) => enabled);
    };

    const getSocialIconGridProviders = () => {
        return ['google', 'discord', 'telegram', 'x'].filter(key => socialProviders[key as SocialProvider]);
    };

    const getSocialButtonProviders = () => {
        return ['farcaster', 'apple', 'github', 'facebook'].filter(key => socialProviders[key as SocialProvider]);
    };

    return (
        
        <div>
        <div
            className="min-h-screen flex flex-col pb-12"
            style={{
                backgroundImage: "linear-gradient(rgb(255 255 255 / 59%), rgba(255, 255, 255, 0)), url(https://dazzling-cat.netlify.app/cloudbackground.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { 
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes slideDown {
                    from { 
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
                .animate-slideDown {
                    animation: slideDown 0.2s ease-out;
                }
            `}</style>
            {/* Navbar */}
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



            {/* SANCTUM LANDING PAGE SECTION - WHITE THEME */}
            {/* ============================================ */}

            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 mt-24">
                {/* Hero Section */}
                <div className="flex flex-col items-center text-center gap-6 pb-16">
                    <a
                        href="https://sanctum.so/quarterly"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 transition-all shadow-sm"
                    >
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        <span>$WONDER Tokenomics • Read now</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-gray-400 group-hover:translate-x-1 transition-all"
                        >
                            <path
                                d="M5 12h14M13 5l7 7-7 7"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>

                    <h1 className="max-w-2xl text-[32px] sm:text-[52px] font-semibold tracking-tight text-gray-900 leading-tight">
                        The <span className="text-emerald-500">infrastructure</span> behind
                        Solana’s biggest names.
                    </h1>
                    <p className="max-w-lg text-gray-600 text-lg">
                       Stop building auth from scratch. Add social logins, magic links, passkeys, and 2FA to your app in minutes. Secure, scalable, and developer-friendly.
                    </p>

          {/* CTA Buttons - simplified animations for immediate rendering */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 mb-2 sm:mb-2 items-center justify-center px-4 sm:px-0">
            <Link
              href="https://app.wondersites.co?ref=herolanding"
              className="flex items-center justify-center py-3 sm:py-3 px-6 sm:px-6 bg-orange-600 text-white rounded-md font-medium hover:bg-orange-700 transition-colors w-full sm:w-auto relative text-sm sm:text-base min-h-[48px] sm:min-h-auto"

            >
              <div className="relative overflow-hidden mr-2 h-5 sm:h-5">
                <div
                  className="transition-transform duration-150 whitespace-nowrap"

                >
                  Get Started for free
                </div>

              </div>
            </Link>

            <button
              data-cal-namespace="setup-call"
              data-cal-link="set-meeting/setup-call"
              data-cal-config='{"layout":"month_view"}'
              className="text-black border border-gray-600 bg-slate-100 hover:bg-slate-800 hover:text-white flex items-center justify-center px-4 py-2.5 sm:py-2.5 rounded-md transition duration-150 ease-in-out group w-full sm:w-auto text-sm sm:text-base min-h-[48px] sm:min-h-auto sm:ml-0"
            >
              <div className="flex items-center justify-center w-full">
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
                </div>




                {/* Product Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* SOL Liquid Staking */}
                    <a
                        href="https://sanctum.so/app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-all p-5 hover:shadow-md"
                    >
                        <div className="relative h-56 rounded-lg overflow-hidden border border-gray-200 mb-4">
                            <img
                                src="https://sanctum.so/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstake.02ab1725.png&w=1080&q=100"
                                alt="SOL Liquid Staking"
                                className="object-contain w-full h-full group-hover:scale-110 transition-all"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 text-emerald-600 text-sm px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                                8.94% APY
                            </div>
                        </div>
                        <h3 className="text-gray-900 text-lg font-medium mb-1">
                            SOL Liquid Staking
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Earn the best yields on your SOL, powered by Sanctum’s liquidity engine.
                        </p>
                    </a>

                    {/* Staking as a Service */}
                    <a
                        href="https://sanctum.so/staking-as-a-service"
                        className="group block rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-all p-5 hover:shadow-md"
                    >
                        <div className="relative h-56 rounded-lg overflow-hidden border border-gray-200 mb-4">
                            <img
                                src="https://sanctum.so/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsaas.5cd56fc1.png&w=3840&q=100&dpl=dpl_D9QZYgVvfe3sFucRdcFaasQw8RD7"
                                alt="Staking-as-a-Service"
                                className="object-contain w-full h-full group-hover:scale-110 transition-all"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 text-blue-500 text-sm px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                                $5M+ Partner Revenue
                            </div>
                        </div>
                        <h3 className="text-gray-900 text-lg font-medium mb-1">
                            Staking-as-a-Service
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Launch your staking solution with Sanctum’s infrastructure and earn as
                            others stake SOL with you.
                        </p>
                    </a>
                </div>

                {/* Gateway & Ironforge */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <a
                        href="https://sanctum.so/gateway"
                        className="group block rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-all p-5 hover:shadow-md"
                    >
                        <div className="relative h-56 rounded-lg overflow-hidden border border-gray-200 mb-4">
                            <img
                                src="https://sanctum.so/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgateway.9129298e.png&w=3840&q=100&dpl=dpl_D9QZYgVvfe3sFucRdcFaasQw8RD7"
                                alt="Gateway"
                                className="object-contain w-full h-full group-hover:scale-110 transition-all"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 text-purple-500 text-sm px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                                350k+ tx delivered
                            </div>
                        </div>
                        <h3 className="text-gray-900 text-lg font-medium mb-1">Gateway</h3>
                        <p className="text-gray-600 text-sm">
                            Send Solana transactions faster and more reliably.
                        </p>
                    </a>

                    <a
                        href="https://sanctum.so/ironforge"
                        className="group block rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-all p-5 hover:shadow-md"
                    >
                        <div className="relative h-56 rounded-lg overflow-hidden border border-gray-200 mb-4">
                            <img
                                src="https://sanctum.so/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fironforge.724f361c.png&w=3840&q=100&dpl=dpl_D9QZYgVvfe3sFucRdcFaasQw8RD7"
                                alt="Ironforge"
                                className="object-contain w-full h-full group-hover:scale-110 transition-all"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 text-orange-500 text-sm px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                                300M+ daily requests
                            </div>
                        </div>
                        <h3 className="text-gray-900 text-lg font-medium mb-1">Ironforge</h3>
                        <p className="text-gray-600 text-sm">
                            The complete Web3 DevOps platform for Solana builders.
                        </p>
                    </a>
                </div>
            </div>






        </div>


<div>

            {/* Main Content */}
            <div className="flex-1 flex items-center overflow-hidden bg-gray-900 py-8">
                <div className="max-w-6xl mx-auto px-6 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Headline */}
                        <div>
                            <h1 className="font-funneldisplay text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tighter tracking-tighter mb-4">
                               Customize your <span className="text-4xl sm:text-5xl gradient-text-accent" style={{
                                    background: 'linear-gradient(to right, rgb(5, 132, 155), rgb(18, 179, 208))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>Auth</span>
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
                                    <strong>Free</strong> for up to 10,000 users. No credit card required.
                                </p>
                                <p className="text-sm text-slate-500 pt-2">
                                    <span className="font-semibold text-slate-700">8KB total bundle size</span> • Supports 20+ providers • Zero config
                                </p>
                            </div>
                        </div>

                        {/* Right - Auth Widget Demo */}
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
                                                <ArrowLeft className="w-5 h-5" />
                                                <h4 className="text-lg font-bold text-slate-900 ml-2">Sign in</h4>
                                            </button>
                                            <button className="text-slate-400 hover:text-slate-600 transition-colors">
                                                <X className="w-5 h-5" />
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
                                                    <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
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
                                                <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>

                                            <button className="w-full flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:shadow-md transition-all mb-3">
                                                <Phone className="w-6 h-6 text-blue-600" />
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
                                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:shadow-md transition-all mb-3"
                                            >
                                                <Wallet className="w-6 h-6 text-blue-600" />
                                                <span className="text-slate-700 font-medium text-sm">Connect a Wallet</span>
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <div className="space-y-2 mb-3 max-h-96 overflow-y-auto">
                                                {Object.entries(walletLogos).slice(0, 6).map(([key, logo]) => (
                                                    <button key={key} className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:shadow-md transition-all">
                                                        <img src={logo} alt={key} className="w-10 h-10 rounded-lg" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect fill="%23ddd" width="40" height="40"/%3E%3C/svg%3E' }} />
                                                        <span className="text-base font-semibold text-slate-900">{walletNames[key] || key}</span>
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
                                            Protected by
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
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl h-full flex flex-col animate-slideUp">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900">Auth Builder</h2>
                            <button
                                onClick={() => setShowBuilder(false)}
                                className="text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex-1 flex overflow-hidden">
                            {/* Left Panel */}
                            <div className="w-1/3 border-r border-slate-200 overflow-y-auto p-6">
                                <div className="mb-6">


                                    {configExpanded && (
                                        <div className="space-y-4">
                                            <div className="pb-3 border-b border-slate-200">
                                                <p className="text-sm font-semibold text-slate-900 mb-3">Social Providers</p>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {Object.entries({
                                                        google: { name: 'Google', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" /></svg> },
                                                        discord: { name: 'Discord', icon: <svg className="w-6 h-6 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" /></svg> },
                                                        telegram: { name: 'Telegram', icon: <svg className="w-6 h-6 text-[#0088cc]" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg> },
                                                        github: { name: 'Github', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg> },
                                                        x: { name: 'X', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
                                                        facebook: { name: 'Facebook', icon: <svg className="w-6 h-6 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
                                                        apple: { name: 'Apple', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg> },
                                                        farcaster: { name: 'Farcaster', icon: <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" /></svg> },
                                                    }).map(([key, { name, icon }]) => (
                                                        <label key={key} className="flex items-center gap-2 text-sm cursor-pointer p-2 rounded hover:bg-slate-50 border p-4">
                                                            <div className="relative">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={socialProviders[key as SocialProvider]}
                                                                    onChange={() => toggleSocialProvider(key as SocialProvider)}
                                                                    className="w-6 h-6 rounded border-slate-300 text-slate-700 focus:ring-slate-700 opacity-0 absolute"
                                                                />
                                                                <div className={`w-6 h-6 rounded border flex items-center justify-center ${socialProviders[key as SocialProvider] ? 'bg-slate-700 border-slate-700' : 'border-slate-300'}`}>
                                                                    {socialProviders[key as SocialProvider] && <Check className="w-3 h-3 text-white" />}
                                                                </div>
                                                            </div>
                                                            {icon}
                                                            <span className="text-slate-700">{name}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="pb-3 border-b border-slate-200">
                                                <p className="text-sm font-semibold text-slate-900 mb-3">Auth Methods</p>
                                                <div className="space-y-2 grid gap-2 animate-slideDown grid-cols-2">
                                                    <label className="flex items-center gap-2 text-sm cursor-pointer p-4 rounded hover:bg-slate-50 border border-slate-200 mt-2 ">
                                                        <div className="relative">
                                                            <input type="checkbox" checked={showEmail} onChange={() => setShowEmail(!showEmail)} className="w-6 h-6 rounded border-slate-300 text-slate-700 focus:ring-slate-700 opacity-0 absolute" />
                                                            <div className={`w-6 h-6 rounded border flex items-center justify-center ${showEmail ? 'bg-slate-700 border-slate-700' : 'border-slate-300'}`}>
                                                                {showEmail && <Check className="w-3 h-3 text-white" />}
                                                            </div>
                                                        </div>
                                                        <Mail className="w-6 h-6 text-slate-600" />
                                                        <span className="text-slate-700">Email</span>
                                                    </label>
                                                    <label className="flex items-center gap-2 text-sm cursor-pointer p-4 rounded hover:bg-slate-50 border border-slate-200 mt-2 ">
                                                        <div className="relative">
                                                            <input type="checkbox" checked={showPhone} onChange={() => setShowPhone(!showPhone)} className="w-6 h-6 rounded border-slate-300 text-slate-700 focus:ring-slate-700 opacity-0 absolute" />
                                                            <div className={`w-6 h-6 rounded border flex items-center justify-center ${showPhone ? 'bg-slate-700 border-slate-700' : 'border-slate-300'}`}>
                                                                {showPhone && <Check className="w-3 h-3 text-white" />}
                                                            </div>
                                                        </div>
                                                        <Phone className="w-6 h-6 text-slate-600" />
                                                        <span className="text-slate-700">Phone</span>
                                                    </label>
                                                    <label className="flex items-center gap-2 text-sm cursor-pointer p-4 rounded hover:bg-slate-50 border border-slate-200 mt-2 ">
                                                        <div className="relative">
                                                            <input type="checkbox" checked={showPasskey} onChange={() => setShowPasskey(!showPasskey)} className="w-6 h-6 rounded border-slate-300 text-slate-700 focus:ring-slate-700 opacity-0 absolute" />
                                                            <div className={`w-6 h-6 rounded border flex items-center justify-center ${showPasskey ? 'bg-slate-700 border-slate-700' : 'border-slate-300'}`}>
                                                                {showPasskey && <Check className="w-3 h-3 text-white" />}
                                                            </div>
                                                        </div>
                                                        <Key className="w-6 h-6 text-slate-600" />
                                                        <span className="text-slate-700">Passkey</span>
                                                    </label>
                                                    <label className="flex items-center gap-2 text-sm cursor-pointer p-4 rounded hover:bg-slate-50 border border-slate-200 mt-2 ">
                                                        <div className="relative">
                                                            <input type="checkbox" checked={showWallet} onChange={() => setShowWallet(!showWallet)} className="w-6 h-6 rounded border-slate-300 text-slate-700 focus:ring-slate-700 opacity-0 absolute" />
                                                            <div className={`w-6 h-6 rounded border flex items-center justify-center ${showWallet ? 'bg-slate-700 border-slate-700' : 'border-slate-300'}`}>
                                                                {showWallet && <Check className="w-3 h-3 text-white" />}
                                                            </div>
                                                        </div>
                                                        <Wallet className="w-6 h-6 text-slate-600" />
                                                        <span className="text-slate-700">Wallet Login</span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-slate-900 mb-3">Wallets</p>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {Object.entries({
                                                        metamask: { name: 'MetaMask', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg' },
                                                        rainbow: { name: 'Rainbow', logo: 'https://avatars.githubusercontent.com/u/48327834?s=280&v=4' },
                                                        rabby: { name: 'Rabby', logo: 'https://rabby.io/assets/images/logo-128.png' },
                                                        okx: { name: 'OKX', logo: 'https://play-lh.googleusercontent.com/N00SbjLJJrhg4hbdnkk3Llk2oedNNgCU29DvR9cpep7Lr0VkzvBkmLqajWNgFb0d7IOO=w240-h480-rw' },
                                                        zerion: { name: 'Zerion', logo: 'https://play-lh.googleusercontent.com/lxl3CQLYmbY7kHtMn3ehz06ebEIIxYOETf8hlWPNW6L3ZPxuhSrnIq-4k5T89gd4gA' },
                                                        coinbaseWallet: { name: 'Coinbase', logo: 'https://raw.githubusercontent.com/gist/taycaldwell/2291907115c0bb5589bc346661435007/raw/280eafdc84cb80ed0c60e36b4d0c563f6dca6b3e/cbw.svg' },
                                                        trustWallet: { name: 'Trust', logo: 'https://trustwallet.com/assets/images/media/assets/TWT.png' },
                                                    }).map(([key, { name, logo }]) => (
                                                        <div key={key} className="flex items-center justify-between text-sm p-2 rounded hover:bg-slate-100 border p-4">
                                                            <div className="flex items-center gap-2">
                                                                <img src={logo} alt={name} className="w-6 h-6 rounded object-contain" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                                                                <span className="text-slate-700 text-xs">{name}</span>
                                                            </div>
                                                            <div className="relative">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={wallets[key as WalletType]}
                                                                    onChange={() => toggleWallet(key as WalletType)}
                                                                    className="w-6 h-6 rounded border-slate-300 text-slate-700 focus:ring-slate-700 opacity-0 absolute"
                                                                />
                                                                <div className={`w-6 h-6 rounded border flex items-center justify-center ${wallets[key as WalletType] ? 'bg-slate-700 border-slate-700' : 'border-slate-300'}`}>
                                                                    {wallets[key as WalletType] && <Check className="w-3 h-3 text-white" />}
                                                                </div>
                                                            </div>
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
                                <div className=" bg-slate-200 p-2 rounded-lg w-fit mb-4">
                                    <button onClick={() => setActiveTab('modal')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'modal' ? 'bg-white text-slate-900 shadow' : 'text-slate-600 hover:text-slate-900'}`}>Modal</button>
                                    <button onClick={() => setActiveTab('button')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'button' ? 'bg-white text-slate-900 shadow' : 'text-slate-600 hover:text-slate-900'}`}>Button</button>
                                    <button onClick={() => setActiveTab('code')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'code' ? 'bg-white text-slate-900 shadow' : 'text-slate-600 hover:text-slate-900'}`}>Code</button>
                                </div>

                                {activeTab === 'modal' && (
                                    <div className="flex items-center justify-center min-h-[600px] mt-12">
                                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 w-full max-w-md relative">

                                            <div className="flex gap-4 justify-between mb-4">


                                                <div className="flex gap-4">

                                                    {previewShowWallets && (
                                                        <button onClick={() => setPreviewShowWallets(false)} className=" top-6 left-6 text-slate-400 hover:text-slate-600 transition-colors">
                                                            <ArrowLeft className="w-6 h-6" />
                                                        </button>
                                                    )}

                                                    <div>
                                                        <h4 className="text-2xl font-bold text-slate-900">Sign in</h4>
                                                    </div>
                                                </div>



                                                <button className="text-slate-400 hover:text-slate-600 transition-colors">
                                                    <X className="w-6 h-6" />
                                                </button>
                                            </div>


                                            {!previewShowWallets ? (
                                                <div className="space-y-4 ">
                                                    {getSocialIconGridProviders().length > 0 && (
                                                        getSocialIconGridProviders().length === 1 ? (
                                                            <div className="animate-slideDown">
                                                                {socialProviders.google && (
                                                                    <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                                                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                                                                        </svg>
                                                                        <span className="font-medium text-slate-700 text-sm">Google</span>
                                                                    </button>
                                                                )}
                                                                {socialProviders.discord && (
                                                                    <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                                                                        <svg className="w-5 h-5 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                                                                        </svg>
                                                                        <span className="font-medium text-slate-700 text-sm">Discord</span>
                                                                    </button>
                                                                )}
                                                                {socialProviders.telegram && (
                                                                    <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                                                                        <svg className="w-5 h-5 text-[#0088cc]" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                                                        </svg>
                                                                        <span className="font-medium text-slate-700 text-sm">Telegram</span>
                                                                    </button>
                                                                )}
                                                                {socialProviders.x && (
                                                                    <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                                                                        <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                                        </svg>
                                                                        <span className="font-medium text-slate-700 text-sm">X</span>
                                                                    </button>
                                                                )}
                                                            </div>
                                                        ) : (
                                                            <div className={`grid gap-3 animate-slideDown ${getSocialIconGridProviders().length === 2 ? 'grid-cols-2' :
                                                                getSocialIconGridProviders().length === 3 ? 'grid-cols-3' :
                                                                    'grid-cols-4'
                                                                }`}>
                                                                {socialProviders.google && (
                                                                    <button className="aspect-square flex items-center justify-center bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all animate-slideDown">
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
                                                                {socialProviders.telegram && (
                                                                    <button className="aspect-square flex items-center justify-center bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                                                                        <svg className="w-6 h-6 text-[#0088cc]" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
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
                                                        )
                                                    )}

                                                    {getSocialButtonProviders().length > 0 && (
                                                        <div className={`grid ${getSocialButtonProviders().length === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-3 animate-slideDown`}>
                                                            {socialProviders.farcaster && (
                                                                <button className="flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all animate-slideDown">
                                                                    <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
                                                                    </svg>
                                                                    <span className="font-medium text-slate-700 text-sm">Farcaster</span>
                                                                </button>
                                                            )}
                                                            {socialProviders.apple && (
                                                                <button className="flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                                                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                                                    </svg>
                                                                    <span className="font-medium text-slate-700 text-sm">Apple</span>
                                                                </button>
                                                            )}
                                                            {socialProviders.github && (
                                                                <button className="flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                                                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                                    </svg>
                                                                    <span className="font-medium text-slate-700 text-sm">GitHub</span>
                                                                </button>
                                                            )}
                                                            {socialProviders.facebook && (
                                                                <button className="flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                                                                    <svg className="w-5 h-5 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                                    </svg>
                                                                    <span className="font-medium text-slate-700 text-sm">Facebook</span>
                                                                </button>
                                                            )}
                                                        </div>
                                                    )}

                                                    {showEmail && (
                                                        <button className="w-full flex items-center justify-between px-5 py-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all animate-slideDown">
                                                            <span className="text-slate-500 font-medium">Email address</span>
                                                            <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </button>
                                                    )}

                                                    {showPhone && (
                                                        <button className="w-full flex items-center gap-3 px-5 py-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all animate-slideDown">
                                                            <Phone className="w-5 h-5 text-blue-600" />
                                                            <span className="text-slate-700 font-medium">Phone number</span>
                                                        </button>
                                                    )}

                                                    {showPasskey && (
                                                        <button className="w-full flex items-center gap-3 px-5 py-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all animate-slideDown">
                                                            <Key className="w-5 h-5 text-blue-600" />
                                                            <span className="text-slate-700 font-medium">Passkey</span>
                                                        </button>
                                                    )}

                                                    {showWallet && getEnabledWalletsList().length > 0 && (
                                                        <>
                                                            {(showEmail || showPhone || showPasskey || getSocialIconGridProviders().length > 0 || getSocialButtonProviders().length > 0) && (
                                                                <div className="relative">
                                                                    <div className="absolute inset-0 flex items-center">
                                                                        <div className="w-full border-t border-slate-200"></div>
                                                                    </div>
                                                                    <div className="relative flex justify-center">
                                                                        <span className="px-4 bg-white text-slate-400 text-sm font-medium">OR</span>
                                                                    </div>
                                                                </div>
                                                            )}

                                                            <button
                                                                onClick={() => setPreviewShowWallets(true)}
                                                                className="w-full flex items-center justify-center gap-3 px-5 py-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all"
                                                            >
                                                                <Wallet className="w-5 h-5 text-blue-600" />
                                                                <span className="text-slate-700 font-medium">Connect a Wallet</span>
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="space-y-2 mb-6">
                                                        {getEnabledWalletsList().map(([key, _]) => (
                                                            <button key={key} className="w-full flex items-center gap-4 px-5 py-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                                                                <img
                                                                    src={walletLogos[key]}
                                                                    alt={walletNames[key]}
                                                                    className="w-12 h-12 rounded-xl object-contain"
                                                                    onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48"%3E%3Crect fill="%23ddd" width="48" height="48"/%3E%3C/svg%3E' }}
                                                                />
                                                                <span className="text-lg font-semibold text-slate-900">{walletNames[key]}</span>
                                                            </button>
                                                        ))}
                                                    </div>

                                                    <div className="flex items-center justify-between text-sm mb-4">
                                                        <span className="text-slate-500">New to wallets?</span>
                                                        <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">Get started</a>
                                                    </div>
                                                </>
                                            )}

                                            <div className="text-center mt-6">
                                                <p className="text-sm text-slate-400 font-medium flex items-center justify-center gap-1 filter grayscale">
                                                    Protected by
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
                                    <div className="bg-slate-900 rounded-xl p-6 text-slate-100 font-mono text-sm overflow-x-auto">
                                        <pre className="whitespace-pre-wrap">
                                            {`import { WonderAuth } from '@wonder/auth';

export default function App() {
  return (
    <WonderAuth
      config={{
        providers: {
          social: [${Object.entries(socialProviders).filter(([_, v]) => v).map(([k]) => `"${k}"`).join(', ')}],
          email: ${showEmail},
          phone: ${showPhone},
          passkey: ${showPasskey},
        },
        wallets: [${Object.entries(wallets).filter(([_, v]) => v).map(([k]) => `"${k}"`).join(', ')}],
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




            {/* $CLOUD SECTION - WHITE THEME */}
            <div className="relative z-10 flex flex-col overflow-hidden bg-gray-900 rounded-xl pb-[100px] px-6 pt-16 sm:pt-20 sm:pb-20 sm:px-12 gap-10 border border-gray-200 max-w-6xl w-full m-auto my-8">
                {/* Text Content */}
                <div className="z-10 flex flex-col gap-4">
                    <h3 className="text-3xl sm:text-4xl font-semibold text-gray-200 leading-snug">$CLOUD</h3>
                    <p className="text-gray-300 text-base sm:max-w-md md:max-w-2xl">
                        Sanctum is building ethical, user-first crypto. <strong>CLOUD</strong> is our community
                        token to prove that crypto can and will be better.
                    </p>
                </div>

                {/* Button */}
                <a
                    href="https://sanctum.so/cloud"
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 hover:text-gray-900 transition-all px-5 py-2.5 rounded-md text-sm font-medium active:scale-[0.97] shadow-sm w-fit"
                >
                    Learn more
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-current"
                    >
                        <path
                            d="M20,12.75 L4,12.75 Q3.689,12.75 3.47,12.53 Q3.25,12.31 3.25,12 Q3.25,11.689 3.47,11.469 Q3.689,11.25 4,11.25 L20,11.25 Q20.311,11.25 20.53,11.469 Q20.75,11.689 20.75,12 Q20.75,12.31 20.53,12.53 Q20.311,12.75 20,12.75 Z"
                            fill="currentColor"
                        ></path>
                        <path
                            d="M14.556,16.396 Q19.25,12.939 19.25,12 Q19.25,11.061 14.555,7.604 Q14.305,7.42 14.259,7.113 Q14.212,6.805 14.396,6.555 Q14.581,6.305 14.888,6.258 Q15.195,6.212 15.445,6.396 Q20.75,10.303 20.75,12 Q20.75,13.697 15.445,17.604 Q15.195,17.788 14.888,17.742 Q14.581,17.695 14.396,17.445 Q14.212,17.195 14.259,16.887 Q14.305,16.58 14.556,16.396 Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </a>

                {/* Background Images */}
                <img
                    src="https://sanctum.so/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcloud-img.01017a3e.png&w=750&q=100"
                    alt="$CLOUD"
                    className="absolute bottom-[-45px] right-[80px] sm:bottom-[-42px] sm:right-[130px] w-[123px] sm:w-[170px] rotate-[10.7deg] opacity-90"
                />
                <img
                    src="https://sanctum.so/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcloud-stamp.ad2e9cf5.png&w=1080&q=100"
                    alt="$CLOUD Stamp"
                    className="absolute bottom-[-50px] right-[-30px] sm:bottom-[-48px] sm:right-[-25px] w-[160px] sm:w-[220px] rotate-[-11.8deg] opacity-90"
                />
            </div>

</div>

    );
}