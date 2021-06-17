import { React, PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Tooltip, Typography, CircularProgress } from "@material-ui/core";
import PokemonCard from "./Card";
import axios from "axios";

const styles = (theme) => ({
  gridContainer: {
    maxWidth: "100%",
    padding: "30px",
  },
  profitable: {
    color: "#80D878",
  },
  loss: {
    color: "#EC5858",
  },
});

class Homepage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cards: null,
    };
  }

  fetchData = async () => {
    const result = await axios
      .post(
        "https://vn6t1iuloj.execute-api.ap-southeast-1.amazonaws.com/appData",
        {
          card_ids: [
            "base4-4",
            "base3-2",
            "pop6-9",
            "swsh3-69",
            "xy12-103",
            "dpp-DP39",
            "xyp-XY13",
            "neo4-113",
            "ex7-105",
            "sm35-56",
            "ex4-89",
          ],
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const { user, cards } = res.data;
        this.setState({
          user: { ...user },
          cards: [...cards],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    this.fetchData();
  };

  render() {
    if (!this.state.cards || !this.state.user) {
      // return loading component

      return (
        <CircularProgress style={{ marginTop: "45vh", marginBottom: "50vh" }} />
      );
    }

    const isProfitable = this.state.user.total_profit_loss >= 0;
    return (
      <Grid
        container
        direction="row"
        spacing={7}
        justify="space-around"
        alignItems="center"
        className={this.props.classes.gridContainer}
      >
        <Grid xs={12} style={{ padding: "30px" }}>
          <Typography variant="h5" style={{ color: "beige" }}>
            <b>Your Collection</b>
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h6" style={{ color: "beige" }}>
            Total Asset Value: ${this.state.user.total_asset_value.toFixed(2)}{" "}
            <Tooltip title="Unrealised Gains / Losses">
              <Typography
                display="inline"
                variant="h6"
                className={
                  isProfitable
                    ? this.props.classes.profitable
                    : this.props.classes.loss
                }
              >
                ({isProfitable ? "+" : "-"}${this.state.user.total_profit_loss})
              </Typography>
            </Tooltip>
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h6" style={{ color: "beige" }}>
            Total Number of Cards: {this.state.cards.length}
          </Typography>
        </Grid>

        {this.state.cards.map((card, index) => (
          <PokemonCard key={index} card={card} />
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(Homepage);
