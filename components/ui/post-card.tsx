import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";

interface CardPostProps {
  title: string;
  image: string;
  date: string;
  category: string;
  slug: string;
}

export const PostCard = ({
  title,
  image,
  date,
  slug,
  category,
}: CardPostProps) => {
  return (
    <Card shadow="sm" className="bg-transparent cursor-pointer">
      <Link href={`/post/${slug}`}>
        <CardBody className="overflow-hidden rounded-lg p-0">
          <Image
            width={200}
            height={400}
            alt={`Cover image for ${title}`}
            className="w-full object-cover h-[200px] overflow-hidden transition hover:scale-125"
            src={process.env.NEXT_PUBLIC_STORAGE_URL + image}
          />
        </CardBody>
        <CardFooter className="text-small px-0 flex flex-col items-start gap-y-2 justify-between">
          <b className="text-gray-400 text-xs font-light uppercase">
            {category}
          </b>
          <p className="text-start text-lg text-semibold">{title}</p>
          <p className="text-default-500">{new Date(date).toDateString()}</p>
        </CardFooter>
      </Link>
    </Card>
  );
};
