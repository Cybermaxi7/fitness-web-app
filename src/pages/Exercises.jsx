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
