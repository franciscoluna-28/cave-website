import { z } from 'zod';

// Individual event schema
const EventSchema = z.object({
  id: z.string(),
  attributes: z.object({
    date: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.object({
      data: z.object({
        attributes: z.object({
          url: z.string(),
        }),
      }),
    }),
  }),
});

// Event schema from Strapi
export const EventsDataSchema = z.object({
  events: z.object({
    data: z.array(EventSchema),
  }),
});

