import React from "react";
import { Col, Row } from "react-bootstrap";

const Category = ({ filtration, categorization }) => {
  const onfilter = (cat) => {
    filtration(cat);
  };
  return (
    <Row className="my-5 p-3">
      <Col className="d-flex justify-content-center">
      {categorization.length >= 1? (
        categorization.map((cat) => {
          return <button key={cat}  onClick={() => onfilter(cat)} className=" btn-cat">{cat}</button>;
        })
      ) : null}
      </Col>
    </Row>
  );
};

export default Category;
