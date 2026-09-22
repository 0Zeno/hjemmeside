import Link from "next/link";

const links = [
  { name: "GitHub", href: "https://github.com/0Zeno" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/zeno-elio-leonardi-60ba58225/",
  },
  { name: "E-post", href: "mailto:zenoelioleone@gmail.com" },
];

export function Socials() {
  return (
    <div className="flex space-x-8 pt-6">
      {links.map((link, i) => (
        <span key={link.name} className="flex items-center gap-4">
          <Link
            target="_blank"
            href={link.href}
            className="text-sm hover:underline underline-offset-4"
          >
            {link.name}
          </Link>
        </span>
      ))}
    </div>
  );
}
