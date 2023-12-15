import { useQuery } from "@tanstack/react-query";
import { fetchExercise } from "../services/services";

export default function useExercise(id) {
    const {
        data,
        error,
        isFetching: isLoading,
    } = useQuery({
        queryKey: ["exercise", id],
        queryFn: () => fetchExercise(id),
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
