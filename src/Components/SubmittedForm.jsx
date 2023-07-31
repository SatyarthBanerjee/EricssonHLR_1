import { isDisabled } from '@testing-library/user-event/dist/utils'
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Switch } from 'antd'
import axios from 'axios'

const SubmittedForm = () => {
  const [searchResults, setsearchResults]= useState([])
  const [input, setInput] = useState("")
  const [input_1, setInput_1] = useState("")
  const [editEnable, setEditEnable]= useState(false)
  // const data= [
  //   {
  //     GetResponseSubscriber: {
  //       imsi: 734025000145829, //Numeric  and length==14
  //       msisdn: 584124997370,//Numeric and length= 10
  //       hlrsn: 1,//Numeric and length=1
  //       cardType: "USIM",//Dropdown
  //       nam: "BOTH",
  //       services: {
  //         clip: {
  //           prov: "PROV"//Dropdown
  //         },
  //         smsmt: "Hello",//Text
  //         optgprss: { //min element=1 and max element=5 
  //           optgprs: [
  //             {
  //               prov: true,//Toggle
  //               cntxId: 3//numeric 1 digit
  //             },
  //             {
  //               prov: true,
  //               cntxId: 5
  //             },
  //             {
  //               prov: true,
  //               cntxId: 3
  //             },
  //             {
  //               prov: true,
  //               cntxId: 5
  //             }
  //           ]
  //         },
  //         odboc: {//dropdown
  //           odboc: "BOIC"
  //         },
  //         odbroam: {//dropdown
  //           odbroam: "BROHPLMNC"
  //         },
  //         category: {//dropdown
  //           category: "COMMON"
  //         },
  //         eps: {//toggle
  //           prov: true
  //         },
  //         smdp: "MSC"//dropdown
  //       },
  //       rroption: "ALL_PLMNS",//dropdown
  //       skey: 0//numeric 0-9
  //     }
  //   },
  //   {
  //     GetResponseSubscriber: {
  //       imsi: 12345678901234, //Numeric  and length==14
  //       msisdn: 1234568990,//Numeric and length= 10
  //       hlrsn: 2,//Numeric and length=1
  //       cardType: "USIM",//Dropdown
  //       nam: "BOTH",
  //       services: {
  //         clip: {
  //           prov: "PROV"//Dropdown
  //         },
  //         smsmt: "Hello",//Text
  //         optgprss: { //min element=1 and max element=5 
  //           optgprs: [
  //             {
  //               prov: true,//Toggle
  //               cntxId: 3//numeric 1 digit
  //             },
  //             {
  //               prov: true,
  //               cntxId: 5
  //             },
  //             {
  //               prov: true,
  //               cntxId: 3
  //             },
  //             {
  //               prov: true,
  //               cntxId: 5
  //             }
  //           ]
  //         },
  //         odboc: {//dropdown
  //           odboc: "BOIC"
  //         },
  //         odbroam: {//dropdown
  //           odbroam: "BROHPLMNC"
  //         },
  //         category: {//dropdown
  //           category: "COMMON"
  //         },
  //         eps: {//toggle
  //           prov: true
  //         },
  //         smdp: "MSC"//dropdown
  //       },
  //       rroption: "ALL_PLMNS",//dropdown
  //       skey: 1//numeric 0-9
  //     }
  //   },
  //   {
  //     GetResponseSubscriber: {
  //       imsi: 79348043978052, //Numeric  and length==14
  //       msisdn: 2905293403,//Numeric and length= 10
  //       hlrsn: 3,//Numeric and length=1
  //       cardType: "USIM",//Dropdown
  //       nam: "BOTH",
  //       services: {
  //         clip: {
  //           prov: "PROV"//Dropdown
  //         },
  //         smsmt: "Hello",//Text
  //         optgprss: { //min element=1 and max element=5 
  //           optgprs: [
  //             {
  //               prov: false,//Toggle
  //               cntxId: 1//numeric 1 digit
  //             },
  //             {
  //               prov: true,
  //               cntxId: 5
  //             },
  //             {
  //               prov: false,
  //               cntxId: 2
  //             },
  //             {
  //               prov: true,
  //               cntxId: 5
  //             }
  //           ]
  //         },
  //         odboc: {//dropdown
  //           odboc: "BOIC"
  //         },
  //         odbroam: {//dropdown
  //           odbroam: "BROHPLMNC"
  //         },
  //         category: {//dropdown
  //           category: "COMMON"
  //         },
  //         eps: {//toggle
  //           prov: true
  //         },
  //         smdp: "MSC"//dropdown
  //       },
  //       rroption: "ALL_PLMNS",//dropdown
  //       skey: 3//numeric 0-9
  //     }
  //   },
    
    
  // ]
  const [data, setData_1] = useState([])
  const [imsi, setImsi] = useState("")
  const [search, setSearch] = useState(false)
  // useEffect(()=>{
  //   // axios.get(`https://localhost:5000/all-data/${imsi}`).then(
  //   //   res=>setData_1(res.data)
  //   // )
  // },[search])
  const handleSearchChange = (value) => {
    setInput(value)
    

  };
  const handleSearchChange_1 = (value)=>{
    setInput_1(value)
  } 
  
  const handleSearchClick =(e)=>{
    e.preventDefault();
    axios.get(`https://localhost:5000/data/${imsi}`).then(
      res=>setData_1(res.data)
    )
    const filteredData = data.filter((item) => {
      const subscriber = item.GetResponseSubscriber;
      if (!subscriber) return false; // If GetResponseSubscriber is undefined, skip this item

      return (
        (subscriber.imsi === parseInt(input) && subscriber.imsi.toString().includes(input)) ||
        (subscriber.msisdn === parseInt(input_1) && subscriber.msisdn.toString().includes(input_1))
      );
    });
    setsearchResults(filteredData)
    setInput("")
    setInput_1("")
    setEditEnable(true)
    setSearch(true)
    setImsi(input)
  }
  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick(e);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener('keydown', handleSearchKeyDown, true);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleSearchKeyDown, true);
    };
  }, []);
  const [enable, setEnable] = useState(true)
  const enableEdit =()=>{
    setEnable(false)
  }
  const enableCancel =()=>{
    setEnable(true)
  }

  return (
    
    <div className="searchData">
      <Navbar />
      <div className="searchfield">
        <input
          placeholder="Search IMSI"
          className="search"
          value={input}
          onChange={(e) => handleSearchChange(e.target.value)}
          
        />
        <input
          placeholder='Search MSISDN'
          className="search msisdn-search"
          value={input_1}
          onChange ={e=>handleSearchChange_1(e.target.value)}
          
        />
        <img className="searchbtn" src="/Images/search.png" onClick={handleSearchClick}></img>
      </div>
      <div className="resultField">
        {searchResults.length === 0 ? (
          <p>Type IMSI or MSISDN</p>
        ) : (
          searchResults.map((data, index) => (
            <div className="searchResults" key={index}>
              <div className='submformfp'>
                <p>Imsi: </p>
                <input value={data.GetResponseSubscriber?.imsi} disabled={enable}></input>
                <p>Msisdn: </p>
                <input value={data.GetResponseSubscriber?.msisdn} disabled={enable}></input>
                <p>hlrsn: </p>
                <input value={data.GetResponseSubscriber?.hlrsn} disabled={enable}></input>
                <p>CardTyp: </p>
                <select disabled={enable}>
                  <option value={data.GetResponseSubscriber?.cardType}>{data.GetResponseSubscriber?.cardType}</option>
                </select>
                <p>Nam: </p>
                <select disabled={enable}>
                  <option value={data.GetResponseSubscriber?.nam}>{data.GetResponseSubscriber?.nam}</option>
                </select>
              </div>
              <h1 style={{ color: 'White', fontSize: '20px' }}>Services</h1>
              <div className='submservices'>
                <div className='leftside'>
                  <div className='leftcont'>
                    <p>Clip: </p>
                    <select disabled={enable}>
                      <option value={data.GetResponseSubscriber?.services?.clip?.prov}>{data.GetResponseSubscriber?.services?.clip?.prov}</option>
                    </select>
                  </div>
                  <div className='leftcont'>
                    <p>Smsmt: </p>
                    <input value={data.GetResponseSubscriber?.services?.smsmt} disabled={enable}></input>
                  </div>
                  <div className='leftcont'>
                    <p>ODBOC</p>
                    <select disabled={enable}>
                      <option value={data.GetResponseSubscriber?.services?.odboc?.odboc}>{data.GetResponseSubscriber?.services?.odboc?.odboc}</option>
                    </select>
                  </div>
                  <div className='leftcont'>
                    <p>ODBROAM</p>
                    <select disabled={enable}>
                      <option value={data.GetResponseSubscriber?.services?.odbroam?.odbroam}>{data.GetResponseSubscriber?.services?.odbroam?.odbroam}</option>
                    </select>
                  </div>
                  <div className='leftcont'>
                    <p>Category</p>
                    <select disabled={enable}>
                      <option value={data.GetResponseSubscriber?.services?.category?.category}>{data.GetResponseSubscriber?.services?.category?.category}</option>
                    </select>
                  </div>
                  <div className='leftcont'>
                    <p>EPS</p>
                    <div className='eps'>
                      <Switch 
                        checked={data.GetResponseSubscriber?.services?.eps?.prov}
                        disabled={enable}
                      />
                    </div>
                  </div>
                  <div className='leftcont'>
                    <p>SMDP: </p>
                    <select disabled={enable}>
                      <option value={data.GetResponseSubscriber?.services?.smdp}>{data.GetResponseSubscriber?.services?.smdp}</option>
                    </select>
                  </div>
                </div>
                <div className='rightoptgrs'>
                  {data.GetResponseSubscriber.services.optgprss.optgprs.length !== 5 ?
                      <button className="subaddbutton">+</button>
                      : <button className='subaddbuttondisabled'>+</button>
                  }
                  {data.GetResponseSubscriber?.services?.optgprss?.optgprs?.map((item, id) => {
                    return (
                      <div className="rcont" key={id}>
                        <p>PROV</p>
                        <Switch 
                          checked={item.prov}
                          disabled={enable}
                        />
                        <p>CNTXID</p>
                        <input disabled={enable} value={item.cntxId}></input>
                        <img
                          className="deletebutton"
                          src='/Images/delete.png'
                          alt="Delete"
                          // onClick={() => handleDelete(index)}
                        />
              
                      </div>

                    );
                  })}
                </div>
          
              </div>
                <p>RROPTION</p>
                  <select disabled={enable}>
                    <option value={data.GetResponseSubscriber?.rroption}>{data.GetResponseSubscriber?.rroption}</option>
                  </select>
                  <p>SKEY: </p>
                  <input disabled={enable} value={data.GetResponseSubscriber?.skey}></input>
            </div>
          ))
        )}
      </div>
      <div className='allbtns'>
      {editEnable===true?
        <>
          <button onClick={enableEdit}>Edit</button>
          <button disabled={enable}>Update</button>
          <button onClick={enableCancel} disabled={enable}>Cancel</button>
          {enable===false?<button>Delete</button>:null}
        </>:null
      }
      </div>
      
    </div>
  );
}

export default SubmittedForm
