import './App.css';
import Logo from './image/logo_small.png'

function App() {
  return (
    <div className='container-navi' >
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav-main"  >
      <img src={Logo} className="img_logo" />

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="buttonToggle">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Principal <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Noticias</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Linguagens
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">CSharp (c#)</a>
                      <a className="dropdown-item" href="#">Delphi</a>
                      <a className="dropdown-item" href="#">Visual Basic</a>
                      <a className="dropdown-item" href="#">Javascript</a>
                      <a className="dropdown-item" href="#">HTML</a>
                      <a className="dropdown-item" href="#">CSS</a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar..." aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Procurar</button>
        </form>
      </div>
    </nav>
    </div>
  );
}

export default App;
