import ExternalLink from '@/ui/ExternalLink';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <Contact />
      <AboutMe />
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="relative h-12 w-12 overflow-hidden rounded-full">
        <Image
          alt="Logo"
          className="h-full w-full object-cover scale-[2.5] object-bottom"
          fill
          src="/static/images/Me.jpg"
        />
        <div className="absolute -bottom-2 -right-2 rounded-full bg-white px-1 py-0.5 text-sm dark:bg-gray-900">
          ✨
        </div>
      </div>
      <div className="flex flex-col">
        <h1>Kailash B</h1>
        <p className="text-quaternary">Digital software designer</p>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-tertiary">About me</p>
      <div className="text-secondary flex flex-col gap-4">
        <p>
        Curious by nature, precise by practice.
        I turn complex problems into seamless, thoughtful experiences.
        Currently leading design at{' '}
        <ExternalLink arrow={false} href="https://inferless.com">
          Inferless
        </ExternalLink>
        .
        </p>
        <p className="mb-8">
        Previously at Razorpay, Unacademy, Stable Money, and Freo.
        </p>
      </div>
    </div>
  );
}

function ContactLink({
  href,
  title,
  website,
  email,
}: {
  email?: string;
  href?: string;
  title: string;
  website?: string;
}) {
  return (
    <div>
      {website && <p className="text-quaternary">{website}</p>}
      {href && (
        <a
          className="text-secondary hover:text-primary transition-opacity duration-150 whitespace-nowrap"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {title}{' '}
          <svg
            className=" inline-block h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      )}
      {email && (
        <a
          className="text-secondary hover:text-primary transition-opacity duration-150 whitespace-nowrap"
          href={`mailto:${title}`}
        >
          {title}{' '}
          <svg
            className=" inline-block h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      )}
    </div>
  );
}

function Contact() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-tertiary">Links</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-x-40 md:items-start">
        <ContactLink
          href="https://www.linkedin.com/in/iamkailash"
          title="iamkailashb"
          website="LinkedIn"
        />
        <ContactLink
           href="https://X.com/iamkailashb"
           title="iamkailashb"
           website="X"
        />
        <ContactLink
          href="https://www.figma.com/@cretu"
          title="cretu"
          website="Figma"
        />
        <ContactLink
          email="kailash2work[at]gmail(dot)com"
          title="kailash2work@gmail.com"
          website="Email" 
        />
        <ContactLink href="https://read.cv/cretu" title="cretu" website="CV" />
      </div>
    </div>
  );
}
