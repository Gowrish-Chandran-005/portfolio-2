import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Copy, Check, Mail, Sparkles, PhoneCall } from 'lucide-react';
import { ContactDispatch } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactDispatch>({
    senderName: '',
    email: '',
    organization: '',
    inquiryType: 'commission',
    timeline: 'Within 30 Days',
    brief: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [receiptCode, setReceiptCode] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.senderName || !formData.email) return;

    // Generate unique archival telegraph reference
    const code = `GC-DISPATCH-${Math.floor(100000 + Math.random() * 900000)}`;
    setReceiptCode(code);
    setSubmitted(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(receiptCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      senderName: '',
      email: '',
      organization: '',
      inquiryType: 'commission',
      timeline: 'Within 30 Days',
      brief: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1c1c18]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        className="relative w-full max-w-2xl bg-[#fcf9f2] border-4 border-[#1c1c18] shadow-ink-xl max-h-[94vh] flex flex-col overflow-hidden"
      >
        {/* Archival Telegraph Header */}
        <div className="p-4 sm:p-6 bg-[#f0eee7] border-b-2 border-[#1c1c18] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#fabc4d] text-[#1c1c18] border-2 border-[#1c1c18] flex items-center justify-center font-bold">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-['Anton'] text-2xl sm:text-3xl uppercase tracking-wider text-[#1c1c18]">
                ATELIER DISPATCH TELEGRAPH
              </h2>
              <span className="font-['Space_Grotesk'] text-xs text-[#767872] font-semibold">
                COMMISSION REQUISITION & KEYNOTE BOOKING
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-[#ffffff] hover:bg-[#fabc4d] border-2 border-[#1c1c18] shadow-ink-sm text-[#1c1c18] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1">
          <AnimatePresence mode="wait">
            {submitted ? (
              /* Success Telegraph Confirmation Receipt */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#ffffff] p-6 sm:p-8 border-2 border-[#1c1c18] shadow-ink-lg flex flex-col items-center text-center relative"
              >
                {/* Stamp effect */}
                <div className="w-16 h-16 rounded-full bg-[#ffdead] border-2 border-[#1c1c18] flex items-center justify-center mb-4 rotate-[-4deg] shadow-ink-sm">
                  <CheckCircle2 className="w-8 h-8 text-[#1c1c18]" />
                </div>

                <div className="inline-block bg-[#1c1c18] text-[#ffffff] px-3 py-1 font-['Space_Grotesk'] text-xs uppercase font-bold tracking-widest mb-2">
                  TRANSMISSION VERIFIED • INK DRY
                </div>

                <h3 className="font-['Anton'] text-3xl sm:text-4xl uppercase text-[#1c1c18] mb-2">
                  DISPATCH RECEIVED IN ATELIER.
                </h3>

                <p className="font-['Epilogue'] text-sm text-[#464742] max-w-md mb-6 leading-relaxed">
                  Thank you, <span className="font-bold text-[#1c1c18]">{formData.senderName}</span>. Your brief has been filed into the active studio dispatch ledger. Gowrish reviews incoming inquiries within 24 hours.
                </p>

                {/* Dispatch Archival Token */}
                <div className="w-full max-w-md p-3 bg-[#f0eee7] border border-[#1c1c18] mb-6 flex items-center justify-between font-['Space_Grotesk'] text-xs">
                  <div className="text-left">
                    <span className="text-[#767872] block text-[10px] uppercase font-bold">
                      ARCHIVAL TRACKING REF:
                    </span>
                    <span className="font-bold text-[#355e9e] font-mono text-sm">{receiptCode}</span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="px-2.5 py-1 bg-[#ffffff] border border-[#1c1c18] shadow-xs text-[11px] font-bold uppercase flex items-center gap-1 hover:bg-[#e5e2db]"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 bg-[#f0eee7] text-[#1c1c18] font-['Space_Grotesk'] text-xs uppercase font-bold border border-[#1c1c18] hover:bg-[#e5e2db]"
                  >
                    Send Another Dispatch
                  </button>
                  <button
                    onClick={onClose}
                    className="px-5 py-2 bg-[#1c1c18] text-[#ffffff] font-['Space_Grotesk'] text-xs uppercase font-bold shadow-ink hover:bg-[#355e9e] transition-colors"
                  >
                    Close Ledger
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Archival Form Input */
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-['Space_Grotesk'] text-xs font-bold uppercase text-[#1c1c18] mb-1">
                      Your Name / Entity *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Jane Doe, Design Lead"
                      value={formData.senderName}
                      onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#ffffff] border-2 border-[#1c1c18] shadow-ink-sm font-['Epilogue'] text-sm focus:outline-none focus:border-[#355e9e]"
                    />
                  </div>

                  <div>
                    <label className="block font-['Space_Grotesk'] text-xs font-bold uppercase text-[#1c1c18] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g., jane@studio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#ffffff] border-2 border-[#1c1c18] shadow-ink-sm font-['Epilogue'] text-sm focus:outline-none focus:border-[#355e9e]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-['Space_Grotesk'] text-xs font-bold uppercase text-[#1c1c18] mb-1">
                      Classification of Project
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 bg-[#ffffff] border-2 border-[#1c1c18] shadow-ink-sm font-['Space_Grotesk'] text-xs font-bold uppercase focus:outline-none focus:border-[#355e9e]"
                    >
                      <option value="commission">Editorial Design / Poster Commission</option>
                      <option value="speaking">Public Speaking / Keynote Address</option>
                      <option value="collaboration">Design System & UI Architecture</option>
                      <option value="consultation">Creative Direction / Mentorship</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-['Space_Grotesk'] text-xs font-bold uppercase text-[#1c1c18] mb-1">
                      Timeline Horizon
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#ffffff] border-2 border-[#1c1c18] shadow-ink-sm font-['Space_Grotesk'] text-xs font-bold uppercase focus:outline-none focus:border-[#355e9e]"
                    >
                      <option value="Urgent (1-2 Weeks)">Urgent (1–2 Weeks)</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="Next Quarter">Next Quarter</option>
                      <option value="Exploratory / Ongoing">Exploratory / Ongoing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-['Space_Grotesk'] text-xs font-bold uppercase text-[#1c1c18] mb-1">
                    Project Brief / Vision Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe the context, target audience, medium (print, digital, or stage), and core story you wish to tell..."
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#ffffff] border-2 border-[#1c1c18] shadow-ink-sm font-['Epilogue'] text-sm focus:outline-none focus:border-[#355e9e] leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-[11px] font-['Space_Grotesk'] font-bold text-[#767872]">
                    <span className="w-2 h-2 rounded-full bg-[#355e9e]" />
                    <span>ENCRYPTION: ARCHIVAL COTTON RAG SPEC</span>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#355e9e] text-[#ffffff] font-['Space_Grotesk'] text-xs uppercase font-bold border-2 border-[#1c1c18] shadow-ink hover:shadow-cobalt-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Transmit Dispatch Telegraph
                  </button>
                </div>
              </form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
