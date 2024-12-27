/* Import */
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
/* Component */
import Header from "./components/common/Header";
import HeaderPreview from "./components/common/HeaderPreview";
import View from "./components/page/View";
import Main from "./components/main/Main";
import Management from "./components/page/Management";
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
      <Route path="/" element={<Navigate to="/Produce" replace />} />

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
    </Routes>
  );
};

export default Routers;
