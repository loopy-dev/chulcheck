export interface Attendence {
  id: number;
  createdAt: string;
}

const mockData: Attendence[] = [
  {
    id: 1,
    createdAt: '2022-10-01',
  },
  {
    id: 2,
    createdAt: '2022-10-02',
  },
  {
    id: 3,
    createdAt: '2022-10-03',
  },
  { id: 4, createdAt: '2022-10-04' },
  { id: 5, createdAt: '2022-10-05' },
  { id: 6, createdAt: '2022-10-06' },
  { id: 7, createdAt: '2022-10-07' },
  { id: 8, createdAt: '2022-10-08' },
  { id: 9, createdAt: '2022-10-09' },
];

export default mockData;
