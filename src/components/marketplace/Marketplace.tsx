import React from 'react';
import { 
  ShoppingBag, 
  Search, 
  Filter, 
  Star, 
  Download, 
  ExternalLink,
  Tag,
  Boxes,
  Cpu,
  ShieldCheck,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import GlassCard from '../ui/glass-card';

const Marketplace: React.FC = () => {
  const categories = ['All Assets', 'AI Models', 'System Frameworks', 'Infrastructure', 'Security', 'UI Kits'];
  
  const featuredAssets = [
    { 
      id: '1', 
      title: 'Neural-Core V4', 
      provider: 'DeepLogic AI', 
      price: '$1,299', 
      rating: 4.9, 
      reviews: 124, 
      type: 'AI Model',
      tags: ['LLM', 'Edge', 'Fast'],
      img: 'https://images.unsplash.com/photo-1620712943543-bcc4628c9759?w=400&h=250&fit=crop'
    },
    { 
      id: '2', 
      title: 'Quantum-Safe Auth', 
      provider: 'ShieldLabs', 
      price: '$850', 
      rating: 4.8, 
      reviews: 89, 
      type: 'Security',
      tags: ['Auth', 'Quantum', 'NIST'],
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop'
    },
    { 
      id: '3', 
      title: 'Aether Grid Engine', 
      provider: 'Nexus Systems', 
      price: '$2,400', 
      rating: 5.0, 
      reviews: 56, 
      type: 'Infrastructure',
      tags: ['Grid', 'Compute', 'Global'],
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Marketplace Hero */}
      <section className="relative h-64 rounded-3xl overflow-hidden">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/cda5bbdd-9764-4e72-a538-55b503901563/marketplace-showcase-5c45abe9-1777832061110.webp" 
          alt="Marketplace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-center px-10">
          <h2 className="text-3xl font-bold text-white mb-2">Nexus Marketplace</h2>
          <p className="text-slate-300 max-w-lg">Monetize your systems or integrate industry-leading architectures into your project lifecycle.</p>
        </div>
      </section>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
        <div className="flex gap-2 overflow-x-auto pb-2 w-full lg:w-auto no-scrollbar">
          {categories.map((cat, i) => (
            <button 
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                i === 0 ? 'bg-indigo-600 text-white' : 'bg-slate-800/50 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex gap-4 w-full lg:w-auto">
          <div className="relative flex-1 lg:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input 
              type="text" 
              placeholder="Search assets..." 
              className="w-full bg-slate-900/50 border border-slate-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>
          <button className="p-2 bg-slate-800/50 border border-slate-800 rounded-lg text-slate-400 hover:text-white">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Asset Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredAssets.map((asset) => (
          <GlassCard key={asset.id} className="group overflow-hidden flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={asset.img} 
                alt={asset.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 px-2 py-1 rounded bg-slate-900/80 backdrop-blur-md border border-slate-700 text-white text-xs font-bold">
                {asset.type}
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{asset.title}</h4>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs font-bold">{asset.rating}</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-4">By {asset.provider}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {asset.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-slate-800 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-800/50">
                <span className="text-xl font-extrabold text-white">{asset.price}</span>
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-lg transition-all flex items-center gap-2">
                  <Download size={16} /> Get Asset
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Trending & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
        <GlassCard className="p-8">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <TrendingUp className="text-indigo-400" /> Market Intelligence
          </h3>
          <div className="space-y-4">
            {[
              { label: 'Most Wanted Asset', value: 'Edge Compute Clusters', change: '+24%' },
              { label: 'Average Asset Price', value: '$840.00', change: '-2%' },
              { label: 'Market Sentiment', value: 'High Growth', change: '+12%' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-800/30 border border-slate-800">
                <span className="text-slate-400 font-medium">{stat.label}</span>
                <div className="text-right">
                  <div className="text-white font-bold">{stat.value}</div>
                  <div className={`text-[10px] font-bold ${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {stat.change} (30d)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
        
        <GlassCard className="p-8 bg-indigo-600/5 border-indigo-500/10">
          <h3 className="text-lg font-bold text-white mb-2">Sell Your System</h3>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            Have you built an innovative AI architecture or a robust infrastructure framework? List it on Nexus and earn revenue through our enterprise licensing engine.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <Boxes className="text-indigo-400 mb-2" size={20} />
              <p className="text-xs font-bold text-slate-200">Scale Globally</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <ShieldCheck className="text-emerald-400 mb-2" size={20} />
              <p className="text-xs font-bold text-slate-200">Secure Licensing</p>
            </div>
          </div>
          <button className="w-full py-3 bg-white text-slate-900 hover:bg-slate-200 rounded-xl font-bold transition-all">
            Become a Provider
          </button>
        </GlassCard>
      </div>
    </div>
  );
};

export default Marketplace;