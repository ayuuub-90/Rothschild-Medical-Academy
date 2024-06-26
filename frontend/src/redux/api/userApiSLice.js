import { apiSlice } from "./apiSlice.js";
import { USERS_URL } from "../constants.js";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // create new account funvtion
    registerUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),

    // login to exist account function
    loginUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),

    // logout function
    logoutUser: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),

    // get user by id
    getUserById: builder.query({
      query: () => ({
        url: `${USERS_URL}/profile`,
      }),
    }),

    // update current user function
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetUserByIdQuery,
  useUpdateUserMutation,
} = userApiSlice;
