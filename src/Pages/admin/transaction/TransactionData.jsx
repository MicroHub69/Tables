import React, { useState } from "react";
import Pagination from "rc-pagination";
import TransactionData from "./TrasactionData.json";
import styled from "styled-components";
import TransactionCollection from "./TransactionCollections";

const TableFrame = styled.div`
 
  .transaction-heading {
    font-family: 'Satoshi';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 121%;

    /* Grey/1 */

    color: #111111;
  }
  .data-zone {
    display: flex;
    align-items: center;
  }
  .zone-name {
    margin-left: 10px;
  }
  .transaction-container {
    margin-top: 40px;
  }
  
  .transaction-date {
    font-weight: bold;
  }

  .transaction-row {
    width: 100px;
    height: 18px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #545454;
  }
  .cntr {
    margin-left: 15px;
  }
  
`;

const TransactionTable = () => {
  const [selected, setSelected] = useState("Fiter by:");
  // SEARCH INPUT
  const [searchInput, setSearchInput] = useState("");
  // ======STATES FOR PAGINATION
  const datatableUsers = TransactionData;
  const [perPage, setPerPage] = useState(8);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(datatableUsers.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
    // Normally you should get the data from the server
    return datatableUsers.slice((current - 1) * pageSize, current * pageSize);
  };

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
  };

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <button>
          <i className="fa fa-angle-double-left"></i>
        </button>
      );
    }
    if (type === "next") {
      return (
        <button>
          <i className="fa fa-angle-double-right"></i>
        </button>
      );
    }
    return originalElement;
  };
  const PerData = () => {
    return (
      <TableFrame>
        <div className="transaction-container">
          <div className="scrollable_table">
            <table>
              <thead>

                <tr className="transaction-heading">
                <th className="checkmarking">
                    {/* CUSTOM CHECKBOX */}
                    <div class="cntr">
                      <label for="resume" class="label-cbx">
                        <input id="resume" type="checkbox" class="invisible" />
                        <div class="checkbox">
                          <svg width="20px" height="20px" viewBox="0 0 20 20">
                            <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                            <polyline points="4 11 8 15 16 6"></polyline>
                          </svg>
                        </div>
                      </label>
                    </div>
                  </th>

                  <th>Collection Name</th>
                  <th>Zone/Block</th>
                  <th>Collection ID</th>
                  <th>Collection Target</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {getData(current, size)
                  .filter((val) => {
                    if (searchInput === "") {
                      return val;
                    } else if (
                      val.name.toLowerCase().includes(searchInput.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .slice()
                  .map((data) => {
                    return (
                      <tr className="transaction-row">
                         <td className="checkmarking">
                          {/* CUSTOM CHECKBOX */}
                          <div class="cntr">
                            <label for={data.id} class="label-cbx">
                              <input
                                id={data.id}
                                type="checkbox"
                                class="invisible"
                              />
                              <div class="checkbox">
                                <svg
                                  width="20px"
                                  height="20px"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                                  <polyline points="4 11 8 15 16 6"></polyline>
                                </svg>
                              </div>
                            </label>
                          </div>
                        </td>

                       
                        <td>{data.collection_name}</td>
                        <td>
                          <div className="data-zone">                     
                            <div className="zone-name">
                              {data.zone} 
                            </div>
                          </div>
                        </td>


                        <td >
                          {data.collection}                       
                          </td>
                        <td>
                          {data.collection_target}                       
                          </td>
                        <td className="transaction-date">
                          {data.date}                       
                          </td>
                        <td>{data.amount} </td>
                       
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <Pagination
            key={TransactionData.id}
            className="pagination-data"
            // showTotal={(total, range) => `${range[0]}-${range[1]} / ${total}`}
            onChange={PaginationChange}
            total={datatableUsers.length}
            current={current}
            pageSize={size}
            showSizeChanger={false}
            itemRender={PrevNextArrow}
            onShowSizeChange={PerPageChange}
          />
        </div>
      </TableFrame>
    );
  };

  return (
    <section className="leads_cards">
      <div className="lead-tt">
        <h3>Transaction Details: Admin</h3>
        {/* <p>Manage What users can do or see in the project</p> */}
        <div className="fiterCase">
          <div class="search_set">
            <img src="https://www.svgrepo.com/show/13682/search.svg" alt="" />
            <input
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
              <TransactionCollection />

      <div className="">
        <PerData />
      </div>
    </section>
  );
};

export default TransactionTable;
