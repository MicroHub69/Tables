import React, { useEffect, useState } from "react";
import Pagination from "rc-pagination";
import ActivityDataExternal from "./ActivityDataExternal.json";
import styled from "styled-components";
import { SVGs } from "../../assets/svgs/SVGs";


const TableFrame = styled.div`
.activity_heading {
  font-family: 'Satoshi';
  margin: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 121%;
  color: #545454;

}
.activity_table {
  font-family: 'Satoshi';
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
  // .date-time {
  //     width: 81px;
  //     height: 36px;
  //     font-family: 'DM Sans';
  //     font-style: normal;
  //     font-weight: 400;
  //     font-size: 16px;
  //     line-height: 18px;
  //     display: flex;
  //     align-items: center;
  //     color: #545454;
  // }
  .residence-address {
      width: 153px;
      height: 34px;
      font-family: 'Satoshi';
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
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    letter-spacing: -0.06em;

  }
  
  .img-entry {
    margin: 5px;
    
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

const ActivityTableExternal = () => {
  const [selected, setSelected] = useState("Fiter by:");
  const [searchInput, setSearchInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event) => {
    setIsChecked(event.target.checked);

    // 👇️ this is the checkbox itself
    console.log(event.target);

    // 👇️ this is the checked value of the field
    console.log(event.target.checked);
  };

  // ======
  // 👇️ STATES FOR PAGINATION
  const datatableUsers = ActivityDataExternal;
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
          <div className="activity_table">
            <table>
              <thead>
                <tr className="activity_heading">
                </tr>
                <tr>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Access Codes</th>
                  <th>Access Types</th>
                  <th>Destination</th>
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
                      val.first_name
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .slice()
                  .map((item) => {
                    return (
                                        
                      <tr>
                        <td>
                          <div className="img-avatar">
                            <div className="user-name">
                              {item.last_name} {item.first_name}
                            </div>
                          </div>  
                        </td>

                        <td>{item.mobile}</td>                  
                        <td className="residence-address"> {item.access_code} </td>
                        <td>{item.access_type}</td>                  
                        <td>{item.destination}</td>                  
                        <td >
                           <div className="date-time">
                               {item.date}
                            </div>
                           <div className="activity-time">
                               {item.time}
                            </div>
                                                                    
                        </td>
                          
                        <td className="resume_data"> 
                            <div className="img-entry">
                             <img src={SVGs.ActivitySvg}  />
                            </div>
                            <div className="img-entry">
                             <img  src={SVGs.ActivityEntry} />
                            </div>
                        </td>
                       
                      </tr>                    
                    );
                  })}
              </tbody>
            </table>
          </div>
          <Pagination
            key={ActivityDataExternal.id}
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
        <h3>Activity Log: Admin</h3>
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
        <PerData />
      </div>
    </section>
  );
};

export default ActivityTableExternal;


