import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native'
import { Permutation }  from '../js-combinatorics/combinatorics.js'
import data from '../helper/data'

function ResultItem(props){
    return(
        <View style={styles.resultItem}>
            <Text style={styles.resultText}>{props.item}</Text>
        </View>
    )
}

export default class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoding : true,
            data : [],
        }
        this.it = undefined
        this.data = []
        this.result = []
    }

    rempli(){
        console.log("debut permutation", 0)
        this.it = new Permutation(this.props.route.params.text, parseInt(this.props.route.params.taille))
        console.log("fin permutation")
        console.log("debut verifie")
        for (const elem of this.it) {
            this.data.push(elem.join(''))
        }
        console.log("fin verifie")
        console.log("debut add")
        this.data.forEach((element) => {
            if(data.indexOf(element) != -1 ){
                this.result.push(element)
            }
        })
        this.result = [...new Set(this.result)]
        console.log("fin add")

        
    }

    lance(){
        this.setState({
            data : this.result,
            isLoding : false,
        })
        console.log("fin de lancer")
    }

    componentDidMount(){
        this.rempli()
        this.lance()
    }
    
    render(){
        if(this.state.isLoding){
            return(
                <View style={styles.view}>
                    <ActivityIndicator style={styles.loding} size="large" color="red" />
                </View>
            )
        } else {
            if(this.state.data.length > 0){
                return (
                    <View style={styles.view}>
                        <FlatList
                            data={this.state.data}
                            renderItem={ResultItem}
                            keyExtractor={item => item}
                        />
                    </View>
                )
            }else{
                return (
                    <View style={styles.view}>
                        <ResultItem item="aucun resultat" />
                    </View>
                )
            } 
        }
    }

}

const styles = StyleSheet.create({
    resultItem: {
        borderWidth : 0,
        height : 50,
        width : 320,
        paddingLeft : 5,
        margin : 15,
        backgroundColor : "#F1948A",
        justifyContent : 'center', 
        alignItems : 'center',
        borderRadius : 20
    },
    resultText : {
        fontSize : 20,
        fontWeight : 'bold'
    },
    view: {
        flex : 1,
        justifyContent : 'center', 
        alignItems : 'center',
        backgroundColor : "#FEE7F0"
    },
    loding : {
        position : "absolute",
        left : 0,
        right : 0,
        top : 80,
        bottom : 0,
        alignItems : "center",
        justifyContent : 'center'
    }
});

