import { NextSeo } from 'next-seo';

import LandingHero from '@/components/landing-hero';
import SkillsShowcase from '@/components/skills/skills-showcase';
import ProjectShowcase from '@/components/projects/project-showcase';
import ContactForm from '@/components/ContactForm';

import { PROJECT_SHOWCASE } from '@/data/projects';
import { SKILLS_DATA } from '@/data/skills';
import { siteMetadata } from '@/data/siteMetaData.mjs';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Mayank Mokhere | Software Developer"
        description="Explore the professional portfolio of Mayank Mokhere, a skilled Software Developer with 2 years of hands-on experience. Discover innovative projects, expertise in modern web technologies, and a passion for creating seamless user experiences."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: 'Mayank Mokhere - Software Developer',
          description:
            'Dive into the world of web development with Mayank Mokhere. Discover a Software Developer with 2 years of expertise, showcasing cutting-edge projects and a commitment to crafting exceptional user interfaces.',
          images: [
            {
              url: `${siteMetadata.siteUrl}`,
              alt: 'Mayank Mokhere - Portfolio Image',
            },
          ],
          siteName: siteMetadata.siteName,
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            property: 'keywords',
            content:
              'React Developer, Software Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Portfolio, UI/UX, React.js, Frontend Development, Web Development, JavaScript Developer, Responsive Design',
          },
        ]}
      />

      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />

      {/* 🔽 Contact Section */}
      {/* <section
        id="contact"
        className=" w-1/2 mx-auto flex items-center bg-[hsl(var(--background))] text-black"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="mb-8 text-[hsl(var(--muted-foreground))]">
            Have a project in mind or just want to connect? Drop me a message below!
          </p>
          <ContactForm />
        </div>
      </section> */}

      <section
        id="contact"
        className="animated-border mx-auto flex w-1/2 items-center bg-[hsl(var(--background))] p-8 text-black"
      >
        <div className="x-auto w-full max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Contact Me</h2>
          <p className="mb-8 text-[hsl(var(--muted-foreground))]">
            Have a project in mind or just want to connect? Drop me a message
            below!
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
