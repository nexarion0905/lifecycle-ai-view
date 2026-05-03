import React from 'react';
import { 
  Plus, 
  Workflow, 
  GitBranch, 
  Code2, 
  TestTube2, 
  Rocket, 
  RefreshCcw,
  Search,
  Filter,
  MoreVertical,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import GlassCard from '../ui/glass-card';

const ProjectLifecycle: React.FC = () => {
  const lifecycleStages = [
    { name: 'Ideation', icon: Workflow, status: 'Completed', color: 'text-emerald-400' },
    { name: 'Architecture', icon: GitBranch, status: 'In Progress', color: 'text-indigo-400' },
    { name: 'Simulation', icon: RefreshCcw, status: 'Pending', color: 'text-slate-500' },
    { name: 'Development', icon: Code2, status: 'Pending', color: 'text-slate-500' },
    { name: 'Testing', icon: TestTube2, status: 'Pending', color: 'text-slate-500' },
    { name: 'Deployment', icon: Rocket, status: 'Pending', color: 'text-slate-500' },
  ];

  const projects = [
    { id: '1', name: 'Project Phoenix', stage: 'Simulation', progress: 65, health: 'Stable', members: 8 },
    { id: '2', name: 'Cyber-Shield v3', stage: 'Architecture', progress: 32, health: 'Warning', members: 12 },
    { id: '3', name: 'Aether Network', stage: 'Deployment', progress: 98, health: 'Excellent', members: 5 },
    { id: '4', name: 'Quantum Ledger', stage: 'Ideation', progress: 15, health: 'Stable', members: 4 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Lifecycle Management</h2>
          <p className="text-slate-400 mt-1">Manage, simulate, and deploy complex system architectures.</p>
        </div>
        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20">
          <Plus size={18} /> Create Project
        </button>
      </div>

      {/* Lifecycle Flow Visualization */}
      <GlassCard className="p-8">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-8">End-to-End System Workflow</h3>
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
          {lifecycleStages.map((stage, i) => (
            <React.Fragment key={stage.name}>
              <div className="flex flex-col items-center gap-4 group cursor-pointer">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all border shadow-lg ${
                  stage.status === 'Completed' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' :
                  stage.status === 'In Progress' ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400 animate-pulse' :
                  'bg-slate-800/50 border-slate-700 text-slate-500'
                }`}>
                  <stage.icon size={28} />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-slate-200">{stage.name}</p>
                  <p className={`text-[10px] uppercase tracking-wider font-bold mt-1 ${
                    stage.status === 'Completed' ? 'text-emerald-400' :
                    stage.status === 'In Progress' ? 'text-indigo-400' :
                    'text-slate-500'
                  }`}>
                    {stage.status}
                  </p>
                </div>
              </div>
              {i < lifecycleStages.length - 1 && (
                <div className="hidden lg:block flex-1 h-px bg-slate-800 relative">
                  <ChevronRight size={14} className="absolute -right-2 -top-[7px] text-slate-800" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </GlassCard>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <GlassCard key={project.id} className="p-6 hover:border-indigo-500/30 transition-all cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-800/50 rounded-xl group-hover:bg-indigo-600/10 transition-colors">
                <Box size={24} className="text-slate-400 group-hover:text-indigo-400" />
              </div>
              <button className="text-slate-500 hover:text-white">
                <MoreVertical size={18} />
              </button>
            </div>
            
            <h4 className="text-lg font-bold text-white mb-1">{project.name}</h4>
            <p className="text-sm text-slate-400 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              Currently in: <span className="text-indigo-400 font-medium">{project.stage}</span>
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">
                  <span>Phase Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
                <div className="flex -space-x-2">
                  {[...Array(Math.min(project.members, 3))].map((_, i) => (
                    <img 
                      key={i}
                      src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=32&h=32&fit=crop`} 
                      className="w-8 h-8 rounded-full border-2 border-slate-900"
                      alt="member"
                    />
                  ))}
                  {project.members > 3 && (
                    <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-slate-400">
                      +{project.members - 3}
                    </div>
                  )}
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-md ${
                  project.health === 'Excellent' ? 'text-emerald-400 bg-emerald-500/10' :
                  project.health === 'Stable' ? 'text-blue-400 bg-blue-500/10' :
                  'text-amber-400 bg-amber-500/10'
                }`}>
                  {project.health}
                </span>
              </div>
            </div>
          </GlassCard>
        ))}
        
        <button className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-slate-800 hover:border-indigo-500/50 transition-all group min-h-[300px]">
          <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-indigo-600/20 transition-all">
            <Plus size={24} className="text-slate-500 group-hover:text-indigo-400" />
          </div>
          <span className="font-bold text-slate-400 group-hover:text-slate-200 transition-colors">Add New Project</span>
          <span className="text-xs text-slate-600 mt-2">Scale your infrastructure</span>
        </button>
      </div>
    </div>
  );
};

import { Box } from 'lucide-react';

export default ProjectLifecycle;