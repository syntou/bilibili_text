import * as React from "react";
import * as style from "./style.scss";
import TuiGuang from "./TuiGuang";
import BaiNianJi from "./BaiNianJi";
import Third from "./Third";
import Top from "./Top";
import Fourth from "./Fourth";
import Sixth from "./Sixth";
import Eighth from "./Sixth";
import Ninth from "./Sixth";
import Tenth from "./Sixth";
import Eleventh from "./Sixth";
import Thirteenth from "./Sixth";
import Fourteenth from "./Sixth";
import Fifteenth from "./Sixth";
import Sixteenth from "./Sixth";
import Seventeenth from "./Sixth";
import Eighteenth from "./Sixth";
import Nineteenth from "./Sixth";
import TwentyFirst from "./Sixth";
import TwentySecond from "./Sixth";
import TwentyThird from "./Sixth";
import TwentyFourth from "./Sixth";
import TwentyFifth from "./TwentyFifth";

export default function Body() {
  return <div className={style.a}>
    <Top />
    <TuiGuang />
    <BaiNianJi />
    <Third />
    <Fourth />
    <Sixth tag="番剧动态" id="Sixth"/>
    <Eighth tag="音乐" id="Eighth" />
    <Ninth tag="舞蹈" id="Ninth" />
    <Tenth tag="游戏" id="Tenth" />
    <Eleventh tag="科技" id="Eleventh" />
    <Thirteenth tag="国产原创相关" id="Thirteenth" />
    <Fourteenth tag="数码" id="Fourteenth" />
    <Fifteenth tag="生活" id="Fifteenth" />
    <Sixteenth tag="鬼畜" id="Sixteenth" />
    <Seventeenth tag="时尚" id="Seventeenth" />
    <Eighteenth tag="广告" id="Eighteenth" />
    <Nineteenth tag="娱乐" id="Nineteenth" />
    <TwentyFirst tag="电影" id="TwentyFirst" />
    <TwentySecond tag="电视剧" id="TwentySecond" />
    <TwentyThird tag="影视" id="TwentyThird" />
    <TwentyFourth tag="电视剧" id="TwentyFourth" />
    <TwentyFifth />
  </div>
}