import Filter from "../components/Filter";
import useBodyPartList from "../hooks/useBodyPartList";
import useTargetList from "../hooks/useTargetList";
import Spinner from "./Spinner";

export default function FilterOperation({ scrollToRef }) {
    const { data: parts, isLoading: isLoadingBodyPart } = useBodyPartList();
    const { data: targets, isLoading: isLoadingTargets } = useTargetList();
    return (
        <div className="flex flex-col gap-8">
            <div className="flex gap-2 items-center justify-center flex-col flex-wrap">
                <h2>Filter By BodyPart</h2>
                {parts ? (
                    <Filter
                        scrollToRef={scrollToRef}
                        filterField="bodyPart"
                        options={[
                            { value: "all", label: "All" },
                            ...parts.map((part) => ({
                                value: part,
                                label: part,
                            })),
                        ]}
                    />
                ) : (
                    <Spinner />
                )}
            </div>
            <div className="flex gap-2 items-center justify-center flex-col flex-wrap">
                <h2>Filter By Target</h2>
                {targets ? (
                    <Filter
                        scrollToRef={scrollToRef}
                        filterField="target"
                        options={[
                            { value: "all", label: "All" },
                            ...targets.map((target) => ({
                                value: target,
                                label: target,
                            })),
                        ]}
                    />
                ) : (
                    <Spinner />
                )}
            </div>
        </div>
    );
}
