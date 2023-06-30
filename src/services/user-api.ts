import { appService } from './api';
import { IGitHubUser } from '../types/services/IUser';

export const githubUserInformation = appService.injectEndpoints({
  endpoints: (build) => ({
    getGithubUserInfo: build.query<IGitHubUser, void>({
      query: () => '/users/john-smilga',
      providesTags: ['Users'],
    }),
  }),
});

export const { useGetGithubUserInfoQuery } = githubUserInformation;
