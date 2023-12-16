export default function Footer() {
    return (
        <footer className="mt-auto  bg-white h-16 text-stone-800 flex flex-col items-center justify-center">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Exercise Hub. All rights
                    reserved.
                </p>
              
            </div>
        </footer>
    );
}
