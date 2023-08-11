import React from 'react'

import { Helmet } from 'react-helmet'

import './subscription.css'

const Subscription = (props) => {
  function handley(e){
    var mon = document.getElementById("Monthly");
    var yr = document.getElementById("Yearly");
    mon.style.color = "#FFFFFF";
    mon.style.backgroundColor = "#00000000";
    yr.style.color = "#1E4C91";
    yr.style.backgroundColor = "#FFFFFF";
    document.getElementById("mp").textContent = 1000;
    document.getElementById("bp").textContent = 2000;
    document.getElementById("sp").textContent = 5000;
    document.getElementById("pp").textContent = 7000;
    document.getElementById("t1").textContent = "Monthly Price";
  }
  function handley(e){
    var mon = document.getElementById("Monthly");
    var yr = document.getElementById("Yearly");
    mon.style.color = "#FFFFFF";
    mon.style.backgroundColor = "#00000000";
    yr.style.color = "#1E4C91";
    yr.style.backgroundColor = "#FFFFFF";
    document.getElementById("mp").textContent = 1000;
    document.getElementById("bp").textContent = 2000;
    document.getElementById("sp").textContent = 5000;
    document.getElementById("pp").textContent = 7000;
    document.getElementById("t1").textContent = "Yearly Price";
  }
  function mobile(e){
    document.getElementById("t2").style.color="#1E4C91";
    document.getElementById("t6").style.color="#1E4C91";
    document.getElementById("t10").style.color="#1E4C91";
    document.getElementById("t11").style.color="#1E4C91";
    document.getElementById("mp").style.color="#1E4C91";
    document.getElementById("bp").style.color="#595959";
    document.getElementById("sp").style.color="#595959";
    document.getElementById("pp").style.color="#595959";
    document.getElementById("t3").style.color="#595959";
    document.getElementById("t4").style.color="#595959";
    document.getElementById("t5").style.color="#595959";
    document.getElementById("t7").style.color="#595959";
    document.getElementById("t8").style.color="#595959";
    document.getElementById("t9").style.color="#595959";
    document.getElementById("t12").style.color="#595959";
    document.getElementById("t13").style.color="#595959";
    document.getElementById("t14").style.color="#595959";
    document.getElementById("t15").style.color="#595959";
    document.getElementById("t16").style.color="#595959";
    document.getElementById("t17").style.color="#595959";
    document.getElementById("t18").style.color="#595959";
    document.getElementById("t19").style.color="#595959";
    document.getElementById("t20").style.color="#595959";
    document.getElementById("t21").style.color="#595959";
    document.getElementById("t22").style.color="#595959";
    document.getElementById("t23").style.color="#595959";
    document.getElementById("a4").style.visibility='hidden';
    document.getElementById("a2").style.visibility='hidden';
    document.getElementById("a3").style.visibility='hidden';
    document.getElementById("a1").style.visibility='visible';
    document.getElementById("b4").style.backgroundColor="#6883A6";
    document.getElementById("b2").style.backgroundColor="#6883A6";
    document.getElementById("b3").style.backgroundColor="#6883A6";
    document.getElementById("b1").style.backgroundColor="#1E4C91";
  }
  function basic(e){
    document.getElementById("t2").style.color="#595959";
    document.getElementById("t6").style.color="#595959";
    document.getElementById("t10").style.color="#595959";
    document.getElementById("t11").style.color="#595959";
    document.getElementById("mp").style.color="#595959";
    document.getElementById("bp").style.color="#1E4C91";
    document.getElementById("sp").style.color="#595959";
    document.getElementById("pp").style.color="#595959";
    document.getElementById("t3").style.color="#1E4C91";
    document.getElementById("t4").style.color="#595959";
    document.getElementById("t5").style.color="#595959";
    document.getElementById("t7").style.color="#1E4C91";
    document.getElementById("t8").style.color="#595959";
    document.getElementById("t9").style.color="#595959";
    document.getElementById("t12").style.color="#1E4C91";
    document.getElementById("t13").style.color="#1E4C91";
    document.getElementById("t14").style.color="#1E4C91";
    document.getElementById("t15").style.color="#1E4C91";
    document.getElementById("t16").style.color="#595959";
    document.getElementById("t17").style.color="#595959";
    document.getElementById("t18").style.color="#595959";
    document.getElementById("t19").style.color="#595959";
    document.getElementById("t20").style.color="#595959";
    document.getElementById("t21").style.color="#595959";
    document.getElementById("t22").style.color="#595959";
    document.getElementById("t23").style.color="#595959";
    document.getElementById("a1").style.visibility='hidden';
    document.getElementById("a4").style.visibility='hidden';
    document.getElementById("a3").style.visibility='hidden';
    document.getElementById("a2").style.visibility='visible';
    document.getElementById("b1").style.backgroundColor="#6883A6";
    document.getElementById("b4").style.backgroundColor="#6883A6";
    document.getElementById("b3").style.backgroundColor="#6883A6";
    document.getElementById("b2").style.backgroundColor="#1E4C91";
  }
  function standard(e){
    document.getElementById("t2").style.color="#595959";
    document.getElementById("t6").style.color="#595959";
    document.getElementById("t10").style.color="#595959";
    document.getElementById("t11").style.color="#595959";
    document.getElementById("mp").style.color="#595959";
    document.getElementById("bp").style.color="#595959";
    document.getElementById("sp").style.color="#1E4C91";
    document.getElementById("pp").style.color="#595959";
    document.getElementById("t3").style.color="#595959";
    document.getElementById("t4").style.color="#1E4C91";
    document.getElementById("t5").style.color="#595959";
    document.getElementById("t7").style.color="#595959";
    document.getElementById("t8").style.color="#1E4C91";
    document.getElementById("t9").style.color="#595959";
    document.getElementById("t12").style.color="#595959";
    document.getElementById("t13").style.color="#595959";
    document.getElementById("t14").style.color="#595959";
    document.getElementById("t15").style.color="#595959";
    document.getElementById("t16").style.color="#1E4C91";
    document.getElementById("t17").style.color="#1E4C91";
    document.getElementById("t18").style.color="#1E4C91";
    document.getElementById("t19").style.color="#1E4C91";
    document.getElementById("t20").style.color="#595959";
    document.getElementById("t21").style.color="#595959";
    document.getElementById("t22").style.color="#595959";
    document.getElementById("t23").style.color="#595959";
    document.getElementById("a1").style.visibility='hidden';
    document.getElementById("a2").style.visibility='hidden';
    document.getElementById("a4").style.visibility='hidden';
    document.getElementById("a3").style.visibility='visible';
    document.getElementById("b1").style.backgroundColor="#6883A6";
    document.getElementById("b2").style.backgroundColor="#6883A6";
    document.getElementById("b4").style.backgroundColor="#6883A6";
    document.getElementById("b3").style.backgroundColor="#1E4C91";
  }
  function premium(e){
    document.getElementById("t2").style.color="#595959";
    document.getElementById("t6").style.color="#595959";
    document.getElementById("t10").style.color="#595959";
    document.getElementById("t11").style.color="#595959";
    document.getElementById("mp").style.color="#595959";
    document.getElementById("bp").style.color="#595959";
    document.getElementById("sp").style.color="#595959";
    document.getElementById("pp").style.color="#1E4C91";
    document.getElementById("t3").style.color="#595959";
    document.getElementById("t4").style.color="#595959";
    document.getElementById("t5").style.color="#1E4C91";
    document.getElementById("t7").style.color="#595959";
    document.getElementById("t8").style.color="#595959";
    document.getElementById("t9").style.color="#1E4C91";
    document.getElementById("t12").style.color="#595959";
    document.getElementById("t13").style.color="#595959";
    document.getElementById("t14").style.color="#595959";
    document.getElementById("t15").style.color="#595959";
    document.getElementById("t16").style.color="#595959";
    document.getElementById("t17").style.color="#595959";
    document.getElementById("t18").style.color="#595959";
    document.getElementById("t19").style.color="#595959";
    document.getElementById("t20").style.color="#1E4C91";
    document.getElementById("t21").style.color="#1E4C91";
    document.getElementById("t22").style.color="#1E4C91";
    document.getElementById("t23").style.color="#1E4C91";
    document.getElementById("a1").style.visibility='hidden';
    document.getElementById("a2").style.visibility='hidden';
    document.getElementById("a3").style.visibility='hidden';
    document.getElementById("a4").style.visibility='visible';
    document.getElementById("b1").style.backgroundColor="#6883A6";
    document.getElementById("b2").style.backgroundColor="#6883A6";
    document.getElementById("b3").style.backgroundColor="#6883A6";
    document.getElementById("b4").style.backgroundColor="#1E4C91";
  }
  return (
    <div className="subscription-container">
      <Helmet>
        <title>Subscription</title>
        <meta
          property="og:title"
          content="Subscription"
        />
      </Helmet>
      <span className="subscription-text">Choose the right plan for you</span>
      <div className="subscription-container01">
        <div className="subscription-container02">
          <div className="subscription-container03">
            <span className="subscription-text01" id="Monthly" onClick={(e)=>handlem(e)}>Monthly</span>
          </div>
          <div className="subscription-container04">
            <span className="subscription-text02" id="Yearly" onClick={(e)=>handley(e)}>Yearly</span>
          </div>
        </div>
        <div className="subscription-container05" onClick={(e)=>mobile(e)} id="b1">
          <div className="subscription-container06" id="a1"></div>
          <span className="subscription-text03">Mobile</span>
        </div>
        <div className="subscription-container07" onClick={(e)=>basic(e)} id="b2">
          <div className="subscription-container08" id="a2"></div>
          <span className="subscription-text04">Basic</span>
        </div>
        <div className="subscription-container09" onClick={(e)=>standard(e)} id="b3">
          <div className="subscription-container10" id="a3"></div>
          <span className="subscription-text05">Standard</span>
        </div>
        <div className="subscription-container11" onClick={(e)=>premium(e)}id="b4">
          <div className="subscription-container12" id="a4"></div>
          <span className="subscription-text06">Premium</span>
        </div>
      </div>
      <div className="subscription-container13">
        <span className="subscription-text07" id="t1">Monthly Price</span>
        <svg viewBox="0 0 513.1702857142857 1024" className="subscription-icon">
          <path d="M513.143 268.571v58.286c0 10.286-8 18.286-18.286 18.286h-96c-17.714 109.714-101.714 181.143-231.429 196.571 85.143 90.857 176 200.571 262.286 306.286 4.571 5.143 5.714 13.143 2.286 19.429-2.857 6.286-9.143 10.286-16.571 10.286h-111.429c-5.714 0-10.857-2.286-14.286-6.857-92-110.286-176.571-211.429-284.571-326.286-3.429-3.429-5.143-8-5.143-12.571v-72.571c0-9.714 8-18.286 18.286-18.286h64c100.571 0 163.429-33.714 180-96h-244c-10.286 0-18.286-8-18.286-18.286v-58.286c0-10.286 8-18.286 18.286-18.286h236c-21.714-42.857-73.143-64.571-153.143-64.571h-82.857c-10.286 0-18.286-8.571-18.286-18.286v-76c0-10.286 8-18.286 18.286-18.286h475.429c10.286 0 18.286 8 18.286 18.286v58.286c0 10.286-8 18.286-18.286 18.286h-133.143c18.286 23.429 30.286 50.857 36.571 82.286h97.714c10.286 0 18.286 8 18.286 18.286z"></path>
        </svg>
        <span className="subscription-text08" id="mp">100</span>
        <svg
          viewBox="0 0 513.1702857142857 1024"
          className="subscription-icon2"
        >
          <path d="M513.143 268.571v58.286c0 10.286-8 18.286-18.286 18.286h-96c-17.714 109.714-101.714 181.143-231.429 196.571 85.143 90.857 176 200.571 262.286 306.286 4.571 5.143 5.714 13.143 2.286 19.429-2.857 6.286-9.143 10.286-16.571 10.286h-111.429c-5.714 0-10.857-2.286-14.286-6.857-92-110.286-176.571-211.429-284.571-326.286-3.429-3.429-5.143-8-5.143-12.571v-72.571c0-9.714 8-18.286 18.286-18.286h64c100.571 0 163.429-33.714 180-96h-244c-10.286 0-18.286-8-18.286-18.286v-58.286c0-10.286 8-18.286 18.286-18.286h236c-21.714-42.857-73.143-64.571-153.143-64.571h-82.857c-10.286 0-18.286-8.571-18.286-18.286v-76c0-10.286 8-18.286 18.286-18.286h475.429c10.286 0 18.286 8 18.286 18.286v58.286c0 10.286-8 18.286-18.286 18.286h-133.143c18.286 23.429 30.286 50.857 36.571 82.286h97.714c10.286 0 18.286 8 18.286 18.286z"></path>
        </svg>
        <span className="subscription-text09" id="bp">200</span>
        <svg
          viewBox="0 0 513.1702857142857 1024"
          className="subscription-icon4"
        >
          <path d="M513.143 268.571v58.286c0 10.286-8 18.286-18.286 18.286h-96c-17.714 109.714-101.714 181.143-231.429 196.571 85.143 90.857 176 200.571 262.286 306.286 4.571 5.143 5.714 13.143 2.286 19.429-2.857 6.286-9.143 10.286-16.571 10.286h-111.429c-5.714 0-10.857-2.286-14.286-6.857-92-110.286-176.571-211.429-284.571-326.286-3.429-3.429-5.143-8-5.143-12.571v-72.571c0-9.714 8-18.286 18.286-18.286h64c100.571 0 163.429-33.714 180-96h-244c-10.286 0-18.286-8-18.286-18.286v-58.286c0-10.286 8-18.286 18.286-18.286h236c-21.714-42.857-73.143-64.571-153.143-64.571h-82.857c-10.286 0-18.286-8.571-18.286-18.286v-76c0-10.286 8-18.286 18.286-18.286h475.429c10.286 0 18.286 8 18.286 18.286v58.286c0 10.286-8 18.286-18.286 18.286h-133.143c18.286 23.429 30.286 50.857 36.571 82.286h97.714c10.286 0 18.286 8 18.286 18.286z"></path>
        </svg>
        <span className="subscription-text10" id="sp">500</span>
        <svg
          viewBox="0 0 513.1702857142857 1024"
          className="subscription-icon6"
        >
          <path d="M513.143 268.571v58.286c0 10.286-8 18.286-18.286 18.286h-96c-17.714 109.714-101.714 181.143-231.429 196.571 85.143 90.857 176 200.571 262.286 306.286 4.571 5.143 5.714 13.143 2.286 19.429-2.857 6.286-9.143 10.286-16.571 10.286h-111.429c-5.714 0-10.857-2.286-14.286-6.857-92-110.286-176.571-211.429-284.571-326.286-3.429-3.429-5.143-8-5.143-12.571v-72.571c0-9.714 8-18.286 18.286-18.286h64c100.571 0 163.429-33.714 180-96h-244c-10.286 0-18.286-8-18.286-18.286v-58.286c0-10.286 8-18.286 18.286-18.286h236c-21.714-42.857-73.143-64.571-153.143-64.571h-82.857c-10.286 0-18.286-8.571-18.286-18.286v-76c0-10.286 8-18.286 18.286-18.286h475.429c10.286 0 18.286 8 18.286 18.286v58.286c0 10.286-8 18.286-18.286 18.286h-133.143c18.286 23.429 30.286 50.857 36.571 82.286h97.714c10.286 0 18.286 8 18.286 18.286z"></path>
        </svg>
        <span className="subscription-text11" id="pp">700</span>
      </div>
      <div className="subscription-container14">
        <span className="subscription-text12">Video Qualty</span>
        <span className="subscription-text13" id="t2">Good</span>
        <span className="subscription-text14" id="t3">Good</span>
        <span className="subscription-text15" id="t4">Better</span>
        <span className="subscription-text16" id="t5">Best</span>
      </div>
      <div className="subscription-container15">
        <span className="subscription-text17">Resolution</span>
        <span className="subscription-text18" id="t6">480p</span>
        <span className="subscription-text19" id="t7">480p</span>
        <span className="subscription-text20" id="t8">1080p</span>
        <span className="subscription-text21" id="t9">4k+HDR</span>
      </div>
      <div className="subscription-container16">
        <span className="subscription-text22">
          Devices you can use to watch
        </span>
        <span className="subscription-text23" id="t10">Phone</span>
        <span className="subscription-text24" id="t12">Phone</span>
        <span className="subscription-text25" id="t16">Phone</span>
        <span className="subscription-text26" id="t20">Phone</span>
        <span className="subscription-text27" id="t14">TV</span>
        <span className="subscription-text28" id="t18">TV</span>
        <span className="subscription-text29" id="t22">TV</span>
        <span className="subscription-text30" id="t15">Computer</span>
        <span className="subscription-text31" id="t19">Computer</span>
        <span className="subscription-text32" id="t23">Computer</span>
        <span className="subscription-text33" id="t11">Tablet</span>
        <span className="subscription-text34" id="t13">Tablet</span>
        <span className="subscription-text35" id="t17">Tablet</span>
        <span className="subscription-text36" id="t21">Tablet</span>
      </div>
      <button type="button" className="subscription-button button">
        Next
      </button>
    </div>
  )
  function handlem(e){
    var mon = document.getElementById("Monthly");
    var yr = document.getElementById("Yearly");
    yr.style.color = "#FFFFFF";
    yr.style.backgroundColor = "#00000000";
    mon.style.color = "#1E4C91";
    mon.style.backgroundColor = "#FFFFFF";
    document.getElementById("mp").textContent = 100;
    document.getElementById("bp").textContent = 200;
    document.getElementById("sp").textContent = 500;
    document.getElementById("pp").textContent = 700;
    document.getElementById("t1").textContent = "Monthly Price";
  }
}

export default Subscription
