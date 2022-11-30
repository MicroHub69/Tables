import React, { useState } from "react";
import CrmData from "../crmTables/crmData.json";
import ReactPaginate from "react-paginate"; //  Using react-paginate from the react library
import styled from "styled-components";

// const ActivityTableFrame = styled.div`
//   .activity_heading {
//     font-family: "Satoshi";
//     margin: 20px;
//     font-style: normal;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 121%;
//     color: #545454;
//   }
//   .activity_table {
//     font-family: "Satoshi";
//     margin: 20px;
//     font-style: normal;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 121%;
//     display: flex;
//     align-items: center;

//     /* Grey/2 */
//     color: #545454;
//   }
//   .user-name {
//     margin-left: 10px;
//   }
//   .team-members {
//     margin-top: 40px;
//     width: 65%;
//   }
//   // .date-time {
//   //     width: 81px;
//   //     height: 36px;
//   //     font-family: 'DM Sans';
//   //     font-style: normal;
//   //     font-weight: 400;
//   //     font-size: 16px;
//   //     line-height: 18px;
//   //     display: flex;
//   //     align-items: center;
//   //     color: #545454;
//   // }
//   .residence-address {
//     width: 153px;
//     height: 34px;
//     font-family: "Satoshi";
//     font-style: normal;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 121%;
//     /* or 17px */

//     display: flex;
//     align-items: center;

//     /* Grey/2 */
//     color: #545454;
//   }

//   .resume_data {
//     margin: 15px;
//     width: 32px;
//     height: 18px;
//     font-family: "DM Sans";
//     font-style: normal;
//     font-weight: 500;
//     font-size: 16px;
//     line-height: 18px;
//     display: flex;
//     // justify-content: space-between;
//     align-items: center;
//     letter-spacing: -0.06em;
//   }

//   .img-entry {
//     margin: 5px;
//   }
//   .activity-time {
//     font-weight: 700;
//   }
// `;

const CrmTableFrame = styled.div`
  // .emergency_table {
  //   margin: 20px;
  //   font-style: normal;
  //   font-weight: 400;
  //   font-size: 16px;
  //   line-height: 121%;
  //   display: flex;
  //   align-items: center;
  //   color: #545454;
  // }

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

  .leads-action {
    font-weight: 500;
    font-size: 16px;
    color: #545454;
  }
  .deactivate {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 8px;
    color: #ea5f5e;
    width: 110px;
    height: 40px;
    cursor: pointer;
    border: #ea5f5e;
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05),
      0px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }
  .activate {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 8px;
    color: #f9fafb;
    width: 110px;
    height: 40px;
    border: none;
    cursor: pointer;
    background: #009ba2;
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05),
      0px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }

  table td {
    min-width: 60px;
  }

  .crm-time {
    width: 69px;
    height: 36px;
    font-weight: 500;
    font-size: 16px;
    color: #545454;
  }
`;

const SwitchBtn = styled.div`
  .switch {
    display: inline-block;
    position: relative;
    width: 50px;
    height: 25px;
    border-radius: 20px;
    background: #dfd9ea;
    transition: background 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    vertical-align: middle;
    cursor: pointer;
  }
  input {
    display: none;
  }

  .switch::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 2px;
    width: 22px;
    height: 22px;
    background: #fafafa;
    border-radius: 50%;
    transition: left 0.28s cubic-bezier(0.4, 0, 0.2, 1),
      background 0.28s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .switch:active::before {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28),
      0 0 0 20px rgba(128, 128, 128, 0.1);
  }
  input:checked + .switch {
    background: rgba(45, 75, 243, 1);
  }
  input:checked + .switch::before {
    left: 27px;
    background: #fff;
  }
  input:checked + .switch:active::before {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28), 0 0 0 20px rgba(0, 150, 136, 0.2);
  }
`;

