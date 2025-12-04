import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check } from "lucide-react";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container mx-auto grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={about1Img}
              alt="Foto de um cachorro e gato"
              fill
              priority
              className="object-cover hover:scale-110 duration-300"
              quality={100}
            />
          </div>
          <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 rounded-lg overflow-hidden border-white">
            <Image
              src={about2Img}
              alt="Foto do gato"
              fill
              priority
              quality={100}
            />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">SOBRE</h2>
          <p>
            Until one has loved an animal, a part of one's soul remains
            unawakened. We believe in it and we believe in easy access to things
            that are good for our mind, body and spirit. With a clever offering,
            superb support and a secure checkout you're in good hands.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Check className="text-red-500" />
              Abertos desde 2006
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-red-500" />
              Equipe com mais de 10 veterinários
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-red-500" />
              Qualidade é ossa prioridade
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
