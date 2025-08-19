import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      id: "gluten",
      question: "Is barley gluten-free?",
      answer: "No. Barley contains gluten and is not suitable for people with celiac disease or gluten sensitivity. Always check ingredients if you have dietary restrictions."
    },
    {
      id: "kids",
      question: "Can kids drink roasted barley tea?",
      answer: "Roasted barley tea is generally caffeine-free and can be suitable for children. However, always check for allergens and serve unsweetened or lightly sweetened. Consult your pediatrician if you have concerns."
    },
    {
      id: "storage",
      question: "How long does barley tea keep?",
      answer: "Brewed barley tea should be refrigerated and consumed within 2-3 days for best taste and safety. Dry roasted barley can be stored in a cool, dry place for up to 6 months."
    },
    {
      id: "caffeine",
      question: "Does barley tea contain caffeine?",
      answer: "Pure roasted barley tea is naturally caffeine-free. However, some blends may contain tea leaves or other ingredients that do contain caffeine. Always check the label."
    },
    {
      id: "substitutions",
      question: "Can I substitute barley with other grains?",
      answer: "For gluten-free alternatives, you can try roasted brown rice tea or corn tea, though the flavor will be different. Each grain has its own unique taste profile."
    },
    {
      id: "roasting",
      question: "Can I roast barley at home?",
      answer: "Yes! You can roast pearl barley in a dry pan over medium heat, stirring frequently until golden brown and fragrant. This usually takes 5-8 minutes. Let cool completely before storing."
    },
    {
      id: "buying",
      question: "Where can I buy roasted barley?",
      answer: "Roasted barley is available at Asian grocery stores, health food stores, and online. Look for 'mugicha' (Japanese) or 'boricha' (Korean) in the tea section."
    },
    {
      id: "sweeteners",
      question: "What sweeteners work best with barley drinks?",
      answer: "Honey, maple syrup, or brown sugar complement barley's nutty flavor well. Start with small amounts and adjust to taste. Artificial sweeteners can also be used if preferred."
    },
    {
      id: "pregnancy",
      question: "Are barley drinks safe during pregnancy?",
      answer: "While barley tea is generally considered safe, we recommend consulting with your healthcare provider about any dietary changes during pregnancy or breastfeeding."
    },
    {
      id: "batch-prep",
      question: "Can I make barley drinks in advance?",
      answer: "Yes! You can prepare cold barley tea in large batches and store it in the refrigerator. For hot drinks, you can pre-portion dry ingredients and store them in sealed containers."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                <HelpCircle className="w-3 h-3 mr-1" />
                Help Center
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground">
                Common questions about barley drinks, ingredients, storage, and safety. 
                Can't find what you're looking for? Feel free to contact us.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="bg-card rounded-lg shadow-soft border px-6">
                    <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Safety Disclaimer */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-xl p-8 shadow-soft">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-3">
                      Important Safety Reminders
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Allergen Alert:</strong> Barley contains gluten and is not safe for people with celiac disease</li>
                      <li>• <strong>Not Medical Advice:</strong> This information is educational only - consult healthcare professionals for specific dietary advice</li>
                      <li>• <strong>Individual Reactions:</strong> Always check ingredients for personal allergens and sensitivities</li>
                      <li>• <strong>Pregnancy & Nursing:</strong> Consult your healthcare provider about dietary changes during pregnancy or breastfeeding</li>
                      <li>• <strong>Children:</strong> Check with pediatricians before introducing new foods or drinks to children</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">
                Still have questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're here to help! If you can't find the answer you're looking for, 
                reach out to us and we'll get back to you within 2-3 business days.
              </p>
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="font-semibold text-primary mb-4">
                  What we can help with:
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Recipe troubleshooting</li>
                    <li>• Ingredient substitutions</li>
                    <li>• Storage guidance</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Safety questions</li>
                    <li>• Equipment recommendations</li>
                    <li>• Batch preparation tips</li>
                  </ul>
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

export default FAQ;