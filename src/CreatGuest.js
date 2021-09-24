import axios from "axios";
import React, { useState } from "react";
import { SendData,api } from './api/index'


export default function Creatguest() {
    const [first_name, Setfirst_name] = useState('');
    const [last_name, Setlast_name] = useState('');
    const [email, Setemail] = useState('');

    function Creat(){
        const data = {
            first_name: first_name,
            last_name: last_name,
            email:email
        }
        api.post('/y',data).catch(err =>{
            console.log('err',err)
        })
    }
   

  


    return (
        <div>

            <form onSubmit={Creat}>
                <input type='text' value={first_name} onChange={e => Setfirst_name(e.target.value)} placeholder='first_name' name='first_name' />
                <input type='text' value={last_name} onChange={e => Setlast_name(e.target.value)} placeholder='last_name' name='last_name' />
                <input type='text' value={email} onChange={e => Setemail(e.target.value)} placeholder='email' name='email' />
                <input type='submit' value='send' />
            </form>

        </div>
    )
}