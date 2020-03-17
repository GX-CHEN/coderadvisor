import React from "react";
import { Row, Col, Card } from "antd";
import "./Listing.css";

class Listing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="listing-header">Listing Page</h1>
        <div className="listing-container">
          <Row>
            <Col xs={24} sm={12}><Card></Card></Col>
            <Col xs={24} sm={12}><Card></Card></Col>
            <Col xs={24} sm={12}><Card></Card></Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Listing;
