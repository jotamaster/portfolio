import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { ContactInfo } from "@/features/contact/contact-info";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border/40"
    >
      <SectionHeading
        id="contact-heading"
        eyebrow="contact.exe"
        title="Contact"
        description="Datos públicos de contacto. Sin formulario ni servicios de correo en el MVP."
      />

      <div className="mt-8 max-w-2xl">
        <ContactInfo />
      </div>
    </SectionShell>
  );
}
