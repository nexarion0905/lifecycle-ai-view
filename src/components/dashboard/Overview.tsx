import React from 'react';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Activity, 
  Zap, 
  Layers, 
  Box, 
  Globe, 
  Clock,
  ShieldCheck,
  Cpu,
  Plus
} from 'lucide-react';
import { ViewState } from '../../App';
import GlassCard from '../ui/glass-card';

interface OverviewProps {
  setView: (view: ViewState) => void;
}

const Overview: React.FC<OverviewProps> = ({ setView }) => {
  const stats = [
    { label: 'Active Projects', value: '12', trend: '+2', trendType: 'up', icon: Box, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'System Uptime', value: '99.98%', trend: '+0.01%', trendType: 'up', icon: Activity, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'AI Compute Load', value: '64%', trend: '-4%', trendType: 'down', icon: Zap, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { label: 'Market Revenue', value: '$2.4M', trend: '+18%', trendType: 'up', icon: Globe, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  ];

  const recentSystems = [
    { id: '1', name: 'Neural-Sync Core', type: 'AI Architecture', status: 'Healthy', performance: 98, updated: '12m ago' },
    { id: '2', name: 'Quantum-Safe Edge', type: 'Security Protocol', status: 'Warning', performance: 82, updated: '45m ago' },
    { id: '3', name: 'Aether Flow 2.0', type: 'Data Pipeline', status: 'Critical', performance: 45, updated: '2h ago' },
    { id: '4', name: 'Bio-Logistics Node', type: 'Supply Chain AI', status: 'Healthy', performance: 94, updated: '5h ago' },
  ];

  const timelineLogs = [
    { time: '10:45 AM', event: 'Autonomous deployment of Patch 4.2.1', system: 'Neural-Sync', icon: Zap },
    { time: '09:20 AM', event: 'Resource allocation rebalanced', system: 'Infrastructure', icon: Activity },
    { time: '08:15 AM', event: 'New vulnerability scan completed', system: 'Security', icon: ShieldCheck },
    { time: 'Yesterday', event: 'AI Model training cycle finished', system: 'Aether Core', icon: Cpu },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative h-80 rounded-3xl overflow-hidden group">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/cda5bbdd-9764-4e72-a538-55b503901563/dashboard-hero-46d5743e-1777832059599.webp" 
          alt="Dashboard Hero" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
        <div className="absolute inset-0 p-10 flex flex-col justify-center max-w-2xl">
          <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
            Welcome back, <span className="text-indigo-400">Alex</span>.
          </h1>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Nexus OS has completed 14 autonomous optimizations since your last login. All core systems are performing within peak parameters.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => setView('lifecycle')}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all flex items-center gap-2"
            >
              <Plus size={18} /> New System
            </button>
            <button 
              onClick={() => setView('simulation')}
              className="px-6 py-3 bg-slate-800/80 hover:bg-slate-700 text-white rounded-xl font-semibold backdrop-blur-md transition-all border border-slate-700"
            >
              Run Simulation
            </button>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <GlassCard key={i} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon className={stat.color} size={24} />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${stat.trendType === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {stat.trendType === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                {stat.trend}
              </div>
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Systems Health */}
        <GlassCard className="xl:col-span-2 overflow-hidden">
          <div className="p-6 border-b border-slate-800/50 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Layers size={20} className="text-indigo-400" />
              Active Systems Status
            </h3>
            <button className="text-sm text-indigo-400 hover:text-indigo-300 font-medium">View All Systems</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-800/20">
                  <th className="px-6 py-4">System Name</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Efficiency</th>
                  <th className="px-6 py-4 text-right">Last Sync</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {recentSystems.map((system) => (
                  <tr key={system.id} className="hover:bg-slate-800/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-200 group-hover:text-indigo-400 transition-colors">{system.name}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400">{system.type}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        system.status === 'Healthy' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                        system.status === 'Warning' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                        'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                      }`}>
                        {system.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1.5 w-24 bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              system.performance > 90 ? 'bg-emerald-500' :
                              system.performance > 70 ? 'bg-amber-500' : 'bg-rose-500'
                            }`}
                            style={{ width: `${system.performance}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-slate-300">{system.performance}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-xs text-slate-500 font-mono">{system.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* Timeline / Activity */}
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Clock size={20} className="text-indigo-400" />
            System Lifecycle Log
          </h3>
          <div className="space-y-6">
            {timelineLogs.map((log, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-indigo-500/50 transition-colors">
                    <log.icon size={14} className="text-slate-400 group-hover:text-indigo-400" />
                  </div>
                  {i !== timelineLogs.length - 1 && <div className="absolute top-8 left-4 w-px h-10 bg-slate-800" />}
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1 uppercase tracking-wider">{log.time}</p>
                  <p className="text-sm font-semibold text-slate-200">{log.event}</p>
                  <p className="text-xs text-indigo-400/70 mt-0.5">{log.system}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-xl text-xs font-bold text-slate-400 uppercase tracking-widest transition-all">
            Full Audit Trail
          </button>
        </GlassCard>
      </div>
    </div>
  );
};

export default Overview;