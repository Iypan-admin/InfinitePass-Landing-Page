import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              Indian School for Modern Languages
            </h3>
            <p className="text-primary-foreground/80">
              Empowering students to become global citizens through language education
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a 
              href="mailto:elitemembership.isml@gmail.com"
              className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>elitemembership.isml@gmail.com</span>
            </a>
            
            <a 
              href="https://wa.me/919385457322"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+91 93854 57322</span>
            </a>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
              <p>© 2025 Indian School for Modern Languages. All rights reserved.</p>
              
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Refund Policy
                </a>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
