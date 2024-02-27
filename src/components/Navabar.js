import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import "../styles/Navbar.css"

const Navabar = ({setSelectedCountry,setSelectedCategory}) => {

  const navigate = useNavigate();



  ////categories  options 

  const options1=[ 
    {value:"general" ,
     label: "General"
    },
    {value:"business" ,
     label: "Business"
    },
    {value:"entertainment" ,
     label: "Entertainment"
    },
    
    {value:"health" ,
     label: "Health"
    },
    {value:"science" ,
     label: "Science"
    },
    {value:"sports" ,
     label: "Sports"
    },
    {value:"technology" ,
     label: "Technology"
    },
  ]



  ////country options

  const options2=[
    {
      value:"in" ,
      label: "India"
   },
    {
      value:"us" ,
    label: "USA"
   },
    {
      value:"ch" ,
    label: "china"
   },
    {
      value:"ru" ,
    label: "Russia"
   },
  ]




 ////business entertainment general health science sports technology



  return (
  <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" >NewsApp</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li >
            <Link className="nav-link active" aria-current="page" to="/news">Go To</Link>
          </li>


          
           <ul >
              <select id="dropdown"   onChange={(e)=>setSelectedCategory(e.target.value)}>

                      {options1.map((option)=>(

                        <option key={option.value}  value={option.value}>{option.label}</option>

                      ))}

              </select>


           </ul>


           <ul>
            <select id='dropdown' onChange={(e)=>setSelectedCountry(e.target.value)}>
              {
                options2.map((option)=>(
                  <option key={option.value}  value={option.value} >{option.label}</option>
                ))
              }

            </select>
           </ul>



        





          
              
             




          
        </ul>
        
      </div>
    </div>
  </nav>
</div>

  )
}

export default Navabar
