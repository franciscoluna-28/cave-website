import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/react";
import Header from "@/components/Header";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import LandingPageCard from "@/components/landing-page/Card";
import Test from "../../public/test.jpeg";

export default function Home() {
  return (
    // Added leading to the text. I consider this is important in devices like computers
    <main className="flex min-h-screen flex-col items-center justify-center px-8 ">
      <h1 className="text-lightBrown font-bold text-4xl text-center leading-relaxed sm:w-1/2">
        Colaborative Artistic Ventures Entertainment
      </h1>
      <p className="text-lightBrown text-center leading-relaxed">
        A community of artists working together to make art and tell stories.
      </p>
      <Button className="px-5 py-2 font-medium border border-b-4 border-r-4 border-black rounded-lg shadow-2xl bg-mainOrange mt-4">
        Join CAVE
      </Button>

      
      <section className="w-full justify-center flex flex-col items-center mt-8">
        <h2 className="text-lightBrown font-bold text-4xl text-center leading-relaxed sm:w-1/2">
          See more
        </h2>
        <LandingPageCard
          title="Projects"
          small="Learn more about our projects"
          imageURL={Test}
          subTitle="Cave Projects"
          imageAlt="Car"
        />
      </section>
    </main>
  );
}
