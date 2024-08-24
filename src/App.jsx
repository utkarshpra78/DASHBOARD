import { useEffect,useState } from "react"
import axios from "axios"
function App() { 
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3001/getUsers')
    .then(users=>setUsers(users.data))
    .catch(err=>console.log(err))
  },[])

  return (
    <>
    <div>
      {
        users.map(user=>{
          <div>{user.added}</div>
          
          
        })
      }
    </div>
    </>
  )
}

export default App
