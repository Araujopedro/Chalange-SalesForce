
const MainContentLogin = () => {
   return (
      <section className='{box1}'> 
         <div className='Quadro'>
            <input type="checkbox" id="lembrar-me" />
            <label htmlFor="lembrar-me">Lembrar-me</label>
         </div>
         
         <div>
            <a href="#">Esqueceu sua senha?</a>
         </div>
         <div>
         
            <a href="/cadastro">Não é um cliente? <button>Teste Gratuitamente</button></a>
         </div>
      </section>   
      )
}

export default MainContentLogin;
