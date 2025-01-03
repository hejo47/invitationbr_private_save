/* Import */
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
/* Component */
import Header from "./components/common/Header";
import HeaderPreview from "./components/common/HeaderPreview";
import View from "./components/page/View";
import Main from "./components/main/Main";
import Management from "./components/page/Management";
import Join from "./components/page/Join";
import Login from "./components/page/Login";
import Find from "./components/page/Find";
import Modify from "./components/page/Modify";
import RemoveAccount from "./components/page/RemoveAccount";
import SubNotice from "./components/page/SubNotice";
import SubNoticeDetail from "./components/page/SubNoticeDetail";
import SubWedding from "./components/page/SubWedding";
import SubQna from "./components/page/SubQna";
import ManagementDetail from "./components/page/ManagementDetail";
import SubHeader from "./components/sub/SubHeader";
import SubFooter from "./components/sub/SubFooter";

const Routers = () => {
  const location = useLocation();

  return (
    <Routes>
      {/* Main Route */}
      <Route path="/" element={
        <Main></Main>
      } />

      {/* Produce Route */}
      <Route
        path="/Produce"
        element={
          <>
            {location.pathname === "/Produce/Preview" ? (
              <HeaderPreview />
            ) : (
              <Header />
            )}
            <View />
          </>
        }
      >
        <Route 
          path="Preview" 
          element={
            <>
              <View />
            </>
          } 
        />
      </Route>
      <Route
        path="/Manager"
        element={
          <>
            <SubHeader />
            {location.pathname === "/Manager/Detail" ? (
              <ManagementDetail />
            ) : (
              <Management />
            )}
            <SubFooter />
          </>
        }
      >
        <Route 
          path="Detail" 
          element={
            <>
              <SubHeader />
              <SubFooter />
            </>
          } 
        />
      </Route>
      <Route
        path="/Wedding"
        element={
          <>
            <SubHeader />
            <SubWedding />
            <SubFooter />
          </>
        }
      >
        <Route 
          path="Detail" 
          element={
            <>
              <SubHeader />
              <SubFooter />
            </>
          } 
        />
      </Route>
      <Route
        path="/Notice"
        element={
          <>
            <SubHeader />
            {location.pathname === "/Notice/Detail" ? (
              <SubNoticeDetail />
            ) : (
              <SubNotice />
            )}
            <SubFooter />
          </>
        }
      >
        <Route 
          path="Detail" 
          element={
            <>
              <SubHeader />
              <SubFooter />
            </>
          } 
        />
      </Route>
      <Route
        path="/Qna"
        element={
          <>
            <SubHeader />
              <SubQna />
            <SubFooter />
          </>
        }
      >
      </Route>

      <Route
        path="/Join"
        element={
          <>
            <SubHeader />
              <Join />
            <SubFooter />
          </>
        }
      >
      </Route>

      <Route
        path="/Login"
        element={
          <>
            <SubHeader />
              <Login />
            <SubFooter />
          </>
        }
      >
      </Route>

      <Route
        path="/Find"
        element={
          <>
            <SubHeader />
              <Find />
            <SubFooter />
          </>
        }
      >
      </Route>

      <Route
        path="/Modify"
        element={
          <>
            <SubHeader />
              <Modify />
            <SubFooter />
          </>
        }
      >
      </Route>

      <Route
        path="/RemoveAccount"
        element={
          <>
            <SubHeader />
              <RemoveAccount />
            <SubFooter />
          </>
        }
      >
      </Route>

    </Routes>
  );
};

export default Routers;
