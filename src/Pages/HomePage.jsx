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

export const HomePage = () => {
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
    if (forMobileView === true) {
      const api = await axios.get("https://pub.gamezop.com/v3/games?id=6297");
      // console.log(api);
      const actionFilter = api.data.games.filter((items, index) => {
        return items.categories.en[0] === "Action";
      });
      setActionData(actionFilter);
      const adventureFilter = api.data.games.filter((items, index) => {
        return items.categories.en[0] === "Adventure";
      });
      setAdventureData(adventureFilter);
      const sportsFilter = api.data.games.filter((items, index) => {
        return items.categories.en[0] === "Sports & Racing";
      });
      setSportsData(sportsFilter);
      const logicFilter = api.data.games.filter((items, index) => {
        return items.categories.en[0] === "Puzzle & Logic";
      });
      setLogicData(logicFilter);
      const strategyFilter = api.data.games.filter((items, index) => {
        return items.categories.en[0] === "Strategy";
      });
      setStrategyData(strategyFilter);
      const arcadeFilter = api.data.games.filter((items, index) => {
        return items.categories.en[0] === "Arcade";
      });
      setArcadeData(arcadeFilter);
    } else {
      const api = await axios.get("https://pub.gamezop.com/v3/games?id=6297");
      console.log(api);
      const cata = api.data.games.filter((items, index) => {
        return items.categories.en[0] === filterData;
      });
      if (filterData === "") {
        setOrderList(api.data.games);
        setGameData(api.data.games);
      } else {
        setGameData(cata);
      }
    }
  };
  //===============End of code====================//

  //===============Code for transfer data to play field====================//
  const TransferData = (items) => {
    setUrlData(items);

    window.open(`https://games.skormetaverse.io/g/${items.code}`, "_self");
    // navigate("/playfield", { state: { url: items.url , gamename : items.name.en } });
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
          {/* <Notification
            message_mo={modelMessage}
            action_mo={openModel}
            random_val={randomVal}
          /> */}
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

        {/* for mobile view */}

        {forMobileView === true ? (
          <section className="new-games-link">
            <Container>
              <Row className="align-items-center">
                <Col md="12">
                  <div className="play-heading">
                    <h2 className="text-white text-center">Top Games</h2>
                  </div>
                  <Slider className="slider-game" {...settings}>
                    <div>
                      <a
                        onClick={() => {
                          window.open(
                            "https://games.skormetaverse.io/g/S1Wrpf1v5ym",
                            "_self"
                          );
                        }}
                        // href="https://games.skormetaverse.io/g/S1Wrpf1v5ym"
                      >
                        <img
                          src="https://static.gamezop.com/S1Wrpf1v5ym/cover.jpg"
                          className="img-fluid w-100"
                        />
                      </a>

                      <p>Box Crush</p>
                    </div>
                    <div>
                      <a
                        onClick={() => {
                          window.open(
                            "https://games.skormetaverse.io/g/HJP4afkvqJQ",
                            "_self"
                          );
                        }}
                        //  href="https://games.skormetaverse.io/g/HJP4afkvqJQ"
                      >
                        <img
                          src="https://static.gamezop.com/HJP4afkvqJQ/cover.jpg"
                          className="img-fluid w-100"
                        />
                      </a>
                      <p>City Cricket</p>
                    </div>
                    <div>
                      <a
                        onClick={() => {
                          window.open(
                            "https://games.skormetaverse.io/g/B1fSpMkP51m",
                            "_self"
                          );
                        }}
                        //  href="https://games.skormetaverse.io/g/B1fSpMkP51m"
                      >
                        <img
                          src="https://static.gamezop.com/B1fSpMkP51m/cover.jpg"
                          className="img-fluid w-100"
                        />
                      </a>
                      <p>Bottle Shoot</p>
                    </div>
                    <div>
                      <a
                        onClick={() => {
                          window.open(
                            "https://games.skormetaverse.io/g/H1Tz6z1Dqym",
                            "_self"
                          );
                        }}
                        // href="https://games.skormetaverse.io/g/H1Tz6z1Dqym"
                      >
                        <img
                          src="https://static.gamezop.com/H1Tz6z1Dqym/cover.jpg"
                          className="img-fluid w-100"
                        />
                      </a>
                      <p>Bouncy</p>
                    </div>
                    <div>
                      <a
                        onClick={() => {
                          window.open(
                            "https://games.skormetaverse.io/g/BkdJhTX50B",
                            "_self"
                          );
                        }}
                        //  href="https://games.skormetaverse.io/g/BkdJhTX50B"
                      >
                        <img
                          src="https://static.gamezop.com/BkdJhTX50B/cover.jpg"
                          className="img-fluid w-100"
                        />
                      </a>
                      <p>Bowling Stars</p>
                    </div>
                    <div>
                      <a
                        onClick={() => {
                          window.open(
                            "https://games.skormetaverse.io/g/SkJf58Ouf0",
                            "_self"
                          );
                        }}
                        // href="https://games.skormetaverse.io/g/SkJf58Ouf0"
                      >
                        <img
                          src="https://static.gamezop.com/SkJf58Ouf0/cover.jpg"
                          className="img-fluid w-100"
                        />
                      </a>
                      <p>Dribble Kings</p>
                    </div>
                    <div>
                      <a
                        onClick={() => {
                          window.open(
                            "https://games.skormetaverse.io/g/Skz4pzkDqyX",
                            "_self"
                          );
                        }}
                        //  href="https://games.skormetaverse.io/g/Skz4pzkDqyX"
                      >
                        <img
                          src="https://static.gamezop.com/Skz4pzkDqyX/cover.jpg"
                          className="img-fluid w-100"
                        />
                      </a>
                      <p>Escape Run</p>
                    </div>
                    <div>
                      <a
                        onClick={() => {
                          window.open(
                            "https://games.skormetaverse.io/g/H1AN6fkwqJ7",
                            "_self"
                          );
                        }}
                        //  href="https://games.skormetaverse.io/g/H1AN6fkwqJ7"
                      >
                        <img
                          src="https://static.gamezop.com/H1AN6fkwqJ7/cover.jpg"
                          className="img-fluid w-100"
                        />
                      </a>
                      <p>Bubble Wipeout</p>
                    </div>
                    <div>
                      <a
                        onClick={() => {
                          window.open(
                            "https://games.skormetaverse.io/g/B1JBaM1D9y7",
                            "_self"
                          );
                        }}
                        // href="https://games.skormetaverse.io/g/B1JBaM1D9y7"
                      >
                        <img
                          src="https://static.gamezop.com/B1JBaM1D9y7/cover.jpg"
                          className="img-fluid w-100"
                        />
                      </a>
                      <p>Colour Chase</p>
                    </div>
                  </Slider>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md="12">
                  <div className="play-heading">
                    <h2 className="text-white text-center">Action</h2>
                    <p
                      onClick={() => {
                        navigate("/playindmobgame", {
                          state: { viewAllData: actionData, tagName: "Action" },
                        });
                      }}
                    >
                      View all
                    </p>
                  </div>

                  <Slider className="slider-game" {...settings}>
                    {actionData !== undefined && actionData.length > 0 ? (
                      actionData.map((items, index) => {
                        return (
                          <div>
                            <a
                              onClick={() => {
                                window.open(
                                  `https://games.skormetaverse.io/g/${items.code}`,
                                  "_self"
                                );
                              }}
                              // href={`https://games.skormetaverse.io/g/${items.code}`}
                            >
                              <img
                                src={items.assets.cover}
                                className="img-fluid w-100"
                              />
                            </a>
                            <p>{items.name.en}</p>
                          </div>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </Slider>
                </Col>
              </Row>

              <Row className="align-items-center">
                <Col md="12">
                  <div className="play-heading">
                    <h2 className="text-white text-center">Adventure</h2>
                    <p
                      onClick={() => {
                        navigate("/playindmobgame", {
                          state: {
                            viewAllData: adventureData,
                            tagName: "Adventure",
                          },
                        });
                      }}
                    >
                      View all
                    </p>
                  </div>

                  <Slider className="slider-game" {...settings}>
                    {adventureData !== undefined && adventureData.length > 0 ? (
                      adventureData.map((items, index) => {
                        return (
                          <div>
                            <a
                              onClick={() => {
                                window.open(
                                  `https://games.skormetaverse.io/g/${items.code}`,
                                  "_self"
                                );
                              }}
                              // href={`https://games.skormetaverse.io/g/${items.code}`}
                            >
                              <img
                                src={items.assets.cover}
                                className="img-fluid w-100"
                              />
                            </a>
                            <p>{items.name.en}</p>
                          </div>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </Slider>
                </Col>
              </Row>

              <Row className="align-items-center">
                <Col md="12">
                  <div className="play-heading">
                    <h2 className="text-white text-center">Sports & Racing</h2>
                    <p
                      onClick={() => {
                        navigate("/playindmobgame", {
                          state: {
                            viewAllData: sportsData,
                            tagName: "Sports & Racing",
                          },
                        });
                      }}
                    >
                      View all
                    </p>
                  </div>

                  <Slider className="slider-game" {...settings}>
                    {sportsData !== undefined && sportsData.length > 0 ? (
                      sportsData.map((items, index) => {
                        return (
                          <div>
                            <a
                              onClick={() => {
                                window.open(
                                  `https://games.skormetaverse.io/g/${items.code}`,
                                  "_self"
                                );
                              }}
                              //  href={`https://games.skormetaverse.io/g/${items.code}`}
                            >
                              <img
                                src={items.assets.cover}
                                className="img-fluid w-100"
                              />
                            </a>
                            <p>{items.name.en}</p>
                          </div>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </Slider>
                </Col>
              </Row>

              <Row className="align-items-center">
                <Col md="12">
                  <div className="play-heading">
                    <h2 className="text-white text-center">Puzzle & Logic</h2>
                    <p
                      onClick={() => {
                        navigate("/playindmobgame", {
                          state: {
                            viewAllData: logicData,
                            tagName: "Puzzle & Logic",
                          },
                        });
                      }}
                    >
                      View all
                    </p>
                  </div>

                  <Slider className="slider-game" {...settings}>
                    {logicData !== undefined && logicData.length > 0 ? (
                      logicData.map((items, index) => {
                        return (
                          <div>
                            <a
                              onClick={() => {
                                window.open(
                                  `https://games.skormetaverse.io/g/${items.code}`,
                                  "_self"
                                );
                              }}
                              //  href={`https://games.skormetaverse.io/g/${items.code}`}
                            >
                              <img
                                src={items.assets.cover}
                                className="img-fluid w-100"
                              />
                            </a>
                            <p>{items.name.en}</p>
                          </div>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </Slider>
                </Col>
              </Row>

              <Row className="align-items-center">
                <Col md="12">
                  <div className="play-heading">
                    <h2 className="text-white text-center">Strategy</h2>
                    <p
                      onClick={() => {
                        navigate("/playindmobgame", {
                          state: {
                            viewAllData: strategyData,
                            tagName: "Strategy",
                          },
                        });
                      }}
                    >
                      View all
                    </p>
                  </div>

                  <Slider className="slider-game" {...settings}>
                    {strategyData !== undefined && strategyData.length > 0 ? (
                      strategyData.map((items, index) => {
                        return (
                          <div>
                            <a
                              onClick={() => {
                                window.open(
                                  `https://games.skormetaverse.io/g/${items.code}`,
                                  "_self"
                                );
                              }}
                              //  href={`https://games.skormetaverse.io/g/${items.code}`}
                            >
                              <img
                                src={items.assets.cover}
                                className="img-fluid w-100"
                              />
                            </a>
                            <p>{items.name.en}</p>
                          </div>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </Slider>
                </Col>
              </Row>

              <Row className="align-items-center">
                <Col md="12">
                  <div className="play-heading">
                    <h2 className="text-white text-center">Arcade</h2>
                    <p
                      onClick={() => {
                        navigate("/playindmobgame", {
                          state: { viewAllData: arcadeData, tagName: "Arcade" },
                        });
                      }}
                    >
                      View all
                    </p>
                  </div>

                  <Slider className="slider-game" {...settings}>
                    {arcadeData !== undefined && arcadeData.length > 0 ? (
                      arcadeData.map((items, index) => {
                        return (
                          <div>
                            <a
                              onClick={() => {
                                window.open(
                                  `https://games.skormetaverse.io/g/${items.code}`,
                                  "_self"
                                );
                              }}
                              // href={`https://games.skormetaverse.io/g/${items.code}`}
                            >
                              <img
                                src={items.assets.cover}
                                className="img-fluid w-100"
                              />
                            </a>
                            <p>{items.name.en}</p>
                          </div>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </Slider>
                </Col>
              </Row>
            </Container>
          </section>
        ) : (
          <></>
        )}

        {/* for mobile view */}

        {forMobileView === false ? (
          <section className="hexa-tile-sec new-box-benefit ">
            <Container>
              <div className="blogs-sec-new play-sec-new">
                <Row className="">
                  <Col lg={12}>
                    <Row className="filter-inner-prediction">
                      <Col lg={12} className="content_center">
                        <Row className="justify-content-between">
                          <h2 className="text-white">Top Games</h2>
                          <Col lg={4}>
                            <div className="blog-inner-box">
                              <img
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  window.open(
                                    "https://6297.play.gamezop.com/g/S1Wrpf1v5ym",
                                    "_self"
                                  );
                                }}
                                src="https://static.gamezop.com/S1Wrpf1v5ym/cover.jpg"
                                className="img-fluid"
                              />
                              <h4>Box Crush</h4>
                              <div className="d-flex justify-content-between align-items-center mb-1">
                                <p className="mb-0">Puzzle & Logic</p>
                                <a
                                  onClick={() => {
                                    window.open(
                                      "https://6297.play.gamezop.com/g/S1Wrpf1v5ym",
                                      "_self"
                                    );
                                  }}
                                  // href="https://6297.play.gamezop.com/g/S1Wrpf1v5ym"
                                  className="common-play-btn"
                                >
                                  Play
                                </a>
                              </div>
                              <p>
                                Clear rows and columns before the numbers get to
                                0. Keep an eye on the progress bar to unlock
                                special power ups!
                              </p>
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div className="blog-inner-box">
                              <img
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  window.open(
                                    "https://6297.play.gamezop.com/g/HJP4afkvqJQ",
                                    "_self"
                                  );
                                }}
                                src="https://static.gamezop.com/HJP4afkvqJQ/cover.jpg"
                                className="img-fluid"
                              />
                              <h4>City Cricket</h4>
                              <div className="d-flex justify-content-between align-items-center mb-1">
                                <p className="mb-0">Sports & Racing</p>
                                <a
                                  onClick={() => {
                                    window.open(
                                      "https://6297.play.gamezop.com/g/HJP4afkvqJQ",
                                      "_self"
                                    );
                                  }}
                                  // href="https://6297.play.gamezop.com/g/HJP4afkvqJQ"
                                  className="common-play-btn"
                                >
                                  Play
                                </a>
                              </div>
                              <p>
                                Pick your city, bring out your batting gloves
                                and show your Cricket skills. Let's see you
                                chase that target!
                              </p>
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div className="blog-inner-box">
                              <img
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  window.open(
                                    "https://6297.play.gamezop.com/g/B1fSpMkP51m",
                                    "_self"
                                  );
                                }}
                                src="https://static.gamezop.com/B1fSpMkP51m/cover.jpg"
                                className="img-fluid"
                              />
                              <h4>Bottle Shoot</h4>
                              <div className="d-flex justify-content-between align-items-center mb-1">
                                <p className="mb-0">Action</p>
                                <a
                                  onClick={() => {
                                    window.open(
                                      "https://6297.play.gamezop.com/g/B1fSpMkP51m",
                                      "_self"
                                    );
                                  }}
                                  // href="https://6297.play.gamezop.com/g/B1fSpMkP51m"
                                  className="common-play-btn"
                                >
                                  Play
                                </a>
                              </div>
                              <p>
                                Bring out the cowboy in you and keep a level
                                head while you shoot down as many bottles as you
                                can. Keep an eye out for the red ones!
                              </p>
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div className="blog-inner-box">
                              <img
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  window.open(
                                    "https://6297.play.gamezop.com/g/H1Tz6z1Dqym",
                                    "_self"
                                  );
                                }}
                                src="https://static.gamezop.com/H1Tz6z1Dqym/cover.jpg"
                                className="img-fluid"
                              />
                              <h4>Bouncy</h4>
                              <div className="d-flex justify-content-between align-items-center mb-1">
                                <p className="mb-0">Arcade</p>
                                <a
                                  onClick={() => {
                                    window.open(
                                      "https://6297.play.gamezop.com/g/H1Tz6z1Dqym",
                                      "_self"
                                    );
                                  }}
                                  // href="https://6297.play.gamezop.com/g/H1Tz6z1Dqym"
                                  className="common-play-btn"
                                >
                                  Play
                                </a>
                              </div>
                              <p>
                                Bounce off the platforms and make as many jumps
                                as you can in this amazing 3D game!
                              </p>
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div className="blog-inner-box">
                              <img
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  window.open(
                                    "https://6297.play.gamezop.com/g/BkdJhTX50B",
                                    "_self"
                                  );
                                }}
                                src="https://static.gamezop.com/BkdJhTX50B/cover.jpg"
                                className="img-fluid"
                              />
                              <h4>Bowling Stars</h4>
                              <div className="d-flex justify-content-between align-items-center mb-1">
                                <p className="mb-0">Sports & Racing</p>
                                <a
                                  onClick={() => {
                                    window.open(
                                      "https://6297.play.gamezop.com/g/BkdJhTX50B",
                                      "_self"
                                    );
                                  }}
                                  // href="https://6297.play.gamezop.com/g/BkdJhTX50B"
                                  className="common-play-btn"
                                >
                                  Play
                                </a>
                              </div>
                              <p>
                                Enjoy the best Bowling game online — compete
                                with thousands of players! Let's see how many
                                pins you can knock down!
                              </p>
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div className="blog-inner-box">
                              <img
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  window.open(
                                    "https://6297.play.gamezop.com/g/SkJf58Ouf0",
                                    "_self"
                                  );
                                }}
                                src="https://static.gamezop.com/SkJf58Ouf0/cover.jpg"
                                className="img-fluid"
                              />
                              <h4>Dribble Kings</h4>
                              <div className="d-flex justify-content-between align-items-center mb-1">
                                <p className="mb-0">Sports & Racing</p>
                                <a
                                  onClick={() => {
                                    window.open(
                                      "https://6297.play.gamezop.com/g/SkJf58Ouf0",
                                      "_self"
                                    );
                                  }}
                                  // href="https://6297.play.gamezop.com/g/SkJf58Ouf0"
                                  className="common-play-btn"
                                >
                                  Play
                                </a>
                              </div>
                              <p>
                                Run and find the best trajectory to dodge
                                obstacles. Don't let those quarterbacks take the
                                ball!
                              </p>
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div className="blog-inner-box">
                              <img
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  window.open(
                                    "https://6297.play.gamezop.com/g/Skz4pzkDqyX",
                                    "_self"
                                  );
                                }}
                                src="https://static.gamezop.com/Skz4pzkDqyX/cover.jpg"
                                className="img-fluid"
                              />
                              <h4>Escape Run</h4>
                              <div className="d-flex justify-content-between align-items-center mb-1">
                                <p className="mb-0">Adventure</p>
                                <a
                                  onClick={() => {
                                    window.open(
                                      "https://6297.play.gamezop.com/g/Skz4pzkDqyX",
                                      "_self"
                                    );
                                  }}
                                  // href="https://6297.play.gamezop.com/g/Skz4pzkDqyX"
                                  className="common-play-btn"
                                >
                                  Play
                                </a>
                              </div>
                              <p>
                                Help the mountain man escape the eyes of media
                                while he peacefully runs in the cold. Collect
                                fruits to buy power-ups for the escape!
                              </p>
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div className="blog-inner-box">
                              <img
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  window.open(
                                    "https://6297.play.gamezop.com/g/H1AN6fkwqJ7",
                                    "_self"
                                  );
                                }}
                                src="https://static.gamezop.com/H1AN6fkwqJ7/cover.jpg"
                                className="img-fluid"
                              />
                              <h4>Bubble Wipeout</h4>
                              <div className="d-flex justify-content-between align-items-center mb-1">
                                <p className="mb-0">Strategy</p>
                                <a
                                  onClick={() => {
                                    window.open(
                                      "https://6297.play.gamezop.com/g/H1AN6fkwqJ7",
                                      "_self"
                                    );
                                  }}
                                  // href="https://6297.play.gamezop.com/g/H1AN6fkwqJ7"
                                  className="common-play-btn"
                                >
                                  Play
                                </a>
                              </div>
                              <p>
                                Shoot down as many bubbles as you can - aim,
                                match, shoot and burst the same colored bubbles.
                                There is a timer to watch out for!
                              </p>
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div className="blog-inner-box">
                              <img
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  window.open(
                                    "https://6297.play.gamezop.com/g/B1JBaM1D9y7",
                                    "_self"
                                  );
                                }}
                                src="https://static.gamezop.com/B1JBaM1D9y7/cover.jpg"
                                className="img-fluid"
                              />
                              <h4>Colour Chase</h4>
                              <div className="d-flex justify-content-between align-items-center mb-1">
                                <p className="mb-0">Adventure</p>
                                <a
                                  onClick={() => {
                                    window.open(
                                      "https://6297.play.gamezop.com/g/B1JBaM1D9y7",
                                      "_self"
                                    );
                                  }}
                                  // href="https://6297.play.gamezop.com/g/B1JBaM1D9y7"
                                  className="common-play-btn"
                                >
                                  Play
                                </a>
                              </div>
                              <p>
                                See beautiful landscapes unfold as you navigate
                                the twists and turns of these endless roads:
                                just make sure you only clash with balls of your
                                own colour.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        ) : (
          <></>
        )}
        {forMobileView === false ? (
          <section className="hexa-tile-sec new-box-benefit ">
            <Container>
              <div className="blogs-sec-new play-sec-new">
                <Row className="">
                  <Col lg={12}>
                    <Row className="underline">
                      <Col lg={1}>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setFilterData("");
                          }}
                          className="extra-links"
                        >
                          All
                        </a>
                      </Col>
                      <Col lg={1}>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setFilterData("Action");
                          }}
                          className="extra-links"
                        >
                          Action
                        </a>
                      </Col>
                      <Col lg={2}>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setFilterData("Adventure");
                          }}
                          className="extra-links"
                        >
                          Adventure
                        </a>
                      </Col>
                      <Col lg={2}>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setFilterData("Sports & Racing");
                          }}
                          className="extra-links"
                        >
                          Sports&Racing
                        </a>
                      </Col>
                      <Col lg={2}>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setFilterData("Puzzle & Logic");
                          }}
                          className="extra-links"
                        >
                          Puzzle&Logic
                        </a>
                      </Col>
                      <Col lg={2}>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setFilterData("Strategy");
                          }}
                          className="extra-links"
                        >
                          Strategy
                        </a>
                      </Col>
                      <Col lg={2}>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setFilterData("Arcade");
                          }}
                          className="extra-links"
                        >
                          Arcade
                        </a>
                      </Col>
                    </Row>
                    <Row className="">
                      {gameData !== undefined && gameData.length > 0
                        ? gameData.map((items, index) => {
                            return (
                              <Col lg={4} key={index}>
                                <div className="blog-inner-box">
                                  <img
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      TransferData(items);
                                    }}
                                    src={items.assets.cover}
                                    className="img-fluid"
                                  />
                                  <h4>{items.name.en}</h4>
                                  <div className="d-flex justify-content-between align-items-center mb-1">
                                    <p className="mb-0">
                                      {items.categories.en}
                                    </p>
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
                                  <p>{items.description.en}</p>
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
        ) : (
          <></>
        )}
      </div>

      <Modal
        show={commonModel}
        onHide={handleCommonModel}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="sm"
        className="welcome-modal compitition-modal"
        style={{}}
      >
        <Modal.Header closeButton={handleCommonModel}></Modal.Header>
        <Modal.Body>
          <div className="winner-box-new">
            <img className="cup-img" src="assets/img/trophy.png" alt="" />
            <div className="mb-3">
              <a
                className="common-btn"
                onClick={() => {
                  navigate("/Register");
                }}
                style={{ cursor: "pointer" }}
              >
                Sign Up{" "}
              </a>{" "}
              <a
                className="common-btn"
                onClick={() => {
                  navigate("/Login");
                }}
                style={{ cursor: "pointer" }}
              >
                {" "}
                Login{" "}
              </a>
            </div>
            <h4 className="text-white text-center" style={{ fontSize: "30px" }}>
              Today to play free games and be entered into our free prizes &
              competition
            </h4>
            <p
              style={{ cursor: "pointer", color: "#0089ff" }}
              onClick={() => {
                navigate("/monthly_reffle");
              }}
            >
              {" "}
              learn more about free Prizes & Competition
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
