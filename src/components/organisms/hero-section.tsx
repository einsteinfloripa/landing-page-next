'use client'

import Image from "next/image";
import { Button } from "../atoms/button";
import Heading from "../atoms/typography/typography";

export const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen"
    >

        <div className="flex flex-col items-center justify-center px-4 gap-7">
            <Heading className="text-center">
                Lorem ipsum dolor sit <br/> amet consectetur.
            </Heading>
            <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur. Duis nisi auctor nunc lacus metus nunc viverra sollicitudin scelerisque. <br/> Nibh fringilla blandit ullamcorper etiam.
            </p>
            <div className="flex gap-2">
                <Button className="px-6 py-4 text-white rounded-full bg-black">Seja nosso aluno</Button>
                <Button className="px-6 py-3 text-black rounded-full bg-white border-[2px] border-black hover:bg-white hover:opacity-70">Faça parte da equipe</Button>
            </div>
            <div className="hidden lg:block absolute top-40 right-64">
                <div className="relative flex items-center justify-center">
                    <Image  src='/star-shape.svg' alt="Forma de Estrela" width={240} height={240} />

                    <Image className="absolute top-10" src='/einstein-rosto.png' alt="Rosto de Albert Einstein" width={160} height={160}/>
                </div>
            </div>
            <div className="hidden lg:block absolute bottom-72 left-64 -rotate-12">
                <div className="relative rounded-2xl bg-[#858585] h-[157px] w-[226px] pt-4">
                    <p className="text-white text-center uppercase font-semibold">
                        Nos ajude a
                    </p>
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-[87px] w-[202px] bg-white flex items-center justify-center font-semibold">
                        <p className="text-black uppercase text-center">
                            Mudar a educação do Brasil
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};
