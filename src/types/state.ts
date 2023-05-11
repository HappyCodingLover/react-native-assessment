export type AuthState = {
  auth: {
    userID: string;
    createdAt: string;
    updatedAt: string;
    email: string;
    phone: string;
    name: string;
    firstName: string;
    lastName: string;
    gender: string;
    dob: Date;
    thumbnail: string;
    pilotGoals: [];
    lastActive: {};
  };
  isAuthenticated: false;
};
