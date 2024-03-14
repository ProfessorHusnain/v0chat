type CommonFileds = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
};
export type User = {
  name: string;
  email: string;
  password?: string;
  repeatPassword?: string;
} & CommonFileds;

// todo: role: "user" | "admin";
