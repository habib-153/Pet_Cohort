import { baseApi } from "../../api/baseApi";
const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    getData: builder.query({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    })
  }),
});

export const {useLoginMutation, useSignUpMutation, useGetDataQuery} = authApi