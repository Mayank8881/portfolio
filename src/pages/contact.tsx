import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="bg-[hsl(var(--background))] py-16 text-[hsl(var(--foreground))]"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold">Contact Me</h2>
        <p className="mb-8 text-[hsl(var(--muted-foreground))]">
          Have a project in mind or just want to connect? Drop me a message
          below!
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
