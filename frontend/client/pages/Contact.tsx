import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">Contact Us</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Contact LexProtect
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground">
                Get in touch with our legal assistant service for any inquiries or support.
              </p>

              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">
                  Contact Information
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  For further details contact:
                </p>
                <p className="font-medium">
                  <a href="mailto:shiva2006sai@gmail.com" className="text-primary hover:underline">
                    shiva2006sai@gmail.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
