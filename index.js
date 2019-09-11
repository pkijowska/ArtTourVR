import React from 'react';
import {
  AppRegistry,
  asset,
  Image,
  NativeModules,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

const surfaceModule = NativeModules.surfaceModule;
const Linking = NativeModules.LinkingManager;

class InfoPanel extends React.Component {
  state = {
    img: {
      name: 'click.png',
      width: 100,
      height: 100

    }
  }


  transformDisplay(id){
  this._changeSurfaceDimensions(500, 400, id);
  this.setState({
    img: {
    name: `${id}.jpeg`,
    width: 500,
    height: 300,

    }
  });
}

resetPanel(id) {
  this._changeSurfaceDimensions(80, 80, id);
  this.setState({
    img: {
    name: `click.png`,
    width: 80,
    height: 80,
    }
  });
}


_changeSurfaceDimensions(width, height, id) {
surfaceModule.resizeSurface(width, height, id);
}

  render() {
    let { img } = this.state;

    return(
  <View style={styles.displayPanel}
    hitSlop={20}
    onEnter={() => this.transformDisplay(this.props.id)}
    onExit={() => this.resetPanel(this.props.id)}>
    <Image source={asset(`${img.name}`)} style={{width: img.width, height: img.height}} />
    <View style={styles.attractionBox}>
      <VrButton onClick={() => Linking.openURL(`https://pkijowska.github.io/courageworks/#/works/${this.props.site}`)}>
      <Text style={styles.attractionText}>
        {this.props.text}
      </Text>
     </VrButton>
    </View>
</View>

    )
  }
}

export default class ArtTour extends React.Component {
  render() {
    return (
      <View>
      <Image source={asset('museum.jpg')} style={{width: 500, height: 300}} />
      <View style={styles.attractionBox}>
          <VrButton onClick={() => surfaceModule.start()}>
            <Text style={styles.attractionText}> Indulge your senses </Text>
          </VrButton>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  displayPanel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    flexDirection: 'column',
  },
  attractionBox: {
    padding: 10,
    backgroundColor: '#F7F7F7',
    borderColor: '#C4002F',
    borderWidth: 1,
    width: 500
  },
  attractionText: {
    fontSize: 20,
    color: '#C4002F'
  },
});

AppRegistry.registerComponent('ArtTour', () => ArtTour);
AppRegistry.registerComponent('InfoPanel', () => InfoPanel);
