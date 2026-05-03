import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  TrendingUp, 
  BarChart3, 
  History, 
  ArrowUpRight, 
  AlertCircle,
  Plus,
  Coins,
  Cpu,
  Workflow
} from 'lucide-react';
import { toast } from 'sonner';
import GlassCard from '../ui/glass-card';

const creditPacks = [
  { id: 'small', credits: 1000, price: '$10', label: 'Starter Pack', bonus: '0%' },
  { id: 'medium', credits: 6000, price: '$50', label: 'Scaling Node', bonus: '20%', popular: true },
  { id: 'large', credits: 30000, price: '$200', label: 'Neural Matrix', bonus: '50%' }
];

const CreditEconomy: React.FC = () => {
  const [credits] = useState(2450);
  const totalLimit = 5000;
  const percentage = (credits / totalLimit) * 100;

  const usageHistory = [
    { action: 'Neural Simulation #842', cost: 150, date: '2h ago', type: 'simulation' },
    { action: 'Global Path Analysis', cost: 85, date: '5h ago', type: 'analytics' },
    { action: 'Auto-Optimization Sync', cost: 40, date: 'Yesterday', type: 'optimization' },
    { action: 'Large Model Training', cost: 1200, date: 'Mar 10', type: 'ai' },
  ];

  return (
    <div className="space-y-8">
      {/* Balance Hero */}
      <section className="relative h-64 rounded-3xl overflow-hidden group">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/cda5bbdd-9764-4e72-a538-55b503901563/ai-credit-hero-e130c45e-1777833959018.webp" 
          alt="Credit Economy" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
        <div className="absolute inset-0 p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-indigo-500/20 rounded-lg backdrop-blur-md">
              <Coins className="text-indigo-400" size={20} />
            </div>
            <span className="text-slate-300 font-bold uppercase tracking-widest text-xs">Current Balance</span>
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tighter">
            {credits.toLocaleString()} <span className="text-2xl text-slate-400">Credits</span>
          </h1>
          <div className="max-w-md">
            <div className="flex justify-between text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">
              <span>Usage this month</span>
              <span>{percentage.toFixed(1)}% of limit</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Purchase Packs */}
        <div className="xl:col-span-2 space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Plus size={20} className="text-indigo-400" />
            Purchase Credit Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {creditPacks.map((pack) => (
              <GlassCard 
                key={pack.id}
                className={`p-6 flex flex-col hover:border-indigo-500/50 transition-all cursor-pointer group ${pack.popular ? 'bg-indigo-600/5 border-indigo-500/30' : ''}`}
                onClick={() => toast.success(`Processing purchase for ${pack.label}`)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-indigo-600/20 transition-colors">
                    <Coins className="text-slate-400 group-hover:text-indigo-400" size={20} />
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
                    +{pack.bonus} Bonus
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{pack.label}</h4>
                <p className="text-2xl font-black text-white mb-4">{pack.credits.toLocaleString()}</p>
                <div className="mt-auto pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-lg font-bold text-indigo-400">{pack.price}</span>
                  <ArrowUpRight size={18} className="text-slate-500 group-hover:text-indigo-400 transition-colors" />
                </div>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="p-6 bg-amber-500/5 border-amber-500/20">
            <div className="flex gap-4">
              <div className="p-3 bg-amber-500/20 rounded-xl shrink-0">
                <AlertCircle className="text-amber-400" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Auto-Top Up Recommended</h4>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Enable automatic purchases when your balance falls below 500 credits to ensure your simulations never pause.
                </p>
                <button className="px-4 py-2 bg-amber-500 text-slate-900 rounded-lg text-sm font-bold hover:bg-amber-400 transition-all">
                  Enable Smart Recharge
                </button>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Usage Analytics */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <TrendingUp size={20} className="text-indigo-400" />
            Usage Analytics
          </h3>
          <GlassCard className="p-6">
            <div className="space-y-6">
              {usageHistory.map((item, i) => (
                <div key={i} className="flex justify-between items-center group">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-indigo-600/10 transition-colors">
                      {item.type === 'simulation' && <Cpu size={16} className="text-slate-400" />}
                      {item.type === 'analytics' && <BarChart3 size={16} className="text-slate-400" />}
                      {item.type === 'optimization' && <Workflow size={16} className="text-slate-400" />}
                      {item.type === 'ai' && <Zap size={16} className="text-slate-400" />}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-200">{item.action}</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest">{item.date}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-rose-400">-{item.cost}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-xl text-xs font-bold text-slate-400 uppercase tracking-widest transition-all">
              Full Usage Export
            </button>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default CreditEconomy;