import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "../../styles/styles.scss";
import { Btn } from "../partials/Btn";

const DataDiv = ({ fetchDataStorage, loadMoreFn }) => {
  //   console.log(fetchData);
  return (
    <div className="data-div">
      {fetchDataStorage && (
        <>
          <Row xs={1} md={2} lg={3} className="data-row g-5">
            {fetchDataStorage.map((item) => (
              <Col>
                <Card className="card-div">
                  <Card.Img variant="top" src={item.src.tiny} alt={item.alt} />
                  <Card.ImgOverlay className="img-info">
                    <Card.Title className="mb-4">{item.alt}</Card.Title>
                    <Card.Text>
                      Photographer: &nbsp; <Card.Link href={item.photographer_url}>{item.photographer}</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      Pexels-url : <Card.Link href={item.url}>Here</Card.Link>
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))}
          </Row>
          <Btn loadMoreFn={loadMoreFn}>Load More</Btn>
        </>
      )}
    </div>
  );
};

export default DataDiv;
