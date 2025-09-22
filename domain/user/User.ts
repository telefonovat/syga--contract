import { z } from 'zod';
import { SygaAlgorithmIdentifierSchema } from './SygaAlgorithm';

export const UserSchema = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string().optional(),
  algorithms: z.array(SygaAlgorithmIdentifierSchema),
  role: z.enum(['peasant', 'king']),
});

export type User = z.infer<typeof UserSchema>;
