import React, { useState } from "react";
import TransactionResidenceData from "./TrasactionResidenceData.json";
import { SVGs } from "../../../assets/svgs/SVGs";
import ReactPaginate from "react-paginate"; //  Using react-paginate from the react library
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
    font-weight: 700;
  }
  .team-members {
    margin-top: 40px;
    width: 65%;
  }

  .residence-address {
    width: 153px;
    height: 34px;
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 121%;
    /* or 17px */

    display: flex;
    align-items: center;

    /* Grey/2 */
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
  .transaction-account {
    font-weight: 700;
  }

  .transaction-purpose {
    font-weight: 700;
  }

  .action_data {
    margin: 20px 0;
    width: 32px;
    height: 10px;
    font-size: 16px;
    display: flex;
    // justify-content: space-between;
    align-items: center;
  }

  .img-action {
    margin: 20px 0;
    display: flex;
    align-itens: center;
    justify-content: space-between;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    border: 1px solid #2d4bf3;
    border-radius: 5px;
    padding: 8px;
    color: #2d4bf3;
    cursor: pointer;
  }

  .img-action a {
    margin-right: 8px;
    cursor: pointer;
  }
  .activity-time {
    font-weight: 700;
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

function ActivityResidence() {
  const [events, setEvents] = useState(TransactionResidenceData.slice(0, 20));
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
    const result = TransactionResidenceData.filter((curDate) => {
      return curDate.category === catItem;
    });
    setEvents(result);
  };

  const displayEvents = events
    .filter((event) => {
      if (searchTerm === "") {
        return event;
      } else if (
        event.residence_id.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return event;
      }
    })
    .slice(pagesVisited, pagesVisited + eventsPerPage)
    .map((event) => {
      const {
        id,
        transaction_id,
        bank,
        status,
        date,
        time,
        account,
        amount,
        purpose,
      } = event;

      return (
        <tr>
          <td>
            <div className="img-avatar">
              <div className="user-name">{transaction_id}</div>
            </div>
          </td>

          <td>{bank}</td>

          <td>
            <div className="date-time">{account}</div>
          </td>

          <td>
            <div className="transaction-account">{amount}</div>
          </td>
          <td>
            <div className="transaction-purpose">{purpose}</div>
          </td>
          <td>
            <div className="date-time">{date}</div>
            <div className="activity-time">{time}</div>
          </td>

          <td>
            <div className="date-time">{status}</div>
          </td>

          <td className="action_data">
            <div className="img-action">
              <a href="">
                <img src={SVGs.TransactionResidenceSvg} />
              </a>
              <div className="action-preview">Preview</div>
            </div>
          </td>
        </tr>
      );
    });

  // display items from 1 - 6

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
            Transaction table: Residence
            <div className="event-container">
              <HandleSearchAndTab>
                <div className="tabs">
                  <span
                    className={`tab ${checkActive(1, "active")}`}
                    onClick={() => handleClick(1)}
                  >
                    <button
                      onClick={(e) => setEvents(TransactionResidenceData)}
                    >
                      All
                    </button>
                  </span>

                  <span
                    className={`tab ${checkActive(2, "active")}`}
                    onClick={() => handleClick(2)}
                  >
                    <button
                      className="btn"
                      onClick={() => filterEvents("Pending")}
                    >
                      Pending
                    </button>
                  </span>
                  <span
                    className={`tab ${checkActive(3, "active")}`}
                    onClick={() => handleClick(3)}
                  >
                    <button
                      className="btn"
                      onClick={() => filterEvents("Resolved")}
                    >
                      Resolved
                    </button>
                  </span>
                </div>
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

                  {/* <FilterBy selected={selected} setSelected={setSelected} />
                <button
                  className="important-btn"
                  onClick={() => setOpenModal(true)}
                >
                  Create
                </button> */}
                </div>
              </HandleSearchAndTab>
            </div>
            <div className="panels">
              <div className={`panel ${checkActive(1, "active")}`}>
                <TableFrame>
                  <div>
                    <div className="activity_table">
                      <table>
                        <thead>
                          <tr>
                            <th>Trasaction ID</th>
                            <th>Bank</th>
                            <th>Account</th>
                            <th>Amount</th>
                            <th>Purpose</th>
                            <th>Date and Time</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody> {displayEvents} </tbody>
                      </table>
                    </div>
                  </div>
                </TableFrame>
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

export default ActivityResidence;

const Action = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Resolved", "Pending"];
  return (
    <div className="select_me">
      <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
        <input type="text" value={selected} readOnly />

        <img
          src="https://www.svgrepo.com/show/356209/chevron-down.svg"
          alt="v"
        />
      </div>
      {isActive && (
        <div className="select_content">
          {options.map((option, index) => (
            <div
              className="select_items"
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

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
