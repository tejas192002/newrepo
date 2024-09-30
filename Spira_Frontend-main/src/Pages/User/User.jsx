import React, { useEffect, useState } from "react";
import './user.css'
import _nonAuthHttp from "../../Utils/Api/_nonAuthHttp";

const User = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('jwtToken');
        const headers = {
          Authorization: `Bearer ${accessToken}`,
        };

        const response = await _nonAuthHttp.get("/api/get_users", { headers });
        const userLists = response.data.Output.users.users;
        setUserList(userLists);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="container1">
        <div className="container-head">
          <p className="title">All Enquires</p>
          <span>
            <input type="text" placeholder="Search User" />
            <select name="" id="">
              <option value="">All</option>
              <option value="">2</option>
            </select>
            <button>Add new user</button>

          </span>
        </div>
        <div className="table-wrap">
          <table className="tables">
            <thead className="table-head">
              <tr>
                <th><p>Name</p></th>
                <th><p>email</p></th>
                <th><p>Role Name</p></th>
                <th><p>Role</p></th>
                <th><p>Created Date</p></th>
                <th><p>Last Login</p></th>
              </tr>
            </thead>
            <tbody className="table-body">
              {userList.map((user, index) => (
                <tr key={index}>
                  <td><p>{user.user}</p></td>
                  <td><p>{user.email}</p></td>
                  <td><p>{user.role_name}</p></td>
                  <td><p>{user.control}</p></td>
                  <td><p>{user.created_date}</p></td>
                  <td><p>{user.last_login}</p></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default User;
