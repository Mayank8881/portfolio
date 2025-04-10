import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <section id="contact" className="py-16 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-8 text-[hsl(var(--muted-foreground))]">
          Have a project in mind or just want to connect? Drop me a message below!
        </p>
        <ContactForm />
      </div>
    </section>

  );
}
