import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React from 'react'
import { fontType, colors } from '../theme';
const ListProduct = () => {
  return (
    <View>
        <View style={{paddingHorizontal: 24, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', height:52, elevation: 8, paddingTop:8, paddingBottom:4}}>
            <Text style={{fontSize: 18, fontFamily: fontType['Pjs-ExtraBold'], color: colors.black(),}}>New Arrival</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{padding: 10, backgroundColor: 'white', marginHorizontal: 5, flexDirection: 'column', borderRadius: 20}}>
                <View style={{padding: 10}}>
                    <Image style={{width: 150, height: 150, padding: 30}}source={{uri: 'https://id.yamaha.com/id/files/Image-Index_REVSTAR_2000x2000_b76a93d2ac66266334ba4ae57df516d5.jpg?impolicy=resize&imwid=396&imhei=396'}}></Image>
                </View>
                <View style={{flexDirection: 'column',gap: 1, alignItems: 'center'}}>
                    <Text style={{fontFamily: fontType['Pjs-ExtraBold']}}>Yamaha Revstar</Text>
                    <Text style={{fontFamily: fontType['Pjs-Medium'],fontSize: 15}}>Rp.6,572,000</Text>
                    </View>
                </View>
                <View style={{padding: 10, backgroundColor: 'white', marginHorizontal: 5, flexDirection: 'column', borderRadius: 20}}>
                <View style={{padding: 10}}>
                    <Image style={{width: 150, height: 150, padding: 30}}source={{uri: 'https://id.yamaha.com/id/files/Image-Index_RGX_1080x1080_97d0d5a61db3c6283581835986f63f94.jpg?impolicy=resize&imwid=396&imhei=396'}}></Image>
                </View>
                <View style={{flexDirection: 'column',gap: 1, alignItems: 'center'}}>
                    <Text style={{fontFamily: fontType['Pjs-ExtraBold']}}>Yamaha RGX</Text>
                    <Text style={{fontFamily: fontType['Pjs-Medium'],fontSize: 15}}>Rp.3,370,000</Text>
                    </View>
                </View>
                <View style={{padding: 10, backgroundColor: 'white', marginHorizontal: 5, flexDirection: 'column', borderRadius: 20}}>
                <View style={{padding: 10}}>
                    <Image style={{width: 150, height: 150, padding: 30}}source={{uri: 'https://id.yamaha.com/id/files/Pacifica_1080x1080_83a06c48b47ae2febf82d889070cd470.jpg?impolicy=resize&imwid=396&imhei=396'}}></Image>
                </View>
                <View style={{flexDirection: 'column',gap: 1, alignItems: 'center'}}>
                    <Text style={{fontFamily: fontType['Pjs-ExtraBold']}}>Yamaha Pacifica</Text>
                    <Text style={{fontFamily: fontType['Pjs-Medium'],fontSize: 15}}>Rp.3,116,000</Text>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default ListProduct

const styles = StyleSheet.create({})