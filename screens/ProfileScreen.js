import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const weekDays = ['06/14', '06/15', '06/16', '06/17', '06/18', '06/19', 'TODAY'];

const menuItems = [
  {
    id: '1',
    title: 'Fill Out Tax Form',
    description: 'Fill out tax form and sign it to get verified',
    icon: 'document-text-outline',
    color: '#4CAF50',
    backgroundColor: '#E8F5E9',
  },
  {
    id: '2',
    title: 'My Balance',
    value: '$1,560',
    icon: 'wallet-outline',
    color: '#666',
    backgroundColor: '#F5F5F5',
  },
  {
    id: '3',
    title: 'Documents',
    icon: 'folder-outline',
    color: '#666',
    backgroundColor: '#F5F5F5',
  },
  {
    id: '4',
    title: 'Settings',
    icon: 'settings-outline',
    color: '#666',
    backgroundColor: '#F5F5F5',
  },
  {
    id: '5',
    title: 'Security & Privacy',
    icon: 'shield-checkmark-outline',
    color: '#666',
    backgroundColor: '#F5F5F5',
  },
  {
    id: '6',
    title: 'About',
    icon: 'information-circle-outline',
    color: '#666',
    backgroundColor: '#F5F5F5',
  },
  {
    id: '7',
    title: 'Logout',
    icon: 'log-out-outline',
    color: '#666',
    backgroundColor: '#F5F5F5',
  },
];

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="create-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <View style={styles.profileHeader}>
            <Image 
              source={{ uri: 'https://i.pravatar.cc/150?u=craig' }} 
              style={styles.profileImage} 
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Craftsman Craig</Text>
              <View style={styles.profileIdContainer}>
                <Text style={styles.profileId}>ID#00638</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.profileRole}>Worker</Text>
              </View>
              <TouchableOpacity style={styles.changeRoleButton}>
                <Text style={styles.changeRoleText}>Change to Manager</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.overviewCard}>
          <View style={styles.overviewHeader}>
            <Text style={styles.overviewTitle}>Overview</Text>
            <View style={styles.weekContainer}>
              <Text style={styles.weekText}>This week</Text>
              <Ionicons name="chevron-down" size={16} color="#FFFFFF" />
            </View>
          </View>

          <View style={styles.activityChart}>
            {weekDays.map((day, index) => (
              <View key={index} style={styles.chartColumn}>
                <View 
                  style={[
                    styles.chartBar, 
                    { 
                      height: index === 6 ? 40 : 60 + Math.random() * 60,
                      backgroundColor: index === 6 ? '#FFFFFF' : '#FFFFFF80'
                    }
                  ]} 
                />
                <Text style={styles.chartLabel}>{day}</Text>
              </View>
            ))}
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>78h</Text>
              <Text style={styles.statLabel}>TOTAL WORK</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>6</Text>
              <Text style={styles.statLabel}>UPCOMING</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>COMPLETED</Text>
            </View>
          </View>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={[styles.menuIconContainer, { backgroundColor: item.backgroundColor }]}>
                <Ionicons name={item.icon} size={24} color={item.color} />
              </View>
              <View style={styles.menuContent}>
                <View style={styles.menuTitleContainer}>
                  <Text style={styles.menuTitle}>{item.title}</Text>
                  {item.value && <Text style={styles.menuValue}>{item.value}</Text>}
                </View>
                {item.description && (
                  <Text style={styles.menuDescription}>{item.description}</Text>
                )}
              </View>
              <Ionicons name="chevron-forward" size={20} color="#CCC" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
      },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  editButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileSection: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  profileIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileId: {
    fontSize: 14,
    color: '#666',
  },
  dot: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 5,
  },
  profileRole: {
    fontSize: 14,
    color: '#666',
  },
  changeRoleButton: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  changeRoleText: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '500',
  },
  overviewCard: {
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 20,
  },
  overviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  overviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  weekContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  weekText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginRight: 5,
  },
  activityChart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
    marginBottom: 15,
  },
  chartColumn: {
    alignItems: 'center',
    width: 30,
  },
  chartBar: {
    width: 6,
    borderRadius: 3,
    marginBottom: 8,
  },
  chartLabel: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statLabel: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginHorizontal: 15,
    marginBottom: 20,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuContent: {
    flex: 1,
  },
  menuTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuTitle: {
    fontSize: 16,
    color: '#333',
  },
  menuValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  menuDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#F1F1F1',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    borderTopWidth: 2,
    borderTopColor: '#4CAF50',
  },
  tabText: {
    fontSize: 10,
    color: '#666',
    marginTop: 5,
  },
  activeTabText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;