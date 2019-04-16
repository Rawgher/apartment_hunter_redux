import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Image,
  LayoutAnimation,
  PanResponder,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View
} from "react-native";
import ApartmentOptions from "./ApartmentOptions";
import { defaultStyles } from "./styles";

const { width, height } = Dimensions.get("window");

const defaultHeight = height * 0.67;

export default class ApartmentModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    apartment: PropTypes.object,
    chosenDay: PropTypes.number,
    chosenTime: PropTypes.number,
    onChooseDay: PropTypes.func,
    onChooseTime: PropTypes.func,
    onBook: PropTypes.func,
    onClose: PropTypes.func
  };

  state = {
    position: new Animated.Value(this.props.isOpen ? 0 : height),
    opacity: new Animated.Value(0),
    height: defaultHeight,
    expanded: false,
    visible: this.props.isOpen
  };

  _previousHeight = 0;

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        const { dx, dy } = gestureState;
        if (dx !== 0 && dy === 0) {
          return true;
        }
        return false;
      },
      onPanResponderGrant: (evt, gestureState) => {
        this._previousHeight = this.state.height;
      },
      onPanResponderMove: (evt, gestureState) => {
        const { dy, vy } = gestureState;
        let newHeight = this._previousHeight - dy;

        LayoutAnimation.easeInEaseOut();

        if (newHeight > height - height / 5) {
          this.setState({ expanded: true });
        } else {
          this.setState({ expanded: false });
        }

        if (vy < -0.75) {
          this.setState({
            expanded: true,
            height: height
          });
        } else if (vy > 0.75) {
          this.props.onClose();
        } else if (newHeight < defaultHeight * 0.75) {
          this.props.onClose();
        } else if (newHeight > height) {
          this.setState({ height: height });
        } else {
          this.setState({ height: newHeight });
        }
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        const { dy } = gestureState;
        const newHeight = this._previousHeight - dy;

        if (newHeight < defaultHeight) {
          this.props.onClose();
        }

        this._previousHeight = this.state.height;
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        return true;
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isOpen && nextProps.isOpen) {
      this.animateOpen();
    } else if (this.props.isOpen && !nextProps.isOpen) {
      this.animateClose();
    }
  }

  animateOpen() {
    this.setState({ visible: true }, () => {
      Animated.parallel([
        Animated.timing(this.state.opacity, { toValue: 0.5 }),
        Animated.timing(this.state.position, { toValue: 0 })
      ]).start();
    });
  }

  animateClose() {
    Animated.parallel([
      Animated.timing(this.state.opacity, { toValue: 0 }),
      Animated.timing(this.state.position, { toValue: height })
    ]).start(() =>
      this.setState({
        height: defaultHeight,
        expanded: false,
        visible: false
      })
    );
  }

  getStyles = () => {
    return {
      imageContainer: this.state.expanded
        ? {
            width: width / 2
          }
        : {
            maxWidth: 110,
            marginRight: 10
          },
      apartmentContainer: this.state.expanded
        ? {
            flexDirection: "column",
            alignItems: "center"
          }
        : {
            flexDirection: "row"
          },
      apartmentInfo: this.state.expanded
        ? {
            flex: 0,
            alignItems: "center",
            paddingTop: 20
          }
        : {
            flex: 1,
            justifyContent: "center"
          },
      name: this.state.expanded
        ? {
            textAlign: "center"
          }
        : {}
    };
  };

  render() {
    const {
      apartment,
      chosenDay,
      chosenTime,
      onChooseDay,
      onChooseTime,
      onBook
    } = this.props;

    const { name, city, photo, days, times } = apartment || {};

    if (!this.state.visible) {
      return null;
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.props.onClose}>
          <Animated.View
            style={[styles.backdrop, { opacity: this.state.opacity }]}
          />
        </TouchableWithoutFeedback>
        <Animated.View
          style={[
            styles.modal,
            {
              height: this.state.height,

              transform: [
                { translateY: this.state.position },
                { translateX: 0 }
              ]
            }
          ]}
        >
          <View style={styles.content}>
            <View
              style={[
                styles.apartmentContainer,
                this.getStyles().apartmentContainer
              ]}
              {...this._panResponder.panHandlers}
            >
              <View
                style={[styles.imageContainer, this.getStyles().imageContainer]}
              >
                <Image source={{ uri: photo }} style={styles.image} />
              </View>

              <View
                style={[styles.apartmentInfo, this.getStyles().apartmentInfo]}
              >
                <Text style={[styles.name, this.getStyles().name]}>{name}</Text>
                <Text style={styles.city}>{city}</Text>
              </View>
            </View>

            <View>
              <Text style={styles.sectionHeader}>Day</Text>
              <ApartmentOptions
                values={days}
                chosen={chosenDay}
                onChoose={onChooseDay}
              />
              <Text style={styles.sectionHeader}>Available Appointments</Text>
              <ApartmentOptions
                values={times}
                chosen={chosenTime}
                onChoose={onChooseTime}
              />
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableHighlight
              underlayColor="#9575CD"
              style={styles.buttonContainer}
              onPress={onBook}
            >
              <Text style={styles.button}>Book my appointment</Text>
            </TouchableHighlight>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    backgroundColor: "transparent"
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
    opacity: 0.5
  },
  modal: {
    height: height / 2,
    backgroundColor: "white"
  },
  content: {
    flex: 1,
    margin: 20,
    marginBottom: 0
  },
  apartmentContainer: {
    flex: 1,
    marginBottom: 20
  },
  imageContainer: {
    flex: 1
  },
  image: {
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject
  },
  apartmentInfo: {
    backgroundColor: "transparent"
  },
  name: {
    ...defaultStyles.text,
    fontSize: 20
  },
  city: {
    ...defaultStyles.text,
    color: "#BBBBBB",
    fontSize: 14
  },
  sectionHeader: {
    ...defaultStyles.text,
    color: "#AAAAAA"
  },
  footer: {
    padding: 20
  },
  buttonContainer: {
    backgroundColor: "#673AB7",
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center"
  },
  button: {
    ...defaultStyles.text,
    color: "#FFFFFF",
    fontSize: 18
  }
});
