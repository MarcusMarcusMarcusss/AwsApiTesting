import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Amplify, API, graphqlOperation  }from 'aws-amplify'
import {queryIotCatalogsBySerialNumberUnixTimeStampIndex} from './src/graphql/queries';
import moment from 'moment';
import config from './src/aws-exports'
Amplify.configure(config);

export default class App extends React.Component {
  constructor(){
    super();
    this.state = { sensorData: [] };
  }

  async componentDidMount() {
    try {
      const apiData = await API.graphql(graphqlOperation(queryIotCatalogsBySerialNumberUnixTimeStampIndex))
      const sensorData = apiData.data
      console.log(apiData.data)
      //sensorData(data.body);
    const transformed = sensorData.queryIotCatalogsBySerialNumberUnixTimeStampIndex.items.map((d) => ({
      unixTimeStamp: +d.unixTimeStamp,
      deviceTemp: +d.deviceTemp,
      deviceMos: +d.deviceMos,
        }));
        console.log(transformed)
        console.log(sensorData)
        this.setState({ sensorData : transformed})
    } catch (err) {
      
      console.log('Hello')
      console.log('error: ', err);
      console.log('Hello')
    // console.log(data)
    }
  }


render(){
        // get variables: temp, hum, pot, time
        var temp = this.state.sensorData .map((val, i)=>{
          return val.deviceTemp
        })
        var time = this.state.sensorData .map((val, i)=>{
            return moment(val.unixTimeStamp).format()
        })
        var mos = this.state.sensorData .map((val, i)=>{
          return val.deviceMos
        })
  
    return (
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <Text>Yes</Text>
    <StatusBar style="auto" />
  </View>
);
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
});