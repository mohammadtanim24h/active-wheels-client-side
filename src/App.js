import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Navbar from "./Pages/Shared/Navbar";
import NotFound from "./Pages/Shared/NotFound";
import SignUp from "./Pages/SignUp/SignUp";
import { Toaster } from "react-hot-toast";
import Purchase from "./Pages/Purchase/Purchase";
import RequireAuth from "./Pages/Shared/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import AddPart from "./Pages/Dashboard/AddPart/AddPart";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import Blogs from "./Pages/Blogs/Blogs";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import ManageParts from "./Pages/Dashboard/ManageParts/ManageParts";
import UpdateAdditionalInfo from "./Pages/Dashboard/MyProfile/UpdateAdditionalInfo/UpdateAdditionalInfo";
import RequireAdmin from "./Pages/Shared/RequireAdmin";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import Payment from "./Pages/Dashboard/Payment/Payment";

function App() {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                <Route
                    path="/my-portfolio"
                    element={<MyPortfolio></MyPortfolio>}
                ></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
                <Route
                    path="/update-additional-info"
                    element={
                        <RequireAuth>
                            <UpdateAdditionalInfo></UpdateAdditionalInfo>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/purchase/:id"
                    element={
                        <RequireAuth>
                            <Purchase></Purchase>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard></Dashboard>
                        </RequireAuth>
                    }
                >
                    <Route
                        path="my-orders"
                        element={<MyOrders></MyOrders>}
                    ></Route>
                    <Route
                        path="payment/:id"
                        element={<Payment></Payment>}
                    ></Route>
                    <Route
                        path="add-review"
                        element={<AddReview></AddReview>}
                    ></Route>
                    <Route
                        path="my-profile"
                        element={<MyProfile></MyProfile>}
                    ></Route>
                    <Route
                        path="add-part"
                        element={
                            <RequireAdmin>
                                <AddPart></AddPart>
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="manage-parts"
                        element={
                            <RequireAdmin>
                                <ManageParts></ManageParts>
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="make-admin"
                        element={
                            <RequireAdmin>
                                <MakeAdmin></MakeAdmin>
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="manage-orders"
                        element={
                            <RequireAdmin>
                                <ManageOrders></ManageOrders>
                            </RequireAdmin>
                        }
                    ></Route>
                </Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Toaster></Toaster>
        </div>
    );
}

export default App;
