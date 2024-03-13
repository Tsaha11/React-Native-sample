import { StyleSheet,Button, Text, View, TextInput, FlatList, ScrollView, TouchableHighlight, TouchableOpacity, ActivityIndicator, Modal, Pressable, Platform } from 'react-native';
import { product } from './redux/constant';
const Product=()=>{
    return <>
        <View>
            <Text>Product items {product}</Text>
        </View>
    </>
}
export default Product