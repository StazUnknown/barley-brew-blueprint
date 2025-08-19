import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface RecipeCardProps {
  recipe: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    image: string;
    prepTime: number;
    totalTime: number;
    servings: number;
    difficulty: "Easy" | "Medium" | "Hard";
    tags: string[];
    allergens?: string[];
  };
  className?: string;
}

const RecipeCard = ({ recipe, className }: RecipeCardProps) => {
  const difficultyColors = {
    Easy: "bg-success/10 text-success",
    Medium: "bg-accent/10 text-accent",
    Hard: "bg-destructive/10 text-destructive",
  };

  return (
    <article className={cn("group", className)}>
      <Link to={`/recipes/${recipe.slug}`} className="block">
        <div className="bg-card rounded-xl shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden">
          <div className="relative">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 right-3">
              <Badge 
                variant="secondary" 
                className={cn("font-medium", difficultyColors[recipe.difficulty])}
              >
                {recipe.difficulty}
              </Badge>
            </div>
            {recipe.allergens && recipe.allergens.length > 0 && (
              <div className="absolute top-3 left-3">
                <Badge variant="destructive" className="text-xs">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Contains gluten
                </Badge>
              </div>
            )}
          </div>

          <div className="p-6">
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                {recipe.title}
              </h3>
              
              <p className="text-muted-foreground text-sm line-clamp-2">
                {recipe.excerpt}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{recipe.prepTime}m prep</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{recipe.servings} servings</span>
                </div>
              </div>

              {recipe.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {recipe.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {recipe.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{recipe.tags.length - 3} more
                    </Badge>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default RecipeCard;