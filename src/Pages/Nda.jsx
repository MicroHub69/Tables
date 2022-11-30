import React from "react";
import styled from "styled-components";

const Nda = () => {
  return (
    <Container>
      {/* Introduction */}
      <div className="nda-container">
        <h1 className="nda-header-text">NON-DISCLOSURE AGREEMENT</h1>
        <p className="nda-paragraph-1">
          THIS NON-DISCLOSURE AGREEMENT is made this Friday 22nd October, 2021
          between InstinctHub Techsavvy Ltd, a company incorporated under the
          laws of the Federal Republic of Nigeria and having the following
          office address:
        </p>

        <p className="nda-paragraph-2">
          <b>Instinct Hub Techsavvy Ltd </b>, of the following address: 58
          Ilupeju Street Dolphin Estate Ikoyi Lagos (Hereinafter referred to as
          <b>“the Disclosing Party”)</b> AND <b>The employee name goes here </b>{" "}
          of the following address: <b>Employee address goes here </b>
        </p>
        <p className="nda-paragraph-3">
          (hereinafter referred to as “the Receiving Party”), collectively
          referred to as the “Parties”. WHEREAS the Disclosing Party desires to
          disclose some confidential information relating to the Purpose of this
          Agreement to the Receiving Party and its Authorized Agents. Therefore,
          in consideration of mutual covenants and promises contained in this
          Agreement and the receipt of which is hereby acknowledged, the Parties
          agree as follows:
        </p>
      </div>

      {/* 1. Interpretation */}
      <div>
        <h1 className="nda-header-text-1">1. INTERPRETATION </h1>

        <p className="nda-paragraph">
          Unless otherwise defined herein, the following words and expressions
          shall have the <br /> following meaning:
        </p>
        <p className="nda-paragraph">
          “Confidential Information” includes all information or materials of
          whatever nature relating to the purpose disclosed by the Disclosing
          Party to the Receiving Party, any of its employees, professional
          advisers, agents or representatives which is directly or indirectly
          connected with the purpose for this relationship by the provision of
          any written material, or by any oral or written statement whatsoever
          to the Receiving Party, its employees, professional advisers, agents
          or representatives, but shall not include the following information or
          data:
        </p>
        <p className="nda-paragraph">
          <br />● which can be established by written records to be already
          known to the Receiving Party of <br /> the public at the time of the
          disclosure;
          <br />● which enters the public domain through no fault of the
          Receiving party; or
          <br />● that is required by law to be disclosed.
        </p>
        <p>
          <h4>The Confidential Information also include: </h4>

          <ul className="nda-paragraph">
            <li>1. All information contained in the records of meetings.</li>
            <li>
              2. All information obtained by the Receiving Party in the form of
              recordings, paperwork or any other physical format
            </li>
            <li>
              3. All agreements made between the Disclosing Party and Receiving
              Party and Authorized Agents.
            </li>
            <li>
              4. All information or material that has or could have commercial
              value or other utility in the business in which Disclosing Party
              is engaged
            </li>
            <li>
              5. All information about the codebase and security credentials.
            </li>
            <li>
              6. If Confidential Information is transmitted orally, the
              Disclosing Party shall promptly provide a writing indicating that
              such oral communication constituted Confidential Information.
            </li>
          </ul>
        </p>
        <p>
          <ul className="nda-paragraph">
            <li>
              a. “Disclosing Party” means the Party to this Agreement that
              discloses information, directly or indirectly, to the Receiving
              Party under or in anticipation of this Agreement.
            </li>
            <li>
              b. “Receiving Party” means the Party to this Agreement that
              receives Confidential Information directly or indirectly from the
              Disclosing Party.
            </li>
            <li>
              c. “Authorized Recipients” means agents of the Receiving Party who
              need to have access to the confidential information.
            </li>
            <li>
              d. “The Purpose” means the purpose for this agreement and this
              includes but is not limited to” Learning and Product Development.
            </li>
          </ul>
        </p>
      </div>

      {/* 2. Application and term of agreement */}
      <div>
        <h1 className="nda-header-text-1">
          2. APPLICATION AND TERM OF AGREEMENT{" "}
        </h1>
        <p className="nda-paragraph">
          This Agreement applies to all Confidential Information whether
          provided to the Receiving Party and the Authorized Recipients before,
          on or after the date of this Agreement and the obligations of the
          Receiving Party shall continue to be in force as a lifelong
          commitment.
        </p>
      </div>

      {/* 3. Confidentiality */}
      <div>
        <h1 className="nda-header-text-1">3. CONFIDENTIALITY OBLIGATIONS</h1>
        <p className="nda-paragraph">
          <ul>
            <li>
              1. The Receiving Party and its Authorized Recipients undertake to
              do the following:
            </li>
            <li>a. To keep the Confidential Information secret at all times</li>
            <li>
              b. Not to disclose the Confidential Information or allow it to be
              disclosed in whole or in part to any third party without the prior
              consent of the Disclosing Party; and
            </li>
            <li>
              c. Not to use the Confidentiality Information in whole or in part
              for any purpose except for the Purpose stated in this agreement.
            </li>
            <li>
              2. Receiving Party shall carefully restrict access to Confidential
              Information to employees, contractors and third parties as is
              reasonably required and shall require those persons to sign
              nondisclosure restrictions at least as protective as those in this
              Agreement.
            </li>

            <li>
              3. Receiving Party shall not, without the prior written approval
              of the Disclosing Party, use for Receiving Party’s own benefit,
              publish, copy, or otherwise disclose to others, or permit the use
              by others for their benefit or to the detriment of the Disclosing
              Party, any Confidential Information.
            </li>
          </ul>
        </p>
      </div>

      {/* 4. Ownership maintained */}
      <div>
        <h1 className="nda-header-text-1">4. OWNERSHIP MAINTAINED</h1>
        <p className="nda-paragraph">
          The Parties acknowledge and agree that any Confidential Information
          disclosed under this Agreement shall remain the exclusive property of
          the Disclosing Party. Nothing in this Agreement shall be constructed
          as granting intellectual property rights in the Confidential
          Information.
        </p>
      </div>

      {/* 5. Safeguard confidential information/property */}
      <div>
        <h1 className="nda-header-text-1">
          5. SAFEGUARD AND RETURN OF CONFIDENTIAL <br />
          INFORMATION AND PROPERTY
        </h1>
        <p className="nda-paragraph">
          The Receiving Party shall take reasonable care to ensure that all
          materials in the possession of the Receiving Party which contain the
          Confidential Information be kept and shall return, destroy, or
          otherwise deal with the said materials as directed by the disclosing
          party. At the Disclosing Party’s request, the Receiving party shall
          immediately return all tangible documents or products including
          copies, summaries or notes of the proprietary information which the
          Receiving Party and Authorized Recipients have received under this
          Agreement and which may be in the possession of the Receiving Party
          and the Authorized Recipients, including any copies made.
        </p>
      </div>

      {/* 6. Counterparts */}
      <div>
        <h1 className="nda-header-text-1">6. COUNTERPARTS</h1>
        <p className="nda-paragraph">
          This Agreement may be executed in several counterparts, all of which
          constitutes a single agreement between the Parties.
        </p>
      </div>

      <div className="btn-container">
        <button className="important-btn">I Agree</button>
      </div>
    </Container>
  );
};

