import React, { useState } from "react";
import ListOfPenaltiesData from "../listOfPenalties/ListOfPenaltiesData.json";

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

function ListOfPenalties() {
  const [events, setEvents] = useState(ListOfPenaltiesData.slice(0, 20));

  const displayEvents = events.map((event) => {
    const { id, created_at, features, collection_name, row_number, due_date } =
      event;

    return (
      <tr>
        <td>
          <div>{row_number}.</div>
        </td>

        <td className="emergency-row">
          <div> {collection_name} </div>
        </td>

        <td>
          <p>{created_at}</p>
        </td>
        <td>
          <p>{features}</p>
        </td>
        <td>{due_date}</td>

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
            <h1> List Of Penalties </h1>
            <div className="emergency_table">
              <table>
                <thead>
                  <tr className="emergency-table-row">
                    <th></th>
                    <th>Collection Name</th>
                    <th>Created</th>
                    <th>Features</th>
                    <th>Due Date</th>
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

export default ListOfPenalties;
