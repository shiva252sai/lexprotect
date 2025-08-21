import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function Disclaimer() {
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
            <h1 className="text-xl font-semibold">Legal Disclaimer</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Legal Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground">
                This page is currently under construction. Please continue
                prompting to have the content for this page generated based on
                your specific needs.
              </p>

              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Page Content Needed
                </h3>
                <p className="text-sm text-muted-foreground">
                  This placeholder can be replaced with important legal
                  disclaimers, terms of service, limitations of AI legal advice,
                  attorney-client privilege information, and other legal notices
                  that users should be aware of when using your service.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
