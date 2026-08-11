'use client';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [messages, setMessages] = useState([
    { sender: 'system', text: 'HammadTech Core AI Agent initialized successfully. Ready for deployment.' }
  ]);
  const [input, setInput] = useState('');
  const [isLocked, setIsLocked] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');
    
    // Simulate AI Agent response
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'ai', text: `Command processed successfully for HammadTech: "${userMsg}". Executing autonomous pipeline...` }]);
    }, 1000);
  };

  if (isLocked) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 text-white">
        <div className="bg-slate-900 border border-red-500/30 p-8 rounded-2xl max-w-md w-full text-center shadow-2xl">
          <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">🔒</div>
          <h2 className="text-2xl font-bold mb-2">Workstation Locked</h2>
          <p className="text-slate-400 text-sm mb-6">Security protocol active by Hammad Allah Bakhsh.</p>
          <button 
            onClick={() => setIsLocked(false)}
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition duration-200 shadow-lg shadow-red-600/30"
          >
            Unlock Session
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 py-3 sticky top-0 z-50 flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            HammadTech <span className="text-slate-300 font-light text-base">Core</span>
          </h1>
          <p className="text-xs text-slate-400">Founder: Hammad Allah Bakhsh (@hammadtech55)</p>
        </div>
        <button 
          onClick={() => setIsLocked(true)}
          className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 text-red-400 text-xs font-bold rounded-lg transition shadow-sm"
        >
          Lock Workstation
        </button>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-slate-900/50 border-b border-slate-800 px-2 flex overflow-x-auto scrollbar-none">
        {[
          { id: 'dashboard', label: 'Executive Dashboard', icon: '📊' },
          { id: 'terminal', label: 'Agent Terminal', icon: '🤖' },
          { id: 'settings', label: 'Profile Settings', icon: '⚙️' },
          { id: 'vault', label: 'Security Vault', icon: '🛡️' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition ${
              activeTab === tab.id 
                ? 'border-blue-500 text-blue-400 bg-blue-500/5' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 p-4 max-w-7xl mx-auto w-full">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 text-blue-500/20 text-4xl font-bold">01</div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Active Executions</h3>
                <p className="text-3xl font-extrabold text-blue-400">1,284</p>
                <div className="mt-4 text-xs text-emerald-400 flex items-center gap-1">
                  <span>↑ 12% from last hour</span>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 text-emerald-500/20 text-4xl font-bold">02</div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">System Efficiency</h3>
                <p className="text-3xl font-extrabold text-emerald-400">99.8%</p>
                <div className="mt-4 text-xs text-slate-400">Optimal performance mode</div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 text-amber-500/20 text-4xl font-bold">03</div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Security Level</h3>
                <p className="text-3xl font-extrabold text-amber-400">Maximum</p>
                <div className="mt-4 text-xs text-amber-400/80">All firewalls active</div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-xl">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span>⚡</span> Recent Operations Log
              </h3>
              <div className="space-y-3">
                {[
                  { task: 'AI Agent Auto-Optimization pipeline executed', time: '2 mins ago', status: 'Success' },
                  { task: 'Database synchronization with Firebase core', time: '14 mins ago', status: 'Success' },
                  { task: 'Automated security handshake & threat scan', time: '45 mins ago', status: 'Protected' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-950/50 rounded-xl border border-slate-800/60 text-sm">
                    <span className="text-slate-300 font-medium">{item.task}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500">{item.time}</span>
                      <span className="px-2.5 py-1 text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg font-semibold">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'terminal' && (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl flex flex-col h-[70vh] shadow-2xl overflow-hidden">
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">hammadtech@core-terminal:~#</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-sm">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3.5 rounded-xl ${
                    m.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none'
                  }`}>
                    <p className="text-xs text-slate-400 mb-1">{m.sender === 'user' ? 'Hammad' : 'AI Agent'}</p>
                    <p>{m.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type command or prompt for AI Agent..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition"
              />
              <button 
                type="submit"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition shadow-lg shadow-blue-600/20"
              >
                Execute
              </button>
            </form>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Profile & Agency Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Founder Legal Name</label>
                <input type="text" readOnly value="Hammad Allah Bakhsh" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-300" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Brand Handle</label>
                <input type="text" readOnly value="@hammadtech55" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-300" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Primary Deployment Node</label>
                <input type="text" readOnly value="Vercel Edge Network (Asia-South)" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-300" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'vault' && (
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-xl text-center max-w-md mx-auto">
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="text-xl font-bold mb-2">Encrypted Security Vault</h3>
            <p className="text-sm text-slate-400 mb-6">All database keys, OpenAI credentials, and Firebase configurations are secured under AES-256 encryption.</p>
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-xs font-mono">
              Status: Secure & Verified
            </div>
          </div>
        )}
      </div>
    </main>
  );
              }
        
