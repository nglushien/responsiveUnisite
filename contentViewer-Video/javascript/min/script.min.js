// IBM SAP Superior Performance
// last update: 2013-10-16

$(document).ready(function () {

  'use strict';

  // AddThisShare component
  $('#micrositeContainer').addThisShare({
    addThisButtons: ['email', 'linkedin', 'facebook', 'twitter'],
    addThisProfileID: 'ra-4f0c7ed813520536',
    addThisButtonOrientation: 'vertical',
    addThisButtonSize: 'large',
    addThisButtonFollow: true
  });

    //mobile social
  addthis.layers({
    'theme' : 'transparent',
    'share' : {
      'position' : 'left',
      'services' : 'email,linkedin,facebook,twitter'
    } 
  });

  // Move wayfinderContent in front of wayfinderCornerstoneVideo
  $('.wayfinder.wayfinderVideo').addClass('group');

  // ContentTabs component
  $('.contentTabs').contentTabs({
    tabLocation: 'top',
    maintainState: true,
    pinPanelIntro: true,
    pinnedPanelLocation: 'left'
  });

//For Initial Page Loads

  if($(window).width() >= 960){
    //Make width of tabs dynamic
    var tabNavWidth = $('.contentTabs.tabsHorizontalTop .contentTabsNav').width();
    var numOfTabs = $('.contentTabs.tabsHorizontalTop .contentTabsNav li').length;
    var divide = tabNavWidth / numOfTabs;
    $('.contentTabs.tabsHorizontalTop .contentTabsNav li').width(divide - 1);
    // End dynamic width tabs

    // Adjusts the height of the Content Tabs Panel Content to match the height of the container.
    $('.contentTabsPanel').each(function(){
        var newContentTabsPanelContentHeight = $('.contentTabsPanelIntro',this).actual('height') + 62;
        $('.contentTabsPanelContent.oneColList',this).css('height',newContentTabsPanelContentHeight);
    });

  } else if($(window).width() < 960){
    $('.contentTabs.tabsHorizontalTop .contentTabsNav li').css('width','100%');

    if($('.contentTabsNav ul>li').hasClass('dropDownButton')){
          
    } else {
    //Wrap the tabs in a sub unordered list to create the drop down menu
      $('.contentTabsNav ul').wrapInner('<ul class="subMenu"></ul>');

      //Insert the drop down button that will trigger the drop down menu and set it's text to the text of the active tab
      $('.contentTabsNav ul.subMenu').before('<li class="dropDownButton active"><a href="">' + $('.contentTabsNav li.active').text() + '</a></li>');

      $('.subMenu').hide(); //Hide children by default
  
      if($('.subMenu').css('display') == 'none'){
        $('.dropDownButton a').append('<span>&#9660</span>');
      }

      //Create the onclick event to trigger the drop down
      $('.contentTabsNav>ul li').click(function(){
        event.preventDefault();
        $('.subMenu').stop(true,true).slideToggle('slow',function(){
          if($('.subMenu').css('display') == 'block') {
            $('.dropDownButton a span').remove();
            $('.dropDownButton a').append('<span>&#9650;</span>');
          } else {
            $('.dropDownButton a span').remove();
            $('.dropDownButton a').append('<span>&#9660</span>');
          }
        });

        //create the onclick event that will replace the text of the drop down button to that of the new active tab
        $('.subMenu li').click(function(){
          $('.dropDownButton a').empty();
          $('.dropDownButton a').text($(this).text()).append('<span>&#9660</span>');
        });
      });

       
    }
  }

  //For window resizing event

  $(window).resize(function() {
    clearTimeout(this.id);
    this.id = setTimeout(doneResizing, 500);
  });

  function doneResizing(){
    var winWidth = $(window).width();

    if(winWidth >= 960){

      if($('.dropDownButton').hasClass('active')){
        $('.dropDownButton').remove();
        $('.subMenu li').unwrap();

        //Make width of tabs dynamic
        var tabNavWidth = $('.contentTabs.tabsHorizontalTop .contentTabsNav').width();
        var numOfTabs = $('.contentTabs.tabsHorizontalTop .contentTabsNav li').length;
        var divide = tabNavWidth / numOfTabs;
        $('.contentTabs.tabsHorizontalTop .contentTabsNav li').width(divide - 1).css('margin-left', '1px');
        // End dynamic width tabs

        $('.contentTabsPanelIntro').removeClass('explode');
        $('.contentTabsPanelContent').removeClass('explode');

        // Adjusts the height of the Content Tabs Panel Content to match the height of the container.
        $('.contentTabsPanel').each(function(){
            var newContentTabsPanelContentHeight = $('.contentTabsPanelIntro',this).actual('height') + 62;
            $('.contentTabsPanelContent.oneColList',this).css('height',newContentTabsPanelContentHeight);
        });
        
      }
      
    } else if(winWidth < 960){
      $('.contentTabs.tabsHorizontalTop .contentTabsNav li').css('width','100%');
      $('.contentTabsNav ul li').css({
        'width': '100%',
        'border-left': '0'
      });
      $('.contentTabsPanelIntro').addClass('explode');
      $('.contentTabsPanelContent').addClass('explode');

      if($('.contentTabsNav ul>li').hasClass('dropDownButton')){
        
      } else {
      //Wrap the tabs in a sub unordered list to create the drop down menu
        $('.contentTabsNav ul').wrapInner('<ul class="subMenu"></ul>');

        //Insert the drop down button that will trigger the drop down menu and set it's text to the text of the active tab
        $('.contentTabsNav ul.subMenu').before('<li class="dropDownButton active"><a href="">' + $('.contentTabsNav li.active').text() + '</a></li>');

        $('.subMenu').hide(); //Hide children by default

        if($('.subMenu').css('display') == 'none'){
          $('.dropDownButton a').append('<span>&#9660</span>');
        }
    
        //Create the onclick event to trigger the drop down
      $('.contentTabsNav>ul li').click(function(){
        event.preventDefault();
        $('.subMenu').stop(true,true).slideToggle('slow',function(){
          if($('.subMenu').css('display') == 'block') {
            $('.dropDownButton a span').remove();
            $('.dropDownButton a').append('<span>&#9650;</span>');
          } else {
            $('.dropDownButton a span').remove();
            $('.dropDownButton a').append('<span>&#9660</span>');
          }
        });

        //create the onclick event that will replace the text of the drop down button to that of the new active tab
        $('.subMenu li').click(function(){
          $('.dropDownButton a').empty();
          $('.dropDownButton a').text($(this).text()).append('<span>&#9660</span>');
        });
      });
      }
    }  
  }

  $('#whatIsThis > li a:first-child').click(function () {
      $('#whatIsThis > li ul').slideToggle(200);
    });

    $('#whatIsThis > li a.close').click(function () {
      $('#whatIsThis > li ul').slideUp(200);
    });

    $('#whatIsThis li a').removeAttr('href');

    // $('.contentTabsPanel:eq(0) .contentTabsPanelIntro .contentTabsFeaturedContent p:eq(3)').nextUntil($('.contentTabsPanelContent')).wrapAll('<div class="contentTabsFeaturedContent" />');
    // $('.contentTabsPanel:eq(0) .contentTabsPanelIntro .contentTabsFeaturedContent .contentTabsPanelBanner:eq(0)').nextUntil('div').andSelf().wrapAll('<div class="contentTabsFeaturedContent" />');
    // $('.contentTabsPanel:eq(0) .contentTabsPanelIntro .contentTabsFeaturedContent .contentTabsFeaturedContent:eq(0)').parent().css({'border':'0','background':'none','padding-top':'0'});
    // $('.contentTabsPanel:eq(0) .contentTabsPanelIntro .contentTabsFeaturedContent .contentTabsFeaturedContent').css('margin-left',"-10px");
    // $('.contentTabsFeaturedContent').eq(1).parent().removeClass();
    // $('.contentTabsFeaturedContent').eq(0).parent().attr('id', 'assetParent');
    
    // $('.contentTabsPanel:eq(1) .contentTabsPanelIntro .contentTabsFeaturedContent p:eq(3)').nextUntil($('.contentTabsPanelContent')).wrapAll('<div class="contentTabsFeaturedContent" />');
    // $('.contentTabsPanel:eq(1) .contentTabsPanelIntro .contentTabsFeaturedContent .contentTabsPanelBanner:eq(0)').nextUntil('div').andSelf().wrapAll('<div class="contentTabsFeaturedContent" />');
    // $('.contentTabsPanel:eq(1) .contentTabsPanelIntro .contentTabsFeaturedContent .contentTabsFeaturedContent:eq(0)').parent().css({'border':'0','background':'none','padding-top':'0'});
    // $('.contentTabsPanel:eq(1) .contentTabsPanelIntro .contentTabsFeaturedContent .contentTabsFeaturedContent').css('margin-left',"-10px");
    // $('.contentTabsFeaturedContent').eq(4).parent().removeClass();
    // $('.contentTabsFeaturedContent').eq(3).parent().attr('id', 'assetParent');
    
    // $('.contentTabsPanel:eq(2) .contentTabsPanelIntro .contentTabsFeaturedContent p:eq(3)').nextUntil($('.contentTabsPanelContent')).wrapAll('<div class="contentTabsFeaturedContent" />');
    // $('.contentTabsPanel:eq(2) .contentTabsPanelIntro .contentTabsFeaturedContent .contentTabsPanelBanner:eq(0)').nextUntil('div').andSelf().wrapAll('<div class="contentTabsFeaturedContent" />');
    // $('.contentTabsPanel:eq(2) .contentTabsPanelIntro .contentTabsFeaturedContent .contentTabsFeaturedContent:eq(0)').parent().css({'border':'0','background':'none','padding-top':'0'});
    // $('.contentTabsPanel:eq(2) .contentTabsPanelIntro .contentTabsFeaturedContent .contentTabsFeaturedContent').css('margin-left',"-10px");
    // $('.contentTabsFeaturedContent').eq(6).parent().removeClass();
    // $('.contentTabsFeaturedContent').eq(5).parent().attr('id', 'assetParent');

    // $('.contentTabsPanel:eq(3) .contentTabsPanelIntro .contentTabsFeaturedContent p:eq(3)').nextUntil($('.contentTabsPanelContent')).wrapAll('<div class="contentTabsFeaturedContent" />');
    // $('.contentTabsPanel:eq(3) .contentTabsPanelIntro .contentTabsFeaturedContent .contentTabsPanelBanner:eq(0)').nextUntil('div').andSelf().wrapAll('<div class="contentTabsFeaturedContent" />');
    // $('.contentTabsPanel:eq(3) .contentTabsPanelIntro .contentTabsFeaturedContent .contentTabsFeaturedContent:eq(0)').parent().css({'border':'0','background':'none','padding-top':'0'});
    // $('.contentTabsPanel:eq(3) .contentTabsPanelIntro .contentTabsFeaturedContent .contentTabsFeaturedContent').css('margin-left',"-10px");


});

