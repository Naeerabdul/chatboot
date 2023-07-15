import React, { useRef, useState,useEffect } from 'react';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.css';
import data from './qustion.json'
import SondLoti from './SondLoti'
const Home = () => {
    const theData = data.body.questions[0].data.chat
    // add queston and naser
    const [queston, setQueston] = useState(0)
    const [questonArray, setQuestonArray] = useState([])
    const [ansers, setAnsers] = useState([])
    // quastion and anser index
    const [idAnser, setIdAnser] = useState(0)
    const [idQuastion, setIdQuastion] = useState(0)
    // anser box animasion 
    const [onAnimasion, setOnAnimasion] = useState(true)
    // useEffect play
    const [playQuastion, setPlayQuastion] = useState(0)
    const [playAnser, setPlayAnser] = useState(0)
    const [eroranser, setEroranser]=useState(false)
    // Transparency when entering
    const [logalert, setLogalert] = useState(0)
     
    const [flagsond1, setFlagsond1] = useState(false)
    const [idFlagsond1, setIdFlagsond1]=useState(0)
    const [flagsond2, setFlagsond2] = useState(false)
    const [idFlagsond2, setIdFlagsond2]=useState(0)
    const [flagsond3, setFlagsond3] = useState(false)
    const [idFlagsond3, setIdFlagsond3] = useState(0)
            const idd = data.body.questions[0]?.data.chat[0]?.id;
console.log(idd)
    // Add onLoding //
    const handelerFerstQuastoin = () => {
        const newQuestion = idd;
        setQuestonArray([...questonArray, newQuestion])
    }
    const handelertheAnsers = () => {
        const newAnsers = theData[queston]?.next_id;
        setAnsers(newAnsers)
    }
    //onClick to anser//
    const onClickInAnsers = (ids) => {
            setQueston(ids)
            const newQuestion = theData[ids]?.id;
            setQuestonArray([...questonArray, newQuestion])
    }
// add anser
    useEffect(() => {
        setAnsers(theData[idQuastion]?.next_id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playAnser])
    // add quastion
    useEffect(() => {
        if (eroranser) {
            setQuestonArray([...questonArray, theData[idAnser]?.next_id]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playQuastion])
    // the loti in conversation
    const nanazzy = (ids) => {
        setLl(false)
        setOnAnimasion(true)
        playSound(theData[ids]?.next_id);
        setFlagsond2(true)
        setIdFlagsond2(theData[ids]?.next_id);
}
  
const ansersoto1 = (ids) => {
    setAniansser(false)
        setEroranser(true)
        playSound(ids)
        setPlayQuastion(ids +5)
        setFlagsond1(true)
        setIdFlagsond1(ids)
}
  
    const [aniansser, setAniansser]=useState(false)
    const [ll, setLl] = useState(false)
    const [flagFlag,setFlaglFlag]=useState(true)
    const [flagFl,setFlaglFl]=useState(true)
    const [nnn,setnnn]=useState(0)
    
    const audioRef = useRef(null);
    const playSound = (ids) => {
        if (flagFl) {
            
            audioRef.current.src = theData[ids]?.sound;
            audioRef.current.play();
        }
    
    
    };
  
 
  
    function quastionSound (i) {
        var audioElement = document.getElementById(i); 
            audioElement.play();
    }
    function naser() {
        if ( +idQuastion < theData.length-1) {
            setnnn(0)
            quastionSound(0)
            setFlaglFlag(false)
        }
}
    function nasera() {
        setFlaglFl(true)
        setFlaglFlag(true)
}
    function ronaldo(i) {
        quastionSound(1 + i)
        setnnn(i + 1)
        setFlaglFlag(false)
    }
    function ronaldso(item) {
        setFlagsond1(true)
        setIdFlagsond1(item)
        playSound(item)
    }
    function rsonaldso(item) {
        setFlagsond2(true)
        setIdFlagsond2(item)
        playSound(item)
    }
    function rsonalsdso(ids) {
        playSound(ids)
        setFlagsond3(true)
        setIdFlagsond3(ids)
    }
 


    
    return (
      <div
        onClick={() => {
          setLogalert(logalert + 1);
        }}
        className={logalert < 2 ? "backgraond position-relative" : ""}
      >
        <div
          className="height10 blueviolet w-100 d-flex  align-items-center"
          onLoad={() => {
            handelertheAnsers();
          }}
        >
          <div className="container1 d-flex justify-content-between align-items-center">
            <img src="/img/Arrow.svg" alt="del" />
            <p className="mar0">in the resturant</p>
            <img
              src="/img/Translation.svg"
              alt="translet"
              onLoad={() => {
                handelerFerstQuastoin();
              }}
            />
          </div>
        </div>
        {logalert < 2 ? (
          <div>
            {logalert < 1 ? (
              <div className=" position-relative">
                <p className="position-absolute w-25 paragraf1">
                click her to translet
                </p>
                <img
                  className="position-absolute righte "
                  src="/img/shm0.svg"
                  alt="shm"
                />
              </div>
            ) : (
              <div className="position-relative">
                <img
                  className="position-absolute lefte"
                  src="/img/shm1.svg"
                  alt="shm"
                />
                <p className="position-absolute paragraf2">
                  {" "}
click here to start                </p>
              </div>
            )}
          </div>
        ) : (
          <span></span>
        )}
        <div className={`heighdade position-relative`}>
          <div className=" ">
            <audio
              ref={audioRef}
              type="audio/mpeg"
              onEnded={() => {
                setFlagsond3(false);
                setFlagsond1(false);
                setFlagsond2(false);
              }}
              onPlay={() => {}}
            >
              <source />
            </audio>
            <div className=" mmaa w-100 fl p-2 overflow ">
              <div className=" w-50 mx3  ">
                {questonArray?.map((item) => (
                  <div className="grid " key={item}>
                    {!theData[item].is_bot ? (
                      <div className="right">
                        {item === idAnser && aniansser ? (
                          <div className="toanimi2 shadow ">
                            <span className="span12"></span>
                            <span className="span22"></span>
                            <span className="span32"></span>
                          </div>
                        ) : (
                          <div className=" rounded-3  p-2 shadow  position-relative  ">
                            <div
                              className={`position-relative  ${
                                logalert < 2 ? "z-index-1" : ""
                              }`}
                            >
                              <div>
                                {(flagsond1 && item === idFlagsond1 )? (
                                  <SondLoti heightluti={30} amrgin1={true} />
                                ) : (
                                  <img
                                    className="position-absolute sondInAvatar"
                                    src="/img/64px.svg"
                                    alt="sound"
                                    onClick={() => {
                                      ronaldso(item);
                                    }}
                                  />
                                )}
                              </div>
                              <img
                                className="  position-absolute ww avatarstart"
                                src="/img/Avatar.svg"
                                alt="avatar"
                              />
                            </div>
                            <div className="afterr">
                              <p className="mar0 fw-bold textDirection">
                                {theData[item].text}
                              </p>
                              <p className="mar0  fw-bold">
                                {" "}
                                {theData[item].translate}{" "}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="left">
                        {item === idQuastion && ll ? (
                          <div className="toanimi shadow   ">
                            <span className="span1"></span>
                            <span className="span2"></span>
                            <span className="span3"></span>
                          </div>
                        ) : (
                          <div
                            className={`rounded-3  p-2   meraa  shadow   blueviolet  position-relative ${
                              logalert < 2 ? " z-index-1" : ""
                            }`}
                          >
                            <div className="position-relative">
                              <div>
                                {(flagsond2 && item === idFlagsond2) ? (
                                  <SondLoti heightluti={30} amrgin2={true} />
                                ) : (
                                  <img
                                    className="position-absolute sondInAvatarQuastion"
                                    src="/img/64px.svg"
                                    alt="sound"
                                    onClick={() => {
                                      rsonaldso(item);
                                    }}
                                  />
                                )}
                              </div>
                              <img
                                className=" mar0 ww position-absolute avatarend "
                                src="/img/Avatar.svg"
                                alt="avatar"
                              />
                            </div>
                            <div className="befor">
                              <p className="mar0  fw-bold textDirection">
                                {theData[item].text}
                              </p>
                              <p className="mar0  fw-bold">
                                {theData[item].translate}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`position-absolute shadow-lg rounded-top heightquastion `}
            >
              <div className="container1">
                <div className="d-flex justify-content-around align-items-center  ">
                  <h2>Posiible Replise</h2>
                  <label
                    className={`position-relative switch  ${
                      logalert < 2 ? "z-index-1" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      onClick={() => {
                        flagFlag ? naser() : setFlaglFlag(true);
                      }}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
                {ansers?.map((ids, i) => (
                  <div
                    key={i}
                    className={`d-flex justify-content-center py-1 position-relative  ${
                      logalert < 1 ? " z-index-1" : ""
                    }   ${!onAnimasion ? "animasion" : ""}`}
                  >
                    <div className=" rounded-3 shadow w-75 position-relative ">
                      <div>
                        <div>
                          {" "}
                          {(flagsond3 && idFlagsond3 === ids) ||
                          (i === nnn && !flagFlag) ? (
                            <SondLoti heightluti={60} amrgin3={true} />
                          ) : (
                            <img
                              className=" mar0 img-fluid position-absolute pos "
                              src="/img/64px.svg"
                              alt="sound"
                              onClick={() => {
                                flagFlag && rsonalsdso(ids);
                              }}
                            />
                          )}
                        </div>
                      </div>
                      <div>
                        <audio
                          id={i}
                          src={theData[ids].sound}
                          type="audio/mpeg"
                          onEnded={() => {
                            ansers.length > i + 1 && !flagFlag
                              ? ronaldo(i)
                              : nasera();
                          }}
                        >
                          <source src={theData[i].sound} type="audio/mpeg" />
                        </audio>
                      </div>

                      <div
                        className="aaaa"
                        onClick={() => {
                          setFlaglFl(true);
                          onClickInAnsers(ids);
                          setIdAnser(ids);
                          setIdQuastion(theData[ids].next_id);
                          setAniansser(true);
                          setPlayAnser(ids + 5);
                          setLl(true);
                          setOnAnimasion(false);
                          setFlagsond3(false);
                          setFlagsond1(false);
                          setFlagsond2(false);
                          setnnn(10);
                          setTimeout(function () {
                            ansersoto1(ids);
                          }, 1000);

                          setTimeout(function () {
                            nanazzy(ids);
                          }, 4000);
                          setTimeout(function () {
                            !flagFlag ? naser() : console.log("");
                          }, 6000);
                        }}
                      >
                        <p className="mar0 px-3 pt-1  fw-bold textDirection">
                          {" "}
                          {theData[ids].text}
                        </p>
                        <p className="mar0 px-3 pb-1  fw-bold">
                          {theData[ids].translate}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Home;