import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                <Heart className="w-3 h-3 mr-1" />
                Our Story
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
                About Barley Brew Blueprint
              </h1>
              <p className="text-xl text-muted-foreground">
                We believe in the power of simple, honest guidance for making healthy barley drinks 
                at home—without the hype or miracle claims.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-6">
                  <h2 className="font-serif text-3xl font-bold text-primary">
                    Our Mission
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    To educate and inspire everyday people to make and enjoy barley drinks safely 
                    and deliciously. We provide practical recipes, clear nutrition context, and 
                    transparent safety information—no marketing hype, just honest guidance.
                  </p>
                  <p className="text-muted-foreground">
                    Every recipe is tested, every claim is backed by evidence, and every safety 
                    note is included. We believe in empowering you with knowledge, not selling 
                    you on miracles.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-8 shadow-soft">
                  <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                    What We Believe
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Simple ingredients make the best drinks</li>
                    <li>• Safety information should never be hidden</li>
                    <li>• Budget-friendly recipes for everyone</li>
                    <li>• Evidence over marketing claims</li>
                    <li>• Honest nutrition context, not hype</li>
                  </ul>
                </div>
              </div>

              {/* Values */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-warm rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary">
                    Safety First
                  </h3>
                  <p className="text-muted-foreground">
                    Clear allergen information, storage guidelines, and safety notes 
                    on every recipe. Your health is our priority.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-wellness rounded-full flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-wellness-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary">
                    Evidence-Based
                  </h3>
                  <p className="text-muted-foreground">
                    Every nutrition claim is backed by research. We share what we know 
                    and acknowledge what we don't.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary">
                    Accessible
                  </h3>
                  <p className="text-muted-foreground">
                    Affordable ingredients, simple equipment, and clear instructions 
                    that work for beginners and experts alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Standards */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl font-bold text-primary mb-4">
                  Our Editorial Standards
                </h2>
                <p className="text-lg text-muted-foreground">
                  How we ensure every recipe meets our quality and safety standards.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <h3 className="font-semibold text-primary mb-4">Recipe Development</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Every recipe is tested multiple times</li>
                    <li>• Clear timing and measurement guidelines</li>
                    <li>• Substitution options when possible</li>
                    <li>• Cost estimates and batch-prep tips</li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <h3 className="font-semibold text-primary mb-4">Safety Review</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Allergen identification on every recipe</li>
                    <li>• Storage and shelf-life guidance</li>
                    <li>• Food safety best practices</li>
                    <li>• Clear disclaimers about medical advice</li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <h3 className="font-semibold text-primary mb-4">Nutrition Context</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Calorie estimates per serving</li>
                    <li>• Macronutrient context when relevant</li>
                    <li>• No disease prevention claims</li>
                    <li>• Evidence-based information only</li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <h3 className="font-semibold text-primary mb-4">Editorial Process</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Two-step review and approval</li>
                    <li>• Quarterly content updates</li>
                    <li>• User feedback integration</li>
                    <li>• Ongoing accuracy verification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                Questions or Feedback?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We'd love to hear from you. Whether you have questions about a recipe, 
                suggestions for improvement, or just want to share your barley drink journey.
              </p>
              <div className="bg-card rounded-xl p-8 shadow-soft">
                <div className="space-y-4 text-left">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Response Time</h3>
                    <p className="text-muted-foreground text-sm">
                      We aim to respond to all inquiries within 2-3 business days.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">What We Can Help With</h3>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Recipe questions and troubleshooting</li>
                      <li>• Ingredient substitutions</li>
                      <li>• Storage and safety guidance</li>
                      <li>• Website feedback and suggestions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;