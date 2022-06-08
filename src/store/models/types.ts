export type User = {
  logged: boolean;
  loading: boolean;
  data: Array<{
    email: string;
    password: string;
  }>;
};
