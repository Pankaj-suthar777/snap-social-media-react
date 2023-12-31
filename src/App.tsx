import { Route, Routes } from "react-router-dom";
import "./global.css";
import SigninForm from "./_auth/form/SigninForm";
import { Home } from "./_auth/_root/pages";
import SignupForm from "./_auth/form/SignupForm";
import AuthLayout from "./_auth/form/AuthLayout";
import RootLayout from "./_auth/_root/RootLayout";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public rote*/}
        <Route element={<AuthLayout></AuthLayout>}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private rote*/}
        <Route element={<RootLayout></RootLayout>}>
          <Route path="/sign-in" element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
