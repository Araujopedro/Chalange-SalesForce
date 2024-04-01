import Image from 'next/image'
import logoImg from '../../assets/icon/logo_desk.svg'
import classes from './header.module.css'

const Header = () => {
   return (
      <header className={classes.headerContainer}>
         <Image src={logoImg} alt="Logo" />
         <nav>
            <ul className={classes.navContainerList}>
               <li><a href="/">Produtos</a></li>
               <li><a href="#">Industrias</a></li>
               <li><a href="#">Aprendizado</a></li>
               <li><a href="/suporte">Acessibilidade e Suporte</a></li>
               <li><a href="#">Empresas</a></li>
               <li><a href="/login">Login</a></li>
               <li><a href="/cadastro" className={classes.testLink}>Teste Grátis</a></li>
            </ul>
         </nav>
      </header>
   );
};

export default Header;
