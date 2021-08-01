import React from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'



export default class About extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View style={styles.view}>
                <View style={styles.infoView}>
                    <Image style={styles.image} source={require('../helper/moi.png')} />
                    <Text style={styles.nom}>Diallo Thierno</Text>
                    <Text style={styles.info}>Tel : 00225 01 02 23 67 40</Text>
                    <Text style={styles.info}>Email : thiernosaliou0223@gmail.com</Text>
                    <Text>developpeur web, android et ios </Text>
                </View>
                <View style={styles.infoView2}>
                    <Text style={styles.info2}>A propos de l'Application</Text>
                    <Text>
                        vous ete fatiguer d'attendre des année pour des jeux comme (4 image 1 mot) ou (maitre des mots)
                        avec notre application ses jeu devient plus facile  que jamais.
                    </Text>
                    <Text>
                        vous devez saisir les differentes lettre fourni par le jeu et la longeur du mot 
                        rechercher et on vous donne la liste de mot possible comme réponse
                    </Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    image : {
        
    },
    infoView : {
        flex : 3,
        alignItems : 'center',
        justifyContent : "center"
    },
    infoView2 : {
        flex : 1,
        alignItems : 'center',
        justifyContent : "center",
        margin : 15,
    },
    nom : {
        fontSize : 40,
        color : '#DE3163',
        fontWeight : 'bold',
    },
    info : {
        fontSize : 20,
    },
    info2 : {
        fontSize : 20,
        marginBottom : 10,
    },
    button : {
        marginTop : 5,
        color : "red",
    },
    view: {
        flex : 1,
        justifyContent : 'center', 
        alignItems : 'center',
        backgroundColor : "#FEE7F0"
    },
});