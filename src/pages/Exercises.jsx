import { useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Image from "../components/Image";
import useExercises from "../hooks/useExercises";
import FilterOperation from "../ui/FilterOperation";
import Loader from "../ui/Loader";
import {useQueryContext} from "../context/QueryContext";
import SearchResult from "../components/SearchResult";
import ExercisesContainer from "../ui/ExercisesContainer";
export default function Exercises() {
    const {query} = useQueryContext()
   

    console.log(query);
    if (query) return <SearchResult />

    return (
      <ExercisesContainer />
    );
}
