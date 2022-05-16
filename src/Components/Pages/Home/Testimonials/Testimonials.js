import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Testimonial = () => {
  return (
    <div className="container mb-5">
      <h1 className="text-center text-dark fw-bolder my-5">Testimonial</h1>
      <div>
        <CardGroup>
          <Card className="m-2 p-3 border-0 text-center">
            <Card.Img
              variant="top" className="rounded-circle w-75 ms-5"
              src="https://studyinsweden.se/transformations/2018/10/Lauren_avatar_1539010933.jpg-1920x.jpg"
            />
            <Card.Body>
              <Card.Title>Kristin Ruiz</Card.Title>
              <h5 style={{ color: "#604193" }}>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> 4.8{" "}
              </h5>
              <Card.Text>
                Great products in cheap price? worried to find some? Well, SS-warehouse has all you need.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-2 p-3 border-0 text-center">
            <Card.Img
              variant="top" className="rounded-circle w-75 ms-5"
              src="https://media.nngroup.com/media/people/photos/20211213_Vegas-tanner.jpg.600x600_q75_autocrop_crop-smart_upscale.jpg"
            />
            <Card.Body>
              <Card.Title>Marshall Thompson</Card.Title>
              <h5 style={{ color: "#604193" }}>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> 4.3{" "}
              </h5>
              <Card.Text>
                Running my business with Stocking is my regular thing. Never had such an warehouse like SS-warehouse.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-2 p-3 border-0 text-center">
            <Card.Img
              variant="top" className="rounded-circle w-75 ms-5"
              src="https://cdn.shopify.com/s/files/1/0045/5104/9304/files/Shave-and-Beard-2020.jpg?v=1608649489"
            />
            <Card.Body>
              <Card.Title>Freda Paul</Card.Title>
              <h5 style={{ color: "#604193" }}>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> 4.5{" "}
              </h5>
              <Card.Text>
                Searching for products to store in cheap price. SS-Warehouse will be the best choice for you.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Testimonial;
