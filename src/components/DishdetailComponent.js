import React, { Component } from "react";

import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    if (comments != null)
      return (
        <media>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
              {comments.map((comment) => {
                return (
                  <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>
                      --{comment.author},
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      }).format(new Date(Date.parse(comment.date)))}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </media>
      );
    else return <div></div>;
  }

  render() {
    if (this.props.dish != null)
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{this.props.dish.name}</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            {this.renderDish(this.props.dish)}
            {this.renderComments(this.props.comments)}
          </div>
        </div>
      );
    else return <div></div>;
  }
}
export default DishDetail;
