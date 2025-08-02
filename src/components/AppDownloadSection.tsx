import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, Download } from "lucide-react";
import appMockup from "@/assets/rain-money-app-mockup.png";

const AppDownloadSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="mb-6">
              <div className="bg-white/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Smartphone className="w-8 h-8" />
              </div>
              <span className="text-rain-cyan font-semibold text-lg">Rain Money App</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Safe and Secure Way to Earn
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Ready to take control of your financial future while helping others grow? 
              Join the Rain Money platform today and start lending directly to Nigerian 
              consumers and MSMEs through our innovative, app-based platform.
            </p>
            
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              With the Rain Money App, you can easily connect with borrowers, negotiate terms, 
              and make informed lending decisions—all at your fingertips. Whether you're looking 
              to diversify your investments or make a meaningful impact on the success of local 
              businesses, Rain Money provides the perfect opportunity to do both.
            </p>
            
            <div className="space-y-4">
              <p className="text-lg font-semibold text-white mb-6">
                Download the Rain Money App now and become part of a growing community!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Card className="p-4 bg-black/20 border-white/20 hover:bg-black/30 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded">
                      <Download className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-xs">Get it on</p>
                      <p className="text-white font-semibold text-lg group-hover:scale-105 transition-transform">
                        Google Play
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4 bg-black/20 border-white/20 hover:bg-black/30 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded">
                      <Download className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-xs">Download on the</p>
                      <p className="text-white font-semibold text-lg group-hover:scale-105 transition-transform">
                        App Store
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 flex justify-center">
              <img 
                src={appMockup} 
                alt="Rain Money App"
                className="max-w-xs lg:max-w-sm shadow-glow"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rain-cyan/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;