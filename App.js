import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';
import {Alert} from 'react-native';
import axios from "axios";
import Weather from './Weather';



const API_KEY = "f481260f949ad17473d90648ca0b483d";


export default class extends React.Component {

  state = {
    isLoading: true,
  };

  getWeather = async(latitude, longitude) => {
    const { 
      data: {
        main: {temp},
        weather,
        name
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false, 
      condition: weather[0].main, 
      location: name,
      temp,
    });
    
  }
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
 
      // get weather
      this.getWeather(latitude, longitude);
    } catch (error){
      Alert.alert("Permission Denied", "Can not find location");
    }
    
    
  };
  componentDidMount(){
    this.getLocation();
    
  }

  render(){
    console.log(this.state);
    const { isLoading, temp, condition, location } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} location={location} />;
  }

}
