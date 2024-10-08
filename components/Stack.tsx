import Image from "next/image";


export default function Stack() {
  return (
    <div>
        <div className='flex overflow-hidden justify-center -space-x-2'>
        <Image
                src={'/perfil (3).jpg'}
                alt="foto de perfil" width={50} height={50}
               className='w-14 h-14 inline-block rounded-full ring-2 ring-white'/>
        <Image
                src={'/perfil (2).jpg'}
                alt="foto de perfil" width={50} height={50}
               className='w-14 h-14 inline-block rounded-full ring-2 ring-white'/>
        <Image
                src={'/perfil (1).jpg'}
                alt="foto de perfil" width={50} height={50}
               className='w-14 h-14 inline-block rounded-full ring-2 ring-white'/>
        </div>
    </div>
  )
}
