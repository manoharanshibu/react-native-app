import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';

import { listRepos } from './reducers/reducers';

import {loadCustomerData} from './actions/actions';
import { AES } from 'crypto-js';

let jsonData;

class CustomerList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      jsonData: {"queueData":{"currentUserRole":"CONCIERGE","customerServed":null,"isActive":true,"isMyLastCustomer":false,"minutesToNextFree":28,"queue":{"advanceBookingsMinutes":0,"advanceBookingsWeeks":0,"advisorCannotChooseCustomer":false,"allowedToToggleCustomerDescriptionOption":false,"applyTicketNumber":false,"averageServeTimeMinutes":10,"bookingStart":10,"bookingTimings":"TIME","bufferSpace":1,"captureOrderNumber":false,"clearQueueOvernight":false,"colour":null,"conciergeAcceptReject":false,"customerDescriptionEnabled":false,"customerEmailRequired":false,"customerNameRequired":true,"customerNameRequiredKiosk":false,"customerPostcodeRequired":false,"customerQuestionEnabled":true,"customerSurnameRequired":false,"customerTimings":"DUE_TIME","customersToday":[{"bookedServer":null,"bookingEndTime":null,"bookingStartTime":null,"collectingServer":null,"currentPosition":1,"customer":{"bookingRef":"W","createdBy":{"displayName":"Code Test1","id":3617},"createdBySystem":null,"customerProfile":null,"emailAddress":"fraser@qudini.com","firstName":"","id":13704599,"isInMultipleQueue":null,"language":{"isoCode":"en","name":"English"},"merchantCustomer":{"id":6180736},"mobileNetwork":null,"mobileNumber":"+44","name":"Fraser","notes":"","numberCountryCode":"GB","orderNumber":null,"pagerNumber":null,"postCode":null,"surname":"","ticketNumber":"003","title":null,"unreadMessages":0},"expectedTime":"2019-01-19T20:05:10.516Z","hasAnsweredQuestions":false,"hasBeenSentReturnMessage":true,"id":13406507,"inStore":true,"isArrived":false,"isFixed":false,"joinedTime":"2017-01-18T17:09:29.000Z","lastSMSStatus":null,"originalExpectedTime":"2017-01-18T18:19:01.000Z","product":{"averageServeTimeMinutes":10,"colour":null,"id":22204,"name":"TestProduct1"},"productDescription":null,"timeArrivedInStore":null,"timeSentReturnMessage":"2017-08-10T17:06:43.000+01:00","waitTime":null,"waitTimePercentComplete":100},{"bookedServer":null,"bookingEndTime":null,"bookingStartTime":null,"collectingServer":null,"currentPosition":2,"customer":{"bookingRef":"W","createdBy":{"displayName":"Code Test1","id":3617},"createdBySystem":null,"customerProfile":null,"emailAddress":null,"firstName":"Alex","id":15596423,"isInMultipleQueue":null,"language":{"isoCode":"en","name":"English"},"merchantCustomer":{"id":7986420},"mobileNetwork":null,"mobileNumber":"+447007775525","name":"Alex Forbes-Reed","notes":"Testing","numberCountryCode":"GB","orderNumber":null,"pagerNumber":null,"postCode":null,"surname":" Forbes-Reed","ticketNumber":"001","title":null,"unreadMessages":0},"expectedTime":"2019-01-19T20:15:10.516Z","hasAnsweredQuestions":false,"hasBeenSentReturnMessage":false,"id":14883961,"inStore":true,"isArrived":false,"isFixed":false,"joinedTime":"2017-03-18T21:37:45.000Z","lastSMSStatus":null,"originalExpectedTime":"2017-03-18T22:57:50.000Z","product":{"averageServeTimeMinutes":10,"colour":null,"id":22204,"name":"TestProduct1"},"productDescription":null,"timeArrivedInStore":null,"timeSentReturnMessage":null,"waitTime":null,"waitTimePercentComplete":100},{"bookedServer":null,"bookingEndTime":null,"bookingStartTime":null,"collectingServer":null,"currentPosition":3,"customer":{"bookingRef":"W","createdBy":{"displayName":"Code Test1","id":3617},"createdBySystem":null,"customerProfile":null,"emailAddress":"codrinionescu@yahoo.com","firstName":"Steve","id":21693919,"isInMultipleQueue":null,"language":{"isoCode":"en","name":"English"},"merchantCustomer":{"id":13742226},"mobileNetwork":null,"mobileNumber":"+447775456404","name":"Steve","notes":"","numberCountryCode":"GB","orderNumber":null,"pagerNumber":null,"postCode":null,"surname":"","ticketNumber":"001","title":null,"unreadMessages":0},"expectedTime":"2019-01-19T20:25:10.516Z","hasAnsweredQuestions":false,"hasBeenSentReturnMessage":false,"id":19827521,"inStore":true,"isArrived":false,"isFixed":false,"joinedTime":"2017-09-27T12:47:06.000+01:00","lastSMSStatus":null,"originalExpectedTime":"2017-09-27T13:04:15.000+01:00","product":{"averageServeTimeMinutes":10,"colour":null,"id":22204,"name":"TestProduct1"},"productDescription":null,"timeArrivedInStore":null,"timeSentReturnMessage":null,"waitTime":null,"waitTimePercentComplete":100}],"finishReminder":false,"forceAdvisorToReportOutcome":false,"id":2037,"identifier":"gj9fs","isBookingAllowed":false,"isRestaurant":false,"isRetainTicketNumber":false,"isTabletCollectionEnabled":false,"isWalkinAllowed":true,"maxQueueLength":null,"minWaitTimeMinutes":null,"name":"CodeTest","numberWithDuplicatedNameKiosk":false,"outcomeReportingBooking":false,"outcomeReportingWalkin":false,"outcomesEnabled":false,"pagerRequired":false,"queueMessagesThresholdMinutes":0,"queueMessagesThresholdPosition":0,"rejectReasonAllowFreeText":false,"rejectReasons":[],"removeCustomerEnabled":false,"removeCustomerHours":null,"removeCustomerMins":null,"removeCustomerMinutes":null,"requestOutcomeAdvisors":false,"requestOutcomeConcierge":false,"requiredMpn":false,"secondsAcceptReject":60,"serverAcceptReject":false,"serverAllowedBreak":true,"serverCannotViewProducts":false,"servers":[{"displayName":"Code Test1","id":3617}],"servingServers":[],"showAllUncollected":false,"showAssignedCustomerPopup":false,"skipJoinMessage":false,"smsLanguagesEnabled":[],"smsRestricted":false,"snsTopicArn":"arn:aws:sns:eu-west-1:441363153104:QUEUE2037","staffBookingAvailability":0,"staffTimings":"BOTH","tagSelectionList":[],"tags":[],"ticketNumberTag":"","unreadMessagesForQueue":0,"venue":{"enableAllQueuesView":false,"id":1134,"isBookingEnabled":false,"isCustomerProfileEnabled":false,"isCustomerProfileIconEnabled":false,"isWalkinEnabled":true,"name":"StackTowers"}},"queueLength":3,"queueLengthBooked":0,"queueLengthNonBooked":3,"serversAvailable":[{"isAlwaysAvailable":true,"minutesUntilNextAvailability":0,"nextAvailableMinutes":30,"server":{"currentBreakReason":null,"displayName":"Code Test1","id":3617,"isOnBreak":false,"location":null}}],"staffAvailable":1,"staffTotal":1},"status":"ok"}
    }
  }

  componentDidMount() {


    
    // this.props.loadCustomerData();

    //this.props.listRepos('relferreira');
  }
  renderItem = ( item ) => {
    const email = item.customer.emailAddress;
    const emailHash = email ? AES.encrypt(email.toLowerCase(), '') : '';
    //alert(emailHash)
  return (

    <View style={styles.item}>
    <Image
        style={styles.mediumAvatar}
        source={{uri: "https://www.gravatar.com/avatar/" + emailHash}}
    />
      <Text>{item.customer.name}</Text>
      <Text>{item.customer.emailAddress}</Text>
    </View>
  )};
  render() {
    const { repos } = this.props;
    return ([
      <Text style={styles.title}> Customer Queue </Text>,
      this.state.jsonData ? this.state.jsonData.queueData.queue.customersToday.map ( 
        item => this.renderItem(item)
      ) : <Text>No customers in Queue</Text>
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
  }
});

const mapStateToProps = (state) => ({
  customerData: state.customerData
});
  
  const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);