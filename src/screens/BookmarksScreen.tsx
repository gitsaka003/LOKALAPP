import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useBookmarks } from '../context/BookmarkContext';

export function BookmarksScreen() {
  const { bookmarks } = useBookmarks();

  const renderBookmark = ({ item }) => (
    <View style={{ padding: 16, borderBottomWidth: 1 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
      <Text>{item.location}</Text>
    </View>
  );

  return (
    <FlatList
      data={bookmarks}
      renderItem={renderBookmark}
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>No bookmarks yet.</Text>}
    />
  );
}
