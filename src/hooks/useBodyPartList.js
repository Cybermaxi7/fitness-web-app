import { useQuery } from "@tanstack/react-query";
import { fetchBodyParts } from "../services/services";

export default function useBodyPartList() {
    const {
        data,
        error,
        isFetching: isLoading,
    } = useQuery({
        queryKey: ["bodyPartLists"],
        queryFn: fetchBodyParts,
        staleTime: 3600000, // 1 hour in milliseconds
        cacheTime: 7200000, // 2 hours in milliseconds
    });
    if (error) {
        console.error(error);
    }
    return { data, isLoading };
}
