import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase.config";

function Contact() {
  const [message, setMessage] = useState("");
  const [who, setWho] = useState("");
  async function submitHandler(event) {
    event.preventDefault();
    await setDoc(doc(db, who, message), {
      created: Date.now(),
      active: true,
    });
  }

  return (
    <div className="container">
      <h2>Here's How You Can Contact Me</h2>
      <h3>Email: MicahStew@gmail.com</h3>
      <h3>Phone: (863) 370-9140</h3>
      <h3>Or leave a message here</h3>
      <form className="input" onSubmit={submitHandler}>
        <input
          className="Who"
          type="text"
          value={who}
          placeholder="Who are you?"
          onChange={(e) => setWho(e.target.value)}
        ></input>
        <textarea
          className="Message"
          type="text"
          value={message}
          placeholder="What would you like to say and how can I get back to you?"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className="submitButton" onClick={submitHandler}>
          <div>Submit</div>
          
        </div>
      </form>
    </div>
  );

  return <div className="container"></div>;
}

export default Contact;
