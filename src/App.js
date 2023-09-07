import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getuser } from './Feaures/Api';


const App = () => {

  const dispatch = useDispatch();

   const {users,loading} =useSelector(state=>state.user)   
   
   
   useEffect(()=>
   {
      dispatch(getuser())

   },[])

   if(loading)
   {
       return <h1>.</h1>
   }

  return (
    <div>
       {
        users.map((item,index)=>{
          return(<ul key={index.id}>
              <li>{item.title}</li>
          </ul>)
        })
       }
    </div>
  )
}

export default App