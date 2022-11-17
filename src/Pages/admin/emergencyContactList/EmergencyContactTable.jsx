import React, { useState } from "react";
// import EmergencyContactData from "../../admin/emergencyContactList/EmergencyContactData.json";
import EmergencyContactData from "../../Residence_tables/activityResidence/EmergencyContactData.json";
// import ActivityResidenceData from "../../Residence_tables/activityResidence/ActivityResidenceData.json";

import styled from "styled-components";

const TableFrame = styled.div`
  .activity_heading {
    font-family: "Satoshi";
    margin: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 121%;
    color: #545454;
  }
  .activity_table {
    font-family: "Satoshi";
    margin: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 121%;
    display: flex;
    align-items: center;

    /* Grey/2 */
    color: #545454;
  }
  .user-name {
    margin-left: 10px;
  }
  .team-members {
    margin-top: 40px;
    width: 65%;
  }
  .date-time {
    width: 81px;
    height: 36px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #545454;
  }

  .resume_data {
    margin: 15px;
    width: 32px;
    height: 18px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    letter-spacing: -0.06em;
  }
  .emergency-action {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .del {
    font-weight: 400;
    font-size: 16px;
    color: #ff6969;
    cursor: pointer;
  }
  .edit {
    font-weight: 400;
    font-size: 16px;
    color: #2d4bf3;
    cursor: pointer;
  }
  .emergency-row {
    display: flex;
    justify-content: space-around;
  }

  .img-entry {
    margin: 5px;
  }
  .activity-time {
    font-weight: 700;
  }
`;

function EmergencyContactTable() {
  const [events, setEvents] = useState(EmergencyContactData.slice(0, 20));

  const displayEvents = events.map((event) => {
    const {
      id,
      emergency_detail,
      row_number,
      type,
      address,
      contact_phone,
      contact_email,
    } = event;

    return (
      <tr>
        {/* <td className="checkmarking"> */}

        {/* </td> */}

        <td className="emergency-row">
          <div>{row_number}</div>
          <div> {emergency_detail} </div>
        </td>
        <td>{type}</td>
        <td>{address}</td>
        <td>
          <div className="date-time">{contact_phone}</div>
          <div className="activity-time">{contact_email}</div>
        </td>
        <td>
          <div className="emergency-action ">
            <span className="edit">Edit</span>
            <span className="del">Delete</span>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <>
      <section className="change_ratio">
        <TableFrame>
          <div>
            <div className="activity_table">
              <table>
                <thead>
                  <tr>
                    <th>Emergency Detail</th>
                    <th>Type</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody> {displayEvents} </tbody>
              </table>
            </div>
          </div>
        </TableFrame>
      </section>
    </>
  );
}

export default EmergencyContactTable;

// let Wrapper = styled.section`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;

//   @media (max-width: 400px) {
//     .eachAdminBlog {
//       width: 100%;
//     }
//   }
//   @media (min-width: 720px) {
//     .perComponent {
//       width: 48.5%;
//     }
//   }
//   @media (min-width: 1200px) {
//     .perComponent {
//       width: 32.5%;
//     }
//   }

//   }
// `;
