import React, { useEffect, useState } from 'react';
import data from './roles.json';

const Role = ({TypeRole,children}) => {
    debugger;
    const [isShow,setIsShow]= useState(false);
    const dataRole=JSON.parse(data);
    useEffect ( ()=> {
        TypeRole.map((role)=>{
            if (role ===dataRole.role){
                setIsShow(true);  
            }
        });
    }) 

   
  return (
    <>
     {isShow && children}
    </>
   
  )
}

export default Role
