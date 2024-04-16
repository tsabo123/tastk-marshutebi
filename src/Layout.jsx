import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div className="container">
    <nav >
        <ul className=" navbar "  >
          <li>
            <Link to="Logo">Typology</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Layouts">Layouts</Link>
          </li>
          <li>
            <Link to="/Post">Post</Link>
          </li>
          <li>
            <Link to="/Page">Page</Link>
          </li>
          <li>
            <Link to="/Archives">Archives</Link>
          </li>
          <li>
            <Link to="/Featured">Featured</Link>
          </li>
          <li>
            <Link to="/OffCanvasExample"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg></Link>

          </li>
          
        </ul>
      </nav>

      <Outlet />

    </div>
      
    </>
  )
};


export default Layout;


