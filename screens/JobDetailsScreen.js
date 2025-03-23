import React from 'react';
import localMapImage from '../assets/map.jpg';
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

// Default job data to use when no job is passed via route params
const defaultJob = {
  id: '1',
  date: '10/05/2020',
  duration: '3d',
  status: 'Open',
  taskId: 'task#11123',
  title: 'Stainless roof renovations',
  location: 'Rose boulevard 12th, Cal, USA',
  distance: '1.3 km',
  people: ['Keiko', 'Jason', 'Peter'],
  timeLeft: '',
  managerNote: 'This machine can\'t working well every 1 turn it on the AC always make a noisy sound and the AC can always hot even...',
  managerName: 'Jenny Wilson',
  managerId: 'ID#00638',
};

const JobDetailsScreen = ({ route, navigation }) => {
  // Safely access job from route.params or use default job
  const job = (route.params && route.params.job) ? route.params.job : defaultJob;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Job Details</Text>
          <TouchableOpacity style={styles.moreButton}>
            <Ionicons name="ellipsis-horizontal" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <View style={styles.dateStatusContainer}>
          <Text style={styles.date}>{job.date}</Text>
          <View style={styles.statusContainer}>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{job.status}</Text>
            </View>
            <Text style={styles.openText}>Open</Text>
          </View>
        </View>

        <Text style={styles.jobTitle}>{job.title}</Text>
        
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={16} color="#666" />
          <Text style={styles.location}>
            {job.location} <Text style={styles.distance}>{job.distance}</Text>
          </Text>
        </View>

        <View style={styles.peopleContainer}>
          <View style={styles.avatarsContainer}>
            {job.people.map((person, index) => (
              <Image
                key={index}
                source={{ uri: `https://i.pravatar.cc/150?u=${person}${job.id}` }}
                style={[styles.avatar, { marginLeft: index > 0 ? -10 : 0 }]}
              />
            ))}
          </View>
          <Text style={styles.peopleText}>{job.people.length} people</Text>
        </View>

        <View style={styles.peopleNames}>
          {job.people.map((person, index) => (
            <Text key={index} style={styles.personName}>
              {person}
              {index < job.people.length - 1 ? ', ' : ''}
            </Text>
          ))}
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>UNIT INFORMATION</Text>
          <Text style={styles.sectionContent}>{job.title}</Text>
          <Image 
  source={localMapImage} 
  style={styles.mapImage} 
/>

          <View style={styles.locationPinContainer}>
            <View style={styles.locationPin}>
              <Ionicons name="location" size={16} color="#4CAF50" />
            </View>
          </View>
          <TouchableOpacity style={styles.viewDetailsButton}>
            <Text style={styles.viewDetailsText}>View details</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>MANAGER NOTE</Text>
          <Text style={styles.noteText}>{job.managerNote || 'No manager notes available.'}</Text>
          <TouchableOpacity style={styles.viewMoreButton}>
            <Text style={styles.viewMoreText}>View more</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>MANAGER INFORMATION</Text>
          <View style={styles.managerContainer}>
            <Image 
              source={{ uri: 'https://i.pravatar.cc/150?u=manager' }} 
              style={styles.managerImage} 
            />
            <View style={styles.managerInfo}>
              <Text style={styles.managerName}>{job.managerName || 'Jenny Wilson'}</Text>
              <Text style={styles.managerId}>{job.managerId || 'ID#00638'}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity 
        style={styles.takeJobButton}
        onPress={() => navigation.navigate('JobConfirmation', { job })}
      >
        <Text style={styles.takeJobText}>TAKE JOB</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  moreButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBadge: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2196F3',
  },
  openText: {
    fontSize: 14,
    color: '#4CAF50',
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  distance: {
    color: '#4CAF50',
    fontWeight: '500',
  },
  peopleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  avatarsContainer: {
    flexDirection: 'row',
    marginRight: 8,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  peopleText: {
    fontSize: 14,
    color: '#666',
  },
  peopleNames: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  personName: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  sectionContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#F1F1F1',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#999',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  mapImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  locationPinContainer: {
    position: 'absolute',
    top: 90,
    left: '50%',
    marginLeft: -15,
  },
  locationPin: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  viewDetailsButton: {
    alignSelf: 'flex-start',
  },
  viewDetailsText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
  },
  noteText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 10,
  },
  viewMoreButton: {
    alignSelf: 'flex-start',
  },
  viewMoreText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
  },
  managerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  managerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  managerInfo: {
    justifyContent: 'center',
  },
  managerName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  managerId: {
    fontSize: 14,
    color: '#999',
  },
  takeJobButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  takeJobText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default JobDetailsScreen;