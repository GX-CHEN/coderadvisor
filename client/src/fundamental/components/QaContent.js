import React from "react";
import { Collapse, Divider } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import ReactMarkdown from "react-markdown";
import javaBasics from "../data/javaBasics";
import webDevBasics from "../data/webDevBasics";
import "./QaContent.css";

const { Panel } = Collapse;

class QaContent extends React.Component {
  render() {
    return (
      <div>
        <h2>Java Basics</h2>
        <Collapse
          bordered={false}
          defaultActiveKey={["0"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          className="site-collapse-custom-collapse"
        >
          {javaBasics.map((item, idx) => (
            <Panel
              header={<b>{item.q}</b>}
              key={idx}
              className="site-collapse-custom-panel"
              id={`java-${idx}`}
            >
              <div className="panel-answer-content">
                <ReactMarkdown source={item.a} />
              </div>
            </Panel>
          ))}
        </Collapse>
        <Divider />
        <h2>Web Dev Basics</h2>
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          className="site-collapse-custom-collapse"
        >
          {webDevBasics.map((item, idx) => (
            <Panel
              header={<b>{item.q}</b>}
              key={idx}
              className="site-collapse-custom-panel"
              id={`web-dev-${idx}`}
            >
              <div className="panel-answer-content">
                <ReactMarkdown source={item.a} />
              </div>
            </Panel>
          ))}
        </Collapse>
      </div>
    );
  }
}

export default QaContent;
