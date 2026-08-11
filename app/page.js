'use client';

import { useState } from 'react';

export default function HammadTechAgent() {
  const [pin, setPin] = useState('');
  const [isLocked, setIsLocked] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [messages, setMessages] = useState([
    { sender: 'agent', text: 'HammadTech Master Agent online and fully operational. Ready for deployment.' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const [profile, setProfile] = useState({
    name: 'Hammad Allah Bakhsh',
    handle: '@hammadtech55',
    role: 'Lead Architect & Founder',
    email: 'hammad@hammadtech.com',
    avatar: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
  });

  const handleUnlock = () => {
    if (pin === '1234') {
      setIsLocked(false);
      setPin('');
    } else {
      alert('Invalid Security PIN Code! Use 1234');
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    const userText = inputMessage;
    setInputMessage('');
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: 'agent', 
        text: `Executing autonomous sequence for: "${userText}". All systems optimal under HammadTech protocol.` 
      }]);
    }, 600);
  };

  if (isLocked) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: '#090d16', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
        <div style={{ backgroundColor: '#111827', border: '1px solid #374155', padding: '30px', borderRadius: '12px', width: '100%', maxWidth: '380px', textAlign: 'center' }}>
          <h2 style={{ color: '#38bdf8', marginBottom: '10px' }}>🔐 SECURE VAULT</h2>
          <p style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: '20px' }}>HammadTech Autonomous Agent Terminal</p>
          <input 
            type="password" 
            maxLength="4"
            value={pin} 
            onChange={(e) => setPin(e.target.value)} 
            placeholder="ENTER 4-DIGIT PIN (1234)" 
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #374155', backgroundColor: '#030712', color: '#fff', textAlign: 'center', fontSize: '18px', letterSpacing: '6px', marginBottom: '15px', outline: 'none' }} 
          />
          <button 
            onClick={handleUnlock}
            style={{ width: '100%', backgroundColor: '#2563eb', color: '#fff', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
          >
            AUTHORIZE & UNLOCK
          </button>
          <span style={{ display: 'block', marginTop: '15px', fontSize: '0.75rem', color: '#6b7280' }}>Default PIN: 1234</span>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090d16', color: '#f8fafc', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column' }}>
      <header style={{ backgroundColor: '#0d1322', borderBottom: '1px solid #1e293b', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.2rem', margin: '0', fontWeight: 'bold' }}>HammadTech <span style={{ color: '#38bdf8' }}>Core</span></h1>
          <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '2px 0 0 0' }}>Founder: {profile.name} ({profile.handle})</p>
        </div>
        <button 
          onClick={() => setIsLocked(true)}
          style={{ backgroundColor: '#7f1d1d', color: '#fca5a5', border: '1px solid #991b1b', padding: '6px 12px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Lock Workstation
        </button>
      </header>

      <nav style={{ display: 'flex', backgroundColor: '#0f172a', borderBottom: '1px solid #1e293b', padding: '0 24px', gap: '8px' }}>
        {['dashboard', 'agent', 'profile', 'security'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '12px 16px',
              backgroundColor: activeTab === tab ? '#1e293b' : 'transparent',
              color: activeTab === tab ? '#38bdf8' : '#94a3b8',
              border: 'none',
              borderBottom: activeTab === tab ? '2px solid #38bdf8' : '2px solid transparent',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: '600',
              textTransform: 'capitalize'
            }}
          >
            {tab === 'dashboard' ? '📊 Executive Dashboard' : tab === 'agent' ? '🤖 Agent Terminal' : tab === 'profile' ? '👤 Profile Settings' : '🔒 Security Vault'}
          </button>
        ))}
      </nav>

      <div style={{ flex: 1, padding: '24px', maxWidth: '1000px', width: '100%', margin: '0 auto' }}>
        {activeTab === 'dashboard' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', padding: '20px', borderRadius: '10px' }}>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Active Executions</span>
              <h3 style={{ fontSize: '1.8rem', margin: '8px 0 0 0', color: '#38bdf8' }}>1,284</h3>
            </div>
            <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', padding: '20px', borderRadius: '10px' }}>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>System Efficiency</span>
              <h3 style={{ fontSize: '1.8rem', margin: '8px 0 0 0', color: '#4ade80' }}>99.8%</h3>
            </div>
            <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', padding: '20px', borderRadius: '10px' }}>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Security Level</span>
              <h3 style={{ fontSize: '1.8rem', margin: '8px 0 0 0', color: '#f59e0b' }}>Maximum</h3>
            </div>
          </div>
        )}

        {activeTab === 'agent' && (
          <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', borderRadius: '10px', display: 'flex', flexDirection: 'column', height: '65vh' }}>
            <div style={{ padding: '16px', borderBottom: '1px solid #1e293b', fontWeight: 'bold', fontSize: '0.9rem' }}>Autonomous Agent Terminal</div>
            <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {messages.map((msg, idx) => (
                <div key={idx} style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '75%', backgroundColor: msg.sender === 'user' ? '#1e293b' : '#030712', border: '1px solid #334155', padding: '10px 14px', borderRadius: '8px', fontSize: '0.9rem' }}>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: '#64748b', marginBottom: '2px' }}>{msg.sender === 'user' ? 'Hammad' : 'Agent'}</span>
                  {msg.text}
                </div>
              ))}
            </div>
            <div style={{ padding: '12px', borderTop: '1px solid #1e293b', display: 'flex', gap: '8px' }}>
              <input 
                type="text" 
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Enter command or query for agent..." 
                style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#030712', color: '#fff', outline: 'none', fontSize: '0.9rem' }} 
              />
              <button onClick={handleSendMessage} style={{ backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '0 16px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Send</button>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', padding: '24px', borderRadius: '10px', maxWidth: '500px' }}>
            <h3 style={{ marginTop: '0', fontSize: '1rem', color: '#38bdf8' }}>Profile Configuration</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '16px' }}>
              <div>
                <label style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block', marginBottom: '4px' }}>Full Name</label>
                <input type="text" value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#030712', color: '#fff', outline: 'none' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block', marginBottom: '4px' }}>Handle</label>
                <input type="text" value={profile.handle} onChange={(e) => setProfile({...profile, handle: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#030712', color: '#fff', outline: 'none' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block', marginBottom: '4px' }}>Role</label>
                <input type="text" value={profile.role} onChange={(e) => setProfile({...profile, role: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#030712', color: '#fff', outline: 'none' }} />
              </div>
              <button onClick={() => alert('Profile updated successfully!')} style={{ backgroundColor: '#16a34a', color: '#fff', border: 'none', padding: '10px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>Save Changes</button>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', padding: '24px', borderRadius: '10px', maxWidth: '500px' }}>
            <h3 style={{ marginTop: '0', fontSize: '1rem', color: '#38bdf8' }}>Security & PIN Settings</h3>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Session is protected with state-of-the-art verification.</p>
            <div style={{ marginTop: '16px' }}>
              <label style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block', marginBottom: '4px' }}>Access PIN (Default: 1234)</label>
              <input type="password" defaultValue="1234" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#030712', color: '#fff', outline: 'none' }} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
