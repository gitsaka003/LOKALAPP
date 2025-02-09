import React, { createContext, useState, useContext } from 'react';

const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (job) => setBookmarks([...bookmarks, job]);
  const removeBookmark = (id) => setBookmarks(bookmarks.filter((job) => job.id !== id));

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export const useBookmarks = () => useContext(BookmarkContext);
