import React, { useState, useEffect } from 'react'
import axios from 'axios';

const SubmittedForm = () => {
  const [submdata, setsubmdata] = useState({
    GetResponseSubscriber: {
      imsi: 734025000145829, //Numeric  and length==14
      msisdn: 584124997370,//Numeric and length= 10
      hlrsn: 1,//Numeric and length=1
      cardType: "USIM",//Dropdown
      nam: "BOTH",
      services: {
        clip: {
          prov: "PROV"//Dropdown
        },
        smsmt: "Hello",//Text
        optgprss: { //min element=1 and max element=5 
          optgprs: [
            {
              prov: "TRUE",//Toggle
              cntxId: 3//numeric 1 digit
            },
            {
              prov: "TRUE",
              cntxId: 5
            },
            {
              prov: "TRUE",
              cntxId: 3
           },
            {
              prov: "TRUE",
              cntxId: 5
            }
          ]
        },
        odboc: {//dropdown
          odboc: "BOIC"
        },
        odbroam: {//dropdown
          odbroam: "BROHPLMNC"
        },
        category: {//dropdown
          category: "COMMON"
        },
        eps: {//toggle
          prov: "TRUE"
        },
        smdp: "MSC"//dropdown
      },
      rroption: "ALL_PLMNS",//dropdown
      skey: 0//numeric 0-9
    }
  });
  const [update, setUpdate] = useState("")
  const [confirmUpdate, setConfirmUpdate] = useState(false)
  const handleChange =(value)=>{

  }
  const edit =()=>{
   setConfirmUpdate(true)
  }
  return (
    <div className='submitteddata'>
      {confirmUpdate===true?<input></input>:<p>{submdata.GetResponseSubscriber.imsi}</p>}
      <button onClick={edit}>Edit</button>
    </div>
  )
}

export default SubmittedForm
