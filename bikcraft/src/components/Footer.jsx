import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer-bg">
        <div className="footer container">
          <img
            src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg"
            width="136"
            height="32"
            alt="Bikcraft"
          />
          <div className="footer-contato">
            <h3 className="font-2-1-b">Contato</h3>
            <ul className="font-2-m cor-5">
              <li>+55 21 9999-9999</li>
              <li>contato@bikcraft.com</li>
              <li>Ra Ali Perto, 42 - Botafogo</li>
              <li>Florianopolis - SC</li>
            </ul>
          </div>
          <div className="footer-informacoes">
            <h3 className="font-2-1-b">Informações</h3>
            <nav>
              <ul className="font-1-m cor-5">
                <li>Bicicletas</li>
                <li>Seguros</li>
                <li>Contato</li>
                <li>Termos e Condições</li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
