import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    sub?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }

  interface Session {
    user: User;
  }

  interface JWT {
    id: string;
    sub?: string;
    name?: string;
    email?: string;
  }
}
