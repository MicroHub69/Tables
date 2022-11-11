import React, { useEffect, useState } from "react";
import Pagination from "rc-pagination";
import ActivityData from "./ActivityData.json";
import SampleDrop from "../../components/Select";
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

const ActivityTable = () => {
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
        <div>
          <div className="activity_table">
            <table>
              <thead>
<<<<<<< HEAD
                <tr className="activity_heading">
              
=======
                <tr>
>>>>>>> 8f7310c75b08a40472741231aec99888be70c476
                  <th>Residence Name</th>
                  <th>Email</th>
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
<<<<<<< HEAD
                      // <div className="utils" key={data.id}>
                      <tr>                
                        <td>                     
=======
                      <tr>
                        <td>
                          <div className="img-avatar">
>>>>>>> 8f7310c75b08a40472741231aec99888be70c476
                            <div className="user-name">
                              {item.last_name} {item.first_name}
                            </div>
                        </td>

<<<<<<< HEAD
                        <td>{data.email}</td>                  
                        <td className="residence-address">
                          {data.address}                       
                          </td>
                        <td >
                           <div className="date-time">
                               {data.date}
                            </div>
                           <div className="activity-time">
                               {data.time}
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
                       
=======
                        <td>{item.email}</td>

                        <td className="resume_data">{item["Access code"]}</td>
                        <td className="resume_data">{item.address}</td>
                        <td className="resume_data">{item.dateTime}</td>
                        <td className="resume_data">
                          <SwitchBtn>
                            <input
                              value=""
                              style={{ margin: "20px" }}
                              type="checkbox"
                              id={item.id}
                              onChange={handleChange}
                              checked={isChecked}
                            />

                            <label class="switch" htmlFor={item.id}></label>
                          </SwitchBtn>{" "}
                          {/* <SelectDrop
                            selected={selected}
                            setSelected={setSelected}
                          />{" "} */}
                        </td>
>>>>>>> 8f7310c75b08a40472741231aec99888be70c476
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
        <SampleDrop selected={selected} setSelected={setSelected} />
        <PerData />
      </div>
    </section>
  );
};

export default ActivityTable;


