import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import { Header } from "../components/UI/Header";
import Slider from "react-slick";
import Games from "../Helpers/GameList.json";
import { IphoneSpinner } from "../Components/IphoneSpinner";

export const HomePage = () => {
  // console.log("Games", Games.Games);
  //====================Global variable=======================//
  const navigate = useNavigate();

  //====================End of code=======================//

  //====================Local variable=======================//
  const [gameData, setGameData] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [randommess, setRandomMess] = useState("");
  const [message11, setMessage11] = useState(false);
  const [filterData, setFilterData] = useState("");
  const [urlData, setUrlData] = useState("");
  const [forMobileView, setForMobileView] = useState(
    window.innerWidth < 768 ? true : false
  );
  const [actionData, setActionData] = useState([]);
  const [adventureData, setAdventureData] = useState([]);
  const [sportsData, setSportsData] = useState([]);
  const [logicData, setLogicData] = useState([]);
  const [strategyData, setStrategyData] = useState([]);
  const [arcadeData, setArcadeData] = useState([]);
  const [commonModel, setCommonModel] = useState(false);
  const handleCommonModel = () => {
    setCommonModel(false);
    // props.action_mo = false
  };
  const [disable, setDisable] = useState(false);

  //===============End of code====================//

  //===============For PopUp Modal====================//
  const [openModel, setOpenModel] = useState(false);
  const [modelMessage, setModelMessage] = useState("");
  const [randomVal, setRandomVal] = useState("");
  //===============End of code====================//

  //=====================GameZop code========================//
  useEffect(() => {
    getGameData();
  }, []);
  useEffect(() => {
    getGameData();
  }, [filterData]);
  const getGameData = async () => {
    const api = await axios.get("https://pub.gamezop.com/v3/games?id=6297");
    // console.log(api);
    const cata = api.data.games.filter((items, index) => {
      return items.categories.en[0] === filterData;
    });
    if (filterData === "") {
      setOrderList(api.data.games);
      setGameData(api.data.games);
    } else {
      setGameData(cata);
    }
  };
  //===============End of code====================//

  //===============Code for transfer data to play field====================//
  const TransferData = async (items) => {
    try {
      setDisable(true);
      const payload = {
        jsonrpc: "2.0",
        method: "Session.CreateDemo",
        id: 321864203,
        BankGroupId: "198765432",
        GameId: items.Id,
        StartBalance: 10000,
      };
      const data_game = await axios.post(
        "https://api.gltplay.com/common.php",
        payload
      );
      if (data_game.status === 200) {
        setDisable(false);
        window.open(data_game?.data?.SessionUrl, "_blank");
      }
      // console.log("dayta", data_game);
    } catch (err) {
      setDisable(false);
    }
  };
  //===============End of code====================//

  const functionForMessage = () => {
    setCommonModel(true);
    // setModelMessage("Please login to play games...!");
    // setOpenModel(true);
    // setRandomVal(Math.floor(Math.random() * 100 + 1));
  };

  var settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="outer-main-sec">
        {/* <Header /> */}
        <section className="play-banner-sec">
          <video className="video-new-game" muted autoPlay loop>
                <source src="assets/img/headvideo-bastet.mp4" />    
          </video>
          <Container>
            <Row className="align-items-center">
              <Col md="7" className="m-auto">
                <div className="inner-banner-blog">
                  <img src="assets/img/Whitelogo.png" className="logo" alt="" />
                  <h1 className="heading-main">PLAY GAMES</h1>
                  <h3>FOR FREE</h3>
                  <p>
                    Enjoy a wide variety of games and immerse yourself in
                    endless hours of entertainment
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

     {disable === true ? <div className="loader-show"><IphoneSpinner/></div> : <></>}
          <section className="hexa-tile-sec new-box-benefit ">
            <Container>
              <div className="blogs-sec-new play-sec-new">
                <Row className="">
                  <Col lg={12}>
                    <Row className="">
                      {Games?.Games !== undefined && Games?.Games?.length > 0
                        ? Games?.Games?.map((items, index) => {
                            return (
                              <Col lg={4} key={index}>
                                <div className="blog-inner-box">
                                  <img
                                    src="https://mascot.games/images/game_hellowin.jpeg"
                                    className="img-fluid"
                                  />
                                  <h4>{items.Name}</h4>
                                  <div className="d-flex justify-content-between align-items-center mb-1">
                                    <p className="mb-0">{items.Type}</p>
                                    <a
                                      onClick={() => {
                                        TransferData(items);
                                      }}
                                      // href={items.url}
                                      // target="_blank"
                                      className="common-play-btn"
                                    >
                                      Play
                                    </a>
                                  </div>
                                  <p>{items.Description}</p>
                                </div>
                              </Col>
                            );
                          })
                        : ""}
                    </Row>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
     
     
      </div>
    </>
  );
};
