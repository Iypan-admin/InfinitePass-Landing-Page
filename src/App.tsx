import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/thankyou"; 
const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Right-click block
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      // Optional: alert("Right-click disabled");
    };
    document.addEventListener("contextmenu", handleContextMenu);

    // Text selection block
    document.body.style.userSelect = "none";

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.body.style.userSelect = "auto";
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
