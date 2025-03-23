import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Modal,
  Image
} from 'react-native';

const JobConfirmationModal = ({ route, navigation }) => {
  const { job } = route.params || {
    title: 'Service Gutters protection installation',
  };

  const handleConfirm = () => {
    // Handle job acceptance logic here
    navigation.goBack();
    // You could navigate to a confirmation screen or back to the job list
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalContent}>
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: 'https://i.pravatar.cc/300?u=worker' }} 
            style={styles.image} 
          />
          <View style={styles.starContainer}>
            <Image 
              source={{ uri: 'https://i.pravatar.cc/50?u=star' }} 
              style={styles.starImage} 
            />
          </View>
        </View>
        
        <Text style={styles.title}>Take this job?</Text>
        <Text style={styles.jobTitle}>{job.title}</Text>
        
        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={handleConfirm}
        >
          <Text style={styles.confirmText}>YES, TAKE THIS TASK</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.cancelButton}
          onPress={handleCancel}
        >
          <Text style={styles.cancelText}>CANCEL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  starContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  starImage: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  confirmText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
  },
  cancelText: {
    color: '#666',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default JobConfirmationModal;