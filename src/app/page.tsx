"use client";

import { Button, ButtonGroup } from "@nextui-org/react";
import { useEvents } from "@/hooks/useEvents";
import { EventsData } from "@/types";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

type EventsProps = {
  data: EventsData | null;
  error: any;
  isLoading: boolean;
};

function Events({ data, error, isLoading }: EventsProps) {
  console.log(data);

  if (isLoading) return <div>Cargando...</div>;
  if (error || !data)
    return <div>Ha ocurrido un error al cargar los datos.</div>;

  return (
    <ul className="space-y-6">
      {data.events.data.map(({ attributes, id }) => (
        <Card key={id} className="py-4 max-w-[300px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="text-tiny uppercase font-bold">{attributes.title}</h4>
        <small>{attributes.date.toString()}</small>
        <p className="text-sm">{attributes.description}</p>


      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={attributes.image.data.attributes.url}
          width={500}
        />
      </CardBody>
    </Card>
      ))}
    </ul>
  );
}

export default function Home() {
  const { isLoading, error, data: events } = useEvents();

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
        <Events data={events} error={error} isLoading={isLoading} />
      </section>

      <h2 className="text-lightBrown font-bold text-4xl text-center leading-relaxed sm:w-1/2">
        Contact
      </h2>

      <form className="space-y-6 mt-4 min-w-[300px]">
        <div className="flex flex-col space-y-6">
          <input
            className="px-2 p-2 rounded-lg bg-lightBrown border border-b-4 border-r-4 border-black placeholder:text-black"
            type="text"
            placeholder="Subject"
          ></input>
          <textarea
            placeholder="Message"
            className="px-2 p-2 min-h-[200px] border border-b-4 border-r-4 border-black bg-lightBrown rounded-lg placeholder:text-black"
          ></textarea>
        </div>
        <Button className="px-5 py-2 font-medium border border-b-4 border-r-4 border-black rounded-lg shadow-2xl bg-mainOrange mt-4">
          Send
        </Button>
      </form>
    </main>
  );
}
