import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PartyPopper } from "lucide-react";
import { toast } from "sonner";

export const PurchaseModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("french");
  const [mode, setMode] = useState("online");

  useEffect(() => {
    const handleOpenModal = () => {
      setIsOpen(true);
    };

    window.addEventListener('openPurchaseModal', handleOpenModal);
    return () => window.removeEventListener('openPurchaseModal', handleOpenModal);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real app, this would process the form and redirect
    toast.success("🎉 Welcome to ISML InfinityPass!", {
      description: `You've selected ${language.charAt(0).toUpperCase() + language.slice(1)} (${mode.charAt(0).toUpperCase() + mode.slice(1)} mode). Check your email for next steps!`,
    });

    setTimeout(() => {
      setIsOpen(false);
      // Redirect to welcome page
      // window.location.href = '/welcome';
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <PartyPopper className="w-8 h-8 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-2xl text-center">
            🎉 Thank you for getting your InfinityPass!
          </DialogTitle>
          <DialogDescription className="text-center">
            Let's personalize your learning journey
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-3">
            <Label className="text-base font-semibold">Choose your preferred language:</Label>
            <RadioGroup value={language} onValueChange={setLanguage}>
              <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-secondary/50 cursor-pointer">
                <RadioGroupItem value="french" id="french" />
                <Label htmlFor="french" className="flex-1 cursor-pointer">
                  🇫🇷 French
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-secondary/50 cursor-pointer">
                <RadioGroupItem value="german" id="german" />
                <Label htmlFor="german" className="flex-1 cursor-pointer">
                  🇩🇪 German
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-secondary/50 cursor-pointer">
                <RadioGroupItem value="japanese" id="japanese" />
                <Label htmlFor="japanese" className="flex-1 cursor-pointer">
                  🇯🇵 Japanese
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label className="text-base font-semibold">Choose your learning mode:</Label>
            <RadioGroup value={mode} onValueChange={setMode}>
              <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-secondary/50 cursor-pointer">
                <RadioGroupItem value="online" id="online" />
                <Label htmlFor="online" className="flex-1 cursor-pointer">
                  💻 Online
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-secondary/50 cursor-pointer">
                <RadioGroupItem value="offline" id="offline" />
                <Label htmlFor="offline" className="flex-1 cursor-pointer">
                  🏫 Offline
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" variant="cta" size="lg" className="w-full">
            Start My Language Journey 🚀
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
