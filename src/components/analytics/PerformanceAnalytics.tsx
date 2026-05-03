import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Zap, 
  ArrowUpRight, 
  ArrowDownRight, 
  Filter, 
  Download,
  Calendar,
  Activity
} from 'lucide-react';
import GlassCard from '../ui/glass-card';

const PerformanceAnalytics: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">System Performance</h2>
          <p className="text-slate-400 mt-1">Deep analytics and ROI forecasting for enterprise projects.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm font-medium flex items-center gap-2">
            <Calendar size={16} /> Last 30 Days
          </button>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/20">
            <Download size={16} /> Export Data
          </button>
        </div>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Project ROI', value: '$1.8M', change: '+12.4%', type: 'up', icon: TrendingUp, color: 'text-emerald-400' },
          { label: 'Resource Efficiency', value: '94.2%', change: '+3.1%', type: 'up', icon: Target, iconColor: 'text-indigo-400' },
          { label: 'Operational Cost', value: '$42k', change: '-8.2%', type: 'down', icon: Zap, iconColor: 'text-amber-400' },
        ].map((stat, i) => (
          <GlassCard key={i} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-slate-800/50 rounded-xl">
                <stat.icon size={20} className={stat.iconColor || stat.color} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${stat.type === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {stat.type === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change}
              </div>
            </div>
            <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
            <h3 className="text-2xl font-extrabold text-white">{stat.value}</h3>
          </GlassCard>
        ))}
      </div>

      {/* Detailed Charts Mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-white flex items-center gap-2">
              <BarChart3 size={18} className="text-indigo-400" /> System Growth Delta
            </h3>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="w-3 h-3 rounded-full bg-slate-700" />
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-4">
            {[40, 65, 45, 90, 75, 55, 80, 60, 95, 85, 70, 100].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-gradient-to-t from-indigo-600/20 to-indigo-500 rounded-t-sm transition-all duration-1000" 
                  style={{ height: `${h}%` }}
                />
                <span className="text-[8px] font-bold text-slate-600 uppercase">W{i+1}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-8">
          <h3 className="font-bold text-white mb-8 flex items-center gap-2">
            <Activity size={18} className="text-emerald-400" /> Operational Health Index
          </h3>
          <div className="space-y-6">
            {[
              { label: 'Compute Utilization', value: 78, color: 'bg-indigo-500' },
              { label: 'Storage Elasticity', value: 92, color: 'bg-emerald-500' },
              { label: 'API Response Time', value: 64, color: 'bg-cyan-500' },
              { label: 'Security Compliance', value: 100, color: 'bg-indigo-400' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <span>{stat.label}</span>
                  <span className="text-white">{stat.value}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${stat.color} rounded-full`}
                    style={{ width: `${stat.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Team Productivity */}
      <GlassCard className="p-8">
        <h3 className="text-lg font-bold text-white mb-6">Team Resource Distribution</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="pb-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Team Member</th>
                <th className="pb-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Active Systems</th>
                <th className="pb-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Output Delta</th>
                <th className="pb-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Health</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {[
                { name: 'Sarah Chen', systems: 4, delta: '+15.2%', health: 'Optimal' },
                { name: 'Marcus Bell', systems: 3, delta: '+8.4%', health: 'Steady' },
                { name: 'Elena Rossi', systems: 2, delta: '+22.1%', health: 'Optimal' },
                { name: 'David Kim', systems: 5, delta: '-2.4%', health: 'At Capacity' },
              ].map((member, i) => (
                <tr key={i} className="group">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-800" />
                      <span className="text-sm font-bold text-slate-200">{member.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-slate-400">{member.systems} Projects</td>
                  <td className="py-4 text-sm font-bold text-emerald-400">{member.delta}</td>
                  <td className="py-4">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                      member.health === 'Optimal' ? 'bg-emerald-500/10 text-emerald-400' :
                      member.health === 'Steady' ? 'bg-indigo-500/10 text-indigo-400' :
                      'bg-amber-500/10 text-amber-400'
                    }`}>
                      {member.health}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
};

export default PerformanceAnalytics;