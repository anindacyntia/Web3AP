import React from 'react';
import '../content/Kartu.css';
import Counter from '../content/Counter';
import { Col, Row  } from 'antd';

class  Kartu extends React.Component {
  constructor(probs){
    super(probs);
    this.state = {
      cardData: [
        {
          foto : require('../image/gambar1.jpg'),
          nama:"Slim Fries",
          web: "www.mcdonals.co.id",
          status : "Snack & Sides"
        },
        
        {
          foto : require('../image/gambar2.jpg'),
          nama: "Chessebomb",
          web: "pizzahut.co.id",
          status : "Pizza"
        },

        {
          foto : require('../image/gambar3.jpg'),
          nama : "Beef Teriyaki Ramen",
          web: "ichibansushi.co.id",
          status  : "Ichiban Sushi"
        },
      ]
    }
  }

  render(){    
    return (
      <div className="site-card-wrapper">        
        <Row gutter={16}>
          {
            this.state.cardData
            .map((data, index) => (
              <Col key={index} span={8}>                  
                <Counter nama={data.nama} status={data.status} foto={data.foto} web={data.web} />
              </Col>
            ))
          }
        </Row>
      </div>
    );
  }
}

export default Kartu;