function CrmTables() {
  const [events, setEvents] = useState(CrmData.slice(0, 20));
  const [value, setvalue] = useState("");

  const [pageNumber, setPageNumber] = useState(0); // state representing the page we are on
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false); // state for Modal
  const [edit, setEdit] = useState(false); // state for Modal
  const [selected, setSelected] = useState("Filter");
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  /** ======to do
   * 1. Handle all form event with handleChange function
   * 2. No need for Filter as all blog display at one.Navigate using the pagination
   */

  const handleOnchange = (val) => setvalue(val);
  // const [ API, setData ] = useState(API)
  const eventsPerPage = 9;
  const pagesVisited = pageNumber * eventsPerPage;

  const filterEvents = (catItem) => {
    const result = CrmData.filter((curDate) => {
      return curDate.category === catItem;
    });
    setEvents(result);
  };

  const displayEvents = events
    .filter((event) => {
      if (searchTerm === "") {
        return event;
      } else if (
        event.first_name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return event;
      }
    })
    .slice(pagesVisited, pagesVisited + eventsPerPage)
    .map((event) => {
      const {
        id,
        first_name,
        last_name,
        email,
        location,
        last_login,
        time,
        leads_action,
      } = event;

      return (
        <tr>
          {/* <td>
          <div>{row_number}.</div>
        </td> */}

          <td className="emergency-row">
            <div> {first_name} </div>
          </td>

          <td>
            <p>{last_name}</p>
          </td>
          <td>
            <p>{email}</p>
          </td>
          <td>{location}</td>
          <td>
            <div className="date-time">{last_login}</div>
            <div className="crm-time">{time}</div>
          </td>
          {/* <td>{last_login}</td> */}
          <td className="leads-action">{leads_action}</td>

          <td>
            <div className="emergency-action ">
              <button className="activate">Activate</button>
              <button className="deactivate">Deactivate</button>
            </div>
          </td>
        </tr>
      );
    });

  // display items from 1 -6

  const pageCount = Math.ceil(events.length / eventsPerPage); // Rounding up

  const changePage = ({ selected }) => {
    // selected the number for the page we want to move too
    setPageNumber(selected);
  };

  return (
    <>
      <section className="change_ratio">
        <div className="selected_tab">
          <div className="dashboard_container">
            <div className="event-container">
              <HandleSearchAndTab>
                <div className="event-input">
                  <div class="search_set">
                    <img
                      src="https://www.svgrepo.com/show/13682/search.svg"
                      alt=""
                    />
                    <input
                      className="eventt"
                      type="text"
                      name="name"
                      placeholder="Search"
                      onChange={(event) => {
                        setSearchTerm(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </HandleSearchAndTab>
            </div>

            <div className="panels">
              <div className={`panel ${checkActive(1, "active")}`}>
                <CrmTableFrame>
                  <div>
                    <div className="activity_table">
                      <table>
                        <thead>
                          <tr className="emergency-table-row">
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>Last Login</th>
                            <th>Leads Actions</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>{displayEvents}</tbody>
                      </table>
                    </div>
                  </div>
                </CrmTableFrame>
              </div>
            </div>
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationButtons"}
              previousLinkClassName={"previousButton"}
              nextLinkClassName={"nextButton"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default CrmTables;

const HandleSearchAndTab = styled.section`
  .container {
    margin-bottom: 20px;
  }
  .normal_tab {
    background: transparent;
  }
  .event-input {
    max-width: 675px;
  }
  @media (min-width: 760px) {
    display: flex;
    justify-content: space-between;
    .event-input {
      display: flex;
      justify-content: space-between;
      //   width: 57%;
      .select_me {
        margin-left: 10px;
        width: auto !important;
      }
      button {
        margin-top: 0;
        height: 45px;
      }
      .event-select {
        width: 20%;
      }
    }
  }
  @media (max-width: 540px) {
    .event-input {
      .event-select {
        display: none;
      }
    }
  }
  .tabs {
    margin: 0;
    margin-bottom: 30px;
    .tab {
      margin: 0;
      height: 45px;
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0;
      min-width: 100px;
      padding: 5px 20px;
      text-align: center;
      margin-right: 15px;
      border-bottom: 3px solid #c0c0c0;
      button {
        margin: 0;
        padding: 0 !important;
        padding: 10px;
        //styleName: Web/Small Copy;
        font-size: 16px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
    .active {
      background: transparent;
      border-bottom: 3px solid #2d4bf3;
      button {
        color: #2d4bf3;
      }
    }
  }
  .normal_tab.add_tape {
    border-bottom: 2px solid yellow;
  }
`;
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

const Complaint = styled.div`
  background: #f6f6f6;
  border: 1px solid #e1e1e1;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  .handleFlow {
    height: 150px;
    overflow: auto;
    margin: 20px 0;
  }
  .top_level {
    display: flex;
    justify-content: space-between;
    h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 10px;
      margin-right: 10px;
    }
    .select_me {
      max-width: 150px;
      width: 100%;
    }
  }
  p {
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #999999;
  }
  .name_position {
    margin-top: 15px;
    display: flex;
    img {
      width: 35px;
      height: 35px;
      margin-right: 10px;
      object-fit: cover;
      border-radius: 50%;
    }
    h3 {
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      margin-top: 7px;
      span {
        font-weight: 700;
        color: #2d4bf3;
        font-size: 14px;
        margin-left: 10px;
        line-height: 13px;
        letter-spacing: -0.06em;
      }
    }
  }
`;

// import React, { useState } from "react";
// import CrmData from "../crmTables/crmData.json";
// import ReactPaginate from "react-paginate"; //  Using react-paginate from the react library

// import styled from "styled-components";

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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 8px;
    color: #ea5f5e;
    width: 110px;
    height: 40px;
    cursor: pointer;

    border: #ea5f5e;
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05),
      0px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }
  .edit {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 8px;
    color: #f9fafb;
    width: 110px;
    height: 40px;
    border: none;
    cursor: pointer;
    background: #009ba2;
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05),
      0px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }

  table td {
    min-width: 60px;
  }

  .emergency-time {
    font-weight: 700;
  }
`;

// function CrmTables() {
//   const [events, setEvents] = useState(CrmData.slice(0, 20));

//   const displayEvents = events.map((event) => {
//     const {
//       id,
//       first_name,
//       last_name,
//       email,
//       location,
//       last_login,
//       time,
//       leads_action,
//     } = event;

//     return (
//       <tr>
//         {/* <td>
//           <div>{row_number}.</div>
//         </td> */}

//         <td className="emergency-row">
//           <div> {first_name} </div>
//         </td>

//         <td>
//           <p>{last_name}</p>
//         </td>
//         <td>
//           <p>{email}</p>
//         </td>
//         <td>{location}</td>
//         <td>{last_login}</td>
//         <td>{leads_action}</td>

//         <td>
//           <div className="emergency-action ">
//             <button className="edit">Deactivate</button>
//             <button className="del">Activate</button>
//           </div>
//         </td>
//       </tr>
//     );
//   });

//   return (
//     <>
//       <section className="change_ratio">
//         <TableFrame>
//           <div>
//             <h1> Crm </h1>
//             <div className="emergency_table">
//               <table>
//                 <thead>
//                   <tr className="emergency-table-row">
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Email</th>
//                     <th>Location</th>
//                     <th>Last Login</th>
//                     <th>Leads Actions</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody> {displayEvents} </tbody>
//               </table>
//             </div>
//           </div>
//         </TableFrame>
//         <ReactPaginate
//               previousLabel={"<"}
//               nextLabel={">"}
//               pageCount={pageCount}
//               onPageChange={changePage}
//               containerClassName={"paginationButtons"}
//               previousLinkClassName={"previousButton"}
//               nextLinkClassName={"nextButton"}
//               disabledClassName={"paginationDisabled"}
//               activeClassName={"paginationActive"}
//             />
//       </section>
//     </>
//   );
// }

// export default CrmTables;
