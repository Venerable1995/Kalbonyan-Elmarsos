import React from "react";
import {Link} from 'react-router-dom';
const EditPage= ()=>(
    <div>
    <h1> My Work  </h1>
    <p> checkout the stuff i've done </p>
    <Link to="/portfolio/:1">item-one</Link>
</div>
)
export default EditPage;