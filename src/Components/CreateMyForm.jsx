import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { DropDown1, DropDown2, DropDown3, DropDown4, DropDown5, DropDown6, DropDown7, DropDown8 } from './DropDowns/DropDown'
import { Switch } from 'antd'

const CreateMyForm = () => {
  const [data, setData] = useState({
    GetResponseSubscriber: {
      imsi: null,
      msisdn: null,
      hlrsn: null,
      cardType: "",
      nam: "",
      services: {
        clip: {
          prov: "" //Dropdown
        },
        smsmt: "",
        optgprss: {
          optgprs: [
            { prov: false, cntxld: null },
          ]
        },
        odboc: {
          odboctyps: ""
        },
        odbroam: {
          odbroamtyp: ""
        },
        category: {
          categorytyp: ""
        },
        eps: {
          prov: false
        },
        smdp: ""
      },
      rroption: "",
      skey: ""
    }
  })

  const handleChange_1 = (event, index, key) => {
    const { value } = event.target;

    setData(prevData => ({
      ...prevData,
      GetResponseSubscriber: {
        ...prevData.GetResponseSubscriber,
        services: {
          ...prevData.GetResponseSubscriber.services,
          optgprss: {
            ...prevData.GetResponseSubscriber.services.optgprss,
            optgprs: prevData.GetResponseSubscriber.services.optgprss.optgprs.map((item, i) => {
              if (i === index) {
                const parsedValue = parseInt(value);
                const isValid = !isNaN(parsedValue) && parsedValue.toString().length === 1;
                return {
                  ...item,
                  [key]: isValid ? parsedValue : ''
                };
              }
              return item;
            })
          }
        }
      }
    }));
  };

  const [error, setError] = useState(false)
  const [isSubmitted, setisSubmitted] = useState(false)
  const [personalError, setPersonalerror] = useState(false)

  const handleSwitch = (index) => {
    setData(prevData => {
      const updatedOptgprs = prevData.GetResponseSubscriber.services.optgprss.optgprs.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            prov: !item.prov,
          };
        }
        return item;
      });

      return {
        ...prevData,
        GetResponseSubscriber: {
          ...prevData.GetResponseSubscriber,
          services: {
            ...prevData.GetResponseSubscriber.services,
            optgprss: {
              ...prevData.GetResponseSubscriber.services.optgprss,
              optgprs: updatedOptgprs,
            },
          },
        }
      };
    });
  };

  const handleSwitch_2 = () => {
    setData(prevData => ({
      ...prevData,
      GetResponseSubscriber: {
        ...prevData.GetResponseSubscriber,
        services: {
          ...prevData.GetResponseSubscriber.services,
          eps: {
            prov: !prevData.GetResponseSubscriber.services.eps.prov
          }
        }
      }
    }));
  };

  const handleAdd = () => {
    setData(prevData => ({
      ...prevData,
      GetResponseSubscriber: {
        ...prevData.GetResponseSubscriber,
        services: {
          ...prevData.GetResponseSubscriber.services,
          optgprss: {
            ...prevData.GetResponseSubscriber.services.optgprss,
            optgprs: [
              ...prevData.GetResponseSubscriber.services.optgprss.optgprs,
              { prov: false, cntxld: null },
            ]
          }
        }
      }
    }));
  };

  const handleDelete = (index) => {
    setData(prevData => {
      const updatedOptgprs = [...prevData.GetResponseSubscriber.services.optgprss.optgprs];
      updatedOptgprs.splice(index, 1);

      return {
        ...prevData,
        GetResponseSubscriber: {
          ...prevData.GetResponseSubscriber,
          services: {
            ...prevData.GetResponseSubscriber.services,
            optgprss: {
              ...prevData.GetResponseSubscriber.services.optgprss,
              optgprs: updatedOptgprs
            }
          }
        }
      };
    });
  };

  const handleChange = (parentKey, childKey, grandChildKey, value) => {
    if (parentKey === 'hlrsn' || parentKey === 'imsi' || parentKey === 'msisdn' || parentKey === 'skey') {
      setData(prevData => ({
        ...prevData,
        GetResponseSubscriber: {
          ...prevData.GetResponseSubscriber,
          [parentKey]: value ? parseInt(value) : null
        }
      }));
    } else {
      setData(prevData => ({
        ...prevData,
        GetResponseSubscriber: {
          ...prevData.GetResponseSubscriber,
          [parentKey]: childKey
            ? {
              ...prevData.GetResponseSubscriber[parentKey],
              [childKey]: grandChildKey
                ? {
                  ...prevData.GetResponseSubscriber[parentKey][childKey],
                  [grandChildKey]: value
                }
                : value
            }
            : value
        }
      }));
    }
  };

  const isOptgprsValid = data.GetResponseSubscriber.services.optgprss.optgprs.some(
    (item) =>
      !Number.isInteger(item.cntxld) ||
      item.cntxld.toString().length !== 1
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = data.GetResponseSubscriber;

    if (
      formData.imsi === null ||
      formData.msisdn === null ||
      formData.hlrsn === null ||
      formData.cardType.trim() === "" ||
      formData.nam.trim() === ""
    ) {
      setError(true);
      alert("Enter all required fields");
    } else if (
      !Number.isInteger(formData.imsi) ||
      formData.imsi.toString().length !== 14 ||
      !Number.isInteger(formData.msisdn) ||
      formData.msisdn.toString().length !== 10 ||
      !Number.isInteger(formData.hlrsn) ||
      formData.hlrsn.toString().length !== 1 ||
      !Number.isInteger(formData.skey) ||
      isOptgprsValid
    ) {
      setPersonalerror(true);
    } else {
      axios.post("/api/d76033a5d402462c841a9f5dd9465091/stu_1", formData)
        .then(res => console.log(res))
        .catch(error => console.log(error));
        
      setisSubmitted(true);
      console.log(data);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      // Reset the form fields
      setData({
        GetResponseSubscriber: {
          imsi: null,
          msisdn: null,
          hlrsn: null,
          cardType: "",
          nam: "",
          services: {
            clip: {
              prov: ""
            },
            smsmt: "", //text
            optgprss: {
              optgprs: [
                { prov: false, cntxld: '' },
              ]
            },
            odboc: {
              odboctyps: ""
            },
            odbroam: {
              odbroamtyp: ""
            },
            category: {
              categorytyp: ""
            },
            eps: {
              prov: false
            },
            smdp: ""
          },
          rroption: "",
          skey: null
        }
      });
    }
  }, [isSubmitted]);

  return (
    <>
      <div className='createMyForm'>
        <div className='firstrowform'>
          <p>IMSI</p>
          {personalError === false ?
            <input
              className='input imsi'
              name="imsi"
              value={data.GetResponseSubscriber.imsi === null ? "" : data.GetResponseSubscriber.imsi}
              placeholder='IMSI'
              onChange={e => handleChange('imsi', null, null, parseInt(e.target.value))}
            />
            : <label>*Numeric and length 14</label>
          }

          <p>MSISDN</p>
          {personalError === false ?
            <input
              className='input msisdn'
              name="msisdn"
              value={data.GetResponseSubscriber.msisdn === null ? "" : data.GetResponseSubscriber.msisdn}
              placeholder='MSISDN'
              onChange={e => handleChange('msisdn', null, null, parseInt(e.target.value))}
            />
            : <label>*Numeric and length 10</label>
          }

          <p>HLRSN</p>
          {personalError === false ?
            <input
              className='input hlrsn'
              name="hlrsn"
              value={data.GetResponseSubscriber.hlrsn === null ? "" : data.GetResponseSubscriber.hlrsn}
              placeholder='HLRSN'
              onChange={e => handleChange('hlrsn', null, null, parseInt(e.target.value))}
            />
            : <label>*Numeric and length 1</label>
          }

          <p>Cardtype</p>
          <DropDown1
            value1={data.GetResponseSubscriber.cardType}
            onChange1={e => { handleChange('cardType', null, null, e.target.value) }}
          />

          <p>Nam</p>
          <DropDown2
            value2={data.GetResponseSubscriber.nam}
            onChange2={e => { handleChange('nam', null, null, e.target.value) }}
          />
        </div>

        <p>Services</p>
        <div className='services'>
          <div className='leftservices'>
              <input
                className='input smsmt'
                value={data.GetResponseSubscriber.services.smsmt}
                placeholder='SMSMT'
                onChange={e => { handleChange('services', 'smsmt', null, e.target.value) }}
              />
              <p>CLIP</p>
              <DropDown3
                value3={data.GetResponseSubscriber.services.clip.prov}
                onChange3={e => { handleChange('services', 'clip', 'prov', e.target.value) }}
              />
              <p>ODBOC</p>
              <DropDown4
                value4={data.GetResponseSubscriber.services.odboc.odboctyps}
                onChange4={e => handleChange("services", "odboc", "odboctyps", e.target.value)}
              />

              <p>ODBROAM</p>
              <DropDown5
                value5={data.GetResponseSubscriber.services.odbroam.odbroamtyp}
                onChange5={e => handleChange("services", "odbroam", "odbroamtyp", e.target.value)}
              />

              <p>Category</p>
              <DropDown6
                value6={data.GetResponseSubscriber.services.category.categorytyp}
                onChange6={e => handleChange("services", "category", "categorytyp", e.target.value)}
              />

              <p>EPS</p>
              <div className="switch-container">
                <Switch
                  checked={data.GetResponseSubscriber.services.eps.prov}
                  onChange={handleSwitch_2}
                  style={{
                    backgroundColor: data.GetResponseSubscriber.services.eps.prov ? 'green' : 'white',
                  }}
                />
              </div>
              <p>SMDP</p>
              <DropDown8
                value8={data.GetResponseSubscriber.smdp}
                onChange8={e => handleChange("services", "smdp", null, e.target.value)}
              />
         </div>
         

        
          <div className='optgprs'>
            {data.GetResponseSubscriber.services.optgprss.optgprs.length !== 5 ?
              <button className="addbutton" onClick={handleAdd}>+</button>
              : <button className='addbuttondisabled'>+</button>
            }

            {data.GetResponseSubscriber.services.optgprss.optgprs.map((item, index) => (
              <div className="arrinpfield" key={index}>
                <p>PROV</p>
                <Switch
                  // className='epsswitch'
                  checked={item.prov}
                  onChange={() => handleSwitch(index)}
                  style={{backgroundColor:item.prov?"green":"lightgrey", marginTop:"5px", marginRight:"10px"}}
                />

                <p>CNTXLD</p>
                {personalError === false ?
                  <input
                    className='arrinp'
                    type="text"
                    value={item.cntxld === null ? "" : item.cntxld}
                    onChange={e => handleChange_1(e, index, 'cntxld')}
                  />
                  : <label>*Numeric and 1 digit only</label>
                }

                <img
                  className="deletebutton"
                  src='/Images/delete.png'
                  alt="Delete"
                  onClick={() => handleDelete(index)}
                />
              </div>
            ))}
          </div>
        </div>
        

        <p>RROPTION</p>
        <DropDown7
          value7={data.GetResponseSubscriber.rroption}
          onChange7={e => handleChange("rroption", null, null, e.target.value)}
        />

        {personalError === false ?
          <input
            className='input skey'
            name="skey"
            value={data.GetResponseSubscriber.skey === null ? "" : data.GetResponseSubscriber.skey}
            placeholder='SKEY'
            onChange={e => handleChange('skey', null, null, parseInt(e.target.value))}
          />
          : <label>*Numeric and max length 9</label>
        }

        {isSubmitted === true ? <p className='submitted'>Your data has been submitted</p> : <p className='notsubmitted'>Your data has not been submitted</p>}
      </div>

      <button className="submitbtn" onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default CreateMyForm
