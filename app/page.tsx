'use client';

import { useState } from 'react';
import { 
  Shield, 
  Zap, 
  Clock, 
  BadgeCheck, 
  Star,
  ArrowUpDown,
  Users,
  TrendingUp,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingIcons, BTCIcon, ETHIcon, USDTIcon, ILSIcon } from '@/components/floating-icons';
import { LanguageSwitcher } from '@/components/language-switcher';
import { BuyModal } from '@/components/buy-modal';
import { SellModal } from '@/components/sell-modal';
import { translations, reviews, Language } from '@/lib/translations';

export default function Home() {
  const [lang, setLang] = useState<Language>('en');
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [sellModalOpen, setSellModalOpen] = useState(false);

  const t = translations[lang];
  const currentReviews = reviews[lang];
  const isRtl = lang === 'he' || lang === 'ar';

  return (
    <div 
      className="min-h-screen bg-background text-foreground"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">₪</span>
              </div>
              <span className="text-xl font-bold text-foreground">Shekel</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.home}</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.about}</a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.howItWorks}</a>
              <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.reviews}</a>
            </div>

            <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        
        {/* Floating Icons */}
        <FloatingIcons />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* BingX Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
            <BadgeCheck className="w-5 h-5 text-primary" />
            <span className="text-sm text-primary font-medium">{t.about.verification}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            {t.hero.title}
          </h1>
          
          <p className="text-xl sm:text-2xl text-primary font-semibold mb-4">
            {t.hero.subtitle}
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty">
            {t.hero.description}
          </p>

          {/* Exchange Rates Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="w-full sm:w-64 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border animate-pulse-glow">
              <div className="flex items-center justify-center gap-3 mb-3">
                <USDTIcon className="w-8 h-8" />
                <ArrowUpDown className="w-5 h-5 text-muted-foreground" />
                <ILSIcon className="w-8 h-8" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{t.rates.buyRate}</p>
              <p className="text-2xl font-bold text-primary">{t.rates.buyPrice}</p>
            </div>

            <div className="w-full sm:w-64 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border">
              <div className="flex items-center justify-center gap-3 mb-3">
                <USDTIcon className="w-8 h-8" />
                <ArrowUpDown className="w-5 h-5 text-muted-foreground" />
                <ILSIcon className="w-8 h-8" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{t.rates.sellRate}</p>
              <p className="text-2xl font-bold text-accent">{t.rates.sellPrice}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => setBuyModalOpen(true)}
              className="w-full sm:w-auto px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/25"
            >
              {t.hero.buyButton}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setSellModalOpen(true)}
              className="w-full sm:w-auto px-8 py-6 text-lg border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-xl"
            >
              {t.hero.sellButton}
            </Button>
          </div>

          {/* Floating Crypto Icons Display */}
          <div className="flex items-center justify-center gap-8 mt-16">
            <div className="animate-float">
              <BTCIcon className="w-16 h-16 drop-shadow-lg" />
            </div>
            <div className="animate-float-delayed">
              <ETHIcon className="w-16 h-16 drop-shadow-lg" />
            </div>
            <div className="animate-float-slow">
              <USDTIcon className="w-16 h-16 drop-shadow-lg" />
            </div>
            <div className="animate-float">
              <ILSIcon className="w-16 h-16 drop-shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16">
            {t.features.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Speed */}
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t.features.speed.title}
              </h3>
              <p className="text-muted-foreground">
                {t.features.speed.description}
              </p>
            </div>

            {/* Security */}
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t.features.security.title}
              </h3>
              <p className="text-muted-foreground">
                {t.features.security.description}
              </p>
            </div>

            {/* Support */}
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t.features.support.title}
              </h3>
              <p className="text-muted-foreground">
                {t.features.support.description}
              </p>
            </div>

            {/* Verified */}
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <BadgeCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t.features.verified.title}
              </h3>
              <p className="text-muted-foreground">
                {t.features.verified.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <BadgeCheck className="w-5 h-5 text-primary" />
                <span className="text-sm text-primary font-medium">{t.about.verification}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                {t.about.title}
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                {t.about.description}
              </p>

              <div className="p-4 rounded-xl bg-warning/10 border border-warning/30 mb-8">
                <p className="text-sm text-warning">
                  {t.about.kyc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => setBuyModalOpen(true)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {t.hero.buyButton}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setSellModalOpen(true)}
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  {t.hero.sellButton}
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl bg-card border border-border text-center">
                <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="text-3xl font-bold text-foreground mb-1">{t.about.stats.users}</p>
                <p className="text-muted-foreground">{t.about.stats.usersLabel}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card border border-border text-center">
                <ArrowUpDown className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="text-3xl font-bold text-foreground mb-1">{t.about.stats.transactions}</p>
                <p className="text-muted-foreground">{t.about.stats.transactionsLabel}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card border border-border text-center">
                <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="text-3xl font-bold text-foreground mb-1">{t.about.stats.volume}</p>
                <p className="text-muted-foreground">{t.about.stats.volumeLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t.reviews.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.reviews.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentReviews.map((review, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-foreground mb-4">{`"${review.text}"`}</p>
                <p className="text-sm text-muted-foreground font-medium">{review.name}</p>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">10,000+ {t.about.stats.usersLabel}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {t.hero.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => setBuyModalOpen(true)}
              className="w-full sm:w-auto px-10 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/25"
            >
              {t.hero.buyButton}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setSellModalOpen(true)}
              className="w-full sm:w-auto px-10 py-6 text-lg border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-xl"
            >
              {t.hero.sellButton}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">₪</span>
              </div>
              <span className="font-bold text-foreground">Shekel</span>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              © 2024 Shekel Exchange. {t.footer.rights}
            </p>

            <p className="text-xs text-muted-foreground text-center max-w-xs">
              {t.footer.disclaimer}
            </p>
          </div>
        </div>
      </footer>

{/* Telegram Floating Button */}
<a
  href="https://t.me/TetherGate74"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0088cc] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  aria-label="Contact us on Telegram"
>
  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.62.15-.15 2.7-2.48 2.75-2.7.01-.03.01-.14-.06-.2-.07-.06-.17-.04-.25-.02-.11.02-1.84 1.16-5.16 3.41-.49.33-.93.5-1.33.49-.44-.01-1.29-.25-1.92-.45-.77-.25-1.39-.39-1.34-.83.03-.23.35-.46.97-.71 3.82-1.66 6.37-2.75 7.66-3.27 3.64-1.48 4.4-1.74 4.89-1.75.11 0 .35.03.5.15.13.1.17.24.18.34-.01.06-.01.19-.02.26z"/>
  </svg>
</a>

{/* Modals */}
<BuyModal isOpen={buyModalOpen} onClose={() => setBuyModalOpen(false)} lang={lang} />
<SellModal isOpen={sellModalOpen} onClose={() => setSellModalOpen(false)} lang={lang} />

</div >
);
}
