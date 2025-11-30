import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary/20">404</h1>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                View Projects
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

