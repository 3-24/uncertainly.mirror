(function(){
  $(function(){
    var oCelebrateToday = {
      /*
      changeTitle : function(sReplaceTitle){
        var aPgTitle = document.title.split(" :: ");
        aPgTitle[1] = sReplaceTitle;
        return (document.title = aPgTitle.join(" :: "))
      },*/
      changeTitle : function(sReplaceTitle){
        if (document.title == "Series of Uncertainty"){
          return (document.title = sReplaceTitle)
        }
      },
      changeHeaderTitle : function(sReplaceHeaderTitle){
        var headerTitleChinno = document.getElementById("header_title");
        headerTitleChinno.innerHTML = sReplaceHeaderTitle;
      },
      changeDrawerName : function(sReplaceDrawerTitle, sReplaceDrawerDesc){
        var desc = document.getElementsByClassName("blogTitle");
        var title = document.getElementsByClassName("blogDesc");
        desc[0].innerHTML = sReplaceDrawerDesc;
        title[0].innerHTML = sReplaceDrawerTitle;
      },
      isAprilFool : false,
      isHangul: false,
      isHalloWeen: false,
      updateState : function(){
        var dToday = new Date();
        var dM = dToday.getMonth() +1;
        var dD = dToday.getDate();
        if (dM == 4 && dD == 1){
          this.isAprilFool = true;
        }
        if (dM == 10 && dD == 9){
          this.isHangul = true
        }
        if (dM == 10 && dD == 31){
          this.isHalloWeen = true
        }
        return this;
      }
    };
    /* April's Fool Day Celebration */
    oCelebrateToday.updateState();
    if (oCelebrateToday.isAprilFool){
      oCelebrateToday.changeTitle("Series of Certainty");
      oCelebrateToday.changeHeaderTitle("Series of Certainty");
      oCelebrateToday.changeDrawerName("Complex margin for politics and gloom","Series of Certainty");
    }
    if (oCelebrateToday.isHangul){
      oCelebrateToday.changeTitle("불확실성의 연속");
      oCelebrateToday.changeHeaderTitle("불확실성의 연속");
      oCelebrateToday.changeDrawerName("수학과 웃음을 위한 공간", "불확실성의 연속");
    }

    if (oCelebrateToday.isHalloWeen){
      oCelebrateToday.changeTitle("Series of Horror")
      oCelebrateToday.changeHeaderTitle("Series of Horror")
      oCelebrateToday.changeDrawerName("Let's assume that Axiom of Choice is False..", "Series of Horror");
    }
  });
})();
