import React from 'react';
import Card from 'react-bootstrap/Card';
import tretoria from'../images/tretoria.jpg'
import nommos from '../images/Nommos.jpg'
import riad from '../images/riadzitoun.jpg'
import nouba from '../images/nuba.jpg'
import Header from './Header';
import { Navbar } from 'react-bootstrap';

function Acceuil() {
  return (
    
    <section className="section">
      <Header></Header>
      <Navbar></Navbar>
      <Card className="my-4 mx-auto shadow" style={{ width: '40rem', textAlign: 'left' }}>
        <Card.Img className="mx-auto mt-2 " src={tretoria} style={{ width: 70, height: 70 }} />
        <Card.Body>
          <Card.Title>Tretoria restaurents</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Marrakech gueliz </Card.Subtitle>
          <Card.Text>N° 345
          </Card.Text>

        </Card.Body>
      </Card>

      <Card className="my-4 mx-auto shadow" style={{ width: '40rem', textAlign: 'left' }}>
        <Card.Img className="mx-auto mt-2 " src={nommos} style={{ width: 70, height: 70 }} />
        <Card.Body>
          <Card.Title>Nommos votre restaurant preferer </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Guemassa Marrakech </Card.Subtitle>
          <Card.Text>N°3456</Card.Text>
          <Card.Text>052436890</Card.Text>

        </Card.Body>
      </Card>
      <Card className="my-4 mx-auto shadow" style={{ width: '40rem', textAlign: 'left' }}>
        <Card.Img className="mx-auto mt-2 " src={riad} style={{ width: 70, height: 70 }} />
        <Card.Body>
          <Card.Title>Riad zitoun</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Medinna marrakech </Card.Subtitle>
          <Card.Text>n°24</Card.Text>
          <Card.Text>0524361105</Card.Text>
          

        </Card.Body>
      </Card>
      <Card className="my-4 mx-auto shadow" style={{ width: '40rem', textAlign: 'left' }}>
        <Card.Img className="mx-auto mt-2 " src={nouba} style={{ width: 70, height: 70 }} />
        <Card.Body>
          <Card.Title>Nubba good restau</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Targa marrakech</Card.Subtitle>
          <Card.Text>n°456 </Card.Text>
          <Card.Text>0567789900</Card.Text>
          

        </Card.Body>
      </Card>
    </section>
  );
}

export default Acceuil;
