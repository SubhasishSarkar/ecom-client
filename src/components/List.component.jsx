import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import ListDataService from "../services/list.service";
import "../styles/list.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.retrieveList = this.retrieveList.bind(this);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.retrieveList();
  }

  retrieveList() {
    ListDataService.getAll()
      .then((response) => {
        this.setState({
          list: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { list } = this.state;

    return (
      <div className="list_container">
        <div className="list_wrapper">
          {list.map((item) => {
            return (
              <div style={{ padding: "5px" }} key={item._id}>
                <Card style={{ width: "18rem" }} className="list_item_wrapper">
                  <Card.Img variant="top" src={item.img} alt={item.title} />
                  <Card.Body>
                    <Card.Title>Tite : {item.title}</Card.Title>
                    <Card.Text>Price : {item.price}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        this.props.history.push(`/details/${item._id}`);
                      }}
                    >
                      Details
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default List;
