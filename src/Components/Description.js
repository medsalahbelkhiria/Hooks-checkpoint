  
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import YTPlayer from "react-player";
import { Card, Button } from 'react-bootstrap'
import "./Description.css"

const Description = () => {
  const { description, video } = useParams();
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };
  console.log(video);
  return (

      <div className="container">
          <Card className="card-description">
              <Card.Body>
                     <YTPlayer url={`https://www.youtube.com/embed/${video}`} />
                    <Card.Title className="title">Movie description</Card.Title>
                    <Card.Text className="text">
                       {description}
                    </Card.Text>
                    <Button variant="danger" onClick={handleClick}>GO BACK</Button>
              </Card.Body>
          </Card>
      </div>
  );
};

export default Description;