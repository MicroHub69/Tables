import React from "react";
import styled from "styled-components";
import { Imgs } from "../assets/image/Imgs";
import { SVGs } from "../assets/svgs/SVGs";

const EventImage = styled.div`
  .eventImg {
    padding: 10px;
  }
  img {
    width: 100%;
    height: 80%;
    object-fit: contain;
  }

  @media (min-width: 725px) {
    .eventImg {
      padding: 30px 30px 0px 30px;
    }
  }
`;

const EventSection = styled.section`
  width: 100%;

  .header-text {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 18px;
    color: #2c333a;
  }
  .wrapper {
    padding: 10px;
  }
  .eventImg {
    padding: 10px;
  }

  img {
    width: 50%;
    // height: 80%;
    height: 40%;
    object-fit: contain;
  }

  p {
    font-family: "Nunito";
    // font-style: normal;
    font-weight: 400;
    margin: 10px 0px;
    font-size: 16px;
    color: #2c333a;
  }
  .event-paragraph {
    font-family: "Nunito";
    // font-style: normal;
    font-weight: 400;
    margin: 10px 0px;
    font-size: 16px;
    color: #2c333a;
  }
  .event-paragraph-about {
    font-family: "Nunito";
    font-weight: 400;
    margin: 4px 0px 18px 0px;
    font-size: 16px;
    line-height: 27px;
    color: #2c333a;
  }
  .events-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // width: 50%;
    width: 53%;
  }

  .tech {
    border: #232323 1px solid;
    border-radius: 5px;
    font-family: "Nunito";
    font-weight: 700;
    font-size: 14px;
    color: #2c333a;
    width: 50px;
    padding: 5px 8px;
  }

  .development {
    border: #232323 1px solid;
    border-radius: 5px;
    font-family: "Nunito";
    font-weight: 700;
    font-size: 14px;
    color: #2c333a;
    width: 107px;
    padding: 5px 8px;
  }

  .header-text-about {
    // margin-top: 31px;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 20px;
    color: #2c333a;
  }

  .header-text-requirement {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #2c333a;
  }

  .requirements {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #2c333a;
    margin-bottom: 20px;
  }

  .eventDetailsContainer {
    .event-details-header {
      position: relative;
      font-family: "Nunito";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      color: #2c333a;
    }

    .event-details-header::before {
      content: url("https://www.svgrepo.com/show/147168/direction.svg");
      position: absolute;
      left: 0;
      display: inline-block;
      width: 20px;
      top: 4px;
      height: 20px;
    }

    h5 {
      margin-bottom: 10px;
      padding-left: 30px;
      font-size: 16px;
      font-weight: 500;
      line-height: 27px;
      letter-spacing: 0em;
      text-align: left;
    }
    p {
      padding-left: 30px;
      font-size: 16px;
      font-weight: 500;
      line-height: 27px;
      letter-spacing: 0em;
      text-align: left;
    }
  }

  .event-list {
    list-style: square;
  }

  .edit-event {
    margin: 20px 40px;
  }

  .primary-btn {
    margin: 6px 65px;
    color: white;
    border: none;
    font-family: "Nunito";
    font-weight: 600;
    cursor: pointer;
    width: 194px;
    height: 39px;
    background: #ea5f5e;
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05),
      0px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }

  .edit-event-btn {
    margin: 14px 0px;
    border: #009ba2 1px solid;
    padding: 5px 60px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    width: 194px;
    height: 39px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #009ba2;
  }

  .delete-btn {
    margin: 15px 0px;
  }

  .cta-button {
    width: 30%;
    display: flex;
    margin: 20px 0px 0px -25px;
  }

  .cta-button img {
    width: 40px;
    height: 40px;
    margin: 5px;
    cursor: pointer;
  }

  // MEDIA QUERIES

  @media only screen and (min-width: 600px) {
    .events-btn {
      width: 32%;
    }
    .wrapper {
      padding: 32px;
    }

    .page-wrapper {
      display: flex;
      justify-content: space-between;
    }

    .edit-event {
      margin: 0px 0px 0px 0px;
    }

    .edit-event-btn {
      width: 94px;
      margin: 6px 8px;
      padding: 7px 13px;
    }

    .cta-button {
      width: 30%;
      margin: 50px 0px 0px -97px;
    }

    .eventImg {
      padding: 30px;
    }
    .wrapper {
      width: 100%;
      padding: 15px;
    }

    .events-btn {
      width: 50%;
    }
    .delete-btn {
      margin: 34px 212px;
    }
    .primary-btn {
      margin: 0px 0px 0px 0px;
      width: 345px;
      height: 52px;
    }

    .header-text {
      font-size: 24px;
    }
  }

  // @media only screen and (min-width: 425px) {
  //   .events-btn {
  //     width: 46%;
  //   }
  //   .wrapper {
  //     padding: 10px;
  //   }

  //   .edit-event {
  //     margin: 20px 20px;
  //   }
  //   .edit-event-btn {
  //     padding: 7px 91px;
  //   }

  //   .primary-btn {
  //     margin: 7px 54px;
  //     width: 262px;
  //   }
  // }

  @media only screen and (min-width: 800px) {
    display: flex;
    justify-content: space-between;

    .page-wrapper {
      display: flex;
      justify-content: space-between;
    }

    .edit-event {
      margin: 0px 0px 0px 0px;
    }

    .edit-event-btn {
      width: 94px;
      margin: 6px -8px;
      padding: 7px 13px;
    }

    .cta-button {
      width: 30%;
      margin: 50px 0px 0px -97px;
    }

    .eventImg {
      padding: 30px;
    }
    .wrapper {
      width: 70%;
      padding: 30px;
    }
    .second-section {
      margin-top: 20px;
      width: 25% !important;
    }
    .events-btn {
      width: 50%;
    }
    .delete-btn {
      margin: 1134px 0px 35px 0px !important;
    }
    .primary-btn {
      margin: 0px 0px 0px 0px;
      width: 169px;
    }

    .header-text {
      font-size: 24px;
    }
  }

  @media only screen and (min-width: 1024px) {
    .delete-btn {
      margin: 913px 0px 9px 42px !important;
    }
  }

  @media only screen and (min-width: 1280px) {
    .delete-btn {
      margin: 727px 0px 9px 71px !important;
    }
  }
`;

