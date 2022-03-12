import './App.css';
import Pages from './components/Pages';
import UserList from './components/UserList';
import {useSelector, useDispatch} from "react-redux"
import {bindActionCreators} from "redux"
import {actionCreators} from "./state/index"
import { useEffect, useState } from 'react';
import { getSingleUser, getUsersAPI } from './services/userService';
import { getUser } from './state/action-creator';
import { Card, Button } from "react-bootstrap";


function App() {

  const [user, setUser] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getUser())
  },[])

  async function changeUser(id){
    setIsLoading(true)
    var res = await getSingleUser(id)
    setUser(res)
    setIsLoading(false)
  }

  return (
    <div className="App">
      {!user && <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Select any user from the number</Card.Title>
        </Card.Body>
      </Card>}
     {user && <UserList user={user} isLoading={isLoading}/>}
     {state.users.map((item,index)=> <Pages key={item.id} user={item} index={index} changeUser={changeUser}/>)}
    </div>
  );
}

export default App;
