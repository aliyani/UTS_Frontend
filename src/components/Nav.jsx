const Nav = () => {
    return (
        <div>
            <nav clasName="Navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        HOME
                    </a>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bc-target="#navbarSupportedContend"
                    aria-controls="navbarSupportedContend"
                    aria-expanded="false"
                    aria-aria-label="Togge navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Layanan
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Profil
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2"
                                   type="search"
                                   placeholder="Search"
                                   aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};
 
export default Nav;