import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./redux/actions/AuthActions";
import NotFoundPage from "./pages/NotFoundPage";
import MyInvoicesPage from "./pages/MyInvoicesPage";
import ProfilePage from "./pages/ProfilePage";
import VertifyPage from "./pages/VertifyPage";
import PrivateRoute from "./routes/PrivateRoute";
import PropertiesPage from "./pages/PropertiesPage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import UploadPhoto from "./pages/UploadInvoicePage";
import ConditionsPage from "./pages/ConditionsPage";
import PrivacyPage from "./pages/PrivacyPage";
import PaymentPage from "./pages/PaymentPage";
import MyInvoiceDetailPage from "./pages/MyInvoiceDetailPage";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [dispatch, auth.authenticate]);
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-invoices" element={<PrivateRoute><MyInvoicesPage /></PrivateRoute> } />
        <Route path="/upload-invoice" element={<PrivateRoute><UploadPhoto /></PrivateRoute> } />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/my-profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path="/verified/:email" element={<VertifyPage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/conditions" element={<ConditionsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/my-invoices/:invoiceId/details" element={<MyInvoiceDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
