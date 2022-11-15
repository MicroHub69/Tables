
import styled from "styled-components";
import { Imgs } from "../../../assets/image/Imgs";
import TransactionCollectionData from './TransactionCollectionsData.json'
import { SVGs } from "../../../assets/svgs/SVGs";


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

//   .reason {
//     width: 128px;
//     height: 24px;
//     background: #F2F6FF;
//     border: 1px solid #2D4BF3;
//     border-radius: 5px;
//     padding: 4px 8px;

//   }
  .acct-number {
    font-family: 'Satoshi';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #545454;
  }

  .acct-price {
    font-family: 'Satoshi';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #545454;
  }
  .acct {
    margin-top: 10px;
    font-family: 'Satoshi';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #545454;
 
  }
   .util-acct {
     margin-top: 10px;
     font-family: 'Satoshi';
     font-style: normal;
     font-weight: 300;
     font-size: 16px;
     line-height: 19px;
     color: #545454;
     
  }

  .util-payment-method {
      
    font-family: 'Satoshi';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 5px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* Grey/1 */
    
    color: #111111;
   
}
    
  .btn {
    margin-top: 25px;
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

const TransactionCollection = () => {

  const datatableUsers = TransactionCollectionData;



  const PerData = () => {
    return (
      <TableFrame>
        <div className="team-members">
          <div className="Utility_table">
                {datatableUsers
                  .map((data) => {
                    return (
                        <div className="utils" key={data.id}>

                            <div className="util-payment-method">{data.payment_method}</div>
                        
                          <div className="reason">
                            <img src={SVGs.ResidenceSvg} alt="" />
                          </div>
                                <div className="acct">
                                    Access Bank: <span className="acct-number">{data.acct_details} </span>
                                </div>
                           <div className="util-acct">
                                Price:  <span className="acct-price">{data.price} </span>
                          </div>
                          <div className="btn">
                            <span className="edit-btn" >Edit</span>
                            <span className="del-btn" >Delete</span>
                           </div>
                       
                    
                    </div>   
                    );
                  })}
           
          </div>
          
        </div>
      </TableFrame>
    );
  };
  return (
    <section className="leads_cards">
      <div className="lead-tt">
        <PerData />
      </div>
    </section>
  );
};

export default TransactionCollection;