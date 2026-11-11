import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header className="site-header">
            <Link className="brand" to="/">Shoply</Link>
            <nav aria-label="Main navigation">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}