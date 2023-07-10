import React, { useCallback, useState } from "react";
import Iframe from "react-iframe";

import "./newStyle.css";
import { randomName } from "./bio gnr file/nameData";
import RandomTextGenerator from "./randomText";
import RandomLocation from "./RandonLocation";
import RandomSchool from "./RandomSchool";
import RandomDegree from "./RandomDegree";
import RandomOccpation from "./RandomOccupation";
import RandonReligious from "./RandonReligious";
import { degreeData } from "./bio gnr file/degree";
import { missionariesData } from "./bio gnr file/missionariesData";
import Dropdown from "./Dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function BioGnr() {
  

  const [randomName, setRandonName] = useState("");
  const [name, setName] = useState();
  const [allItem, setAllItem] = useState({
    name1: "",
    gender: "",
    location: "",
    school: " ",
    major: "",
    occupation: "",
    religion: "",
    reason: "",
  });
  console.log("name data anupam", allItem.name1);
  //   console.log("random number",name);
  const [gender, setGender] = useState(null);
  const [location, setLocation] = useState("");
  console.log(location);
  const [image, setImage] = useState();
  console.log("image ", image);
  const [video, setVideo] = useState();
  const [school, setSchool] = useState();
  const [major, setMajor] = useState("");
  const [occupation, setOccupation] = useState();
  const [religious, setReligious] = useState();
  const [reason, setReason] = useState("");
  const [nameCheckbox, setnameCheckbox] = useState();
  const [schoolCheckbox, setSchoolCheckbox] = useState();
  const [occCheckbox, setOccCheckbox] = useState();
  const [religiousCheckbox, setReligiousCheckbox] = useState();
  const [reasonCheckbox, setReasonCheckbox] = useState();
  const [mission, setMission] = useState();
  const [videos, setVideos] = useState();
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
    // i18next.changeLanguage(school);
  };
  //   const [cValue,setCvalue]= useState("")
  function nameData() {
    //    alert("hi my name is anupams ingh ")
  }

  function file(e) {
    // setImage(e.target.files[0])
    const fileName = e.target.files[0];
    if (fileName && fileName.type.startsWith("image/")) {
      setImage(fileName);
    } else {
      setImage(null);
    }
    //  setImage(e.target.files[0])
  }

  const videoFnc = (e) => {
    const fileName = e.target.files[0];
    if (fileName && fileName.type.startsWith("video/")) {
      setVideos(fileName);
    } else {
      setVideos(null);
    }
  };

  const missionaries = (data) => {
    setMission(data);
  };

  return (
    <div className="Container">
      <div className="sub-container">
        <div className="heading">
          <h1>Bio Generator</h1>
        </div>

        <div className="content-con">
          <div className="all-container">
            <div className="left-content">
              <div className="left-con-heading">
                <h1>Options</h1>
              </div>

              <div className="name-gender">
                <div className="input-name">
                  Name:
                  <input
                    value={name}
                    type="text"
                    placeholder="name"
                    onChange={(e) => setAllItem(e.target.value)}
                  />
                </div>
                <div className="input-gender">
                  Gender:
                  {/* <input type="radio" /> */}
                  <select onChange={(e) => setGender(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="input-btn">
                  <RandomTextGenerator name={setName} />
                </div>
              </div>

              <div className="location">
                <div className="location-con">
                  <input
                    onChange={(e) => setnameCheckbox(e.target.checked)}
                    type="checkbox"
                  />
                  location:
                  <input
                    value={location}
                    type="text"
                    placeholder="location"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <button>
                    {" "}
                    <RandomLocation location={setLocation} />
                  </button>
                </div>
              </div>

              <div className="location" style={{ marginTop: "2%" }}>
                <div className="location-con">
                  upload image{" "}
                  <input type="file" accept="image/*" onChange={file} />
                  {/* <input type="text" placeholder="location" />  */}
                  <button onClick={() => setImage("")}>remove image</button>
                </div>
              </div>

              <div className="location" style={{ marginTop: "2%" }}>
                <div className="location-con">
                  upload video{" "}
                  <input type="file" accept="video/*" onChange={videoFnc} />
                  {/* <input type="text" placeholder="location" />  */}
                  <button onClick={() => setVideos("")}>remove video</button>
                </div>
              </div>

              <div className="school">
                <div className="school-con">
                  <input
                    type="checkbox"
                    onChange={(e) => setSchoolCheckbox(e.target.checked)}
                  />
                  School:
                  <input
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    type="text"
                    placeholder="school"
                  />
                  <RandomSchool school={setSchool} />
                </div>
                {/* <br/> */}
                <div className="school-2">
                  major:
                  <input
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    type="text"
                    placeholder="major"
                  />
                  <RandomDegree data={setMajor} />
                </div>
              </div>

              <div className="occupation">
                <input
                  type="checkbox"
                  onChange={(e) => setOccCheckbox(e.target.checked)}
                />
                occupation:
                <input
                  type="text"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  placeholder="occupation"
                />
                <RandomOccpation data={setOccupation} />
              </div>

              <div className="religious-background">
                {/* <div className="reg-con"> */}
                <div>
                  <p className="reg-text">
                    <input
                      type="checkbox"
                      onChange={(e) => setReligiousCheckbox(e.target.checked)}
                    />
                    religious
                  </p>
                </div>
                {/* <div> */}
                <textarea
                  value={religious}
                  onChange={(e) => setReligious(e.target.value)}
                  rows="8"
                  //   value={religious}
                  cols="85"
                  //   className="reg-text"
                  type="text"
                  placeholder="religious"
                ></textarea>
                {/* </div> */}
                <div>
                  <RandonReligious data={setReligious} />
                </div>
                {/* </div> */}
              </div>

              <div
                className="religious-background1"
                style={{ marginTop: "2%" }}
              >
                {/* <div className="reg-con"> */}
                <div>
                  <p className="reg-text">
                    <input
                      type="checkbox"
                      onChange={(e) => setReasonCheckbox(e.target.checked)}
                    />
                    Reason for meeting with missionaries
                  </p>
                </div>
                {/* <div> */}
                <textarea
                  onChange={(e) => setReason(e.target.value)}
                  rows="8"
                  cols="85"
                  value={mission}
                  //   className="reg-text"
                  type="text"
                  placeholder="religious"
                ></textarea>
                {/* </div> */}
                <div className="color-text">
                  <button
                    className="item1"
                    onClick={() =>
                      missionaries(missionariesData[0].description)
                    }
                  >
                    Restoration
                  </button>
                  <button
                    className="item2"
                    onClick={() =>
                      missionaries(missionariesData[2].description)
                    }
                  >
                    Plan of salvation
                  </button>
                  <button
                    className="item3"
                    onClick={() =>
                      missionaries(missionariesData[5].description)
                    }
                  >
                    Gospel of christ
                  </button>
                  <button
                    className="item4"
                    onClick={() =>
                      missionaries(missionariesData[3].description)
                    }
                  >
                    Law of Chatity
                  </button>
                  <br />
                  <button
                    className="item5"
                    onClick={() =>
                      missionaries(missionariesData[7].description)
                    }
                  >
                    word of widsome
                  </button>
                  <button
                    className="item6"
                    onClick={() =>
                      missionaries(missionariesData[6].description)
                    }
                  >
                    Any lesson
                  </button>
                  {/* <button className="item5">anupam</button> */}

                  {/* </div> */}
                  {/* <button>random generate</button> */}
                </div>
              </div>
            </div>
          </div>

          <div className="results">
            <div className="result-text">
              <h1 className="res-text">Results</h1>
            </div>
            {/* <Dropdown/> */}
            <div>
              Select language
              <select onChange={(e) => handleClick(e)}>
                <option>select language</option>
                <option value={"en"}>English</option>
                <option value={"ko"}>Korean </option>
                <option value={"chi"}>Chineas</option>
                <option value={"hi"}>Hindi</option>
              </select>
              <p>
                {t("welcome")} {t("about")} {t("hi my name is singh")}
              </p>
              <p>
                {t(
                  "the leap into electronic typesetting, remaining essentiallyunchanged. It was popularised in the 1960s with the release ofLetraset sheets containing Lorem Ipsum passages, and morerecently with desktop publishing software like Aldus PageMakerincluding versions of Lorem Ipsum"
                )}
              </p>
            </div>
            <div className="results-Data">
              <p>
                {t(name)} {gender} {nameCheckbox ? location : ""}{" "}
                {schoolCheckbox ? (
                  <>
                    {school} {major}
                  </>
                ) : (
                  ""
                )}
                 
                {occCheckbox ? occupation : ""}{" "}
                {religiousCheckbox ? religious : ""}
                {/* <div> */}
                {image ? (
                  <img width={200} src={URL.createObjectURL(image)} />
                ) : (
                  ""
                )}
                {/* </div> */}
                {videos ? (
                  <Iframe
                    url={URL.createObjectURL(videos)}
                    width="450px"
                    height="250px"
                    id=""
                    className=""
                    display="block"
                    position="relative"
                  />
                ) : (
                  ""
                )}
                {reasonCheckbox ? mission : ""}
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BioGnr;
