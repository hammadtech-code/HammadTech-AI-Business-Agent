'use client';

import { useState } from 'react';

export default function HammadTechAIAgent() {
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: 'Assalam-o-Alaikum! Welcome to HammadTech AI Business Agent. How can we accelerate your business with AI, software, or automation today?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const [projectSnapshot, setProjectSnapshot] = useState({
    intent: 'GENERAL_INQUIRY',
    detectedService: 'Pending Analysis',
    leadStatus: 'WARM',
    leadScore: 50,
  });

  const quickPrompts = [
    "I need an AI Agent / Receptionist",
    "I need a Full-Stack Web App",
    "I need Architectural Visualization",
    "I want business automation"
  ];

  const handleSendMessage = async (textToSend) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMessage = text;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    setTimeout(() => {
      let detectedService = projectSnapshot.detectedService;
      let intent = 'PROJECT_REQUEST';
      let leadScore = projectSnapshot.leadScore + 15;

      const lower = userMessage.toLowerCase();
      if (lower.includes('ai') || lower.includes('agent') || lower.includes('bot')) {
        detectedService = 'AI Agent & Automation';
      } else if (lower.includes('web') || lower.includes('site') || lower.includes('app')) {
        detectedService = 'Full-Stack Software Development';
      } else if (lower.includes('arch') || lower.includes('visual') || lower.includes('3d')) {
        detectedService = 'Architectural Visualization';
      }

      setProjectSnapshot({
        intent,
        detectedService,
        leadStatus: leadScore > 70 ? 'HOT LEAD 🔥' : 'WARM',
        leadScore: Math.min(leadScore, 95),
      });

      setMessages((prev) => [
        ...prev,
        { 
          role: 'assistant', 
          content: `Great choice! Based on your requirement for **${detectedService}**, HammadTech can build a custom, high-performance solution for you. Would you like to outline your core features or schedule a technical review?` 
        }
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090d16', color: '#f1f5f9', fontFamily: 'system-ui, sans-serif', display: 'flex', flexDirection: 'column' }}>
      
      <header style={{ borderBottom: '1px solid #1e293b', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0d1322' }}>
        <div>
          <h1 style={{ fontSize: '1.15rem', fontWeight: '800', margin: '0', color: '#ffffff', letterSpacing: '0.5px' }}>
            HammadTech <span style={{ color: '#38bdf8', fontWeight: '400' }}>AI Business Agent</span>
          </h1>
          <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '2px 0 0 0' }}>@hammadtech55 | Global AI & Software Solutions</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', backgroundColor: '#052e16', color: '#4ade80', padding: '6px 12px', borderRadius: '20px', border: '1px solid #14532d', fontWeight: '600' }}>
          <span style={{ width: '8px', height: '8px', backgroundColor: '#4ade80', borderRadius: '50%', display: 'inline-block' }}></span>
          System Online
        </div>
      </header>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 320px', gap: '0', overflow: 'hidden' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 73px)', borderRight: '1px solid #1e293b' }}>
          
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {messages.map((msg, index) => (
              <div key={index} style={{ 
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', 
                maxWidth: '80%', 
                backgroundColor: msg.role === 'user' ? '#1e293b' : '#111827', 
                border: '1px solid #334155', 
                padding: '14px 18px', 
                borderRadius: '12px', 
                fontSize: '0.95rem', 
                lineHeight: '1.5' 
              }}>
                <strong style={{ display: 'block', fontSize: '0.7rem', color: '#94a3b8', marginBottom: '4px', textTransform: 'uppercase' }}>
                  {msg.role === 'user' ? 'You' : 'HammadTech AI'}
                </strong>
                <span dangerouslySetInnerHTML={{ __html: msg.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </div>
            ))}
            {loading && <div style={{ color: '#64748b', fontStyle: 'italic', fontSize: '0.85rem', paddingLeft: '8px' }}>Analyzing requirements & mapping services...</div>}
          </div>

          <div style={{ padding: '0 24px 12px 24px', display: 'flex', gap: '8px', overflowX: 'auto' }}>
            {quickPrompts.map((prompt, idx) => (
              <button 
                key={idx} 
                onClick={() => handleSendMessage(prompt)}
                style={{ backgroundColor: '#111827', border: '1px solid #334155', color: '#cbd5e1', padding: '6px 12px', borderRadius: '16px', fontSize: '0.8rem', cursor: 'pointer', whiteSpace: 'nowrap' }}
              >
                {prompt}
              </button>
            ))}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} style={{ display: 'flex', gap: '12px', padding: '16px 24px', borderTop: '1px solid #1e293b', backgroundColor: '#0d1322' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your project or ask a question..."
              style={{ flex: 1, backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '8px', padding: '14px', color: '#fff', outline: 'none', fontSize: '0.95rem' }}
            />
            <button type="submit" style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '0 24px', fontWeight: '600', cursor: 'pointer' }}>
              Send
            </button>
          </form>

        </div>

        <div style={{ backgroundColor: '#0d1322', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto' }}>
          <div>
            <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#38bdf8', letterSpacing: '1px', margin: '0 0 4px 0' }}>Live Project Snapshot</h3>
            <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '0' }}>Real-time requirement assembly</p>
          </div>

          <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', borderRadius: '10px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#64748b', display: 'block' }}>DETECTED SERVICE</span>
              <strong style={{ fontSize: '0.9rem', color: '#f8fafc' }}>{projectSnapshot.detectedService}</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#64748b', display: 'block' }}>CURRENT INTENT</span>
              <span style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: '600' }}>{projectSnapshot.intent}</span>
            </div>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#64748b', display: 'block' }}>QUALIFICATION STATUS</span>
              <span style={{ fontSize: '0.85rem', color: '#4ade80', fontWeight: '700' }}>{projectSnapshot.leadStatus}</span>
            </div>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#64748b', display: 'block' }}>INTERNAL LEAD SIGNAL</span>
              <div style={{ width: '100%', backgroundColor: '#1e293b', height: '6px', borderRadius: '3px', marginTop: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${projectSnapshot.leadScore}%`, backgroundColor: '#3b82f6', height: '100%' }}></div>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', borderRadius: '10px', padding: '16px' }}>
            <h4 style={{ fontSize: '0.8rem', color: '#e2e8f0', margin: '0 0 8px 0' }}>Ready to take action?</h4>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '0 0 12px 0', lineHeight: '1.4' }}>Once your project details are aligned, connect directly with HammadTech team.</p>
            <button 
              onClick={() => alert('Handoff request initialized. Hammad will review your project snapshot shortly!')}
              style={{ width: '100%', backgroundColor: '#1e293b', border: '1px solid #334155', color: '#ffffff', padding: '10px', borderRadius: '6px', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer' }}
            >
              Request Human Handoff 🚀
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
