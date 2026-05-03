import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Zap, 
  Users, 
  Building2, 
  Globe, 
  ShieldCheck, 
  ArrowRight,
  CreditCard,
  History,
  Info
} from 'lucide-react';
import { toast } from 'sonner';
import GlassCard from '../ui/glass-card';

const tiers = [
  {
    id: 'free',
    name: 'Discovery',
    price: '$0',
    description: 'Perfect for individual innovators exploring AI workflows.',
    features: ['3 Active Projects', 'Basic AI Simulations', '100 Credits / mo', 'Community Support'],
    button: 'Current Plan',
    current: true,
    color: 'slate'
  },
  {
    id: 'pro',
    name: 'Pro Architect',
    price: '$49',
    description: 'Advanced capabilities for serious system designers.',
    features: ['Unlimited Projects', 'Deep Neural Simulations', '5,000 Credits / mo', 'Priority Support', 'Custom Integrations'],
    button: 'Upgrade to Pro',
    current: false,
    color: 'indigo',
    popular: true
  },
  {
    id: 'team',
    name: 'Unified Team',
    price: '$199',
    description: 'Scale collaborative AI projects across your department.',
    features: ['Everything in Pro', 'Collaborative Workspace', '25,000 Credits / mo', 'Advanced RBAC', 'Team Analytics'],
    button: 'Choose Team',
    current: false,
    color: 'emerald'
  },
  {
    id: 'enterprise',
    name: 'Global Enterprise',
    price: 'Custom',
    description: 'Full-spectrum infrastructure for global organizations.',
    features: ['Dedicated Compute', 'Unlimited Credits', 'SLA Guarantee', 'White-labeling', '24/7 Concierge Support'],
    button: 'Contact Sales',
    current: false,
    color: 'amber'
  }
];

const SubscriptionManager: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const handleUpgrade = (tier: string) => {
    if (tier === 'enterprise') {
      toast.info('Our sales team will contact you shortly.');
    } else {
      toast.success(`Redirecting to secure ${tier} checkout...`);
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Subscription Management</h2>
          <p className="text-slate-400">Scale your infrastructure as your enterprise grows.</p>
        </div>
        
        <div className="flex items-center bg-slate-900/50 border border-slate-800 p-1 rounded-xl">
          <button 
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setBillingCycle('yearly')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${billingCycle === 'yearly' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Yearly <span className="ml-1 text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full">-20%</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((tier) => (
          <GlassCard 
            key={tier.id} 
            className={`flex flex-col p-8 relative ${tier.popular ? 'border-indigo-500/50 ring-1 ring-indigo-500/20' : ''}`}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                Most Popular
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white">
                  {tier.price === 'Custom' ? tier.price : billingCycle === 'yearly' ? `$${Math.floor(parseInt(tier.price.slice(1)) * 0.8)}` : tier.price}
                </span>
                {tier.price !== 'Custom' && <span className="text-slate-500 text-sm">/mo</span>}
              </div>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">{tier.description}</p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <Check className={`shrink-0 mt-0.5 ${tier.popular ? 'text-indigo-400' : 'text-slate-500'}`} size={16} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleUpgrade(tier.id)}
              disabled={tier.current}
              className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                tier.current 
                ? 'bg-slate-800 text-slate-500 cursor-default border border-slate-700' 
                : tier.popular 
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20' 
                  : 'bg-white/5 hover:bg-white/10 text-white border border-slate-700'
              }`}
            >
              {tier.button}
              {!tier.current && <ArrowRight size={16} />}
            </button>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
        <GlassCard className="p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <History size={20} className="text-indigo-400" />
              Billing Overview
            </h3>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <Info size={14} />
              Next billing date: April 12, 2024
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-indigo-500/10 rounded-lg">
                  <Zap size={20} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Discovery Plan</p>
                  <p className="text-xs text-slate-500">3 of 3 projects used</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-emerald-400">Active</p>
                <button className="text-[10px] text-slate-500 hover:text-white uppercase font-bold tracking-wider">Manage</button>
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <CreditCard size={20} className="text-indigo-400" />
            Payment Method
          </h3>
          <div className="p-4 border border-slate-800 rounded-xl bg-slate-900/40 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-slate-800 rounded flex items-center justify-center">
                  <span className="text-[8px] font-bold text-white italic">VISA</span>
                </div>
                <span className="text-sm text-slate-200">•••• 4242</span>
              </div>
              <span className="text-xs text-slate-500 font-mono">12/26</span>
            </div>
            <button className="text-xs text-indigo-400 hover:text-indigo-300 font-bold uppercase tracking-wider">Update Details</button>
          </div>
          <div className="space-y-3">
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Global Support</p>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded bg-slate-800/50 flex items-center justify-center"><Globe size={14} className="text-slate-500" /></div>
              <div className="w-8 h-8 rounded bg-slate-800/50 flex items-center justify-center"><ShieldCheck size={14} className="text-slate-500" /></div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default SubscriptionManager;