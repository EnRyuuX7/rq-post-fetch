import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import EmployeeList from "./components/EmployeeList";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";

const queryClient = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <ResponsiveDrawer />
                {/* <UserList /> */}
                <EmployeeList />
                <EmployeeForm />
            </div>

            <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
        </QueryClientProvider>
    );
}

export default App;
