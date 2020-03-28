import React from "react";
import { Row, Col, Card, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import detectBrowserLanguage from "detect-browser-language";
import "./Listing.css";
import { changeLanguage } from "./data/langaugeUtil";
import text from "./data/text";

class Listing extends React.Component {
  componentDidMount() {
    if (
      !localStorage.getItem("language") ||
      localStorage.getItem("language") === "null"
    ) {
      localStorage.setItem("language", detectBrowserLanguage());
    }
  }

  render() {
    return (
      <div className="listing-container">
        <h1 className="listing-header">{text.listingTitle}</h1>
        <div className="listing-cards-container">
          <Row>
            <Col xs={24} lg={12}>
              <Card
                className="card-container"
                title={text.fundamentalTitle}
                extra={
                  <a href="/fundamental">
                    <Button type="primary" shape="circle">
                      <RightOutlined />
                    </Button>
                  </a>
                }
              >
                <p>{text.fundamentalLine1}</p>
                <p>{text.fundamentalLine2}</p>
                <p>{text.fundamentalLine3}</p>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card
                className="card-container"
                title={text.jsTitle}
                extra={
                  <a href="/javascript">
                    <Button type="primary" shape="circle">
                      <RightOutlined />
                    </Button>
                  </a>
                }
              >
                <p>{text.jsLine1}</p>
                <p>{text.jsLine2}</p>
                <p>{text.jsLine3}</p>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card
                className="card-container"
                title={text.reactTitle}
                extra={
                  <Button type="primary" disabled shape="circle">
                    <RightOutlined />
                  </Button>
                }
              >
                <p>{text.reactLine1}</p>
                <p>{text.reactLine2}</p>
                <p>{text.reactLine3}</p>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card
                className="card-container"
                title={text.cssTitle}
                extra={
                  <Button type="primary" disabled shape="circle">
                    <RightOutlined />
                  </Button>
                }
              >
                <p>{text.cssLine1}</p>
                <p>{text.cssLine2}</p>
                <p>{text.cssLine3}</p>
              </Card>
            </Col>
          </Row>
        </div>
        <Button
          type="default"
          shape="circle"
          size="large"
          className="lang-button"
          onClick={changeLanguage}
        >
          {localStorage.getItem("language") === "zh-CN" ? "EN" : "中"}
        </Button>
      </div>
    );
  }
}

export default Listing;
