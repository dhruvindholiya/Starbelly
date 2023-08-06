import { Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import { Provider } from "react-redux";
import { configureStore } from "./user/redux/store";
import PrivateRoute from "./routes/PrivateRoutes";
import { MenuFilterProvider } from "./user/context/reducer/MenuFilter.Context";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <MenuFilterProvider>
        <Routes>
          <Route path="/*" element={<UserRoutes />} />
          <Route path="/admin/*" element={<PrivateRoute />}>
            <Route path="*" element={<AdminRoutes />} />
          </Route>
        </Routes>
      </MenuFilterProvider>
    </Provider>
  );
}

export default App;
