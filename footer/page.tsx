import React from 'react'
import '../footer/footer-module.css'
import Image from 'next/image';
import IA from '../../assets/content/IA icon.png'
import Vendas from '../../assets/content/vendas icon.png'
import AttC from '../../assets/content/atendimentoCC icon.png'
import MKT from '../../assets/content/marketing icon .svg.jpg'
import comerce from '../../assets/content/commerce-icon.svg.png'
import nuvem from '../../assets/content/nuvem Icon.png'



const Footer = () => {
   return (
   <footer className= '.footer-quadros'>

      
        <div className='footer-IA'>
         <Image src = {IA} alt = 'Icone IA'/>
         <h2>IA</h2>
        </div>

         <div className='footer-IA'>
        <Image src = {Vendas} alt = 'Icone Vendas'/>
         <h2>venda</h2>
         </div>

         <div className='footer-IA'>
        <Image src = {AttC} alt = 'Icone AttC'/>
         <h2>Atendimento ao<br>
         </br>Cliente</h2>
         </div>

         <div className='footer-IA'>
        <Image src = {MKT} alt = 'Icone Marketing'/>
         <h2><br>
         </br>Marketing</h2>
         </div>
         
         <div className='footer-IA'>
        <Image src = {comerce} alt = 'Icone Commerce'/>
         <h2>Commerce
         </h2>
         </div>

         <div className='footer-IA'>
            <Image src= {nuvem} alt = 'icone Nuvem '/>
            <h2>Nuvem</h2>
         </div>
        
      </footer>
   );
};

export default Footer;
