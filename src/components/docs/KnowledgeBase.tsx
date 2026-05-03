import React from 'react';
import { 
  BookOpen, 
  Search, 
  FileText, 
  Lightbulb, 
  History, 
  ArrowRight,
  Code,
  Terminal,
  Globe,
  Plus
} from 'lucide-react';
import GlassCard from '../ui/glass-card';

const KnowledgeBase: React.FC = () => {
  const topics = [
    { title: 'Core Architecture', docs: 12, icon: Globe },
    { title: 'AI Integration', docs: 8, icon: Lightbulb },
    { title: 'Security Protocols', docs: 15, icon: Terminal },
    { title: 'API Reference', docs: 24, icon: Code },
  ];

  const recentDocs = [
    { title: 'Phoenix System Deployment Guide', date: '2h ago', author: 'Alex R.' },
    { title: 'Edge Node Latency Optimization', date: '5h ago', author: 'Sarah C.' },
    { title: 'Aether Flow 2.0 Schema', date: 'Yesterday', author: 'Marcus B.' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">System Knowledge</h2>
          <p className="text-slate-400 mt-1">Unified documentation and technical intelligence center.</p>
        </div>
        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20">
          <Plus size={18} /> New Document
        </button>
      </div>

      {/* Search & Hero */}
      <GlassCard className="p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
        <h3 className="text-2xl font-bold text-white mb-4">How can we help you build today?</h3>
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
          <input 
            type="text" 
            placeholder="Search documentation, system specs, or AI insights..." 
            className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl py-4 pl-12 pr-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-xl"
          />
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Popular:</span>
          {['Edge Optimization', 'System Simulation', 'Marketplace API'].map(tag => (
            <button key={tag} className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">{tag}</button>
          ))}
        </div>
      </GlassCard>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topics.map((topic, i) => (
          <GlassCard key={i} className="p-6 hover:bg-slate-800/40 cursor-pointer transition-all group">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:border-indigo-500/50 transition-colors">
              <topic.icon className="text-slate-400 group-hover:text-indigo-400" size={24} />
            </div>
            <h4 className="text-lg font-bold text-white mb-1">{topic.title}</h4>
            <p className="text-xs text-slate-500">{topic.docs} Technical Documents</p>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Updates */}
        <GlassCard className="p-8 lg:col-span-2">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <History className="text-indigo-400" size={20} /> Recent Updates
          </h3>
          <div className="space-y-6">
            {recentDocs.map((doc, i) => (
              <div key={i} className="flex items-center justify-between group cursor-pointer p-4 rounded-xl hover:bg-slate-800/30 transition-all border border-transparent hover:border-slate-700/50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center">
                    <FileText className="text-slate-500 group-hover:text-indigo-400 transition-colors" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-200">{doc.title}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">{doc.author} • Updated {doc.date}</p>
                  </div>
                </div>
                <ArrowRight size={16} className="text-slate-700 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-xl text-xs font-bold text-slate-400 uppercase tracking-widest transition-all">
            View All Documentation
          </button>
        </GlassCard>

        {/* AI Knowledge Generation */}
        <GlassCard className="p-8 bg-indigo-600/5 border-indigo-500/20">
          <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center mb-6">
            <BookOpen className="text-indigo-400" size={24} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">AI-Generated Docs</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-8">
            Nexus AI can automatically generate technical documentation by analyzing your system's architecture and code commits.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Auto-sync with GitHub/GitLab
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Real-time architectural diagrams
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Markdown export supported
            </div>
          </div>
          <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/20">
            Generate New Report
          </button>
        </GlassCard>
      </div>
    </div>
  );
};

export default KnowledgeBase;