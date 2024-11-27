import { useRef, useState } from "react";
import FormInput from "./components/FormInput.jsx";
import "./App.css";

function App() {
  //const [username, setUsername] = useState("hi")

  const usernameRef = useRef();

  console.log("re-render");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRef);
  };

  return (
    <>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <FormInput refer={usernameRef} placeholder="Username" />
          <FormInput placeholder="Email" />
          <FormInput placeholder="Fullname" />
          <FormInput placeholder="Username" />
          <FormInput placeholder="sth else" />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
