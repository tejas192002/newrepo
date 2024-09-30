import React, { useState } from "react";
import { Modal } from "antd";
import Attached from "./../../../Assets/PopIcon/Attached.svg";
import Document from "./../../../Assets/PopIcon/Document.svg";
import Email from "./../../../Assets/PopIcon/Email.svg";
import Pricetag from "./../../../Assets/PopIcon/Price tag.svg";
import Recruitment from "./../../../Assets/PopIcon/Recruitment.svg";

const EditPopup = ({ user, handleClose, open, handleDelete, handleUpdate }) => {
  const [userData, setUserData] = useState({
    reference_number: user.reference_number,
    sales_person_name: user.sales_person_name,
    sales_mail: user.sales_mail,
    client_person_name: user.client_person_name,
    client_email: user.client_email,
    ack_time: user.ack_time,
    quotation_time: user.quotation_time,
    client_cc: user.client_cc,
    client_subject: user.client_subject,
  });
  const handleUpdateClick = () => {
    const updatedData = {
      reference_number: userData.reference_number,
      sales_person_name: userData.sales_person_name,
      sales_mail: userData.sales_mail,
      client_person_name: userData.client_person_name,
      client_email: userData.client_email,
      // ack_time: userData.ack_time,
      // quotation_time: userData.quotation_time,
      client_cc: userData.client_cc,
      client_subject: userData.client_subject,
    };

    handleUpdate(user.reference_number, updatedData);
  };

  return (
    <>
      <Modal
        title={" "}
        centered
        open={open}
        // onOk={() => setOpen(true)}
        onCancel={handleClose}
        width={1000}
      >
        <div className="pop" style={{ display: "flex" }}>
          <div className="popup-left">
            <div className="actions">
              <div>
                <img src={Recruitment} alt="icon" />
                <p>New Lead</p>
              </div>
              <div>
                <img src={Attached} alt="icon" />
                <p>Attachments</p>
              </div>
              <div>
                <img src={Document} alt="icon" />
                <p>Checklists</p>
              </div>
              <div>
                <img src={Document} alt="icon" />
                <p>Pdf</p>
              </div>
              <div>
                <img src={Email} alt="icon" />
                <p>Email</p>
              </div>
              <div>
                <img src={Pricetag} alt="icon" />
                <p>Sales Pipeline</p>
              </div>
            </div>
            <div>
              <p>Internal Refrence Number </p>
              <input
                value={userData.reference_number}
                onChange={(e) =>
                  setUserData({ ...userData, reference_number: e.target.value })
                }
              />
            </div>{" "}
            <div>
              <p>Sales Person Name</p>
              <input
                value={userData.sales_person_name}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    sales_person_name: e.target.value,
                  })
                }
              />
            </div>{" "}
            <div>
              <p>Sales Person Mail</p>
              <input
                value={userData.sales_mail}
                onChange={(e) =>
                  setUserData({ ...userData, sales_mail: e.target.value })
                }
              />
            </div>
            {/* <div>
              <p>CRM Email Receive Time</p>
              <input
                value={userData.sales_mail}
                onChange={(e) =>
                  setUserData({ ...userData, sales_mail: e.target.value })
                }
              />
            </div> */}
            <div>
              <p>Client Name</p>
              <input
                value={userData.client_person_name}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    client_person_name: e.target.value,
                  })
                }
              />
            </div>{" "}
            <div>
              <p>Client Email</p>
              <input
                value={userData.client_email}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    client_email: e.target.value,
                  })
                }
              />
            </div>{" "}
            <div>
              <p>Client CC</p>
              <input
                value={userData.client_cc}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    client_cc: e.target.value,
                  })
                }
              />
            </div>{" "}
            <div>
              <p>Subject</p>
              <input
                value={userData.client_subject}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    client_subject: e.target.value,
                  })
                }
              />
            </div>
            {/* <div>
              <p>Original Email Receive Time</p>
              <input value={userData.sales_email_time.slice(5, -6)} />
            </div> */}
          </div>
          <hr />
          <div className="popup-right">
            <div>
              <p>Ack Email Time</p>
              <input
                value={userData.ack_time}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    ack_time: e.target.value,
                  })
                }
                className="popup-right-input"
              />
            </div>
            <div>
              <p>Quotation receive Time</p>
              <input
                value={userData.quotation_time}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    quotation_time: e.target.value,
                  })
                }
                className="popup-right-input"
              />
            </div>
            <div>
              <p>Does the lead meet our client profile?</p>
              <div className="pop-radio">
                <span className="df" style={{ gap: "21px" }}>
                  <label>
                    <input type="radio" /> Yes
                  </label>
                  <label>
                    <input type="radio" /> No
                  </label>
                </span>
              </div>
            </div>
            <div>
              <p>Further information regarding this lead</p>
              <textarea
                className="further-input"
                placeholder="Type here..."
              ></textarea>
            </div>
            <div>
              <p>Activities</p>
              <input
                type="text"
                className="activity-input"
                placeholder="write your Comments"
              />
            </div>
            <div>
              <span className="df api-btn">
                <button onClick={() => handleDelete(user.reference_number)}>
                  Delete
                </button>
                <button onClick={handleUpdateClick}>Update</button>
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditPopup;
