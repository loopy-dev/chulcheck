import { useState } from 'react';
import { getOrganizationList } from '../../api/organization';
import formatOrganization from './useOrganization.helper';
import type { Organization } from '../../api/types';

const useOrganization = () => {
  const [organizations, setOrganizations] = useState<Organization[]>([]);

  const searchOrganizations = async (query: string) => {
    if (!query) return;

    try {
      const data = await getOrganizationList(query);
      setOrganizations(formatOrganization(data));
    } catch (error) {
      console.error(error);
    }
  };

  return { organizations, setOrganizations, searchOrganizations };
};

export default useOrganization;
