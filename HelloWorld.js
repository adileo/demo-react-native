import React from 'react'
import {Text} from 'react-native'

// export default (props) => {
//     return <Text>Hello {props.name}</Text>
// }

export default class HelloWorld extends React.Component {
    render(){
        return <Text>Hello {this.props.name}</Text>
    }
}