import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Lock, 
  Github, 
  Chrome as Google, 
  Apple, 
  ShieldCheck, 
  ArrowRight,
  UserPlus,
  LogIn,
  RefreshCw,
  Fingerprint
} from 'lucide-react';
import { toast } from 'sonner';
import GlassCard from '../ui/glass-card';

interface AuthOverlayProps {
  onSuccess: (user: any) => void;
}

type AuthMode = 'signin' | 'signup' | 'mfa' | 'reset';

const AuthOverlay: React.FC<AuthOverlayProps> = ({ onSuccess }) => {
  const [mode, setMode] = useState<AuthMode>('signin');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (mode === 'signin' || mode === 'signup') {
      setMode('mfa');
      toast.info('Verification code sent to your device');
    } else if (mode === 'mfa') {
      toast.success('Access granted to Nexus OS');
      onSuccess({ name: 'Alex Rivera', email, role: 'Sr. Architect' });
    }
    setLoading(false);
  };

  const socialButtons = [
    { icon: Google, label: 'Google', color: 'hover:bg-red-500/10 hover:border-red-500/50' },
    { icon: Github, label: 'GitHub', color: 'hover:bg-slate-700/50 hover:border-slate-500/50' },
    { icon: Apple, label: 'Apple', color: 'hover:bg-white/10 hover:border-white/50' },
  ];

  const getTitle = () => {
    if (mode === 'signin') return "Welcome Back";
    if (mode === 'signup') return "Create Enterprise Account";
    if (mode === 'mfa') return "Security Verification";
    if (mode === 'reset') return "Account Recovery";
    return "";
  };

  const getSubtitle = () => {
    if (mode === 'signin') return "Secure access to your enterprise projects";
    if (mode === 'signup') return "Join the next generation of AI lifecycle management";
    if (mode === 'mfa') return "Enter the 6-digit code sent to your authenticator app";
    if (mode === 'reset') return "We will send instructions to your registered email";
    return "";
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/90 backdrop-blur-md p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <GlassCard className="p-8 border-slate-700/50 shadow-2xl relative overflow-hidden">
          {/* Background Highlight */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-600/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <ShieldCheck className="text-white" size={32} />
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">{getTitle()}</h2>
              <p className="text-slate-400 text-sm">{getSubtitle()}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode !== 'mfa' && (
                <div className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                      type="email"
                      placeholder="Enterprise Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                    />
                  </div>
                  {mode !== 'reset' && (
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                      <input
                        type="password"
                        placeholder="Security Key"
                        required
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                      />
                    </div>
                  )}
                </div>
              )}

              {mode === 'mfa' && (
                <div className="flex justify-center gap-2 mb-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      className="w-12 h-14 bg-slate-900/50 border border-slate-700 rounded-xl text-center text-xl font-bold text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                      autoFocus={i === 1}
                    />
                  ))}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <RefreshCw className="animate-spin" size={20} />
                ) : (
                  <>
                    {mode === 'signin' && 'Sign In'}
                    {mode === 'signup' && 'Initialize Account'}
                    {mode === 'mfa' && 'Verify & Launch'}
                    {mode === 'reset' && 'Send Link'}
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>

            {mode === 'signin' && (
              <div className="mt-6">
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-800"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-[#111827] px-2 text-slate-500">Corporate SSO</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {socialButtons.map((btn, i) => (
                    <button
                      key={i}
                      className={`flex items-center justify-center p-3 bg-slate-800/50 border border-slate-700 rounded-xl transition-all ${btn.color}`}
                    >
                      <btn.icon size={20} className="text-slate-300" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 text-center space-y-2">
              {mode === 'signin' ? (
                <>
                  <p className="text-slate-500 text-sm">
                    {"Don't have an enterprise account? "}
                    <button onClick={() => setMode('signup')} className="text-indigo-400 hover:text-indigo-300 font-semibold">
                      Request Access
                    </button>
                  </p>
                  <button onClick={() => setMode('reset')} className="text-slate-500 hover:text-slate-300 text-xs font-medium">
                    Forgot your security key?
                  </button>
                </>
              ) : (
                <button onClick={() => setMode('signin')} className="text-slate-400 hover:text-white text-sm font-semibold flex items-center justify-center gap-2 mx-auto">
                  <LogIn size={16} /> Back to Secure Login
                </button>
              )}
            </div>
          </div>
        </GlassCard>
        
        <div className="mt-8 flex items-center justify-center gap-6 text-slate-500 text-xs">
          <span className="flex items-center gap-1"><Fingerprint size={12} /> Biometric Capable</span>
          <span className="flex items-center gap-1"><ShieldCheck size={12} /> PCI DSS Compliant</span>
          <span className="flex items-center gap-1"><RefreshCw size={12} /> Real-time Audit</span>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthOverlay;