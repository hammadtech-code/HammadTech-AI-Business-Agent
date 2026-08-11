'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [messages, setMessages] = useState([
    {
      sender: 'agent',
      text: 'Hello! I am HammadTech AI Business Agent. How can I help your business today?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLocked, setIsLocked] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();

    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text },
    ]);

    setInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'agent',
          text: `I received your request: "${text}". The AI business agent interface is working. Connect your AI API/backend to enable real AI responses.`,
        },
      ]);
    }, 700);
  };

  const tabs = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'agent', icon: '🤖', label: 'Agent Terminal' },
    { id: 'profile', icon: '⚙️', label: 'Profile' },
    { id: 'vault', icon: '🛡️', label: 'Security' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
          <div>
            <p className="text-sm font-medium text-cyan-400">
              HAMMADTECH AI
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Business Agent
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              AI-powered business automation platform
            </p>
          </div>

          <button
            onClick={() => setIsLocked(!isLocked)}
            className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold transition hover:border-cyan-500"
          >
            {isLocked ? '🔒 Locked' : '🔓 Lock'}
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/60">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-slate-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">

        {/* Dashboard */}
        {activeTab === 'dashboard' && (
          <section>
            <div className="mb-8">
              <p className="text-sm font-medium text-cyan-400">
                EXECUTIVE OVERVIEW
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                HammadTech Core
              </h2>
              <p className="mt-2 text-slate-400">
                Monitor your AI business operations from one workspace.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <StatCard
                icon="⚡"
                title="Agent Status"
                value="ONLINE"
                description="Business agent is ready"
              />

              <StatCard
                icon="🤖"
                title="AI Mode"
                value="READY"
                description="Waiting for your command"
              />

              <StatCard
                icon="🛡️"
                title="Security"
                value="ACTIVE"
                description="Protected workspace"
              />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-lg font-bold">
                  ⚡ Agent Capabilities
                </h3>

                <div className="mt-5 space-y-3">
                  <Capability text="Customer support" />
                  <Capability text="Lead qualification" />
                  <Capability text="Business enquiries" />
                  <Capability text="Appointment assistance" />
                  <Capability text="Sales conversations" />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-lg font-bold">
                  📋 System Status
                </h3>

                <div className="mt-5 space-y-4">
                  <Status label="Frontend" value="Operational" />
                  <Status label="Agent Interface" value="Operational" />
                  <Status label="Security Layer" value="Active" />
                  <Status label="AI API" value="Not Connected" />
                </div>

                <p className="mt-5 rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-xs text-amber-300">
                  AI API connection is required for real AI conversations.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Agent Terminal */}
        {activeTab === 'agent' && (
          <section>
            <div className="mb-6">
              <p className="text-sm font-medium text-cyan-400">
                AGENT TERMINAL
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                AI Business Assistant
              </h2>
              <p className="mt-2 text-slate-400">
                Test the agent interface before connecting the production AI backend.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-lg text-slate-950">
                    🤖
                  </div>

                  <div>
                    <p className="font-bold">HammadTech AI Agent</p>
                    <p className="text-xs text-emerald-400">
                      ● Interface Online
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                  DEMO MODE
                </span>
              </div>

              <div className="h-[420px] space-y-4 overflow-y-auto p-5">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.sender === 'user'
                        ? 'justify-end'
                        : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                        message.sender === 'user'
                          ? 'bg-cyan-500 text-slate-950'
                          : 'bg-slate-800 text-slate-200'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              <form
                onSubmit={sendMessage}
                className="border-t border-slate-800 p-4"
              >
                <div className="flex gap-3">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a business request..."
                    className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-cyan-500"
                  />

                  <button
                    type="submit"
                    className="rounded-xl bg-cyan-500 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-400"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </section>
        )}

        {/* Profile */}
        {activeTab === 'profile' && (
          <section>
            <div className="mb-6">
              <p className="text-sm font-medium text-cyan-400">
                PROFILE SETTINGS
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                Business Profile
              </h2>
            </div>

            <div className="max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="space-y-5">
                <Field label="Business Name" value="HammadTech" />
                <Field label="Brand Handle" value="@hammadtech55" />
                <Field label="Platform" value="AI Business Agent" />
                <Field label="Mode" value="Business Automation" />
              </div>
            </div>
          </section>
        )}

        {/* Security */}
        {activeTab === 'vault' && (
          <section>
            <div className="mb-6">
              <p className="text-sm font-medium text-cyan-400">
                SECURITY VAULT
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                Security Center
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <SecurityCard
                icon="🛡️"
                title="Workspace Protection"
                status="ACTIVE"
              />

              <SecurityCard
                icon="🔐"
                title="Session Lock"
                status={isLocked ? 'LOCKED' : 'UNLOCKED'}
              />

              <SecurityCard
                icon="🔑"
                title="API Credentials"
                status="NOT CONFIGURED"
              />

              <SecurityCard
                icon="🌐"
                title="Connection Layer"
                status="READY"
              />
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center">
        <p className="text-sm text-slate-500">
          HammadTech AI Business Agent
        </p>
        <p className="mt-1 text-xs text-slate-600">
          @hammadtech55 • Built for business automation
        </p>
      </footer>
    </main>
  );
}

function StatCard({ icon, title, value, description }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="text-2xl">{icon}</div>
      <p className="mt-5 text-sm text-slate-400">{title}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
      <p className="mt-2 text-xs text-slate-500">{description}</p>
    </div>
  );
}

function Capability({ text }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-slate-950 p-3">
      <span className="text-emerald-400">✓</span>
      <span className="text-sm text-slate-300">{text}</span>
    </div>
  );
}

function Status({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
      <span className="text-sm text-slate-400">{label}</span>
      <span
        className={`text-xs font-bold ${
          value === 'Not Connected'
            ? 'text-amber-400'
            : 'text-emerald-400'
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function Field({ label, value }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </label>

      <div className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-200">
        {value}
      </div>
    </div>
  );
}

function SecurityCard({ icon, title, status }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-xl">
          {icon}
        </div>

        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="mt-1 text-xs text-emerald-400">
            {status}
          </p>
        </div>
      </div>
    </div>
  );
    }
