export default function Loader({ one, two }) {
    if (one) {
        return (
            <div className="flex items-center justify-center w-full h-screen z-[120] ">
                <p className="loader-1 font-open"></p>
            </div>
        );
    } else if (two) {
        return (
            <div className="flex items-center justify-center w-full h-screen z-[120] ">
                <p className="loader-2 font-open"></p>
            </div>
        );
    } else {
        return (
            <div className="flex items-center justify-center w-full h-screen z-[120] ">
                <p className="loader font-open"></p>
            </div>
        );
    }
}
