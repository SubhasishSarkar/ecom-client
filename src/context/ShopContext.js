import React, { createContext, Component } from "react";

export const ShopContext = createContext();

class ShopContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      cart_id: "",
    };
  }

  setUser = (data) => {
    this.setState({ user: data });
  };
  setCartId = (id) => {
    this.setState({ cart_id: id });
  };
  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          setUser: this.setUser,
          setCartId: this.setCartId,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

export default ShopContextProvider;
