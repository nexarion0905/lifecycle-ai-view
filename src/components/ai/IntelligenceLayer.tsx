import React from 'react';
import { 
  Zap, 
  Cpu, 
  BrainCircuit, 
  LineChart, 
  ShieldAlert, 
  Lightbulb,
  Sparkles,
  Command,
  ArrowRight
} from 'lucide-react';
import GlassCard from '../ui/glass-card';

const IntelligenceLayer: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main AI Stats */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <Sparkles className="text-indigo-400" /> AI Intelligence Layer
              </h2>
              <p className="text-slate-400 mt-1">Autonomous decision support and predictive analytics.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard className="p-8 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <BrainCircuit size={120} />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">Architecture Optimizer</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Aether AI is analyzing 42,000 potential architectural patterns for your current project.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold text-slate-500 uppercase">
                  <span>Optimization Confidence</span>
                  <span className="text-emerald-400">92%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full w-[92%] bg-emerald-500 rounded-full" />
                </div>
              </div>
              <button className="mt-8 flex items-center gap-2 text-indigo-400 text-sm font-bold hover:gap-3 transition-all">
                Review Proposals <ArrowRight size={16} />
              </button>
            </GlassCard>

            <GlassCard className="p-8 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldAlert size={120} />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">Risk Mitigation</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Identified 3 potential security vectors in the edge deployment protocol.
              </p>
              <div className="flex gap-3">
                <span className="px-2 py-1 rounded bg-rose-500/10 text-rose-400 text-[10px] font-bold uppercase tracking-wider border border-rose-500/20">Critical: 1</span>
                <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-400 text-[10px] font-bold uppercase tracking-wider border border-amber-500/20">Minor: 2</span>
              </div>
              <button className="mt-8 flex items-center gap-2 text-indigo-400 text-sm font-bold hover:gap-3 transition-all">
                Patch Vulnerabilities <ArrowRight size={16} />
              </button>
            </GlassCard>
          </div>

          <GlassCard className="p-0 overflow-hidden">
            <div className="p-6 border-b border-slate-800/50 flex items-center justify-between">
              <h3 className="font-bold text-white">Resource Forecasting</h3>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-indigo-600/10 text-indigo-400 text-xs font-bold">Predictive Mode</span>
              </div>
            </div>
            <div className="h-64 flex items-center justify-center bg-slate-900/40">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/cda5bbdd-9764-4e72-a538-55b503901563/ai-core-mascot-701d31af-1777832060244.webp" 
                alt="AI Analytics" 
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-slate-900/60 backdrop-blur-sm">
                <LineChart size={40} className="text-indigo-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Simulating Future Loads</h4>
                <p className="text-slate-400 max-w-md">Nexus AI is generating high-fidelity traffic models based on historical enterprise data patterns.</p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* AI Action Hub */}
        <div className="space-y-8">
          <GlassCard className="p-6">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Command size={16} className="text-indigo-400" /> Executive Actions
            </h3>
            <div className="space-y-4">
              {[
                { title: 'Auto-Scale Infrastructure', icon: Zap, color: 'text-indigo-400', desc: 'Adjust nodes based on latency' },
                { title: 'Neural Model Retraining', icon: BrainCircuit, color: 'text-purple-400', desc: 'Refresh AI weights for Alpha Core' },
                { title: 'Security Audit', icon: ShieldAlert, color: 'text-rose-400', desc: 'Deep scan system containers' },
                { title: 'Optimize Codebase', icon: Cpu, color: 'text-cyan-400', desc: 'Refactor legacy system logic' },
              ].map((action, i) => (
                <button 
                  key={i}
                  className="w-full p-4 rounded-xl bg-slate-800/40 border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800/60 transition-all flex items-start gap-4 text-left group"
                >
                  <div className={`p-2 rounded-lg bg-slate-900 group-hover:bg-slate-800 transition-colors`}>
                    <action.icon className={action.color} size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-200">{action.title}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">{action.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6 bg-gradient-to-br from-indigo-900/20 to-slate-900/20 border-indigo-500/20">
            <div className="flex items-center gap-2 mb-4 text-indigo-400">
              <Lightbulb size={18} />
              <h3 className="text-sm font-bold uppercase tracking-widest">Aether Insight</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              "System performance could increase by <span className="text-indigo-400 font-bold">18%</span> if we transition the Project Phoenix database to the new Vector-Edge architecture. Should I begin the migration plan?"
            </p>
            <div className="mt-6 flex gap-3">
              <button className="flex-1 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors shadow-lg shadow-indigo-600/20">
                Execute Plan
              </button>
              <button className="flex-1 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors">
                Dismiss
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default IntelligenceLayer;