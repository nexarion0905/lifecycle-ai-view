import React from 'react';
import { 
  Users, 
  MessageSquare, 
  Video, 
  Calendar, 
  Paperclip, 
  Send,
  MoreVertical,
  CheckCircle2,
  Clock,
  Layout,
  Zap
} from 'lucide-react';
import GlassCard from '../ui/glass-card';

const Collaboration: React.FC = () => {
  const activeUsers = [
    { name: 'Sarah Chen', role: 'DevOps', status: 'Online', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop' },
    { name: 'Marcus Bell', role: 'AI Eng', status: 'Online', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop' },
    { name: 'Elena Rossi', role: 'Designer', status: 'Away', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop' },
    { name: 'David Kim', role: 'Architect', status: 'Online', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop' },
  ];

  const tasks = [
    { id: 1, title: 'Optimize Simulation Parameters', project: 'Phoenix', priority: 'High', status: 'Doing' },
    { id: 2, title: 'Security Audit - Edge Node 4', project: 'Cyber-Shield', priority: 'Critical', status: 'Todo' },
    { id: 3, title: 'Finalize Aether API Docs', project: 'Aether', priority: 'Medium', status: 'Done' },
  ];

  return (
    <div className="h-[calc(100vh-10rem)] flex flex-col lg:flex-row gap-8">
      {/* Collaboration Hub */}
      <div className="flex-1 flex flex-col min-w-0 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Team Workspace</h2>
            <p className="text-slate-400 mt-1">Real-time synchronization across your global project team.</p>
          </div>
          <div className="flex gap-2">
            <button className="p-3 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-300">
              <Video size={20} />
            </button>
            <button className="p-3 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-300">
              <Calendar size={20} />
            </button>
          </div>
        </div>

        {/* Messaging Area (Simplified) */}
        <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden">
          <div className="p-6 border-b border-slate-800/50 flex items-center justify-between bg-slate-900/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center">
                <MessageSquare className="text-indigo-400" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white">#Project-Phoenix-Sync</h4>
                <p className="text-[11px] text-slate-500 uppercase tracking-widest font-bold">12 Active Members</p>
              </div>
            </div>
            <button className="text-slate-500 hover:text-white">
              <MoreVertical size={20} />
            </button>
          </div>

          <div className="flex-1 p-8 space-y-8 overflow-y-auto custom-scrollbar">
            <div className="flex gap-4">
              <img src={activeUsers[0].img} alt="" className="w-9 h-9 rounded-full shrink-0" />
              <div className="space-y-2 max-w-lg">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-200">{activeUsers[0].name}</span>
                  <span className="text-[10px] text-slate-500">10:24 AM</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 text-sm text-slate-300 leading-relaxed">
                  Hey team, I've just updated the simulation models for the edge nodes. The latency has dropped by 15ms. Please review the PR!
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <img src={activeUsers[1].img} alt="" className="w-9 h-9 rounded-full shrink-0" />
              <div className="space-y-2 max-w-lg">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-200">{activeUsers[1].name}</span>
                  <span className="text-[10px] text-slate-500">10:26 AM</span>
                </div>
                <div className="p-4 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-sm text-indigo-200 leading-relaxed">
                  Great work! I'll run the integration tests now. Aether AI is predicting a smooth transition.
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="px-4 py-1 rounded-full bg-slate-800 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Nexus AI joined the conversation
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">
                <Zap size={18} className="text-white" />
              </div>
              <div className="space-y-2 max-w-lg">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-indigo-400">Nexus Intelligence</span>
                  <span className="text-[10px] text-slate-500">10:28 AM</span>
                </div>
                <div className="p-4 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-sm text-indigo-100 leading-relaxed italic">
                  "Optimization confirmed. I recommend proceeding with the deployment to staging. All health checks are green."
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-900/40 border-t border-slate-800/50">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Message #Project-Phoenix-Sync..." 
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-4 pl-14 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
              <button className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-indigo-400">
                <Paperclip size={20} />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-400 hover:text-indigo-300">
                <Send size={20} />
              </button>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Side Panel: Team & Tasks */}
      <div className="w-full lg:w-80 space-y-8">
        <GlassCard className="p-6">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
            <Users size={16} className="text-indigo-400" /> Active Team
          </h3>
          <div className="space-y-4">
            {activeUsers.map((user, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img src={user.img} alt="" className="w-10 h-10 rounded-full" />
                    <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-slate-900 ${
                      user.status === 'Online' ? 'bg-emerald-500' : 'bg-amber-500'
                    }`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-200">{user.name}</h4>
                    <p className="text-[11px] text-slate-500">{user.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-xl text-xs font-bold text-slate-400 uppercase tracking-widest transition-all">
            Manage Team
          </button>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
            <Layout size={16} className="text-indigo-400" /> Priority Tasks
          </h3>
          <div className="space-y-4">
            {tasks.map((task) => (
              <div key={task.id} className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <div className="flex justify-between items-start mb-2">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                    task.priority === 'Critical' ? 'bg-rose-500/10 text-rose-400' :
                    task.priority === 'High' ? 'bg-amber-500/10 text-amber-400' :
                    'bg-indigo-500/10 text-indigo-400'
                  }`}>
                    {task.priority}
                  </span>
                  {task.status === 'Done' ? <CheckCircle2 className="text-emerald-500" size={14} /> : <Clock className="text-slate-500" size={14} />}
                </div>
                <h4 className="text-sm font-bold text-slate-200 mb-1">{task.title}</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{task.project} System</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Collaboration;