export type Role = "ADMIN" | "MANAGER" | "EMPLOYEE";
export interface User {
  username: string;
  role: Role;
}
