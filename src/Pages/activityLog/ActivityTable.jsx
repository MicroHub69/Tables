import React, { useState } from "react";
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
        <div>
          <div className="activity_table">
            <table>
              <thead>
                <tr className="activity_heading">
              
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
                      val.name.toLowerCase().includes(searchInput.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .slice()
                  .map((data) => {
                    return (
                      // <div className="utils" key={data.id}>
                      <tr>                
                        <td>                     
                            <div className="user-name">
                              {data.last_name} {data.first_name}
                            </div>
                        </td>

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


