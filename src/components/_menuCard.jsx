import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
function MenuCard({ itemData }) {

  return (
    <React.Fragment>
      <div>
        <Row>
          {itemData.length >= 1 ? (
            itemData.map((item, idx) => {
              return (
                <div key={idx}>
                  <Fade>
                    <Col sm="12">
                      <Card
                        className="d-flex flex-row mb-2 my-2 "
                        key={item.id}
                      >
                        <Card.Img
                          variant="top"
                          src={item.images}
                          style={{ width: "250px", height: "200px" }}
                          className="cardImage "
                        />
                        <Card.Body>
                          <Card.Title className="fw-bold p-3 my-3 d-flex justify-content-between">
                            <div style={{ color: "#f0941f" }}>{item.name}</div>
                            <div style={{ color: "#196774" }}>{item.price}</div>
                          </Card.Title>
                          <Card.Text
                            className="p-2 my-3"
                            style={{ color: "#90a19d" }}
                          >
                            {item.description}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Fade>
                </div>
              );
            })
          ) : (
            <h3 className="p-5 text-center -my-4 fs-bold ">Not Define Data!</h3>
          )}
        </Row>
      </div>
    </React.Fragment>
  );
}

export default MenuCard;
