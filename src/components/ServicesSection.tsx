import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import businessHandshake from "@/assets/business-handshake.png";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <Card className="p-12 bg-gradient-card text-white shadow-glow hover:shadow-medium transition-all duration-300">
            <div className="text-center">
              <div className="mb-8">
                <img 
                  src={businessHandshake} 
                  alt="Get a Loan"
                  className="w-32 h-32 mx-auto rounded-full object-cover shadow-medium"
                />
              </div>
              
              <h3 className="text-3xl font-bold mb-6">Get a Loan</h3>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Borrow loans at amazing and flexible rates. Quick approval, 
                competitive interest rates, and flexible repayment terms 
                designed to meet your financial needs.
              </p>
              
              <ul className="text-left text-white/80 mb-8 space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-rain-cyan rounded-full mr-3"></div>
                  Fast 24-hour approval process
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-rain-cyan rounded-full mr-3"></div>
                  Competitive interest rates
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-rain-cyan rounded-full mr-3"></div>
                  Flexible repayment terms
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-rain-cyan rounded-full mr-3"></div>
                  No hidden charges
                </li>
              </ul>
              
              <Button variant="rain-accent" size="lg" className="w-full">
                Apply Now <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
          
          <Card className="p-12 bg-white shadow-medium hover:shadow-glow transition-all duration-300 border-2 border-rain-blue/20">
            <div className="text-center">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-medium">
                  %
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-foreground mb-6">Lend & Earn</h3>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Lend to credible borrowers and earn competitive returns. 
                Diversify your investment portfolio while supporting 
                Nigerian businesses and individuals.
              </p>
              
              <ul className="text-left text-muted-foreground mb-8 space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-rain-blue rounded-full mr-3"></div>
                  Earn up to 25% annual returns
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-rain-blue rounded-full mr-3"></div>
                  Verified borrower profiles
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-rain-blue rounded-full mr-3"></div>
                  Secure investment platform
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-rain-blue rounded-full mr-3"></div>
                  Diversified lending opportunities
                </li>
              </ul>
              
              <Button variant="rain-outline" size="lg" className="w-full">
                Start Lending <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;