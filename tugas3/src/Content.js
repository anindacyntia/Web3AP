import React from 'react';
import './Content.css';
import { Card, Col, Row } from 'antd';

const cardData =[
  {
    image : require('../src/assets/anin.jpg'),
    nama:"Aninda Cyntia",
    job : "System Analyst"
  },
  {
    image : require('../src/assets/sabila.jpg'),
    nama: "Sabila Aedi",
    job : "Frontend Developer"
  },
  {
    image : require('../src/assets/rahmi.jpg'),
    nama : "Rahmi Aulia",
    job  : "Programmer"
  },
  {
    image : require('../src/assets/shenia.PNG'),
    nama : "Shenia Septiyani",
    job  : "Dokter Umum"
  }
]
class Content extends React.Component {
  render(){
    return (
      <div className="site-card-wrapper">
        <Row gutter={[16,16]}>
          {cardData.map(data =>
        <Col span={8}>

        <Card className="card-layout" bordered={false} cover={<img src={data.image}/>} hoverable>
              <h1> {data.nama}</h1>  
              <p> {data.job}</p>
            </Card>
            
        </Col>
          )}
        </Row>
      </div>
    );
  }
}

export default Content;
