import _map from 'lodash/map';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';


class EmployeeList extends Component {

  componentWillMount() {
    this.props.employeesFetch();
  }

  keyExtractor = (item) => item.uid;

  renderItem = ({ item }) => (
    <ListItem employee={item} />
  );

  render() {
    console.log(this.props);
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
