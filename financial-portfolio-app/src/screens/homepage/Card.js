import { React, PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, Tooltip } from "@material-ui/core";

const styles = (theme) => ({
  profitable: {
    color: "#80D878",
  },
  loss: {
    color: "#EC5858",
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
      <Grid item xs={10} sm={6} md={3}>
        <img src={image_url} alt={"Pokemon Card of " + name} />
        <Typography variant="h6" style={{ color: "beige" }}>
          <b>{name}</b>
        </Typography>
        <Tooltip title="Current Price (Profit / Loss)">
          <Typography variant={"subtitle1"} style={{ color: "beige" }}>
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
              ({isProfitable ? "+" : "-"}${Math.abs(profit).toFixed(2)})
            </Typography>
          </Typography>
        </Tooltip>
      </Grid>
    );
  }
}

export default withStyles(styles)(PokemonCard);