/*!
* AddThisShare v1.0.7 (http://okize.github.com/)
* Copyright (c) 2013 | Licensed under the MIT license - http://www.opensource.org/licenses/mit-license.php
*/
(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){"use strict";var i="addThisShare",s={addThisProfileID:!1,addThisApiVersion:"300",addThisButtons:["email","linkedin","facebook","twitter"],addThisCss:!0,addThisButtonSize:"small",addThisButtonOrientation:"horizontal",addThisButtonFollow:!1,addThisTwitterTemplate:"{{title}} {{url}}",googleAnalyticsID:!1},o=function(o,d){this.element=o,this.$el=t(this.element),this.doc=t(window.document),this.options=t.extend({},s,d),this._defaults=s,this._name=i,this.addThisButtonsContainer={},this.addThisButtonsContainerHeight=null,this.addThisButtonFollowLimit=null,this.addThisScript="//s7.addthis.com/js/"+this.options.addThisApiVersion+"/addthis_widget.js",this.addThisConfiguration={pubid:this.options.addThisProfileID,url:window.location.href,title:window.document.title,ui_use_css:this.options.addThisCss,domready:!0,async:!0,data_track_clickback:!1,data_track_addressbar:!1,data_ga_tracker:this.options.googleAnalyticsID,data_ga_social:!0},this.addThisShareConfiguration={templates:{twitter:this.options.addThisTwitterTemplate}},this.addThisScriptCache={},this.init()};o.prototype={init:function(){var i=this;t.when(this.loadAddthisScript(this.addThisScript)).then(function(){i.isAddThisLoaded(!0),i.setAddThisConfiguration(),i.$el.append(i.buildAddThisHtml(i.options.addThisButtons)),i.addThisButtonsContainer.show(),i.options.addThisButtonFollow&&i.initializeFollow()})},isAddThisLoaded:function(t){return arguments.length>0&&"boolean"==typeof t&&this.doc.data("addThisScriptLoaded",t),this.doc.data("addThisScriptLoaded")===void 0?(this.doc.data("addThisScriptLoaded",!1),!1):this.doc.data("addThisScriptLoaded")},setAddThisConfiguration:function(){this.isAddThisReady()===!0&&window.addthis_config===void 0&&(window.addthis_config=this.addThisConfiguration,window.addthis_share=this.addThisShareConfiguration)},loadAddthisScript:function(i){var s=this.addThisScriptCache[i];return s||(s=t.ajax({url:this.addThisScript,cache:!0,dataType:"script"}),this.addThisScriptCache[i]=s),s},isAddThisReady:function(){return window.addthis===void 0?!1:!0},buildAddThisHtml:function(i){var s={email:{className:"addthis_button_email",title:"Email A Friend"},linkedin:{className:"addthis_button_linkedin",title:"Share on LinkedIn"},facebook:{className:"addthis_button_facebook",title:"Share on Facebook"},twitter:{className:"addthis_button_twitter",title:"Share on Twitter"},googleplus:{className:"addthis_button_google_plusone_share",title:"Share on Google+"},addthis:{className:"addthis_button_compact",title:"Share with AddThis Services"}},o={small:"addthis_default_style",medium:"addthis_20x20_style",large:"addthis_32x32_style"},d={horizontal:"addThisHorizontal",vertical:"addThisVertical"},a=function(t){for(var i="",o=0,d=t.length;d>o;o++)t[o]in s&&(i+='<a class="'+s[t[o]].className+'" title="'+s[t[o]].title+'" href="#"></a>');return i},n=t("<div>",{"class":"socialShare-addThis "+d[this.options.addThisButtonOrientation]+" "+o[this.options.addThisButtonSize],html:a(i)});return this.addThisButtonsContainer=n,n},initializeFollow:function(){var i=this.addThisButtonsContainer,s=t("<div>",{"class":"socialShare-outer"}),o=t("<div>",{"class":"socialShare-inner",width:this.$el.width()}),d={cssTop:parseInt(i.css("top"),10),offTop:parseInt(this.$el.offset().top,10),contentHeight:parseInt(this.$el.outerHeight(),10)},a=this,n=t(window),e=function(t,i){var s,o,d,a,n=0,e=function(){n=new Date,d=null,a=t.apply(s,o)};return function(){var h=new Date,l=i-(h-n);return s=this,o=arguments,0>=l?(clearTimeout(d),d=null,n=h,a=t.apply(s,o)):d||(d=setTimeout(e,l)),a}},h=function(){null===a.addThisButtonsContainerHeight&&(a.addThisButtonsContainerHeight=i.outerHeight()),null===a.addThisButtonFollowLimit&&(a.addThisButtonFollowLimit=d.contentHeight+d.offTop-d.cssTop-a.addThisButtonsContainerHeight),h=function(){}},l=function(){var t=function(t,o){s.css({position:t}),i.css({top:o+"px"})};0>=d.offTop-n.scrollTop()?a.addThisButtonFollowLimit<=n.scrollTop()?t("absolute",a.addThisButtonFollowLimit+d.cssTop):t("fixed",d.cssTop):d.offTop-n.scrollTop()>0&&t("absolute",d.cssTop+d.offTop)},r=e(l,25);i.css({top:d.cssTop+d.offTop+"px"}).prependTo("body").addClass("following").wrap(s).wrap(o),s=t(".socialShare-outer"),n.on("scroll",function(){h(),r()})}},t.fn[i]=function(s){return this.each(function(){t.data(this,"plugin_"+i)||t.data(this,"plugin_"+i,new o(this,s))})}});

