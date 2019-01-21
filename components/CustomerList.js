import React, { Component, PureComponent } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterCustomers, loadCustomerData } from '../actions/actions';
// import { CachedImage } from 'react-native-cached-image';


// import {loadCustomerData} from '../actions/actions';
import { AES } from 'crypto-js';

class CustomerList extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadCustomerData();
  }

  searchCustomer = (text) => {
    this.props.filterCustomers(text)
  }

  getCustomerData = () => {
    if(this.props.jsonData){
      try{
        const customers = this.props.jsonData.queueData.queue.customersToday.sort( (item1, item2) => {
          return item1.expectedTime > item2.expectedTime
        })
        return customers.map ( 
          (item, index) => this.renderItem(item, index)
        );
      }catch (error) {
        return <Text>Some error occured. Please try after some time.</Text>
      }
    }else {
        return <Text>No customers in Queue</Text>;
    }
  }
  
  renderItem = ( item, index ) => {
    const email = item.customer.emailAddress;
    const emailHash = email ? AES.encrypt(email.toLowerCase(), '') : '';
    const dt = item.expectedTime.split(/\D/);
    const expectedTime = dt ? new Date(dt[0], dt[1]-1, dt[2], dt[3], dt[4], dt[5]) : '';

    return (
      <View key={index} style={styles.item}>
      <Image
          style={styles.mediumAvatar}
          source={{uri: "https://www.gravatar.com/avatar/" + emailHash}}
      />
        <Text>{item.customer.name}</Text>
        <Text>{item.customer.emailAddress}</Text>
        <Text>{expectedTime.toString()}</Text>
      </View>
  )};

  render() {
    return ([
      <Text key="title" style={styles.title}> Customer Queue </Text>,
      <TextInput className="inputText" placeholder="Search" onChangeText={ (text) => this.searchCustomer(text)} />,
      this.getCustomerData()
    ]);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  title: {
    margin: 0,
    fontSize: 22,
    textAlign: 'center'
  },
  mediumAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  inputText: {
      width: 200,
      margin: 20,
  }
});

const mapStateToProps = (state) => ({
  jsonData: state.jsonData
});
  
const mapDispatchToProps = (dispatch) => ({
  loadCustomerData: () => dispatch(loadCustomerData()),
  filterCustomers: (text) => dispatch(filterCustomers(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);