import React,{useState} from 'react'
import {Form,Row,Col,Button} from 'react-bootstrap'
import * as EmailJs from 'emailjs-com'
import '../styles/Contact.css'

function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const submit = (e) => {
        e.preventDefault()

        let templateParams = {
            from_name: name,
            from_email: email,
            from_message: message,
        }

        EmailJs.send(
            'helixcry_website',
            'helixcry_portfolio',
            templateParams,
            'user_1VrH10Yr3IEWHROeLRAe6'
        ).then(res => {
            alert(`
                    Hello ${name}!! Thank you for contacting us.
                    Here have some cookies!!
                `)
        }).catch(error => {
            console.log(error)
            alert(
                `Hello ${name}. Sorry we are unable to deliver your message at this moment.`
            )
        })

        setName('');
        setMessage('');
        setEmail('');
    }

    return (
        <>
        <section id="contact" className="contact-container">
            <div className="contact-head">
                <h2>CONTACT US</h2>
            </div>
            <Form onSubmit={submit} className="contact-content">
                <Form.Group as={Row} className="contact-item">
                    <Form.Label as="p">
                        Full Name
                    </Form.Label>
                    <Form.Control as="input" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                </Form.Group>
                <Form.Group as={Row} className="contact-item">
                    <Form.Label as="p">
                        Email Address
                    </Form.Label>
                    <Form.Control as="input" placeholder="Enter Your Email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                    {
                        (!(email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))&&email.length>0)?
                        <span style={{color: 'red', margin:"10px"}}>Invalid Email Address</span>:null
                    }
                </Form.Group>
                <Form.Group as={Row} className="contact-item">
                    <Form.Label as="p">
                        Message
                    </Form.Label>
                    <Form.Control as="textarea" placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)} required/>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col>
                        <Button type="submit" variant="dark" className="submit-button">Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
        </section>
        </>
    )
}

export default Contact