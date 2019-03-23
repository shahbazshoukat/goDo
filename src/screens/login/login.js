import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Text, Button, Icon, Content } from "native-base";
import { priColor } from "./../../../app.json";
import { secColor } from "./../../../app.json";
class Login extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  loginSubmitHandler = () => {
    this.props.navigation.navigate("Home");
  };
  render() {
    return (
      <Content>
        <View style={styles.container}>
          <View style={styles.btnContainer}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon
                style={styles.backIcon}
                name="keyboard-arrow-left"
                type="MaterialIcons"
              />
            </Button>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.loginText}>Login</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter Phone Number"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Enter Password" />
            </View>
            <View style={styles.loginContainer}>
              <Button style={styles.btnLogin} onPress={this.loginSubmitHandler}>
                <Text style={{ color: "white" }}>Login</Text>
              </Button>
            </View>
          </View>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5
  },
  backIcon: {
    color: "black",
    fontSize: 50
  },
  textContainer: {
    paddingLeft: 20
  },
  loginText: {
    fontSize: 30
  },
  formContainer: {
    padding: "10%"
  },
  inputContainer: {
    borderColor: priColor,
    borderBottomWidth: 1,
    marginTop: "5%"
  },
  loginContainer: {
    width: "100%",
    marginTop: "15%"
  },
  btnLogin: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: priColor,
    borderColor: priColor,
    borderWidth: 1,
    borderRadius: 5
  }
});

export default Login;
