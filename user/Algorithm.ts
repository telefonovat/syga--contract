export interface Algorithm {
  uuid: string;
  title: string;
  code: string;
  tags: string[];
  isPublic: boolean;
  isStarred: boolean;
  upstreamAlgorithm?: {
    username: string;
    uuid: string;
  };
}
