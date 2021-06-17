import { React, PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography } from "@material-ui/core";
import PokemonCard from "./Card";
import Axios from "axios";

const styles = (theme) => ({
  gridContainer: {
    maxWidth: "100%",
    padding: "30px",
  },
  profitable: {
    color: "green",
  },
  loss: {
    color: "red",
  },
});

class Homepage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Riley",
        total_asset_value: 2152.28,
        total_profit_loss: 1252.28,
      },
      cards: [
        {
          name: "Charizard",
          cost: 100,
          image_url: "https://images.pokemontcg.io/base4/4.png",
          price: 673.48,
        },
        {
          name: "Articuno",
          cost: 100,
          image_url: "https://images.pokemontcg.io/base3/2.png",
          price: 64.99,
        },
        {
          name: "Pikachu",
          cost: 100,
          image_url: "https://images.pokemontcg.io/pop6/9.png",
          price: 69.98,
        },
        {
          name: "Mew V",
          cost: 100,
          image_url: "https://images.pokemontcg.io/swsh3/69.png",
          price: 19.9,
        },
        {
          name: "Mewtwo-EX",
          cost: 100,
          image_url: "https://images.pokemontcg.io/xy12/103.png",
          price: 199.99,
        },
        {
          name: "Shaymin LV.X",
          cost: 100,
          image_url: "https://images.pokemontcg.io/dpp/DP39.png",
          price: 100.95,
        },
        {
          name: "Machamp",
          cost: 100,
          image_url: "https://images.pokemontcg.io/xyp/XY13.png",
          price: 75,
        },
        {
          name: "Shining Tyranitar",
          cost: 100,
          image_url: "https://images.pokemontcg.io/neo4/113.png",
          price: 750,
        },
        {
          name: "Rocket's Suicune ex",
          cost: 100,
          image_url: "https://images.pokemontcg.io/ex7/105.png",
          price: 197.99,
        },
      ],
    };
  }

  //   fetchData = () => {
  //     Axios({
  //       method: "GET",
  //       headers: {
  //         "Access-Control-Allow-Headers": "*",
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Methods": "*",
  //       },
  //       url:
  //         "https://vn6t1iuloj.execute-api.ap-southeast-1.amazonaws.com/getCardData",
  //       data: {
  //         card_ids: [
  //           "base4-4",
  //           "base3-2",
  //           "pop6-9",
  //           "swsh3-69",
  //           "xy12-103",
  //           "dpp-DP39",
  //           "xyp-XY13",
  //           "neo4-113",
  //           "ex7-105",
  //         ],
  //       },
  //     })
  //       .then((res) => {
  //         const { data } = res.data;

  //         const cardsData = [];

  //         for (const card of data.cards) {
  //           cardsData.push(card);
  //         }

  //         const userObject = data.user;

  //         console.log(cardsData);

  //         this.setState({
  //           user: userObject,
  //           cards: cardsData,
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  componentDidMount = () => {
    // this.fetchData();
  };

  render() {
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
        <Grid
          container
          justify={"space-around"}
          alignItems={"baseline"}
          xs={12}
        >
          <Grid xs={4}>
            <Typography variant="h5" align="left">
              <b>Your Collection</b>
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Typography variant="h6" align="right">
              Total Asset Value: ${" "}
              {this.state.user.total_asset_value.toFixed(2)}{" "}
              <Typography
                display="inline"
                variant="h6"
                className={
                  isProfitable
                    ? this.props.classes.profitable
                    : this.props.classes.loss
                }
              >
                ({isProfitable ? "+" : "-"} ${" "}
                {this.state.user.total_profit_loss} )
              </Typography>
            </Typography>
          </Grid>
        </Grid>
        {this.state.cards.map((card, index) => (
          <PokemonCard key={index} card={card} />
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(Homepage);
