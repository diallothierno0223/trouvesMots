import React from 'react'
import { View, TextInput, Text, FlatList, Button, StyleSheet } from 'react-native'

function ListCondition(){
    let condition = [
        {key : "* nombre de lettre inferieur ou egal a 8"},
        {key : "* longueur de mot rechercher superieur a 0 et inferieur ou egal a nombre de lettre"},
        {key : "* remplir tout les champs"},
    ]
    return ( <FlatList
        data={condition}
        renderItem={({item}) => <Text>{item.key}</Text>} />
        )
}

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lettre : "",
            tailleMot : "",
        }
        
    }

    setLettre(text){
        text = text.toLowerCase().replace(/[^a-z]/g, '')
        this.setState({
            lettre : text
        })
    }

    setTailleMot(text){
        text = text.toLowerCase().replace(/[^0-9]/g, '')
        this.setState({
            tailleMot : text,
        })
    }

    okay(){
        if(this.state.lettre.length > 0 && this.state.tailleMot.length > 0 ){
            if(this.state.lettre.length <= 9 && this.state.lettre.length >= parseInt(this.state.tailleMot) && parseInt(this.state.tailleMot) > 0){
                return true
            }
        }else{
            return false
        }
    }

    searchMot(){
        this.props.navigation.navigate('Result', {text : this.state.lettre, taille : this.state.tailleMot})
    }

    render(){
        return (
                <View style={styles.view}>
                    <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                        <Text style={styles.title}>Trouve</Text>
                        <Text style={styles.title}>mots</Text>
                    </View>
                    <View style={{flex:3, margin : 15,}}>
                        <TextInput placeholder="entrer les differente lettre"
                            value={this.state.lettre} onChangeText={text => this.setLettre(text)}
                            underlineColorAndroid="transparent" style={styles.textInput} />
                        
                        <TextInput placeholder="entrer la longeur du mot rechercher" keyboardType="numeric" 
                            value={this.state.tailleMot} onChangeText={text => this.setTailleMot(text)}
                            underlineColorAndroid="transparent" style={styles.textInput} />
                        {this.okay() ? <Button title="rechercher"  color="#DE3163" onPress={() => this.searchMot()} style={styles.button} /> : <ListCondition />}
                    </View>
                </View>
        )
    }

}

const styles = StyleSheet.create({
    textInput: {
        borderWidth : 2,
        borderColor : 'black',
        height : 40,
        paddingLeft : 5,
        marginBottom : 10,

    },
    title : {
        fontSize : 50,
        color : '#DE3163',
        fontWeight : 'bold',
    },
    button : {
        margin : 15,
    },
    view: {
        // marginTop : 20,
        // marginRight: 10,
        // marginLeft : 10,
        flex : 1,
        justifyContent : 'center', 
        // alignItems : 'center',
        backgroundColor : "#FEE7F0"
    },
   
});