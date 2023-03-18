// import React, { useEffect, useState } from 'react';
// import { Pressable, View, Text, StyleSheet } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';




// const Tab = createMaterialTopTabNavigator();

// interface Props {
//     navigation: any
// }

// const FAQsSubHeader = ({ navigation }: Props) => {
//     const route = useRoute();
//     const [activeTab, setActiveTab] = useState('');

//     useEffect(() => {
//         setActiveTab(route.name);
//     }, [route]);

//     const handlePress = (tab: string) => {
//         setActiveTab(tab);
//         navigation.navigate(tab);
//     };

//     return (
//         <>
//             <View style={styles.container}>
//                 <View style={styles.con}>
//                     <Pressable
//                         onPress={() => { handlePress("General"); }}
//                         style={[
//                             styles.pressable,
//                             activeTab === 'General' && styles.activePressable,
//                         ]}>
//                         <Text
//                             style={[
//                                 styles.conText,
//                                 activeTab === 'General' && styles.activeConText,
//                             ]}>
//                             General
//                         </Text>
//                     </Pressable>
//                 </View>

//                 <View style={styles.con}>
//                     <Pressable
//                         onPress={() => { handlePress("Transaction") }}
//                         style={[
//                             styles.pressable,
//                             activeTab === 'Transaction' && styles.activePressable,
//                         ]}>
//                         <Text
//                             style={[
//                                 styles.conText,
//                                 activeTab === 'Transaction' && styles.activeConText,
//                             ]}>
//                             Transaction
//                         </Text>

//                     </Pressable>
//                 </View>

//                 <View style={styles.con}>
//                     <Pressable
//                         onPress={() => handlePress("Service")}
//                         style={[
//                             styles.pressable,
//                             activeTab === 'Service' && styles.activePressable,
//                         ]}>
//                         <Text
//                             style={[
//                                 styles.conText,
//                                 activeTab === 'Service' && styles.activeConText,
//                             ]}>
//                             Service
//                         </Text>
//                     </Pressable>
//                 </View>
//             </View>
//         </>
//     );
// };

// export default FAQsSubHeader

// const styles = StyleSheet.create({
//     container: {
//         margin: 24,
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-around",
//     },
//     conText: {
//         color: "#CED1D5",
//         fontFamily: "PrimaryRegular",
//     },
//     con: {
//         borderBottomColor: "#CED1D5",
//         paddingBottom: 10,
//     },
//     activeConText: {
//         color: "#2776EA",
//     },
//     pressable: {
//         paddingVertical: 10,
//         borderBottomWidth: 2,
//         borderBottomColor: "#CED1D5",
//     },
//     activePressable: {
//         borderBottomColor: "#2776EA",
//     }

// })
