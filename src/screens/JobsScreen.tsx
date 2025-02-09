import React from 'react';
import { View, FlatList, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';

export function JobsScreen({ navigation }) {
  const fetchJobs = async ({ pageParam = 1 }) => {
    const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs?page=${pageParam}`);
    return response.data;
  };

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery(
    'jobs',
    fetchJobs,
    {
      getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
    }
  );

  const renderJob = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('JobDetails', { job: item })}>
      <View style={{ padding: 16, borderBottomWidth: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
        <Text>{item.location}</Text>
        <Text>Salary: {item.salary}</Text>
        <Text>Phone: {item.phone}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data?.pages.flatMap(page => page.jobs) ?? []}
      renderItem={renderJob}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={() => hasNextPage && fetchNextPage()}
      ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
    />
  );
}
