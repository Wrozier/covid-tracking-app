import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import axios from "axios";

function App(){
  const [latest, setLatest] = useState("");

  useEffect(() => {
    axios
    .get("https://corona.lmao.ninja/all")
    .then(res => {
      console.log(res.data);

    })
    .catch(err => {
      console.log(err);
    });
  }, []);
  return (
    <div> 
      <CardDeck>
    <Card bg= "secondary" text={"white"} className="text-center" style={{ margin: "10px"}}>
      
      <Card.Body>
        <Card.Title>Cases</Card.Title>
        <Card.Text> {latest.cases} </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small>Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card bg="danger" text={"white"} className="text-center" style={{ margin: "10px"}}>
      
      <Card.Body>
        <Card.Title>Deaths</Card.Title>
        <Card.Text>{latest.cases}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      
      <Card.Body bg="success" text={"white"} className="text-center" style={{ margin: "10px"}}>
        <Card.Title>Recovered</Card.Title>
        <Card.Text>{latest.cases}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  </CardDeck>
    </div>
  );
}

export default App;
