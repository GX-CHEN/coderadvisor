import React from "react";
import { Row, Col, Card } from "antd";
import "./Listing.css";

class Listing extends React.Component {
  render() {
    return (
      <div className="listing-container">
        <h1 className="listing-header">Listing Page</h1>
        <div className="listing-cards-container">
          <Row>
            <Col xs={24} sm={12}>
              <Card className="card-container" title="Fundamental">
                <p>Test</p>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card className="card-container" title="JavaScript">
                <p>Test</p>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card className="card-container" title="React">
                <p>Test</p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Listing;
