import Header from "../Component/Header.jsx";
import {Link} from "react-router-dom";
export default function Home(){
    return (
        <>
            <Header/>
            <main className="page home-page">
                <section className="hero-panel">
                    <span className="eyebrow">A better way to shop</span>
                    <h1>Find something<br/>you’ll love.</h1>
                    <p>Explore thoughtful picks for your everyday life, all in one place.</p>
                    <Link className="button button-primary" to="/products">Browse products</Link>
                </section>
            </main>
        </>
    );
}