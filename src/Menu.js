export function Menu(){


    return(
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Rawblacksky</a>
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </header>
    )
}