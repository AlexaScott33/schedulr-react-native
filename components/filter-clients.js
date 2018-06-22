// import React from 'react';
// import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
// import ClientsList from './clients-list';

// // import IconButton from '@material-ui/core/IconButton';
// // import SvgIcon from '@material-ui/core/SvgIcon';


// export default class FilterClients extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             input: ''
//         }
//     }

//     onChange(text) {
//          this.setState({
//              input: text
//          })
//     }

//     render() {
//         const { inputStyle } = styles;
//         const component = this;
//         const clientFilter = this.props.user.clients.filter((client) => {
//            if (client.name.slice(0, component.state.input.length).toLowerCase() === component.state.input.toLowerCase()) {
//             return client;
//            }
//         })
//         return (
//             <View className="filter">
//                     {/* // className="filter-clients__form">
//                     // <label className="filter-clients__label" htmlFor="filter"></label> */}
//                     <View className="filter__input">
//                         <TextInput 
//                             type="text"
//                             name="filter"
//                             label="Client Filter"
//                             id="filter"
//                             placeholder="Filter by name"
//                             onChangeText={(text) => {
//                                 this.onChange(text)
//                             }}>
//                         </TextInput>
//                         {/* <SvgIcon>    
//                             <path xmlns="http://www.w3.org/2000/svg" d="M15.5,14h-0.79l-0.28-0.27c1.2-1.4,1.82-3.31,1.48-5.34c-0.47-2.78-2.79-5-5.59-5.34c-4.23-0.52-7.79,3.04-7.27,7.27   c0.34,2.8,2.56,5.12,5.34,5.59c2.03,0.34,3.94-0.28,5.34-1.48L14,14.71v0.79l4.25,4.25c0.41,0.41,1.08,0.41,1.49,0l0,0   c0.41-0.41,0.41-1.08,0-1.49L15.5,14z M9.5,14C7.01,14,5,11.99,5,9.5S7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14z"/>
//                         </SvgIcon> */}
//                     </View>
//                     {/*                     
//                     <button className="filter-button filter-clients__button"
//                         disabled={this.props.pristine || this.props.submitting}>
//                         Search
//                     </button> */}
//                 {/* <ClientsList user={this.props.user} filteredList={clientFilter}/> */}
//             </View>
//         );
//         } 
//     }

//     const styles = StyleSheet.create({
//         viewStyle: {
//             backgroundColor: '#eeeeee',
//             flex: 1,
//         },
//         inputStyle: {
//             borderColor: 'black'
//         }
//     });
