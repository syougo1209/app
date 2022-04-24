import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import Hello from 'ui/hello'

const queryClient = new QueryClient()

const App: FC =()=> {
  return (
    <QueryClientProvider client={queryClient}>
      <Hello/>
    </QueryClientProvider>
  )
}

export default App;
