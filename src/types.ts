import z from "zod"
import { EventsDataSchema } from "./schemas/eventSchema"

export type EventsData = z.infer<typeof EventsDataSchema> 
  
