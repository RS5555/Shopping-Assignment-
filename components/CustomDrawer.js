import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function CustomDrawer({navigation}, props) {
 
  const [activeTab, setActiveTab] = useState('Home');
 

  const navigateToScreen = screenName => {
    navigation.navigate(screenName);
    navigation.closeDrawer();
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <ScrollView style={{backgroundColor: '#ffffff'}}>
        <View style={{flex: 1, paddingTop: 10}}>
          <TouchableOpacity
            style={[styles.parentMenu, activeTab == 'Home' && styles.activeTab]}
            onPress={() => {
              navigateToScreen('Home'), setActiveTab('Home');
            }}>
            
            <View style={styles.singleTabNameView}>
              <Text
                style={{
                  marginLeft: 15,
                  fontWeight: 'bold',
                  color: activeTab == 'Home' ? '#FFFFFF' : '#5c5a5a',
                  fontSize: 18,
                }}>
                Home
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  parentMenu: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  iconView: {
    width: '15%',
    paddingLeft: 10,
  },
  textView: {
    width: '85%',
  },
  arrowDownView: {
    width: '15%',
  },
  singleTabIconView: {
    width: '15%',
  },
  singleTabNameView: {
    width: '85%',
  },
  childMenu: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
    paddingLeft: 30,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#FF9B05',
  },
  subActiveTab: {
    backgroundColor: '#FF9B05',
  },
  sepration: {
    borderBottomWidth: 1,
    borderColor: '#5c5a5a',
  },
});
