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

interface BuyModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export function BuyModal({ isOpen, onClose, lang }: BuyModalProps) {
  const t = translations[lang].buyModal;
  const isRtl = lang === 'he' || lang === 'ar';
  
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [network, setNetwork] = useState('');

  const totalILS = amount ? (parseFloat(amount) * 4.4).toFixed(2) : '0.00';

  const handleSubmit = () => {
    if (!amount || !address || !network) return;
    
    const message = encodeURIComponent(
      `Hi, I want to buy ${amount} USDT.\n\nMy USDT address: ${address}\nNetwork: ${network}\nTotal: ${totalILS} ILS`
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
            <Label htmlFor="amount" className="text-foreground">{t.amountLabel}</Label>
            <Input
              id="amount"
              type="number"
              placeholder={t.amountPlaceholder}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-foreground">{t.addressLabel}</Label>
            <Input
              id="address"
              type="text"
              placeholder={t.addressPlaceholder}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-foreground">{t.networkLabel}</Label>
            <Select value={network} onValueChange={setNetwork}>
              <SelectTrigger className="bg-input border-border text-foreground">
                <SelectValue placeholder={t.selectNetwork} />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="TRC20">{t.trc20}</SelectItem>
                <SelectItem value="ERC20">{t.erc20}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="p-4 bg-secondary/50 rounded-xl border border-border">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">{t.totalLabel}</span>
              <span className="text-2xl font-bold text-primary">₪{totalILS}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">1 USDT = 4.4 ILS</p>
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
              disabled={!amount || !address || !network}
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {t.submitButton}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
