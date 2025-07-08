
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-foreground">
        Let's Connect
      </h2>
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get In Touch</h3>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
            or just chat about technology. Feel free to reach out!
          </p>
          <div className="flex space-x-4 sm:space-x-6">
            <a href="https://github.com/soumya-xy" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
              <Github className="h-6 w-6 sm:h-8 sm:w-8" />
            </a>
            <a href="https://www.linkedin.com/in/soumya-jain-16561b253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
              <Linkedin className="h-6 w-6 sm:h-8 sm:w-8" />
            </a>
            <a href="https://x.com/anonymous781641?t=FCW0-0p_t1oTCH_GjZY0mA&s=08" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
              <Twitter className="h-6 w-6 sm:h-8 sm:w-8" />
            </a>
            <a href="mailto:23ucs717@lnmiit.ac.in" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
              <Mail className="h-6 w-6 sm:h-8 sm:w-8" />
            </a>
          </div>
        </div>
        <Card className="bg-card border-border">
          <CardContent className="p-4 sm:p-6">
            <form action="https://formspree.io/f/movwwbga" method="POST" className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  name="name"
                  className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  name="email"
                  className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  name="message"
                  rows={4}
                  className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none text-sm sm:text-base"
                ></textarea>
              </div>
              <Button className="w-full py-2 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default ContactSection;
