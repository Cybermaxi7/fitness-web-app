// import { useQuery } from "@tanstack/react-query";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchExercises } from "../services/services";
// import { setExercises } from "../store/exercisesSlice";

// export default function useExercises() {
//     const dispatch = useDispatch();
//     const exercisesInStore = useSelector((store) => store.data);
//     const {
//         data,
//         error,
//         isFetching: isLoading,
//     } = useQuery({
//         queryKey: ["exercises"],
//         queryFn: fetchExercises,
//         staleTime: Infinity,
//         cacheTime: Infinity,
//         retry: 3,
//         retryDelay: 1000,
//         enabled: !exercisesInStore.length,
//     });

//     if (error) {
//         console.error(error);
//     }
//     // Only update the store if the data has changed
//   if (data && JSON.stringify(data) !== JSON.stringify(exercisesInStore)) {
//     dispatch(setExercises(data));
//   }
//     return { data: data || exercisesInStore, isLoading };
// }

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercises } from "../services/services";
import { setExercises } from "../store/exercisesSlice";

// Simple array equality check
const areArraysEqual = (arr1, arr2) =>
    arr1.length === arr2.length &&
    arr1.every((item, index) => item === arr2[index]);

export default function useExercises() {
    const dispatch = useDispatch();
    const exercisesInStore = useSelector((store) => store.data);

    const {
        data,
        error,
        isFetching: isLoading,
    } = useQuery({
        queryKey: ["exercises"],
        queryFn: fetchExercises,
        retry: 3,
        retryDelay: 1000,
        enabled: exercisesInStore.data.length === 0,
    });
    console.log(exercisesInStore)
    console.log(data)

    useEffect(() => {
        // Check if data is not null and arrays are not equal before dispatching
        if (data && !areArraysEqual(data, exercisesInStore)) {
            dispatch(setExercises(data));
        }
    }, [data, exercisesInStore, dispatch]);

    return { exercisesInStore, isLoading, error };
}
