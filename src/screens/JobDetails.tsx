import React from 'react';
import { View, Text } from 'react-native';

export function JobDetailsScreen({ route }) {
  const { job } = route.params;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{job.title}</Text>
      <Text>Location: {job.location}</Text>
      <Text>Salary: {job.salary}</Text>
      <Text>Phone: {job.phone}</Text>
      <Text>Description: {job.description}</Text>
    </View>
  );
}
