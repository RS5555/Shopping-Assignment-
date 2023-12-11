// // UserReports.js
// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';

// const UserReports = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch user information from the API
//     fetch('https://fakestoreapi.com/users')
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error('Error fetching user information:', error));
//   }, []);

//   const renderUserItem = ({ item }) => (
//     <View style={styles.userItem}>
//       <Text style={styles.userName}>{item.username}</Text>
//       <Text style={styles.userEmail}>{item.email}</Text>
//       {/* Add more user information as needed */}
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>User Reports</Text>
//       <FlatList
//         data={users}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderUserItem}
//         contentContainerStyle={styles.userList}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: '#333',
//     textAlign: 'center',
//   },
//   userList: {
//     paddingTop: 8,
//   },
//   userItem: {
//     marginBottom: 16,
//     padding: 16,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   userName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//     color: '#333',
//   },
//   userEmail: {
//     fontSize: 16,
//     color: '#666',
//   },
// });

// export default UserReports;
