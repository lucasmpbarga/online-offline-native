import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, NetInfo, Image } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isShowingText: 'null',
      textStyle: null,
      renderImage: false,
    };
  }

  getNetInfo() {
    NetInfo.getConnectionInfo().then((connectionInfo) => {
      if (connectionInfo.type != 'none') {
        this.setState({
          isShowingText: 'Online',
          textStyle: styles.onLine,
          renderImage: true,
        })
      } else {
        this.setState({
          isShowingText: 'Offline',
          textStyle: styles.offLine,
          renderImage: false,
        })        
      }
    });
  }

  renderImage() {
    if (this.state.renderImage) {
      return <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
      />
    }
    else {
      return <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
      />
    }
  }

  render() {
    this.getNetInfo();
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={this.state.textStyle}>{this.state.isShowingText}</Text>
        {this.renderImage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  offLine: {
    fontSize: 50,
    color: 'red'
  },
  onLine: {
    fontSize: 50,
    color: 'green'
  },
});
