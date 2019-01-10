import React from 'react'
import {Meteor} from "meteor/meteor";

import PrivateHeader from "./PrivateHeader";

export default class Dashboard extends React.Component {
  componentDidMount() {
    if (!Meteor.userId()) {
      this.props.history.replace('/');
    }
  }

  render() {
    return (
      <div>
        <PrivateHeader title="Dashboard"/>
        <div className="page-content">
          <p>Dashboard Page Content</p>
        </div>
      </div>
    )
  }
}