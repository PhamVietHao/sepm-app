import React from 'react'
import RMITlogo from '../../components/images/RMITlogo.png';
import './rmitbuildings.css'
function Rmitbuildings() {
  return (  
      <div className='rise__rmitbuildings section__padding'>
        <div className='rise__rmitbuildings-content'>
            <h1>RMIT SGS CAMPUS</h1>
            <hr/>
                 
            <p>The Saigon South campus of RMIT university consists of 5 main buildings: Beanland Building, Academic Building 2, Building 8, Residential Building - Building 9 and Recreation and Events Complex - Building 10. In addition, it also has parking lots and a huge sports field. In detail, Beanland Building and Academic Building 2 have 5 floors, Building 8 and Building 9 have 6 floors and Building 10 has 2 levels. In each level of each building, there are many rooms used for various purposes such as classrooms, laboratories, library, office, etc. </p>                  
             
        </div>
        <div className='rise__rmitbuildings-image'>
            <img src = {RMITlogo} />
        </div>
      </div>
  )
}

export default Rmitbuildings