const Event = () => {
  return (
    <>
      <EventImage>
        <div className="eventImg">
          <img src={Imgs.eventsPng} alt="Event-image" />
        </div>
      </EventImage>
      <EventSection>
        <section className="wrapper">
          <div className="page-text-container">
            <div className="page-wrapper">
              <div>
                <h2 className="header-text">Tech Diversity 2022 Webinar</h2>
                <p className="event-paragraph">
                  By <b>Instincthub</b>
                </p>
                <div className="events-btn">
                  <span className="tech">Tech</span>
                  <span className="development">Development</span>
                </div>
              </div>
              <div className="edit-event">
                <span className="edit-event-btn"> Edit Event</span>
                <div className="cta-button">
                  <img src={SVGs.shareSvg} alt="Event" />
                  <img src={SVGs.likeSvg} alt="Event-image" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="header-text-about">About this event</h4>
              <p className="event-paragraph-about">
                In vitae gravida sit quam. Tincidunt feugiat bibendum sapien
                suspendisse eu, mauris non mattis non. Feugiat nulla sagittis
                euismod sed amet tellus varius. Est amet sed diam eu at ut hac
                vitae metus. Quis orci pellentesque integer non tortor. Vitae
                quam malesuada at vestibulum. Aliquam sed nisi feugiat posuere
                quam in. Sagittis morbi et eget ultrices hac eros. Risus enim
                facilisi elementum sagittis ipsum. Cursus nisl, libero facilisi
                ac feugiat enim. Mauris condimentum nulla egestas pulvinar vel
                neque iaculis facilisis gravida. Dignissim a placerat pharetra
                id justo commodo. Ultricies mollis sit vel feugiat faucibus a
                cursus interdum. Morbi velit risus lectus ultricies pharetra
                malesuada elementum eget iaculis. Fermentum nibh at sagittis
                consequat elit. Faucibus libero.
              </p>
            </div>
            <div className="requirements">
              <h4 className="header-text-requirement">Requirement</h4>
              <ul className="event-list">
                <li>
                  In vitae gravida sit quam. Tincidunt feugiat bibendum sapien
                  suspendisse eu, mauris non mattis non. Feugiat nulla sagittis
                  euismod sed amet tellus varius. Est amet sed diam eu at ut hac
                  vitae metus. Quis orci pellentesque integer non tortor.
                </li>
                <li>
                  Vitae quam malesuada at vestibulum. Aliquam sed nisi feugiat
                  posuere quam in. Sagittis morbi et eget ultrices hac eros.
                  Risus enim facilisi elementum sagittis ipsum. Cursus nisl,
                  libero facilisi ac feugiat enim. Mauris condimentum nulla
                  egestas pulvinar vel neque iaculis facilisis gravida.
                </li>
                <li>
                  Dignissim a placerat pharetra id justo commodo. Ultricies
                  mollis sit vel feugiat faucibus a cursus interdum. Morbi velit
                  risus lectus ultricies pharetra malesuada elementum eget
                  iaculis.
                </li>
                <li>
                  c. Not to use the Confidentiality Information in whole or in
                  part for any purpose except for the Purpose stated in this
                  agreement.
                </li>
                <li>
                  2. Receiving Party shall carefully restrict access to
                  Confidential Information to employees, contractors and third
                  parties as is reasonably required and shall require those
                  persons to sign nondisclosure restrictions at least as
                  protective as those in this Agreement.
                </li>

                <li>
                  3. Receiving Party shall not, without the prior written
                  approval of the Disclosing Party, use for Receiving Party’s
                  own benefit, publish, copy, or otherwise disclose to others,
                  or permit the use by others for their benefit or to the
                  detriment of the Disclosing Party, any Confidential
                  Information.
                </li>
              </ul>
              Fermentum nibh at sagittis consequat elit. Faucibus libero.
              Dignissim a placerat pharetra id justo commodo. Ultricies mollis
              sit vel feugiat faucibus a cursus interdum. Morbi velit risus
              lectus ultricies pharetra malesuada elementum eget iaculis.
              Fermentum nibh at sagittis consequat elit. Faucibus libero.
            </div>
            <div className="requirements">
              <h4 className="header-text-requirement">Inquires</h4>
              <p className="event-paragraph-about">
                Sponsorship, Partnerships, Participation.
              </p>
              <p>
                <b>Call/Whatsapp:</b> +234-909-140-1235{" "}
              </p>
              <p>
                <b> Email:</b>info@instincthub.com, Skills@instincthub.com
                Website
              </p>
              <p>
                <b>Website:</b>www.instincthub.com
              </p>
            </div>
          </div>
        </section>

        <section className="second-section">
          <div className="eventDetailsContainer">
            <h5 className="event-details-header">Free.</h5>

            <h5 className="event-details-header">Date and Time.</h5>
            <p>Sat, Oct 21, 2022, 10:00AM -</p>
            <p>Sat, Oct 21, 2022, 10:00AM -</p>

            <h5 className="event-details-header">Location</h5>
            <p className="WAT">
              Lagos Oriental Hotel 3 Lekki - Epe Expressway Lagos, LA 106104
            </p>
          </div>
          <div className="delete-btn">
            <button className="primary-btn">Delete Event</button>
          </div>
        </section>
      </EventSection>
    </>
  );
};

export default Event;
