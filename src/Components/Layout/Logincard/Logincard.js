import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import classes from "./Logincard.module.css";
import Loginform from "../Loginform/Loginform";
import Logingoog from "../Logingoogle/Loginwithgoogle";
const Login = (props) => (
  <div>
    <div className={classes.Login}>
      <h1>Ordering Details</h1>
      <Card>
        <CardActionArea>
          <CardMedia src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" />
          <CardContent>
            <Typography variant="body2" color="inherit" component="p">
              Welocme to A2B ,Now you can order your food without any delay and
              with any others help or need, To get Menu please enter the details
              given below
            </Typography>

            <Loginform log={props.islog} />
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
    <div className={classes.google}>
      <Logingoog log={props.log} />
    </div>
  </div>
);

export default Login;
