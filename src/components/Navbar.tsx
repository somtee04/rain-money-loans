import { Button } from "@/components/ui/button";
import rainMoneyLogo from "@/assets/rain-money-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={rainMoneyLogo} alt="RM" className="w-8 h-8" />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Rain Money
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground hover:text-rain-blue transition-colors">
            About
          </a>
          <a href="#faqs" className="text-foreground hover:text-rain-blue transition-colors">
            FAQs
          </a>
          <a href="#calculator" className="text-foreground hover:text-rain-blue transition-colors">
            Loan Calculator
          </a>
          <span className="text-sm text-muted-foreground">
            +2348185471803
          </span>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm">
            Log In
          </Button>
          <Button variant="hero" size="sm">
            Get a Loan
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;