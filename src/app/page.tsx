localStorage.theme = 'light'
import Image from "next/image";
import { Button } from "@/components/ui/button"
import Client1 from '@/assets/client1.png'
import Client2 from '@/assets/client2.png'
import Client3 from '@/assets/client3.png'
import Client4 from '@/assets/client4.png'
import Platform from '@/assets/platform.png'
import Platform2 from '@/assets/left-content.png'
import StarIcon from '@/assets/star.svg'
import ShieldIcon from '@/assets/shield.svg'
import MerlinChat from '@/components/MerlinChat'
import Link from "next/link";


export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //  <h1>Case Study</h1>
    //   </div>
    // </main>
    <div>
      <main className='w-full items-center flex flex-col'>
        
      <div className="w-full max-w-[1246px] px-4 mx-auto flex items-center justify-center flex-col gap-4 h-[430px] ">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl md:w-[850px] text-center" >
            A plataforma #1 para contratar os melhores Designers
            </h1>
              <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center mb-8">
              O Design Hunter é o epicentro da comunidade de design e a melhor plataforma para descobrir e se conectar com designers e oportunidades de emprego.
              </p>
              <Button className="rounded-full px-8">
                <Link href="https://tools.gomerlin.com.br/chat/c0e7acb3-4b75-4496-bb37-b1a6b92812a3">Publique uma vaga - GRÁTIS</Link>
              </Button>
      </div>

      <div className="w-full max-w-[1246px] px-4 mx-auto flex items-center justify-center flex-col gap-0 py-8 ">
           <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400 text-center">
              Empresas que confiam na DesignHunter.
           </p>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-12 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-auto lg:grid-cols-4 ">
            {
              //grid-cols-4
              //w-full justify-between flex max-w-[940px]
            }
            <Image src={Client1} alt="client1" className="col-span-1 "/>
            <Image src={Client2} alt="client1" className="col-span-1 "/>
            <Image src={Client3} alt="client1" className="col-span-1 "/>  
            <Image src={Client4} alt="client1" className="col-span-1 "/>

          </div>
      </div>
      {
      //Section 1
      }
          <div className="w-full max-w-[1246px] px-4 mx-auto flex  pt-32 flex-col lg:flex-row">
            <div className="w-full lg:w-1/2  gap-4 flex flex-col  lg:pr-32">
                <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-4xl">Porque empresas recorrem ao DesignHunter?</h2>
                <p className=" text-base text-gray-500 dark:text-gray-400 pb-8">Conectamos empresas aos m  elhores talentos do mercado de design, eliminando contratações inadequadas e economizando tempo e recursos.</p>
                
                <div className="flex-col gap-8 flex">

                <div className="flex row gap-4 ">
                      <div className="w-10"><Image src={StarIcon} alt="Star" width={24} height={24}/></div>
                      <div className="flex flex-col gap-2">
                        <h3 className=" font-bold ">Agilidade na contratação</h3>
                        <p className="text-gray-500">Facilitamos a contratação, conectando empresas aos designers mais qualificados para suas necessidades específicas</p>
                      </div>
                    </div>

                    <div className="flex row gap-4 ">
                      <div className="w-10"><Image src={ShieldIcon} alt="Star" width={24} height={24}/></div>
                      <div className="flex flex-col gap-2">
                        <h3 className=" font-bold ">Designer verificados</h3>
                        <p className="text-gray-500">Todos os designers na plataforma são verificados e escolhidos pela sua habilidade e experiência comprovada.</p>
                      </div>
                    </div>

                </div>
              


          </div>
            <div className="w-full mt-16 lg:mt-0 lg:w-1/2 lg:pr-16 ">
              <Image src={Platform} alt="Plataforma"/>
            </div>
          </div>
      {
      //Section 2
      }
         <div className="w-full max-w-[1246px] px-4 mx-auto flex  pt-32  flex-col-reverse lg:flex-row">
              {
                  // col1
                }

      <div className="w-full mt-16 lg:mt-0 lg:w-1/2 lg:pr-16 ">
                <Image src={Platform2} alt="Plataforma"/>
       </div>
       {
                  // col2
        }

       <div className="w-full lg:w-1/2  gap-4 flex flex-col  lg:pr-32"> 
               <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-4xl">Contratar um bom designer não precisa ser complicado</h2>
               <p className=" text-base text-gray-500 dark:text-gray-400 pb-8">Deixe um agente  DesignHunter facilitar isso pra você.</p>
              <div className="flex-col gap-8 flex">

                         <div className="flex row gap-4 ">
                            <div className="w-10"><Image src={StarIcon} alt="Star" width={24} height={24}/></div>
                            <div className="flex flex-col gap-2">
                              <h3 className=" font-bold ">Agilidade na contratação</h3>
                              <p className="text-gray-500">Facilitamos a contratação, conectando empresas aos designers mais qualificados para suas necessidades específicas</p>
                            </div>
                          </div>

                          <div className="flex row gap-4 ">
                            <div className="w-10"><Image src={ShieldIcon} alt="Star" width={24} height={24}/></div>
                            <div className="flex flex-col gap-2">
                              <h3 className=" font-bold ">Agilidade na contratação</h3>
                              <p className="text-gray-500">Facilitamos a contratação, conectando empresas aos designers mais qualificados para suas necessidades específicas</p>
                            </div>
                          </div>

              </div>
       </div>
      

            </div>
      </main>
      <MerlinChat />
    </div>
  );
}
