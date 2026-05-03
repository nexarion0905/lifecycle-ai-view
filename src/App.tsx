import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Workflow, 
  Cpu, 
  ShoppingBag, 
  Users, 
  BarChart3, 
  BookOpen, 
  Settings,
  Menu,
  X,
  Search,
  Bell,
  MessageSquare,
  Zap,
  ChevronRight,
  ShieldCheck,
  History,
  Activity,
  Terminal,
  Layers,
  Globe,
  DollarSign,
  Briefcase,
  CreditCard,
  Coins,
  ShieldAlert
} from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Overview from './components/dashboard/Overview';
import ProjectLifecycle from './components/projects/ProjectLifecycle';
import IntelligenceLayer from './components/ai/IntelligenceLayer';
import Marketplace from './components/marketplace/Marketplace';
import Collaboration from './components/collaboration/Collaboration';
import SimulationEngine from './components/simulation/SimulationEngine';
import PerformanceAnalytics from './components/analytics/PerformanceAnalytics';
import KnowledgeBase from './components/docs/KnowledgeBase';

// New Production Modules
import AuthOverlay from './components/auth/AuthOverlay';
import SubscriptionManager from './components/billing/SubscriptionManager';
import CreditEconomy from './components/billing/CreditEconomy';
import UnifiedBilling from './components/billing/UnifiedBilling';
import SecurityCompliance from './components/settings/SecurityCompliance';

export type ViewState = 
  | 'overview' 
  | 'lifecycle' 
  | 'intelligence' 
  | 'simulation' 
  | 'marketplace' 
  | 'collaboration' 
  | 'analytics' 
  | 'docs' 
  | 'settings'
  | 'subscriptions'
  | 'credits'
  | 'billing'
  | 'security';

interface User {
  name: string;
  email: string;
  role: string;
}

