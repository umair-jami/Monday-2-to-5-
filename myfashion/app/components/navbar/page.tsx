import React from 'react';
import vector from '../../assets/Vector.png';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  });

export default function Navbar() {
  return (
    <section className='container flex justify-between items-center h-[5rem]'>
      <div className='flex'>
        <Image src={vector} alt="icon" />
        <h2 className={`text-4xl ${poppins.className}`} style={{ fontWeight: 900 }}>
          Fashion
        </h2>
      </div>
      <div className='flex gap-20'>
        <Link href={"/"} className={`text-dark ${poppins.className}`} style={{fontWeight:300}}>HOME</Link>
        <Link href={"/"} className={`text-dark ${poppins.className}`} style={{fontWeight:300}}>FASHION</Link>
        <Link href={"/"} className={`text-dark ${poppins.className}`} style={{fontWeight:400}}>FAVOURITE</Link>
      </div>
    </section>
  );
}
