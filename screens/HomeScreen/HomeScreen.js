// screens/HomeScreen.js
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {
  screenHeight,
  screenWidth,
  padding,
  borderRadius,
  fontSize,
  colors,
} from '../../components/constatnts/constants';

const HomeScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => setCategory(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const renderProductItem = item => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleProductPress(item)}>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Image
          style={styles.productImage}
          source={{uri: item.image}}
          resizeMode="contain" // Use "contain" for flexibility
          onError={error => console.error('Image loading error:', error)}
        />
      </View>

      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.title}</Text>
        <Text style={styles.productPrice}>₹{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleProductPress = product => {
    navigation.navigate('productDetailScreen', { product });
    
  };

  const handleCategory = async data => {
    console.log('selectedCategory>>>>>>>', data);
    if (data == 'electronics') {
      await fetch('https://fakestoreapi.com/products/category/electronics', {
        method: 'GET',
        headers: {
          Accept: 'Application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then(res => res.json())
        .then(resData => {
          console.log('resdata mens electronics>>>>', resData);
          setProducts(resData);
        })
        .catch(error => console.log(error));
    } else if (data == 'jewelery') {
      await fetch('https://fakestoreapi.com/products/category/jewelery', {
        method: 'GET',
        headers: {
          Accept: 'Application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then(res => res.json())
        .then(resData => {
          console.log('resdata mens jewelery>>>>', resData);
          setProducts(resData);
        })
        .catch(error => console.log(error));
    } else if (data == "men's clothing") {
      await fetch("https://fakestoreapi.com/products/category/men's clothing", {
        method: 'GET',
        headers: {
          Accept: 'Application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then(res => res.json())
        .then(resData => {
          console.log('resdata mens clothin>>>>', resData);
          setProducts(resData);
        })
        .catch(error => console.log(error));
    } else if (data == "women's clothing") {
      await fetch(
        "https://fakestoreapi.com/products/category/women's clothing",
        {
          method: 'GET',
          headers: {
            Accept: 'Application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(),
        },
      )
        .then(res => res.json())
        .then(resData => {
          console.log('resdata womens jewelery>>>>', resData);
          setProducts(resData);
        })
        .catch(error => console.log(error));
    }
  };

   return (
    <ScrollView style={styles.container}>
      <View style={styles.categoryContainer}>
        {category.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton,
            ]}
            onPress={() => {
              setSelectedCategory(category), handleCategory(category);
              console.log('category<<<<<', category);
            }}>
            <Text style={styles.categoryButtonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.productContainer}>
        {products.map(item => (
          <React.Fragment key={item.id}>
            {renderProductItem(item)}
          </React.Fragment>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: screenWidth * padding,
    backgroundColor: colors.background,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  categoryButton: {
    width: '47%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.cardBackground,
    marginBottom: screenHeight * 0.02,
  },
  selectedCategoryButton: {
    backgroundColor: colors.primary, // Change to your selected color
  },
  categoryButtonText: {
    color: colors.text,
    fontWeight: 'bold',
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    marginBottom: screenHeight * 0.02,
    backgroundColor: colors.cardBackground,
    borderRadius: screenWidth * borderRadius,
    width: '47%',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  productImage: {
    width: '100%',
    height: screenHeight * 0.2,
    aspectRatio: 1, // Adjust aspect ratio as needed
    borderTopLeftRadius: screenWidth * borderRadius,
    borderTopRightRadius: screenWidth * borderRadius,
  },
  productInfo: {
    padding: screenWidth * 0.02,
  },
  productName: {
    fontSize: screenWidth * 0.04,
    fontWeight: 'bold',
    marginBottom: screenHeight * 0.01,
    color: colors.text,
  },
  productPrice: {
    fontSize: screenWidth * 0.04,
    fontWeight: 'bold',
    color: colors.price,
  },
});

export default HomeScreen;
