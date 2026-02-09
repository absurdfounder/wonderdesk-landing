'use client';

import { useState, useEffect, useRef, useCallback } from "react";
import {
  FileText, ChevronRight,
  CheckCircle2, Clock, Eye, Send, ArrowRight,
  Search, MessageSquare, Camera, FileEdit, Check
} from "lucide-react";

/* Processing steps that Wonder shows while working */
const PROCESSING_STEPS = [
  { icon: "search", label: "Scanning 47 help articles…" },
  { icon: "file", label: "Found 12 articles with phone references" },
  { icon: "edit", label: "Replacing with support portal links…" },
  { icon: "image", label: "Updating screenshots…" },
  { icon: "check", label: "Done! 12 articles updated" },
];

const DRAFT_ARTICLES = [
  {
    title: "How to contact support",
    excerpt: "If you need help with your account, you can reach our support team through our support portal. Visit support.company.com to submit a ticket or browse our knowledge base.",
    changes: 4,
    status: "Updated",
  },
  {
    title: "Account settings and preferences",
    excerpt: "Update your account information, change notification preferences, and manage your subscription through our support portal.",
    changes: 2,
    status: "Updated",
  },
  {
    title: "Billing and payment help",
    excerpt: "Questions about billing? Need to update your payment method? Our support team can help through our support portal.",
    changes: 3,
    status: "Updated",
  },
];

/* Chat script */
const CHAT_SCRIPT = [
  {
    type: "user",
    sender: "Vaibhav",
    avatar: "https://avatars.githubusercontent.com/u/25829699?v=4",
    text: 'Hey Wonder, can you remove all phone-number mentions and replace with our support portal link → support.company.com',
    time: "3:42 PM",
    delay: 200,
  },
  {
    type: "agent_typing",
    delay: 800,
  },
  {
    type: "agent",
    sender: "Wonder",
    text: "On it! Scanning your help center now…",
    time: "3:43 PM",
    delay: 1000,
  },
  {
    type: "processing",
    delay: 400,
  },
  {
    type: "agent",
    sender: "Wonder",
    text: "All done! I found and updated 12 articles across your help center. Replaced all phone numbers with the support portal link and refreshed the screenshots. Here's a preview:",
    time: "3:44 PM",
    delay: 6500,
  },
  {
    type: "drafts",
    delay: 600,
  },
];

/* ─── Helpers ─── */
function WonderAvatar({ size = 36 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: 10, overflow: "hidden",
      background: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      <img src="https://dazzling-cat.netlify.app/wondercharacter.png" alt="Wonder" style={{ width: size, height: size, objectFit: "cover" }} />
    </div>
  );
}

function ProcessingSteps({ visibleCount }) {
  return (
    <div style={{ marginLeft: 48, marginTop: 8, marginBottom: 4 }}>
      <div style={{
        background: "#fafafa", border: "1px solid #e5e7eb", borderRadius: 12,
        padding: "12px 16px", display: "flex", flexDirection: "column", gap: 6,
      }}>
        {PROCESSING_STEPS.map((step, i) => (
          i < visibleCount && (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 8,
              animation: "fadeSlide 0.35s ease both",
              opacity: i < visibleCount - 1 ? 0.5 : 1,
              transition: "opacity 0.3s",
            }}>
              <div style={{ width: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {step.icon === "search" && <Search size={14} strokeWidth={1.5} color="#6b7280" />}
                {step.icon === "file" && <FileText size={14} strokeWidth={1.5} color="#6b7280" />}
                {step.icon === "edit" && <FileEdit size={14} strokeWidth={1.5} color="#6b7280" />}
                {step.icon === "image" && <Camera size={14} strokeWidth={1.5} color="#6b7280" />}
                {step.icon === "check" && <CheckCircle2 size={14} strokeWidth={1.5} color="#22c55e" />}
              </div>
              <span style={{
                fontSize: 12.5, color: step.icon === "check" ? "#16a34a" : "#6b7280",
                fontWeight: step.icon === "check" ? 600 : 400,
              }}>{step.label}</span>
              {i === visibleCount - 1 && step.icon !== "check" && (
                <div style={{ display: "flex", gap: 2, marginLeft: 4 }}>
                  <div className="proc-dot" style={{ animationDelay: "0ms" }} />
                  <div className="proc-dot" style={{ animationDelay: "150ms" }} />
                  <div className="proc-dot" style={{ animationDelay: "300ms" }} />
                </div>
              )}
            </div>
          )
        ))}
      </div>
    </div>
  );
}

