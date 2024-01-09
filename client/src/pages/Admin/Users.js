import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import { useAuth } from "../../context/auth";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [auth, setAuth] = useAuth();

    //get all users
    const getAllUsers = async () =>{
      try {
        const{data} = await axios.get("/api/v1/auth/get-users");
        if(data?.succers) {
          setUsers(data);
        }
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
      if(auth?.token) getAllUsers();
    }, [auth?.token]);

  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Orders</h1>
            {users?.map((o, i) => {
              <div className="">
                <table className="table">
                  <thead>
                    <tr>
                        <th scope="col" className="col-header">
                          #
                        </th>
                        <th scope="col" className="col-header">
                          Name
                        </th>
                        <th scope="col" className="col-header">
                          Email
                        </th>
                        <th scope="col" className="col-header">
                          Contact
                        </th>
                        <th scope="col" className="col-header">
                          Address
                        </th>
                        <th scope="col" className="col-header">
                          Action
                        </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{i + 1}</td>

                    </tr>
                  </tbody>
                </table>
              </div>
            })}
              
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
