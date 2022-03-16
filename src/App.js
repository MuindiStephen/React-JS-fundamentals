import react from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <p>Myp0/ App</p> */}
        <Info></Info>
        <Hello/> 
        <SignUp></SignUp>
        <MyForm></MyForm>
       <Garage></Garage>
       <Table></Table>
       <Brand></Brand>
       <Tv></Tv>
       <Smartphone/>
    </div>
  );
}
//creating components
function Info(){
  return(
    <div><h1>Inventory Management System</h1>
    </div>
   );
  }
 
function Hello(){
  return  "Manage your stuff" ;
}

function SignUp(){
  return(
  <div>
     <form>
       <br></br>
       <p>Sign to create an account</p>
       Username :
       <input type="text" id="username"/>
       <br/>
       <br/>
         <div>
         Password:
       <input type="password" id="password"/>
         </div>
          <br></br>
         <input type="submit"/>
     </form>
     </div>
   
  );
}

function MyForm(){
  return(
  <div>
    <p>Forgot Password?</p>
  </div>
  );
}

function Garage(){
  const cars = ['Wish', 'Noah', 'Rangerover', 'Ford', 'Sienta'];

  return(
    <>
     <h1>Who lives in my Garage ?</h1>
     <ul>
       <li>{cars[0]}</li>
       <li>{cars[1]}</li>
       <li>{cars[2]}</li>
       <li>{cars[3]}</li>
       <li>{cars[4]}</li>
     </ul>
    </>
  );
}

function Table(){
  return(
   <div>
     <table>
       <thead>
        <th>Course Code</th>
        <th>Course Name</th>
        <th>Hours</th>
        <th>Grade</th>
       </thead>

       <tbody>
         <td>CSC 311</td>
         <td>Software Engineering</td>
         <td>40</td>
         <td>A</td>
       </tbody>
     </table>
   </div>
  );
}

function Vehicle(props){
  return <h1>This car is {props.brand}</h1> 
}

function Brand(){
  return (
    <>
    <h2>Brand of a Vehicle matters</h2>
    <Vehicle brand = "Mazda-Demio"/>
    </>
  );
}

class Tv extends react.Component{
  render(){
  return <h1>I Like this tv device, it's cool and classic</h1>
  }
}

function Smartphone(){
  return <h1>This is an infinix Smartphone</h1>
}

export default App;


