// Higher Order component
import React from 'react';
import  ReactDOM  from 'react-dom';


const Info =(props)=>(
    <div>
        <h1>info</h1>
        <p> the info is : { props.Info}</p>    
    </div>
);

const withAdminWarning=(WrappedComponent)=>{
    return (props)=>(
        <div>
          
          {props.isAdmin && <p>this is private info. please dont share</p>}
          <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication=(WrappedComponent)=>{
    
  
    return (props)=>(
        <div>
           { props.isAuthenticated ? (<WrappedComponent {...props } /> ) : ( <p>please login to view message</p>) }
        </div>
    )
}
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated = {false} Info = "there are the details" />,document.getElementById('app'));