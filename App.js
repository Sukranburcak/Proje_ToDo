import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput
}from 'react-native';
import MyButton from './button'; 

const items = [];

export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
  }
  state = {
    toDo : '',
  }
 
  addItem(){
   //console.warn('App::addItem', this.state.toDo)  

   items.push(this.state.toDo)

   this.setState({toDo: ''})
}
  renderItem(item){
    return(
      <View key={item} style= {{height: 50, backgroundColor: 'white', margin: 5, borderRadius: 16, justifyContent: 'center', alignItems: "center", borderColor: "mediumvioletred", borderWidth: 1.25}}>

        <Text style={{color: 'black', fontSize: 28}}>
          {item}
        </Text>

      </View> 
    )
  }
  render() {
    return (
      <View style={{flex: 1,backgroundColor:'mintcream', marginTop: Platform.OS == 'ios' ? 21 : 0}}>
        <View style={{height: 100, flexDirection: 'row', padding: 8}}>

          <View style={{flex: 4, marginRight: 8, justifyContent: "center"}}>
            <TextInput value={this.state.toDo} onChangeText={(v) => this.setState({toDo: v})} placeholder={"Gün içinde yapacaklarınızı not alın"} style={{height: 35, backgroundColor: "#f4f4f4", borderRadius: 12, paddingLeft: 10, borderColor: 'forestgreen', borderWidth: 2}}/>

          </View>
          <View style={{flex: 1}}>
            <MyButton onPress={this.addItem} text={'Ekle'} /> 

          </View>
        </View>
        <View style={{height: 0.8, backgroundColor: 'white', marginHorizontal: 10}} />

        <ScrollView>
          {
            items.map((item) => this.renderItem(item))
          }
        </ScrollView>
      </View>
    );
  }
}