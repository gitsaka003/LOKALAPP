import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabs } from './src/navigation/BottomTabs';
import { BookmarkProvider } from './src/context/BookmarkContext';

export default function App() {
  return (
    <BookmarkProvider>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </BookmarkProvider>
  );
}
