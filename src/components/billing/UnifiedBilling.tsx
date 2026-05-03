import React from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  CreditCard, 
  ShieldCheck, 
  Clock,
  ArrowUpRight,
  DollarSign,
  Search,
  Filter
} from 'lucide-react';
import GlassCard from '../ui/glass-card';

const transactions = [
  { id: 'TXN-9042', date: 'Mar 12, 2024', description: 'Monthly Pro Subscription', amount: '$49.00', status: 'Succeeded', type: 'subscription' },
  { id: 'TXN-8821', date: 'Mar 08, 2024', description: 'Credit Pack: Neural Matrix (30k)', amount: '$200.00', status: 'Succeeded', type: 'credits' },
  { id: 'TXN-8744', date: 'Feb 12, 2024', description: 'Monthly Pro Subscription', amount: '$49.00', status: 'Succeeded', type: 'subscription' },
  { id: 'TXN-8512', date: 'Feb 01, 2024', description: 'Credit Pack: Starter (1k)', amount: '$10.00', status: 'Succeeded', type: 'credits' },
  { id: 'TXN-8201', date: 'Jan 12, 2024', description: 'Monthly Pro Subscription', amount: '$49.00', status: 'Succeeded', type: 'subscription' },
];

const UnifiedBilling: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Billing & Invoices</h2>
          <p className="text-slate-400">Manage your enterprise financial history and tax compliance.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-semibold transition-all flex items-center gap-2 border border-slate-700">
            <Download size={18} /> Export CSV
          </button>
          <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition-all flex items-center gap-2 border border-indigo-500/50">
            <FileText size={18} /> Tax Settings
          </button>
        </div>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="p-6">
          <p className="text-slate-400 text-sm font-medium mb-1">Total Lifetime Spend</p>
          <h3 className="text-3xl font-bold text-white mb-4">$3,420.50</h3>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
            <ArrowUpRight size={14} />
            +12% from last quarter
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <p className="text-slate-400 text-sm font-medium mb-1">Current Active Plan</p>
          <h3 className="text-3xl font-bold text-white mb-4">Pro Architect</h3>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest">
            Renewal in 28 days
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <p className="text-slate-400 text-sm font-medium mb-1">Unpaid Balance</p>
          <h3 className="text-3xl font-bold text-white mb-4">$0.00</h3>
          <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
            No pending invoices
          </div>
        </GlassCard>
      </div>

      {/* Transaction Table */}
      <GlassCard className="overflow-hidden">
        <div className="p-6 border-b border-slate-800/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Clock size={20} className="text-indigo-400" />
            Transaction History
          </h3>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input 
                type="text" 
                placeholder="Search invoices..." 
                className="bg-slate-900/50 border border-slate-800 rounded-lg py-1.5 pl-9 pr-4 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <button className="p-2 text-slate-400 hover:text-white border border-slate-800 rounded-lg">
              <Filter size={16} />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-800/30">
                <th className="px-8 py-4">Transaction ID</th>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4">Description</th>
                <th className="px-8 py-4">Type</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Amount</th>
                <th className="px-8 py-4 text-right">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-slate-800/30 transition-colors group">
                  <td className="px-8 py-5">
                    <span className="font-mono text-xs text-slate-400 group-hover:text-indigo-400 transition-colors">{txn.id}</span>
                  </td>
                  <td className="px-8 py-5 text-sm text-slate-300">{txn.date}</td>
                  <td className="px-8 py-5">
                    <div className="text-sm font-semibold text-white">{txn.description}</div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                      txn.type === 'subscription' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-emerald-500/10 text-emerald-400'
                    }`}>
                      {txn.type}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                      <ShieldCheck size={14} />
                      {txn.status}
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-sm font-bold text-white">{txn.amount}</span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 text-slate-500 hover:text-indigo-400 transition-colors">
                      <Download size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-6 border-t border-slate-800/50 bg-slate-900/20 text-center">
          <p className="text-xs text-slate-500">
            Showing 5 of 14 transactions. <button className="text-indigo-400 hover:text-indigo-300 font-bold uppercase tracking-widest ml-2">Load More</button>
          </p>
        </div>
      </GlassCard>

      {/* Payment Security Notice */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 border border-slate-800 rounded-3xl bg-slate-900/40">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center">
            <ShieldCheck size={28} className="text-indigo-400" />
          </div>
          <div>
            <h4 className="font-bold text-white">PCI DSS Compliance</h4>
            <p className="text-sm text-slate-400">All payment data is encrypted and handled by Tier-1 providers. Nexus OS never stores your security keys.</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Processed By</span>
            <div className="flex gap-4 grayscale opacity-50">
              <span className="text-white font-black italic">STRIPE</span>
              <span className="text-white font-black italic">PAYPAL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnifiedBilling;