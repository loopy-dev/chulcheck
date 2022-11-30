import { OrganizationResponse, Organization } from '../../api/types';

const formatOrganization = (
  organization: OrganizationResponse[]
): Organization[] =>
  organization.map<Organization>((response) => ({
    ...response,
    createdAt: response.created_at,
    updatedAt: response.updated_at,
  }));

export default formatOrganization;
