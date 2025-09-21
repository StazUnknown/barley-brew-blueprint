import barleyIcedLatteImage from "@/assets/barley-iced-latte.jpg";
import roastedBarleyTeaImage from "@/assets/roasted-barley-tea.jpg";
import barleyBananaSmoothieImage from "@/assets/barley-banana-smoothie.jpg";

export interface Recipe {
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
  ingredients: string[];
  instructions: string[];
  notes: string[];
  nutritionContext: string;
  category: "iced" | "hot" | "smoothies";
}

export const sampleRecipes: Recipe[] = [
  {
    id: "1",
    title: "Barley Iced Latte (Caffeine-Light)",
    slug: "barley-iced-latte",
    excerpt: "A refreshing, mellow iced drink that's perfect for warm days. Budget-friendly and naturally low in caffeine.",
    image: barleyIcedLatteImage,
    prepTime: 5,
    totalTime: 10,
    servings: 2,
    difficulty: "Easy",
    tags: ["iced", "dairy", "quick", "beginner-friendly"],
    allergens: ["gluten"],
    category: "iced",
    ingredients: [
      "250 ml strong roasted barley tea, chilled",
      "200 ml milk or oat milk",
      "1–2 tsp honey or muscovado, to taste",
      "Ice cubes"
    ],
    instructions: [
      "Brew roasted barley tea according to package instructions and chill completely.",
      "Fill two glasses with ice cubes.",
      "Combine chilled barley tea, milk, and sweetener. Stir until frothy.",
      "Taste and adjust sweetness as needed.",
      "Serve immediately."
    ],
    notes: [
      "For dairy-free version, use oat or soy milk",
      "Best consumed within 24 hours if pre-mixed",
      "Can be batch-prepared for meal prep"
    ],
    nutritionContext: "Approximately 90–130 kcal per serving depending on milk and sweetener choice."
  },
  {
    id: "2",
    title: "Traditional Roasted Barley Tea",
    slug: "roasted-barley-tea",
    excerpt: "A classic, warming drink with a nutty flavor. Naturally caffeine-free and perfect for evening sipping.",
    image: roastedBarleyTeaImage,
    prepTime: 2,
    totalTime: 8,
    servings: 4,
    difficulty: "Easy",
    tags: ["hot", "caffeine-free", "traditional", "warming"],
    allergens: ["gluten"],
    category: "hot",
    ingredients: [
      "3 tbsp roasted barley",
      "1 liter water",
      "Optional: honey to taste"
    ],
    instructions: [
      "Bring water to a boil in a saucepan.",
      "Add roasted barley and reduce heat to low.",
      "Simmer for 5-6 minutes until water turns golden amber.",
      "Strain through a fine mesh sieve.",
      "Serve hot, sweetened with honey if desired."
    ],
    notes: [
      "Barley can be reused once for a lighter second brew",
      "Store leftover tea in refrigerator for up to 3 days",
      "Can be served cold over ice"
    ],
    nutritionContext: "Virtually calorie-free without sweetener. Rich in fiber and antioxidants."
  },
  {
    id: "3",
    title: "Barley Banana Smoothie",
    slug: "barley-banana-smoothie",
    excerpt: "A creamy, nutritious smoothie that combines the wholesome goodness of barley with sweet banana.",
    image: barleyBananaSmoothieImage,
    prepTime: 8,
    totalTime: 8,
    servings: 2,
    difficulty: "Easy",
    tags: ["smoothie", "nutritious", "breakfast", "protein"],
    allergens: ["gluten"],
    category: "smoothies",
    ingredients: [
      "250 ml cold roasted barley tea",
      "1 large ripe banana",
      "200 ml Greek yogurt or plant-based alternative",
      "1 tbsp almond butter",
      "1 tsp honey (optional)",
      "1/2 cup ice cubes",
      "Pinch of cinnamon"
    ],
    instructions: [
      "Prepare and chill roasted barley tea in advance.",
      "Peel and slice the banana.",
      "Add all ingredients to a blender.",
      "Blend on high speed for 60-90 seconds until smooth and creamy.",
      "Taste and adjust sweetness if needed.",
      "Pour into glasses and serve immediately."
    ],
    notes: [
      "Use frozen banana for extra thickness",
      "Can substitute almond butter with peanut or sunflower seed butter",
      "Add a handful of spinach for extra nutrients without changing taste"
    ],
    nutritionContext: "Approximately 200-250 kcal per serving. Good source of protein, fiber, and potassium."
  }
];