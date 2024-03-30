import React from 'react'
import '../footer/footer-module.css'
import Image from 'next/image';
import IA from '../../assets/content/IA icon.png'

const Footer = () => {
   return (
   <footer className= 'Classes.Box1'>

      
        <div className='footer-IA'>
         <Image src = {IA} alt = 'Icone IA'/>
         <h2>IA</h2>
        </div>

        <div className='footer-IA'>
         <Image src = {IA} alt = 'Icone IA'/>
         <h2>venda</h2>
        </div>
      </footer>
   );
};

export default Footer;
