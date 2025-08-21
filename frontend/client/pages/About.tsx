import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  Scale,
  Search,
  CheckCircle,
  FileText,
  Gavel,
  Mail,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 hover:bg-blue-50"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-xl font-semibold text-primary">
              About LexProtect
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-16">
          {/* Main Heading & Intro */}
          <section className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              About LexProtect
            </h2>
            <div className="mx-auto max-w-4xl">
              <Card className="shadow-lg p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our AI-powered platform is built exclusively to solve
                  real-world legal problems in India. It provides structured
                  reasoning, actionable advice, and references to actual laws
                  and sections – something that generic AI chatbots cannot
                  match.
                </p>
              </Card>
            </div>
          </section>

          {/* Why We're Different Section */}
          <section>
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Why We're Different from ChatGPT
            </h3>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Card 1 */}
              <Card className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Scale className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    Access to All Indian Laws
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    Unlike ChatGPT, which does not have access to the complete
                    set of Indian laws, our platform is trained with
                    comprehensive legal datasets, ensuring accurate legal
                    references.
                  </p>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Gavel className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    Custom-Trained Legal Models
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    Our AI is fine-tuned on Indian legal cases and statutes,
                    making the outputs more reliable and context-aware for the
                    Indian legal system.
                  </p>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    Actionable Problem-Solving Guidance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    We don't just answer questions – we give step-by-step
                    actions you can take (e.g., filing a complaint, contacting
                    authorities).
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How It Works Section */}
          <section>
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              How It Works
            </h3>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <Card className="group transition-all duration-300 hover:scale-105 hover:shadow-xl text-center p-8">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <FileText className="h-10 w-10 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-foreground">
                  1. Enter Your Legal Problem
                </h4>
                <p className="text-muted-foreground">
                  Describe your legal situation in detail with all relevant
                  information and context.
                </p>
              </Card>

              {/* Step 2 */}
              <Card className="group transition-all duration-300 hover:scale-105 hover:shadow-xl text-center p-8">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Search className="h-10 w-10 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-foreground">
                  2. AI Analyzes Using Indian Laws
                </h4>
                <p className="text-muted-foreground">
                  Our specialized AI processes your case using comprehensive
                  Indian legal knowledge.
                </p>
              </Card>

              {/* Step 3 */}
              <Card className="group transition-all duration-300 hover:scale-105 hover:shadow-xl text-center p-8">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-foreground">
                  3. Get Clear Guidance & References
                </h4>
                <p className="text-muted-foreground">
                  Receive step-by-step actions with specific law references and
                  practical advice.
                </p>
              </Card>
            </div>
          </section>

          {/* Disclaimer Section */}
          <section>
            <Card className="shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-center text-foreground">
                Important Disclaimer
              </h3>
              <p className="text-center text-lg text-muted-foreground">
                This platform provides educational and informational assistance
                and is not a substitute for professional legal advice. Always
                consult with a qualified lawyer for serious legal matters.
              </p>
            </Card>
          </section>

          {/* Contact Section */}
          <section>
            <Card className="shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
                Contact Us
              </h3>
              <div className="flex items-center justify-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
                <a
                  href="mailto:shiva2006sai@gmail.com"
                  className="text-lg font-semibold hover:underline transition-colors text-foreground hover:text-primary"
                >
                  shiva2006sai@gmail.com
                </a>
              </div>
            </Card>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <h3 className="text-xl font-semibold text-primary">
                LexProtect
              </h3>
              <nav className="flex items-center gap-6">
                <Link
                  to="/"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Home
                </Link>
                <Link
                  to="/query"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Query Page
                </Link>
              </nav>
            </div>
            <p className="text-sm text-muted-foreground">
              Created by{" "}
              <span className="font-semibold text-primary">Shiva Sai</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
