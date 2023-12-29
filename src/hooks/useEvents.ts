import useSWR from "swr";
import { apiFetcher } from "@/services/fetcher";
import { EventsDataSchema } from "@/schemas/eventSchema";
import useSWRImmutable from 'swr/immutable'

const GRAPHQL_EVENT_QUERY = `{
    events {
    data {
      id
      attributes {
        description
        title
        date
        image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
  }`;

export const useEvents = () => {
  const { data, error, isLoading } = useSWRImmutable(GRAPHQL_EVENT_QUERY, apiFetcher);

  // Validate data with Zod
  const validationResult = EventsDataSchema.safeParse(data);

  if (!validationResult.success) {
    // Look for errors and return the corresponding error message
    console.error(validationResult.error);
    return { data: null, isLoading, error: validationResult.error };
  }

  // If the validation is successful, return the actual data
  return { data: validationResult.data, isLoading, error };
};
