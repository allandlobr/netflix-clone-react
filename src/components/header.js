import "./header.css";

const Header = ({ isBlack }) => {
  return (
    <header className={`${isBlack && "black"}`}>
      <div className="header--logo">
        <a href="/">
          <img
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            alt="Usuário"
            src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
