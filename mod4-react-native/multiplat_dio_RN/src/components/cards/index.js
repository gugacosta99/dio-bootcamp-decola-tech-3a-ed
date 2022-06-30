import React from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    VirtualizedList,
} from 'react-native';
import styles from './style'


//COMPONENTES
const card = ({ titulo, children }) => { //destruturação, originalmente seria somente (props)
    return (
        <View style={styles.card}>
            <View style={styles.card_head}>
                <Text style={styles.text}>{titulo}</Text>
            </View>
            
            <View style={styles.card_content}>
                {children}
            </View>
        </View>
    )
}


export default card