import instance from './instance';
import { OrganizationResponse } from './types';

/**
 * @description
 * OrganizationList 데이터를 서버로부터 요청한다.
 * @param query 검색할 문자열. 전부 불러오려면 query를 입력하지 않는다.
 * @returns OrganizationList
 */
export const getOrganizationList = async (query?: string) => {
  try {
    const response = await instance.get<OrganizationResponse[]>(
      `/api/organizations${query ? `?q=${query}` : ''}`
    );

    return response.data;
  } catch {
    throw new Error('error occurred at getOrganizationList.');
  }
};

/**
 * @description
 * Organization deatil 데이터를 서버로부터 요청한다.
 * @param id Organization id
 * @returns Organization
 */
export const getOrganization = async (id: number) => {
  try {
    const response = await instance.get<OrganizationResponse>(
      `/api/organizations/${id}`
    );

    return response.data;
  } catch {
    throw new Error('error occurred at getOrganization.');
  }
};

export const createOrganization = async (name: string) => {
  try {
    const response = await instance.post<OrganizationResponse>(
      '/api/organizations',
      {
        name,
      }
    );

    return response.data;
  } catch {
    throw new Error('error occurred at createOrganization.');
  }
};
