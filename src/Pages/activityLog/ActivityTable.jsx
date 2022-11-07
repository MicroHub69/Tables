import React, { useState } from "react";
import Pagination from "rc-pagination";
import ActivityData from "./ActivityData.json";
import SampleDrop from "../../components/Select";
import styled from "styled-components";
import { SVGs } from "../../assets/svgs/SVGs";


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
    margin-top: 40px;
    width: 65%;
  }
  .team {
    display: flex;
    justify-content: space-between;
  }
  
`;

const ActivityTable = () => {
  const [selected, setSelected] = useState("Fiter by:");
  // SEARCH INPUT
  const [searchInput, setSearchInput] = useState("");
  // ======STATES FOR PAGINATION
  const datatableUsers = ActivityData;
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
                  {/* <th className="checkmarking"> */}
                    {/* CUSTOM CHECKBOX */}
                    {/* <div class="cntr">
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
                  </th> */}
                  <th>Residence Name</th>
                  <th>Email</th>
                  {/* <th>Acess Code</th> */}
                  <th>Residence Address</th>
                  <th>Date and Time</th>
                  <th>Action</th>
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
                        {/* <td className="checkmarking"> */}
                          {/* CUSTOM CHECKBOX */}
                          {/* <div class="cntr">
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
                          </div> */}
                        {/* </td> */}
                        <td>
                          {/* <div className="img-avatar">                     
                          </div> */}
                            <div className="user-name">
                              {data.last_name} {data.first_name}
                            </div>
                        </td>

                        <td>{data.email}</td>

                        {/* <td className="resume_data">
                          {data["Access code"]}                       
                          </td> */}
                        <td className="resume_data">
                          {data.address}                       
                          </td>
                        <td className="resume_data">
                          {data.date}                       
                          </td>
                        <td className="resume_data"> <img src={SVGs.ActivitySvg} alt="" /> </td>
                       
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <Pagination
            key={ActivityData.id}
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
        <h3>Activity Log</h3>
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
        <SampleDrop selected={selected} setSelected={setSelected} />
        <PerData />
      </div>
    </section>
  );
};

export default ActivityTable;


