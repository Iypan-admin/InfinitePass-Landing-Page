import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Briefcase, Heart } from "lucide-react";

const audiences = [
  { icon: GraduationCap, title: "School Learners (Age 7+)", description: "Build your career foundation with multiple languages" },
  { icon: Users, title: "College Learners", description: "Stand out in placements and internships" },
  { icon: Briefcase, title: "Professionals", description: "Advance your career with international opportunities" },
  { icon: Heart, title: "Language Enthusiasts", description: "Turn your passion into mastery" },
];

const discounts = [
  { program: "Master a Language (ML)", discount: "10%" },
  { program: "International Diploma (ID)", discount: "12%" },
  { program: "ID Fast Track", discount: "12%" },
  { program: "Immersion Programs", discount: "15%" },
  { program: "LMS Courses", discount: "5%" },
  { program: "Referral Extra Discount (from Jan '26)", discount: "5%" },
];

export const TargetAudience = () => {
  return (
    <section className="py-5 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Audience Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">For Whom?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Perfect for anyone serious about mastering languages and expanding their horizons
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-glow transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
                  <p className="text-muted-foreground">{audience.description}</p>
                </div>
              );
            })}
          </div>

          {/* Membership CTA */}
          <div className="text-center mb-12">
            <div className="bg-card rounded-2xl shadow-card p-8 border border-border mb-8 animate-fade-in-slow">
              <p className="text-2xl font-bold mb-4">
                Join Now,<br></br> <span className="text-primary">10,000+</span> students have already joined ISML Elite Membership 🚀
              </p>
              <p className="text-muted-foreground mb-6">
                Be part of India's fastest-growing language learning community
              </p>
              <Button
                size="xl"
                variant="cta"
                onClick={() => (window.location.href = "https://pages.razorpay.com/membershipinfinity")}
                className="animate-bounce-soft"
              >
                🎫 Get My Membership
              </Button>
            </div>
          </div>

          {/* Modern Course Fee Discounts Table */}
          <div className="flex justify-center mb-12">
            <div className="w-full sm:w-3/4 bg-card rounded-2xl shadow-lg p-6 border border-border animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-center">Course Fee Discounts</h3>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary/20">
                    <th className="py-3 px-6 font-semibold text-left">Program</th>
                    <th className="py-3 px-6 font-semibold text-center">Discount</th>
                  </tr>
                </thead>
                <tbody>
                  {discounts.map((item, idx) => {
                    // Alternating row background
                    const rowBg = idx % 2 === 0 ? "bg-gray-50" : "bg-gray-100";

                    // Discount pill color
                    let bgColor = "bg-primary/20 text-primary"; // default
                    if (item.discount === "10%") bgColor = "bg-green-200 text-green-800";
                    else if (item.discount === "12%") bgColor = "bg-blue-200 text-blue-800";
                    else if (item.discount === "15%") bgColor = "bg-orange-200 text-orange-800";

                    return (
                      <tr key={idx} className={`transition-all duration-200 hover:bg-primary/10 ${rowBg}`}>
                        <td className="py-3 px-6">{item.program}</td>
                        <td className="py-3 px-6 text-center">
                          <span className={`inline-block font-semibold px-3 py-1 rounded-full ${bgColor}`}>
                            {item.discount}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};