function App() {
  const [activeView, setActiveView] = useState<ViewState>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAiPanelOpen, setIsAiPanelOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Auto-prompt login after mount for demo
  useEffect(() => {
    if (!user) {
      // Small delay for effect
      const timer = setTimeout(() => {
        // We'll let the overlay handle it
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [user]);

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard, category: 'Core' },
    { id: 'lifecycle', label: 'Lifecycle', icon: Workflow, category: 'Core' },
    { id: 'simulation', label: 'Simulation', icon: Cpu, category: 'Core' },
    { id: 'intelligence', label: 'Intelligence', icon: Zap, category: 'Core' },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingBag, category: 'Ecosystem' },
    { id: 'collaboration', label: 'Collaboration', icon: Users, category: 'Ecosystem' },
    { id: 'analytics', label: 'Performance', icon: BarChart3, category: 'Ecosystem' },
    { id: 'subscriptions', label: 'Subscriptions', icon: CreditCard, category: 'Enterprise' },
    { id: 'credits', label: 'AI Economy', icon: Coins, category: 'Enterprise' },
    { id: 'billing', label: 'Billing Logs', icon: DollarSign, category: 'Enterprise' },
    { id: 'security', label: 'Security', icon: ShieldCheck, category: 'System' },
    { id: 'docs', label: 'Knowledge', icon: BookOpen, category: 'System' },
    { id: 'settings', label: 'Settings', icon: Settings, category: 'System' },
  ];

  const categories = ['Core', 'Ecosystem', 'Enterprise', 'System'];

  const renderView = () => {
    switch (activeView) {
      case 'overview': return <Overview setView={setActiveView} />;
      case 'lifecycle': return <ProjectLifecycle />;
      case 'simulation': return <SimulationEngine />;
      case 'intelligence': return <IntelligenceLayer />;
      case 'marketplace': return <Marketplace />;
      case 'collaboration': return <Collaboration />;
      case 'analytics': return <PerformanceAnalytics />;
      case 'docs': return <KnowledgeBase />;
      case 'subscriptions': return <SubscriptionManager />;
      case 'credits': return <CreditEconomy />;
      case 'billing': return <UnifiedBilling />;
      case 'security': return <SecurityCompliance />;
      default: return <Overview setView={setActiveView} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#020617] text-slate-200 overflow-hidden font-sans">
      <Toaster position="top-right" theme="dark" />
      
      {!user && <AuthOverlay onSuccess={(userData) => setUser(userData)} />}

      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="relative z-50 flex flex-col bg-slate-900/50 backdrop-blur-xl border-r border-slate-800"
      >
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Layers className="text-white" size={24} />
          </div>
          {isSidebarOpen && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
            >
              Nexus OS
            </motion.span>
          )}
        </div>

        <nav className="flex-1 px-4 py-6 space-y-8 overflow-y-auto custom-scrollbar">
          {categories.map(cat => (
            <div key={cat} className="space-y-2">
              {isSidebarOpen && (
                <p className="px-4 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">{cat}</p>
              )}
              {sidebarItems.filter(item => item.category === cat).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id as ViewState)}
                  className={`w-full flex items-center gap-4 px-4 py-2.5 rounded-lg transition-all duration-200 group ${
                    activeView === item.id 
                      ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_15px_-3px_rgba(79,70,229,0.3)]' 
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                  }`}
                >
                  <item.icon size={18} />
                  {isSidebarOpen && (
                    <span className="font-medium whitespace-nowrap text-sm">{item.label}</span>
                  )}
                  {activeView === item.id && isSidebarOpen && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-500"
                    />
                  )}
                </button>
              ))}
            </div>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-800">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex items-center gap-4 text-slate-500 hover:text-slate-300 transition-colors w-full"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            {isSidebarOpen && <span className="text-sm font-medium">Collapse Menu</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#020617]">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-slate-800/50 bg-slate-900/20 backdrop-blur-md sticky top-0 z-40">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="text" 
                placeholder="Search systems, models, tasks..." 
                className="w-full bg-slate-900/50 border border-slate-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                toast.success('AI Insights ready');
                setIsAiPanelOpen(!isAiPanelOpen);
              }}
              className="p-2 text-slate-400 hover:text-indigo-400 transition-colors relative"
            >
              <Zap size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            </button>
            <button className="p-2 text-slate-400 hover:text-slate-200 transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-rose-500 rounded-full" />
            </button>
            <div className="h-8 w-px bg-slate-800 mx-2" />
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-slate-200">{user?.name || 'Alex Rivera'}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{user?.role || 'Sr. Architect'}</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces" 
                alt="Avatar" 
                className="w-9 h-9 rounded-full ring-2 ring-indigo-500/20"
              />
            </div>
          </div>
        </header>

        {/* View Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-8"
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Right AI Sidebar (Collapsible) */}
      <AnimatePresence>
        {isAiPanelOpen && (
          <motion.aside
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            className="w-96 bg-slate-900/80 backdrop-blur-2xl border-l border-slate-800 shadow-2xl z-50 flex flex-col"
          >
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/40">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-500/20 rounded-lg">
                  <Cpu className="text-indigo-400" size={20} />
                </div>
                <h3 className="font-semibold text-slate-200">Aether Intelligence</h3>
              </div>
              <button 
                onClick={() => setIsAiPanelOpen(false)}
                className="text-slate-500 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 p-6 space-y-6 overflow-y-auto custom-scrollbar">
              {/* Credit Status in AI Panel */}
              <div className="p-4 rounded-xl bg-indigo-600/10 border border-indigo-500/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em]">Credits Available</span>
                  <span className="text-sm font-bold text-white">2,450</span>
                </div>
                <div className="h-1.5 w-full bg-indigo-900/50 rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-indigo-500 w-[49%]" />
                </div>
                <button 
                  onClick={() => setActiveView('credits')}
                  className="text-[10px] font-black text-indigo-400 hover:text-indigo-300 uppercase tracking-widest flex items-center gap-1"
                >
                  Top Up Credits <ChevronRight size={10} />
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "Nexus OS suggests upgrading to the Team plan to unlock collaborative simulation modeling for your current project cluster."
                </p>
                <button 
                  onClick={() => setActiveView('subscriptions')}
                  className="mt-3 text-[10px] font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 uppercase tracking-widest"
                >
                  View Plans <ChevronRight size={10} />
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active Security Insights</h4>
                <div className="space-y-3">
                  {[
                    { title: 'Global Identity', value: 'Protected', color: 'text-emerald-400' },
                    { title: 'Payment Layer', status: 'PCI DSS L1', color: 'text-blue-400' },
                    { title: 'Threat Level', value: 'Low', color: 'text-indigo-400' }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/40 border border-slate-700/50">
                      <span className="text-sm text-slate-400">{stat.title}</span>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${stat.color}`}>{stat.value || stat.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-slate-800 bg-slate-900/40">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ask Aether anything..." 
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-3 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400">
                  <Terminal size={18} />
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;