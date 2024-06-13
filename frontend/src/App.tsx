import React, { useState } from 'react'
import './App.css';
import axios from "axios";
const App: React.FC = () => {
  const [values, setValues] = useState({
    name:"",
    email: "",
    number:"",
    feedback:"",
  });
 const change = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const {name,value} = e.target;
  setValues({...values,[name]: value})
 };

 const submit = async () => {
  if(values.name === "" || values.email === "" || values.number === "" || values.feedback === "" ){
    alert("All Fields Are Required");
  }
  else{
   await axios.post("http://localhost:8080/api/v1/post",values).then((res)=>{
    console.log(res);
    
   alert(res.data.message); 
   })
    setValues({
      name:"",
      email: "",
      number:"",
      feedback:"",
    });
  }
 }

  return (
    <div className="main d-flex justify-content-center align-items-center">
      <div className="card-contact px-3 py-2">
        <h1>FEEDBACK FORM</h1>
        <hr />
        <div className="cont-form d-flex flex-column justify-content-around">
          <div>
            <h5>Enter Your Name <span>*</span></h5>
            <input type="text" placeholder='Enter your Name' name='name' value={values.name} onChange={change}/>
          </div>
          <div>
            <h5>Enter Your Email</h5>
            <input type="text" placeholder='Your Email' name='email' value={values.email} onChange={change} />
          </div>
          <div className="imp-data">
            <h5>Phone Number <span>*</span></h5>
            <input type="number" placeholder='Number' name='number' value={values.number} onChange={change} />
          </div>
          <div>
            <h5>Enter Your Feedback <span>*</span></h5>
            <input type="text" placeholder='Feedback' name='feedback' value={values.feedback} onChange={change} />
          </div>
          <button className="button-55" role="button" onClick={submit}>Send</button>
        </div>
      </div>
    </div>
    
  )
}

export default App