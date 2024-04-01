import Image from 'next/image'
import hero from '../../assets/content/360.png'
import hero2 from '../../assets/content/hero2.png'

import classes from './main-content.module.css'

const MainContent = () => {
   return (
      <main className={classes.mainContent}>
            <h1>Entregue sucesso agora com o Salesforce Custumer 360.</h1>
         <div className={classes.mainContentHero}>
            <Image src={hero} alt="hero"/>
            <div className={classes.buttonsContainerHero}>
               <button className={classes.buttonSelected}>Faça o teste grátis</button>
               <button className={classes.buttonOutline}> Saiba mais</button>
            </div>
            
         </div>

         <div>
            <h2>O que é CRM?</h2>
            <p>Aprenda tudo sobre o CRM, como unificar todas as suas equipes e como impulsionar o crescimento e a produtividade em toda a sua empresa.</p>
            <Image src={hero2} alt="hero"/>
         </div>

         <div>
            <h3>Mais Produtos</h3>
            {/* add fotos dos produtos aqui */}
         </div>
      </main>
   );
}

export default MainContent;
