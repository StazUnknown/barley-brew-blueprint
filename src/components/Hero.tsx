import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-barley-drinks.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Sparkles className="w-3 h-3 mr-1" />
                Natural & Healthy
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Barley drinks,{" "}
                <span className="text-accent">made simple</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Tasty, budget-friendly recipes and guides—without the hype. 
                Learn to make healthy barley drinks safely and deliciously.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <Link to="/newsletter">
                  Get the 7-day starter plan
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/recipes">
                  Browse Recipes
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Recipes</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-primary">5 min</div>
                <div className="text-sm text-muted-foreground">Avg prep time</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Natural</div>
              </div>
            </div>
          </div>

          <div className="lg:order-first">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-warm rounded-2xl blur-2xl opacity-20 scale-105"></div>
              <img
                src={heroImage}
                alt="Beautiful glass of iced barley tea with golden roasted barley grains"
                className="relative rounded-2xl shadow-card w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm font-medium">
                  ✨ Contains gluten • Always check allergens • Not medical advice
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;