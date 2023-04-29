import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { checkImageURL } from '../../../../utils';
import styles from './nearbyjobcard.style';

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job?.employer_logo)
              ? job?.employer_logo
              : 'https://via.placeholder.com/300',
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.job_title}
        </Text>
        <Text style={styles.jobType} numberOfLines={1}>
          {job?.job_employment_type}
        </Text>
        <Text style={styles.location} numberOfLines={1}>
          {job?.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default NearbyJobCard;
