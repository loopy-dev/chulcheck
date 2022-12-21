import { useState, useCallback } from 'react';
import {
  getOrganizationList,
  getJoinedOrganization as getJoinedOrganizationAPI,
  getOrganization,
  joinOrganization as joinOrganizationApi,
} from '../../api/organization';
import {
  formatOrganizationList,
  formatOrganization,
} from './useOrganization.helper';
import type { Organization } from '../../api/types';

const useOrganization = () => {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [organization, setOrganization] = useState<Organization>();

  const searchOrganizations = async (query: string) => {
    if (!query) return;

    try {
      const data = await getOrganizationList(query);
      setOrganizations(formatOrganizationList(data));
    } catch (error) {
      console.error(error);
    }
  };

  const getJoinedOrganizations = useCallback(async () => {
    try {
      const data = await getJoinedOrganizationAPI();
      setOrganizations(formatOrganizationList(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getOrganizationDetail = useCallback(async (id: number) => {
    const data = await getOrganization(id);
    setOrganization(formatOrganization(data));
  }, []);

  const joinOrganization = useCallback(async (id: number) => {
    const data = await joinOrganizationApi(id);
    setOrganization(formatOrganization(data));
  }, []);

  return {
    organizations,
    organization,
    getOrganizationDetail,
    setOrganizations,
    searchOrganizations,
    getJoinedOrganizations,
    joinOrganization,
  };
};

export default useOrganization;
