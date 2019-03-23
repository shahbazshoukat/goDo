import React, { Component } from "react";
import { priColor } from "./../../../app.json";
import { secColor } from "./../../../app.json";
import { StyleSheet } from "react-native";
import AddTask from "./../addTask/addTask";
import Profile from "./../profile/profile";
import Bookings from "./../bookings/bookings";
import Search from "./../search/search";
import MyHeader from "./../../components/myHeader/myHeader";
import {
  Container,
  Content,
  View,
  Text,
  Header,
  Item,
  Icon,
  Input,
  Footer,
  FooterTab,
  Button
} from "native-base";
class Home extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      search: true,
      bookings: false,
      add: false,
      profile: false
    };
  }

  searchTabHandler = () => {
    this.setState({
      search: true,
      bookings: false,
      add: false,
      profile: false
    });
  };

  bookingsTabHandler = () => {
    this.setState({
      search: false,
      bookings: true,
      add: false,
      profile: false
    });
  };

  addTabHandler = () => {
    this.setState({
      search: false,
      bookings: false,
      add: true,
      profile: false
    });
  };

  profileTabHandler = () => {
    this.setState({
      search: false,
      bookings: false,
      add: false,
      profile: true
    });
  };

  render() {
    let screen = null;
    let header = null;
    if (this.state.search) {
      screen = <Search navigation={this.props.navigation} />;
      header = (
        <Header
          span
          rounded
          searchBar
          noShadow
          style={styles.header}
          androidStatusBarColor="black"
        >
          <Item style={styles.searchBar}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
        </Header>
      );
    } else if (this.state.bookings) {
      screen = <Bookings navigation={this.props.navigation} />;
      header = <MyHeader title="Bookings" hasTabs={true} />;
    } else if (this.state.add) {
      screen = <AddTask navigation={this.props.navigation} />;
      header = <MyHeader title="Add a Task" />;
    } else if (this.state.profile) {
      screen = <Profile navigation={this.props.navigation} />;
      header = null;
    }
    return (
      <Container>
        {header}

        <Content
          contentContainerStyle={[
            { backgroundColor: "transparent" },
            this.state.search || this.state.add ? { flex: 1 } : null
          ]}
        >
          {screen}
        </Content>

        <Footer style={styles.footer}>
          <FooterTab style={styles.footerTabs}>
            <Button
              active={this.state.search}
              vertical
              style={styles.footerBtn}
              onPress={this.searchTabHandler}
            >
              <Icon
                active={this.state.search}
                style={
                  (styles.footerIcon,
                  { color: this.state.search ? priColor : "#eee" })
                }
                name="search1"
                type="AntDesign"
              />
              <Text
                active={this.state.search}
                style={
                  (styles.footerText,
                  { color: this.state.search ? priColor : "#eee" })
                }
              >
                Search
              </Text>
            </Button>

            <Button
              active={this.state.bookings}
              vertical
              style={styles.footerBtn}
              onPress={this.bookingsTabHandler}
            >
              <Icon
                active={this.state.bookings}
                style={
                  (styles.footerIcon,
                  { color: this.state.bookings ? priColor : "#eee" })
                }
                name="book-open"
                type="MaterialCommunityIcons"
              />
              <Text
                active={this.state.bookings}
                style={
                  (styles.footerText,
                  { color: this.state.bookings ? priColor : "#eee" })
                }
              >
                bookings
              </Text>
            </Button>

            <Button
              active={this.state.add}
              vertical
              style={styles.footerBtn}
              onPress={this.addTabHandler}
            >
              <Icon
                active={this.state.add}
                style={
                  (styles.footerIcon,
                  { color: this.state.add ? priColor : "#eee" })
                }
                name="add-circle"
                type="MaterialIcons"
              />
              <Text
                active={this.state.add}
                style={
                  (styles.footerText,
                  { color: this.state.add ? priColor : "#eee" })
                }
              >
                Add
              </Text>
            </Button>
            <Button
              active={this.state.profile}
              vertical
              style={styles.footerBtn}
              onPress={this.profileTabHandler}
            >
              <Icon
                active={this.state.profile}
                style={
                  (styles.footerIcon,
                  { color: this.state.profile ? priColor : "#eee" })
                }
                name="user"
                type="FontAwesome"
              />
              <Text
                active={this.state.profile}
                style={
                  (styles.footerText,
                  { color: this.state.profile ? priColor : "#eee" })
                }
              >
                Profile
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 0,
    backgroundColor: secColor
  },
  searchBar: {
    borderWidth: 1,
    borderColor: secColor,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 20,
    backgroundColor: "#eee"
  },
  footer: {
    backgroundColor: secColor
  },
  footerTabs: {
    backgroundColor: secColor
  },
  footerIcon: {
    color: priColor
  },
  footerText: {
    color: priColor
  },
  footerBtn: {
    backgroundColor: secColor
  }
});

export default Home;
