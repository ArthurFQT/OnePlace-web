import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PageContextType {
  pageTitle: string;
  setPageTitle: (title: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

interface PageProviderProps {
  children: ReactNode;
}

const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('OnePlace');
  const [isLoading, setIsLoading] = useState(false);

  // Update document title when pageTitle changes
  React.useEffect(() => {
    document.title = pageTitle ? `${pageTitle} | OnePlace` : 'OnePlace';
  }, [pageTitle]);

  const value = {
    pageTitle,
    setPageTitle,
    isLoading,
    setIsLoading,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

// Custom hook to use the page context
export const usePage = (): PageContextType => {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error('usePage must be used within a PageProvider');
  }
  return context;
};

export default PageProvider;