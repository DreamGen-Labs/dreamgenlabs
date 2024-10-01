
import { Facebook, Github, Instagram, Linkedin, Mail, Phone, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-10 border-t border-slate-300 max-w-full mt-10'>
      <div className="flex flex-row items-center justify-center text-base my-4 gap-y-2 gap-x-4">
        <Link
          href="https://www.facebook.com/profile.php?id=61558384975264&mibextid=LQQJ4d"
          className="text-white bg-custom-gradient p-1 rounded-lg"
        >
          <Facebook size={16}  />
        </Link>
        <Link
          href="https://x.com/dreamgenlabs"
          className="text-white bg-custom-gradient p-1 rounded-lg"
        >
          <X size={16}  />
        </Link>
        <Link
          href="https://www.instagram.com/dreamgenlabs/"
          className="text-white bg-custom-gradient p-1 rounded-lg"
        >
          <Instagram size={16} />
        </Link>
        <Link
          href="https://www.linkedin.com/company/dreamgen-labs/"
          className="text-white bg-custom-gradient p-1 rounded-lg"
        >
          <Linkedin size={16} />
        </Link>
        <Link
          href="https://github.com/DreamGen-Labs"
          className="text-white bg-custom-gradient p-1 rounded-lg"
        >
          <Github size={16} />
        </Link>
      </div>
      <div className="flex flex-col tablet:flex-row items-center justify-center text-base my-4 gap-y-2 tablet:gap-x-6">
        <div className='flex items-center'>
          <Mail size={20} className='mr-2' /><p>dreamgenlabs@gmail.com</p>
        </div>
        <div className='flex items-center'>
          <Phone size={20} className='mr-2' /><p>0765536046</p>
        </div>
      </div>
      <p className="text-sm text-center">&copy; 2024 <Link href='/' className='main-text text-sm font-semibold'>DreamGen Labs</Link>. All rights reserved.</p>
    </footer>
  )
}

export default Footer