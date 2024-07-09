import "./Header.css";

function Header() {
  return (
    <>
      <header className="header-bg">
        <div className="header">
            <img
              src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg"
              width="136"
              height="32"
              alt="Bikcraft"
            />
            <ul className="header-menu font-1-m">
              <li>Bicicletas</li>
              <li>Seguros</li>
              <li>Contato</li>
            </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
