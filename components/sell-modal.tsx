'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { translations, Language } from '@/lib/translations';

interface SellModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export function SellModal({ isOpen, onClose, lang }: SellModalProps) {
  const t = translations[lang].sellModal;
  const isRtl = lang === 'he' || lang === 'ar';
  
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const totalILS = amount ? (parseFloat(amount) * 3.5).toFixed(2) : '0.00';

  const getPaymentMethodName = (method: string) => {
    switch (method) {
      case 'bit': return t.bit;
      case 'paybox': return t.paybox;
      case 'bank': return t.bankTransfer;
      default: return method;
    }
  };

  const handleSubmit = () => {
    if (!amount || !paymentMethod || !accountNumber) return;
    
    const methodName = getPaymentMethodName(paymentMethod);
    const message = encodeURIComponent(
      `Hi, I want to sell ${amount} USDT.\n\nPayment method: ${methodName}\nAccount number: ${accountNumber}\nI will receive: ${totalILS} ILS`
    );
    
    window.open(`https://wa.me/972507446823?text=${message}`, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div 
        className="relative w-full max-w-md bg-card border border-border rounded-2xl p-6 shadow-2xl"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-foreground mb-6">{t.title}</h2>

        <div className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="sell-amount" className="text-foreground">{t.amountLabel}</Label>
            <Input
              id="sell-amount"
              type="number"
              placeholder={t.amountPlaceholder}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-foreground">{t.paymentMethod}</Label>
            <Select value={paymentMethod} onValueChange={setPaymentMethod}>
              <SelectTrigger className="bg-input border-border text-foreground">
                <SelectValue placeholder={t.selectPayment} />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="bit">{t.bit}</SelectItem>
                <SelectItem value="paybox">{t.paybox}</SelectItem>
                <SelectItem value="bank">{t.bankTransfer}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="account" className="text-foreground">{t.accountLabel}</Label>
            <Input
              id="account"
              type="text"
              placeholder={t.accountPlaceholder}
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="p-4 bg-secondary/50 rounded-xl border border-border">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">{t.totalLabel}</span>
              <span className="text-2xl font-bold text-accent">₪{totalILS}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">1 USDT = 3.5 ILS</p>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 border-border text-foreground hover:bg-secondary"
            >
              {t.cancel}
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!amount || !paymentMethod || !accountNumber}
              className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {t.submitButton}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
