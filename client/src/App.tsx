import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";

// Pages
import Home from "@/pages/Home";
import ContactUs from "@/pages/ContactUs";
import OurStory from "@/pages/OurStory";
import MeetTheTeam from "@/pages/MeetTheTeam";
import NotFound from "@/pages/not-found";

// Components
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ImpactBrochure from "./pages/ImpactBrochure";
import LanguageSwitch from "./components/LanguageSwitch";

function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/our-story" component={OurStory} />
      <Route path="/impact-brochure" component={ImpactBrochure} />
      <Route path="/meet-the-team" component={MeetTheTeam} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow pt-16 md:pt-20">
            <Router />
          </main>
          <Footer />
        </div> */}
        <div className="relative flex flex-col min-h-screen font-sans bg-background text-foreground">

          <ScrollToTop />
          <Navbar />

          <main className="flex-grow pt-16 md:pt-20">
            <Router />
          </main>

          <Footer />

          {/*Floating Language Switcher */}
          <div className="fixed bottom-6 left-6 z-50">
            <LanguageSwitch />
          </div>

        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
