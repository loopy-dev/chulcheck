import { rest } from 'msw';
import type { OrganizationResponse, User } from '../api/types';

const user1: User = {
  id: 1,
  username: 'user1',
};

const getJoinedOrganizationResponse: OrganizationResponse[] = [
  {
    id: 1,
    name: 'organization1',
    leader: user1,
    members: [user1],
    created_at: '2023-01-01',
    updated_at: '2023-01-01',
  },
  {
    id: 2,
    name: 'organization2',
    leader: user1,
    members: [user1],
    created_at: '2023-01-01',
    updated_at: '2023-01-01',
  },
];

const handlers = [
  // getJoinedOrganization
  rest.get('/api/organizations/joined', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getJoinedOrganizationResponse));
  }),
];

export default handlers;
