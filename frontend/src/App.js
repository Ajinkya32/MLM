import "./App.css";
import Header from "./components/common/header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";

// Dashboard imports
import MemberLogin from "./pages/loginSignup/MemberLogin";
import MemberRegister from "./pages/loginSignup/MemberRegister";
import Genealogy from "./pages/genealogy/Genealogy";
import IncentiveFromReferencesHistory from "./pages/incentiveHistory/IncentiveFromReferencesHistory";
import ReferredMembers from "./pages/referredMembers/ReferredMembers";
import UserList from "./pages/users/userList/UserList";
import User from "./pages/users/user/User";
import NewUser from "./pages/users/newUser/NewUser";
import MemberList from "./pages/members/memberList/MemberList";
import Member from "./pages/members/member/Member";
import NewMember from "./pages/members/newMember/NewMember";
import ProductList from "./pages/products/productList/ProductList";
import Product from "./pages/products/product/Product";
import NewProduct from "./pages/products/newProduct/NewProduct";
import NetworkAnalytics from "./pages/networkAnalytics/NetworkAnalytics";

import AdminRoute from "./components/adminComponents/AdminRoutes";
import MemberRoutes from "./components/memberComponents/MemberRoutes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSession } from "./slices/sessionSlice";
import { getGenealogy, getAnalyticsData } from "./slices/userSlice";
import { getAdminGenealogy, getAnalyticsDataAdmin } from "./slices/adminSlice";
import Dashboard from "./pages/dashboard/Dashboard";
import IncentiveHistoryAdmin from "./pages/incentiveHistory/IncentiveHistoryAdmin";
import WorkingPlan from "./pages/dashboard/WorkingPlan";
import NonWorkingIncentiveHistory from "./pages/incentiveHistory/NonWorkingIncentiveHistory";
import LeadershipRewards from "./pages/incentiveHistory/LeadershipRewards";
import NonWorkingRewards from "./pages/incentiveHistory/NonWorkingRewards";
import NonWorkingPlan from "./pages/dashboard/NonWorkingPlan";
import LeadershipRewardsPlan from "./pages/dashboard/LeadershipRewardsPlan";
import ProfilePage from "./pages/dashboard/ProfilePage";
import Videos from "./pages/dashboard/Videos";
import AddVideos from "./pages/dashboard/AddVideos";
import BusinessPlan from "./components/businessPlan/BusinessPlan";
import NonWorkingIncentiveHistoryAdmin from "./pages/incentiveHistory/NonWorkingIncentiveHistoryAdmin";
import LeadershipRewardsAdmin from "./pages/incentiveHistory/LeadershipRewardsAdmin";
import Terms from "./pages/Terms";

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.sessionSlice);

  useEffect(() => {
    dispatch(getSession());
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getGenealogy());
      dispatch(getAnalyticsData());
      dispatch(getAnalyticsDataAdmin());
      dispatch(getAdminGenealogy());
    }
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/courses" element={<CourseHome />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/journal" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/login" element={<MemberLogin />} />
        <Route path="/register" element={<MemberRegister />} />
        <Route path="/businessPlan" element={<BusinessPlan />} />
        <Route path="/termsAndConditions" element={<Terms />} />

        <Route element={<MemberRoutes />}>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workingPlan" element={<WorkingPlan />} />
          <Route path="/nonWorkingPlan" element={<NonWorkingPlan />} />
          <Route path="/leadershipRewardsPlan" element={<LeadershipRewardsPlan />} />
          <Route path="/genealogy" element={<Genealogy />} />
          <Route path="/referencesIncentiveHistory" element={<IncentiveFromReferencesHistory />} />
          <Route path="/nonWorkingPlanIncentiveHistory" element={<NonWorkingIncentiveHistory />} />
          <Route path="/leadershipRewards" element={<LeadershipRewards />} />
          <Route path="/nonWorkingRewards" element={<NonWorkingRewards />} />
          <Route path="/referredMembers" element={<ReferredMembers />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/members" element={<MemberList />} />

          <Route path="/incentiveReports" element={<IncentiveHistoryAdmin />} />
          <Route path="/nonWorkingIncentiveReports" element={<NonWorkingIncentiveHistoryAdmin />} />
          <Route path="/leadershipRewardsAdmin" element={<LeadershipRewardsAdmin />} />

          <Route path="/member/:memberId" element={<Member />} />
          <Route path="/newMember" element={<NewMember />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/report" element={<NetworkAnalytics />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/courseVideos" element={<Videos />} />
          <Route path="/addVideos" element={<AddVideos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
