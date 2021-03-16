import React,{useState} from 'react'
import {Form,Row,Col,Button} from 'react-bootstrap'
import '../styles/Contact.css'

function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const submit = (e) => {
        e.preventDefault();
        alert(`
            Name: ${name}
            Email: ${email}
            Message: ${message}
        `)
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <>
        <section id="contact" className="contact-container">
            <div className="contact-head">
                <h2>SEND US A MESSAGE</h2>
            </div>
            <Form onSubmit={submit} className="contact-content">
                <Form.Group as={Row} className="contact-item">
                    <Form.Label as="p">
                        Full Name
                    </Form.Label>
                    <Form.Control as="input" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </Form.Group>
                <Form.Group as={Row} className="contact-item">
                    <Form.Label as="p">
                        Email Address
                    </Form.Label>
                    <Form.Control as="input" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group as={Row} className="contact-item">
                    <Form.Label as="p">
                        Message
                    </Form.Label>
                    <Form.Control as="textarea" placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" variant="primary">Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
        </section>
        </>
    )
}

export default Contact