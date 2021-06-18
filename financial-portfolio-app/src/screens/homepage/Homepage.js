import { React, PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid, Tooltip, Typography, CircularProgress, Link } from '@material-ui/core';
import PokemonCard from './Card';
import axios from 'axios';
import NavBar from '../../NavBar/NavBar';

const styles = theme => ({
  gridContainer: {
    maxWidth: '100%',
    paddingLeft: '2%',
    paddingTop: '2%',
    paddingBottom: '5%'
  },
  profitable: {
    color: '#80D878'
  },
  loss: {
    color: '#EC5858'
  }
});

class Homepage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cards: null
    };
  }

  fetchData = async () => {
    const result = await axios
      .get('https://vn6t1iuloj.execute-api.ap-southeast-1.amazonaws.com/appData', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        const { user, cards } = res.data;

        cards.sort((a, b) => {
          return b.price - a.price;
        });

        this.setState({
          user: { ...user },
          cards: [...cards]
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    this.fetchData();
  };

  render() {
    if (!this.state.cards || !this.state.user) {
      // return loading component

      return <CircularProgress style={{ marginTop: '45vh', marginBottom: '50vh' }} />;
    }

    const isProfitable = this.state.user.total_profit_loss >= 0;
    return (
      <Fragment>
        <NavBar isHome={true} scrollToContact={this.handleScrollToContact} />
        <Grid
          container
          direction='row'
          spacing={5}
          justify='space-evenly'
          alignItems='center'
          xs={12}
          className={this.props.classes.gridContainer}
        >
          <Grid xs={12} style={{ padding: '30px' }}>
            <Typography variant='h4' style={{ color: 'white' }}>
              <b>Your Collection</b>
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography variant='h6' style={{ color: 'beige' }}>
              Total Asset Value: ${this.state.user.total_asset_value.toFixed(2)}{' '}
            </Typography>

            <Typography variant='h6' style={{ color: 'beige' }}>
              Unrealised Gains / Losses:{' '}
              <Tooltip title='Unrealised Gains / Losses'>
                <Typography
                  display='inline'
                  variant='h6'
                  className={isProfitable ? this.props.classes.profitable : this.props.classes.loss}
                >
                  {isProfitable ? '+' : '-'}$
                  {Math.abs(this.state.user.total_profit_loss).toFixed(2)}
                </Typography>
              </Tooltip>
            </Typography>
          </Grid>
          <Grid xs={12} style={{ paddingBottom: '40px' }}>
            <Typography variant='h6' style={{ color: 'beige' }}>
              Total Number of Cards: {this.state.cards.length}
            </Typography>
          </Grid>

          {this.state.cards.map((card, index) => (
            <PokemonCard key={index} card={card} />
          ))}
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Homepage);
