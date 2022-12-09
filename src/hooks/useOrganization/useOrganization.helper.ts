import type { OrganizationResponse, Organization } from '../../api/types';

type FormatFunction = (response: OrganizationResponse) => Organization;

export const formatOrganization: FormatFunction = (response) => ({
  id: response.id,
  name: response.name,
  leader: response.leader,
  members: response.members,
  createdAt: response.created_at,
  updatedAt: response.updated_at,
});

export const formatOrganizationList = (
  organization: OrganizationResponse[]
): Organization[] =>
  organization.map<Organization>((response) => formatOrganization(response));
