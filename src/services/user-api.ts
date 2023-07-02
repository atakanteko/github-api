import { appService } from './api';
import { IGitHubUser, IGitHubUserFollowers } from '../types/services/IUser';

export const githubUserInformation = appService.injectEndpoints({
  endpoints: (builder) => ({
    getGithubUserInfo: builder.query<IGitHubUser, void>({
      query: () => '/users/john-smilga',
      providesTags: ['Users'],
    }),
    getGithubUserFollowers: builder.query<IGitHubUserFollowers[], void>({
      query: () => '/users/john-smilga/followers',
      providesTags: ['UserFollowers'],
    }),
  }),
});

export const { useGetGithubUserInfoQuery, useGetGithubUserFollowersQuery } =
  githubUserInformation;
