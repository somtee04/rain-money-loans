import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin } from "lucide-react";
import rainMoneyLogo from "@/assets/rain-money-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={rainMoneyLogo} alt="RM" className="w-10 h-10" />
              <span className="text-3xl font-bold text-white">Rain Money</span>
            </div>
            
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              Empowering Nigerian businesses and individuals through innovative 
              financial solutions. Your trusted partner for loans and lending opportunities.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rain-cyan" />
                <span className="text-background/90">+2348185471803</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rain-cyan" />
                <span className="text-background/90">hello@rainmoney.ng</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-rain-cyan" />
                <span className="text-background/90">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-background/80 hover:text-rain-cyan transition-colors">About Us</a></li>
              <li><a href="#services" className="text-background/80 hover:text-rain-cyan transition-colors">Services</a></li>
              <li><a href="#faqs" className="text-background/80 hover:text-rain-cyan transition-colors">FAQs</a></li>
              <li><a href="#calculator" className="text-background/80 hover:text-rain-cyan transition-colors">Loan Calculator</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-rain-cyan transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-rain-cyan transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-background/80 hover:text-rain-cyan transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-background/80 hover:text-rain-cyan transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-background/80 hover:text-rain-cyan transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-background/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm mb-4 md:mb-0">
            © 2024 Rain Money. All rights reserved. Licensed by CBN.
          </p>
          
          <div className="flex items-center space-x-6">
            <span className="text-sm text-background/60">Follow us:</span>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-rain-cyan transition-colors">Facebook</a>
              <a href="#" className="text-background/60 hover:text-rain-cyan transition-colors">Twitter</a>
              <a href="#" className="text-background/60 hover:text-rain-cyan transition-colors">LinkedIn</a>
              <a href="#" className="text-background/60 hover:text-rain-cyan transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;