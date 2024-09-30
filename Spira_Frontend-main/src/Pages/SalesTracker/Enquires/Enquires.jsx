import React, { useState, useEffect } from "react";
import "./Enquires.css";
import EditPopup from "./EditPopup";
import PaginatedItems from "./Pagination";
import axios from "axios";
import _nonAuthHttp from "../../../Utils/Api/_nonAuthHttp";
import down from "../../../Assets/EnquiresIcon/down.svg";
import filter from "../../../Assets/EnquiresIcon/filter.svg";
import sideBarClose from "../../../Assets/SidebarClose.svg";
const _AuthHttp = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

_AuthHttp.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  return config;
});

const Enquires = () => {
  const [open, setOpen] = React.useState(true);
  const [users, setUsers] = useState("");
  const [fetchDatas, setFetchDatas] = useState(true);
  const handleDelete = async (reference_number, index) => {
    try {
      const accessToken = localStorage.getItem("jwtToken");

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      await _AuthHttp.post(
        `/api/delete`,
        { refrence_num: reference_number },
        { headers }
      );

      setUsers((prevUsers) =>
        prevUsers.filter(
          (userdata) => userdata.refrence_num !== reference_number
        )
      );
      setFetchDatas(!fetchDatas);
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  const handleUpdate = async (ref_num, updatedData) => {
    try {
      const accessToken = localStorage.getItem("jwtToken");

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      await _nonAuthHttp.put(`/api/update/${ref_num}`, updatedData, {
        headers,
      });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.refrence_num === ref_num ? { ...user, ...updatedData } : user
        )
      );
      setFetchDatas(!fetchDatas);
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("jwtToken");

        const headers = {
          Authorization: `Bearer ${accessToken}`,
        };

        const response = await _nonAuthHttp.get("/api/read", { headers });
        console.log(response.data, "responseresponse");

        setUsers(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchDatas]);

  const [selectedUser, setSelectedUser] = useState();
  const handleOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  return (
    <section>
      <div className="close-sidebar">
        <img src={sideBarClose} alt="icon" />
      </div>
      <div className="container1">
        <div className="container-head">
          <p className="title">All Enquires</p>
          <span>
            <img src={filter} alt="icon" /> <p>All</p>
            <img src={down} alt="icon" />
          </span>
        </div>
        <PaginatedItems
          itemsPerPage={7}
          handleOpen={handleOpen}
          open={open}
          users={users}
        />
        {open && selectedUser && (
          <EditPopup
            open={open}
            user={selectedUser}
            handleClose={handleClose}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        )}
      </div>
    </section>
  );
};

export default Enquires;

// Dummy user data
// const [users, setUsers] = useState([
//     {
//         id: 1,
//         title: "Stark Industries",
//         owner: "Tony Stark ",
//         currentPhase: "Schedule demo ",
//         industry: "Technology",
//         dueDate: "",
//         assignees: "",
//         labels: "Hot",
//         timeinphase: "2 days",
//         timeinpipe: "2days",
//         lastupdated: "01/05/2024 6:34 AM",
//         username: "user1",
//     },
//     {
//         id: 2,
//         title: "Umberla Corporation",
//         owner: "Tony Stark",
//         currentPhase: "Schedule demo",
//         industry: "Technology",
//         dueDate: "",
//         assignees: "",
//         labels: "Warm",
//         timeinphase: "2 days",
//         timeinpipe: "2days",
//         lastupdated: "01/05/2024 6:34 AM",
//         username: "user1",
//     },
//     {
//         id: 3,
//         title: "Wonka Industries",
//         owner: "Tony Stark",
//         currentPhase: "Qualification",
//         industry: "Technology",
//         dueDate: "",
//         assignees: "",
//         labels: "Hot",
//         timeinphase: "2 days",
//         timeinpipe: "2days",
//         lastupdated: "01/05/2024 6:34 AM",
//         username: "user1",
//     },
//     {
//         id: 4,
//         title: "Stark Industries",
//         owner: "Tony Stark",
//         currentPhase: "Schedule demo",
//         industry: "Technology",
//         dueDate: "",
//         assignees: "",
//         labels: "Hot",
//         timeinphase: "2 days",
//         timeinpipe: "2days",
//         lastupdated: "01/05/2024 6:34 AM",
//         username: "user1",
//     },
//     {
//         id: 5,
//         title: "Stark Industries",
//         owner: "Tony Stark",
//         currentPhase: "First Contact",
//         industry: "Technology",
//         dueDate: "",
//         assignees: "",
//         labels: "Hot",
//         timeinphase: "2 days",
//         timeinpipe: "2days",
//         lastupdated: "01/05/2024 6:34 AM",
//         username: "user1",
//     },
//     {
//         id: 6,
//         title: "Stark Industries",
//         owner: "Tony Stark",
//         currentPhase: "Schedule demo",
//         industry: "Technology",
//         dueDate: "",
//         assignees: "",
//         labels: "Cold",
//         timeinphase: "2 days",
//         timeinpipe: "2days",
//         lastupdated: "01/05/2024 6:34 AM",
//         username: "user1",
//     },
//     {
//         id: 7,
//         title: "Stark Industries",
//         owner: "Tony Stark",
//         currentPhase: "Schedule demo",
//         industry: "Technology",
//         dueDate: "",
//         assignees: "",
//         labels: "Hot",
//         timeinphase: "2 days",
//         timeinpipe: "2days",
//         lastupdated: "01/05/2024 6:34 AM",
//         username: "user1",
//     },
//     {
//         id: 8,
//         title: "Central Perk",
//         owner: "Tony Stark",
//         currentPhase: "Schedule demo",
//         industry: "Technology",
//         dueDate: "",
//         assignees: "",
//         labels: "Hot",
//         timeinphase: "2 days",
//         timeinpipe: "2days",
//         lastupdated: "01/05/2024 6:34 AM",
//         username: "user1",
//     },
//     {
//         id: 9,
//         title: "Stark Industries",
//         owner: "Tony Stark",
//         currentPhase: "Poor Quality Prospect",
//         industry: "Technology",
//         dueDate: "",
//         assignees: "",
//         labels: "Hot",
//         timeinphase: "2 days",
//         timeinpipe: "2days",
//         lastupdated: "01/05/2024 6:34 AM",
//         username: "user1",
//     },
//     {
//         id: 10,
//         title: "Stark Industries",
//         owner: "Stark",
//         currentPhase: "Schedule demo",
//         industry: "Technology",
//         dueDate: "",
//         assignees: "",
//         labels: "Warm",
//         timeinphase: "2 days",
//         timeinpipe: "2days",
//         lastupdated: "01/05/2024 6:34 AM",
//         username: "user1",
//     },
//     {
//         id: 11,
//         title: "Stark Industries",
//         owner: "Tony Stark",
//         currentPhase: "Schedule demo",
//         industry: "Technology",
//         dueDate: "",
//         assignees: "",
//         labels: "Hot",
//         timeinphase: "2 days",
//         timeinpipe: "2days",
//         lastupdated: "01/05/2024 6:34 AM",
//         username: "user1",
//     },
//     {
//         id: 12,
//         title: "Stark Industries",
//         owner: "Tony Stark",
//         currentPhase: "Schedule demo",
//         industry: "Technology",
//         dueDate: "",
//         assignees: "",
//         labels: "Hot",
//         timeinphase: "2 days",
//         timeinpipe: "2days",
//         lastupdated: "01/05/2024 6:34 AM",
//         username: "user1",
//     },
//     {
//         id: 13,
//         title: "Stark Industries",
//         owner: "Tony Stark",
//         currentPhase: "Schedule demo",
//         industry: "Technology",
//         dueDate: "",
//         assignees: "",
//         labels: "Hot",
//         timeinphase: "2 days",
//         timeinpipe: "2days",
//         lastupdated: "01/05/2024 6:34 AM",
//         username: "user1",
//     },
//     {
//         id: 14,
//         title: "Stark Industries",
//         owner: "Tony Stark",
//         currentPhase: "Schedule demo",
//         industry: "Technology",
//         dueDate: "",
//         assignees: "",
//         labels: "Cold",
//         timeinphase: "2 days",
//         timeinpipe: "2days",
//         lastupdated: "01/05/2024 6:34 AM",
//         username: "user1",
//     },
//     {
//         id: 15,
//         title: "Stark Industries",
//         owner: "Tony Stark",
//         currentPhase: "Schedule demo",
//         industry: "Technology",
//         dueDate: "",
//         assignees: "",
//         labels: "Hot",
//         timeinphase: "2 days",
//         timeinpipe: "2days",
//         lastupdated: "01/05/2024 6:34 AM",
//         username: "user1",
//     },
//     {
//         id: 16,
//         title: "Stark Industries",
//         owner: "Tony Stark",
//         currentPhase: "Schedule demo",
//         industry: "Technology",
//         dueDate: "",
//         assignees: "",
//         labels: "Hot",
//         timeinphase: "2 days",
//         timeinpipe: "2days",
//         lastupdated: "01/05/2024 6:34 AM",
//         username: "user1",
//     },
// ]);