/*!
Content Tabs v1.0.5 (http://okize.github.com/)
Copyright (c) 2013 | Licensed under the MIT license
http://www.opensource.org/licenses/mit-license.php
*/
(function(){(function(t){return"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){"use strict";var e,s,n;n="contentTabs",s={displayTabs:!0,tabLocation:"left",tabActiveClass:"active",maintainState:!1,indexOfOpenPanel:0,pinPanelIntro:!1,pinnedPanelLocation:"top"},e=function(){function e(e,i){this.element=e,this.el=t(this.element),this.options=t.extend({},s,i),this._defaults=s,this._name=n,this.tabs=null,this.panels=null,this.tabLocationClassMap={top:"tabsHorizontalTop",bottom:"tabsHorizontalBottom",left:"tabsVerticalLeft",right:"tabsVerticalRight"},this.pinnedPanelLocationClassMap={top:"pinnedPanelTop",left:"pinnedPanelLeft"},this.activeTab=this.options.indexOfOpenPanel,this.stateKey="tabState",this.hashObject=null,this.init()}return e.prototype.init=function(){var e,s=this;return console.log(this.options.pinnedPanelLocation),this.options.displayTabs?(this.options.maintainState&&null!=this.getStateFromHash()&&this.updateState(this.activeTab),this.setTabsPosition(this.tabLocationClassMap[this.options.tabLocation]),this.options.pinPanelIntro&&this.pinPanels(this.el),e=this.getTabs(),e.hasClass(this.options.tabActiveClass)||e.eq(this.activeTab).addClass(this.options.tabActiveClass),e.eq(e.length-1).addClass("last"),e.on("click",function(e){return e.preventDefault(),s.updateState(t(e.currentTarget).index())})):(this.removeTabs(),void 0)},e.prototype.getStateFromHash=function(){var t,e;return this.hashObject=this.getHashObject(),this.hashObject?(t=null!=(e=this.hashObject[this.stateKey])?e:null,t?this.activeTab=this.hashObject[this.stateKey]:null):null},e.prototype.getHashObject=function(){var t,e,s,n,i,a,o;if(n=this.getUrlHash(),!n)return null;for(e={},s=n.split("&"),a=0,o=s.length;o>a;a++)i=s[a],t=i.split("="),e[t[0]]=t.length>1?t[1]:void 0;return e},e.prototype.buildHashObject=function(){return t.param(this.hashObject)},e.prototype.updateHash=function(t){return t+="",this.hashObject=this.getHashObject(),this.hashObject||(this.hashObject={}),this.hashObject[this.stateKey]=t,this.setUrlHash(this.buildHashObject())},e.prototype.getUrlHash=function(){return window.location.hash?window.location.hash.substring(1):null},e.prototype.setUrlHash=function(t){return window.location.hash=t},e.prototype.updateState=function(t){return this.activeTab=t,this.selectTab(t),this.selectPanel(t)},e.prototype.removeTabs=function(){return this.el.addClass("tabsNone"),this.getTabs().remove()},e.prototype.setTabsPosition=function(t){return this.el.addClass(t)},e.prototype.getTabs=function(){return this.tabs||(this.tabs=this.el.find(".contentTabsNav").find("li")),this.tabs},e.prototype.selectTab=function(t){return this.options.maintainState&&this.updateHash(t),this.getTabs().removeClass(this.options.tabActiveClass).eq(t).addClass(this.options.tabActiveClass)},e.prototype.getPanels=function(){return this.panels||(this.panels=this.el.find(".contentTabsPanel")),this.panels},e.prototype.selectPanel=function(t){return this.getPanels().hide().eq(t).show()},e.prototype.pinPanels=function(){var e,s;return s=void 0,e=void 0,this.el.addClass("pinPanelIntro").addClass(this.pinnedPanelLocationClassMap[this.options.pinnedPanelLocation]),s=this.el.find(".contentTabsPanelIntro"),s.each(function(){return e=t(this),e.insertBefore(e.parent())})},e}(),t.fn[n]=function(s){return this.each(function(){t.data(this,"plugin_#{pluginName}")||t.data(this,"plugin_#{pluginName}",new e(this,s))})}})}).call(this);

/* Copyright 2012, Ben Lin (http://dreamerslab.com/)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.15
 *
 * Requires: jQuery >= 1.2.3
 */
(function(a){a.fn.addBack=a.fn.addBack||a.fn.andSelf;a.fn.extend({actual:function(b,l){if(!this[b]){throw'$.actual => The jQuery method "'+b+'" you called does not exist';}var f={absolute:false,clone:false,includeMargin:false};var i=a.extend(f,l);var e=this.eq(0);var h,j;if(i.clone===true){h=function(){var m="position: absolute !important; top: -1000 !important; ";e=e.clone().attr("style",m).appendTo("body");};j=function(){e.remove();};}else{var g=[];var d="";var c;h=function(){c=e.parents().addBack().filter(":hidden");d+="visibility: hidden !important; display: block !important; ";if(i.absolute===true){d+="position: absolute !important; ";}c.each(function(){var m=a(this);g.push(m.attr("style"));m.attr("style",d);});};j=function(){c.each(function(m){var o=a(this);var n=g[m];if(n===undefined){o.removeAttr("style");}else{o.attr("style",n);}});};}h();var k=/(outer)/.test(b)?e[b](i.includeMargin):e[b]();j();return k;}});})(jQuery);