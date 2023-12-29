import { TypedDocumentNode } from "@apollo/client";
import request, { RequestDocument, Variables } from "graphql-request";

const CAVE_API_URL = "http://localhost:1337/graphql";

export const apiFetcher = (
  query: RequestDocument | TypedDocumentNode<unknown, Variables>
) => request(CAVE_API_URL, query);
