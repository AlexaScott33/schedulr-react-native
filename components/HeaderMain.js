import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Icon, Header } from 'react-native-elements'
import { changeTab, derender } from '../actions/tabs';

class HeaderMain extends React.Component {

    goBack() {
        const tab = this.props.selectedTab;
        console.log(this.props.selectedTab);
        if (tab === 'clients') {Actions.dashboard()}
        if (tab === 'editClient') {this.props.dispatch(derender()); this.props.dispatch(changeTab('clients'))}
        if (tab === 'deleteClient') {this.props.dispatch(derender()); this.props.dispatch(changeTab('clients'))}

        // switch(this.props.selectedTab) {
        //     case 'dashboard':
        //         console.log('running dashboard')
        //     case 'clients':
        //         console.log('running clients')
        //         Actions.dashboard();
        //     case 'editClient':
        //         console.log('running editClient')
        //         Actions.clients();
        //     case 'deleteClient':
        //         console.log('running deleteClient')
        //         Actions.clients();
        // }
    }

    render() {
        return (
            <Header
                outerContainerStyles={{ backgroundColor: '#D6EAF8', padding: 5 }}
                innerContainerStyles={{ flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',}}
                centerComponent={{ text: 'Schedulr', style: {fontSize: 25}}}
                leftComponent={
                    <TouchableOpacity
                    onPress={() => this.goBack()}>
                        <Icon name="arrow-back" size={30}/>
                    </TouchableOpacity>
                }
                rightComponent={<TouchableOpacity
                    onPress={() => Actions.navigation()}
                >
                    <Icon 
                    name='menu'
                    size={30}
                    iconStyle={{marginTop: 10, marginRight: 5}}
                     />
                </TouchableOpacity>}
            />
        )
    }
}

const mapStateToProps = state => ({
    selectedTab: state.tabsReducer.selectedTab
})

export default (connect(mapStateToProps)(HeaderMain))


const $white = '#fff';
const $black = '#000'

const $colorOne = '#D6EAF8';
const $colorTwo = $white;
const $colorThree = '#F4F4F4';
const $colorFour = '#373737';
const $colorFive = '#E5E8E8';

const styles = {
    container: {
        backgroundColor: $colorOne,
        paddingBottom: 10,
        paddingTop: 40,
        paddingLeft: 10,
        paddingRight: 150,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menuBlock: {
        width: 35,
        height: 5,
        backgroundColor: $black,
        marginTop: 6,
        marginBottom: 1
    },
    messageImage: {
        height: 50,
        width: 50,
        tintColor: $black
    },
    menu: {
        color: $black,
        fontSize: 16,
    },
    header: {
        color: $black,
        fontSize: 24,
        marginLeft: 30
    },
    newMessage: {
        color: $black
    }
};