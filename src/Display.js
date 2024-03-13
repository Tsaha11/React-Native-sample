import { StyleSheet,Button, Text, View, TextInput, FlatList, ScrollView, TouchableHighlight, TouchableOpacity, ActivityIndicator, Modal, Pressable, Platform } from 'react-native';
import { product } from './redux/constant';
const Display=()=>{
    return <>
        <View>
            <Text>Displayed item {product}</Text>
        </View>
    </>
}
export default Display
