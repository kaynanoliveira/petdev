import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>
              Until one has loved an animal, a part of one's soul remains
              unawakened. We believe in it and we believe in easy access to
              things that are good for our mind, body and spirit. With a clever
              offering, superb support and a secure checkout you're in good
              hands.
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
                Qualidade é nossa prioridade
              </li>
            </ul>
            <div className="flex gap-2">
              <a
                target="_blank"
                href={
                  "https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações"
                }
                className="bg-[#E84C3D] px-5 py-2 rounded-md font-semibold flex justify-center w-fit gap-2 text-white"
              >
                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>
              <a
                href="#"
                className="px-5 py-2 rounded-md flex justify-center w-fit gap-2"
              >
                <MapPin className="w-5 h-5" />
                Endereço da Loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
