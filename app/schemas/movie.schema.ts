import { z } from "zod";

export const movieSchema = z.object({
  _id: z.string(),
  title: z.string().min(3).max(255),
  description: z.string().min(3).max(255),
  createdAt: z.string(),
});

export const createMovieSchema = movieSchema.omit({
  _id: true,
  createdAt: true,
});

export type Movie = z.infer<typeof movieSchema>;
