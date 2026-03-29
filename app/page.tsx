import Projects from "@/components/projects";
import { Socials } from "@/components/socials";

export default function Home() {
  const today = new Date();

  const birthday = new Date(2004, 5, 30);

  let age = today.getFullYear() - birthday.getFullYear();
  const monthdifference = today.getMonth() - birthday.getMonth();

  if (
    monthdifference < 0 ||
    (monthdifference === 0 && today.getDate() < birthday.getDate())
  ) {
    age--;
  }
  return (
    <div>
      <div className="flex flex-col p-4 sm:p-16 pt-4 sm:pt-8 text-center">
        <h2 className="sm:text-2xl text-lg pt-6 font-semibold  text-opacity-50 dark:text-opacity-50">
          Hei, jeg heter
        </h2>
        <h1 className=" md:text-8xl text-4xl font-extrabold">
          Zeno Elio Leonardi
        </h1>
        <p className="text-shadow sm:text-2xl font-semibold text-lg pt-2 text-opacity-50 dark:text-opacity-50">
          Jeg er en {age} år gammel informatikk student ved Universitetet i
          Bergen
        </p>
        <Socials />
      </div>
      <Projects />
    </div>
  );
}
