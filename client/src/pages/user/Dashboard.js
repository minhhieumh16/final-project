import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import "../../styles/DashboardStyles.css";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="conatainer-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="page-content page-container" id="page-content">
              <div className="row container d-flex justify-content-center">
                <div className="">
                  <div className="card-dashboard user-card-full">
                    <div className="row m-l-0 m-r-0">
                      <div className="col-sm-4 bg-c-lite-green user-profile">
                        <div className="card-block text-center text-white">
                          <div className="m-b-25">
                            <img
                              src="https://img.icons8.com/bubbles/100/000000/user.png"
                              className="img-radius"
                              alt="User-Profile-Image"
                            />
                          </div>
                          <h6 className="f-w-600">{auth?.user?.name}</h6>
                          <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="card-block">
                          <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                            Information
                          </h6>
                          <div className="row">
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Email</p>
                              <h6 className="text-muted f-w-400">
                                {auth?.user?.email}
                              </h6>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Phone</p>
                              <h6 className="text-muted f-w-400">
                                {auth?.user?.phone}
                              </h6>
                            </div>
                            <div className="col-sm-12">
                              <p className="m-b-10 f-w-600">Address</p>
                              <h6 className="text-muted f-w-400">
                                {auth?.user?.address}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
