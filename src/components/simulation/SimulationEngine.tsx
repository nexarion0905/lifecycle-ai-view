import React from 'react';
import { 
  Cpu, 
  Zap, 
  Play, 
  Square, 
  RefreshCcw, 
  Settings2, 
  Activity,
  History,
  Layers,
  Search,
  ChevronRight
} from 'lucide-react';
import GlassCard from '../ui/glass-card';

const SimulationEngine: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Simulation Engine</h2>
          <p className="text-slate-400 mt-1">Virtualize system behaviors before real-world execution.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all flex items-center gap-2 border border-slate-700">
            <History size={18} /> History
          </button>
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20">
            <Play size={18} /> New Simulation
          </button>
        </div>
      </div>

      {/* Simulation Display */}
      <GlassCard className="aspect-video relative overflow-hidden bg-slate-900 border-slate-800/50 p-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/cda5bbdd-9764-4e72-a538-55b503901563/simulation-engine-c166c0cc-1777832060952.webp" 
          alt="Simulation" 
          className="w-full h-full object-cover opacity-60"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 flex flex-col pointer-events-none">
          {/* Top Bar */}
          <div className="p-6 flex justify-between items-start bg-gradient-to-b from-slate-900 via-slate-900/40 to-transparent">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">Active Simulation: Core-Alpha-Test</span>
              </div>
              <p className="text-[10px] text-slate-500 font-mono">ID: SIM-9482-XR | Elapsed: 02:45:12</p>
            </div>
            <div className="flex gap-2 pointer-events-auto">
              <button className="p-2 bg-slate-900/80 backdrop-blur-md rounded-lg text-slate-400 hover:text-white border border-slate-700">
                <Settings2 size={16} />
              </button>
              <button className="p-2 bg-rose-600 rounded-lg text-white hover:bg-rose-500 shadow-lg shadow-rose-600/20">
                <Square size={16} fill="currentColor" />
              </button>
            </div>
          </div>

          {/* Side Metrics */}
          <div className="mt-auto p-6 flex justify-between items-end bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent">
            <div className="grid grid-cols-3 gap-8 pointer-events-auto">
              {[
                { label: 'Latency', value: '4.2ms', color: 'text-indigo-400' },
                { label: 'Load', value: '62.8%', color: 'text-emerald-400' },
                { label: 'Loss Rate', value: '0.001%', color: 'text-cyan-400' },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                  <p className={`text-xl font-extrabold ${stat.color}`}>{stat.value}</p>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4 pointer-events-auto">
              <div className="flex flex-col items-end">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Aether Analysis</p>
                <p className="text-sm font-bold text-slate-200">Stable Outcome: 98.4%</p>
              </div>
              <div className="w-12 h-12 rounded-full border-4 border-indigo-500/20 flex items-center justify-center relative">
                <div className="absolute inset-0 border-t-4 border-indigo-500 rounded-full animate-spin" />
                <span className="text-[10px] font-bold text-white">AI</span>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Control Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <GlassCard className="p-6 col-span-2">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Layers size={18} className="text-indigo-400" /> Layer Parameters
            </h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
              <input 
                type="text" 
                placeholder="Find node..." 
                className="bg-slate-900/50 border border-slate-800 rounded-lg py-1.5 pl-9 pr-4 text-xs focus:outline-none"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'Compute Cluster A', type: 'High Priority', value: 85, status: 'Peak' },
              { name: 'Data Pipeline B', type: 'Medium Priority', value: 42, status: 'Normal' },
              { name: 'Edge Node Gamma', type: 'Critical Path', value: 12, status: 'Low' },
            ].map((node, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-800/30 border border-slate-800 flex items-center gap-6">
                <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-700">
                  <Cpu size={18} className="text-indigo-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-bold text-slate-200">{node.name}</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">{node.type}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-indigo-500 rounded-full" 
                      style={{ width: `${node.value}%` }} 
                    />
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded bg-slate-900 border border-slate-700 ${
                    node.status === 'Peak' ? 'text-amber-400' : 'text-slate-400'
                  }`}>
                    {node.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6 bg-gradient-to-br from-indigo-900/10 to-transparent">
          <h3 className="font-bold text-white mb-6">Simulation Scenarios</h3>
          <div className="space-y-4">
            {[
              { title: 'Global Traffic Surge', desc: 'Simulate 10x normal load' },
              { title: 'Edge Node Failure', desc: 'Test failover mechanisms' },
              { title: 'Database Migration', desc: 'Validate data integrity flow' },
              { title: 'Security Breach', desc: 'Test autonomous mitigation' },
            ].map((scene, i) => (
              <button 
                key={i} 
                className="w-full p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-all text-left flex items-center justify-between group"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">{scene.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{scene.desc}</p>
                </div>
                <ChevronRight size={16} className="text-slate-600 group-hover:text-indigo-400" />
              </button>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/20 rounded-xl text-xs font-bold text-indigo-400 uppercase tracking-widest transition-all">
            Load Custom Template
          </button>
        </GlassCard>
      </div>
    </div>
  );
};

export default SimulationEngine;