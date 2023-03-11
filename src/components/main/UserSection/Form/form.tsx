import React, {useState} from "react";
import "./form.scss";

interface FormProps {
    onSubmit: (name: string, email: string) => void;
  }

const Form: React.FC<FormProps> = ({onSubmit}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(name, email);
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label className="name-label">NAME</label>
            <input type='text'
            className="name-input"
            placeholder="We will display your name in participation list"
            value={name}
            onChange={(event) => setName(event.target.value)}>
            </input>
            <label className="email-label">EMAIL</label>
            <input type='email'
            className="email-input"
            placeholder="We will display your email in participation list "
            value={email}
            onChange={(event) => setEmail(event.target.value)}>
            </input>
            <button type="submit" className="submit-button">GET EARLY ACCESS</button>
        </form>
    )
}

export default Form