export default Nda;

// Styled Components
const Container = styled.div`
  margin: 0px;
  padding: 0px;
  position: absolute;
  left: 60px;
  top: 50px;

  h4 {
    font-family: "Nunito";
    font-size: 18px;
    color: #2c333a;
  }
  .nda-header-text {
    font-family: "Nunito";
    left: 160px;
    font-weight: 700;
    font-size: 20px;
    color: #2c333a;
  }

  .nda-header-text-1 {
    font-family: "Nunito";
    left: 160px;
    top: 190px;
    font-weight: 500;
    font-size: 20px;
    color: #2c333a;
  }

  .nda-paragraph {
    margin-top: 10px;
    margin-bottom: 40px;
    max-width: 755px;
    min-width: 215px;
    left: 60px;
    font-family: "Nunito";
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #2c333a;
  }

  .nda-paragraph-1 {
    margin-top: 40px;
    margin-bottom: 40px;
    width: 985px;
    left: 60px;
    font-family: "Nunito";
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #2c333a;
  }

  .nda-paragraph-2 {
    margin-bottom: 40px;
    width: 985px;
    left: 60px;
    font-family: "Nunito";
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #2c333a;
  }
  .nda-paragraph-3 {
    margin-bottom: 40px;
    width: 985px;
    left: 60px;
    font-family: "Nunito";
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #2c333a;
  }

  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 100px;
    margin-left: 390px;
  }

  .important-btn {
    padding: 18px 64px;
    cursor: pointer;
    width: 245px;
    height: 55px;
    border: none;
    background: #00838f;
    border-radius: 5px;
    font-family: "Nunito";
    font-weight: 700;
    font-size: 18px;
    color: #f9fafb;
  }

  //   @media (max-width: 400px) {
  //     .eachAdminBlog {
  //       width: 100%;
  //     }
  //   }
  //   @media (min-width: 720px) {
  //     .perComponent {
  //       width: 48.5%;
  //     }
  //   }
  //   @media (min-width: 1200px) {
  //     .perComponent {
  //       width: 32.5%;
  //     }
`;
