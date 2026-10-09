import { IResponse } from '@/types/todo'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://to-dos-api.softclub.tj/api/' }),
  endpoints: (build) => ({
    getTodo: build.query<IResponse,unknown>({
      query: () => `to-dos`,
    }),
    deleteTodo: build.mutation<IResponse,number>({
        query: (id:number) => ({
            url: `to-dos?id=${id}`,
            method: 'DELETE',
            // body: patch,
          }),
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodoQuery, useDeleteTodoMutation } = todoApi