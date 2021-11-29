import { Component } from "react";
import { Link } from "react-router-dom";

import { ListItem, Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import ListDataService from "../services/list.service";
import { ShopContext } from "../context/ShopContext";
import CartService from "../services/cart.service";
import "../App.scss";

class Details extends Component {
  static contextType = ShopContext;

  constructor(props) {
    super(props);
    this.retrieveData = this.retrieveData.bind(this);

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.retrieveData(this.props.match.params.id);
  }

  retrieveData(id) {
    ListDataService.get(id)
      .then((response) => {
        this.setState({
          data: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  ListItemLink() {
    return <ListItem button component="a" {...this.props} />;
  }
  async addToCart() {
    console.log(this.context);
    const { user, cart_id } = this.context;
    console.log(cart_id);
    if (user === "") {
      this.props.history.push("/login");
    }
    if (cart_id === "") {
      const data = {
        userId: user._id,
        products: [
          {
            productId: this.props.match.params.id,
            quantity: 1,
          },
        ],
      };

      CartService.createCart(user._id, data, user.accessToken)
        .then((response) => {
          this.context.setCartId(response.data._id);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      const product = {
        productId: this.props.match.params.id,
        quantity: 1,
      };
      console.log(product);
      CartService.addToCart(user._id, { ...product }, user.accessToken)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div className="back-button-wrapper">
          <Button
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon />}
            component={Link}
            to="/list"
          >
            Back
          </Button>
        </div>
        <div className="Deatils-header">
          <h1>Details</h1>
        </div>
        <div className="item-container">
          <div className="item-wrapper">
            <div className="image-container">
              <img alt="item" src={data.img} />
            </div>
            <div className="info-container">
              <strong>Title : {data.title}</strong>
              <p>Details : {data.desc}</p>
              <p>Price : {data.price}</p>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddShoppingCartIcon />}
                onClick={() => {
                  this.addToCart();
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
