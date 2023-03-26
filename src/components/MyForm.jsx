import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
    return (
        <>
        <h2>REGISTER</h2>
        <form>
            <label for="email">Email address</label>
            <input id="email" type="email" name="email" placeholder="Enter email" required />
            <br />

            <label for="first-name">Name</label>
            <input id="first-name" type="text" name="first-name" placeholder="Enter Name" />
            <br />

            <label for="last-name">Lastname</label>
            <input id="last-name" type="text" name="last-name" placeholder="Enter Lastname" />
            <br />

            <label for="phone">Phone Number</label>
            <input id="phone" type="number" name="phone" placeholder="Enter Phone Number" max={9999999999}/>
            <br />

            <label for="password">Password</label>
            <input id="password" type="password" name="password" placeholder="Password" />
            <br />

            <button type="submit">Submit</button>
        </form>
        </>
    )
 }

 export default MyForm;