import React from "react";
import { Card, Button } from "react-bootstrap";
import ReactLoading from "react-loading";

const UserList = ({user, isLoading}) => {
  return (
    <div className="user">
        <Card style={{ width: "18rem" }}>
        {isLoading ? (<ReactLoading type="spin" color="#0000FF"
        height={100} width={50} />):<></>
        }
          {(isLoading === false && user) && <>
            <Card.Img variant="top" src={user.avatar} />
          <Card.Body>
            <Card.Title>{user.first_name}</Card.Title>
            <Card.Text>{user.last_name}</Card.Text>
          </Card.Body>
          </>
          }
        

        </Card>
    </div>
  );
};

export default UserList;
