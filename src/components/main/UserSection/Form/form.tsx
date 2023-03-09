import React from "react"
import "./form.scss"

const Form = () => {
  return (
    <form className="form">
        <label className="name-label">NAME</label>
        <input type='text'
        className="name-input"
        placeholder="We will display your name in participation list">
        </input>
        <label className="email-label">EMAIL</label>
        <input type='email'
        className="email-input"
        placeholder="We will display your email in participation list ">
        </input>
        <button type="submit" className="submit-button">GET EARLY ACCESS</button>
    </form>
  )
}

export default Form