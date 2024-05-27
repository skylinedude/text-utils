import React from 'react'

export default function Alert(props:any) {
    const capitalize=(word:any)=>{
const lower=word.toLowerCase();
return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
  return (
<div style={{height:'60px'}}>
{props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
</div>}
<br />
</div>
  
    
  )
}