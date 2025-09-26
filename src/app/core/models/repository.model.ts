export interface Owner {
  login: string;
  avatarUrl: string;
}

export interface Repository {
  name: string;
  fullName: string;
  htmlUrl: string;
  description: string | null;
  owner: Owner;
}
