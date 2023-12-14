import { useQuery } from "@tanstack/react-query";
import { fetchSearchExercise } from "../services/services";

export default function useSearchExercises(query) {
    const {
        data,
        error,
        isFetching: isLoading,
    } = useQuery({
        queryKey: ["search-exercises", query],
        queryFn: () => fetchSearchExercise(query),
    });
    
    return { data, isLoading, error };
}
