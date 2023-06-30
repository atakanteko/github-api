import { appService } from './api';

export const githubUserInformation = appService.injectEndpoints({
  endpoints: (build) => ({
    getGithubUserInfo: build.query<any, void>({
      query: () => '/users/john-smilga',
      providesTags: ['Users'],
    }),
  }),
});

export const { useGetGithubUserInfoQuery } = githubUserInformation;
