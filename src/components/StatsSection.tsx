import { Card } from "@/components/ui/card";

const StatsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Borrow Responsibly, Lend Smartly
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            That swift, smarter, more convenient place to safely borrow and securely lend out in real-time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center bg-gradient-card text-white shadow-medium hover:shadow-glow transition-all duration-300">
            <div className="mb-4">
              <span className="text-sm font-medium text-white/80">Over</span>
            </div>
            <div className="mb-4">
              <span className="text-4xl md:text-5xl font-bold">₦15B+</span>
            </div>
            <p className="text-white/90">In transactions and counting</p>
          </Card>
          
          <Card className="p-8 text-center bg-white shadow-medium hover:shadow-glow transition-all duration-300">
            <div className="mb-4">
              <span className="text-sm font-medium text-muted-foreground">Trusted by</span>
            </div>
            <div className="mb-4">
              <span className="text-4xl md:text-5xl font-bold text-rain-blue">50K+</span>
            </div>
            <p className="text-muted-foreground">Happy customers nationwide</p>
          </Card>
          
          <Card className="p-8 text-center bg-gradient-primary text-white shadow-medium hover:shadow-glow transition-all duration-300">
            <div className="mb-4">
              <span className="text-sm font-medium text-white/80">Average</span>
            </div>
            <div className="mb-4">
              <span className="text-4xl md:text-5xl font-bold">24hrs</span>
            </div>
            <p className="text-white/90">Loan approval time</p>
          </Card>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through the Rain Money platform, users can participate in a flexible and centralized 
            lending marketplace, where they are able to negotiate loan terms directly with us, 
            then Rain Money loans the funds directly to the borrowers. This model not only eliminates 
            uncertainties that may arise from borrowing directly, but also makes the process hassle-free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;