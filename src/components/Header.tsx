
import Logo from '@/assets/logo.svg'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function Header(){

    return(
        <header className='w-full h-20 items-center flex'>
            <div className='w-full max-w-[1246px] px-4 mx-auto flex justify-between items-center'>
                <div>
                        <Image 
                            src={Logo}
                            alt='Logo'  
                        />

                </div>
               <Button className=' rounded-full px-6' >Publicar vaga</Button>

            </div>
        </header>
    )
}