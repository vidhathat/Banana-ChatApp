import React from 'react';
import  {Text, FlatList, View, StyleSheet}  from 'react-native';

// a react component is nothing but a javascript function

const NotesScreenComponent = () => {

    var data = [
        {"date": "24-10-1998", "text": "I am going to Dubai"},
        {"date": "24-02-2002", "text": "I have to bring vegatbles "},
        {"date": "24-02-2003", "text": "I have to bring vegatbles"},
        {"date": "24-02-2004", "text": "I have to bring vegatbles"},
        {"date": "24-02-2005", "text": "I have to bring vegatbles"},
        {"date": "24-02-2006", "text": "I have to bring vegatbles"},
        {"date": "24-02-2007", "text": "I have to bring vegatbles"}
    ]

    // to write javascript inside jsx, i need to enclose javascript code in {}
    // {name: 'abc', 'age': 12} -> {name} -> {name: 'abc'}
    // item , index
    return <View style={styles.viewProperties}>
        <FlatList 
            style={styles.listProperties}
            data={data}
            keyExtractor={(item, index) => {
                    return index
                }
            }
            numColumns={2}
            renderItem={({item}) => {
                // console.log(index, item)
                return <View backgroundColor={randomBackground()} style={styles.textViewStyle}>
                    <Text style={styles.textProperties}> {item.text}</Text>
                </View>
            }
            
        }   
        />
    </View>

}


const styles = StyleSheet.create({
    viewProperties : {
        marginTop: 50
    },
    textProperties: {
        fontSize: 24
    },
    textViewStyle: {
        height: 150,
        width: 150,
        margin: 15,
        borderRadius:10,
        padding:5,
        alignItems:"center",
        justifyContent:"center"
    }
});

const randomBackground= ()=>{
    var red = Math.floor(Math.random()*255)
    var green = Math.floor(Math.random()*255)
    var blue = Math.floor(Math.random()*255)

    return `rgb(${red}, ${green}, ${blue})`


}
export default NotesScreenComponent;




// Javascript object JSON - JavaScript Object Notation


// {
//     'name': 'Naman',
//     'age': 'blah',
//     'hobby': 'meh',
//     'friends': [
//         "A", "B", "C"
//     ],
//     'scbool' : {
//         'name': 'BHS',
//         'location': 'Rajasthan'
//     },
//     'fav_city': 'abc'

// }


