import React, { FC } from 'react';
import {apiClient} from 'api/axios'
import { useQuery } from 'react-query';
const Hello: FC =()=> {
  const response = async () => {
    const data = await apiClient.get('/posts');
    return data;
  }
  const data = useQuery(['example'],response);
  console.log(data);
  return (
    <div>
      helloworld
    </div>
  )
}
export default Hello;
