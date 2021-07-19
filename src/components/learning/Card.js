import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { addCart } from "../../redux/actions/order";

class Cards extends Component {
  handleMovieDetail = (id) => {
    // [1] = bisa digunakan untuk handling pagination,sort,search
    // this.props.history.push(`/learning/basic-movie-detail?movieId=${id}`);
    // [2] = jika dirasa datanya tidak mau ditampilkan di url
    // this.props.history.push(`/learning/basic-movie-detail`, { data: id });
    // [3] = bisa digunakan untuk detail product/data
    this.props.history.push(`/learning/basic-movie-detail/${id}`);
  };

  render() {
    // console.log(this.props);
    const { movie_id, movie_name, movie_category, movie_release_date } =
      this.props.data;
    const { handleUpdate, handleDelete, data } = this.props;
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
          />
          <Card.Body>
            <Card.Title>{movie_name}</Card.Title>
            <Card.Text>{movie_category}</Card.Text>
            <p>{movie_release_date}</p>
            <Button
              variant="secondary"
              onClick={() => this.handleMovieDetail(movie_id)}
            >
              Detail
            </Button>
            <Button variant="primary" onClick={() => handleUpdate(data)}>
              Update
            </Button>
            <Button variant="danger" onClick={() => handleDelete(movie_id)}>
              Delete
            </Button>
            <div className="d-grid gap-2 mt-2">
              <Button
                variant="primary"
                onClick={() =>
                  this.props.addCart({ movieId: movie_id, qty: 1 })
                }
              >
                Add To Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order,
});

const mapDispatchToProps = { addCart };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cards));
