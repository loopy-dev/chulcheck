interface UserInterface {
  id: number;
  username: string;
  password: string;
  token: string;
}

export type UserResponse = Pick<UserInterface, 'id' | 'username' | 'token'>;
export type User = Pick<UserInterface, 'id' | 'username'>;
export type UserSigninFormType = Pick<UserInterface, 'username' | 'password'>;

export interface Attendance {
  id: number;
  user: string;

  /**
   * timestamp is ISOString.
   * ex) timestamp: "2022-11-01T02:28:08.561197Z"
   */
  timestamp: string;
}

export type AttendanceResponse =
  | Pick<Attendance, 'id' | 'timestamp'> & { user: User };
