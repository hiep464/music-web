import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./route";
import DefaultLayout from "./Layout/DefaultLayout";
import { Fragment } from "react";
import GlobalStyles from "./components/GlobalStyles";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                        const Page = route.element;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (!route.layout) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <GlobalStyles>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </GlobalStyles>
                                }
                            />
                        );
                    })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
