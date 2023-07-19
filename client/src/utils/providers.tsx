"use client";

import { ChildrenType } from "@/utils/types";
import { QueryClientProvider, QueryClient } from "react-query";

export const ReactQueryProvider = ( { children }: ChildrenType ) => {
    const client = new QueryClient();
    return (
        <QueryClientProvider client={client}>
            { 
                children
            }
        </QueryClientProvider>
    )
}