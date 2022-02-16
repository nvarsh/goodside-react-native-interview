import axios from "axios";
import React, { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {styles} from "./style";

export interface LiveData{
    id: number;
    name: string;
    description: string;
    tagline: string;

}
export const Dashboard = ({navigation, route}: {navigation:any, route:any}) => {

    const [username, setUsername] = useState(route?.params?.userName);
    const [pageNumber, setPageNumber] = useState(1);
    const [data, setData] = useState<LiveData[]>([]);
    
    useEffect(()=>{
        getData(pageNumber)
    });

    const handleLogoutClick = () => {
        navigation.navigate("Login");
    }
    const getData = (pageNo: number) => {
        axios.get("https://api.punkapi.com/v2/beers?page="+pageNo)
        .then( response => {
            let array = [...data, ...response.data ]
            setData(array);
        })
        .catch(error => console.log("Error fetching data : ",error))
    }
    const handleLoadMore = () =>{
        console.log("load mroe .....")
        setPageNumber(pageNumber + 1);
        getData(pageNumber)
    }
    return (
        <View style={ styles.mainContainer }>
            <Text style={styles.heading1}>Welcome, </Text>
            <Text style={styles.heading2}>{username}</Text>

            <View style={styles.bubbleWrap} />

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogoutClick}>
                <View style={{flexDirection:"row", alignItems:'center'}}>
                    <Text style={{color:"black"}}>&#8592;</Text>
                    <Text style={{fontSize: 18, marginLeft:8, color:"black"}}>Logout</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.listWrap}>
                    <FlatList
                    data={data}
                    keyExtractor={(item, index)=> String(index)}
                    renderItem = {({item, index}) => {
                        return (
                            <View key={String(index)} style={styles.listItem}>
                                <Text>{item.name }</Text>
                                <Text style={{marginTop: 12, textAlign: "justify"}}>{item.description}</Text>
                            </View>
                        );
                    }}
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={0.5}
                    initialNumToRender={15}/>
            </View>
        </View>
    );
}