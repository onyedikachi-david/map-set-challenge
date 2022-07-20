import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <>
        <h2>Create a token that will be distributed to Whitelisted addresses</h2>
        {content}
      </>
    );
  }
}

const defaultTokenName = "WhiteMoney";
const defaultSymbol = "WTM";


exports.SetOpts = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenName: defaultTokenName,
      tokenSymbol: defaultSymbol,
    };

    // https://www.geeksforgeeks.org/
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // https://www.geeksforgeeks.org/
  // Stores all the values of the
  // input field in state using a single method
  // handleChanges of all the input field using
  // an ES6 javascript feature computed property names
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  // https://www.geeksforgeeks.org/
  // Form submitting logic, prevent default page refresh
  handleSubmit(event) {
    event.preventDefault();
    console.info('Wrapper state on submit!', this.state);
    this.props.parent.deploy(this.state);
  }

  render() {
    return (
      <>
        <br />
        <br />
        <div class="form-style-5">
        <form onSubmit={this.handleSubmit}>
        <fieldset>
          <b>Token name: </b>
          <input
            name='tokenName'
            onChange={this.handleChange}
            placeholder={defaultTokenName}
            type='text'
            value={this.state.tokenName || defaultTokenName}
          />
          {/* <br /> */}
          {/* <br /> */}
          <b>Token Symbol: </b>
          <input
            name='tokenSymbol'
            onChange={this.handleChange}
            placeholder={defaultSymbol}
            type='text'
            value={this.state.tokenSymbol || defaultSymbol}
          />
          {/* <br /> */}
          {/* <br /> */}
          {/* <b>Contribution Amount: </b>
          <input
            name='contributionAmt'
            onChange={this.handleChange}
            placeholder={defaultContributionAmt}
            type='number'
            value={this.state.contributionAmt || defaultContributionAmt}
          /> */}
          {/* <br />
          <br /> */}
          {/* <b>Penalty Amount: </b>
          <input
            name='penaltyAmt'
            onChange={this.handleChange}
            placeholder={defaultPenaltyAmt}
            type='number'
            value={this.state.penaltyAmt || defaultPenaltyAmt}
          /> */}
          {/* <br />
          <br /> */}
          {/* <b>Duration: </b>
          <input
            name='duration'
            onChange={this.handleChange}
            placeholder={defaultDuration}
            type='number'
            value={this.state.duration || defaultDuration}
          /> */}
          {/* <br />
          <br /> */}
          {/* <b>Maximum number of Users: </b>
          <input
            name='maxUsers'
            onChange={this.handleChange}
            placeholder={defaultMaxUsers}
            type='number'
            value={this.state.maxUsers || defaultMaxUsers}
          /> */}
          {/* <br />
          <br /> */}
          </fieldset>
          <input
            // className='Deployer SmallButton'
            type='submit'
          value={"Create token!"}/>
        </form>
        </div>
      </>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        <button className="btn" onClick={() => parent.deploy()}
        >Create Whitelist Dapp Token</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Creating Dapp... 
        please sign the transactions to deploy the contract and fund it with Token.</div>
    );
  }
}

exports.Deployed = class extends React.Component {
  getApplicationId() {
    const {ctcInfoStr, tokenMeta} = this.props;
    localStorage.setItem('ApplicationID', ctcInfoStr.toString());
    console.log(tokenMeta)
    return ctcInfoStr.toString();
  }

  render() {
    const {connector, tokenMeta} = this.props;
    const thing = connector === 'ALGO' ? 'Application ID' : 'contract address';
    return (
      <React.Fragment>
        <main>Staking Pool created!</main>
        <p>The {thing} is</p>
        <b>{this.getApplicationId()}</b>
        <p>Token Meta Data: {JSON.stringify(tokenMeta)}</p>
      </React.Fragment>
    );
  }
}

exports.Done  = class extends React.Component {
  render() {
    return <>The contract has run to completion</>;
  }
}

export default exports;
