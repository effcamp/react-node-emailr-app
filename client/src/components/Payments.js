import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import * as actions from '../actions';

export class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <Button bsSize="small" bsStyle="danger">
          Add Credits
        </Button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
