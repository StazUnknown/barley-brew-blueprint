import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecipeCard from "@/components/RecipeCard";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { sampleRecipes } from "@/data/sampleRecipes";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Heart, Users } from "lucide-react";

const Index = () => {
  const featuredRecipes = sampleRecipes.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Featured Recipes Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Heart className="w-3 h-3 mr-1" />
                Featured Recipes
              </Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                Start with these crowd favorites
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Perfect for beginners, these recipes are tested, loved, and easy to make 
                with ingredients you can find anywhere.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" asChild className="group">
                <Link to="/recipes">
                  View All Recipes
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                Why choose our recipes?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We focus on practical guidance, clear safety information, and honest nutrition context—no miracle claims.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-warm rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary">
                  Evidence-Based Guidance
                </h3>
                <p className="text-muted-foreground">
                  Clear nutrition context and safety notes backed by research, 
                  not marketing hype.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-wellness rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-wellness-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary">
                  Beginner-Friendly
                </h3>
                <p className="text-muted-foreground">
                  Step-by-step instructions with timing cues and substitution options 
                  for every skill level.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary">
                  Budget-Conscious
                </h3>
                <p className="text-muted-foreground">
                  Affordable ingredients, batch-prep tips, and cost-saving strategies 
                  for everyday cooking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <Newsletter />

        {/* Quick Links Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                Explore our guides
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From barley basics to advanced techniques, we've got you covered with comprehensive guides.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/guides/barley-101" className="group p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-all">
                <h3 className="font-semibold text-primary group-hover:text-accent transition-colors mb-2">
                  Barley 101
                </h3>
                <p className="text-sm text-muted-foreground">
                  Everything you need to know about barley varieties and basics.
                </p>
              </Link>

              <Link to="/guides/how-to-roast-barley" className="group p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-all">
                <h3 className="font-semibold text-primary group-hover:text-accent transition-colors mb-2">
                  How to Roast Barley
                </h3>
                <p className="text-sm text-muted-foreground">
                  Step-by-step guide to roasting barley at home for best flavor.
                </p>
              </Link>

              <Link to="/guides/storage-and-safety" className="group p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-all">
                <h3 className="font-semibold text-primary group-hover:text-accent transition-colors mb-2">
                  Storage & Safety
                </h3>
                <p className="text-sm text-muted-foreground">
                  Keep your barley fresh and learn important safety considerations.
                </p>
              </Link>

              <Link to="/faq" className="group p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-all">
                <h3 className="font-semibold text-primary group-hover:text-accent transition-colors mb-2">
                  FAQ
                </h3>
                <p className="text-sm text-muted-foreground">
                  Common questions about gluten, storage, and substitutions.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;