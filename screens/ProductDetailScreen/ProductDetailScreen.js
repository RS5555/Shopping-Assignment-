// screens/ProductDetailScreen.js
import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import { screenHeight } from '../../components/constatnts/constants';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const [imageDimensions, setImageDimensions] = useState({ width: 1, height: 1 });
  const [isModalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch image dimensions
    Image.getSize(
      product.image,
      (width, height) => {
        setImageDimensions({ width, height });
      },
      (error) => {
        console.error('Error fetching image dimensions:', error);
      }
    );
  }, [product.image]);

  // Determine the aspect ratio based on image dimensions
  const aspectRatio = imageDimensions.width / imageDimensions.height;

  // Set a dynamic fixed height based on the aspect ratio
  const fixedHeight = screenHeight * 0.6;
  const dynamicFixedHeight = aspectRatio > 1 ? fixedHeight / aspectRatio : fixedHeight;

  // Function to handle Add to Cart button press
  const handleAddToCart = () => {
    setModalVisible(true);
  };

  // Function to handle confirm button press in the modal
  const handleConfirm = async () => {
    setModalVisible(false);

    try {
      // Add logic to send quantity and product details to the cart API
      const response = await addToCartAPI(product, quantity);

      // Check if API call was successful
      if (response.success) {
        // Show success popup
        Alert.alert('Success', 'Product added to cart successfully!');
      } else {
        // Show error popup
        Alert.alert('Error', 'Failed to add product to cart. Please try again.');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      // Show error popup
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
    }
  };

  // Function to handle cancel button press in the modal
  const handleCancel = () => {
    setModalVisible(false);
  };

  // Function to handle incrementing the quantity
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle decrementing the quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Mock function to simulate adding to cart API
  const addToCartAPI = async (product, quantity) => {
    const date = new Date().toISOString();
    const apiUrl = 'https://fakestoreapi.com/carts';
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId:1,
        date:date,
        products:[(product.id,quantity)]
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to add to cart');
    }

    return response.json();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.fixedView, { height: dynamicFixedHeight }]}>
        <Image
          style={[styles.productImage, { aspectRatio, width: '100%' }]}
          source={{ uri: product.image }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.productName}>{product.title}</Text>
        <Text style={styles.productPrice}>₹{product.price}</Text>
        {/* Add more content to trigger scrolling */}
        <Text style={styles.productDescription}>{product.description}</Text>

        {/* Add to Cart Button */}
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartButtonText}>ADD TO CART</Text>
        </TouchableOpacity>
        {/* ... more content ... */}

        {/* Quantity Input Modal */}
        <Modal visible={isModalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Enter Quantity</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton} onPress={decrementQuantity}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.quantityInput}
                  keyboardType="numeric"
                  value={quantity.toString()}
                  onChangeText={(text) => setQuantity(parseInt(text, 10) || 1)}
                />
                <TouchableOpacity style={styles.quantityButton} onPress={incrementQuantity}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalButtonContainer}>
                <Button title="Confirm" onPress={handleConfirm} color="#e44d26" />
                <Button title="Cancel" onPress={handleCancel} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fixedView: {
    width: '100%',
    overflow: 'hidden',
    alignItems: 'center',
  },
  productImage: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    marginTop: -20,
    elevation: 5,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e44d26',
    marginBottom: 12,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 16,
  },
  addToCartButton: {
    backgroundColor: '#e44d26',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  addToCartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  quantityButton: {
    backgroundColor: '#e44d26',
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ProductDetailScreen;
