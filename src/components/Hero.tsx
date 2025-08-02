import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Smartphone, CreditCard } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-16 bg-gradient-hero flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="bg-white/10 p-2 rounded-full">
              <div className="bg-gradient-primary p-3 rounded-full">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Welcome to True{" "}
            <span className="bg-gradient-to-r from-rain-cyan to-white bg-clip-text text-transparent">
              Financial Connectivity
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Building Bridges, Empowering Futures, Shaping Tomorrow
          </p>
          
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Let us discover your financial potential together
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer">
              <div className="text-center">
                <div className="bg-gradient-card p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Get a Loan</h3>
                <p className="text-white/80 mb-6">
                  Borrow loans at amazing and flexible rates.
                </p>
                <Button variant="rain-accent" className="group-hover:scale-105 transition-transform">
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
            
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer">
              <div className="text-center">
                <div className="bg-gradient-card p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <div className="w-8 h-8 text-white flex items-center justify-center font-bold text-lg">%</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Lend & Earn</h3>
                <p className="text-white/80 mb-6">
                  Lend to credible borrowers and earn competitive returns.
                </p>
                <Button variant="rain-outline" className="group-hover:scale-105 transition-transform border-white text-white hover:bg-white hover:text-rain-blue">
                  Start Lending <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;