import React, { useState, useEffect } from 'react';

const TrainingCard = () => {
  const [trainingsArray, setTrainingsArray] = useState([]); 

  useEffect( () => {
    fetch("http://localhost:3000/api/v1/trainings")
      .then((response) => response.json())
      .then((response) => {
        response?.map( (training) => {
          setTrainingsArray( previousArray => [training, ...previousArray] )
        })
      })
  }, []);

  return (
    <main>
      <div className="row mb-5">
        <div className="col-md-8 text-center">
          <h1>Voici la liste des formations</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          { trainingsArray.map( (training) => (
            <div className="col-md-4" key = {training.id}>
              <h4>{ training.title }</h4>
              <p>{training.description }</p>
            </div>
          ))}
        </div>
      </div>
    </main> 
  )
}

export default TrainingCard;
