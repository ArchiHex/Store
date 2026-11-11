import Header from "../Component/Header.jsx";
export default function Contact(){
    return (
        <>
            <Header/>
            <main className="page contact-page">
                <div className="page-heading">
                    <span className="eyebrow">We’re here to help</span>
                    <h1>Get in touch</h1>
                    <p>Send us a message and we’ll be happy to help.</p>
                </div>
                <form className="contact-form" onSubmit={(event)=>event.preventDefault()}>
                    <label>First name<input type="text" placeholder="Your first name"/></label>
                    <label>Last name<input type="text" placeholder="Your last name"/></label>
                    <label>Email<input type="email" placeholder="you@example.com"/></label>
                    <label>Phone number<input type="tel" placeholder="Your phone number"/></label>
                    <button className="button button-primary" type="submit">Send message</button>
                </form>
            </main>
        </>
    );
}