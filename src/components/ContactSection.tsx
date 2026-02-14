import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome obrigatório").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(1, "Mensagem obrigatória").max(2000),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    if (!consent) {
      toast({ title: "Consentimento necessário", description: "Por favor, aceite a política de privacidade.", variant: "destructive" });
      return;
    }

    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    toast({ title: "Mensagem enviada!", description: "Entraremos em contacto consigo brevemente." });
    setForm({ name: "", email: "", phone: "", message: "" });
    setConsent(false);
  };

  return (
    <section id="contacto" className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-2 text-base font-medium uppercase tracking-widest text-primary">
            Entre em contacto
          </p>
          <h2 className="mb-12 font-display text-4xl font-bold text-foreground md:text-5xl">
            Contacto
          </h2>
        </motion.div>

        <div className="mx-auto flex max-w-4xl flex-col-reverse gap-10 md:grid md:grid-cols-2">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div>
              <Input
                placeholder="Nome *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
            </div>
            <Input
              placeholder="Telefone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <div>
              <Textarea
                placeholder="Mensagem *"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
            </div>

            <div className="flex items-start gap-2">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(c) => setConsent(c === true)}
              />
              <label htmlFor="consent" className="text-sm leading-relaxed text-muted-foreground">
                Consinto o tratamento dos meus dados pessoais de acordo com a política de privacidade.
              </label>
            </div>

            <Button type="submit" className="w-full gap-2" disabled={loading}>
              <Send className="h-4 w-4" />
              {loading ? "A enviar..." : "Enviar Mensagem"}
            </Button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <a href="https://www.dourovida.pt" target="_blank" rel="noopener noreferrer">
              <img
                src={`${import.meta.env.BASE_URL}douro_vida_logo_nobackground.png`}
                alt="DouroVida"
                className="mb-2 h-auto w-48"
              />
            </a>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <a href="https://maps.app.goo.gl/1g7GUa2s3HL8E9Q1A" target="_blank" rel="noopener noreferrer">
                <div>
                  <h4 className="font-semibold text-foreground">Morada</h4>
                  <p className="text-base text-muted-foreground">Rua de Alves Redol 349, 4050-043 Porto</p>
                </div>
              </a>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <a href="mailto:anabelacastro.psicologia@gmail.com" className="hover:underline">
                  <p className="text-base text-muted-foreground" >anabelacastro.psicologia@gmail.com</p>
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Telefone</h4>
                <p className="text-base text-muted-foreground">+351 928 376 272</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
