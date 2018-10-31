import React, { Component } from 'react';
import {Panel , Content , Footer , Tab} from 'react-panels';
export default class Panel extends Component {
    render() {
        return (
            <Panel theme="chemical">
                <Tab title="One" icon="fa fa-plane">
                    <Toolbar>Toolbar content of One</Toolbar>
                    <Content>Content of One</Content>
                    <Footer>Footer content of One</Footer>
                </Tab>
                <Tab title="Two" icon="fa fa-fire">
                    <Content>Content of Two</Content>
                </Tab>
            </Panel>
        )
    }

}