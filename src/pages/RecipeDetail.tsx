import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { sampleRecipes } from "@/data/sampleRecipes";
import { ArrowLeft, Clock, Users, AlertCircle, CheckCircle2, Printer } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RecipeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  
  const recipe = sampleRecipes.find(r => r.slug === slug);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary mb-4">Recipe Not Found</h1>
            <p className="text-muted-foreground mb-8">The recipe you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/recipes">Browse All Recipes</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
    toast({
      title: "Print initiated",
      description: "Your recipe is ready to print!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <section className="py-6 border-b">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/recipes">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Recipes
              </Link>
            </Button>
          </div>
        </section>

        {/* Recipe Header */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge variant="secondary" className={`font-medium ${
                      recipe.difficulty === 'Easy' ? 'bg-success/10 text-success' :
                      recipe.difficulty === 'Medium' ? 'bg-accent/10 text-accent' :
                      'bg-destructive/10 text-destructive'
                    }`}>
                      {recipe.difficulty}
                    </Badge>
                    {recipe.allergens && recipe.allergens.length > 0 && (
                      <Badge variant="destructive">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Contains gluten
                      </Badge>
                    )}
                  </div>

                  <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">
                    {recipe.title}
                  </h1>
                  
                  <p className="text-lg text-muted-foreground">
                    {recipe.excerpt}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Prep: {recipe.prepTime}m • Total: {recipe.totalTime}m</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{recipe.servings} servings</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button onClick={handlePrint} variant="outline">
                      <Printer className="w-4 h-4 mr-2" />
                      Print Recipe
                    </Button>
                  </div>
                </div>
              </div>

              <div className="lg:order-first">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-[400px] object-cover rounded-xl shadow-card"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Recipe Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Ingredients */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-xl p-6 shadow-soft sticky top-24">
                  <h2 className="font-serif text-2xl font-semibold text-primary mb-6">
                    Ingredients
                  </h2>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-card-foreground">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Instructions */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-primary mb-6">
                    Instructions
                  </h2>
                  <ol className="space-y-6">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                          {index + 1}
                        </div>
                        <p className="text-foreground leading-relaxed pt-1">
                          {instruction}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>

                <Separator />

                {/* Notes */}
                {recipe.notes && recipe.notes.length > 0 && (
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                      Notes & Tips
                    </h3>
                    <ul className="space-y-3">
                      {recipe.notes.map((note, index) => (
                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Separator />

                {/* Nutrition & Safety */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                      Nutrition Context
                    </h3>
                    <p className="text-muted-foreground">{recipe.nutritionContext}</p>
                  </div>

                  <div className="bg-secondary/50 rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-destructive" />
                      Important Safety Information
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Barley contains gluten - not suitable for celiac disease</li>
                      <li>• This is educational content only, not medical advice</li>
                      <li>• Consult a healthcare professional for specific dietary needs</li>
                      <li>• Check all ingredients for personal allergens</li>
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

export default RecipeDetail;