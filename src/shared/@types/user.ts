
export type User = {
    uuid?: string;
    username?: string;
    email?: string;
    password?: string;
    tasks?: string | null;
    projects?: string | null;
    token?: string | null;
  };