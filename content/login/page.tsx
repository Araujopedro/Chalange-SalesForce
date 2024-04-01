import FormLoginMainContent from '@/components/form-login-main-content'
import MainContentLogin from '@/components/main-content-login'
import Image from 'next/image'
import logo from '../../assets/icon/logo_desk.svg'
import Footer from '@/components/footer/page';
 
import ImgLado from '../../assets/content/form-free-trial-elf-sales-cloud-device.png'
const Login = () => {
   return (
      <div>
         <Image src={logo} alt="Logo" />
         <FormLoginMainContent />
         <MainContentLogin />

         <Image src={ImgLado} alt= 'imagem lateral'></Image>


         
         <Footer/>
         
         
         
         
      </div>
   );
};

export default Login;
