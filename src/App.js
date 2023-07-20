import { Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import { Provider } from "react-redux";
import { configureStore } from "./user/redux/store";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/*" element={<UserRoutes />} />
      </Routes>
    </Provider>
  );
}

export default App;
