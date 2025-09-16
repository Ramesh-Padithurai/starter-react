import React, { useState } from 'react';
import { Text, Input, Textarea, Button } from '@momentum-design/components/react';
import './homepage.css';

const HomePage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const isValid = name.trim() && email.trim() && message.trim();

    return (
        <div className="home-page-wrapper">
            <div className="contact-form">
                <Text type="heading-midsize-bold" tagname='h1'>Contact us</Text>
                <div className="contact-row">
                    <p>Happy learning!</p>
                    <Input 
                        label="Name" 
                        placeholder="Jane Doe"
                        value={name}
                        onInput={(e: InputEvent) => setName((e.target as HTMLInputElement)?.value ?? '')}
                        required
                    />
                </div>
                <div className="contact-row">
                    <Input 
                        label="Email" 
                        placeholder="jane@example.com"
                        value={email}
                        onInput={(e: InputEvent) => setEmail((e.target as HTMLInputElement)?.value ?? '')}
                        required
                    />
                </div>
                <div className="contact-row">
                    <Textarea 
                        label="Message" 
                        placeholder="How can we help?"
                        rows={4}
                        value={message}
                        onInput={(e: InputEvent) => setMessage((e.target as HTMLTextAreaElement)?.value ?? '')}
                        required
                    />
                </div>
                <div className="contact-actions">
                    <Button variant="tertiary">Cancel</Button>
                    <Button variant="primary" disabled={!isValid}>Send</Button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;