import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    recipes: [
      { name: "All Recipes", href: "/recipes" },
      { name: "Iced Drinks", href: "/recipes?category=iced" },
      { name: "Hot Drinks", href: "/recipes?category=hot" },
      { name: "Smoothies", href: "/recipes?category=smoothies" },
    ],
    guides: [
      { name: "Barley 101", href: "/guides/barley-101" },
      { name: "How to Roast", href: "/guides/how-to-roast-barley" },
      { name: "Storage Tips", href: "/guides/storage-and-safety" },
      { name: "Equipment", href: "/guides/equipment" },
    ],
    wellness: [
      { name: "Balanced Hydration", href: "/wellness/balanced-hydration" },
      { name: "Barley & Gluten", href: "/wellness/barley-and-gluten" },
      { name: "Nutrition Context", href: "/wellness/nutrition" },
    ],
    support: [
      { name: "FAQ", href: "/faq" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Newsletter", href: "/newsletter" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/policies/privacy" },
      { name: "Terms of Service", href: "/policies/terms" },
      { name: "Accessibility", href: "/policies/accessibility" },
      { name: "Cookie Policy", href: "/policies/cookies" },
    ],
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-warm">
                <span className="text-sm font-bold text-primary-foreground">B</span>
              </div>
              <span className="font-serif text-xl font-semibold text-primary">
                Barley Brew Blueprint
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              Practical, tasty barley drink recipes with transparent nutrition context 
              and safety notes—no hype, just honest, approachable guidance.
            </p>
            <div className="text-xs text-muted-foreground">
              <p className="font-medium mb-1">⚠️ Important Disclaimer:</p>
              <p>Educational content only. Not medical advice. Barley contains gluten.</p>
            </div>
          </div>

          {/* Links Sections */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Recipes</h3>
            <ul className="space-y-2">
              {footerLinks.recipes.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Guides</h3>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Wellness</h3>
            <ul className="space-y-2">
              {footerLinks.wellness.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Barley Brew Blueprint. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;