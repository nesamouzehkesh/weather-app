import React, { Component } from 'react';
import { Row, Col, Card, Layout, Divider } from 'antd';
import './App.css';
import Title from './components/Title';
import Weather from './components/Weather';
import InputForm from './components/InputForm';

const { Sider, Content, Footer, Header } = Layout;


class App extends Component {
  render() {
    return (
      <Layout>
        <Header style={{ background: '#f0f2f5' }}> </Header>
        <Layout style={{ background: '#91C065', marginLeft: '100px', marginRight: '100px' }} hasSider={true}>
          <Sider width={400} style={{ background: 'url("https://us.123rf.com/450wm/belchonock/belchonock1701/belchonock170100701/68451195-water-drops-on-glass-with-treble-clef-drawing-.jpg?ver=6")', padding: '20px' }}>
            <Title />
          </Sider>
          <Content style={{ padding: '40px' }}>
            <InputForm />
            <Weather />
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
      </Footer>
      </Layout>
    );
  }
}

export default App;
