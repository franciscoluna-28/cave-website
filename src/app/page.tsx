import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/react";
import Header from "@/components/Header";
import {Textarea} from "@nextui-org/react";
import {Input} from "@nextui-org/react";

export default function Home() {
  return (
    // Added leading to the text. I consider this is important in devices like computers
    <main className="flex min-h-screen flex-col items-center justify-center px-8 ">
      <h1 className="text-lightBrown font-bold text-4xl text-center leading-relaxed sm:w-1/2">
        Colaborative Artistic Ventures Entertainment
      </h1>
      <p className="text-lightBrown text-center leading-relaxed">
        A community of artists working together to make art and tell stories!
      </p>
      <Button className="px-5 py-2 font-medium border border-b-4 border-r-4 border-black rounded-lg shadow-2xl bg-mainOrange mt-4">
        Join the Server
      </Button>

      
      <section className="w-full justify-center flex flex-col items-center mt-8">
{/*         <h2 className="text-lightBrown font-bold text-4xl text-center leading-relaxed sm:w-1/2">
          See more
        </h2> */}
{/*         <LandingPageCard
          title="Projects"
          small="Learn more about our projects"
          imageURL={Test}
          subTitle="Cave Projects"
          imageAlt="Car"
        /> */}
      </section>
      <h2 className="text-lightBrown font-bold text-4xl text-center leading-relaxed sm:w-1/2">
        Contact
      </h2>

        <form className="space-y-6 mt-4 min-w-[300px]">
          <div className="flex flex-col space-y-6">
        <input className="px-2 p-2 rounded-lg bg-lightBrown border border-b-4 border-r-4 border-black placeholder:text-black" type="text" placeholder="Subject"></input>
        <textarea placeholder="Message" className="px-2 p-2 min-h-[200px] border border-b-4 border-r-4 border-black bg-lightBrown rounded-lg placeholder:text-black"></textarea>
        </div> 
        <Button className="px-5 py-2 font-medium border border-b-4 border-r-4 border-black rounded-lg shadow-2xl bg-mainOrange mt-4">
        Send
      </Button>
        </form>
    </main>
  );
}
