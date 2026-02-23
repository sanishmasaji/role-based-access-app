import { User } from "../types/User";

export const mockUsers: Record<string, User> = {
  admin: {
    username: "admin",
    role: "ADMIN",
  },
  manager: {
    username: "manager",
    role: "MANAGER",
  },
  employee: {
    username: "employee",
    role: "EMPLOYEE",
  },
};
