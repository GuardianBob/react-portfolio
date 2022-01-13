import React from 'react';

export default function Contact() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    
    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));
    }

    return(
        <section id='contact'>
            <div className='row'>
                <h1>Contact</h1>
                <form netlify name='contact' onSubmit={handleSubmit} className='form-control'>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' id='name' name='name' onChange={(e) => setName(e.target.value)} />
                    <label htmlFor='email'>Email: </label>
                    <input type='text' id='email' name='email' onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor='message'>Name: </label>
                    <input type='text' id='message' name='message' onChange={(e) => setMessage(e.target.value)} />
                </form>
            </div>
        </section>
    );
}