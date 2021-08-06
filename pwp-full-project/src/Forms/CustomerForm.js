import React, { useState } from "react";

const CustomerForm = ({ addCustomer }) => {
  const [customer, setCustomer] = useState({
    firstName:"",
    middleName:"",
    lastName:"",
    age:-3,
    contactNo:"",
    email:"",
    problem:""
  });

  const handleChange = (event) => {
    // setCustomer({ ...customer, firstName: event.target.value });
    const {name, value } = event.target
    setCustomer ({
        [name]:value
    })
    
    // alert(name + ":"+ value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // addTodo(todo);
    // setCustomer({  ...customer, setCustomer  });
    // alert(customer.firstName);
    // alert(customer.problem);
    if(customer.age < 18){
        alert("You are not of legal age");
        return;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        First Name : <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={customer.firstName}
        /><br></br>
          Middle Name :  <input
          type="text"
          name="middleName"
          onChange={handleChange}
          value={customer.middleName}
        /><br></br>
          Last Name : <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={customer.lastName}
        /><br></br>
        Age :<input
          type="text"
          name="age"
          onChange={handleChange}
          value={customer.age}
        /><br></br>
        Phone Number :<input
          type="text"
          name="contactNo"
          onChange={handleChange}
          value={customer.contactNo}
        /><br></br>
        Email :<input
          type="text"
          name="email"
          onChange={handleChange}
          value={customer.email}
        /><br></br>
        Problem statement :<textarea 
        name="problem"
        onChange={handleChange}
        value={customer.email}
          rows="5" cols="33">
            It was a dark and stormy night...
            </textarea>
            <br></br>
        <input type="submit" value="Submit!" />
      </form>
    </div>
  );
};

export default CustomerForm;