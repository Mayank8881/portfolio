import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [responseMsg, setResponseMsg] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setResponseMsg('');
    setIsError(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setResponseMsg(data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setIsError(true);
        setResponseMsg(data.error || 'Something went wrong.');
      }
    } catch (error) {
      setIsError(true);
      setResponseMsg('An unexpected error occurred.');
    }
  };

  return (
    <div className="p-8 rounded-xl shadow-md border border-[hsl(var(--border))]">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[hsl(var(--foreground))]">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-[hsl(var(--border))] bg-white text-gray-900 focus:border-[hsl(var(--accent))] focus:ring-[hsl(var(--accent))]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[hsl(var(--foreground))]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-[hsl(var(--border))] bg-white text-gray-900 focus:border-[hsl(var(--accent))] focus:ring-[hsl(var(--accent))]"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[hsl(var(--foreground))]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-[hsl(var(--border))] bg-white text-gray-900 focus:border-[hsl(var(--accent))] focus:ring-[hsl(var(--accent))]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="inline-flex justify-center px-6 py-2 text-white bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))] hover:text-rose-100 hover:border-rose-300 rounded-md shadow transition-colors duration-200"
        >
          Send Message
        </button>

        {responseMsg && (
          <p className={`mt-4 text-sm ${isError ? 'text-red-600' : 'text-green-600'}`}>
            {responseMsg}
          </p>
        )}
      </form>
    </div>
  );
}
