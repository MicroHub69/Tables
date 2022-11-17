import React, { useState } from "react";
// import EmergencyContactData from "../../admin/emergencyContactList/EmergencyContactData.json";
import EmergencyContactData from "../../Residence_tables/activityResidence/EmergencyContactData.json";

import styled from "styled-components";

const TableFrame = styled.div`
  .emergency_table {
    margin: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 121%;
    display: flex;
    align-items: center;
    color: #545454;
  }

  .date-time {
    width: 81px;
    height: 36px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #545454;
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

  table td {
    min-width: 60px;
  }

  .emergency-time {
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
        <td>
          <div>{row_number}.</div>
        </td>

        <td className="emergency-row">
          <div> {emergency_detail} </div>
        </td>
        <td>{type}</td>
        <td>{address}</td>
        <td>
          <div className="date-time">
            <p>{contact_phone}</p>
          </div>
          <div className="emergency-time">
            <p>{contact_email}</p>
          </div>
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
            <div className="emergency_table">
              <table>
                <thead>
                  <tr className="emergency-table-row">
                    <th></th>
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
