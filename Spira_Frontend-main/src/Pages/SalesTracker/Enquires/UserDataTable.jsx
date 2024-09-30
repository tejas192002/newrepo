import React from "react";
import sorting from "../../../Assets/EnquiresIcon/column-sorting.svg";
import upArr from "../../../Assets/EnquiresIcon/upArr.svg";
import downArr from "../../../Assets/EnquiresIcon/downArr.svg";
import Hide from "../../../Assets/EnquiresIcon/Hide.svg";
import { Dropdown, Space } from "antd";

const UserDataTable = ({ handleOpen, currentItems }) => {
  const tableHeader = [
    "Refrence Number",
    "Sales Person",
    // "Sales Mail",
    // "Sales Mail time",
    "Client Person Name",
    "Client Email",
    // "Client Email Recieve time",
    "Client cc",
    "Subject",
    "Ack email time",
    "Quotation recieve Time",
    "Due Date",
  ];
  const items = [
    {
      key: "1",
      label: (
        <div className="sort">
          <img src={upArr} alt="icon" />
          <span> Sort Ascending</span>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="sort">
          <img src={downArr} alt="icon" />
          <span> Sort Descending</span>
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "3",
      label: (
        <div className="sort">
          <img src={Hide} alt="icon" />
          <span> Hide Column</span>
        </div>
      ),
    },
  ];
  const Dropdowndata = () => (
    <Dropdown
      menu={{
        items,
      }}
    // trigger={["click"]}
    >
      <button
        onClick={(e) => e.preventDefault()}
        style={{ backgroundColor: "inherit", border: "none" }}
      >
        <Space>
          <img src={sorting} alt="icon" />
        </Space>
      </button>
    </Dropdown>
  );
  return (
    <div className="table-wrap">
      <table className="tables">
        <thead className="table-head">
          <tr>
            {tableHeader.map((heading, i) => (
              <th key={i}>
                <span>
                  <p>{heading}</p>
                  <Dropdowndata />
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {currentItems &&
            currentItems.map((user, index) => (
              <tr key={index} onClick={() => handleOpen(user)}>
                <td>
                  <p>{user.reference_number}</p>
                </td>
                <td>
                  <p>{user.sales_person_name}</p>
                </td>
                {/* <td>
                  <p>{user.sales_mail}</p>
                </td>
                <td>
                  <p>{user.sales_email_time.slice(5, -6)}</p>
                </td> */}
                <td>
                  <p>{user.client_person_name}</p>
                </td>
                <td>
                  <p>{user.client_email}</p>
                </td>
                {/* <td>
                  <p>{user.client_email_time}</p>
                </td> */}
                <td>
                  <p>
                    {user.client_cc.trim() === "{}" ? (
                      <span className="empty">Empty</span>
                    ) : (
                      user.client_cc
                    )}
                  </p>
                </td>
                <td>
                  <p>{user.client_subject}</p>
                </td>
                <td>
                  <p>
                    {user.ack_time.trim() === "" ? (
                      <span className="empty">Empty</span>
                    ) : (
                      user.ack_time
                    )}
                  </p>
                </td>
                <td>
                  <p>
                    {user.quotation_time.trim() === "" ? (
                      <span className="empty">Empty</span>
                    ) : (
                      user.quotation_time
                    )}
                  </p>
                </td>
                <td>
                  <p>{user.reminder_status ? user.reminder_status : "Empty"}</p>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDataTable;

/* <th>
              <span>
                <p>Refrence Number </p> <img src={sorting} alt="icon" />
              </span>
            </th>
            <th>
              <p>Sales Person</p>
            </th>
            <th>
              <p>Sales Mail</p>
            </th>
            <th>
              <p>Sales Mail time</p>
            </th>
            <th>
              <p>Client Person Name</p>
            </th>
            <th>
              <p>Client Email</p>
            </th>
            <th>
              <p>Client Email Recieve time</p>
            </th>
            <th>
              <p>Client cc</p>
            </th>
            <th>
              <p>Subject</p>
            </th>

            <th>
              <p>Ack email time</p>
            </th>
            <th>
              <p>Quatation recieve Time</p>
            </th>
            <th>
              <p>Due Date</p>
            </th> */