/* ═══════════ Main Component ═══════════ */
export default function AIAgentSection() {
  const [chatItems, setChatItems] = useState([]);
  const [scriptIdx, setScriptIdx] = useState(0);
  const [agentTyping, setAgentTyping] = useState(false);
  const [procVisible, setProcVisible] = useState(0);
  const [showDrafts, setShowDrafts] = useState(false);
  const [isRunning, setIsRunning] = useState(true);
  const chatRef = useRef(null);
  const timerRef = useRef(null);
  const procRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chatItems, agentTyping, procVisible, showDrafts]);

  const cleanUp = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (procRef.current) clearInterval(procRef.current);
  }, []);

  const restart = useCallback(() => {
    cleanUp();
    setChatItems([]); setScriptIdx(0); setAgentTyping(false);
    setProcVisible(0); setShowDrafts(false); setIsRunning(true);
  }, [cleanUp]);

  const processStep = useCallback((idx) => {
    if (idx >= CHAT_SCRIPT.length) {
      // Auto-restart after completion
      timerRef.current = setTimeout(restart, 3000);
      return;
    }

    const step = CHAT_SCRIPT[idx];
    timerRef.current = setTimeout(() => {
      if (step.type === "user") {
        setChatItems(p => [...p, step]);
        setScriptIdx(idx + 1);
        return;
      }
      if (step.type === "agent_typing") {
        setAgentTyping(true);
        setScriptIdx(idx + 1);
        return;
      }
      if (step.type === "agent") {
        setAgentTyping(false);
        setChatItems(p => [...p, step]);
        setScriptIdx(idx + 1);
        return;
      }
      if (step.type === "processing") {
        setProcVisible(1);
        let count = 1;
        procRef.current = setInterval(() => {
          count++;
          setProcVisible(count);
          if (count >= PROCESSING_STEPS.length) {
            clearInterval(procRef.current);
            procRef.current = null;
            setScriptIdx(idx + 1);
          }
        }, 1100);
        return;
      }
      if (step.type === "drafts") {
        setShowDrafts(true);
        setScriptIdx(idx + 1);
        return;
      }
    }, step.delay);
  }, [restart]);

  useEffect(() => {
    if (!isRunning) return;
    processStep(scriptIdx);
    return cleanUp;
  }, [scriptIdx, isRunning, processStep, cleanUp]);

  return (
    <div style={{
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "rgb(255, 255, 255)",
      backgroundImage: "radial-gradient(circle, rgba(186, 183, 195, 0.6) 0.7px, transparent 0.7px)",
      backgroundSize: "10px 10px",
      backgroundPosition: "0px 0px",
      padding: "60px 20px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      <style>{`
        @keyframes fadeSlide { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        @keyframes dotBounce { 0%,80%,100%{transform:translateY(0);opacity:.35} 40%{transform:translateY(-3px);opacity:1} }
        .proc-dot { width:3px; height:3px; border-radius:50%; background:#a3a3a3; animation:dotBounce 1.2s infinite ease-in-out; }
        .typing-dot-lg { width:5px; height:5px; border-radius:50%; background:#a3a3a3; animation:dotBounce 1.2s infinite ease-in-out; }
        .draft-card { transition: all 0.2s ease; }
        .draft-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.08); }
        .chat-scroll::-webkit-scrollbar{width:4px}
        .chat-scroll::-webkit-scrollbar-track{background:transparent}
        .chat-scroll::-webkit-scrollbar-thumb{background:#e5e5e5;border-radius:4px}
        *{box-sizing:border-box}
      `}</style>

      <div style={{ width: "100%", maxWidth: 900, margin: "0 auto" }}>
        {/* Browser Window */}
        <div style={{
          borderRadius: 16, overflow: "hidden", border: "1px solid #d4d4d4",
          boxShadow: "0 20px 50px rgba(0,0,0,.25), 0 6px 18px rgba(0,0,0,.1)",
          background: "#f5f5f4",
        }}>
          {/* Chrome bar */}
          <div style={{ display: "flex", alignItems: "center", padding: "9px 16px", background: "#f5f5f4", borderBottom: "1px solid #e5e5e5", gap: 12 }}>
            <div style={{ display: "flex", gap: 7 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 5,
                background: "white", borderRadius: 7, padding: "4px 16px",
                fontSize: 12, color: "#78716c", border: "1px solid #e5e5e5",
                maxWidth: 300, width: "100%", justifyContent: "center",
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.04)",
              }}>
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="5" width="8" height="6" rx="1.5" stroke="#78716c" strokeWidth="1.5" fill="none" /><path d="M3 5V3.5a2 2 0 014 0V5" stroke="#78716c" strokeWidth="1.5" fill="none" /></svg>
                app.wonderdesk.ai/chat
              </div>
            </div>
            <div style={{ display: "flex", gap: 5 }}>
              <button onClick={() => setIsRunning(p => !p)} style={{ width: 26, height: 26, borderRadius: 5, border: "1px solid #d6d3d1", background: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#78716c" }}>
                {isRunning ? <span style={{ fontSize: 10 }}>⏸</span> : <span style={{ fontSize: 10 }}>▶</span>}
              </button>
              <button onClick={restart} style={{ width: 26, height: 26, borderRadius: 5, border: "1px solid #d6d3d1", background: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#78716c" }}>
                <span style={{ fontSize: 12 }}>↻</span>
              </button>
            </div>
          </div>

          {/* Chat area - now with flexbox layout */}
          <div style={{ background: "white", display: "flex", flexDirection: "column", height: 600 }}>
            {/* Scrollable chat messages */}
            <div ref={chatRef} className="chat-scroll" style={{ 
              flex: 1, 
              overflowY: "auto", 
              padding: "24px 28px 20px" 
            }}>
              {chatItems.map((item, i) => (
                <div key={i} style={{ marginBottom: 20, animation: "fadeSlide 0.4s ease both" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    {/* Avatar */}
                    {item.type === "user" ? (
                      <img src={item.avatar} alt={item.sender} style={{ width: 40, height: 40, borderRadius: 10, objectFit: "cover", flexShrink: 0 }} />
                    ) : (
                      <WonderAvatar size={40} />
                    )}
                    {/* Content */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 3 }}>
                        <span style={{ fontSize: 15, fontWeight: 700, color: "#111" }}>{item.sender}</span>
                        <span style={{ fontSize: 12, color: "#a3a3a3" }}>{item.time}</span>
                      </div>
                      <p style={{ fontSize: 14, lineHeight: 1.65, color: "#4b5563", margin: 0 }}>
                        {item.text.split(/(support\.company\.com)/g).map((part, j) =>
                          part === "support.company.com" ? (
                            <span key={j} style={{ color: "#3b82f6", fontWeight: 500, textDecoration: "underline", textDecorationColor: "#93c5fd", textUnderlineOffset: 2 }}>{part}</span>
                          ) : <span key={j}>{part}</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Agent typing indicator */}
              {agentTyping && (
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 20, animation: "fadeSlide 0.3s ease both" }}>
                  <WonderAvatar size={40} />
                  <div style={{ paddingTop: 12, display: "flex", gap: 4, alignItems: "center" }}>
                    <div className="typing-dot-lg" style={{ animationDelay: "0ms" }} />
                    <div className="typing-dot-lg" style={{ animationDelay: "150ms" }} />
                    <div className="typing-dot-lg" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              {/* Processing steps */}
              {procVisible > 0 && <ProcessingSteps visibleCount={procVisible} />}

              {/* Draft article cards */}
              {showDrafts && (
                <div style={{ marginLeft: 54, marginTop: 14, animation: "fadeSlide 0.5s ease both" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <button style={{
                      padding: "7px 16px", borderRadius: 9, background: "#111", color: "white",
                      border: "none", fontSize: 13, fontWeight: 600, cursor: "pointer",
                      display: "flex", alignItems: "center", gap: 6,
                    }}>
                      <Eye size={14} strokeWidth={2} /> Review & Publish
                    </button>
                    <span style={{ fontSize: 12, color: "#a3a3a3" }}>12 articles updated</span>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
                    {DRAFT_ARTICLES.map((article, idx) => (
                      <div
                        key={idx}
                        className="draft-card"
                        style={{
                          cursor: "pointer", borderRadius: 12,
                          border: "1px solid #e5e7eb",
                          background: "linear-gradient(to bottom, white, #fafafa)",
                          padding: "14px 16px 12px",
                          animation: `fadeSlide 0.4s ease ${idx * 120}ms both`,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                          <span style={{
                            display: "inline-flex", alignItems: "center", gap: 4,
                            background: "#dcfce7", padding: "2px 8px", borderRadius: 20,
                            fontSize: 10, fontWeight: 600, color: "#16a34a",
                          }}>
                            <CheckCircle2 size={10} strokeWidth={2.5} />
                            {article.status}
                          </span>
                          <span style={{
                            fontSize: 10, color: "#a3a3a3", background: "#f5f5f5",
                            padding: "1px 6px", borderRadius: 4,
                          }}>{article.changes} changes</span>
                        </div>
                        <h4 style={{ fontSize: 13.5, fontWeight: 700, color: "#111", marginBottom: 6, lineHeight: 1.3 }}>{article.title}</h4>
                        <p style={{
                          fontSize: 12, lineHeight: 1.5, color: "#9ca3af", margin: 0,
                          display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
                          maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                          WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                        }}>{article.excerpt}</p>
                        <div style={{
                          display: "flex", alignItems: "center", gap: 4, marginTop: 10,
                          fontSize: 11, color: "#3b82f6", fontWeight: 500,
                        }}>
                          View article <ArrowRight size={11} strokeWidth={2} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Fixed input bar at bottom */}
            <div style={{
              padding: "12px 28px 16px", 
              borderTop: "1px solid #f0f0f0",
              background: "white",
              flexShrink: 0
            }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 10,
                background: "#f5f5f5", borderRadius: 12, border: "1px solid #e5e5e5",
                padding: "11px 16px",
              }}>
                <MessageSquare size={16} strokeWidth={1.5} color="#b5b5b5" />
                <span style={{ flex: 1, fontSize: 13.5, color: "#a3a3a3" }}>Ask Wonder anything…</span>
                <div style={{
                  width: 32, height: 32, borderRadius: 8, background: "#e5e5e5",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Send size={14} strokeWidth={2} color="#b5b5b5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}