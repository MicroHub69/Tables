import React, { useState } from "react";
import Pagination from "rc-pagination";
import TransactionData from "./TrasactionData.json";
// import SampleDrop from "../../components/Select";
import styled from "styled-components";
// import SelectDrop from "../../components/Select";

const TableFrame = styled.div`
  // background-color: yellow !important;
  .img-avatar img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }
  .img-avatar {
    display: flex;
    align-items: center;
  }
  .user-name {
    margin-left: 10px;
  }
  .team-members {
    // display: flex;
    // justify-content: space-between;
    margin-top: 40px;
  }
  .team {
    display: flex;
    justify-content: space-between;
  }
  .payment_reason {
    font-weight: bold;
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
        <div className="team-members">
          <div className="scrollable_table">
            <table>
              <thead>
                <tr>
               
                  <th>Residence Address</th>
                  <th>Residence Name</th>
                  <th>Mail</th>
                  <th>Payment Reason</th>
                  <th>Amount</th>
                  <th>Date</th>
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
                      <tr>
                       
                        <td>{data.address}</td>
                        <td>
                          <div className="img-avatar">                     
                            <div className="user-name">
                              {data.last_name} {data.first_name}
                            </div>
                          </div>
                        </td>


                        <td >
                          {data.email}                       
                          </td>
                        <td className="payment_reason">
                          {data.payment_reason}                       
                          </td>
                        <td className="resume_data">
                          {data.amount}                       
                          </td>
                        <td className="resume_data">{data.dateTime} </td>
                       
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
        <h3>Transaction Details</h3>
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

      <div className="">
        {/* <SampleDrop selected={selected} setSelected={setSelected} /> */}
        <PerData />
      </div>
    </section>
  );
};

export default TransactionTable;
