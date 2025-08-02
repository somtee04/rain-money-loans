import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import happyCustomer from "@/assets/happy-customer.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            We Are Redefining Borrowing & Lending
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Rain Money, we possess an in-depth understanding of the unique landscape, 
              challenges, and socio-cultural dynamics that shape Nigeria's micro, small, 
              and medium-sized enterprises (MSMEs). Our expertise goes beyond numbers. 
              We recognize the distinctive needs of the local market and the entrepreneurs 
              driving its growth.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our approach is grounded in thorough research and deep industry knowledge, 
              harnessed by a dynamic, youthful team that brings both agility and innovation 
              to our operations. This allows us to respond swiftly and efficiently, ensuring 
              that our decision-making process is not only fast but also well-informed.
            </p>
            
            <Button variant="hero" size="lg">
              Get Started Now
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={happyCustomer} 
                alt="Happy customer"
                className="rounded-2xl shadow-medium w-full"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-primary rounded-2xl opacity-20"></div>
          </div>
        </div>
        
        <Card className="p-12 bg-gradient-hero text-white text-center shadow-glow">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <div className="bg-white/20 p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold">RM</span>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-6">The Rain Money Story</h3>
            
            <p className="text-lg text-white/90 leading-relaxed">
              Founded with a vision to revolutionize financial services in Nigeria, 
              Rain Money is a fully licensed financial technology company, recognized 
              as one of the pioneers in Nigeria's digital lending space. We specialize 
              in offering both secured and unsecured loans, through our well-structured 
              and easy-to-use platform designed to connect reliable lenders to credible 
              borrowers in a mutually profitable environment.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;