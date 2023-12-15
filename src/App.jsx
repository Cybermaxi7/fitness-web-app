import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { QueryProvider } from "./context/QueryContext";
import Loader from "./ui/Loader";
const Homepage = lazy(() => import("./pages/Homepage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Exercises = lazy(() => import("./pages/Exercises"));
const Exercise = lazy(() => import("./pages/Exercise"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const SearchResults = lazy(() => import("./pages/SearchResults"));
const queryClient = new QueryClient();
export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <QueryProvider>
                <Router>
                    <Suspense fallback={<Loader />}>
                        <Routes>
                            <Route path="/" element={<AppLayout />}>
                                <Route index element={<Homepage />} />
                                <Route
                                    path="/exercises"
                                    element={<Exercises />}
                                />
                                <Route
                                    path="/exercise/:id"
                                    element={<Exercise />}
                                />
                                <Route
                                    path="/search"
                                    element={<SearchResults />}
                                />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                            </Route>
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </Router>
            </QueryProvider>
        </QueryClientProvider>
    );
}
