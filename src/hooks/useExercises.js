import { useQuery } from "@tanstack/react-query";
import { fetchExercises } from "../services/services";

export default function useExercises() {
    const {
        data,
        error,
        isFetching: isLoading,
    } = useQuery({
        queryKey: ["exercises"],
        queryFn: fetchExercises,
        staleTime: 3600000, // 1 hour in milliseconds
        cacheTime: 7200000, // 2 hours in milliseconds
        retry: 3,
        retryDelay: 1000,
    });
    if (error) {
        console.error(error);
    }
    return { data, isLoading };
}
