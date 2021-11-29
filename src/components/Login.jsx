import { ShopContext } from "../context/ShopContext";
import { Component } from "react";
import LoginService from "../services/login.service";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/list.css";
class Login extends Component {
  static contextType = ShopContext;
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      islogged: false,
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    const islogged = this.context.user !== "" ? true : false;
    this.setState({ ...this.state, islogged: islogged });
  }

  onLogin() {
    LoginService.logIn({
      username: this.state.username,
      password: this.state.password,
    })
      .then((response) => {
        this.context.setUser(response.data);
        this.setState({ ...this.state, islogged: true, error: "" });
        console.log(response.data);
      })
      .catch((e) => {
        this.setState({
          ...this.state,
          islogged: false,
          error: "Invalid Credential",
        });
        console.log(e);
      });
  }

  logOut() {
    this.context.setUser({});
    this.setState({ username: "", password: "", error: "", islogged: false });
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const user = this.context.user;
    return (
      <div className="list_container">
        <div className="list_wrapper">
          {this.state.islogged ? (
            <>
              <div style={{ width: "100%", "text-align": "center" }}>
                <h1>Logged In As : {user.username}</h1>
              </div>
              <div>
                <Button
                  variant="primary"
                  color="secondary"
                  onClick={this.logOut}
                >
                  LogOut
                </Button>
              </div>
            </>
          ) : (
            <>
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
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onInputchange}
                  />
                </Form.Group>
                <div>
                  {this.state.error !== "" && (
                    <div style={{ color: "red" }}>{this.state.error}</div>
                  )}
                </div>
                <Button variant="primary" onClick={this.onLogin}>
                  Submit
                </Button>
                <div style={{ "text-align": "center" }}>
                  <Link to="/signup">
                    <Button variant="primary">SignUp</Button>
                  </Link>
                </div>
              </Form>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Login;
