// const Header = () => {
//     return (
//         <header>
//             <nav className="navbar navbar-expand-sm">
//                 {/* <a href="https://www.digitalfutures.com" className="navbar-brand" target="_blank" rel="noreferrer">
//                     <img src="https://google.com" alt="Digital Futures" width="100" />
//                 </a> */}
//                 <ul>
//                     <li>
//                         <a href="/" className="navbar-brand">DFX</a>
//                     </li>
//                     <li>
//                         Need Help?
//                     </li>
//                     <li>
//                         Talk to us
//                     </li>
//                     <li>
//                         Menu
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">DFX</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-inline-flex p-2 bd-highlight" id="navbarNav">
                <div className="d-flex flex-row-reverse bd-highlight">
                    <ul className="navbar-nav">
                        <li className="nav-item active p-2 bd-highlight">
                            <a className="nav-link" href="#">Need Help? </a>
                            {/* <span className="sr-only">(current)</span> */}
                        </li>
                        <li className="nav-item p-2 bd-highlight">
                            <a className="nav-link" href="#">Talk to us</a>
                        </li>
                        <li className="nav-item p-2 bd-highlight">
                            <a className="nav-link" href="#">Menu</a>
                        </li>
                        <li className="nav-item p-2 bd-highlight">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div >
        </nav >
    );
}

export default Header;