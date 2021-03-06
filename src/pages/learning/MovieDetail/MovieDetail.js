import React, { Component } from "react";
import styles from "./MovieDetail.module.css";
import NavBar from "../../../components/learning/NavBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Seat from "../../../components/learning/Seat/Seat";
// import qs from "query-string";
import { connect } from "react-redux";

import { saveOrder } from "../../../redux/actions/order";

class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {
      selectedSeat: [],
      reservedSeat: ["A1", "A7", "A14"],
    };
  }

  componentDidMount() {
    // [1]
    // const urlParam = qs.parse(this.props.location.search);
    // console.log(urlParam.movieId);
    // [2]
    // console.log(this.props.location.state);
    // [3]
    // console.log(this.props.match.params);
    // untuk page movie detail ---------------------------
    // proses get data movie by id
    // proses get data premiere/bioskop by id
    // untuk page movie detail ---------------------------
  }

  bookingSeat = (seat) => {
    if (this.state.selectedSeat.includes(seat)) {
      const deleteSeat = this.state.selectedSeat.filter((el) => {
        return el !== seat;
      });
      this.setState({
        selectedSeat: deleteSeat,
      });
    } else {
      this.setState({
        selectedSeat: [...this.state.selectedSeat, seat],
      });
    }
    // console.log(seat);
  };

  booking = () => {
    // console.log("booking", this.state.selectedSeat);
    const setData = {
      movieId: this.props.match.params.id,
      orders: this.state.selectedSeat,
    };
    // console.log(setData);
    this.props.saveOrder(setData);
    // const booking = JSON.stringify(this.state.selectedSeat);
    // localStorage.setItem("bookingSeat", booking);
  };

  render() {
    const { reservedSeat, selectedSeat } = this.state;
    return (
      <>
        <Container className={styles.containerCenter}>
          <h1 className={`${styles.headingColor} mr-auto`}>
            MovieDetail Page !
          </h1>
          <NavBar />
          <hr />
          <Row>
            <Col md={8}>
              <Card>
                <Card.Body>
                  <Seat
                    seatAlphabet="A"
                    reserved={reservedSeat}
                    selected={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                  <Seat
                    seatAlphabet="B"
                    reserved={reservedSeat}
                    selected={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                  <Seat
                    seatAlphabet="C"
                    reserved={reservedSeat}
                    selected={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                  <Seat
                    seatAlphabet="D"
                    reserved={reservedSeat}
                    selected={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                  <Seat
                    seatAlphabet="E"
                    reserved={reservedSeat}
                    selected={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                  <Seat
                    seatAlphabet="F"
                    reserved={reservedSeat}
                    selected={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                  <Seat
                    seatAlphabet="G"
                    reserved={reservedSeat}
                    selected={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                </Card.Body>
                <Card.Body>
                  <Button
                    variant="primary"
                    size="md"
                    block
                    onClick={this.booking}
                  >
                    Booking
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order,
});

const mapDispatchToProps = { saveOrder };

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
