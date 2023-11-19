import Image, { StaticImageData } from "next/image";
import { Card } from "@nextui-org/react";
import { CardHeader } from "@nextui-org/react";
import { CardBody } from "@nextui-org/react";

// See API reference here: https://nextui.org/docs/components/card

// Importing a sample image for reference
import Test from "../../../public/test.jpeg";

// Define the props that the LandingPageCard component accepts
type Props = {
  title: string;
  subTitle: string;
  small: string;
  imageURL: string | StaticImageData;
  imageAlt: string;
};

// LandingPageCard component represents a card with an image
export default function LandingPageCard({
  title,
  small,
  imageURL,
  imageAlt,
  subTitle,
}: Props) {
  return (
    // Card component from the NextUI library
    <Card className="py-4">
      {/* CardHeader section */}
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        {/* Subtitle of the card */}
        <p className="text-tiny uppercase font-bold">{subTitle}</p>
        {/* Small description or additional information */}
        <small className="text-default-500">{small}</small>
        {/* Main title of the card */}
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>

      {/* CardBody section */}
      <CardBody className="overflow-visible py-2">
        {/* Image component from Next.js for displaying the main image */}
        <Image
          alt={imageAlt} // Alternative text for the image (for accessibility)
          className="object-cover rounded-xl" // Styling for the image
          src={imageURL} // URL or StaticImageData for the image
          width={270} // Width of the image
          height={270} // Height of the image
        />
      </CardBody>
    </Card>
  );
}
