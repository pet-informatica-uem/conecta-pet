export function Footer() {
  return (
      <>
        <hr className="mx-auto w-4/5 border-light-olive border-t" />
        <footer id="contato" className="scroll-mt-24 md:scroll-mt-36 flex flex-col md:flex-row w-full justify-center border-0 items-center gap-8 md:gap-0 text-ink p-8 md:p-16">
            <div className="hidden md:flex flex-1 items-center justify-center md:justify-start gap-2">
              <img src="/logotipo.svg" alt="Logo" className="w-14 h-14 md:w-18 md:h-18"/>
            </div>
            <div className="text-center">
              <p>Entre em contato conosco:</p>
              <div className="flex gap-8 items-center justify-center my-2">
                <a href="mailto:conectapetuem@gmail.com" aria-label="Enviar e-mail para ConectaPET UEM">
                  <img src="/email.svg" alt="Email" className="w-12 h-12 md:w-15 md:h-15"/>
                </a>
                <a href="https://www.instagram.com/conectapetuem/" aria-label="Acessar o Instagram do ConectaPET UEM" target="_blank" rel="noopener noreferrer">
                  <img src="/insta.svg" alt="Instagram" className="w-12 h-12 md:w-15 md:h-15"/>
                </a>
              </div>
              <p>Desenvolvido com &lt;3 pela comissão do ConectaPET</p>
            </div>
            <div className="hidden md:flex flex-1 items-center justify-center md:justify-end gap-8">
              <a href="https://www.instagram.com/conectadasuem/" aria-label="Acessar o site do Conectadas" target="_blank" rel="noopener noreferrer">
                <img src="/conectadas_logo.svg" alt="Logo do Conectadas" className="w-14 h-14 md:w-18 md:h-18"/>
              </a>
              <a href="https://www.instagram.com/petinfouem/" aria-label="Acessar o site do PET-Informática" target="_blank" rel="noopener noreferrer">
                <img src="/pet_logo.svg" alt="Logo do PET Informática" className="w-14 h-14 md:w-18 md:h-18"/>
              </a>
            </div>
        </footer>
      </>
  )
}