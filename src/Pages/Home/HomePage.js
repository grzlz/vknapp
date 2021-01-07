import React, { Component } from "react";
import { Menu, Icon, Row, Col, Avatar, Divider, Timeline } from "antd";
import "./HomePage.css";

const hrStyle = {
  marginTop: "20px"
};

class HomePage extends Component {
  render() {
    return (
      <Col xl={24}>
        <Row justify="center">
          <Col xs={24} sm={24} md={14} lg={14} xl={14} offset={2}>
            <div className="landingPage">
              <h2>About Me</h2>
              <p>
                My name is Víctor Knapp and I'm a b*rg in física y todo lo que me pongan en frente. 
                Me gusta cotorrear con mis compas. Bienvenido a mi sitio, en donde encontrarás mi CV, 
                mi historial de publicaciones y noticias en general sobre mi vida. 
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <Divider orientation="left">
                <Icon type="schedule" style={{ fontSize: "20px" }} /> Recent
                News
              </Divider>
              <Timeline>
                <Timeline.Item
                  dot={<Icon type="rocket" style={{ fontSize: "16px" }} />}
                  color="blue"
                >
                  Traveling to America
                </Timeline.Item>
                <Timeline.Item
                  dot={<Icon type="book" style={{ fontSize: "16px" }} />}
                  color="green"
                >
                  Published paper
                </Timeline.Item>
                <Timeline.Item>Reviewing at conference</Timeline.Item>
              </Timeline>
              ,
            </div>
          </Col>

          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <center>
              <Avatar size={150} icon="user" />
              <h3 style={hrStyle}> Víctor Knapp-Pérez </h3>
              <hr width="40%" />
              <p>Ph. D. in physics student</p>
              <p>University of California at Irvine</p>
            </center>
          </Col>
        </Row>
      </Col>
    );
  }
}
export default HomePage;
