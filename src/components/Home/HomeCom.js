import React from "react";
import "../../styles/styles.scss";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Btn } from "../partials/Btn";

const HomeCom = () => {
  return (
    <div className="" id="home-div">
      <Container>
        <Row className="home-row-div">
          <Col lg={6} className="text-div">
            <h1 className="">The purpose of this website only for fetching data from Pexels API.</h1>
            <p> &#8226; The deafult of the FetchPexels page will render the curated photo.</p>
            <p> &#8226; You may try to press the search button in order to reach your search photo page.</p>
            <p>
              {" "}
              &#8226; Please Do not abuse the API. &nbsp; By default, the API is rate-limited to 200 requests per hour and 20,000 requests per month.{" "}
            </p>
            <Btn as={Link} to="/fetch">
              Starts
            </Btn>
          </Col>
          <Col lg={6} className="image-div">
            <div className="trypic"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeCom;
