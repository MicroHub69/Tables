import React, { useState } from "react";
import TransactionCollectModalData from "./TransactionCollectModalData.json";

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

function TransactionCollectModal() {
  const [events, setEvents] = useState(
    TransactionCollectModalData.slice(0, 20)
  );

  const displayEvents = events.map((event) => {
    const {
      id,
      row_number,
      collection_name,
      frequency,
      target,
      due_date,
      bank_name,
      account,
      amount,
    } = event;

    return (
      <tr>
        <td>
          <div>{row_number}.</div>
        </td>

        <td className="emergency-row">
          <div> {collection_name} </div>
        </td>
        <td>{frequency}</td>
        <td>{target}</td>
        <td>
          <p>{due_date}</p>
        </td>
        <td>
          <p>{bank_name}</p>
        </td>
        <td>{account}</td>
        <td>{amount}</td>

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
            <h1>Transaction Collection List</h1>
            <div className="emergency_table">
              <table>
                <thead>
                  <tr className="emergency-table-row">
                    <th></th>
                    <th>Collection Name</th>
                    <th>Frequency</th>
                    <th>Target</th>
                    <th>Due Date</th>
                    <th>Bank Name</th>
                    <th>Account</th>
                    <th>Amount</th>
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

export default TransactionCollectModal;

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
