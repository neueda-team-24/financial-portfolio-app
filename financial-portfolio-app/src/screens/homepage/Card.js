import { React, PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography } from "@material-ui/core";
import Card from "./Card";
import Axios from "axios";

const styles = (theme) => ({
  profitable: {
    color: "green",
  },
  loss: {
    color: "red",
  },
});

class PokemonCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { image_url, name, cost, price } = this.props.card;
    const profit = price - cost;
    const isProfitable = profit >= 0;

    return (
      <Grid item xs={10} sm={6} md={4}>
        <img src={image_url} alt={"Pokemon Card of " + name} />
        <Typography variant="h6">
          <b>{name}</b>
        </Typography>
        <Typography variant={"subtitle1"}>
          ${price.toFixed(2)}{" "}
          <Typography
            display="inline"
            variant="subtitle1"
            className={
              isProfitable
                ? this.props.classes.profitable
                : this.props.classes.loss
            }
          >
            ({isProfitable ? "+" : "-"}${profit.toFixed(2)})
          </Typography>
        </Typography>
      </Grid>
    );
  }
}

export default withStyles(styles)(PokemonCard);
