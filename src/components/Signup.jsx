import { ShopContext } from "../context/ShopContext";
import { Component } from "react";
import LoginService from "../services/login.service";
import { Button, Form } from "react-bootstrap";
import "../styles/list.css";

class Signup extends Component {
  static contextType = ShopContext;
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      isAdmin: "false",
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onSignup = this.onSignup.bind(this);
  }

  onSignup() {
    LoginService.signUp({ ...this.state })
      .then((response) => {
        this.context.setUser(response.data);
        console.log(response.data);
        this.props.history.push("/login");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="list_container">
        <div className="list_wrapper">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter username"
                value={this.state.username}
                onChange={this.onInputchange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Password"
                value={this.state.password}
                onChange={this.onInputchange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                value={this.state.email}
                onChange={this.onInputchange}
              />
            </Form.Group>
            <Button variant="primary" onClick={this.onSignup}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Signup;
