// import React, { useEffect, useState } from "react";
// import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

// export default function Practice() {
//   const [dog, setDog] = useState("");

//   // const fetchDog = async () => {
//   //   const response = await fetch("https://api.thedogapi.com/v1/images/search");
//   //   const data = await response.json();
//   //   const url = data[0].url;
//   //   setDog(url);
//   // };

//   useEffect(() => {
//     fetchDog();
//   }, []);

//   return (
//     <>
//       <View style={styles.savedComponent}>
//         <Text style={styles.text}> Component to be saved </Text>
//         <Image
//           source={{
//             uri: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=75&w=126",
//           }}
//           style={styles.image}
//         />
//         <Text style={styles.text}>Some random text, also saved</Text>
//       </View>
//       <View style={styles.row}>
//         <TouchableOpacity style={styles.button} onPress={shareImage}>
//           <Text>Share</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={downloadImage}>
//           <Text>Save</Text>
//         </TouchableOpacity>
//       </View>
//     </>
//     // </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//     height: 200,
//     width: 200,
//   },
//   button: {
//     margin: 24,
//     padding: 12,
//     borderRadius: 50,
//     width: 150,
//     backgroundColor: "lightblue",
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });
