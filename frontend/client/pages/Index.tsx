import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Scale, BookOpen } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl">
              LexProtect
            </h1>
            <p className="text-xl text-muted-foreground mt-2">
              Your Legal Assistant
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Get instant AI-powered guidance for your legal problems.
            </p>
            <div className="mt-10">
              <Link to="/query">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
                >
                  Describe Your Problem
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            aria-hidden="true"
          >
            <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary/20 to-blue-400/20 opacity-30" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experience the future of legal assistance with our comprehensive
              AI-powered platform
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature Card 1 */}
            <Card className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  AI-Driven Problem Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  Our advanced AI analyzes your legal situation and provides
                  personalized insights tailored to your specific circumstances
                  and jurisdiction.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature Card 2 */}
            <Card className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Scale className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Step-by-Step Guidance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  Get clear, actionable steps to resolve your legal issues. We
                  break down complex legal processes into manageable,
                  easy-to-follow instructions.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature Card 3 */}
            <Card className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  References to Relevant Laws
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  Access comprehensive references to applicable laws, statutes,
                  and regulations that impact your case, ensuring you're fully
                  informed.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <h3 className="text-xl font-semibold text-primary">
                LexProtect
              </h3>
              <nav className="flex items-center gap-6">
                <Link
                  to="/about"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
                <Link
                  to="/disclaimer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Disclaimer
                </Link>
              </nav>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 LexProtect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
