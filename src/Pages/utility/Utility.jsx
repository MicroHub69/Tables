
import React, { useState } from "react";
import Pagination from "rc-pagination";
import UtilityData from '../utility/UtilityData.json'
import SampleDrop from "../../components/Select";
import styled from "styled-components";
import { Imgs } from "../../assets/image/Imgs";

const TableFrame = styled.div`

 
  .team-members {
    margin-top: 40px;
  
  }

  .Utility_table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 10px;

  }
  .utils {
    margin-bottom: 10px;
    height: 190px;
    padding: 16px;
    width: 100%;
    border: 1px solid #2D4BF3;
    border-radius: 5px;
    
  }

  .reason {
    width: 128px;
    height: 24px;
    background: #F2F6FF;
    border: 1px solid #2D4BF3;
    border-radius: 5px;
    padding: 4px 8px;

  }
  .price {
    margin-top: 10px;
  }
   .util-acct {
     margin-top: 10px;
     
  }

  .btn {
    margin-top: 15px;
    // left: 10px;
    margin: 8px;
    display: flex;
  

  }
  .del-btn {
    color: #FF6969;
    display: flex;
    align-items: center;
    width: 37px;
    height: 16px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    margin-left: 15px;
    cursor: pointer;
  }
  .edit-btn {
    color: #2D4BF3;
    // display: flex;
   
    cursor: pointer;
    width: 23px;
    height: 16px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
  }
  @media(min-width: 540px){
    .utils{
      width: 48%;
    }
  }
  @media(min-width: 1024px){
    .utils{
      width: 33%;
    }
  }
  @media(min-width: 1200px){
    .utils{
      width: 24%;
    }
  }
`;

const Utility = () => {
  const [selected, setSelected] = useState("Fiter by:");
  // SEARCH INPUT
  const [searchInput, setSearchInput] = useState("");
  // ======STATES FOR PAGINATION
  const datatableUsers = UtilityData;
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
          <div className="Utility_table">
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
                        <div className="utils">

                            <div className="util-payment">
                              <img src={Imgs.PayStack} alt="" />
                              <div className="reason">
                               <img src={Imgs.PowerAndElectricity} alt="" />
                              </div>
                               <div className="util-acct">
                                Price: {data.price}
                               <div className="price">
                               Access Bank: {data.acct_details}
                              </div>
                              </div>
                              <div className="btn">
                                <a className="edit-btn">Edit</a>
                                <a className="del-btn">Delete</a>
                               </div>
                            </div>
                        
                        </div>             
                    );
                  })}
           
           </div>
          <Pagination
            key={UtilityData.id}
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
        <h3>Utility</h3>
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

export default Utility;