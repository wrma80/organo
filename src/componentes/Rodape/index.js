import './Rodape.css'

const Rodape = () => {

    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://www.facebook.com/?locale=pt_BR'>
                            <img src='./imagens/fb.png' alt='facebook'></img>
                        </a>
                    </li>
                    <li>
                        <a href='https://twitter.com/?lang=pt-br'>
                            <img src='./imagens/tw.png' alt='twitter'></img>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/'>
                            <img src='./imagens/ig.png' alt='instagram'></img>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='./imagens/logo.png' alt='organo' className='imgLogo'></img>
            </section>
            <section>
                <p>Desenvolvido por Alura.</p>
            </section>
        </footer>
    )
}

export default Rodape