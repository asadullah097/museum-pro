import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/HomePage";
import Room1Mummies from "@/pages/Room1Mummies";
import Room2Artifacts from "@/pages/Room2Artifacts";
import Room3Nile from "@/pages/Room3Nile";
import Room4Architecture from "@/pages/Room4Architecture";
import Room5Writing from "@/pages/Room5Writing";
import Room6Pharaohs from "@/pages/Room6Pharaohs";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/room/mummies" component={Room1Mummies} />
      <Route path="/room/artifacts" component={Room2Artifacts} />
      <Route path="/room/nile" component={Room3Nile} />
      <Route path="/room/architecture" component={Room4Architecture} />
      <Route path="/room/writing" component={Room5Writing} />
      <Route path="/room/pharaohs" component={Room6Pharaohs} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
