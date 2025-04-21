import logo from "/src/assets/react.svg"

export default function Navbar () {

    return(
        <header>
            <nav>
                <img className="logo" src={logo} alt="React Logo" width="40px" />
                <span>Tourguide</span>
                
            </nav>
        
        </header>
    )
}