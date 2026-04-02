import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import SolutionPage from "./pages/SolutionPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProgramaLideres from "./pages/ProgramaLideres";
import JornadasCultura from "./pages/JornadasCultura";
import ProgramaDHO from "./pages/ProgramaDHO";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/programa-lideres" element={<ProgramaLideres />} />
            <Route path="/jornadas-cultura" element={<JornadasCultura />} />
            <Route path="/:slug" element={<SolutionPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
