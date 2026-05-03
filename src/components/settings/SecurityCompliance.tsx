import React, { useState } from 'react';
import { 
  Shield, 
  Key, 
  Lock, 
  Smartphone, 
  Fingerprint, 
  Globe, 
  AlertTriangle,
  Users,
  Eye,
  Settings,
  ShieldCheck,
  ChevronRight,
  Database
} from 'lucide-react';
import { toast } from 'sonner';
import GlassCard from '../ui/glass-card';

const SecurityCompliance: React.FC = () => {
  const [mfaEnabled, setMfaEnabled] = useState(true);

  const activeSessions = [
    { device: 'MacBook Pro 16"', location: 'San Francisco, US', ip: '192.168.1.1', current: true },
    { device: 'iPhone 15 Pro', location: 'San Francisco, US', ip: '192.168.1.45', current: false },
    { device: 'Workstation 04', location: 'London, UK', ip: '84.22.10.12', current: false },
  ];

  const handleMfaToggle = () => {
    setMfaEnabled(!mfaEnabled);
    toast.success(`Multi-Factor Authentication ${!mfaEnabled ? 'enabled' : 'disabled'}`);
  };

  return (
    <div className="space-y-8 pb-12">
      <header>
        <h2 className="text-3xl font-bold text-white mb-2">Security & Compliance</h2>
        <p className="text-slate-400">Configure your identity protection and enterprise security protocols.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Security Settings */}
        <div className="lg:col-span-2 space-y-6">
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Shield size={24} className="text-indigo-400" />
              Identity Protection
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-500/10 rounded-xl">
                    <Smartphone size={24} className="text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Multi-Factor Authentication (MFA)</h4>
                    <p className="text-sm text-slate-400">Protect your account with an extra security layer.</p>
                  </div>
                </div>
                <button 
                  onClick={handleMfaToggle}
                  className={`w-14 h-7 rounded-full transition-all relative ${mfaEnabled ? 'bg-indigo-600' : 'bg-slate-700'}`}
                >
                  <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${mfaEnabled ? 'left-8' : 'left-1'}`} />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-xl">
                    <Fingerprint size={24} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Biometric Login</h4>
                    <p className="text-sm text-slate-400">Use TouchID or FaceID for instant access.</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold border border-slate-700">
                  Configure
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-500/10 rounded-xl">
                    <Key size={24} className="text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Security Keys (FIDO2)</h4>
                    <p className="text-sm text-slate-400">Hardware keys like Yubico or Titan.</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold border border-slate-700">
                  Add Key
                </button>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Eye size={24} className="text-indigo-400" />
              Active Sessions
            </h3>
            <div className="space-y-4">
              {activeSessions.map((session, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-slate-800 rounded-2xl group hover:bg-slate-800/20 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-800 rounded-lg">
                      <Globe size={18} className="text-slate-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white flex items-center gap-2">
                        {session.device}
                        {session.current && <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded-full uppercase tracking-widest">Current</span>}
                      </p>
                      <p className="text-xs text-slate-500">{session.location} • {session.ip}</p>
                    </div>
                  </div>
                  {!session.current && (
                    <button className="text-xs text-rose-400 hover:text-rose-300 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                      Revoke
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button className="mt-6 text-sm text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-2">
              Sign out from all devices <ChevronRight size={16} />
            </button>
          </GlassCard>
        </div>

        {/* Compliance & Team Sidebars */}
        <div className="space-y-6">
          <GlassCard className="p-6 border-emerald-500/20 bg-emerald-500/5">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <ShieldCheck size={20} className="text-emerald-400" />
              Compliance Status
            </h4>
            <div className="space-y-4">
              {[
                { label: 'GDPR / CCPA', status: 'Compliant' },
                { label: 'SOC2 Type II', status: 'In Review' },
                { label: 'PCI DSS L1', status: 'Compliant' },
                { label: 'ISO 27001', status: 'Compliant' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">{item.label}</span>
                  <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${
                    item.status === 'Compliant' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Users size={20} className="text-indigo-400" />
              Role Management
            </h4>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Define who has access to your systems and data through granular Role-Based Access Control (RBAC).
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-slate-800/50 rounded-xl flex items-center justify-between border border-slate-700/50">
                <span className="text-sm font-semibold text-white">System Admin</span>
                <span className="text-xs text-slate-500">2 Users</span>
              </div>
              <div className="p-3 bg-slate-800/50 rounded-xl flex items-center justify-between border border-slate-700/50">
                <span className="text-sm font-semibold text-white">Team Lead</span>
                <span className="text-xs text-slate-500">8 Users</span>
              </div>
              <div className="p-3 bg-slate-800/50 rounded-xl flex items-center justify-between border border-slate-700/50">
                <span className="text-sm font-semibold text-white">Developer</span>
                <span className="text-xs text-slate-500">24 Users</span>
              </div>
            </div>
            <button className="w-full mt-6 py-3 bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-400 border border-indigo-500/20 rounded-xl text-xs font-bold uppercase tracking-widest transition-all">
              Manage Permissions
            </button>
          </GlassCard>

          <GlassCard className="p-6 bg-rose-500/5 border-rose-500/20">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-rose-400" size={20} />
              <h4 className="font-bold text-white">Threat Level: Low</h4>
            </div>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Nexus OS has blocked 142 malicious request attempts in the last 24 hours. No data breaches detected.
            </p>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[98%]" />
            </div>
            <p className="text-[10px] text-slate-500 mt-2 text-center uppercase font-bold tracking-widest">System Integrity: 99.9%</p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default SecurityCompliance;