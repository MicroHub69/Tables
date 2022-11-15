import React, { useState } from "react";
import Pagination from "rc-pagination";
import ResidenceData from "./ResidenceData.json";
import SampleDrop from "../../../components/Select";
import styled from "styled-components";
import SelectDrop from "../../../components/Select";
import { SVGs } from "../../../assets/svgs/SVGs";

const TableFrame = styled.div`

.scrollable_table {
  font-family: 'Satoshi';
  margin-left: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 121%;
  display: flex;
  align-items: center;
  /* Grey/2 */ 
  color: #545454;
}

.scrollable_table tr {
  margin-left: 20px;
}

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
    width: 134px;
    height: 23px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: -0.06em;

    /* Grey/1 */
    color: #111111;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;

  }
  .team-members {
    // display: flex;
    // justify-content: space-between;
    margin-top: 40px;
  }

  .contact {
    margin: 5px;
    display: flex;
  }
  .contact a{
    margin: 8px;
    width: 30px;
    height: 30px;
   
  }
 
  
`;

const ResidenceTable = () => {
  const [selected, setSelected] = useState("Fiter by:");
  // SEARCH INPUT
  const [searchInput, setSearchInput] = useState("");
  // ======STATES FOR PAGINATION
  const datatableUsers = ResidenceData;
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
        <div>
          <div className="scrollable_table">
            <table>
              <thead>
                <tr>
                 
                  <th>Residence ID</th>
                  <th>Address</th>
                  <th>Contact</th>
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
                        <td>
                          <div className="img-avatar">
                            <img
                              src="https://images.unsplash.com/photo-1667222886295-72267cdc99ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                              alt=""
                            />
                            <div className="user-name">
                              {data.last_name} {data.first_name}
                            </div>
                              <p> {data.id}</p>
                          </div>
                        </td>

                        <td>{data.adress}</td>

                        <td className="contact_data">
                          <div className="contact">
                            <a href="tel:5554280940" >
                              <img src={SVGs.Call} alt=""  />
                            </a>
                            <a a href = "mailto:abc@example.com?subject = Feedback&body = Message" >
                              <img src={SVGs.Email} alt=""  />
                            </a>                   
                          </div>                       
                        
                          </td>
                        <td className="resume_data"> <SelectDrop /> </td>
                        
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <Pagination
            key={ResidenceData.id}
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
        <h3>Residence Table Admin</h3>
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

export default ResidenceTable;
