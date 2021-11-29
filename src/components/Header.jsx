import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "../App.scss";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Ecom
        </Typography>
        <Button color="inherit" component={Link} to="/list">
          All Products
        </Button>
        <Button color="inherit" component={Link} to="/cart">
          Cart
        </Button>
        <Button color="inherit" component={Link} to="/orders">
          Orders
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Account
        </Button>
      </Toolbar>
    </AppBar>
  );
}
