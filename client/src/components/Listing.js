import React from "react";
import { Row, Col, Card, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import text from "../data/text";
import "./Listing.css";

class Listing extends React.Component {
  render() {
    return (
      <div className="listing-container">
        <h1 className="listing-header">Listing Page</h1>
        <div className="listing-cards-container">
          <Row>
            <Col xs={24} lg={12}>
              <Card
                className="card-container"
                title="Fundamental"
                extra={
                  <a href="/fundamental">
                    <Button type="primary" shape="circle">
                      <RightOutlined />
                    </Button>
                  </a>
                }
              >
                <p>Fundamental Knowledge of Web Dev</p>
                <p>Focus on high-level concepts</p>
                <p>In a clear Question & Answer format</p>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card
                className="card-container"
                title="JavaScript"
                extra={
                  <a href="/javascript">
                    <Button type="primary" shape="circle">
                      <RightOutlined />
                    </Button>
                  </a>
                }
              >
                <p>Cover JS basics to advanced knowledge</p>
                <p>Contain both ES5 and ES6 syntax</p>
                <p>Small code snippets with concise comments</p>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card
                className="card-container"
                title="React (coming soon)"
                extra={
                  <Button type="primary" disabled shape="circle">
                    <RightOutlined />
                  </Button>
                }
              >
                <p>Introduction to React beginner knowledge</p>
                <p>Both concept-based and project-based sections</p>
                <p>Suggest for useful React UI tools/libs</p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Listing;
