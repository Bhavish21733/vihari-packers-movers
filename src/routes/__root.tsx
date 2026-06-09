import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { FloatingActions } from "../components/site/FloatingActions";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again or go home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Try again</button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium">Go home</a>
        </div>
      </div>
    </div>
  );
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Vihari Packers and Movers",
  image: "https://viharipackers.com/og.jpg",
  telephone: "+91-96766-65549",
  email: "info@viharipackers.com",
  url: "/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2-6-101, Eshwaripuri Colony, Jaipuri Colony, Bandlaguda, Nagole",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500068",
    addressCountry: "IN",
  },
  areaServed: ["Hyderabad", "Nagole", "Bandlaguda", "Uppal", "LB Nagar", "Dilsukhnagar", "Hayathnagar"],
  priceRange: "₹₹",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "528" },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vihari Packers and Movers — Best Packers and Movers in Hyderabad" },
      { name: "description", content: "Vihari Packers and Movers — trusted relocation experts in Hyderabad. Safe packing, professional loading, reliable transportation for home, office and car shifting." },
      { name: "author", content: "Vihari Packers and Movers" },
      { name: "keywords", content: "packers and movers hyderabad, best packers and movers hyderabad, home shifting hyderabad, office shifting hyderabad, packers and movers nagole, packers and movers bandlaguda, car transportation hyderabad" },
      { property: "og:title", content: "Vihari Packers and Movers — Best Packers and Movers in Hyderabad" },
      { property: "og:description", content: "Vihari Packers and Movers — trusted relocation experts in Hyderabad. Safe packing, professional loading, reliable transportation for home, office and car shifting." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Vihari Packers and Movers" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0B1320" },
      { name: "twitter:title", content: "Vihari Packers and Movers — Best Packers and Movers in Hyderabad" },
      { name: "twitter:description", content: "Vihari Packers and Movers — trusted relocation experts in Hyderabad. Safe packing, professional loading, reliable transportation for home, office and car shifting." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/48cfabe4-1c26-48f6-a484-596ac3fa96a2/id-preview-b60fbcd1--913ffff1-50b8-4af9-a17a-ab276e2481b6.lovable.app-1780920634127.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/48cfabe4-1c26-48f6-a484-596ac3fa96a2/id-preview-b60fbcd1--913ffff1-50b8-4af9-a17a-ab276e2481b6.lovable.app-1780920634127.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/site-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800;900&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(orgSchema) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-[60vh]"><Outlet /></main>
      <Footer />
      <FloatingActions />
    </QueryClientProvider>
  );
}
