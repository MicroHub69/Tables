import React from "react";
import styled from "styled-components";
import { Imgs } from "../assets/image/Imgs";
// import CheckBoxes from "../components/Forms/Checkboxes";

const Unsubscribe = () => {
  return (
    <UnsubscribeContainer>
      <UnsubscribeDetails>
        <ContainerImage>
          <Image src={Imgs.unsubscribePng} />
        </ContainerImage>

        <UnsubscribeTextContainer>
          <UnsubscribeHeader>It's sad to see you go.</UnsubscribeHeader>
          <UnsubscribeParagraph>
            You have been unsubscribed from our blog. Please do take a few
            seconds to tell us your reason.
          </UnsubscribeParagraph>
          <ul>
            <li>
              <input type="checkbox" id="vehicle1" className="checkmark" />
              <label for="vehicle1">The email content is not Interesting</label>
            </li>
            <li>
              <input type="checkbox" id="vehicle1" className="checkmark" />
              <label for="vehicle1">The email content is not relevant</label>
            </li>

            <li>
              <input type="checkbox" id="vehicle1" className="checkmark" />
              <label for="vehicle1">I get too many news emails from you.</label>
            </li>
            <li>
              <input type="checkbox" id="vehicle1" className="checkmark" />
              <label for="vehicle1">Others (please explain below)</label>
            </li>
          </ul>

          <div className="input-wrapper">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="How can we help?"
            ></textarea>
          </div>
          <button type="submit" className="important-btn">
            Unsubscribe
          </button>
        </UnsubscribeTextContainer>
      </UnsubscribeDetails>
    </UnsubscribeContainer>
  );
};

export default Unsubscribe;

const UnsubscribeContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  box-sizing: border-box;
  width: 914px;
  height: 500px;
  //   left: 263px;
  left: 220px;
  top: 80px;
  background: #ffffff;
  border: 1px solid rgba(44, 51, 58, 0.2);
  border-radius: 5px;

  input .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #00838f;
    border-radius: 100%;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: "Nunito";
    align-items: center;
    padding: 18px 64px;
    gap: 8px;
    width: 213px;
    height: 55px;
    background: #00838f;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    font-size: 18px;
    color: #f9fafb;
    line-height: 24px;
    cursor: pointer;
  }

  textarea {
    box-sizing: border-box;
    font-family: "Nunito";
    margin-top: 8px;
    margin-left: 20px;
    margin-bottom: 24px;
    width: 370px;
    height: 118px;
    background: #ffffff;
    border: 1px solid rgba(44, 51, 58, 0.2);
    border-radius: 5px;

    // font-weight: 400;
    // font-size: 16px;
  }

  textarea::placeholder {
    padding-left: 10px;
    padding-top: 10px;
    color: #2c333a;
    font-size: 0.9rem;
    text-transform: uppercase;
  }

  @media (min-width: 414px) {
    min-width: 289px;
    justfiy-content: center;
  }

  label {
    font-family: "Nunito";
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #2c333a;
    margin: 12px;
  }
`;

const UnsubscribeTextContainer = styled.div`
  //   display: flex;
  //   margin-bottom: 100px;
  //   margin-top: 60px;

  @media (max-width: 414px) {
    margin-left: 40px;
    align-items: center;
    display: block;
    justify-content: center;
  }
`;

const UnsubscribeDetails = styled.div`
  display: flex;
  align-items: center;
  justfiy-content: center;

  @media (max-width: 414px) {
    width: 109px;
    display: flex;
    flex-wrap: wrap;
  }
`;
const UnsubscribeHeader = styled.h1`
  width: 200px;
  height: 31px;
  font-weight: 600;
  font-size: 20px;
  font-family: "Nunito";
  line-height: 30px;
  display: flex;
  text-align: center;
  color: #2c333a;
`;

const ContainerImage = styled.div`
  margin: 47px 0px 0px 69px;
  width: 362px;
  height: 362px;
`;

const Image = styled.img`
  width: 262px;
  height: 262px;

  @media (max-width: 414px) {
    width: 260px;
    height: 289px;
    padding: 20px;
    margin-left: -12px;
  }

  //   @media (min-width: 1024px) {
  //     width: 200px;
  //     height: 200px;
  //   }
`;

const UnsubscribeParagraph = styled.p`
  width: 398px;
  height: 44px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  font-family: "Nunito";
  display: flex;
  align-items: center;
  letter-spacing: 0.025em;
  color: #2c333a;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
