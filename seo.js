var _0xf1bcef = function () {
  var _0x3e34db = true;
  return function (_0x1c71d7, _0x531898) {
    var _0x8422a7 = _0x3e34db ? function () {
      if (_0x531898) {
        var _0x4bf8e5 = _0x531898.apply(_0x1c71d7, arguments);
        _0x531898 = null;
        return _0x4bf8e5;
      }
    } : function () {};
    _0x3e34db = false;
    return _0x8422a7;
  };
}();
var _0x1ee9b3 = _0xf1bcef(this, function () {
  return _0x1ee9b3.toString().search('(((.+)+)+)+$').toString().constructor(_0x1ee9b3).search("(((.+)+)+)+$");
});
_0x1ee9b3();
var myroom = null;
var ncolors = [];
var bcc = 0x0;
var replyId = null;
var rcach = {};
var mic = [];
var myid = null;
var user_pic = null;
var room_pic = null;
(() => {
  var _0x1b92c3 = {};
  var _0xd60efb = {};
  var _0x1b09ef;
  var _0x4a0225 = {};
  var _0x5af50f = null;
  var _0x40defc = {};
  var _0xc399c4 = {};
  function _0x4c4007(_0x579335) {
    var _0x322cc5 = 0x0;
    var _0x2d0a85 = _0x579335.length;
    var _0xcccacf = 0x0;
    if (_0x2d0a85 > 0x0) {
      while (_0xcccacf < _0x2d0a85) {
        _0x322cc5 = (_0x322cc5 << 0x5) - _0x322cc5 + _0x579335.charCodeAt(_0xcccacf++) | 0x0;
      }
    }
    return _0x322cc5;
  }
  ;
  var _0x49c686 = {};
  var _0x177ecd = 0x0;
  var _0x3e0ee4;
  var _0x1b6063 = false;
  var _0x4a9a27 = false;
  var _0x1e1f24 = null;
  var _0xaa94af = [];
  var _0x26cafb = false;
  var _0x1b4fc7 = null;
  var _0x19afeb = false;
  var _0x2a6732 = false;
  var _0x57ceeb = false;
  var _0x344b80 = [];
  var _0x4b1e09 = {};
  var _0x10c3bd = [];
  var _0x5bd4cf = false;
  var _0x2f45e0 = null;
  var _0x19c949 = [];
  var _0x3b0c7d = [];
  var _0xe1b37a = [];
  var _0x1c8227 = {};
  var _0x383df2 = [];
  var _0x55908a = [];
  var _0x3a3a6d = '';
  var _0x18041e = '';
  var _0x38e5c4 = [];
  var _0x10ed5f = {};
  var _0x5334c3 = null;
  var _0x4ec242 = false;
  var _0x44d116;
  var _0x3f77ca = null;
  var _0x56fa40 = 0x0;
  var _0x5bde87 = {};
  var _0xdda148 = {};
  var _0x45d39a = true;
  var _0x4ab89f = false;
  var _0x550fe1 = {};
  var _0x3a29ca = _0x7fa848('cp');
  var _0xfdeffb = {
    'ico+': true,
    'ico-': true,
    'powers': true,
    'sico': true,
    'power': true,
    'rlist': true,
    'r+': true,
    'r-': true,
    'r^': true,
    'emos': true,
    'dro3': true
  };
  window.cpi = new Date().getTime().toString(0x24);
  window.addEventListener('message', function (_0x396eb2) {
    var _0x15eaf7 = _0x396eb2.data;
    var _0x4959ab = _0x396eb2.source;
    if (_0x4959ab == null || _0x4959ab.cpi == null) {
      return;
    }
    if (_0x3a29ca == null && _0x15eaf7[0x0] == 'con') {
      if (_0x15eaf7[0x1] != myid) {
        _0x4959ab.postMessage(['close', {}]);
        return;
      }
      _0x550fe1[_0x4959ab.cpi] = _0x4959ab;
      _0x4959ab.postMessage(["con", [_0x344b80, _0x10c3bd.map(function (_0x35152f) {
        var _0xd320cc = Object.assign({}, _0x35152f);
        _0xd320cc.ht = null;
        return _0xd320cc;
      }), _0x3b0c7d, _0x4b1e09, _0xe1b37a, _0x55908a, _0x383df2, myid]]);
      return;
    }
    if (_0x3a29ca && location.pathname == '/cp') {
      if (_0x15eaf7[0x0] == "con") {
        _0x18dfc7("login", {
          'msg': 'ok',
          'id': _0x15eaf7[0x1][0x7]
        });
        window.onbeforeunload = null;
        _0xe1b37a = _0x15eaf7[0x1][0x4];
        _0x55908a = _0x15eaf7[0x1][0x5];
        _0x383df2 = _0x15eaf7[0x1][0x6];
        _0x18dfc7('emos', _0xe1b37a);
        _0x18dfc7("dro3", _0x55908a);
        _0x18dfc7("sico", _0x383df2);
        _0x18dfc7("powers", _0x15eaf7[0x1][0x2]);
        _0x18dfc7('rlist', _0x15eaf7[0x1][0x1]);
        _0x18dfc7("ulist", _0x15eaf7[0x1][0x0]);
        _0x18dfc7('power', _0x15eaf7[0x1][0x3]);
        return;
      }
      _0x18dfc7(_0x15eaf7[0x0], _0x15eaf7[0x1]);
    } else {
      var _0x17c6b5 = _0x550fe1[_0x4959ab.cpi];
      if (_0x17c6b5 == null) {
        _0x4959ab.postMessage(["close", {}]);
        return;
      }
      _0x360820("cpi", [_0x4959ab.cpi, _0x15eaf7]);
    }
  });
  _0x1ff5ce();
  function _0x4c6714() {
    $('#muteall').attr("disabled", true);
    setTimeout(function () {
      $('#muteall').removeAttr("disabled");
    }, 0x3e8);
    if (_0x4ab89f != true) {
      _0x4ab89f = true;
      $('#muteall').css('background-color', 'indianred');
      if (mic.indexOf(myid) != -0x1) {
        _0x2022fc(-0x1);
      }
    } else {
      _0x4ab89f = false;
      $("#muteall").css('background-color', "mediumseagreen");
    }
  }
  var _0x43a04c = {
    'mlikes': true,
    'bclikes': true,
    'mreply': false,
    'bcreply': false,
    'calls': false
  };
  navigator.n = {};
  _0x4b9e36(document.getElementById('call'));
  function _0x4b9e36(_0x3980bf) {
    var _0x364278 = 0x0;
    var _0x1c355c = 0x0;
    var _0x46eb67 = 0x0;
    var _0x3347f1 = 0x0;
    _0x3980bf.onmousedown = _0x50dde0;
    _0x3980bf.ontouchstart = _0x50dde0;
    function _0x50dde0(_0x5eabe6) {
      _0x5eabe6 = _0x5eabe6 || window.event;
      try {
        var _0x122d04 = (_0x5eabe6.touches || [])[0x0];
        var _0x225923 = (_0x122d04 || _0x5eabe6).clientX;
        var _0xd33845 = (_0x122d04 || _0x5eabe6).clientY;
        _0x46eb67 = _0x225923;
        _0x3347f1 = _0xd33845;
        document.onmouseup = _0x3ad05d;
        document.onmousemove = _0xb013f;
        document.ontouchmove = _0xb013f;
        document.ontouchend = _0x3ad05d;
      } catch (_0x1df4f1) {}
      return true;
    }
    function _0xb013f(_0x13b5e3) {
      _0x13b5e3 = _0x13b5e3 || window.event;
      try {
        var _0x3f6cae = (_0x13b5e3.touches || [])[0x0];
        var _0x14b70e = Math.max(0x0, (_0x3f6cae || _0x13b5e3).clientX);
        var _0x48d340 = Math.max(0x0, (_0x3f6cae || _0x13b5e3).clientY);
        _0x364278 = _0x46eb67 - _0x14b70e;
        _0x1c355c = _0x3347f1 - _0x48d340;
        _0x46eb67 = _0x14b70e;
        _0x3347f1 = _0x48d340;
        _0x3980bf.style.top = Math.min(window.innerHeight - _0x3980bf.clientHeight, Math.max(0x0, _0x3980bf.offsetTop - _0x1c355c)) + 'px';
        _0x3980bf.style.left = Math.min(window.innerWidth - _0x3980bf.clientWidth, Math.max(0x0, _0x3980bf.offsetLeft - _0x364278)) + 'px';
      } catch (_0x4a23da) {}
      return true;
    }
    function _0x3ad05d() {
      document.onmouseup = null;
      document.onmousemove = null;
      document.ontouchmove = null;
      document.ontouchend = null;
    }
  }
  function _0x2fca09() {
    _0x360820("logout", {});
    _0x394fb6(0x1f4);
  }
  function _0x16715a(_0x5b0ee2, _0x2148fc, _0x3f9272) {
    if (_0x3f9272 && 0x0 && _0x5bde87[myid].rep < 0x0) {
      _0x18dfc7("not", {
        'msg': "تعليقات الحايط تتطلب 0 إعجاب"
      });
      $(_0x3f9272 || ".tboxbc").val('');
      return;
    }
    if (_0x5b0ee2) {
      replyId = null;
      _0x2f45e0 = null;
      _0xf5d143('d2bc', function () {
        var _0x46e334 = $(".tboxbc").val();
        $('.tboxbc').val('');
        var _0x259ae2 = _0x2f45e0;
        _0x2f45e0 = '';
        if ((_0x46e334 == "%0A" || _0x46e334 == '%0a' || _0x46e334 == '' || _0x46e334 == "\n") && (_0x259ae2 == '' || _0x259ae2 == null)) {
          return;
        }
        _0x360820('bc', {
          'msg': _0x46e334,
          'link': _0x259ae2
        });
        return;
      }, true);
      return;
    } else {
      _0x2f45e0 = null;
    }
    $(".ppop .reply").parent().remove();
    var _0x36bffb = $(_0x3f9272 || '.tboxbc').val();
    $(_0x3f9272 || ".tboxbc").val('');
    var _0x7c1275 = _0x2f45e0;
    _0x2f45e0 = '';
    if ((_0x36bffb == "%0A" || _0x36bffb == "%0a" || _0x36bffb == '' || _0x36bffb == "\n") && (_0x7c1275 == '' || _0x7c1275 == null)) {
      return;
    }
    _0x360820('bc', {
      'msg': _0x36bffb,
      'link': _0x7c1275,
      'bid': replyId != null && replyId.indexOf(".bid") != -0x1 ? replyId.replace(".bid", '') : undefined
    });
    if (replyId != null) {
      replyId = null;
    }
  }
  var _0x2260ec = false;
  function _0x46834e() {
    var _0x5e36f9 = document.referrer || '';
    if (_0x5e36f9.indexOf("http://" + location.hostname) == 0x0) {
      return '';
    }
    if (_0x5e36f9.indexOf("://") != -0x1) {
      _0x5e36f9 = _0x5e36f9.replace(/(.*?)\:\/\//g, '').split('/')[0x0];
    }
    return _0x5e36f9;
  }
  var _0x2c0611 = $('#rooms');
  function _0x2d99bf() {
    if (_0x193809 && _0x364a5a.is(":visible")) {
      _0x135e60();
      _0x193809 = false;
      _0x45d39a = true;
    }
    if ((dpnl || $("#dpnl")).children('#wall:visible').length) {
      $("#wall").find('.lazy').each(function (_0x4184a1, _0x90fdbb) {
        _0x90fdbb = $(_0x90fdbb);
        _0x90fdbb.removeClass("lazy");
        _0x90fdbb.attr("src", _0x90fdbb.attr("dsrc"));
      });
    }
    $("div.active img.lazy:visible").each(function (_0x5515bd, _0x4e37e0) {
      _0x4e37e0 = $(_0x4e37e0);
      _0x4e37e0.removeClass("lazy");
      _0x4e37e0.attr('src', _0x4e37e0.attr("dsrc"));
    });
    if (_0x45d39a && _0x2c0611.is(":visible")) {
      _0x45d39a = false;
      _0x10c3bd.sort(function (_0x1fe3fe, _0x491a5c) {
        var _0x3fcf4c = _0x1fe3fe.uco + (_0x1fe3fe.id == myroom ? 0x3e8 : 0x0) - (_0x491a5c.uco + (_0x491a5c.id == myroom ? 0x3e8 : 0x0));
        if (_0x3fcf4c == 0x0) {
          return _0x1fe3fe.topic.localeCompare(_0x491a5c.topic);
        }
        return _0x3fcf4c < 0x0 ? 0x1 : -0x1;
      });
      var _0x1aa06a = _0x10c3bd.length;
      var _0x1a16c2 = 0x0;
      var _0x572bbc = 0x0;
      if (_0x1aa06a > 0x1 && _0x10c3bd[0x0].lupd > _0x19ff1b) {
        _0x10c3bd[0x0].ht.insertAfter("#roomss");
      }
      for (var _0x5ecc59 = 0x1; _0x5ecc59 < _0x1aa06a; _0x5ecc59++) {
        var _0x3ab40d = _0x10c3bd[_0x5ecc59];
        if (_0x3ab40d.lupd > _0x19ff1b) {
          var _0x5ae26b = _0x10c3bd[_0x5ecc59 - 0x1];
          if (_0x3ab40d.ht[0x0].previousElementSibling == null || _0x3ab40d.ht[0x0].previousElementSibling.getAttribute("rid") != _0x5ae26b.id) {
            _0x1a16c2++;
            _0x3ab40d.ht.insertAfter(_0x5ae26b.ht);
          } else {
            _0x572bbc++;
          }
        }
      }
      _0x19ff1b = new Date().getTime();
    }
  }
  var _0x364a5a = $("#users");
  var _0x1244ab = 0x0;
  var _0x19ff1b = 0x0;
  var _0x593320 = $("#users .ninr");
  function _0x135e60() {
    if (_0x193809 == false || _0x364a5a.is(":visible") == false) {
      return;
    }
    _0x344b80.sort(function (_0x55394c, _0x50fda3) {
      var _0x5446d2 = _0x55394c.v + (_0x55394c.roomid == myroom && myroom != null ? 0x2710 : -0x2710) - (_0x50fda3.v + (_0x50fda3.roomid == myroom && myroom != null ? 0x2710 : -0x2710));
      if (_0x5446d2 == 0x0) {
        return _0x55394c.topic.localeCompare(_0x50fda3.topic);
      }
      return _0x5446d2 < 0x0 ? 0x1 : -0x1;
    });
    var _0x43501f = _0x344b80.length;
    var _0x3f1dd9 = 0x0;
    var _0x38ea7e = 0x0;
    var _0xa64ff2 = null;
    if (_0x43501f > 0x1 && _0x344b80[0x0].lupd > _0x1244ab) {
      _0x10ed5f[_0x344b80[0x0].id].insertAfter("#usearch");
    }
    for (var _0x930eaa = 0x1; _0x930eaa < _0x43501f; _0x930eaa++) {
      var _0x11639c = _0x344b80[_0x930eaa];
      if (_0x11639c.lupd > _0x1244ab) {
        var _0x528aef = _0x344b80[_0x930eaa - 0x1];
        if (_0x10ed5f[_0x11639c.id][0x0].previousElementSibling == null || _0x10ed5f[_0x11639c.id][0x0].previousElementSibling.getAttribute("uid") != _0x528aef.id) {
          _0x3f1dd9++;
          _0x10ed5f[_0x11639c.id].insertAfter(_0x10ed5f[_0x528aef.id]);
        } else {
          _0x38ea7e++;
        }
      }
      if (myroom != null && _0x11639c.roomid == myroom) {
        _0xa64ff2 = _0x11639c;
      }
    }
    if (myroom != null && (_0x43501f == 0x1 || _0x344b80[0x1] != null && _0x344b80[0x1].roomid != myroom)) {
      _0xa64ff2 = _0x344b80[0x0];
    }
    if (_0xa64ff2 && _0x10ed5f[_0xa64ff2.id]) {
      _0x593320.insertAfter(_0x10ed5f[_0xa64ff2.id]);
    }
    _0x1244ab = new Date().getTime();
    _0x47a17e();
  }
  function _0x261770() {
    var _0x3369b6 = $('#d2');
    var _0x4db155 = $("#d2bc")[0x0];
    var _0x35ab09 = $("#bcmore");
    _0x592212 = true;
    setInterval(function () {
      if (_0x592212 || _0x4bec83) {
        _0x592212 = false;
        if (_0x4bec83) {
          _0x4bec83 = false;
          var _0x233ec2 = document.documentElement.offsetHeight - document.body.offsetHeight;
          if (_0x233ec2 > 0xa) {
            document.documentElement.scrollTop = _0x233ec2 / 0x2;
          }
          _0x3369b6.scrollTop(_0x3369b6[0x0].scrollHeight);
        } else {
          _0x4bec83 = true;
        }
      }
      if (_0x5bd4cf == true && _0x4db155.scrollTop == 0x0) {
        _0x35ab09.hide();
        _0x5bd4cf = false;
      }
    }, 0xc8);
  }
  var _0x31d914 = '';
  function _0x5c9765(_0x4fc7bd) {
    _0x2260ec = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
    if ($(window).width() >= 0x258) {
      $("meta[name='viewport']").attr("content", "maximum-scale=5, width=600");
    }
    $('#u1').val(decodeURIComponent(_0x222e9d('u1')));
    $("#u2").val(decodeURIComponent(_0x222e9d('u2')));
    $('#pass1').val(decodeURIComponent(_0x222e9d('p1')));
    _0x1b6063 = _0x7fa848("debug") == '1';
    _0x4a9a27 = _0x7fa848("noico") == '1';
    if (_0x4a9a27) {
      user_pic = "pic.webp";
      room_pic = "room.webp";
    }
    if (_0x1b6063) {
      window.onerror = function (_0x12d280, _0x1c4653, _0x4fe6d2) {
        $("#d2").append("Error: " + _0x12d280 + " Script: " + _0x1c4653 + " Line: " + _0x4fe6d2 + "<br>");
      };
    }
    var _0xd596c9 = _0x222e9d('zoom');
    if (_0xd596c9 == '') {
      _0xd596c9 = '1';
      _0x2b8e5b("zoom", _0xd596c9);
    }
    if (isNaN(parseInt(_0xd596c9)) == false && _0xd596c9 != '1') {
      $('#zoom').val(_0xd596c9).trigger("change");
      _0x8fd57();
    }
    if (_0x222e9d('isl') == 'yes') {
      $("#tlogins .nav-tabs a[href=\"#l2\"]").click();
    }
    if (location.pathname != "/cp" && _0x3a29ca || location.pathname == "/cp" && !_0x3a29ca) {
      location.href = '/';
      return;
    }
    if (_0x3a29ca) {
      $("#room,#dpnl").remove();
      jQuery.ajax({
        'type': "GET",
        'url': "jscolor/jscolor.js",
        'dataType': "script",
        'cache': true
      });
      jQuery.ajax({
        'type': "GET",
        'url': "jquery.tablesorter.min.js",
        'dataType': "script",
        'cache': true
      });
      _0x56b62e();
      _0xaa94af = ["202020", "202070", '2020c0', "207020", '207070', "2070c0", "20c020", "20c070", '20c0c0', "702020", "702070", "7020c0", '707020', '707070', "7070c0", "70c020", "70c070", "70c0c0", "c02020", "c02070", "c020c0", "c07020", "c07070", 'c070c0', "c0c020", "c0c070", "c0c0c0", "FFFFFF"];
      defcc = [];
      var _0x534d3a = $("<div style='width:260px;height:200px;line-height: 0px!important;' class='break'></div>");
      _0xaa94af.forEach(function (_0x637338) {
        var _0x35e752 = [];
        _0x35e752.push(_0x4a74da(_0x637338, 0x1e));
        _0x35e752.push(_0x4a74da(_0x637338, 0xf));
        _0x35e752.push(_0x637338);
        _0x35e752.push(_0x4a74da(_0x637338, -0xf));
        _0x35e752.push(_0x4a74da(_0x637338, -0x1e));
        _0x35e752.push(_0x4a74da(_0x637338, -0x28));
        _0x35e752.forEach(function (_0x4988e9) {
          defcc.push(_0x4988e9);
          _0x534d3a.append("<div v='#" + _0x4988e9 + "'style='width:40px;height:40px;background-color:#" + _0x4988e9 + ";display:inline-block;'></div>");
        });
      });
      _0x534d3a.append("<div class='border fa fa-ban' v='' style='width:40px;height:40px;background-color:;display:inline-block;color:red;'></div>");
      window.cldiv = _0x534d3a[0x0].outerHTML;
      $('.cpick').click(function () {
        var _0x1740c1 = $(_0x534d3a);
        var _0x5c96b5 = this;
        _0x1740c1.find('div').off().click(function () {
          $(_0x5c96b5).css("background-color", this.style["background-color"]);
          $(_0x5c96b5).css("background-color", $(this).attr('v')).attr('v', $(this).attr('v'));
        });
        _0x58bcf4(_0x5c96b5, _0x1740c1).css("left", "0px");
        ;
      });
      $("#cp li").hide();
      if (window.opener == null) {
        _0x394fb6();
        return;
      }
      window.opener.postMessage(['con', _0x3a29ca]);
      setInterval(() => {
        if (window.opener == null || window.opener.myid != _0x3a29ca) {
          _0x394fb6();
        }
      }, 0x1388);
      $("meta[name='viewport']").attr("content", "maximum-scale=1, width=560");
      $("li a[href='#fps']").click(function () {
        _0x360820('cp', {
          'cmd': "fps",
          'q': ''
        });
      });
      $("li a[href='#actions']").click(function () {
        _0x360820('cp', {
          'cmd': "actions",
          'q': ''
        });
      });
      $("li a[href='#logins']").click(function () {
        _0x360820('cp', {
          'cmd': "logins",
          'q': ''
        });
      });
      $("li a[href='#bans']").click(function () {
        _0x360820('cp', {
          'cmd': "bans"
        });
      });
      $("li a[href='#powers']").click(function () {
        _0x360820('cp', {
          'cmd': "sico",
          'data': {}
        });
        _0x34126d();
      });
      $("li a[href='#fltr']").click(function () {
        _0x360820('cp', {
          'cmd': "fltr"
        });
      });
      $("li a[href='#cp_rooms']").click(function () {
        _0x360820('cp', {
          'cmd': 'rooms'
        });
      });
      $("li a[href='#shrt']").click(function () {
        _0x360820('cp', {
          'cmd': "shrt"
        });
      });
      $("li a[href='#subs']").click(function () {
        _0x360820('cp', {
          'cmd': "subs"
        });
      });
      $("li a[href='#msgs']").click(function () {
        _0x360820('cp', {
          'cmd': "msgs"
        });
      });
      $("li a[href='#wrooms']").click(function () {
        _0x360820('cp', {
          'cmd': "wrooms"
        });
      });
      $("li a[href='#stats']").click(function () {
        _0x360820('cp', {
          'cmd': "stats"
        });
      });
      $("li a[href='#sett']").click(function () {
        _0x360820('cp', {
          'cmd': 'owner'
        });
      });
      $("li a[href='#domains']").click(function () {
        _0x360820('cp', {
          'cmd': 'domains'
        });
      });
      $("li a[href='#cp_bots']").click(function () {
        _0x360820('cp', {
          'cmd': "bots"
        });
      });
    } else {
      try {
        _0x33b389 = (() => {
          $(document.body).append("<div id=\"fingerprint-data\"></div>");
          const _0x154975 = (_0x557e6e, ..._0x44fb83) => {
            const _0x23322d = document.createElement('template');
            _0x23322d.innerHTML = _0x557e6e.map((_0x4d59df, _0x1b5902) => '' + _0x4d59df + (_0x44fb83[_0x1b5902] || '')).join('');
            return document.importNode(_0x23322d.content, true);
          };
          const _0x149391 = [[0x231a], [0x23e9], [0x23f0], [0x23f3], [0x25fd], [0x2614], [0x2648], [0x267f], [0x2693], [0x26a1], [0x26aa], [0x26bd], [0x26c4], [0x26ce], [0x26d4], [0x26ea], [0x26f2], [0x26f5], [0x26fa], [0x26fd], [0x2705], [0x270a], [0x2728], [0x274c], [0x274e], [0x2753], [0x2757], [0x2795], [0x27b0], [0x27bf], [0x2b1b], [0x2b50], [0x2b55], [0x1f004], [0x1f0cf], [0x1f18e], [0x1f191], [0x1f201], [0x1f21a], [0x1f22f], [0x1f232], [0x1f238], [0x1f250], [0x1f300], [0x1f30d], [0x1f30f], [0x1f310], [0x1f311], [0x1f312], [0x1f313], [0x1f316], [0x1f319], [0x1f31a], [0x1f31b], [0x1f31c], [0x1f31d], [0x1f31f], [0x1f32d], [0x1f330], [0x1f332], [0x1f334], [0x1f337], [0x1f34b], [0x1f34c], [0x1f350], [0x1f351], [0x1f37c], [0x1f37e], [0x1f380], [0x1f3a0], [0x1f3c5], [0x1f3c6], [0x1f3c7], [0x1f3c8], [0x1f3c9], [0x1f3ca], [0x1f3cf], [0x1f3e0], [0x1f3e4], [0x1f3e5], [0x1f3f4], [0x1f3f8], [0x1f408], [0x1f409], [0x1f40c], [0x1f40f], [0x1f411], [0x1f413], [0x1f414], [0x1f415], [0x1f416], [0x1f417], [0x1f42a], [0x1f42b], [0x1f440], [0x1f442], [0x1f465], [0x1f466], [0x1f46c], [0x1f46e], [0x1f4ad], [0x1f4ae], [0x1f4b6], [0x1f4b8], [0x1f4ec], [0x1f4ee], [0x1f4ef], [0x1f4f0], [0x1f4f5], [0x1f4f6], [0x1f4f8], [0x1f4f9], [0x1f4ff], [0x1f503], [0x1f504], [0x1f508], [0x1f509], [0x1f50a], [0x1f515], [0x1f516], [0x1f52c], [0x1f52e], [0x1f54b], [0x1f550], [0x1f55c], [0x1f57a], [0x1f595], [0x1f5a4], [0x1f5fb], [0x1f600], [0x1f601], [0x1f607], [0x1f609], [0x1f60e], [0x1f60f], [0x1f610], [0x1f611], [0x1f612], [0x1f615], [0x1f616], [0x1f617], [0x1f618], [0x1f619], [0x1f61a], [0x1f61b], [0x1f61c], [0x1f61f], [0x1f620], [0x1f626], [0x1f628], [0x1f62c], [0x1f62d], [0x1f62e], [0x1f630], [0x1f634], [0x1f635], [0x1f636], [0x1f637], [0x1f641], [0x1f645], [0x1f680], [0x1f681], [0x1f683], [0x1f686], [0x1f687], [0x1f688], [0x1f689], [0x1f68a], [0x1f68c], [0x1f68d], [0x1f68e], [0x1f68f], [0x1f690], [0x1f691], [0x1f694], [0x1f695], [0x1f696], [0x1f697], [0x1f698], [0x1f699], [0x1f69b], [0x1f6a2], [0x1f6a3], [0x1f6a4], [0x1f6a6], [0x1f6a7], [0x1f6ae], [0x1f6b2], [0x1f6b3], [0x1f6b6], [0x1f6b7], [0x1f6b9], [0x1f6bf], [0x1f6c0], [0x1f6c1], [0x1f6cc], [0x1f6d0], [0x1f6d1], [0x1f6d5], [0x1f6d6], [0x1f6dc], [0x1f6dd], [0x1f6eb], [0x1f6f4], [0x1f6f7], [0x1f6f9], [0x1f6fa], [0x1f6fb], [0x1f7e0], [0x1f7f0], [0x1f90c], [0x1f90d], [0x1f910], [0x1f919], [0x1f91f], [0x1f920], [0x1f928], [0x1f930], [0x1f931], [0x1f933], [0x1f93c], [0x1f93f], [0x1f940], [0x1f947], [0x1f94c], [0x1f94d], [0x1f950], [0x1f95f], [0x1f96c], [0x1f971], [0x1f972], [0x1f973], [0x1f977], [0x1f979], [0x1f97a], [0x1f97b], [0x1f97c], [0x1f980], [0x1f985], [0x1f992], [0x1f998], [0x1f9a3], [0x1f9a5], [0x1f9ab], [0x1f9ae], [0x1f9b0], [0x1f9ba], [0x1f9c0], [0x1f9c1], [0x1f9c3], [0x1f9cb], [0x1f9cc], [0x1f9cd], [0x1f9d0], [0x1f9e7], [0x1fa70], [0x1fa74], [0x1fa75], [0x1fa78], [0x1fa7b], [0x1fa80], [0x1fa83], [0x1fa87], [0x1fa90], [0x1fa96], [0x1faa9], [0x1faad], [0x1fab0], [0x1fab7], [0x1fabb], [0x1fabf], [0x1fac0], [0x1fac3], [0x1face], [0x1fad0], [0x1fad7], [0x1fada], [0x1fae0], [0x1fae8], [0x1faf0], [0x1faf7], [0xa9, 0xfe0f], [0xae, 0xfe0f], [0x203c, 0xfe0f], [0x2049, 0xfe0f], [0x2122, 0xfe0f], [0x2139, 0xfe0f], [0x2194, 0xfe0f], [0x2195, 0xfe0f], [0x2196, 0xfe0f], [0x2197, 0xfe0f], [0x2198, 0xfe0f], [0x2199, 0xfe0f], [0x21a9, 0xfe0f], [0x21aa, 0xfe0f], [0x2328, 0xfe0f], [0x23cf, 0xfe0f], [0x23ed, 0xfe0f], [0x23ee, 0xfe0f], [0x23ef, 0xfe0f], [0x23f1, 0xfe0f], [0x23f2, 0xfe0f], [0x23f8, 0xfe0f], [0x23f9, 0xfe0f], [0x23fa, 0xfe0f], [0x24c2, 0xfe0f], [0x25aa, 0xfe0f], [0x25ab, 0xfe0f], [0x25b6, 0xfe0f], [0x25c0, 0xfe0f], [0x25fb, 0xfe0f], [0x25fc, 0xfe0f], [0x2600, 0xfe0f], [0x2601, 0xfe0f], [0x2602, 0xfe0f], [0x2603, 0xfe0f], [0x2604, 0xfe0f], [0x260e, 0xfe0f], [0x2611, 0xfe0f], [0x2618, 0xfe0f], [0x261d, 0xfe0f], [0x2620, 0xfe0f], [0x2622, 0xfe0f], [0x2623, 0xfe0f], [0x2626, 0xfe0f], [0x262a, 0xfe0f], [0x262e, 0xfe0f], [0x262f, 0xfe0f], [0x2638, 0xfe0f], [0x2639, 0xfe0f], [0x263a, 0xfe0f], [0x2640, 0xfe0f], [0x2642, 0xfe0f], [0x265f, 0xfe0f], [0x2660, 0xfe0f], [0x2663, 0xfe0f], [0x2665, 0xfe0f], [0x2666, 0xfe0f], [0x2668, 0xfe0f], [0x267b, 0xfe0f], [0x267e, 0xfe0f], [0x2692, 0xfe0f], [0x2694, 0xfe0f], [0x2695, 0xfe0f], [0x2696, 0xfe0f], [0x2697, 0xfe0f], [0x2699, 0xfe0f], [0x269b, 0xfe0f], [0x269c, 0xfe0f], [0x26a0, 0xfe0f], [0x26a7, 0xfe0f], [0x26b0, 0xfe0f], [0x26b1, 0xfe0f], [0x26c8, 0xfe0f], [0x26cf, 0xfe0f], [0x26d1, 0xfe0f], [0x26d3, 0xfe0f], [0x26e9, 0xfe0f], [0x26f0, 0xfe0f], [0x26f1, 0xfe0f], [0x26f4, 0xfe0f], [0x26f7, 0xfe0f], [0x26f8, 0xfe0f], [0x26f9, 0xfe0f], [0x2702, 0xfe0f], [0x2708, 0xfe0f], [0x2709, 0xfe0f], [0x270c, 0xfe0f], [0x270d, 0xfe0f], [0x270f, 0xfe0f], [0x2712, 0xfe0f], [0x2714, 0xfe0f], [0x2716, 0xfe0f], [0x271d, 0xfe0f], [0x2721, 0xfe0f], [0x2733, 0xfe0f], [0x2734, 0xfe0f], [0x2744, 0xfe0f], [0x2747, 0xfe0f], [0x2763, 0xfe0f], [0x2764, 0xfe0f], [0x27a1, 0xfe0f], [0x2934, 0xfe0f], [0x2935, 0xfe0f], [0x2b05, 0xfe0f], [0x2b06, 0xfe0f], [0x2b07, 0xfe0f], [0x3030, 0xfe0f], [0x303d, 0xfe0f], [0x3297, 0xfe0f], [0x3299, 0xfe0f], [0x1f170, 0xfe0f], [0x1f171, 0xfe0f], [0x1f17e, 0xfe0f], [0x1f17f, 0xfe0f], [0x1f202, 0xfe0f], [0x1f237, 0xfe0f], [0x1f321, 0xfe0f], [0x1f324, 0xfe0f], [0x1f325, 0xfe0f], [0x1f326, 0xfe0f], [0x1f327, 0xfe0f], [0x1f328, 0xfe0f], [0x1f329, 0xfe0f], [0x1f32a, 0xfe0f], [0x1f32b, 0xfe0f], [0x1f32c, 0xfe0f], [0x1f336, 0xfe0f], [0x1f37d, 0xfe0f], [0x1f396, 0xfe0f], [0x1f397, 0xfe0f], [0x1f399, 0xfe0f], [0x1f39a, 0xfe0f], [0x1f39b, 0xfe0f], [0x1f39e, 0xfe0f], [0x1f39f, 0xfe0f], [0x1f3cb, 0xfe0f], [0x1f3cc, 0xfe0f], [0x1f3cd, 0xfe0f], [0x1f3ce, 0xfe0f], [0x1f3d4, 0xfe0f], [0x1f3d5, 0xfe0f], [0x1f3d6, 0xfe0f], [0x1f3d7, 0xfe0f], [0x1f3d8, 0xfe0f], [0x1f3d9, 0xfe0f], [0x1f3da, 0xfe0f], [0x1f3db, 0xfe0f], [0x1f3dc, 0xfe0f], [0x1f3dd, 0xfe0f], [0x1f3de, 0xfe0f], [0x1f3df, 0xfe0f], [0x1f3f3, 0xfe0f], [0x1f3f5, 0xfe0f], [0x1f3f7, 0xfe0f], [0x1f43f, 0xfe0f], [0x1f441, 0xfe0f], [0x1f4fd, 0xfe0f], [0x1f549, 0xfe0f], [0x1f54a, 0xfe0f], [0x1f56f, 0xfe0f], [0x1f570, 0xfe0f], [0x1f573, 0xfe0f], [0x1f574, 0xfe0f], [0x1f575, 0xfe0f], [0x1f576, 0xfe0f], [0x1f577, 0xfe0f], [0x1f578, 0xfe0f], [0x1f579, 0xfe0f], [0x1f587, 0xfe0f], [0x1f58a, 0xfe0f], [0x1f58b, 0xfe0f], [0x1f58c, 0xfe0f], [0x1f58d, 0xfe0f], [0x1f590, 0xfe0f], [0x1f5a5, 0xfe0f], [0x1f5a8, 0xfe0f], [0x1f5b1, 0xfe0f], [0x1f5b2, 0xfe0f], [0x1f5bc, 0xfe0f], [0x1f5c2, 0xfe0f], [0x1f5c3, 0xfe0f], [0x1f5c4, 0xfe0f], [0x1f5d1, 0xfe0f], [0x1f5d2, 0xfe0f], [0x1f5d3, 0xfe0f], [0x1f5dc, 0xfe0f], [0x1f5dd, 0xfe0f], [0x1f5de, 0xfe0f], [0x1f5e1, 0xfe0f], [0x1f5e3, 0xfe0f], [0x1f5e8, 0xfe0f], [0x1f5ef, 0xfe0f], [0x1f5f3, 0xfe0f], [0x1f5fa, 0xfe0f], [0x1f6cb, 0xfe0f], [0x1f6cd, 0xfe0f], [0x1f6ce, 0xfe0f], [0x1f6cf, 0xfe0f], [0x1f6e0, 0xfe0f], [0x1f6e1, 0xfe0f], [0x1f6e2, 0xfe0f], [0x1f6e3, 0xfe0f], [0x1f6e4, 0xfe0f], [0x1f6e5, 0xfe0f], [0x1f6e9, 0xfe0f], [0x1f6f0, 0xfe0f], [0x1f6f3, 0xfe0f], [0x23, 0xfe0f, 0x20e3], [0x2a, 0xfe0f, 0x20e3], [0x30, 0xfe0f, 0x20e3], [0x31, 0xfe0f, 0x20e3], [0x32, 0xfe0f, 0x20e3], [0x33, 0xfe0f, 0x20e3], [0x34, 0xfe0f, 0x20e3], [0x35, 0xfe0f, 0x20e3], [0x36, 0xfe0f, 0x20e3], [0x37, 0xfe0f, 0x20e3], [0x38, 0xfe0f, 0x20e3], [0x39, 0xfe0f, 0x20e3], [0x1f1e6, 0x1f1e8], [0x1f1e7, 0x1f1e6], [0x1f1e8, 0x1f1e6], [0x1f1e9, 0x1f1ea], [0x1f1ea, 0x1f1e6], [0x1f1eb, 0x1f1ee], [0x1f1ec, 0x1f1e6], [0x1f1ed, 0x1f1f0], [0x1f1ee, 0x1f1e8], [0x1f1ef, 0x1f1ea], [0x1f1f0, 0x1f1ea], [0x1f1f1, 0x1f1e6], [0x1f1f2, 0x1f1e6], [0x1f1f3, 0x1f1e6], [0x1f1f4, 0x1f1f2], [0x1f1f5, 0x1f1e6], [0x1f1f6, 0x1f1e6], [0x1f1f7, 0x1f1ea], [0x1f1f8, 0x1f1e6], [0x1f1f9, 0x1f1e6], [0x1f1fa, 0x1f1e6], [0x1f1fb, 0x1f1e6], [0x1f1fc, 0x1f1eb], [0x1f1fd, 0x1f1f0], [0x1f1fe, 0x1f1ea], [0x1f1ff, 0x1f1e6], [0x270a, 0x1f3fb], [0x270b, 0x1f3fb], [0x1f385, 0x1f3fb], [0x1f3c2, 0x1f3fb], [0x1f3c3, 0x1f3fb], [0x1f3c4, 0x1f3fb], [0x1f442, 0x1f3fb], [0x1f443, 0x1f3fb], [0x1f446, 0x1f3fb], [0x1f447, 0x1f3fb], [0x1f448, 0x1f3fb], [0x1f449, 0x1f3fb], [0x1f44a, 0x1f3fb], [0x1f44b, 0x1f3fb], [0x1f44c, 0x1f3fb], [0x1f44d, 0x1f3fb], [0x1f44e, 0x1f3fb], [0x1f44f, 0x1f3fb], [0x1f450, 0x1f3fb], [0x1f466, 0x1f3fb], [0x1f467, 0x1f3fb], [0x1f468, 0x1f3fb], [0x1f469, 0x1f3fb], [0x1f46b, 0x1f3fb], [0x1f46c, 0x1f3fb], [0x1f46d, 0x1f3fb], [0x1f46e, 0x1f3fb], [0x1f470, 0x1f3fb], [0x1f471, 0x1f3fb], [0x1f472, 0x1f3fb], [0x1f473, 0x1f3fb], [0x1f474, 0x1f3fb], [0x1f475, 0x1f3fb], [0x1f476, 0x1f3fb], [0x1f477, 0x1f3fb], [0x1f478, 0x1f3fb], [0x1f47c, 0x1f3fb], [0x1f481, 0x1f3fb], [0x1f482, 0x1f3fb], [0x1f483, 0x1f3fb], [0x1f485, 0x1f3fb], [0x1f486, 0x1f3fb], [0x1f487, 0x1f3fb], [0x1f48f, 0x1f3fb], [0x1f491, 0x1f3fb], [0x1f4aa, 0x1f3fb], [0x1f595, 0x1f3fb], [0x1f596, 0x1f3fb], [0x1f645, 0x1f3fb], [0x1f646, 0x1f3fb], [0x1f647, 0x1f3fb], [0x1f64b, 0x1f3fb], [0x1f64c, 0x1f3fb], [0x1f64d, 0x1f3fb], [0x1f64e, 0x1f3fb], [0x1f64f, 0x1f3fb], [0x1f6b4, 0x1f3fb], [0x1f6b5, 0x1f3fb], [0x1f90f, 0x1f3fb], [0x1f918, 0x1f3fb], [0x1f919, 0x1f3fb], [0x1f91a, 0x1f3fb], [0x1f91b, 0x1f3fb], [0x1f91c, 0x1f3fb], [0x1f91d, 0x1f3fb], [0x1f91e, 0x1f3fb], [0x1f926, 0x1f3fb], [0x1f931, 0x1f3fb], [0x1f932, 0x1f3fb], [0x1f933, 0x1f3fb], [0x1f934, 0x1f3fb], [0x1f935, 0x1f3fb], [0x1f936, 0x1f3fb], [0x1f937, 0x1f3fb], [0x1f938, 0x1f3fb], [0x1f939, 0x1f3fb], [0x1f93d, 0x1f3fb], [0x1f93e, 0x1f3fb], [0x1f977, 0x1f3fb], [0x1f9b5, 0x1f3fb], [0x1f9b6, 0x1f3fb], [0x1f9b8, 0x1f3fb], [0x1f9b9, 0x1f3fb], [0x1f9bb, 0x1f3fb], [0x1f9cd, 0x1f3fb], [0x1f9ce, 0x1f3fb], [0x1f9cf, 0x1f3fb], [0x1f9d1, 0x1f3fb], [0x1f9d2, 0x1f3fb], [0x1f9d3, 0x1f3fb], [0x1f9d4, 0x1f3fb], [0x1f9d5, 0x1f3fb], [0x1f9d6, 0x1f3fb], [0x1f9d7, 0x1f3fb], [0x1f9d8, 0x1f3fb], [0x1f9d9, 0x1f3fb], [0x1f9da, 0x1f3fb], [0x1f9db, 0x1f3fb], [0x1f9dc, 0x1f3fb], [0x1f9dd, 0x1f3fb], [0x1fac3, 0x1f3fb], [0x1fac4, 0x1f3fb], [0x1fac5, 0x1f3fb], [0x1faf0, 0x1f3fb], [0x1faf1, 0x1f3fb], [0x1faf2, 0x1f3fb], [0x1faf3, 0x1f3fb], [0x1faf4, 0x1f3fb], [0x1faf5, 0x1f3fb], [0x1faf6, 0x1f3fb], [0x1faf7, 0x1f3fb], [0x1faf8, 0x1f3fb]];
          const _0x23b43f = document.getElementById("fingerprint-data");
          _0x23b43f.parentNode.replaceChild(_0x154975`
        
        <div id="emoji-container">
            <style>
            #emoji-container {
                position: relative;
            }
            #emoji {
                font-family: ${"\n            'Segoe Fluent Icons',\n            'Ink Free',\n            'Bahnschrift',\n            'Segoe MDL2 Assets',\n            'HoloLens MDL2 Assets',\n            'Leelawadee UI',\n            'Javanese Text',\n            'Segoe UI Emoji',\n            'Aldhabi',\n            'Gadugi',\n            'Myanmar Text',\n            'Nirmala UI',\n            'Lucida Console',\n            'Cambria Math',\n            'Galvji',\n            'MuktaMahee Regular',\n            'InaiMathi Bold',\n            'American Typewriter Semibold',\n            'Futura Bold',\n            'SignPainter-HouseScript Semibold',\n            'PingFang HK Light',\n            'Kohinoor Devanagari Medium',\n            'Luminari',\n            'Geneva',\n            'Helvetica Neue',\n            'Droid Sans Mono',\n            'Dancing Script',\n            'Roboto',\n            'Ubuntu',\n            'Liberation Mono',\n            'Source Code Pro',\n            'DejaVu Sans',\n            'OpenSymbol',\n            'Chilanka',\n            'Cousine',\n            'Arimo',\n            'Jomolhari',\n            'MONO',\n            'Noto Color Emoji',\n            sans-serif !important\n        "};
                font-size: 200px !important;
                height: auto;
                left: 9999px;
                position: absolute !important;
                transform: scale(1.000999);
            }
            </style>
            <div id="emoji" class="emojis"></div>
        </div>
        
        `, _0x23b43f);
          const _0x3b6750 = document.getElementById("emoji");
          var _0x34104b = {};
          var _0x4fe292 = {};
          _0x149391.filter(function (_0x65b6ed, _0x2e4aaa) {
            return _0x2e4aaa % 0x3 == 0x0;
          }).forEach(_0x539479 => {
            const _0x1d3fce = String.fromCodePoint(..._0x539479);
            _0x3b6750.innerHTML = _0x1d3fce;
            const _0x59a8f6 = _0x3b6750.getClientRects()[0x0];
            var _0x41c4f8 = +(_0x59a8f6.height / _0x59a8f6.width).toFixed(0x4) / 0.0001;
            if (_0x34104b[_0x41c4f8] == null) {
              _0x34104b[_0x41c4f8] = [];
              _0x4fe292[_0x41c4f8] = [_0x1d3fce];
            }
            _0x4fe292[_0x41c4f8][0x1] = _0x1d3fce;
            _0x34104b[_0x41c4f8].push(_0x539479[0x0]);
          });
          _0x23b43f.remove();
          $('#emoji-container').remove();
          for (var _0x4d3e85 in _0x34104b) {
            _0x34104b[_0x4d3e85] = _0x34104b[_0x4d3e85].reduce(function (_0x35997c, _0x281274) {
              return _0x35997c + _0x281274;
            }, 0x1) % 0x23 + 0x1;
          }
          ;
          return [_0x34104b, _0x325d1e(_0x1395ab(Object.values(_0x4fe292).map(function (_0x5dcec7) {
            return _0x5dcec7.join('');
          }).join(''))).substring(0x0, 0x4)];
          function _0x1395ab(_0x2ab332) {
            try {
              var _0x427de8 = document.createElement("canvas");
              _0x427de8.height = 0x2a;
              _0x427de8.width = 0x168;
              var _0x14e88e = _0x427de8.getContext('2d');
              _0x427de8.style.display = "inline";
              _0x14e88e.textBaseline = 'alphabetic';
              _0x14e88e.fillStyle = "#f60";
              _0x14e88e.fillRect(0x7d, 0x1, 0x3e, 0x14);
              _0x14e88e.fillStyle = "#069";
              _0x14e88e.font = "11pt no-real-font-123";
              _0x14e88e.stroke();
              _0x14e88e.fillText(_0x2ab332, 0x1, 0xf);
              _0x14e88e.fillStyle = "rgba(102, 204, 0, 0.7)";
              _0x14e88e.fillText(_0x2ab332, 0x3, 0x23);
              var _0x214bfe = _0x325d1e(_0x427de8.toDataURL());
              _0x427de8.remove();
              if (_0x214bfe.length == 0x0) {
                return _0x325d1e("nothing!");
              }
              ;
              return _0x214bfe;
            } catch (_0x45471e) {
              return _0x325d1e("err!");
            }
          }
        })();
        _0x33b389 = _0x49f130(JSON.stringify(_0x33b389));
      } catch (_0x12584f) {}
    }
    _0xdecf22();
    if (("DecompressionStream" in self && "CompressionStream" in self) == false) {
      $.getScript('pako.min.js');
    }
    if (_0x7fa848("kk1") == "jaw" || _0x222e9d("kk1") == 'jaw') {
      _0x2b8e5b('kk1', "jaw");
      return;
    }
    try {
      var _0x59cca1 = new Blob(["self.onmessage = function(e) {eval('debugger;'); setTimeout(function(){self.postMessage(0);},600);}"]);
      var _0x48170f = new Worker(window.URL.createObjectURL(_0x59cca1));
      var _0x1360a5 = new Date().getTime() + 0x258;
      var _0x3e6156 = 0x0;
      var _0x18bd5e = setInterval(() => {
        if (new Date().getTime() - _0x1360a5 < 0x64) {
          _0x3e6156 = 0x0;
          return;
        }
        ;
        _0x3e6156++;
        if (_0x3e6156 < (myid == null ? 0x5 : 0x3)) {
          return;
        }
        clearInterval(_0x18bd5e);
        document.body.parentElement.innerHTML = "<body style=\"background-color:#373740;margin:0px;max-width: 100%;max-height: 100%; -webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;cursor: default;\"><div style=\"font-size:36px;color:whitesmoke;font-weight:bold;text-align: center;position: absolute;top: 38%;width: 100%;\">يتم تحديث الصفحه ..</div></body>";
        _0x48170f.terminate();
        window.onbeforeunload = null;
        setTimeout(function () {
          location.href = '/';
        }, 0x1770);
      }, 0x12c);
      _0x48170f.onmessage = function () {
        _0x1360a5 = new Date().getTime() + 0x258;
        _0x48170f.postMessage(0x0);
      };
      _0x48170f.postMessage(0x0);
    } catch (_0x6d40fa) {}
  }
  function _0xdecf22() {
    var _0x128276 = _0x222e9d('pr') || '';
    _0x31d914 = parseInt(window.name) || parseInt(_0x128276) || 0x0;
    if (_0x31d914 == 0x0) {
      _0x31d914 = new Date().getTime();
    }
    window.name = _0x31d914 + '';
    _0x2b8e5b('pr', _0x31d914 + '');
    return new Date().getTime() - _0x31d914 > 10800000 ? _0x31d914 : 0x0;
  }
  function _0x49f130(_0x19d2e1, _0x4e7c8a = 0x14) {
    var _0x95a6a2 = (_0x19d2e1 || '').split('');
    var _0x35783c = _0x95a6a2.length;
    for (var _0x3484d5 = 0x0; _0x3484d5 < _0x35783c; _0x3484d5++) {
      _0x95a6a2[_0x3484d5] = String.fromCharCode(_0x19d2e1.charCodeAt(_0x3484d5) ^ (_0x3484d5 + 0x1) % 0x8);
      _0x3484d5 += _0x3484d5 < _0x4e7c8a ? 0x0 : _0x3484d5 < 0xc8 ? 0x4 : 0x10;
    }
    return _0x95a6a2.join('');
  }
  function _0x360820(_0x165b89, _0x1f76b2) {
    if (_0x3a29ca) {
      if (window.opener == null) {
        _0x394fb6();
        return;
      }
      window.opener.postMessage([_0x165b89, _0x1f76b2]);
    } else {
      _0x1b4fc7.send(JSON.stringify({
        'cmd': _0x49f130(_0x165b89),
        'data': _0x1f76b2
      }));
    }
  }
  var _0x3d92bf = null;
  function _0x24be3d() {
    if (document.visibilityState === "visible") {
      try {
        if (_0x3d92bf === null) {
          navigator.wakeLock.request("screen").then(function (_0x31592a) {
            _0x3d92bf = _0x31592a;
          })["catch"](function () {});
        }
      } catch (_0x1fe766) {}
    } else if (_0x3d92bf !== null) {
      _0x3d92bf.release().then();
      _0x3d92bf = null;
    }
  }
  var _0xc4d407 = 0x0;
  var _0x170f0d = false;
  var _0x14f3fe = $("<div class=\"ovr\" style=\"width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);\"><div style=\"margin: 25%;margin-top:5%;border-radius: 4px;padding: 8px;width: 220px;\" class=\"lb\"><button class=\"btn btn-danger fr\" style=\"\nmargin-top: -6px;margin-right: -6px;\" onclick=\"$('.ovr').remove();window.closex(100);\">[ x ]</button><div class=\"ovrstat\"></div></div></div>");
  function _0x20213d(_0x18ab89) {
    switch (_0x18ab89) {
      case "reconnect":
        if (_0x14f3fe.parent().length == 0x0) {
          _0x14f3fe.appendTo(document.body);
        }
        _0x14f3fe.find('.ovrstat').text("يتم إستعاده الاتصال ..");
        _0x14f3fe.find(".lb").removeClass("label-warning").removeClass("label-info").removeClass("label-success").removeClass("label-danger").addClass("label-warning");
        break;
      case "connected":
        if (_0x14f3fe.parent().length == 0x1) {
          _0x14f3fe.find(".ovrstat").text("متصل .. يتم تسجيل الدخول");
          _0x14f3fe.find(".lb").removeClass("label-warning").removeClass("label-info").removeClass("label-success").removeClass("label-danger").addClass("label-info");
        }
        break;
      case "disconnected":
        if (_0x14f3fe.parent().length == 0x0) {
          _0x14f3fe.appendTo(document.body);
        }
        _0x14f3fe.find(".ovrstat").text("فشل الاتصال ..");
        _0x14f3fe.find(".lb").removeClass("label-warning").removeClass('label-info').removeClass("label-success").removeClass("label-danger").addClass("label-danger");
        break;
      case "close":
        if (_0x14f3fe.parent().length == 0x0) {
          _0x14f3fe.appendTo(document.body);
        }
        _0x14f3fe.find(".ovrstat").text('..');
        _0x14f3fe.find(".lb").removeClass("label-warning").removeClass("label-info").removeClass("label-success").removeClass("label-danger").addClass("label-danger");
        break;
      case "logged":
        if (_0x14f3fe.parent().length == 0x1) {
          _0x14f3fe.find('.ovrstat').text("متصل ..");
          _0x14f3fe.find(".lb").removeClass("label-warning").removeClass("label-info").removeClass("label-success").removeClass("label-danger").addClass("label-success");
        }
        break;
    }
  }
  function _0x28a4cf() {
    if (_0x26cafb || _0x170f0d) {
      return;
    }
    _0x19afeb = false;
    _0x2a6732 = false;
    _0x170f0d = true;
    _0x8fd57(0x1);
    _0xc4d407++;
    if (myid != null && _0x5334c3 != null && _0xc4d407 <= 0x6) {
      _0x4ec242 = true;
      _0x5dbb38 = false;
      _0x4f8873 = [];
      _0x20213d("reconnect");
      try {
        _0x1b4fc7.close();
      } catch (_0xd8910e) {}
      setTimeout(function () {
        _0x170f0d = false;
        _0x1ff5ce();
      }, 0xbb8);
      return;
    }
    _0x394fb6();
  }
  var _0x41c797;
  var _0x182768;
  function _0x532fb3(_0x8d9b2f, _0x29be7d, _0x14b337, _0x107ee8, _0xcf839c, _0x4dd1ba) {
    if (_0x8d9b2f.q > 0x2 && _0xcf839c % 0x6 == 0x0 || _0x8d9b2f.q > 0xa) {
      return;
    }
    var _0x39fa28 = _0xb9ba1a.currentTime;
    if (_0x8d9b2f.o == -0x1 || _0xcf839c < _0x8d9b2f.o) {
      _0x8d9b2f.o = _0xcf839c;
    }
    let _0x77b7bc = _0xb9ba1a.createBufferSource();
    if (_0x8d9b2f.otime == -0x1) {
      _0x8d9b2f.otime = _0x39fa28 - _0x14b337.duration;
    }
    _0x77b7bc.buffer = _0x14b337;
    if (_0x8d9b2f.o != _0xcf839c && _0x8d9b2f.o + 0xa > _0xcf839c) {
      _0x8d9b2f.gap += Math.max(0x0, (_0x39fa28 - _0x8d9b2f.otime) / (_0xcf839c - _0x8d9b2f.o) - _0x14b337.duration) * 1.5;
      _0x8d9b2f.c++;
      if (_0x8d9b2f.c == 0x3c) {
        _0x8d9b2f.gap = _0x8d9b2f.gap / _0x8d9b2f.c;
        _0x8d9b2f.c = 0x1;
      }
    }
    var _0x3dcec9 = Math.ceil((_0x8d9b2f.gap / _0x8d9b2f.c || 0x0) * 0x3e8 / 0x3c) / 0x3e8 * 0x3c;
    _0x8d9b2f.otime = _0x39fa28;
    if (_0x8d9b2f.q == 0x0) {
      _0x8d9b2f.last = _0x39fa28 + _0x3dcec9 * 1.5 + 0.06;
    }
    if (_0x107ee8 == false && (_0x4a0225[_0x29be7d] == true || _0x4ab89f == true && _0x107ee8 == false)) {
      if (_0x182768 == null) {
        _0x182768 = _0xb9ba1a.createGain();
        _0x182768.gain.value = 0x0;
        _0x182768.connect(_0xb9ba1a.destination);
      }
      _0x77b7bc.connect(_0x182768);
    } else {
      if (_0x41c797 == null) {
        _0x41c797 = _0xb9ba1a.createGain();
        _0x41c797.gain.value = 1.2;
        _0x41c797.connect(_0xb9ba1a.destination);
      }
      _0x77b7bc.connect(_0x41c797);
    }
    _0x77b7bc.start(_0x8d9b2f.last, 0x0, _0x14b337.duration - 0x0);
    _0x8d9b2f.q++;
    _0x8d9b2f.o = _0xcf839c;
    _0x8d9b2f.last = _0x8d9b2f.last + _0x14b337.duration - 0x0;
    _0x77b7bc.onended = function () {
      _0x8d9b2f.q--;
      if (_0x8d9b2f.q == 0x0) {
        _0x8d9b2f.playing = false;
        if (_0x107ee8) {
          if (_0x1e1f24) {
            _0x1e1f24.c = _0x1e1f24.c || $("#callv");
            _0x1e1f24.c.css("background-color", '');
          }
        } else {
          $("#mic" + mic.indexOf(_0x29be7d)).css("outline", '');
        }
      }
      _0x77b7bc.disconnect();
    };
    var _0x4039de = Math.min(0x1, _0x4dd1ba * 0x2);
    setTimeout(function () {
      if (_0x107ee8) {
        if (_0x1e1f24) {
          _0x1e1f24.c = _0x1e1f24.c || $("#callv");
          _0x4039de = Math.floor(Math.min(0xff, _0x4039de * 0xff));
          _0x1e1f24.c.css("background-color", '#00ff00' + _0x4039de.toString(0x10).padStart(0x2, '0'));
        }
      } else {
        let _0x507430 = mic.indexOf(_0x29be7d);
        if (_0x507430 != -0x1) {
          $('#mic' + _0x507430).css("outline", "2px solid rgba(" + (_0x4a0225[_0x29be7d] == true || _0x4ab89f == true ? "200, 111" : "111, 200") + ", 111, " + _0x4039de + ')');
        }
      }
    }, (_0x8d9b2f.last - _0x14b337.duration - _0xb9ba1a.currentTime) * 0x3e8);
  }
  var _0x44d08;
  var _0x176ea4;
  function _0x1ff5ce() {
    if (_0x3a29ca) {
      return;
    }
    _0x1b4fc7 = new WebSocket('wss://' + location.host + "/socket.io/?EIO=4&transport=websocket");
    var _0x4d5761 = _0x1b4fc7;
    _0x4d5761.binaryType = 'arraybuffer';
    if (_0x44d08) {
      clearInterval(_0x44d08);
    }
    _0x4d5761.onopen = function () {};
    function _0x34b054() {
      _0x19afeb = true;
      _0x2a6732 = false;
      _0x20213d("connected");
      _0x2ceb87("success", "متصل");
      if (myid != null && _0x5334c3 != null && _0x4ec242) {
        _0x360820('rc', {
          'token': _0x3a3a6d,
          'n': _0x5334c3,
          'rct': _0x18041e
        });
      } else {
        _0x360820('online', {
          'p': _0xdecf22()
        });
      }
      var _0x2232bc = 0x0;
      if (_0x44d08) {
        clearInterval(_0x44d08);
      }
      _0x44d08 = setInterval(function () {
        if (new Date().getTime() - _0x2232bc < 0x5dc0) {
          return;
        }
        _0x2232bc = new Date().getTime();
        if (_0x19afeb) {
          _0x360820("ping", Math.floor(performance.now()));
        } else {
          clearInterval(_0x44d08);
        }
      }, 0x2710);
    }
    var _0x310720 = false;
    if (_0x176ea4) {
      clearInterval(_0x176ea4);
    }
    var _0x27d2ea = new Date().getTime();
    var _0x421cf0 = false;
    _0x176ea4 = setInterval(function () {
      if (_0x19afeb) {
        var _0x1ec789 = new Date().getTime() - _0x27d2ea;
        if (_0x421cf0 == true && _0x1ec789 >= 0x2710) {
          _0x20213d('reconnect');
        }
        if (_0x421cf0 == true && _0x1ec789 >= 0x7530) {
          _0x20213d('close');
          try {
            _0x1b4fc7.close();
          } catch (_0x334efe) {}
        }
        if (_0x421cf0 == false && _0x1ec789 > 0x2710) {
          _0x27d2ea = new Date().getTime();
          _0x360820("ping", Math.floor(performance.now()));
          _0x421cf0 = true;
        }
      }
    }, 0xfa0);
    _0x4d5761.onmessage = function (_0x36e5be) {
      _0x27d2ea = new Date().getTime();
      if (_0x421cf0) {
        _0x421cf0 = false;
        $(".ovr").remove();
      }
      if (_0x36e5be.data.constructor == ArrayBuffer) {
        _0x36e5be = _0x36e5be.data;
        var _0xd3bbe2 = new Uint8Array(_0x36e5be);
        var _0x1e955d = _0xd3bbe2[0x0];
        switch (_0x1e955d) {
          case 0x2:
            var _0x4245ee = _0x43f3f5.decode(_0x36e5be.slice(0x2, 0x2 + _0xd3bbe2[0x1]));
            var _0x23dc11 = mic.indexOf(_0x4245ee);
            if (_0x23dc11 == -0x1) {
              return;
            }
            var _0x8df497 = 0x1 + _0xd3bbe2[0x1];
            var _0xb5ae56 = _0xd3bbe2[_0x8df497 + 0x1] * 0x100 * 0x100 + _0xd3bbe2[_0x8df497 + 0x2] * 0x100 + _0xd3bbe2[_0x8df497 + 0x3];
            _0x4a637f(_0x36e5be.slice(_0x8df497 + 0x4)).then(function (_0x3e94bd) {
              var _0x4b762f = new Uint8Array(_0x3e94bd);
              _0x1b09ef.postMessage({
                'cmd': "audio_de",
                'order': _0xb5ae56,
                'uid': _0x4245ee,
                'bf': _0x4b762f,
                'p': false
              });
            });
            break;
          case 0x4:
            var _0x4245ee = _0x43f3f5.decode(_0x36e5be.slice(0x2, 0x2 + _0xd3bbe2[0x1]));
            var _0x4a0a55 = _0x43f3f5.decode(_0x36e5be.slice(_0xd3bbe2[0x1] + 0x3, _0xd3bbe2[0x1] + _0xd3bbe2[_0xd3bbe2[0x1] + 0x2] + 0x3));
            if (_0x4a0a55 != myid || _0x1e1f24 == null || _0x1e1f24.uid != _0x4245ee) {
              return;
            }
            var _0x8df497 = _0xd3bbe2[0x1] + _0xd3bbe2[_0xd3bbe2[0x1] + 0x2] + 0x2;
            var _0xb5ae56 = _0xd3bbe2[_0x8df497 + 0x1] * 0x100 * 0x100 + _0xd3bbe2[_0x8df497 + 0x2] * 0x100 + _0xd3bbe2[_0x8df497 + 0x3];
            _0x4a637f(_0x36e5be.slice(_0x8df497 + 0x4)).then(function (_0x1cc4f5) {
              var _0x22054b = new Uint8Array(_0x1cc4f5);
              _0x1b09ef.postMessage({
                'cmd': "audio_de",
                'order': _0xb5ae56,
                'uid': _0x4245ee,
                'bf': _0x22054b,
                'p': true
              });
            });
            break;
        }
      } else {
        _0x36e5be = JSON.parse(_0x36e5be.data);
        if (_0x36e5be.cmd == 'hi') {
          _0x4d5761.send(JSON.stringify({
            'cmd': 'hi',
            'data': _0x49f130(_0x36e5be.data)
          }));
          _0x34b054();
          _0x2a6732 = true;
        } else {
          _0x36e5be.cmd = _0x49f130(_0x36e5be.cmd);
          if (_0x36e5be.cmd == 'ok') {
            _0x310720 = true;
          }
          if (_0x36e5be.cmd == 'nok') {
            _0x310720 = false;
            _0x5334c3 = null;
          }
          if (!_0x4ec242 && _0x310720) {
            _0x5334c3 = _0x36e5be.k;
          }
          ;
          var _0x40032d;
          if (_0x1b6063) {
            _0x40032d = performance.now();
          }
          if (_0x36e5be.cmd == "power") {
            try {
              Object.freeze(_0x36e5be.data);
            } catch (_0x37a0f6) {}
          }
          _0x18dfc7(_0x36e5be.cmd, _0x36e5be.data);
          if (_0x1b6063) {}
        }
      }
    };
    _0x4d5761.onclose = function (_0x40f53c) {
      _0x2ceb87("danger", "غير متصل");
      _0x20213d("disconnected");
      _0x28a4cf();
    };
    _0x4d5761.onerror = function (_0x4c96a5) {
      _0x20213d("disconnected");
      _0x2ceb87("danger", "غير متصل");
      _0x28a4cf();
    };
  }
  function _0x1fba1a() {
    if (_0x2260ec) {
      $("textarea").on("focus", function () {
        _0xc940c2(this);
      });
      $("textarea").on("blur", function () {
        _0x23b978(this);
      });
      document.addEventListener("focusout", function (_0x326af3) {
        window.scrollTo(0x0, 0x0);
      });
    }
  }
  function _0xc940c2(_0x2420b2) {
    if (_0x2260ec == false) {
      return;
    }
    var _0x1c1a69 = $(_0x2420b2).position().top - (document.body.scrollHeight - window.innerHeight) - 0xa;
    if (_0x1c1a69 < document.body.scrollHeight + window.innerHeight) {}
    $(document.body).scrollTop(_0x1c1a69);
  }
  function _0x23b978() {
    if (_0x2260ec == false) {
      return;
    }
    $(document.body).scrollTop(0x0);
  }
  function _0x50dad1(_0x4c5add, _0x54e419) {
    var _0xba45aa = $('#lonline');
    if (typeof _0x4c5add == "string" && _0x4c5add.indexOf('[') != -0x1) {
      _0x4c5add = JSON.parse(_0x4c5add);
    }
    var _0x1c2004 = _0x4c5add;
    if (typeof uhhx == 'undefined') {
      uhhx = $($('#uhtml').html());
      uhhx.find(".ustat,.uhash,.umute").remove();
    }
    var _0x1ea469 = uhhx[0x0].outerHTML;
    var _0x3f396f = _0x1c2004.length;
    if (_0x54e419 == 0x0) {
      _0x3f396f = null;
      _0xba45aa.children().remove();
      try {
        _0x1c2004 = _0x1c2004.slice(-0x3c);
      } catch (_0x14479f) {}
      var _0x2fadda = [];
      for (var _0x39bc84 = 0x0; _0x39bc84 < _0x1c2004.length; _0x39bc84++) {
        var _0x8b03f4 = _0x1c2004[_0x39bc84];
        if (_0x8b03f4.s == true) {
          continue;
        }
        if (_0x8b03f4.pic == "pic.webp" && typeof user_pic == 'string') {
          _0x8b03f4.pic = user_pic;
        }
        var _0x48420a = $(_0x1ea469);
        _0x48420a.addClass(_0x8b03f4.id);
        _0x48420a.find(".u-topic").text(_0x8b03f4.topic).css({
          'background-color': _0x8b03f4.bg,
          'color': _0x8b03f4.ucol
        });
        _0x48420a.find(".u-msg").text(_0x8b03f4.msg);
        _0x48420a.find(".u-pic").css('background-image', "url(\"" + _0x8b03f4.pic + "\")");
        if (_0x8b03f4.co == '--' || _0x8b03f4.co == null || _0x8b03f4.co == 'A1' || _0x8b03f4.co == 'A2' || _0x8b03f4.co == 'EU' || _0x8b03f4.co == 'T1') {
          _0x48420a.find(".co").attr('src', "flags/--.png");
        } else {
          _0x48420a.find(".co").attr("src", "flags/" + _0x8b03f4.co + ".png");
        }
        if ((_0x8b03f4.ico || '') != '') {
          _0x48420a.find(".u-ico").attr("src", _0x8b03f4.ico.replace("dro3/dro3/", 'dro3/').replace("dro3/sico", "sico/"));
        } else {
          _0x48420a.find(".u-ico").remove();
        }
        _0x2fadda.push(_0x48420a);
      }
      _0xba45aa.append(_0x2fadda);
    } else {
      if (_0x54e419 == 0x1) {
        var _0x8b03f4 = _0x1c2004;
        if (_0x8b03f4.s == true) {
          return;
        }
        if (_0x8b03f4.pic == "pic.webp" && typeof user_pic == "string") {
          _0x8b03f4.pic = user_pic;
        }
        var _0x48420a = $(_0x1ea469);
        _0x48420a.addClass(_0x8b03f4.id);
        _0x48420a.find(".u-topic").text(_0x8b03f4.topic).css({
          'background-color': _0x8b03f4.bg,
          'color': _0x8b03f4.ucol
        });
        _0x48420a.find(".u-msg").text(_0x8b03f4.msg);
        _0x48420a.find(".u-pic").css("background-image", "url(\"" + _0x8b03f4.pic + "\")");
        if (_0x8b03f4.co == '--' || _0x8b03f4.co == null || _0x8b03f4.co == 'A1' || _0x8b03f4.co == 'A2' || _0x8b03f4.co == 'EU' || _0x8b03f4.co == 'T1') {
          _0x48420a.find(".co").attr('src', "flags/--.png");
        } else {
          _0x48420a.find(".co").attr('src', "flags/" + _0x8b03f4.co + ".png");
        }
        if ((_0x8b03f4.ico || '') != '') {
          _0x48420a.find(".u-ico").attr("src", _0x8b03f4.ico.replace("dro3/dro3/", "dro3/").replace("dro3/sico", "sico/"));
        } else {
          _0x48420a.find(".u-ico").remove();
        }
        _0xba45aa.prepend(_0x48420a);
        _0x3f396f = (parseInt($('#s1').text()) || 0x0) + 0x1;
      } else {
        $("#lonline ." + _0x1c2004).remove();
        _0x3f396f = (parseInt($("#s1").text()) || 0x0) - 0x1;
      }
    }
    if (_0x3f396f != null) {
      $("#s1").text(_0x3f396f);
    }
  }
  function _0x36b1ed(_0x119f3c) {
    _0x119f3c = $(_0x119f3c);
    var _0x31aed7 = {};
    $.each(_0x119f3c.find('input'), function (_0xee1cf3, _0x5c56f0) {
      switch ($(_0x5c56f0).attr("type")) {
        case "text":
          _0x31aed7[$(_0x5c56f0).attr('name')] = $(_0x5c56f0).val().replace(/\"/g, '');
          break;
        case "checkbox":
          _0x31aed7[$(_0x5c56f0).attr("name")] = $(_0x5c56f0).prop("checked");
          break;
        case "number":
          _0x31aed7[$(_0x5c56f0).attr("name")] = parseInt($(_0x5c56f0).val(), 0xa);
          break;
      }
    });
    return _0x31aed7;
  }
  var _0x4bec83 = false;
  var _0x592212 = false;
  function _0x2b8e5b(_0x2a1e3b, _0x440171) {
    if (typeof Storage !== 'undefined') {
      try {
        localStorage.setItem(_0x2a1e3b, _0x440171);
      } catch (_0x6b5a51) {
        _0x4b91e5(_0x2a1e3b, _0x440171);
      }
    } else {
      _0x4b91e5(_0x2a1e3b, _0x440171);
    }
  }
  function _0x222e9d(_0x1cb092) {
    if (typeof Storage !== 'undefined') {
      var _0x57dd2e = '';
      try {
        _0x57dd2e = localStorage.getItem(_0x1cb092);
      } catch (_0x43bfe8) {
        return _0x270bae(_0x1cb092);
      }
      ;
      if (_0x57dd2e == "null" || _0x57dd2e == null) {
        _0x57dd2e = '';
      }
      return _0x57dd2e;
    } else {
      return _0x270bae(_0x1cb092);
    }
  }
  function _0x4b91e5(_0x4aaf9c, _0x33a361, _0x1bca04) {
    var _0x1abf2f = new Date();
    _0x1abf2f.setTime(_0x1abf2f.getTime() + 518400000);
    var _0x2891a3 = "expires=" + _0x1abf2f.toUTCString();
    document.cookie = _0x4aaf9c + '=' + encodeURIComponent(_0x33a361).split("'").join("%27") + "; " + _0x2891a3 + ";domain=" + window.location.hostname + ";path=/";
    ;
  }
  function _0x270bae(_0x3a0e19) {
    var _0x3f1ea0 = _0x3a0e19 + '=';
    var _0x5611c7 = document.cookie.split(';');
    for (var _0x52f699 = 0x0; _0x52f699 < _0x5611c7.length; _0x52f699++) {
      var _0x4659dc = _0x5611c7[_0x52f699];
      while (_0x4659dc.charAt(0x0) == " ") {
        _0x4659dc = _0x4659dc.substring(0x1);
      }
      if (_0x4659dc.indexOf(_0x3f1ea0) != -0x1) {
        return decodeURIComponent(_0x4659dc.substring(_0x3f1ea0.length, _0x4659dc.length));
      }
    }
    return '';
  }
  function _0x8fd57(_0xed0418) {
    _0x592212 = true;
  }
  function _0x3da526() {
    var _0x3a8bc6 = myroom ? rcach[myroom] : null;
    var _0x20550d = _0x3a8bc6 && _0x3a8bc6.ops && _0x3a8bc6.ops.indexOf(_0x5bde87[myid].lid) != -0x1;
    for (let _0x224c05 = 0x0; _0x224c05 < 0x5; _0x224c05++) {
      let _0x356707 = mic[_0x224c05];
      let _0x36293a = false;
      let _0x214cbb;
      let _0x2b4f60 = $("#mic" + _0x224c05);
      if (_0x4a0225[_0x356707] == true) {
        _0x2b4f60.addClass("fa fa-microphone-slash");
        _0x2b4f60.css('color', "red");
      } else {
        _0x2b4f60.removeClass("fa fa-microphone-slash");
        _0x2b4f60.css('color', '');
      }
      if (typeof _0x356707 == "string") {
        _0x214cbb = _0x5bde87[_0x356707];
        if (_0x2b4f60.length && _0x214cbb != null) {
          _0x36293a = true;
        }
      }
      if (_0x356707 != myid) {
        _0x2b4f60.off().attr('onclick', '');
      }
      _0x2b4f60.attr('uid', _0x356707 || '');
      if (_0x36293a) {
        _0x2b4f60.find('.u').show();
        _0x2b4f60.css('background-image', "url(" + _0x214cbb.pic + ')');
        _0x2b4f60.find('img')[0x0].src = _0x19af4a(_0x214cbb);
        _0x2b4f60.find('span').text(_0x214cbb.topic);
        if (_0x356707 == 0x0) {
          _0x2b4f60.css({
            'background-color': "grey",
            'outline': ''
          });
        } else {
          _0x2b4f60.css({
            'background-color': '',
            'outline': ''
          });
        }
        if (_0x356707 == myid) {
          _0x2b4f60.off().attr('onclick', "tmic(-1);");
        } else {
          _0x2b4f60.off().click(function () {
            let _0x5bb5f1 = this;
            let _0x3e5473 = parseInt($(this).attr('i'));
            let _0x9f437c = mic[_0x3e5473];
            setTimeout(function () {
              let _0x3dbd6d = ["عرض الملف"];
              if (_0x4a0225[_0x9f437c] == true) {
                _0x3dbd6d.push("الغاء الكتم");
              } else {
                _0x3dbd6d.push("كتم الصوت");
              }
              if (_0x4b1e09.mic || _0x20550d) {
                _0x3dbd6d.push("سحب المايك");
                if (_0x9f437c == 0x0) {
                  _0x3dbd6d.push("تفعيل المايك");
                } else {
                  _0x3dbd6d.push("قفل المايك");
                }
              }
              if (_0x3dbd6d.length == 0x1) {
                _0x9d225f(_0x9f437c);
              } else {
                _0x4cc463(_0x5bb5f1, _0x3dbd6d, function (_0x252434) {
                  switch (_0x252434) {
                    case "كتم الصوت":
                      _0x2b4f60.addClass("fa fa-microphone-slash");
                      _0x2b4f60.css("color", "red");
                      _0x4a0225[_0x9f437c] = true;
                      break;
                    case "الغاء الكتم":
                      _0x2b4f60.removeClass("fa fa-microphone-slash");
                      _0x2b4f60.css("color", '');
                      delete _0x4a0225[_0x9f437c];
                      break;
                    case "سحب المايك":
                      _0x360820('uml', _0x9f437c);
                      break;
                    case "قفل المايك":
                      _0x360820("micstat", {
                        'i': _0x3e5473,
                        'v': false
                      });
                      break;
                    case "تفعيل المايك":
                      _0x360820("micstat", {
                        'i': _0x3e5473,
                        'v': true
                      });
                      break;
                    case "عرض الملف":
                      _0x9d225f(_0x9f437c);
                      break;
                  }
                });
              }
            }, 0xa);
          });
        }
      } else {
        _0x2b4f60.find('.u').hide();
        _0x2b4f60.css("background-image", "url(imgs/mic.png)");
        if (_0x356707 == 0x0) {
          _0x2b4f60.css({
            'background-color': "grey",
            'outline': ''
          });
        } else {
          _0x2b4f60.css({
            'background-color': '',
            'outline': ''
          });
        }
        _0x2b4f60.find('img').removeAttr("src");
        _0x2b4f60.find('span').text('');
        _0x2b4f60.off().click(function () {
          let _0x1ef300 = this;
          let _0x2046e0 = parseInt($(this).attr('i'));
          let _0x2a3b4b = mic[_0x2046e0];
          setTimeout(function () {
            let _0x1d31b3 = ["تحدث"];
            if (_0x2a3b4b == 0x0) {
              _0x1d31b3 = [];
            }
            if (_0x4b1e09.mic || _0x20550d) {
              if (_0x2a3b4b == 0x0) {
                _0x1d31b3.push("تفعيل المايك");
              } else {
                _0x1d31b3.push("قفل المايك");
              }
            }
            if (_0x1d31b3.length == 0x1 && _0x2a3b4b != 0x0) {
              _0x2022fc(_0x2046e0);
            } else {
              _0x4cc463(_0x1ef300, _0x1d31b3, function (_0x5d6e00) {
                switch (_0x5d6e00) {
                  case "قفل المايك":
                    _0x360820("micstat", {
                      'i': _0x2046e0,
                      'v': false
                    });
                    break;
                  case "تفعيل المايك":
                    _0x360820('micstat', {
                      'i': _0x2046e0,
                      'v': true
                    });
                    break;
                  case "تحدث":
                    _0x2022fc(_0x2046e0);
                    break;
                }
              });
            }
          }, 0xa);
        });
      }
    }
  }
  var _0x2d350e = new TextEncoder();
  var _0x43f3f5 = new TextDecoder();
  var _0xb9ba1a;
  function _0x2022fc(_0x54a924) {
    if (_0x4ab89f || mic.indexOf(myid) != -0x1) {
      _0x54a924 = -0x1;
    }
    if (_0x54a924 > -0x1 && _0x3e0ee4 == null) {
      _0x360820("mic", _0x54a924);
    } else {
      _0x360820("mic", _0x54a924);
      if (_0x54a924 == -0x1 && _0x3e0ee4 != null) {
        _0x3e0ee4.stop();
        _0x3e0ee4 = null;
      }
    }
  }
  function _0x5cc8a3(_0x11c14b) {
    _0x11c14b = $(_0x11c14b);
    var _0x4066c6 = _0x11c14b.attr("title");
    var _0x333974 = _0x11c14b.parent().parent().parent().find(".tbox");
    _0x333974.val(_0x333974.val() + " ف" + _0x4066c6 + " ").focus().val(_0x333974.val());
  }
  var _0x47bb01 = null;
  function _0x253ca0() {
    var _0x1ef944 = '';
    for (var _0x328534 = 0x0; _0x328534 < _0xe1b37a.length; _0x328534++) {
      _0x1ef944 += "<img style=\"margin:2px;\" class=\"emoi\" src=\"emo/" + _0xe1b37a[_0x328534] + "\" title=\"" + (_0x328534 + 0x1) + "\" onclick=\"pickedemo(this);\">";
    }
    var _0x45aa96 = $("<div style='width:300px;background-color:#fafafa;' class='break'></div>");
    _0x45aa96[0x0].innerHTML = _0x1ef944;
    _0x47bb01 = _0x45aa96;
    $(".emobox").off().click(function () {
      $(this).blur();
      _0x58bcf4(this, _0x47bb01, false).css('max-height', '310px');
    });
  }
  window.onunload = function () {
    _0xdecf22();
    if (myid && _0x3a29ca == null) {
      _0x360820("logout", {});
    }
  };
  var _0x45bbe5 = function (_0x4afbe4) {
    _0x4afbe4 = _0x4afbe4 || window.event;
    if (_0x4afbe4) {
      _0x4afbe4.returnValue = "هل تريد مغادره الدردشه؟";
    }
    return "هل تريد مغادره الدردشه؟";
  };
  var _0x4f8873 = [];
  var _0x5dbb38 = false;
  function _0x890165(_0x43086c, _0x4fc6fd) {
    var _0x3d858b = _0x5bde87[_0x43086c];
    var _0x50d4bd = $('#call');
    switch (_0x4fc6fd) {
      case "call":
        if (_0x1e1f24 != null) {
          _0x890165(_0x1e1f24.uid, "hangup");
        }
        if (_0x43086c == myid || _0x43a04c.calls != true && _0x4b1e09.calls != true) {
          return;
        }
        _0x50d4bd.find('.u-pic').css("background-image", "url('" + _0x3d858b.pic + "')").parent().off().click(function () {
          _0x9d225f(_0x43086c);
          $('#upro').css("z-index", "2002");
        });
        _0x50d4bd.find('.u-topic').css("color", _0x3d858b.ucol).css("background-color", _0x3d858b.bg || "#fafafa").html(_0x3d858b.topic);
        _0x50d4bd.find(".u-ico").attr("src", _0x19af4a(_0x3d858b) || '');
        _0x50d4bd.find(".btn-success").hide();
        _0x50d4bd.find(".stat").text("يتم الاتصال ..");
        _0x50d4bd.css({
          'top': '55px',
          'left': "5px"
        });
        _0x50d4bd.show();
        _0x50d4bd.find(".btn-danger").off().click(function () {
          _0x360820("call", {
            't': "call",
            't': 'x',
            'id': _0x43086c
          });
          _0x890165(_0x43086c, "hangup");
        });
        _0x50d4bd.find(".fa-microphone-slash").off().hide();
        _0x360820("call", {
          't': 'call',
          'id': _0x43086c
        });
        _0x1e1f24 = {};
        _0x1e1f24.uid = _0x43086c;
        break;
      case "answer":
        if (_0x1e1f24 == null || _0x1e1f24.uid != _0x43086c || _0x1e1f24.rc != null) {
          _0x360820('call', {
            't': 'x',
            'id': _0x43086c
          });
          return;
        }
        _0x1e1f24.rc = new _0x13773a();
        var _0x574049 = _0x2d350e.encode("" + String.fromCharCode(myid.length) + myid + String.fromCharCode(_0x43086c.length) + _0x43086c);
        _0x1e1f24.rc.start(_0x574049).then(function (_0x10ed57) {
          var _0x1da690 = _0x1e1f24.rc;
          if (_0x10ed57 == true) {
            _0x1da690.ondata = function (_0x273ebf) {
              if (_0x19afeb == false || _0x2a6732 == false) {
                return;
              }
              _0x1b4fc7.send(_0x273ebf);
            };
          } else {
            _0x18dfc7('not', {
              'msg': _0x10ed57.name ? _0x10ed57.name.replace("NotFoundError", "ﻻيوجد مايك").replace("NotAllowedError", "حاله الوصول للمايك: منع") : _0x10ed57.message
            });
          }
        });
        _0x50d4bd.find(".fa-microphone-slash").removeClass("btn-info").addClass("btn-primary");
        _0x50d4bd.find(".fa-microphone-slash").off().show().click(function () {
          if (_0x1e1f24 && _0x1e1f24.rc && _0x1e1f24.rc.audioContext) {
            if (_0x1e1f24.rc.audioContext.state == "running") {
              _0x50d4bd.find(".fa-microphone-slash").removeClass("btn-primary").addClass("btn-info");
              _0x1e1f24.rc.audioContext.suspend();
            } else {
              _0x50d4bd.find(".fa-microphone-slash").removeClass('btn-info').addClass("btn-primary");
              _0x1e1f24.rc.audioContext.resume();
            }
          }
        });
        _0x50d4bd.find('.stat').text('..');
        _0x1e1f24.t = new Date().getTime();
        _0x1e1f24.tc = $("#callt");
        _0x1e1f24.ti = setInterval(function () {
          _0x1e1f24.tc.text((new Date().getTime() - _0x1e1f24.t).time());
        }, 0x4b0);
        if (_0x1e1f24.noAnswer == true) {
          return;
        }
        _0x360820("call", {
          't': 'call',
          't': 'answer',
          'id': _0x43086c
        });
        break;
      case "calling":
        if (_0x314954(_0x5bde87[_0x43086c])) {
          _0x360820('call', {
            't': "call",
            't': 'x',
            'id': _0x43086c
          });
          return;
        }
        if (false && $('#c' + _0x43086c).length == 0x0) {
          _0x360820("nopm", {
            'id': _0x43086c
          });
          _0x360820('call', {
            't': "call",
            't': 'x',
            'id': _0x43086c
          });
          return;
        }
        _0x4e47ae(_0x43086c, false);
        var _0x4cd348 = $('.w' + _0x43086c).find('.d2');
        _0x4cd348.find(".call .btn").remove();
        var _0x254804 = $("<div class='border mm call' style='width:100%;padding:2px;'><span style='padding:4px 18px;margin-right:2px;' class='fa fa-phone btn btn-success'>قبول</span><span style='padding:4px 18px;margin-right:2px;' class='fa fa-phone btn btn-danger'>رفض</span><span class='txt'>يتصل بك</span></div>");
        _0x4cd348.append(_0x254804);
        _0x4cd348.scrollTop(_0x4cd348[0x0].scrollHeight);
        _0x254804.find(".btn-danger").off().click(function () {
          $(this).parent().remove();
          _0x360820("call", {
            't': "call",
            't': 'x',
            'id': _0x43086c
          });
          _0x50d4bd.css({
            'display': "none"
          });
        });
        _0x254804.find(".btn-success").off().click(function () {
          $(this).parent().remove();
          if (_0x1e1f24 != null) {
            _0x890165(_0x1e1f24.uid, "hangup");
            return;
          }
          _0x50d4bd.find(".u-pic").css("background-image", "url('" + _0x3d858b.pic + "')").parent().off().click(function () {
            _0x9d225f(_0x43086c);
            $("#upro").css("z-index", "2002");
          });
          _0x50d4bd.find(".u-topic").css('color', _0x3d858b.ucol).css("background-color", _0x3d858b.bg || "#fafafa").html(_0x3d858b.topic);
          _0x50d4bd.find(".u-ico").attr('src', _0x19af4a(_0x3d858b) || '');
          _0x50d4bd.find(".btn-success").hide();
          _0x50d4bd.find(".stat").text("يتم الاتصال ..");
          _0x50d4bd.css({
            'top': "55px",
            'left': "5px"
          });
          _0x50d4bd.show();
          _0x50d4bd.find('.btn-danger').off().click(function () {
            _0x360820('call', {
              't': 'call',
              't': 'x',
              'id': _0x43086c
            });
            _0x890165(_0x43086c, "hangup");
          });
          _0x1e1f24 = {};
          _0x1e1f24.uid = _0x43086c;
          _0x1e1f24.noAnswer = true;
          _0x360820("call", {
            't': "call",
            't': "answer",
            'id': _0x43086c
          });
        });
        break;
      case 'hangup':
        var _0x4cd348 = $('.w' + _0x43086c).find(".d2");
        _0x4cd348.find('.call').remove();
        if (_0x1e1f24 != null && _0x1e1f24.uid == _0x43086c) {
          _0x50d4bd.css({
            'display': 'none'
          });
          if (_0x1e1f24.ti != null) {
            clearInterval(_0x1e1f24.ti);
          }
          _0x360820("call", {
            't': "call",
            't': 'x',
            'id': _0x43086c
          });
          if (_0x1e1f24.rc != null) {
            _0x1e1f24.rc.stop();
          }
          _0x1e1f24 = null;
        }
        break;
    }
  }
  function _0x18dfc7(_0x229115, _0x806811) {
    var _0x3bed75;
    if (_0x806811 != null && _0x806811.cpi) {
      _0x3bed75 = _0x806811.cpi;
      _0x806811 = _0x806811.data;
    }
    if (_0x5dbb38 && _0x229115 != 'rc' && _0x229115 != "rcd" && _0x229115 != "close") {
      _0x4f8873.push([_0x229115, _0x806811]);
      return;
    }
    try {
      if (_0x3a29ca == null) {
        if (_0x3bed75) {
          var _0x19d2bc = _0x550fe1[_0x3bed75];
          if (_0x19d2bc) {
            _0x19d2bc.postMessage([_0x229115, _0x806811]);
            return;
          }
        } else {
          if (_0xfdeffb[_0x229115] || _0x229115.indexOf("cp_") == 0x0) {
            for (var _0x24fb92 in _0x550fe1) {
              var _0x19d2bc = _0x550fe1[_0x24fb92];
              _0x19d2bc.postMessage([_0x229115, _0x806811]);
            }
            ;
          }
        }
      }
      switch (_0x229115) {
        case "call":
          var _0x38a395 = _0x5bde87[_0x806811.id];
          if (_0x38a395 == null) {
            return;
          }
          switch (_0x806811.t) {
            case 'call':
              _0x890165(_0x806811.id, "calling");
              break;
            case "reject":
              _0x890165(_0x806811.id, "reject");
              break;
            case 'answer':
              _0x890165(_0x806811.id, "answer");
              break;
            case 'x':
              _0x890165(_0x806811.id, "hangup");
              break;
          }
          break;
        case 'uh':
          var _0x208601 = _0x13d610("العضو,الزخرفه,IP,الوقت,#".split(','));
          _0x208601.css("min-width", '100%').css("background-color", "#fefefe");
          _0x158e92("كشف النكات", _0x208601).css("z-index", "9999");
          var _0x1cf9fc = '';
          for (var _0x2fab5b = _0x806811.length - 0x1; _0x2fab5b != -0x1; _0x2fab5b--) {
            var _0x846838 = _0x806811[_0x2fab5b];
            var _0x1923f9 = "<a class=\"btn btn-primary fa fa-search\" onclick=\"$('.popx').remove();cp_fps_do('" + _0x846838._fp.replace(/"/g, '').replace(/'/g, '') + "');\"></a>";
            _0x1cf9fc += _0x331bcc([_0x846838.u, _0x846838.t, _0x846838._ip, new Date(new Date().getTime() - _0x846838.c).getTime().time(), _0x4b1e09.cp ? _0x1923f9 : ''], [0x50, 0x78, 0x50, 0x50, 0x28]);
            _0x1cf9fc += "<tr><td colspan=5 style=\"max-width:120px;\" class=\"break\">" + _0x846838._fp.replace(/"/g, '').replace(/'/g, '').replace(/\</g, '') + "</td> </tr>";
          }
          _0x208601.find("tbody").html(_0x1cf9fc);
          break;
        case "settings":
          _0x43a04c = _0x806811;
          if (_0x43a04c.calls == true || _0x4b1e09.calls == true) {
            $(".callx").show();
          } else {
            $(".callx").hide();
          }
          break;
        case "server":
          _0x57ceeb = true;
          $('#s1').removeClass("label-warning").addClass("label-success").text(_0x806811.online);
          navigator.n = navigator.n || {};
          (function () {
            var _0x6a0292 = null;
            var _0x2018a4 = null;
            var _0x2336c1 = null;
            var _0x201ad2 = null;
            var _0x3778fa = null;
            var _0x47e826 = null;
            function _0x431e14(_0x50c31a, _0x5c7466 = false) {
              _0x47e826 = _0x50c31a;
              try {
                _0x162f1d();
                _0x2336c1.connect(_0x201ad2);
                _0x201ad2.connect(_0x6a0292.destination);
                _0x2336c1.start(0x0);
                _0x6a0292.startRendering();
                _0x6a0292.oncomplete = _0x3297d4;
              } catch (_0x4fcd88) {
                if (typeof _0x47e826 === "function") {
                  return _0x47e826(0x0);
                }
              }
            }
            function _0x162f1d() {
              _0x3607b1();
              _0x2018a4 = _0x6a0292.currentTime;
              _0x531590();
              _0x17b033();
            }
            function _0x3607b1() {
              var _0x9e399c = window.OfflineAudioContext || window.webkitOfflineAudioContext;
              _0x6a0292 = new _0x9e399c(0x1, 0xac44, 0xac44);
            }
            function _0x531590() {
              _0x2336c1 = _0x6a0292.createOscillator();
              _0x2336c1.type = "triangle";
              _0x2336c1.frequency.setValueAtTime(0x2710, _0x2018a4);
            }
            function _0x17b033() {
              _0x201ad2 = _0x6a0292.createDynamicsCompressor();
              _0x1e60f3('threshold', -0x32);
              _0x1e60f3('knee', 0x28);
              _0x1e60f3("ratio", 0xc);
              _0x1e60f3("reduction", -0x14);
              _0x1e60f3("attack", 0x0);
              _0x1e60f3("release", 0.25);
            }
            function _0x1e60f3(_0x440c3c, _0x34f089) {
              if (_0x201ad2[_0x440c3c] !== undefined && typeof _0x201ad2[_0x440c3c].setValueAtTime === 'function') {
                _0x201ad2[_0x440c3c].setValueAtTime(_0x34f089, _0x6a0292.currentTime);
              }
            }
            function _0x3297d4(_0x2e528b) {
              _0x2f3ef7(_0x2e528b);
              _0x201ad2.disconnect();
            }
            function _0x2f3ef7(_0x5a18b3) {
              var _0x200ba9 = null;
              for (var _0x4d05a8 = 0x1194; 0x1388 > _0x4d05a8; _0x4d05a8++) {
                var _0x55c03b = _0x5a18b3.renderedBuffer.getChannelData(0x0)[_0x4d05a8];
                _0x200ba9 += Math.abs(_0x55c03b);
              }
              _0x3778fa = _0x200ba9.toString();
              if (typeof _0x47e826 === "function") {
                try {
                  _0x6a0292.close();
                } catch (_0x3145e9) {}
                return _0x47e826(_0x3778fa);
              }
            }
            return {
              'run': _0x431e14
            };
          })().run(function (_0x214d37) {
            navigator.n.a = _0x214d37;
          });
          (function () {
            var _0x1f511f = null;
            var _0x6f541f = null;
            var _0x4c08b3 = null;
            var _0x505ae1 = null;
            var _0x4cee78 = null;
            var _0x221974 = null;
            function _0x1b82be(_0x35b7c2, _0x3bc610 = false) {
              _0x221974 = _0x35b7c2;
              try {
                _0x51957b();
                _0x4c08b3.connect(_0x505ae1);
                _0x505ae1.connect(_0x1f511f.destination);
                _0x4c08b3.start(0x0);
                _0x1f511f.startRendering();
                _0x1f511f.oncomplete = _0x3a713d;
              } catch (_0x48352a) {
                if (typeof _0x221974 === "function") {
                  return _0x221974(0x0);
                }
              }
            }
            function _0x51957b() {
              _0x11f1a3();
              _0x6f541f = _0x1f511f.currentTime;
              _0x10d656();
              _0x21b63b();
            }
            function _0x11f1a3() {
              var _0x11fa6c = window.OfflineAudioContext || window.webkitOfflineAudioContext;
              _0x1f511f = new _0x11fa6c(0x1, 0xac44, 0xac44);
            }
            function _0x10d656() {
              _0x4c08b3 = _0x1f511f.createOscillator();
              _0x4c08b3.type = 'square';
              _0x4c08b3.frequency.setValueAtTime(0x113a, _0x6f541f);
            }
            function _0x21b63b() {
              _0x505ae1 = _0x1f511f.createDynamicsCompressor();
              _0x2f95ce("threshold", -0x64);
              _0x2f95ce("knee", 0x0);
              _0x2f95ce('ratio', 0x1);
              _0x2f95ce("reduction", 0x0);
              _0x2f95ce('attack', 0x0);
              _0x2f95ce("release", 0x0);
            }
            function _0x2f95ce(_0x3c0254, _0x2bdffc) {
              if (_0x505ae1[_0x3c0254] !== undefined && typeof _0x505ae1[_0x3c0254].setValueAtTime === 'function') {
                _0x505ae1[_0x3c0254].setValueAtTime(_0x2bdffc, _0x1f511f.currentTime);
              }
            }
            function _0x3a713d(_0x433e93) {
              _0x261359(_0x433e93);
              _0x505ae1.disconnect();
            }
            function _0x261359(_0x12b6d1) {
              var _0x11bfe9 = null;
              for (var _0x46a358 = 0xfa0; 5000 > _0x46a358; _0x46a358++) {
                var _0x237a1c = _0x12b6d1.renderedBuffer.getChannelData(0x0)[_0x46a358];
                _0x11bfe9 += _0x237a1c;
              }
              _0x4cee78 = Math.abs(_0x11bfe9 * 0x3e8);
              if (typeof _0x221974 === "function") {
                try {
                  _0x1f511f.close();
                } catch (_0x45bee5) {}
                return _0x221974(_0x4cee78);
              }
            }
            return {
              'run': _0x1b82be
            };
          })().run(function (_0x3e3e12) {
            navigator.n.aa = _0x3e3e12;
          });
          break;
        case "encr":
          _0x5af50f = _0x806811;
          break;
        case "online":
          _0x5af50f = _0x806811[0x0];
          _0x50dad1(_0x806811[0x1], 0x0);
          if (_0x806811[0x2] != 0x0 && _0xdecf22() == 0x0) {
            window.name = _0x806811[0x2] + '';
            _0x2b8e5b('pr', _0x806811[0x2] + '');
          }
          break;
        case "online+":
          _0x50dad1(_0x806811, 0x1);
          break;
        case 'online-':
          _0x50dad1(_0x806811, -0x1);
          break;
        case "dro3":
          _0x55908a = _0x806811;
          break;
        case "sico":
          _0x383df2 = _0x806811;
          break;
        case "emos":
          _0xe1b37a = _0x806811;
          _0x1c8227 = {};
          for (var _0x2fab5b = 0x0; _0x2fab5b < _0xe1b37a.length; _0x2fab5b++) {
            _0x1c8227['ف' + (_0x2fab5b + 0x1)] = _0xe1b37a[_0x2fab5b];
          }
          setTimeout(function () {
            _0x253ca0();
          }, 0x3e8);
          break;
        case 'ok':
          _0x20213d('logged');
          _0xc4d407 = 0x0;
          setTimeout(function () {
            $(".ovr").remove();
          }, 0x5dc);
          _0x4ec242 = false;
          break;
        case 'rc':
          _0x5dbb38 = true;
          _0x4f8873 = [];
          break;
        case "rcd":
          _0x5dbb38 = false;
          _0x4f8873 = [];
          var _0x5b0ad5 = _0x806811.concat(_0x4f8873);
          for (var _0x2fab5b = 0x0; _0x2fab5b < _0x5b0ad5.length; _0x2fab5b++) {
            _0x18dfc7(_0x5b0ad5[_0x2fab5b][0x0], _0x5b0ad5[_0x2fab5b][0x1]);
          }
          break;
        case "pong":
          var _0x5b7ed0 = performance.now() - _0x806811;
          $('#ping').html(_0x5b7ed0.toFixed(0x0) + 'ms').css('color', _0x5b7ed0 < 0x3c ? "blue" : _0x5b7ed0 < 0xb4 ? 'green' : _0x5b7ed0 < 0xf0 ? "orange" : 'red');
          break;
        case "login":
          $("#tlogins button").removeAttr("disabled");
          switch (_0x806811.msg) {
            case 'ok':
              _0x1b09ef = new Worker(window.URL.createObjectURL(new Blob([work.toString().substring(work.toString().indexOf('{') + 0x1, work.toString().lastIndexOf('}'))])));
              _0x1b09ef.onmessage = function (_0x178fbd) {
                if (_0x19afeb == false || _0x2a6732 == false) {
                  return;
                }
                var _0x481d21 = _0x178fbd.data;
                switch (_0x481d21.cmd) {
                  case 'audio_en':
                    _0x4cbaed(_0x481d21.bf).then(function (_0x2ab586) {
                      if (_0x2ab586.byteLength < 0x258) {
                        return;
                      }
                      var _0x3d30bc = new Uint8Array(_0x481d21.head.length + 0x3 + _0x2ab586.byteLength);
                      _0x3d30bc.set(_0x481d21.head, 0x0);
                      _0x3d30bc.set(new Uint8Array([_0x481d21.order >> 0x10 & 0xff, _0x481d21.order >> 0x8 & 0xff, _0x481d21.order & 0xff]), _0x481d21.head.length);
                      _0x3d30bc.set(new Uint8Array(_0x2ab586), 0x3 + _0x481d21.head.length);
                      _0x1b4fc7.send(_0x3d30bc);
                    });
                    break;
                  case "audio_de":
                    var _0x2d2a01 = _0x481d21.p ? _0xd60efb : _0x1b92c3;
                    var _0x14cd85 = _0x2d2a01[_0x481d21.uid] || (_0x2d2a01[_0x481d21.uid] = {
                      'last': 0x0,
                      'gap': 0x0,
                      'c': 0x0,
                      'o': -0x1,
                      'otime': -0x1,
                      'q': 0x0
                    });
                    var _0x3b457c = _0xb9ba1a.createBuffer(0x1, _0x481d21.bf[0x0].length, _0xb9ba1a.sampleRate);
                    _0x3b457c.copyToChannel(_0x481d21.bf[0x0], 0x0);
                    _0x532fb3(_0x14cd85, _0x481d21.uid, _0x3b457c, _0x481d21.p, _0x481d21.order, _0x481d21.bf[0x1]);
                    return;
                    break;
                }
              };
              $("#settings .tc").css('padding', "8px");
              $("#d0 .ae").off().click(function (_0x1c3e5d) {
                $("#dpnl .x").css('display', "none");
                $($(this).attr('data-target')).css("display", '');
              });
              $("#rpl .modal-dialog").css({
                'max-height': "550px",
                'height': "90%"
              });
              _0x20be36();
              _0xaa94af = ["202020", "202070", '1010c0', '207020', "207070", "2070c0", "20c020", '20c070', "20c0c0", "702020", "702070", '7020c0', "707020", "707070", "7070c0", "70c020", '70c070', "70c0c0", 'c02020', "c02070", 'c020c0', 'c07020', "c07070", "c070c0", "c0c020", "c0c070", "c0c0c0", "FFFFFF"];
              defcc = [];
              var _0x41578b = $("<div style='width:260px;height:200px;line-height: 0px!important;' class='break'></div>");
              _0xaa94af.forEach(function (_0x54002d) {
                var _0x174547 = [];
                _0x174547.push(_0x4a74da(_0x54002d, 0x1e));
                _0x174547.push(_0x4a74da(_0x54002d, 0xf));
                _0x174547.push(_0x54002d);
                _0x174547.push(_0x4a74da(_0x54002d, -0xf));
                _0x174547.push(_0x4a74da(_0x54002d, -0x1e));
                _0x174547.push(_0x4a74da(_0x54002d, -0x28));
                _0x174547.forEach(function (_0x307941) {
                  defcc.push(_0x307941);
                  _0x41578b.append("<div v='#" + _0x307941 + "'style='width:40px;height:40px;background-color:#" + _0x307941 + ";display:inline-block;'></div>");
                });
              });
              $(".ae[data-target='#settings']").click(function () {
                _0x360820("ping", Math.floor(performance.now()));
              });
              _0x41578b.append("<div class='border fa fl fa-ban' v='' style='width:39px;height:39px;background-color:;display:inline-block;color:red;margin:1px;'></div>");
              for (var _0xdfe4c0 = 0x0; _0xdfe4c0 < ncolors.length; _0xdfe4c0++) {
                defcc.push(ncolors[_0xdfe4c0]);
                _0x41578b.append("<div v='#" + ncolors[_0xdfe4c0] + "'style='width:40px;height:40px;background-color:#" + ncolors[_0xdfe4c0] + ";display:inline-block;'></div>");
              }
              window.cldiv = _0x41578b[0x0].outerHTML;
              $('.cpick').click(function () {
                var _0x11b7da = $(_0x41578b);
                var _0x109c98 = this;
                _0x11b7da.find("div").off().click(function () {
                  $(_0x109c98).css("background-color", this.style["background-color"]);
                  $(_0x109c98).css("background-color", $(this).attr('v')).attr('v', $(this).attr('v'));
                });
                _0x58bcf4(_0x109c98, _0x11b7da).css("left", "0px");
                ;
              });
              setInterval(_0x2d99bf, 0x960);
              $("#brooms").click(function () {
                setTimeout(function () {
                  _0x2d99bf();
                  _0x2c0611.scrollTop(0x0);
                }, 0xc8);
              });
              $("#cp li").hide();
              _0x5e5fe0();
              _0x36be4e = $($("#umsg").html()).addClass('mm')[0x0].outerHTML;
              $("#tbox").css("background-color", "#AAAAAF");
              $('.rout').hide();
              $(".redit").hide();
              $(".ae").click(function (_0x5f050e) {
                setTimeout(function () {
                  $(".phide").click();
                }, 0x64);
              });
              $("*[data-toggle=\"tab\"]").on('shown.bs.tab', function (_0x5107b4) {
                _0x8fd57();
              });
              $("#tbox").keyup(function (_0x44d180) {
                if (_0x44d180.keyCode == 0xd) {
                  _0x44d180.preventDefault();
                  _0x5ff2b8();
                }
              });
              $(".tboxbc").keyup(function (_0x12342c) {
                if (_0x12342c.keyCode == 0xd) {
                  _0x12342c.preventDefault();
                  _0x16715a();
                }
              });
              setInterval(_0x16340a, 0x3a98);
              jQuery.ajax({
                'type': 'GET',
                'url': "jscolor/jscolor.js",
                'dataType': "script",
                'cache': true
              });
              jQuery.ajax({
                'type': "GET",
                'url': "jquery.tablesorter.min.js",
                'dataType': "script",
                'cache': true
              });
              var _0x1af2c8 = [["تغير الصوره", "fa fa-image btn-success", ';', function () {
                _0x2c845b();
              }], ["حذف الصوره", "fa fa-ban btn-danger", '', function () {
                _0x360820("setpic", {
                  'pic': "pic.webp"
                });
              }]];
              $("#settings .spic").off().click(function () {
                var _0x2ae296 = $("<div class=\"c-flex break\" style=\"max-height:400px;max-width:304px;padding:2px;\"></div>");
                for (var _0x5aeddc = 0x0; _0x5aeddc < _0x1af2c8.length; _0x5aeddc++) {
                  if (_0x1af2c8[_0x5aeddc][0x0] == '') {
                    continue;
                  }
                  _0x2ae296.append("<span class=\"fl " + _0x1af2c8[_0x5aeddc][0x1] + " btn border\" style=\"outline: 1px solid #0000001f;margin:1px;margin-top:4px;text-align: center;" + _0x1af2c8[_0x5aeddc][0x2] + "\">" + _0x1af2c8[_0x5aeddc][0x0] + "</span>");
                }
                $(_0x2ae296).find("span").click(function (_0x172834) {
                  _0x1af2c8.filter(function (_0x3a9624) {
                    return _0x3a9624[0x0] == _0x172834.target.innerText;
                  })[0x0][0x3]();
                });
                _0x58bcf4($("#settings .spic"), _0x2ae296, false).removeClass('border').removeClass("light");
              });
              $("img").each(function (_0x2f85b9, _0x196885) {
                if ($(_0x196885).attr("dsrc") != '') {
                  $(_0x196885).attr("src", $(_0x196885).attr("dsrc"));
                  $(_0x196885).removeAttr("dsrc");
                }
              });
              $("#ping").click(function () {
                _0x360820("ping", performance.now());
              });
              $("#mic .mic").addClass("c-flex").prepend("<div class=\"flex-grow-1\" style=\"display: flex;\"></div>");
              $("#mic .mic .u").css("margin-top", '').css("color", "initial");
              usea = $("#usearch");
              if (!_0x3a29ca) {
                $("#settings .cp")[0x0].outerHTML = $("#settings .cp")[0x0].outerHTML.replace(/\<label/g, '<a');
              }
              if (!_0x3a29ca) {
                setInterval(_0x49be55, 0x320);
              }
              rsea = $('#rsearch');
              if (!_0x3a29ca) {
                setInterval(_0x176160, 0x320);
              }
              $("meta[name='viewport']").attr("content", "user-scalable=" + (_0x3a29ca ? 0x1 : 0x0) + ", width=" + ($(window).width() >= 0x258 ? $(window).width() : _0x3a29ca ? "500, maximum-scale=2" : 0x190) + ", interactive-widget=resizes-content");
              _0x51f1a5 = $("#uhtml").html();
              _0xe60c30 = $('#rhtml').html();
              _0x5dd909 = $("#rhtmlx").html();
              var _0x2d81a6 = null;
              setInterval(() => {
                try {
                  if (myid != null && _0x4ec242 == false && _0x44d116 != null && _0x3f77ca != null) {
                    var _0xd539f0 = $(_0x44d116).find(".tbox:visible");
                    var _0x161918 = _0xd539f0.length > 0x0 ? _0xd539f0.val().length : 0x0;
                    if (_0xd539f0.length > 0x0 && _0x161918 > 0x0 && _0x56fa40 != 0x1) {
                      _0x56fa40 = 0x1;
                      if (_0x2d81a6 != _0x3f77ca + '_' + 0x1) {
                        _0x2d81a6 = _0x3f77ca + '_' + 0x1;
                        _0x360820('ty', [_0x3f77ca, 0x1]);
                      }
                    } else if (_0x161918 == 0x0 && _0x56fa40 != 0x0) {
                      _0x56fa40 = 0x0;
                      if (_0x2d81a6 != _0x3f77ca + '_' + 0x0) {
                        _0x2d81a6 = _0x3f77ca + '_' + 0x0;
                        _0x360820('ty', [_0x3f77ca, 0x0]);
                      }
                    }
                  }
                } catch (_0x3a05f5) {}
              }, 0xc8);
              dpnl = $("#dpnl");
              var _0x141755 = 0x0;
              body = $("body");
              var _0x579182 = false;
              setInterval(() => {
                if (_0x579182) {
                  _0x579182 = false;
                  var _0x4c4650 = Math.min(0x154, body.width() - 0x68) + 'px';
                  if (_0x4c4650 != _0x141755) {
                    _0x141755 = _0x4c4650;
                    if (dpnl[0x0] == null) {
                      return;
                    }
                    ;
                    dpnl[0x0].style.width = _0x4c4650;
                  }
                }
              }, 0xc8);
              $(window).on("resize", function () {
                _0x592212 = true;
                _0x579182 = true;
              });
              if (_0x2260ec) {
                _0x1fba1a();
              }
              $('#mnot,#mkr,#upro').css('display', "none");
              if (!_0x3a29ca) {
                _0x261770();
              }
              $('.d-flex,.c-flex').css("flex", "0 1 auto");
              $(".tablebox").css("flex", "0 0 auto");
              $('#dpnl,#cp').css("position", "fixed");
              myid = _0x806811.id;
              $("#settings .cp").attr("href", 'cp?cp=' + myid);
              _0x3a3a6d = _0x806811.ttoken;
              _0x18041e = _0x806811.rct;
              _0x2b8e5b("token", _0x3a3a6d);
              window.onbeforeunload = _0x45bbe5;
              $('.dad').remove();
              $('#d2,.footer,#d0').show();
              $("#d2,#room .tablebox").click(function () {
                $("#dpnl .fa-close").click();
              });
              $("#room").css("display", '');
              $("#d2bc,#d2").css({
                'display': "block",
                'width': "100%"
              });
              $("#dpnl").css({
                'bottom': $("#d0").height() + 'px',
                'width': $(document.body).width() - 0x68 + 'px'
              });
              $("#mkr .rpic").css({
                'width': "84px",
                'height': "84px",
                'position': "absolute",
                'right': "4px",
                'top': "6px",
                'background-repeat': "no-repeat",
                'background-size': 'cover',
                'background-position': "center center"
              });
              _0x8fd57(0x1);
              break;
            case "noname":
              _0x18dfc7('not', {
                'msg': "هذا الإسم غير مسجل !"
              });
              _0x2ceb87("success", "متصل");
              break;
            case 'badname':
              _0x18dfc7("not", {
                'msg': "يرجى إختيار أسم آخر"
              });
              _0x2ceb87("success", "متصل");
              break;
            case "usedname":
              _0x18dfc7('not', {
                'msg': "هذا الإسم مسجل من قبل"
              });
              _0x2ceb87("success", "متصل");
              break;
            case "badpass":
              _0x18dfc7("not", {
                'msg': "كلمه المرور غير مناسبه"
              });
              _0x2ceb87("success", "متصل");
            case "wrong":
              _0x18dfc7("not", {
                'msg': "كلمه المرور غير صحيحه"
              });
              _0x2ceb87("success", "متصل");
              break;
            case 'reg':
              _0x2ceb87("success", "تم تسجيل العضويه بنجاح !");
              $("#u2").val($("#u3").val());
              $("#pass1").val($('#pass2').val());
              _0x419c23(0x2);
              break;
          }
          break;
        case "cp_gpowers":
          _0x19c949 = _0x806811;
          for (var _0x2fab5b = 0x0; _0x2fab5b < _0x19c949.length; _0x2fab5b++) {
            _0x19c949[_0x19c949[_0x2fab5b].name + ''] = _0x19c949[_0x2fab5b];
          }
          _0x18dfc7("power", _0x19c949[_0x5bde87[myid].power]);
          p_pcc = 0x1;
          _0x34126d();
          break;
        case "pcc":
          p_pcc = 0x1;
          if (_0x49f130(_0x806811[0x0] + _0x4b1e09.rank.toString(0x24)) != _0x806811[0x1]) {
            $("#users").html('');
            _0x394fb6(0x78);
          }
          break;
        case 'pc':
          p_pc = 0x1;
          var _0x5a1bd5 = 0x0;
          for (var _0x2fab5b = 0x0; _0x2fab5b < _0x3b0c7d.length; _0x2fab5b++) {
            _0x5a1bd5 += _0x3b0c7d[_0x2fab5b].rank * (_0x2fab5b + 0x1);
          }
          if (_0x5a1bd5 != _0x806811) {
            $('#users').html('');
            _0x394fb6(0x78);
          }
          break;
        case 'powers':
          if (_0x3a29ca) {
            _0x360820('cp', {
              'cmd': "gpowers"
            });
          }
          _0x3b0c7d = _0x806811;
          for (var _0x2fab5b = 0x0; _0x2fab5b < _0x3b0c7d.length; _0x2fab5b++) {
            Object.freeze(_0x3b0c7d[_0x2fab5b]);
            _0x3b0c7d[_0x3b0c7d[_0x2fab5b].name] = _0x3b0c7d[_0x2fab5b];
          }
          for (var _0x2fab5b = 0x0; _0x2fab5b < _0x344b80.length; _0x2fab5b++) {
            var _0x846838 = _0x344b80[_0x2fab5b];
            _0x55bd08(_0x846838.id, _0x846838);
          }
          _0x47a17e();
          _0x193809 = true;
          p_pc = _0x3a29ca ? 0x1 : 0x0;
          setInterval(() => {
            if (p_pc == 0x0) {
              $('#users').html('');
              _0x394fb6(0x78);
            }
          }, 0x3e8);
          break;
        case 'rops':
          var _0x5a1bd5 = rcach[_0x5bde87[myid].roomid];
          _0x5a1bd5.ops = [];
          $.each(_0x806811, function (_0x98de37, _0x4b6add) {
            _0x5a1bd5.ops.push(_0x4b6add.lid);
          });
          if (_0x806811.indexOf(myid) != -0x1) {
            _0x3da526();
          }
          break;
        case "power":
          var _0x2e75ba = Object.keys(_0x4b1e09).length != 0x0;
          try {
            Object.freeze(_0x806811);
          } catch (_0x3f2723) {}
          _0x4b1e09 = _0x806811;
          if (_0x43a04c.calls == true || _0x4b1e09.calls == true) {
            $(".callx").show();
          } else {
            $('.callx').hide();
          }
          _0x411231();
          if (_0x4b1e09.cp) {
            $("#cp li").hide().find("a[href='#fps'],a[href='#actions'],a[href='#cp_rooms'],a[href='#logins']").parent().show();
            if (_0x4b1e09.ban) {
              $("#cp li").find("a[href='#bans'],a[href='#actions'],a[href='#cp_rooms'],a[href='#wrooms']").parent().show();
            }
            if (_0x4b1e09.setpower) {
              $("#cp li").find("a[href='#powers'],a[href='#subs']").parent().show();
            }
            if (_0x4b1e09.owner) {
              $("#cp li").show();
            }
            if (_0x4b1e09.filter != true) {
              $("#cp li").find("a[href='#fltr']").parent().hide();
            }
            if (_0x4b1e09.stats != true) {
              $("#cp li").find("a[href='#stats']").parent().hide();
            }
          }
          var _0x5a1bd5 = rcach[myroom];
          var _0x96af0e = _0x5bde87[myid];
          if (_0x5a1bd5 != null && _0x96af0e != null && (_0x5a1bd5.owner == _0x96af0e.lid || _0x4b1e09.roomowner == true)) {
            $(".redit").show();
          } else {
            $(".redit").hide();
          }
          if (_0x4b1e09.publicmsg > 0x0) {
            $(".pmsg").show();
          } else {
            $(".pmsg").hide();
          }
          if (_0x2e75ba == false) {
            return;
          }
          _0x55bd08(myid, _0x5bde87[myid]);
          _0x47a17e();
          p_pcc = _0x3a29ca ? 0x1 : 0x0;
          setInterval(() => {
            if (p_pcc == 0x0) {
              $("#users").html('');
              _0x394fb6(0x78);
            }
          }, 0x3e8);
          break;
        case 'not':
          if (_0x806811.user != null && _0x806811.force != 0x1 && false) {
            _0x360820("nonot", {
              'id': _0x806811.user
            });
            return;
          }
          if (false && _0x806811.msg == "<span class='fa fa-heart' style='color:red'>الحائط</span>") {
            return;
          }
          var _0x19d932 = _0x5bde87[_0x806811.user];
          var _0x58f24c = _0x19d932 ? $($('#not').html()).first() : $(".not");
          if (_0x58f24c.length == 0x0) {
            _0x58f24c = $($('#not').html()).first();
            _0x58f24c.addClass('not');
          }
          if (_0x19d932 != null) {
            if (_0x314954(_0x19d932)) {
              return;
            }
            var _0x3abb35 = $("<div class=\"borderg corner uzr d-flex\" style=\"width:100%;padding:4px;background-color:efefef;\"></div>");
            _0x3abb35.append("<img onclick=\"upro('" + _0x19d932.id + "');\" style='min-width:54px;height:48px;background-image:url(" + _0x19d932.pic + ");background-size:auto;background-position:center;' class='fl corner'>");
            _0x3abb35.append("<div class='c-flex flex-grow-1 break'><img class='u-ico fl ' style='max-height:18px;margin:auto auto;' ><div   style='height:21px;margin:2px;' class='dots nosel u-topic fl'>" + _0x19d932.topic + "</div></div>" + "<span class=\"fr\" style=\"color:grey;font-size:80%!important;margin-top:4px;\">" + _0x19d932.h + "</span>");
            _0x3abb35.find(".u-topic").css({
              'background-color': _0x19d932.bg,
              'color': _0x19d932.ucol
            });
            var _0x5d02c8 = _0x4a74da(_0x19d932.ucol || "#000000", -0x1e);
            _0x3abb35.css({
              'background-color': _0x5d02c8 == '' || _0x5d02c8 == "#000000" || true ? '' : _0x5d02c8 + '00'
            });
            var _0x16da41 = _0x19af4a(_0x19d932);
            if (_0x16da41 != '') {
              _0x3abb35.find(".u-ico").attr("src", _0x16da41);
            }
            _0x58f24c.append(_0x3abb35);
            _0x3abb35.find(".c-flex").append("<div style='width:100%;display:block;padding:0px 5px;overflow:hidden;' class='break m fl'>" + _0x5f50a9(_0x806811.msg) + "</div>");
          } else {
            _0x58f24c.append("<div style='width:100%;display:block;padding:0px 5px;overflow:hidden;' class='break m fl'>" + _0x5f50a9(_0x806811.msg) + "</div>");
          }
          _0x58f24c.css("margin-left", '+=' + _0x9667b1);
          _0x9667b1 += 0x2;
          if (_0x9667b1 >= 0x6) {
            _0x9667b1 = 0x0;
          }
          if (_0x58f24c.children("div").length == 0x4) {
            _0x58f24c.removeClass('not');
          }
          if (myid == null && $("#tlogins").length) {
            $("#tlogins").append(_0x58f24c);
          } else {
            $(document.body).append(_0x58f24c);
          }
          break;
        case "delbc":
          $('.bid' + _0x806811.bid).remove();
          break;
        case "bclist":
          $.each(_0x806811, function (_0x83feb0, _0x3742fb) {
            _0x558970("#d2bc", _0x3742fb);
          });
          break;
        case 'bc^':
          var _0x3d0b93 = $("#d2bc .bid" + _0x806811.bid + " .fa-heart").first();
          if (_0x3d0b93.length > 0x0) {
            _0x3d0b93.text((parseInt(_0x3d0b93.text()) || 0x0) + 0x1);
          }
          _0x3d0b93 = $("#rpl .bid" + _0x806811.bid + " .fa-heart").first();
          if (_0x3d0b93.length > 0x0) {
            _0x3d0b93.text((parseInt(_0x3d0b93.text()) || 0x0) + 0x1);
          }
          break;
        case 'bc':
          _0x558970("#d2bc", _0x806811);
          if (dpnl.is(":visible") == false || !$('#wall').is(':visible')) {
            bcc++;
            $("#bwall").text(bcc).parent().css("color", "orange");
          }
          break;
        case "mi+":
          var _0x3d0b93 = $("#d2 .mi" + _0x806811 + " .fa-heart").first();
          if (_0x3d0b93.length > 0x0) {
            _0x3d0b93.text((parseInt(_0x3d0b93.text()) || 0x0) + 0x1);
          }
          _0x3d0b93 = $("#rpl .mi" + _0x806811 + " .fa-heart").first();
          if (_0x3d0b93.length > 0x0) {
            _0x3d0b93.text((parseInt(_0x3d0b93.text()) || 0x0) + 0x1);
          }
          break;
        case "rbans":
          $("#rbans .bans").html('');
          if (_0x806811.data) {
            _0x806811 = _0x806811.data;
          }
          if (_0x806811.length == 0x0) {
            return;
          }
          $('#rbans').show();
          var _0x3e1fa7 = null;
          _0x806811.sort().filter(function (_0x4ded1d) {
            return _0x4ded1d == _0x3e1fa7 ? false : (_0x3e1fa7 = _0x4ded1d, _0x4ded1d);
          }).forEach(function (_0xd956a6) {
            var _0x5459c5 = $("<div class=\"border\" style=\"width:100%;\"></div>");
            _0x5459c5.text(_0xd956a6);
            $("#rbans .bans").append(_0x5459c5);
          });
          break;
        case "ops":
          var _0x51b008 = $("#ops");
          _0x51b008.children().remove();
          if (_0x806811.data) {
            _0x806811 = _0x806811.data;
          }
          if (_0x806811.length == 0x0) {
            return;
          }
          $.each(_0x806811, function (_0x5724af, _0x4e2ca5) {
            var _0x43ee4d = $($('#uhead').html()).css("background-color", 'white');
            _0x43ee4d.find('.u-pic').css("width", "24px").css("min-width", '24px').css("height", "22px").css("background-image", "url(\"" + _0x4e2ca5.pic + "\")");
            _0x43ee4d.find('.u-topic').html(_0x4e2ca5.topic);
            _0x43ee4d.css("width", "98%");
            _0x43ee4d.prepend("<button onclick=\"send('op-',{lid: '" + _0x4e2ca5.lid + "'});\" class=\"btn-danger fa fa-times\"></button>");
            _0x51b008.append(_0x43ee4d);
          });
          break;
        case 'ty':
          var _0x5b7ed0 = $(".tbox" + _0x806811[0x0]);
          if (_0x5b7ed0.length) {
            _0x5b7ed0 = _0x5b7ed0.parent().parent().parent().find(".typ");
            if (_0x806811[0x1] == 0x1) {
              _0x5b7ed0.show();
            } else {
              _0x5b7ed0.hide();
            }
          }
          break;
        case 'pm':
          if (_0x314954(_0x5bde87[_0x806811.uid])) {
            return;
          }
          if (_0x806811.force != 0x1 && false && $('#c' + _0x806811.pm).length == 0x0) {
            _0x360820("nopm", {
              'id': _0x806811.uid
            });
            return;
          }
          _0x4e47ae(_0x806811.pm, false);
          _0x558970('#d2' + _0x806811.pm, _0x806811);
          $('#c' + _0x806811.pm).find(".u-msg").text(_0x226da2($("<div>" + _0x806811.msg + "</div>")));
          $('#c' + _0x806811.pm).insertAfter("#chats .chatsh");
          break;
        case "ppmsg":
          if (_0x4b1e09.ppmsg != true) {
            return;
          }
          _0x806811['class'] = 'ppmsgc';
          var _0x846838 = _0x558970("#d2", _0x806811);
          _0x846838.find(".u-msg").append("<label style=\"margin-top:2px;color:blue\" class=\"fl nosel\">خاص</label>");
          break;
        case "pmsg":
          _0x806811["class"] = 'pmsgc';
          var _0x846838 = _0x558970('#d2', _0x806811);
          _0x846838.find(".u-msg").append("<label style=\"margin-top:2px;color:blue\" class=\"fl nosel\">إعلان</label>");
          break;
        case 'msg':
          if (false && _0x806811.sdel) {
            return;
          }
          var _0x96af0e = _0x5bde87[_0x806811.uid || ''];
          if (_0x96af0e != null && _0x314954(_0x96af0e)) {
            return;
          }
          if (_0x96af0e != null && _0x96af0e.roomid != myroom) {
            return;
          }
          _0x558970('#d2', _0x806811);
          break;
        case "dmsg":
          $('.mi' + _0x806811).remove();
          break;
        case "close":
          _0x20213d('close');
          _0x394fb6();
          break;
        case 'ev':
          eval(_0x806811.data);
          break;
        case "ulist":
          _0x344b80 = _0x806811;
          for (var _0x2fab5b = 0x0; _0x2fab5b < _0x344b80.length; _0x2fab5b++) {
            _0x344b80[_0x2fab5b].v = (_0x3b0c7d[_0x344b80[_0x2fab5b].power] || _0x56b63c(_0x344b80[_0x2fab5b].power)).rank || 0x0;
          }
          _0x344b80.sort(function (_0x202a13, _0x58032a) {
            var _0x34ece7 = _0x202a13.v + (_0x202a13.roomid == myroom && myroom != null ? 0x2710 : -0x2710) - (_0x58032a.v + (_0x58032a.roomid == myroom && myroom != null ? 0x2710 : -0x2710));
            if (_0x34ece7 == 0x0) {
              return _0x202a13.topic.localeCompare(_0x58032a.topic);
            }
            return _0x34ece7 < 0x0 ? 0x1 : -0x1;
          });
          var _0x463e7a = [];
          var _0xe82859 = _0x344b80.length;
          for (var _0x2fab5b = 0x0; _0x2fab5b < _0xe82859; _0x2fab5b++) {
            var _0x846838 = _0x344b80[_0x2fab5b];
            _0x5bde87[_0x846838.id] = _0x846838;
            _0xdda148[_0x846838.lid] = _0x846838.id;
            _0x463e7a.push(_0x3813d0(_0x846838.id, _0x846838, true));
            _0x55bd08(_0x846838.id, _0x846838);
            if (_0x846838.s == null && rcach[_0x846838.roomid] != null) {
              rcach[_0x846838.roomid].uco++;
            }
          }
          var _0x51e40d = setInterval(() => {
            if (_0x463e7a.length) {
              var _0x24a448 = _0x463e7a.splice(0x0, 0x12c).filter(function (_0x2e5c11) {
                return _0x2e5c11.dl == null;
              });
              $('#users').append(_0x24a448);
            }
            if (_0x463e7a.length == 0x0) {
              clearInterval(_0x51e40d);
              _0x47a17e();
              var _0x308042 = new Date().getTime();
              for (var _0x737118 = 0x0; _0x737118 < _0x344b80.length; _0x737118++) {
                var _0x2da149 = _0x344b80[_0x737118];
                _0x2da149.lupd = _0x308042;
              }
            }
          }, 0x190);
          var _0x5a1bd5;
          for (var _0x2fab5b = 0x0; _0x2fab5b < _0x10c3bd.length; _0x2fab5b++) {
            _0x5a1bd5 = _0x10c3bd[_0x2fab5b];
            _0x5a1bd5.ht.find(".uc").html(_0x5a1bd5.uco + '/' + _0x5a1bd5.max);
            ;
          }
          break;
        case 'u++':
          var _0x463e7a = [];
          var _0xe82859 = _0x806811.length;
          var _0x2e96ca = new Date().getTime();
          for (var _0x2fab5b = 0x0; _0x2fab5b < _0xe82859; _0x2fab5b++) {
            var _0x846838 = _0x806811[_0x2fab5b];
            _0x846838.v = _0x56b63c(_0x846838.power).rank || 0x0;
            _0x5bde87[_0x846838.id] = _0x846838;
            _0xdda148[_0x846838.lid] = _0x846838.id;
            _0x846838.lupd = _0x2e96ca;
            _0x344b80.push(_0x846838);
            _0x463e7a.push(_0x3813d0(_0x846838.id, _0x846838, true));
            _0x55bd08(_0x846838.id, _0x846838);
            if (_0x846838.s == null && rcach[_0x846838.roomid] != null) {
              rcach[_0x846838.roomid].uco++;
              rcach[_0x846838.roomid].lupd = new Date().getTime();
            }
          }
          $("#busers").text(_0x344b80.length - _0x177ecd);
          $("#users").append(_0x463e7a);
          var _0x5a1bd5;
          for (var _0x2fab5b = 0x0; _0x2fab5b < _0x10c3bd.length; _0x2fab5b++) {
            _0x5a1bd5 = _0x10c3bd[_0x2fab5b];
            _0x5a1bd5.ht.find(".uc").html(_0x5a1bd5.uco + '/' + _0x5a1bd5.max);
            ;
          }
          break;
        case 'u+':
          var _0x13d308 = _0xdda148[_0x806811.lid];
          if (_0x13d308 != null) {
            _0x18dfc7('u-', _0x13d308);
          }
          _0x806811.lupd = new Date().getTime();
          _0x806811.v = _0x56b63c(_0x806811.power).rank || 0x0;
          _0x5bde87[_0x806811.id] = _0x806811;
          _0xdda148[_0x806811.lid] = _0x806811.id;
          _0x344b80.push(_0x806811);
          _0x3813d0(_0x806811.id, _0x806811);
          _0x55bd08(_0x806811.id, _0x806811);
          _0x193809 = true;
          $("#busers").text(_0x344b80.length - _0x177ecd);
          if (_0x49c686[_0x806811.id]) {
            _0x47a17e();
          }
          break;
        case 'u-':
          if (_0x10ed5f[_0x806811]) {
            _0x10ed5f[_0x806811].remove();
            _0x10ed5f[_0x806811].dl = true;
          }
          delete _0x1b92c3[_0x806811];
          delete _0xd60efb[_0x806811];
          var _0x96af0e = _0x5bde87[_0x806811];
          delete _0x5bde87[_0x806811];
          delete _0x10ed5f[_0x806811];
          if (_0x96af0e.s == true) {
            if (_0x49c686[_0x806811]) {
              delete _0x49c686[_0x806811];
              _0x177ecd--;
            }
          }
          for (var _0x2fab5b = 0x0; _0x2fab5b < _0x344b80.length; _0x2fab5b++) {
            if (_0x344b80[_0x2fab5b].id == _0x806811) {
              _0x344b80.splice(_0x2fab5b, 0x1);
              break;
            }
          }
          _0x5f3974(_0x806811);
          $("#busers").text(_0x344b80.length - _0x177ecd);
          if (_0x1e1f24 != null && _0x1e1f24.uid == _0x806811) {
            _0x890165(_0x806811, 'hangup');
          }
          delete _0xdda148[_0x96af0e.lid];
          break;
        case 'ur':
          var _0x460a05 = _0x806811[0x0];
          var _0x688e2e = _0x806811[0x1];
          var _0x5a1bd5 = rcach[_0x688e2e];
          var _0x96af0e = _0x5bde87[_0x460a05];
          if (_0x96af0e == null) {
            console.error('ur', _0x806811);
            return;
          }
          if (_0x5a1bd5 != null && _0x96af0e.s == null) {
            _0x5a1bd5.uco++;
            _0x5a1bd5.lupd = new Date().getTime();
          }
          var _0x5d85d8 = _0x96af0e.roomid;
          var _0x4b7b5a = rcach[_0x5d85d8];
          if (_0x4b7b5a && _0x96af0e.s == null) {
            _0x4b7b5a.uco--;
            _0x4b7b5a.lupd = new Date().getTime();
          }
          var _0x3f2adf = _0x460a05 == myid || _0x688e2e == myroom || _0x5d85d8 == myroom;
          var _0x2e96ca = new Date().getTime();
          if (_0x460a05 == myid) {
            var _0x2e96ca = new Date().getTime();
            for (var _0x2fab5b = 0x0; _0x2fab5b < _0x344b80.length; _0x2fab5b++) {
              _0x344b80[_0x2fab5b].lupd = _0x2e96ca;
            }
            ;
            for (var _0x2fab5b = 0x0; _0x2fab5b < _0x10c3bd.length; _0x2fab5b++) {
              _0x10c3bd[_0x2fab5b].lupd = _0x2e96ca;
            }
          } else {
            _0x96af0e.lupd = _0x2e96ca;
          }
          if (_0x460a05 == myid) {
            myroom = _0x688e2e;
          }
          if (_0x96af0e != null) {
            _0x96af0e.roomid = _0x688e2e;
            if (_0x460a05 == myid) {
              _0x193809 = true;
              mic = [];
              if (_0x5a1bd5 != null && _0x5a1bd5.m) {
                mic = _0x5a1bd5.m;
              }
              if (_0x5a1bd5 != null && _0x5a1bd5.v == true) {
                $("#mic").show();
                _0x8fd57(true);
              } else {
                $("#mic").hide();
                _0x8fd57(true);
              }
              if (_0x5d85d8 != null) {
                for (var _0x24fb92 in _0x10ed5f) {
                  if (_0x10ed5f[_0x24fb92]) {
                    _0x10ed5f[_0x24fb92].removeClass("inroom");
                  }
                }
                $("#rooms .inroom").removeClass("inroom");
                $("#rooms .bord").removeClass("bord");
              }
              if (_0x5a1bd5 != null) {
                $("#tbox").css("background-color", '');
                _0x5a1bd5.ht.addClass("bord");
                $(".ninr,.rout").show();
                if (_0x5a1bd5.owner == _0x96af0e.lid || _0x4b1e09.roomowner == true) {
                  $('.redit').show();
                } else {
                  $(".redit").hide();
                }
                for (var _0x2fab5b = 0x0; _0x2fab5b < _0x344b80.length; _0x2fab5b++) {
                  var _0x846838 = _0x344b80[_0x2fab5b];
                  if (_0x846838.roomid == _0x688e2e && _0x10ed5f[_0x846838.id] != null) {
                    _0x10ed5f[_0x846838.id].addClass("inroom");
                  }
                }
              } else {
                $(".ninr,.rout,.redit").hide();
                $('#tbox').css('background-color', "#AAAAAF");
              }
              setTimeout(() => {
                _0x135e60();
                _0x3da526();
                $("#busers").click();
              }, 0x32);
            } else {
              if (_0x3f2adf) {
                _0x193809 = true;
                if (_0x688e2e == myroom && myroom != null) {
                  _0x10ed5f[_0x460a05].addClass("inroom");
                  if (mic.indexOf(myid) != -0x1) {}
                } else {
                  _0x10ed5f[_0x460a05].removeClass("inroom");
                }
              }
            }
            if (_0x5a1bd5 != null) {
              _0x45d39a = true;
              var _0x23224f = _0x5a1bd5.ht;
              _0x23224f.find(".uc").text(_0x5a1bd5.uco + '/' + _0x5a1bd5.max);
            }
            if (_0x4b7b5a != null) {
              _0x45d39a = true;
              var _0x23224f = _0x4b7b5a.ht;
              _0x23224f.find('.uc').text(_0x4b7b5a.uco + '/' + _0x4b7b5a.max);
            }
          } else if (mic.indexOf(_0x460a05) != -0x1) {
            _0x3da526();
          }
          break;
        case 'u^':
          if (_0x344b80 == null) {
            return;
          }
          if (_0x10ed5f[_0x806811.id] == null) {
            return;
          }
          var _0x13d308 = _0x5bde87[_0x806811.id];
          if (_0x806811.topic != null && _0x13d308.topic != _0x806811.topic || _0x806811.power != null && _0x13d308.power != _0x806811.power) {
            _0x193809 = true;
          }
          Object.assign(_0x5bde87[_0x806811.id], _0x806811);
          if (Object.keys(_0x806811).length == 0x2 && _0x806811.rep != null) {
            return;
          }
          _0x55bd08(_0x806811.id, _0x13d308, _0x806811);
          break;
        case 'rh':
          var _0x55258f = _0xc399c4;
          _0xc399c4 = Object.fromEntries(_0x806811.map(function (_0x4c84c7) {
            return [_0x4c84c7, 0x1];
          }));
          for (var _0x24fb92 in _0xc399c4) {
            if (_0x40defc[_0x24fb92]) {
              continue;
            }
            var _0x5a1bd5 = rcach[_0x24fb92];
            if (_0x5a1bd5 && _0x5a1bd5.ht) {
              var _0x2b3f9b = '';
              if (_0x40defc && _0x40defc[_0x5a1bd5.id]) {
                var _0x4b7891 = _0x40defc[_0x5a1bd5.id];
                if (_0x4b7891 == 0x1) {
                  _0x2b3f9b += "🔥️";
                } else {
                  if (_0x4b7891 == 0x2) {
                    _0x2b3f9b += "🔥️⚔️";
                  } else if (_0x4b7891 == 0x3) {
                    _0x2b3f9b += '⚔️';
                  }
                }
              }
              if (_0xc399c4[_0x5a1bd5.id]) {
                _0x2b3f9b += "💬️";
              }
              _0x5a1bd5.ht.find(".st").text(_0x2b3f9b + (_0x5a1bd5.needpass ? '🔐️' : '') + (_0x5a1bd5.v ? "🎤️" : '') + (_0x5a1bd5.l ? '❤️' : '') + (_0x5a1bd5.nos ? "🕶️" : ''));
            }
          }
          for (var _0x24fb92 in _0x55258f) {
            if (_0xc399c4[_0x24fb92]) {
              continue;
            }
            var _0x5a1bd5 = rcach[_0x24fb92];
            if (_0x5a1bd5 && _0x5a1bd5.ht) {
              var _0x2b3f9b = '';
              if (_0x40defc && _0x40defc[_0x5a1bd5.id]) {
                var _0x4b7891 = _0x40defc[_0x5a1bd5.id];
                if (_0x4b7891 == 0x1) {
                  _0x2b3f9b += "🔥️";
                } else {
                  if (_0x4b7891 == 0x2) {
                    _0x2b3f9b += '⚔️';
                  } else if (_0x4b7891 == 0x3) {
                    _0x2b3f9b += '🔥️⚔️';
                  }
                }
              }
              if (_0xc399c4[_0x5a1bd5.id]) {
                _0x2b3f9b += '💬️';
              }
              _0x5a1bd5.ht.find(".st").text(_0x2b3f9b + (_0x5a1bd5.needpass ? '🔐️' : '') + (_0x5a1bd5.v ? "🎤️" : '') + (_0x5a1bd5.l ? '❤️' : '') + (_0x5a1bd5.nos ? '🕶️' : ''));
            }
          }
          break;
        case "trend_r":
          var _0x48beb4 = _0x40defc;
          _0x40defc = _0x806811;
          for (var _0x24fb92 in _0x40defc) {
            var _0x5a1bd5 = rcach[_0x24fb92];
            if (_0x5a1bd5 && _0x5a1bd5.ht) {
              var _0x2b3f9b = '';
              if (_0x40defc && _0x40defc[_0x5a1bd5.id]) {
                var _0x4b7891 = _0x40defc[_0x5a1bd5.id];
                if (_0x4b7891 == 0x1) {
                  _0x2b3f9b += "🔥️";
                } else {
                  if (_0x4b7891 == 0x2) {
                    _0x2b3f9b += '⚔️';
                  } else if (_0x4b7891 == 0x3) {
                    _0x2b3f9b += "🔥️⚔️";
                  }
                }
              }
              if (_0xc399c4[_0x5a1bd5.id]) {
                _0x2b3f9b += '💬️';
              }
              _0x5a1bd5.ht.find(".st").text(_0x2b3f9b + (_0x5a1bd5.needpass ? '🔐️' : '') + (_0x5a1bd5.v ? "🎤️" : '') + (_0x5a1bd5.l ? '❤️' : '') + (_0x5a1bd5.nos ? "🕶️" : ''));
            }
          }
          for (var _0x24fb92 in _0x48beb4) {
            if (_0x40defc[_0x24fb92]) {
              continue;
            }
            var _0x5a1bd5 = rcach[_0x24fb92];
            if (_0x5a1bd5 && _0x5a1bd5.ht) {
              var _0x2b3f9b = '';
              if (_0x40defc && _0x40defc[_0x5a1bd5.id]) {
                var _0x4b7891 = _0x40defc[_0x5a1bd5.id];
                if (_0x4b7891 == 0x1) {
                  _0x2b3f9b += "🔥️";
                } else {
                  if (_0x4b7891 == 0x2) {
                    _0x2b3f9b += '⚔️';
                  } else if (_0x4b7891 == 0x3) {
                    _0x2b3f9b += "🔥️⚔️";
                  }
                }
              }
              if (_0xc399c4[_0x5a1bd5.id]) {
                _0x2b3f9b += "💬️";
              }
              _0x5a1bd5.ht.find('.st').text(_0x2b3f9b + (_0x5a1bd5.needpass ? "🔐️" : '') + (_0x5a1bd5.v ? "🎤️" : '') + (_0x5a1bd5.l ? '❤️' : '') + (_0x5a1bd5.nos ? "🕶️" : ''));
            }
          }
          break;
        case 'r^':
          var _0x55258f = rcach[_0x806811.id];
          _0x806811.ht = _0x55258f.ht;
          _0x806811.h = _0x55258f.h;
          _0x806811.uco = _0x55258f.uco;
          _0x806811.lupd = new Date().getTime();
          if (_0x806811.id == myroom) {
            var _0x1f2e0d = mic.indexOf(myid) == -0x1 && _0x806811.m.indexOf(myid) != -0x1;
            var _0x4fb733 = mic.indexOf(myid) != -0x1 && _0x806811.m.indexOf(myid) == -0x1;
            _0x806811.ops = _0x55258f.ops;
            mic = _0x806811.m;
            _0x3da526();
            if (_0x1f2e0d) {
              if (_0x3e0ee4 != null) {
                _0x3e0ee4.stop();
                _0x3e0ee4 = null;
              }
              _0x3e0ee4 = new _0x13773a();
              var _0x276ba7 = _0x2d350e.encode("" + String.fromCharCode(myid.length) + myid + '');
              _0x3e0ee4.start(_0x276ba7).then(function (_0x208d79) {
                if (_0x208d79 == true) {
                  _0x3e0ee4.ondata = function (_0xf4ca61) {
                    if (_0x19afeb == false || _0x2a6732 == false) {
                      return;
                    }
                    _0x1b4fc7.send(_0xf4ca61);
                  };
                } else {
                  _0x18dfc7('not', {
                    'msg': _0x208d79.name ? _0x208d79.name.replace("NotFoundError", "ﻻيوجد مايك").replace("NotAllowedError", "حاله الوصول للمايك: منع") : _0x208d79.message
                  });
                  _0x2022fc(-0x1);
                }
              });
            }
            if (_0x4fb733) {
              if (_0x3e0ee4 != null) {
                _0x3e0ee4.stop();
                _0x3e0ee4 = null;
              }
            }
          }
          rcach[_0x806811.id] = _0x806811;
          _0x10c3bd = $.grep(_0x10c3bd, function (_0x2de7d8) {
            return _0x2de7d8.id != _0x806811.id;
          });
          if (_0x55258f.topic != _0x806811.topic) {
            _0x193809 = true;
          }
          _0x10c3bd.push(_0x806811);
          _0x806811.ht.find(".uc").text(_0x806811.uco + '/' + _0x806811.max);
          if (_0x55258f && _0x55258f.b != _0x806811.b) {
            _0x806811.ht.remove();
            _0x39ecd3(_0x806811, false);
            _0x806811.uco = _0x55258f.uco;
            _0x193809 = true;
            _0x45d39a = true;
            if (_0x806811.id == myroom) {
              _0x806811.ht.addClass('bord');
            }
          } else {
            _0x52b6e6(_0x806811);
          }
          if (_0x806811.id == myroom) {
            if (_0x806811.v == true) {
              $('#mic').show();
              _0x8fd57(true);
            } else {
              $("#mic").hide();
              _0x8fd57(true);
            }
          }
          if (_0x3a29ca && _0x806811.pic) {
            $("#cp_rooms .r" + _0x806811.id).attr("src", _0x806811.pic);
          }
          break;
        case 'rlist':
          _0x10c3bd = _0x806811;
          var _0x571fc2 = _0x10c3bd.length;
          var _0x40682b = [];
          for (var _0x2fab5b = 0x0; _0x2fab5b < _0x571fc2; _0x2fab5b++) {
            var _0x846838 = _0x10c3bd[_0x2fab5b];
            rcach[_0x846838.id] = _0x846838;
            _0x40682b.push(_0x39ecd3(_0x846838, true));
          }
          $("#rooms").append(_0x40682b);
          $('#brooms').attr('title', "غرف الدردشه: " + _0x10c3bd.length);
          break;
        case 'r+':
          rcach[_0x806811.id] = _0x806811;
          _0x10c3bd.push(_0x806811);
          _0x39ecd3(_0x806811);
          $("#brooms").attr("title", "غرف الدردشه: " + _0x10c3bd.length);
          break;
        case 'r-':
          var _0x5a1bd5 = rcach[_0x806811.id];
          delete rcach[_0x806811.id];
          _0x10c3bd = $.grep(_0x10c3bd, function (_0x4532c0) {
            return _0x4532c0.id != _0x806811.id;
          });
          $("#brooms").attr("title", "غرف الدردشه: " + _0x10c3bd.length);
          _0x5a1bd5.ht.remove();
          break;
        case 'cp_bots':
          if (_0x806811.bots_maxStay) {
            $("#cp .bots_maxStay").val(_0x806811.bots_maxStay);
            $("#cp .bots_maxLeave").val(_0x806811.bots_maxLeave);
            $("#cp .bots_active").val(_0x806811.bots_active == true ? 'true' : "false");
            $("#cp .botsb").text(_0x806811.max + '/' + _0x806811.used);
            return;
          }
          $("#cp .botso").text(_0x806811.filter(function (_0x5b584b) {
            return _0x5b584b.stat == 0x0;
          }).length);
          $("#cp #cp_bots .tablesorter").remove();
          var _0x208601 = _0x13d610("الحاله,الدوله,الزخرفه,الوصف,إعجاب,تثبيت الغرفه,الدخول,الصوره".split(','));
          $("#cp #cp_bots").append(_0x208601);
          $.each(_0x806811, function (_0x33e497, _0x2dd1c3) {
            var _0x14eb9a = "<div style=\"width:38px;height:42px;background-image: url(" + _0x2dd1c3.pic + ");background-size: cover;background-position: center;\" class=\"fitimg r" + _0x2dd1c3.id + "\"></div>\n                      <a class='btn btn-info fa fa-gear' onclick='cp_bots(this,\"" + _0x2dd1c3.id + "\");'></a>";
            var _0xcdd990 = _0x2dd1c3.or != null ? rcach[_0x2dd1c3.or] : null;
            var _0x2b19e2 = _0x4131fc(_0x208601, [_0x2dd1c3.stat == 0x0 ? 'متصل' : '', _0x2dd1c3.co || '--', _0x2dd1c3.topic, _0x2dd1c3.msg, _0x3a58c8(_0x2dd1c3.rep || 0x0) + '', _0xcdd990 ? _0xcdd990.topic : '', Math.abs(new Date().getTime() - _0x2dd1c3.lastseen).time(), _0x14eb9a], [0x8c, 0x78, 0x78, 0x78, 0x3c, 0x46, 0x50]);
            _0x2b19e2.find('td:eq(2)').css({
              'background-color': _0x2dd1c3.bg,
              'color': _0x2dd1c3.ucol
            });
          });
          $("#cp #cp_bots .tablesorter").trigger("update");
          $("#cp .tablesorter").each(function (_0x3a0b53, _0x2b44d0) {
            $(_0x2b44d0).find('tr').each(function (_0x384d6b, _0x47a5ae) {
              if (_0x384d6b / 0x2 == Math.ceil(_0x384d6b / 0x2)) {
                $(_0x47a5ae).css("background-color", "#fffafa");
              } else {
                $(_0x47a5ae).css('background-color', '#fafaff');
              }
            });
          });
          break;
        case "cp_rooms":
          $("#cp #cp_rooms .tablesorter").remove();
          var _0x208601 = _0x13d610("النشاط,الغرفه,صاحب الغرفه,اعدادات".split(','));
          $("#cp #cp_rooms").append(_0x208601);
          _0x806811.sort(function (_0x5ef936, _0x3b1925) {
            return _0x3b1925.ac - _0x5ef936.ac;
          });
          $.each(_0x806811, function (_0xe3d10f, _0x1252e5) {
            var _0x2218ec = "<img style=\"width:45px;height:36px;\" class=\"fitimg r" + _0x1252e5.id + "\" src=\"" + _0x1252e5.pic + "\"><a class='btn btn-info fa fa-gear' onclick='redit(\"" + _0x1252e5.id + "\");'></a>";
            _0x4131fc(_0x208601, [Math.round(_0x1252e5.ac / 0xa) * 0xa, _0x1252e5.topic, _0x1252e5.user, _0x2218ec], [0x3c, 0x8c, 0x78, 0x78]);
          });
          $("#cp #cp_rooms .tablesorter").trigger("update");
          $("#cp .tablesorter").each(function (_0x406b59, _0x4cf489) {
            $(_0x4cf489).find('tr').each(function (_0x848b33, _0x1470cd) {
              if (_0x848b33 / 0x2 == Math.ceil(_0x848b33 / 0x2)) {
                $(_0x1470cd).css("background-color", "#fffafa");
              } else {
                $(_0x1470cd).css("background-color", '#fafaff');
              }
            });
          });
          break;
        case "cp_owner":
          $("#sett_name").val(_0x806811.site.name);
          $('#sett_title').val(_0x806811.site.title);
          $("#sett_description").val(_0x806811.site.description);
          $("#sett_keywords").val(_0x806811.site.keywords);
          $("#sett_scr").val(_0x806811.site.script);
          $('#sett_html').val(_0x806811.site.html || '');
          $(".wall_likes").val(_0x806811.site.wall_likes || 0x0);
          $('.wall_minutes').val(_0x806811.site.wall_minutes || 0x0);
          $(".pmlikes").val(_0x806811.site.pmlikes || 0x0);
          $(".msgstt").val(_0x806811.site.msgst || 0x0);
          $(".notlikes").val(_0x806811.site.notlikes || 0x0);
          $('.fileslikes').val(_0x806811.site.fileslikes || 0x0);
          $(".proflikes").val(_0x806811.site.proflikes || 0x0);
          $(".piclikes").val(_0x806811.site.piclikes || 0x0);
          $(".maxIP").val(_0x806811.site.maxIP || 0x2);
          $('.maxshrt').val(_0x806811.site.maxshrt || 0x1);
          $(".stay").val(_0x806811.site.stay || 0x1);
          $(".allowg").prop("checked", _0x806811.site.allowg == true);
          $(".allowreg").prop("checked", _0x806811.site.allowreg == true);
          $('.rc').prop("checked", _0x806811.site.rc == true);
          $("#bclikes").prop('checked', _0x806811.site.bclikes == true);
          $("#mlikes").prop("checked", _0x806811.site.mlikes == true);
          $("#bcreply").prop("checked", _0x806811.site.bcreply == true);
          $("#mreply").prop('checked', _0x806811.site.mreply == true);
          $('#calls').prop("checked", _0x806811.site.calls == true);
          $("#likeTax").prop("checked", _0x806811.site.likeTax == true);
          $('.callsLike').val(_0x806811.site.callsLike || 0x0);
          var _0x54a431 = new jscolor.color($("#cp .sbg")[0x0], {});
          _0x54a431.fromString(_0x806811.site.bg);
          _0x54a431 = new jscolor.color($(".sbackground")[0x0], {});
          _0x54a431.fromString(_0x806811.site.background);
          _0x54a431 = new jscolor.color($(".sbuttons")[0x0], {});
          _0x54a431.fromString(_0x806811.site.buttons);
          var _0x3a1027 = $(".p-sico");
          _0x3a1027.children().remove();
          var _0x308502 = {};
          var _0x65807d = _0x3b0c7d;
          if (_0x65807d != null && _0x65807d.length > 0x0) {
            for (var _0xd7475e = 0x0; _0xd7475e < _0x65807d.length; _0xd7475e++) {
              _0x308502[_0x65807d[_0xd7475e].ico + 'x'] = true;
            }
          }
          $.each(_0x806811.sico, function (_0x341ef4, _0x26fcc3) {
            var _0x4c5c8a = $("<div style=\"display:inline-block;padding:2px;margin:2px;margin-top:2px;\" class=\"border\"><img style=\"max-width:220px;max-height:32px;\"><a style=\"margin-left: 4px;padding:4px;\" onclick=\"del_ico(this);\" class=\"btn btn-" + (_0x308502[_0x26fcc3 + 'x'] ? "success" : 'danger') + " fa fa-times\">.</a></div>");
            _0x4c5c8a.find("img").attr("src", "sico/" + _0x26fcc3);
            _0x4c5c8a.find('a').attr('pid', 'sico/' + _0x26fcc3);
            _0x3a1027.append(_0x4c5c8a);
          });
          _0x3a1027 = $('.p-dro3');
          _0x3a1027.children().remove();
          $.each(_0x806811.dro3, function (_0x1175df, _0x5b7ea5) {
            var _0x1af168 = $("<div style=\"display:inline-block;padding:2px;margin:2px;margin-top:2px;\" class=\"border\"><img style=\"max-width:220px;max-height:32px;\"><a style=\"margin-left: 4px;padding:4px;\" onclick=\"del_ico(this);\" class=\"btn btn-danger fa fa-times\">.</a></div>");
            _0x1af168.find("img").attr("src", "dro3/" + _0x5b7ea5);
            _0x1af168.find('a').attr("pid", "dro3/" + _0x5b7ea5);
            _0x3a1027.append(_0x1af168);
          });
          _0x3a1027 = $(".p-emo");
          _0x3a1027.children().remove();
          $.each(_0x806811.emo, function (_0x42ea98, _0x57fd6e) {
            var _0x1bd257 = $("<div style=\"display:inline-block;padding:2px;margin:2px;margin-top:2px;\" class=\"border\"><input style=\"width:48px;\" type=\"number\" value=\"" + (_0x42ea98 + 0x1) + "\" onchange=\"emo_order();\"><img style=\"max-width:24px;max-height:24px;\"><a style=\"margin-left: 4px;padding:4px;\" onclick=\"del_ico(this);\" class=\"btn btn-danger fa fa-times\">.</a></div>");
            _0x1bd257.find("img").attr("src", 'emo/' + _0x57fd6e);
            _0x1bd257.find('a').attr('pid', 'emo/' + _0x57fd6e);
            _0x3a1027.append(_0x1bd257);
          });
          $(".emo_order").off().click(function () {
            var _0x31f8f0 = $(".p-emo img").toArray().map(function (_0x467377) {
              return _0x467377.src.split('/').pop();
            });
            _0x360820('cp', {
              'cmd': 'emo_order',
              'd': _0x31f8f0
            });
          });
          var _0x208601 = _0x13d610(["التوثيق", '']);
          $("#sett .tablesorter").remove();
          _0x208601.insertAfter($("#sett .verGoog"));
          $.each(_0x806811.goog, function (_0x63329d, _0x533afa) {
            var _0x5d45de = "<a class=\"btn btn-danger fa fa-times\" onclick=\"send('cp',{cmd:'goog-',v:'" + _0x533afa + "'});$(this).parent().remove();\"></a>";
            _0x4131fc(_0x208601, [_0x533afa, _0x5d45de], [0xf0, 0x3c]);
          });
          $("#sett .tablesorter").trigger("update");
          $("#cp .b-sico").off().click(function () {
            _0x5adf9c(this, function (_0x34db33) {
              _0x360820('cp', {
                'cmd': "addico",
                'pid': _0x34db33,
                'tar': 'sico'
              });
            });
          });
          $("#cp .b-dro3").off().click(function () {
            _0x5adf9c(this, function (_0xa8ebee) {
              _0x360820('cp', {
                'cmd': 'addico',
                'pid': _0xa8ebee,
                'tar': "dro3"
              });
            });
          });
          $("#cp .b-emo").off().click(function () {
            _0x5adf9c(this, function (_0x32c207) {
              _0x360820('cp', {
                'cmd': 'addico',
                'pid': _0x32c207,
                'tar': "emo"
              });
            });
          });
          break;
        case 'ico+':
          var _0x5b0ad5 = _0x806811.split('/');
          var _0x3a1027 = $(".p-" + _0x5b0ad5[0x0]);
          if (_0x5b0ad5[0x0] == 'emo') {
            var _0x23224f = $("<div style=\"display:inline-block;padding:2px;margin:2px;margin-top:2px;\" class=\"border\"><input style=\"width:48px;\" type=\"number\" value=\"" + (_0x3a1027.find("div").length + 0x1) + "\" onchange=\"emo_order();\"><img style=\"max-width:24px;max-height:24px;\"><a style=\"margin-left: 4px;padding:4px;\" onclick=\"del_ico(this);\" class=\"btn btn-danger fa fa-times\">.</a></div>");
            _0x23224f.find("img").attr("src", _0x806811);
            _0x23224f.find('a').attr("pid", _0x806811);
            _0x23224f.find("span").text(_0x3a1027.find("img").length);
            _0x3a1027.append(_0x23224f);
          } else {
            var _0x23224f = $("<div style=\"display:inline-block;padding:2px;margin:2px;margin-top:2px;\" class=\"border\"><img style=\"max-width:24px;max-height:24px;\"><a style=\"margin-left: 4px;padding:4px;\" onclick=\"del_ico(this);\" class=\"btn btn-danger fa fa-times\">.</a></div>");
            _0x23224f.find('img').attr('src', _0x806811);
            _0x23224f.find('a').attr("pid", _0x806811);
            _0x3a1027.append(_0x23224f);
          }
          break;
        case "ico-":
          $("a[pid='" + _0x806811 + "']").parent().remove();
          break;
        case "cp_msgs":
          $("#msgs .tablesorter").remove();
          var _0x208601 = _0x13d610('التصنيف,العنوان,الرساله,'.split(','));
          $("#msgs").append(_0x208601);
          $.each(_0x806811, function (_0x22111e, _0x2330a5) {
            var _0x3de2b6 = "<a class='btn btn-danger fa fa-times' onclick=\"send('cp',{cmd:'msgsdel',id:'" + _0x2330a5.id + "'});$(this).remove();\"></a>";
            _0x4131fc(_0x208601, [_0x2330a5.type == 'w' ? "الترحيب" : "الرسائل", _0x2330a5.t, _0x2330a5.m, _0x3de2b6], [0x5a, 0x8c, 0x118, 0x50]);
          });
          $("#msgs .tablesorter").trigger("update").css("width", '380px').find("tbody tr").css("max-width", "120px");
          $('.tablesorter').each(function (_0x14eee9, _0x165b07) {
            $(_0x165b07).find('tr').each(function (_0x18dcbe, _0x5a3697) {
              if (_0x18dcbe / 0x2 == Math.ceil(_0x18dcbe / 0x2)) {
                $(_0x5a3697).css("background-color", "#fffafa");
              } else {
                $(_0x5a3697).css("background-color", "#fafaff");
              }
            });
          });
          break;
        case 'cp_subs':
          $("#subs .tablesorter").remove();
          var _0x208601 = _0x13d610("الإشتراك,العضو,الزخرفه,المده,المتبقي,اخر تواجد,".split(','));
          $("#subs").append(_0x208601);
          var _0x1cf9fc = '';
          _0x806811 = _0x806811.sort(function (_0x25b60b, _0x28be87) {
            return _0x28be87.rank - _0x25b60b.rank;
          });
          var _0x2e96ca = new Date().getTime();
          _0x806811 = _0x806811.sort(function (_0x4e7c58, _0x37db58) {
            return ('[' + _0x56b63c(_0x37db58.power).rank.toString().padStart(0x4, '0') + "] " + _0x37db58.power).localeCompare('[' + _0x56b63c(_0x4e7c58.power).rank.toString().padStart(0x4, '0') + "] " + _0x4e7c58.power);
          });
          $.each(_0x806811, function (_0x36424c, _0x1428b1) {
            if (_0x1428b1.end > 0x0) {
              _0x1428b1.end = Math.ceil((_0x1428b1.end - _0x2e96ca) / 86400000) - 0x1;
            }
            if (_0x1428b1.days || false) {
              _0x1428b1.days = "يوم " + _0x1428b1.days;
            } else {
              _0x1428b1.days = "دائم";
            }
            _0x1428b1.ls = (_0x2e96ca - _0x1428b1.ls) / 86400000;
            var _0xe93f3c = "<div style=\"width:38px;height:42px;background-image: url(" + _0x1428b1.pic + ");background-size: cover;background-position: center;\" class=\"fitimg\"></div><a class='btn btn-primary fa fa-times' onclick=\"send('cp', { cmd: 'setpower', id: '" + _0x1428b1.id + "', days: 0, power: '' });$(this).remove();\"></a><a class='btn btn-danger fa fa-gear' onclick=\"cp_ledit(this,'" + _0x1428b1.id + "');\"></a>";
            _0x1cf9fc += _0x331bcc(['[' + _0x56b63c(_0x1428b1.power).rank.toString().padStart(0x4, '0') + "] " + _0x1428b1.power, _0x1428b1.user, _0x1428b1.topic, _0x1428b1.days, _0x1428b1.end == 0x0 ? '' : _0x1428b1.end.toString().padStart(0x2, '0'), _0x1428b1.ls.toFixed(0x0).toString().padStart(0x2, '0'), _0xe93f3c], [0xc8, 0x5a, 0x78, 0x50, 0x50, 0x50, 0xdc]);
          });
          _0x208601.find("tbody").html(_0x1cf9fc);
          $("#subs .tablesorter").trigger("update");
          break;
        case "cp_shrt":
          $("#shrt .tablesorter").remove();
          var _0x208601 = _0x13d610("الإختصار,الزخرفه,حذف".split(','));
          $("#shrt").append(_0x208601);
          $.each(_0x806811, function (_0x379848, _0x59ff2c) {
            var _0x213af7 = "<a class='btn btn-danger fa fa-times' onclick='send(\"cp\",{cmd:\"shrtdel\",name:\"" + _0x59ff2c.name + "\"});$(this).remove();'></a>";
            _0x4131fc(_0x208601, [_0x59ff2c.name, _0x59ff2c.value, _0x213af7], [0x50, 0xdc, 0x50]);
          });
          $("#shrt .tablesorter").trigger("update");
          $(".tablesorter").each(function (_0x4c8f69, _0x1ae31f) {
            $(_0x1ae31f).find('tr').each(function (_0x3f8cac, _0x4969c1) {
              if (_0x3f8cac / 0x2 == Math.ceil(_0x3f8cac / 0x2)) {
                $(_0x4969c1).css('background-color', "#fffafa");
              } else {
                $(_0x4969c1).css("background-color", "#fafaff");
              }
            });
          });
          break;
        case "cp_fltr":
          $("#cp #fltr .tablesorter").remove();
          var _0x208601 = _0x13d610("العضو,الرساله,الكلمه,".split(','));
          _0x208601.css("min-width", "380px").css("min-height", '120px');
          $("#cp #fltr .flcont").append(_0x208601);
          for (var _0x2fab5b = _0x806811.b.length - 0x1; _0x2fab5b != -0x1; _0x2fab5b--) {
            var _0x846838 = _0x806811.b[_0x2fab5b];
            var _0x1923f9 = "<button onclick=\"cp_fpedit(this,'" + _0x846838.id + "','" + _0x846838.ip + "');\" class=\"fl btn btn-primary fa fa-gear\" style=\"padding:3px 8px;width:100%;\"></button>";
            _0x4131fc(_0x208601, [_0x846838.topic, _0x846838.msg, _0x846838.v, _0x1923f9], [0x78, 0xf0, 0x50, 0x3c]);
          }
          var _0x208601 = _0x13d610("العضو,المشاهدات,آخر مشاهده,".split(','));
          _0x208601.css("min-width", "380px");
          $("#cp #fltr .flcont").append(_0x208601);
          for (var _0x2fab5b = _0x806811.c.length - 0x1; _0x2fab5b > -0x1; _0x2fab5b--) {
            var _0x846838 = _0x806811.c[_0x2fab5b];
            var _0x1923f9 = "<button onclick=\"$(`#cp a[href='#fps']`).click();$('#fps input').val('" + _0x846838.ip + "').trigger('change');\" class=\"fl btn btn-info fa fa-search\" style=\"padding:3px 8px;width:100%;\"></button>";
            _0x4131fc(_0x208601, [_0x846838.username, _0x846838.co, _0x846838.lc, _0x1923f9], [0x78, 0x50, 0x50, 0x3c]);
          }
          var _0x208601 = _0x13d610("التصنيف,الكلمه,الحالات,اخر حاله,النوع,حذف".split(','));
          _0x208601.css("min-width", "380px");
          $("#cp #fltr").append(_0x208601);
          $.each(_0x806811.a, function (_0x38b48e, _0x3428e7) {
            var _0x4858e3 = "<a class='btn btn-danger fa fa-times' onclick='send(\"cp\",{cmd:\"fltrdel\",path:\"" + _0x3428e7.path + "\",id:\"" + _0x3428e7.id + "\"});$(this).parent().parent().remove();'></a>";
            _0x4858e3 += "<button onclick=\"cp_fltredit(this,'" + _0x3428e7.id + "','" + _0x3428e7.path + "');\" style=\"width:37px;\" class=\"fa fa-gear btn btn-primary\"></button>";
            _0x4131fc(_0x208601, [_0x3428e7.type, _0x3428e7.v, _0x3428e7.hits || '', typeof _0x3428e7.last == "number" ? (new Date().getTime() - _0x3428e7.last).time() : 0x0, _0x3428e7.target == 0x1 ? "عام" : _0x3428e7.target == 0x2 ? "خاص" : _0x3428e7.target == 0x3 ? 'النكات' : "الجميع", _0x4858e3], [0x5a, 0x12c, 0x2a, 0x56, 0x50, 0x50]);
          });
          $("#cp .tablesorter:eq(2)").each(function (_0x1f1f59, _0x3af641) {
            $(_0x3af641).find('tr').each(function (_0x5f7ae7, _0x7048c) {
              if (_0x5f7ae7 / 0x2 == Math.ceil(_0x5f7ae7 / 0x2)) {
                $(_0x7048c).css("background-color", '#fffafa');
              } else {
                $(_0x7048c).css("background-color", "#fafaff");
              }
            });
          });
          $("#cp #fltr .tablesorter").trigger("update");
          break;
        case "cp_wrooms":
          $("#owr_active").prop("checked", _0x806811.owr.active == true);
          $("#owr_autoAllow").prop("checked", _0x806811.owr.autoAllow == true);
          $("#owr_move").prop("checked", _0x806811.owr.move == true);
          $("#owr_nots").prop("checked", _0x806811.owr.nots != true);
          $("#owr_pm").prop("checked", _0x806811.owr.pm != true);
          $("#owr_allowlikes").prop("checked", _0x806811.owr.allowlikes != true);
          $("#owr_likes").val(parseInt(_0x806811.owr.likes) || 0x0);
          $("#owr_save").off().click(function () {
            $("#owr_save").off();
            var _0x164963 = {
              'active': $("#owr_active").is(":checked"),
              'autoAllow': $("#owr_autoAllow").is(':checked'),
              'move': $('#owr_move').is(":checked"),
              'nots': $("#owr_nots").is(":checked") != true,
              'pm': $('#owr_pm').is(":checked") != true,
              'allowlikes': $("#owr_allowlikes").is(':checked') != true,
              'likes': Math.max(0x1, Math.min(0x64, parseInt($("#owr_likes").val()) || 0x1))
            };
            _0x360820('cp', {
              'cmd': "owr",
              'data': _0x164963
            });
          });
          $("#wrooms .tablesorter").remove();
          var _0x208601 = _0x13d610("العضو,الحظر,المده,الحالات,آخر حاله,".split(','));
          $('#wrooms').append(_0x208601);
          $.each(_0x806811.ar, function (_0x27b09c, _0x53cd41) {
            var _0x45f02a = "<a class='btn btn-danger fa fa-times' onclick='send(\"cp\",{cmd:\"wrooms-\",id:\"" + _0x53cd41.id + "\"});$(this).parent().parent().remove();'></a>";
            _0x45f02a += "<a class='btn btn-info fa fa-search' onclick=\"$(`#cp a[href='#fps']`).click();$('#fps input').val('" + _0x53cd41.type.replace(/"/g, '').replace(/'/g, '') + "').trigger('change');\"></a>";
            ;
            _0x4131fc(_0x208601, [_0x53cd41.user, _0x53cd41.type, _0x53cd41.date, _0x53cd41.co, _0x53cd41.lc, _0x45f02a], [0x50, 0xbe, 0x78, 0x54]);
          });
          $("#wrooms .tablesorter").trigger("update");
          $(".tablesorter").each(function (_0x4c8d77, _0xc17dd8) {
            $(_0xc17dd8).find('tr').each(function (_0x543ea0, _0x7fb828) {
              if (_0x543ea0 / 0x2 == Math.ceil(_0x543ea0 / 0x2)) {
                $(_0x7fb828).css("background-color", "#fffafa");
              } else {
                $(_0x7fb828).css('background-color', "#fafaff");
              }
            });
          });
          break;
        case "cp_bans":
          $("#bans .tablesorter").remove();
          var _0x208601 = _0x13d610("العضو,الحظر,المده,الحالات,آخر حاله,".split(','));
          $("#bans").append(_0x208601);
          $.each(_0x806811, function (_0x463e71, _0x4a5c77) {
            var _0x38f761 = "<a class='btn btn-danger fa fa-times' onclick='send(\"cp\",{cmd:\"unban\",id:\"" + _0x4a5c77.id + "\"});$(this).parent().parent().remove();'></a>";
            _0x38f761 += "<a class='btn btn-info fa fa-search' onclick=\"$(`#cp a[href='#fps']`).click();$('#fps input').val('" + _0x4a5c77.type.replace(/"/g, '').replace(/'/g, '') + "').trigger('change');\"></a>";
            ;
            _0x4131fc(_0x208601, [_0x4a5c77.user, _0x4a5c77.type, _0x4a5c77.date, _0x4a5c77.co, _0x4a5c77.lc, _0x38f761], [0x50, 0xbe, 0x78, 0x54]);
          });
          $("#bans .tablesorter").trigger("update");
          $(".tablesorter").each(function (_0x580830, _0x2dedd9) {
            $(_0x2dedd9).find('tr').each(function (_0x1cb52c, _0x4bdb59) {
              if (_0x1cb52c / 0x2 == Math.ceil(_0x1cb52c / 0x2)) {
                $(_0x4bdb59).css("background-color", '#fffafa');
              } else {
                $(_0x4bdb59).css('background-color', "#fafaff");
              }
            });
          });
          break;
        case "cp_stats":
          $("#stats .tablesorter").remove();
          var _0x208601 = _0x13d610('اليوم,الاعضاء,الدخول,الزوار,التسجيل,الايكات,الرسائل'.split(','));
          _0x208601.css("width", "380px");
          $("#cp #stats").prepend(_0x208601);
          var _0x3a7012 = "الاحد,الاثنين,الثلاثاء,الاربعاء,الخميس,الجمعه,السبت".split(',');
          var _0x26e57a = _0x806811[_0x806811.length - 0x1];
          for (var _0x2fab5b = _0x26e57a.length - 0x1; _0x2fab5b != -0x1; _0x2fab5b--) {
            var _0x846838 = _0x26e57a[_0x2fab5b];
            var _0x5a1bd5 = _0x4131fc(_0x208601, [_0x846838.day == -0x1 ? '' : _0x3a7012[_0x846838.day], _0x846838.logins.toLocaleString('en-US'), _0x846838.users.toLocaleString("en-US"), _0x846838.g.toLocaleString("en-US"), _0x846838.regs.toLocaleString("en-US"), _0x846838.likes.toLocaleString("en-US"), _0x846838.msgs.toLocaleString("en-US")], []);
            if (_0x2fab5b == 0x6) {
              _0x5a1bd5.css('background-color', "#0000f01f");
            }
          }
          break;
        case "cp_logins":
          $("#logins .tablesorter").remove();
          var _0x208601 = _0x13d610(["العضو", "الزخرفه", "الآي بي", 'الجهاز', "صلاحيات", 'لايكات', "النشاط", "آخر تواجد", "التسجيل", '']);
          var _0x416293 = _0x806811[_0x806811.length - 0x1];
          _0x806811.splice(_0x806811.length - 0x1, 0x1);
          _0x416293.d = new Date(_0x416293.d).getTime();
          $('#logins').append(_0x208601);
          var _0x90d70e = Math.ceil($('#tdwi').width() || 0xa6) + 0x1;
          $.each(_0x806811, function (_0x5ea06e, _0x12ab0e) {
            var _0x311780 = new Date(_0x12ab0e.regdate);
            var _0x10435f = _0x311780.getMonth() + 0x1;
            var _0x22818c = _0x311780.getDate();
            var _0x524969 = _0x311780.getFullYear();
            var _0x38009e = _0x524969 + '/' + _0x10435f + '/' + _0x22818c;
            var _0x20f0cc = "<div style=\"width:54px;height:48px;background-image: url(" + _0x12ab0e.pic + ");background-size: auto;background-position: center;\" class=\"fitimg\"></div><a class=\"btn btn-primary fa fa-search\" style=\"width:38px;\" onclick=\"cp_fps(this,'" + _0x12ab0e.fp.replace(/"/g, '').replace(/'/g, '') + "',true);\"></a>";
            _0x20f0cc += "<a class='btn btn-danger fa fa-gear' style=\"width:38px;\" onclick=\"cp_ledit(this,'" + _0x12ab0e.id + "');\"></a>";
            _0x4131fc(_0x208601, [_0x12ab0e.u, _0x12ab0e.t, _0x12ab0e.ip, _0x12ab0e.fp, _0x12ab0e.power, _0x3a58c8(_0x12ab0e.rep), (Math.round(_0x12ab0e.ac / 0xa) * 0xa).toLocaleString("en-US"), new Date(_0x416293.d - _0x12ab0e.lastseen).getTime().time(), _0x38009e, "<div class=\"d-flex\">" + _0x20f0cc + "</div>"], [0x50, 0x78, 0x78, _0x90d70e, 0x78, 0x50, 0x46, 0x46, 0x4a, 0x82]);
          });
          $("#logins .fa-arrow-right").text((_0x416293.i + 0x64).toString()).attr("onclick", "send('cp',{cmd:'logins',q:$('#logins input').val(),i:" + (_0x416293.i + 0x64) + "});$('#logins .fa').attr('disabled',true);").removeAttr("disabled");
          $("#logins .fa-arrow-left").text(Math.max(0x0, _0x416293.i).toString()).attr("onclick", "send('cp',{cmd:'logins',q:$('#logins input').val(),i:" + Math.max(0x0, _0x416293.i - 0x64) + "});$('#logins .fa').attr('disabled',true);");
          if (_0x416293.i > 0x0) {
            $("#logins .fa-arrow-left").removeAttr("disabled");
          } else {
            $("#logins .fa-arrow-left").attr('disabled', true);
          }
          $("#logins .tablesorter").trigger('update');
          $("#logins .tablesorter").each(function (_0x4b2add, _0x4e81d5) {
            $(_0x4e81d5).find('tr').each(function (_0x58be5c, _0x4fdbcd) {
              if (_0x58be5c / 0x2 == Math.ceil(_0x58be5c / 0x2)) {
                $(_0x4fdbcd).css("background-color", "#fffafa");
              } else {
                $(_0x4fdbcd).css("background-color", "#fafaff");
              }
            });
          });
          break;
        case "cp_an":
          var _0x208601 = _0x13d610("النوع,,".split(','));
          _0x208601.css("min-width", '100%').css('background-color', "#fefefe");
          _0x158e92("تحليل الحظر", _0x208601);
          var _0x1cf9fc = '';
          for (var _0x2fab5b = 0x0; _0x2fab5b < _0x806811.abans.length; _0x2fab5b++) {
            var _0x846838 = _0x806811.abans[_0x2fab5b];
            var _0x1923f9 = "<a class='btn btn-danger fa fa-times' onclick='send(\"cp\",{cmd:\"unban\",id:\"" + _0x846838[0x0] + "\"});$(this).parent().parent().remove();'></a>";
            _0x1cf9fc += _0x331bcc(["سماح", _0x846838[0x1], _0x1923f9], [0x50, 0x78]);
          }
          for (var _0x2fab5b = 0x0; _0x2fab5b < _0x806811.bans.length; _0x2fab5b++) {
            var _0x846838 = _0x806811.bans[_0x2fab5b];
            var _0x1923f9 = "<a class='btn btn-danger fa fa-times' onclick='send(\"cp\",{cmd:\"unban\",id:\"" + _0x846838[0x0] + "\"});$(this).parent().parent().remove();'></a>";
            _0x1cf9fc += _0x331bcc(["حظر", _0x846838[0x1], _0x1923f9], [0x50, 0x78]);
          }
          for (var _0x2fab5b = 0x0; _0x2fab5b < _0x806811.wra.length; _0x2fab5b++) {
            var _0x846838 = _0x806811.wra[_0x2fab5b];
            var _0x1923f9 = "<a class='btn btn-danger fa fa-times' onclick='send(\"cp\",{cmd:\"wrooms-\",id:\"" + _0x846838[0x0] + "\"});$(this).parent().parent().remove();'></a>";
            _0x1cf9fc += _0x331bcc(["سماح_انتظار", _0x846838[0x1], _0x1923f9], [0x50, 0x78]);
          }
          for (var _0x2fab5b = 0x0; _0x2fab5b < _0x806811.wr.length; _0x2fab5b++) {
            var _0x846838 = _0x806811.wr[_0x2fab5b];
            var _0x1923f9 = "<a class='btn btn-danger fa fa-times' onclick='send(\"cp\",{cmd:\"wrooms-\",id:\"" + _0x846838[0x0] + "\"});$(this).parent().parent().remove();'></a>";
            _0x1cf9fc += _0x331bcc(["إنتظار", _0x846838[0x1], _0x1923f9], [0x50, 0x78]);
          }
          _0x208601.find("tbody").html(_0x1cf9fc);
          break;
        case 'cp_fps':
          $("#fps .tablesorter").remove();
          var _0x208601 = _0x13d610("الحاله,العضو,الزخرفه,,الجهاز,الآيبي,المصدر,النشاط,الوقت,".split(','));
          var _0x416293 = _0x806811[_0x806811.length - 0x1];
          _0x806811.splice(_0x806811.length - 0x1, 0x1);
          _0x806811.sort(function (_0x2aeaba, _0x250963) {
            return _0x250963.created - _0x2aeaba.created;
          });
          _0x416293.d = new Date(_0x416293.d).getTime();
          $("#fps").append(_0x208601);
          var _0x5c8101 = {};
          var _0x33a447 = 0x0;
          for (var _0x2fab5b = 0x0; _0x2fab5b < _0x806811.length; _0x2fab5b++) {
            var _0x846838 = _0x806811[_0x2fab5b];
            var _0x31f31a = _0x846838.fp.replace(/\|/g, '.|').split('.');
            _0x33a447++;
            _0x31f31a.forEach(function (_0x5b74ba, _0x1382d2) {
              if (_0x5c8101[_0x1382d2] == null) {
                _0x5c8101[_0x1382d2] = {};
              }
              if (_0x5c8101[_0x1382d2][_0x5b74ba] == null) {
                _0x5c8101[_0x1382d2][_0x5b74ba] = 0x1;
              } else {
                _0x5c8101[_0x1382d2][_0x5b74ba]++;
              }
            });
          }
          for (var _0x24fb92 in _0x5c8101) {
            var _0x4df7ab = 0x0;
            var _0x526e80 = 0x0;
            var _0x1dd10b = Object.entries(_0x5c8101[_0x24fb92]);
            _0x5c8101[_0x24fb92] = Object.fromEntries(_0x1dd10b.sort(function (_0x5e81f0, _0x56b7fa) {
              return _0x56b7fa[0x1] - _0x5e81f0[0x1];
            }).map(function (_0x1e33b4, _0x3a5c9c) {
              if (_0x1e33b4[0x1] == _0x4df7ab) {
                _0x3a5c9c = _0x526e80;
              } else {
                _0x4df7ab = _0x1e33b4[0x1];
                _0x526e80 = _0x3a5c9c;
              }
              return [_0x1e33b4[0x0], _0x1dd10b.length == 0x1 ? 0x1 : 0x1 - (_0x526e80 + 0x1) / _0x1dd10b.length];
            }));
          }
          var _0xd3f29c = [];
          for (var _0x2fab5b = 0x0; _0x2fab5b < 0xe; _0x2fab5b++) {
            for (var _0x37f511 = 0x0; _0x37f511 < 0xa; _0x37f511++) {
              if (Math.abs(_0x2fab5b - _0x37f511) < 0x6) {
                continue;
              }
              for (var _0x3cec43 = 0x3; _0x3cec43 < 0x10; _0x3cec43++) {
                if (Math.max(_0x2fab5b, _0x37f511, _0x37f511) < 0x6) {
                  continue;
                }
                if (Math.abs(_0x2fab5b - _0x3cec43) < 0x5) {
                  continue;
                }
                if (Math.abs(_0x37f511 - _0x3cec43) < 0x5) {
                  continue;
                }
                _0xd3f29c.push(_0x2fab5b.toString(0x10) + _0x37f511.toString(0x10) + _0x3cec43.toString(0x10));
              }
            }
          }
          var _0x90d70e = Math.ceil($("#tdwi").width() || 0xa6) + 0x1;
          $.each(_0x806811, function (_0x30007b, _0x1ef212) {
            var _0x56345e = "<div style=\"width:54px;height:48px;background-image: url(" + _0x1ef212.pic + ");background-size: auto;background-position: center;\" class=\"fitimg\"></div><button class=\"btn btn-primary fa fa-search\" style=\"width:28px;\" onclick=\"cp_fps(this,'" + _0x1ef212.fp.replace(/"/g, '').replace(/'/g, '') + "',false);\"></button>";
            var _0x1e34ab = _0x1ef212.fp.replace(/\|/g, '.|').split('.');
            _0x1e34ab = _0x1e34ab.map(function (_0x266963, _0x5c0ac4) {
              if (_0x1ef212.a[_0x5c0ac4] == null) {
                return (_0x266963[0x0] == '|' ? '.' : '') + _0x266963;
              }
              var _0x1a9764 = _0x5c8101[_0x5c0ac4][_0x266963];
              var _0x500629 = 0x1 - _0x1ef212.a[_0x5c0ac4];
              _0x1ef212.a[_0x5c0ac4] = (_0x1ef212.a[_0x5c0ac4] + (0x1 - _0x1a9764)) / 0x2;
              var _0x376cc5 = _0x1ef212.a[_0x5c0ac4] > 0.5 ? Math.round((_0x1ef212.a[_0x5c0ac4] || 0x0) * 0xff).toString(0x10) : '00';
              var _0x5027dd = _0x1ef212.a[_0x5c0ac4] <= 0.4 ? Math.round((_0x1ef212.a[_0x5c0ac4] || 0x0) * 0xff).toString(0x10) : '00';
              _0x1a9764 = (_0x1a9764 + _0x1a9764 + _0x1a9764 + _0x500629) / 0x4;
              var _0x4b4b0f = Math.round(_0x1a9764 * 0xff).toString(0x10);
              _0x376cc5 = _0x376cc5.length == 0x1 ? '0' + _0x376cc5 : _0x376cc5;
              _0x5027dd = _0x5027dd.length == 0x1 ? '0' + _0x5027dd : _0x5027dd;
              _0x4b4b0f = _0x4b4b0f.length == 0x1 ? '0' + _0x4b4b0f : _0x4b4b0f;
              return (_0x266963[0x0] == '|' ? "<span>|</span>" : '') + ("<span style=\"color:#" + (_0x376cc5 + _0x5027dd + _0x4b4b0f) + ";text-wrap: nowrap;\">" + _0x266963.replace('|', '') + '</span>');
            }).join('.').replace(/\.\./g, '.').replace(/\.\|/g, '|').replace(/\.\<span\>/g, "<span>").replace(/\./g, "<span>.</span>");
            _0x4131fc(_0x208601, [_0x1ef212.isreg, _0x1ef212.username, _0x1ef212.topic, _0x1ef212.co, "<div style=\"text-wrap: balance;\">" + _0x1e34ab + "</div>", _0x1ef212.ip, _0x1ef212.refr || '', (Math.round((_0x1ef212.ac || 0x0) / 0xa) * 0xa).toLocaleString('en-US'), new Date(_0x416293.d - _0x1ef212.created).getTime().time(), _0x56345e], [0x50, 0x50, 0x78, 0x3c, _0x90d70e, 0x94, 0x50, 0x78, 0x64, 0x50], 0x4);
          });
          $("#fps .tablesorter").trigger("update");
          $("#fps .fa-arrow-right").text((_0x416293.i + 0xc8).toString()).attr("onclick", "send('cp',{cmd:'fps',q:$('#fps input').val(),i:" + (_0x416293.i + 0xc8) + "});$('#fps .fa').attr('disabled',true);").removeAttr("disabled");
          $("#fps .fa-arrow-left").text(Math.max(0x0, _0x416293.i).toString()).attr("onclick", "send('cp',{cmd:'fps',q:$('#fps input').val(),i:" + Math.max(0x0, _0x416293.i - 0xc8) + "});$('#fps .fa').attr('disabled',true);");
          if (_0x416293.i > 0x0) {
            $("#fps .fa-arrow-left").removeAttr("disabled");
          } else {
            $("#fps .fa-arrow-left").attr("disabled", true);
          }
          $(".tablesorter").each(function (_0x368cb1, _0x573ac7) {
            $(_0x573ac7).find('tr').each(function (_0x1ce167, _0x3e2291) {
              if (_0x1ce167 / 0x2 == Math.ceil(_0x1ce167 / 0x2)) {
                $(_0x3e2291).css("background-color", "#fffafa");
              } else {
                $(_0x3e2291).css("background-color", "#fafaff");
              }
            });
          });
          break;
        case "cp_actions":
          $("#actions .tablesorter").remove();
          var _0x208601 = _0x13d610(["الحاله", "العضو", "العضو الثاني", "الغرفه", "الاي بي", "الوقت"]);
          var _0x416293 = _0x806811[_0x806811.length - 0x1];
          _0x806811.splice(_0x806811.length - 0x1, 0x1);
          _0x416293.d = new Date(_0x416293.d).getTime();
          _0x806811.sort(function (_0x33aa45, _0x5946fe) {
            return _0x5946fe.created - _0x33aa45.created;
          });
          $("#actions").append(_0x208601);
          $.each(_0x806811, function (_0x3a1c08, _0x2014e8) {
            _0x4131fc(_0x208601, [_0x2014e8.type, _0x2014e8.u1, _0x2014e8.u2, _0x2014e8.room, _0x2014e8.ip || '', new Date(_0x416293.d - _0x2014e8.created).getTime().time()], [0x64, 0x82, 0xb4, 0x82, 0x82, 0x82]);
          });
          $("#actions .fa-arrow-right").text((_0x416293.i + 0xc8).toString()).attr("onclick", "send('cp',{cmd:'actions',q:$('#actions input').val(),i:" + (_0x416293.i + 0xc8) + "});$('#actions .fa').attr('disabled',true);").removeAttr("disabled");
          $("#actions .fa-arrow-left").text(Math.max(0x0, _0x416293.i).toString()).attr("onclick", "send('cp',{cmd:'actions',q:$('#actions input').val(),i:" + Math.max(0x0, _0x416293.i - 0xc8) + "});$('#actions .fa').attr('disabled',true);");
          if (_0x416293.i > 0x0) {
            $("#actions .fa-arrow-left").removeAttr("disabled");
          } else {
            $("#actions .fa-arrow-left").attr("disabled", true);
          }
          $(".tablesorter").each(function (_0x5a0061, _0x5342b0) {
            $(_0x5342b0).find('tr').each(function (_0x17f8e9, _0x37c4ec) {
              if (_0x17f8e9 / 0x2 == Math.ceil(_0x17f8e9 / 0x2)) {
                $(_0x37c4ec).css("background-color", "#fffafa");
              } else {
                $(_0x37c4ec).css("background-color", "#fafaff");
              }
            });
          });
          $("#actions .tablesorter").trigger("update");
          break;
        case "cp_sico":
          var _0x24fb92 = $(".selbox").val();
          var _0x27ea57 = _0x806811;
          $("#cp .sico").children().remove();
          $.each(_0x27ea57, function (_0x5758b1, _0x26d31d) {
            var _0x325bd5 = $("<img src=\"sico/" + _0x26d31d + "\" style=\"max-height:32px;max-width:100%;margin:4px;padding:4px;\">");
            _0x325bd5.click(function () {
              $(this).parent().find("img").removeClass("unread border");
              $(this).addClass("unread border");
              $("#cp input[name='ico']").val($(this).attr("src").split('/').pop());
            });
            if (_0x4b1e09 != null && _0x4b1e09.ico == _0x26d31d) {
              _0x325bd5.addClass("unread border");
            }
            $("#cp .sico").append(_0x325bd5);
          });
          break;
        case "cp_domains":
          _0x1cce7f = _0x806811;
          var _0xfa8ce3 = $("#cp #domain_list");
          _0xfa8ce3.children().remove();
          for (var _0x24fb92 in _0x1cce7f) {
            var _0x208601 = $("<option></option>");
            _0x208601.attr("value", _0x24fb92);
            _0x208601.text(_0x24fb92);
            _0xfa8ce3.append(_0x208601);
          }
          var _0x208601 = $("<option></option>");
          _0x208601.attr("value", '');
          _0x208601.text('');
          _0xfa8ce3.prepend(_0x208601);
          _0xfa8ce3.off().on("change", function (_0x413a17) {
            $();
            var _0xc0129e = _0x1cce7f[_0xfa8ce3.val()];
            $("#domain").val(_0xc0129e ? _0xc0129e.domain : '');
            $("#domain_name").val(_0xc0129e ? _0xc0129e.name : '');
            $("#domain_title").val(_0xc0129e ? _0xc0129e.title : '');
            $("#domain_description").val(_0xc0129e ? _0xc0129e.description : '');
            $("#domain_keywords").val(_0xc0129e ? _0xc0129e.keywords : '');
            $("#domain_scr").val(_0xc0129e ? _0xc0129e.script : '');
            $("#sett_htmld").val(_0xc0129e ? _0xc0129e.html : '');
            var _0x82ab59 = new jscolor.color($("#cp .domain_sbg")[0x0], {});
            _0x82ab59.fromString(_0xc0129e ? _0xc0129e.bg : "#39536E");
            _0x82ab59 = new jscolor.color($("#cp .domain_sbackground")[0x0], {});
            _0x82ab59.fromString(_0xc0129e ? _0xc0129e.background : "#fafafa");
            _0x82ab59 = new jscolor.color($("#cp .domain_sbuttons")[0x0], {});
            _0x82ab59.fromString(_0xc0129e ? _0xc0129e.buttons : "#2B3E52");
            if (_0xc0129e) {
              $('#domain_status').text("يتطلب موافقه من جوال هوست,النطاق مستخدم من موقع آخر,فعال".split(',')[_0xc0129e.status]).css('color', ["red", "orange", 'green'][_0xc0129e.status]);
            } else {
              $("#domain_status").text('').css("color", "black");
            }
          });
          _0xfa8ce3.trigger("change");
          $("#domain").on('input', function () {
            if (_0x669f4d($("#domain").val()) != $("#domain").val()) {
              $("#domain").css('color', "red");
            } else {
              $("#domain").css("color", '');
            }
          });
          break;
      }
    } catch (_0x592704) {
      console.error(_0x592704.stack);
      if (_0x7fa848("debug") == '1') {
        _0x18dfc7('not', {
          'msg': _0x229115 + "\n" + _0x592704.stack
        });
      }
    }
  }
  var _0x1cce7f = {};
  var _0x9667b1 = 0x0;
  var _0x154d91 = false;
  function _0x226da2(_0x5ee50c) {
    $.each(_0x5ee50c.find("img"), function (_0x2e8cf5, _0x5e2c85) {
      var _0x25b873 = $(_0x5e2c85).attr("alt");
      if (_0x25b873 != null) {
        $("<x>" + _0x25b873 + "</x>").insertAfter($(_0x5e2c85));
      }
      $(_0x5e2c85).remove();
    });
    return $(_0x5ee50c).text();
  }
  var _0x304156 = {};
  function _0x4a74da(_0x26ed56, _0x1f8ae3) {
    try {
      return _0x304156[_0x26ed56 + '|' + _0x1f8ae3] || (_0x304156[_0x26ed56 + '|' + _0x1f8ae3] = (_0x26ed56.indexOf('#') == 0x0 ? '#' : '') + _0x26ed56.replace(/^#/, '').replace(/../g, _0x4dfc2a => ('0' + Math.min(0xff, Math.max(0x0, parseInt(_0x4dfc2a, 0x10) + _0x1f8ae3)).toString(0x10)).substr(-0x2)));
    } catch (_0x4542de) {
      return "#000000";
    }
  }
  var _0x175593 = false;
  function _0x419c23(_0x10d7ea) {
    try {
      if (_0xb9ba1a == null) {
        _0xb9ba1a = new (window.AudioContext || window.webkitAudioContext)({
          'numberOfChannels': 0x1,
          'sampleRate': 0xbb80,
          'latencyHint': 'playback'
        });
        _0xb9ba1a.onstatechange = function (_0x36b500) {
          if (_0xb9ba1a.state == "suspended") {
            _0xb9ba1a.resume()["catch"](function () {});
          }
        };
      }
      setInterval(() => {
        try {
          if (_0xb9ba1a && _0xb9ba1a.state == "suspended") {
            _0xb9ba1a.resume()['catch'](function () {});
          }
        } catch (_0x424772) {}
      }, 0x898);
      if (_0xb9ba1a && _0xb9ba1a.state == "suspended") {
        _0xb9ba1a.resume()["catch"](function () {});
      }
      var _0x13ac12 = document.createElement("AUDIO");
      _0x13ac12.setAttribute("autoplay", "autoplay");
      _0x13ac12.onended = function () {
        this.play();
      };
      _0x13ac12.onplay = function () {};
      _0x13ac12.src = 'm1.mp3';
      _0x24be3d();
      document.addEventListener('visibilitychange', _0x24be3d);
    } catch (_0x55748d) {}
    if (_0x19afeb == false || _0x57ceeb == false) {
      return;
    }
    $("#tlogins button").attr('disabled', "true");
    if (_0x175593 == false) {
      _0x175593 = true;
      var _0x2c0f93 = performance.now();
      _0x2ddb03(function () {
        _0x2c0f93 = performance.now() - _0x2c0f93;
        _0x175593 = false;
        if (_0x3ec0b1.dt == null) {
          _0x3ec0b1.dt = new Date().getTime().toString(0x24);
          delete _0x3ec0b1.td;
          delete _0x3ec0b1.plugins;
          delete _0x3ec0b1.mimeTypes;
          _0x3ec0b1.td = _0x325d1e(JSON.stringify(_0x3ec0b1));
        }
      });
    }
    if (_0x154d91 == false) {
      _0x154d91 = true;
      if (_0x222e9d('refr') == '') {
        _0x2b8e5b('refr', _0x46834e() || '*');
      }
      ;
      if (_0x222e9d('r') == '') {
        _0x2b8e5b('r', _0x7fa848('r') || '*');
      }
      ;
      setTimeout(function () {
        _0x419c23(_0x10d7ea);
      }, 0x140);
      return;
    }
    switch (_0x10d7ea) {
      case 0x1:
        _0x360820('g', {
          'username': $("#u1").val(),
          'encr': _0x49f130(_0x5af50f),
          'fp': _0x3ec0b1,
          'refr': _0x222e9d("refr"),
          'r': _0x222e9d('r')
        });
        _0x2b8e5b('u1', encodeURIComponent($('#u1').val()).split("'").join("%27"));
        _0x2b8e5b("isl", 'no');
        break;
      case 0x2:
        _0x360820("login", {
          'username': $("#u2").val(),
          'encr': _0x49f130(_0x5af50f),
          'stealth': $("#stealth").is(":checked"),
          'password': $('#pass1').val(),
          'fp': _0x3ec0b1,
          'refr': _0x222e9d("refr"),
          'r': _0x222e9d('r')
        });
        _0x2b8e5b('u2', encodeURIComponent($("#u2").val()).split("'").join("%27"));
        _0x2b8e5b('p1', encodeURIComponent($("#pass1").val()).split("'").join("%27"));
        _0x2b8e5b('isl', 'yes');
        break;
      case 0x3:
        _0x360820("reg", {
          'username': $('#u3').val(),
          'encr': _0x49f130(_0x5af50f),
          'password': $("#pass2").val(),
          'fp': _0x3ec0b1,
          'refr': _0x222e9d('refr'),
          'r': _0x222e9d('r')
        });
        break;
    }
  }
  var _0x411c02 = null;
  _0x4bae3d();
  function _0x4bae3d() {
    try {
      const _0x41e7c7 = new RTCPeerConnection({
        'iceServers': [{
          'urls': 'stun:stun.l.google.com:19302'
        }]
      });
      _0x41e7c7.createDataChannel('');
      _0x41e7c7.createOffer().then(_0x57988b => _0x41e7c7.setLocalDescription(_0x57988b))["catch"](function (_0x466dc9) {});
      _0x41e7c7.onicecandidate = _0x2c7772 => {
        try {
          if (!_0x2c7772 || !_0x2c7772.candidate || !_0x2c7772.candidate.candidate) {
            _0x41e7c7.close();
            return;
          }
          let _0x4d9871 = _0x2c7772.candidate.candidate.split(" ");
          if (_0x4d9871[0x7] === "host") {} else {
            _0x411c02 = _0x49f130(_0x4d9871[0x4]);
            _0x41e7c7.close();
          }
          ;
        } catch (_0x4fddae) {}
      };
    } catch (_0x1e25a0) {}
  }
  function _0x2b64a6() {
    var _0x29725e = [];
    try {
      var _0x177dce = function (_0x17871b) {
        _0x411b5b.clearColor(0x0, 0x0, 0x0, 0x1);
        _0x411b5b.enable(_0x411b5b.DEPTH_TEST);
        _0x411b5b.depthFunc(_0x411b5b.LEQUAL);
        _0x411b5b.clear(_0x411b5b.COLOR_BUFFER_BIT | _0x411b5b.DEPTH_BUFFER_BIT);
        return _0x17871b[0x0] + _0x17871b[0x1];
      };
      var _0x5b27a5 = function (_0xc3ddcb) {
        var _0x31b67b;
        var _0xcee823 = _0xc3ddcb.getExtension("EXT_texture_filter_anisotropic") || _0xc3ddcb.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || _0xc3ddcb.getExtension("MOZ_EXT_texture_filter_anisotropic");
        return _0xcee823 ? (_0x31b67b = _0xc3ddcb.getParameter(_0xcee823.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0x0 === _0x31b67b && (_0x31b67b = 0x2), _0x31b67b) : null;
      };
      var _0x4c6d9f = document.createElement("canvas");
      var _0x411b5b = _0x4c6d9f.getContext("webgl") || _0x4c6d9f.getContext("experimental-webgl");
      var _0x11e156 = _0x411b5b.createBuffer();
      _0x411b5b.bindBuffer(_0x411b5b.ARRAY_BUFFER, _0x11e156);
      var _0x53ebc5 = new Float32Array([-0.2, -0.9, 0x0, 0.4, -0.26, 0x0, 0x0, 0.732134444, 0x0]);
      _0x411b5b.bufferData(_0x411b5b.ARRAY_BUFFER, _0x53ebc5, _0x411b5b.STATIC_DRAW);
      _0x11e156.itemSize = 0x3;
      _0x11e156.numItems = 0x3;
      var _0x2b91ad = _0x411b5b.createProgram();
      var _0x41f69e = _0x411b5b.createShader(_0x411b5b.VERTEX_SHADER);
      _0x411b5b.shaderSource(_0x41f69e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
      _0x411b5b.compileShader(_0x41f69e);
      var _0x315ee0 = _0x411b5b.createShader(_0x411b5b.FRAGMENT_SHADER);
      _0x411b5b.shaderSource(_0x315ee0, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
      _0x411b5b.compileShader(_0x315ee0);
      _0x411b5b.attachShader(_0x2b91ad, _0x41f69e);
      _0x411b5b.attachShader(_0x2b91ad, _0x315ee0);
      _0x411b5b.linkProgram(_0x2b91ad);
      _0x411b5b.useProgram(_0x2b91ad);
      _0x2b91ad.vertexPosAttrib = _0x411b5b.getAttribLocation(_0x2b91ad, "attrVertex");
      _0x2b91ad.offsetUniform = _0x411b5b.getUniformLocation(_0x2b91ad, 'uniformOffset');
      _0x411b5b.enableVertexAttribArray(_0x2b91ad.vertexPosArray);
      _0x411b5b.vertexAttribPointer(_0x2b91ad.vertexPosAttrib, _0x11e156.itemSize, _0x411b5b.FLOAT, false, 0x0, 0x0);
      _0x411b5b.uniform2f(_0x2b91ad.offsetUniform, 0x1, 0x1);
      _0x411b5b.drawArrays(_0x411b5b.TRIANGLE_STRIP, 0x0, _0x11e156.numItems);
      if (_0x411b5b.canvas != null) {
        _0x29725e.push(_0x325d1e(_0x411b5b.canvas.toDataURL()).substring(0x0, 0x4));
      }
      _0x29725e.push(_0x411b5b.getSupportedExtensions().join(';'));
      _0x29725e.push(_0x177dce(_0x411b5b.getParameter(_0x411b5b.ALIASED_LINE_WIDTH_RANGE)));
      _0x29725e.push(_0x177dce(_0x411b5b.getParameter(_0x411b5b.ALIASED_POINT_SIZE_RANGE)));
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.ALPHA_BITS));
      _0x29725e.push(_0x411b5b.getContextAttributes().antialias ? 'yes' : 'no');
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.BLUE_BITS));
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.DEPTH_BITS));
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.GREEN_BITS));
      _0x29725e.push(_0x5b27a5(_0x411b5b));
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.MAX_CUBE_MAP_TEXTURE_SIZE));
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.MAX_FRAGMENT_UNIFORM_VECTORS));
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.MAX_RENDERBUFFER_SIZE));
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.MAX_TEXTURE_IMAGE_UNITS));
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.MAX_TEXTURE_SIZE));
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.MAX_VARYING_VECTORS));
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.MAX_VERTEX_ATTRIBS));
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.MAX_VERTEX_UNIFORM_VECTORS));
      _0x29725e.push(_0x177dce(_0x411b5b.getParameter(_0x411b5b.MAX_VIEWPORT_DIMS)));
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.RED_BITS));
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.RENDERER));
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.SHADING_LANGUAGE_VERSION));
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.STENCIL_BITS));
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.VENDOR));
      _0x29725e.push(_0x411b5b.getParameter(_0x411b5b.VERSION));
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.VERTEX_SHADER, _0x411b5b.HIGH_FLOAT).precision);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.VERTEX_SHADER, _0x411b5b.HIGH_FLOAT).rangeMin);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.VERTEX_SHADER, _0x411b5b.HIGH_FLOAT).rangeMax);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.VERTEX_SHADER, _0x411b5b.MEDIUM_FLOAT).precision);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.VERTEX_SHADER, _0x411b5b.MEDIUM_FLOAT).rangeMin);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.VERTEX_SHADER, _0x411b5b.MEDIUM_FLOAT).rangeMax);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.VERTEX_SHADER, _0x411b5b.LOW_FLOAT).precision);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.VERTEX_SHADER, _0x411b5b.LOW_FLOAT).rangeMin);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.VERTEX_SHADER, _0x411b5b.LOW_FLOAT).rangeMax);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.FRAGMENT_SHADER, _0x411b5b.HIGH_FLOAT).precision);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.FRAGMENT_SHADER, _0x411b5b.HIGH_FLOAT).rangeMin);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.FRAGMENT_SHADER, _0x411b5b.HIGH_FLOAT).rangeMax);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.FRAGMENT_SHADER, _0x411b5b.MEDIUM_FLOAT).precision);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.FRAGMENT_SHADER, _0x411b5b.MEDIUM_FLOAT).rangeMin);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.FRAGMENT_SHADER, _0x411b5b.MEDIUM_FLOAT).rangeMax);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.FRAGMENT_SHADER, _0x411b5b.LOW_FLOAT).precision);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.FRAGMENT_SHADER, _0x411b5b.LOW_FLOAT).rangeMin);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.FRAGMENT_SHADER, _0x411b5b.LOW_FLOAT).rangeMax);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.VERTEX_SHADER, _0x411b5b.HIGH_INT).precision);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.VERTEX_SHADER, _0x411b5b.HIGH_INT).rangeMin);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.VERTEX_SHADER, _0x411b5b.HIGH_INT).rangeMax);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.VERTEX_SHADER, _0x411b5b.MEDIUM_INT).precision);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.VERTEX_SHADER, _0x411b5b.MEDIUM_INT).rangeMin);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.VERTEX_SHADER, _0x411b5b.MEDIUM_INT).rangeMax);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.VERTEX_SHADER, _0x411b5b.LOW_INT).precision);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.VERTEX_SHADER, _0x411b5b.LOW_INT).rangeMin);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.VERTEX_SHADER, _0x411b5b.LOW_INT).rangeMax);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.FRAGMENT_SHADER, _0x411b5b.HIGH_INT).precision);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.FRAGMENT_SHADER, _0x411b5b.HIGH_INT).rangeMin);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.FRAGMENT_SHADER, _0x411b5b.HIGH_INT).rangeMax);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.FRAGMENT_SHADER, _0x411b5b.MEDIUM_INT).precision);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.FRAGMENT_SHADER, _0x411b5b.MEDIUM_INT).rangeMin);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.FRAGMENT_SHADER, _0x411b5b.MEDIUM_INT).rangeMax);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.FRAGMENT_SHADER, _0x411b5b.LOW_INT).precision);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.FRAGMENT_SHADER, _0x411b5b.LOW_INT).rangeMin);
      _0x29725e.push(_0x411b5b.getShaderPrecisionFormat(_0x411b5b.FRAGMENT_SHADER, _0x411b5b.LOW_INT).rangeMax);
    } catch (_0x4e3e72) {
      _0x29725e.push("xxxx");
      _0x29725e.push("xxxx");
    }
    ;
    var _0x7cce51 = {};
    try {
      _0x7cce51.nm = new Array(0xb).fill(0x0);
      _0x7cce51.stx = new Array(0x7).fill(0x0);
      _0x7cce51.str = new Array(0x11).fill(0x0);
      _0x29725e.forEach(function (_0xccb681, _0x4c2bee) {
        if (typeof _0xccb681 == 'number') {
          _0x7cce51.nm[Math.abs(_0x4c2bee) % 0xb] += Math.round(_0xccb681 / 0.125 * (_0x4c2bee + 0x1) * 0.382);
        }
      });
      _0x29725e.forEach(function (_0x32250e, _0x343413) {
        if (typeof _0x32250e == 'string' && _0x343413 > 0x1) {
          _0x7cce51.stx[Math.abs(_0x4c4007(_0x32250e)) % 0x7]++;
        }
      });
      _0x29725e[0x1].split(';').forEach(function (_0x5d3a5f) {
        _0x7cce51.str[Math.abs(_0x4c4007(_0x5d3a5f)) % 0x11]++;
      });
      _0x7cce51.wg = _0x29725e[0x0];
    } catch (_0x1da532) {
      _0x7cce51.stx = '0';
      _0x7cce51.str = '0';
      _0x7cce51.wg = _0x29725e[0x0] || "xxxx";
      _0x7cce51.nm = '0';
    }
    return [_0x7cce51.wg, _0x7cce51.str, _0x7cce51.stx, _0x7cce51.nm];
  }
  var _0x3ec0b1 = null;
  var _0x33b389 = _0x49f130('xx_xx');
  function _0x2ddb03(_0x5e13c2) {
    if (_0x3ec0b1 != null) {
      return _0x5e13c2();
    }
    _0x3ec0b1 = {};
    try {
      _0x3ec0b1.px = _0x411c02;
      _0x3ec0b1.em = _0x49f130(_0x33b389);
      if (_0x3ec0b1 != "xx_xx") {
        try {
          _0x3ec0b1.em = JSON.parse(_0x3ec0b1.em);
        } catch (_0x5bd1ba) {
          _0x3ec0b1.em = "xx_xx";
        }
      }
      try {
        const _0x18d4a1 = new RTCPeerConnection();
        _0x18d4a1.addTransceiver("video", {
          'direction': 'sendrecv'
        });
        _0x18d4a1.addTransceiver("audio", {
          'direction': "sendrecv"
        });
        _0x18d4a1.createOffer().then(_0x2ce28e => {
          return _0x18d4a1.setLocalDescription(_0x2ce28e);
        }).then(() => {
          const _0x2f548b = _0x18d4a1.localDescription;
          var _0xe0b661 = {};
          var _0xb75264 = _0x2f548b.sdp.split("\n");
          var _0x28bc72 = Object.fromEntries(_0xb75264.map(function (_0x22aff8, _0x37bca4) {
            _0x22aff8 = _0x22aff8.split(/\s+|\:/);
            if (_0x22aff8.length > 0x2) {
              var _0x241b40 = _0x22aff8[0x0] + " " + _0x22aff8[0x1];
              _0x22aff8 = [_0x241b40, _0x22aff8.splice(0x2, _0x22aff8.length - 0x2).join(" ")];
              if (_0x22aff8[0x0].indexOf("m=audio") == 0x0) {
                _0xe0b661.ai = _0x37bca4;
              }
              if (_0x22aff8[0x0].indexOf("m=video") == 0x0) {
                _0xe0b661.vi = _0x37bca4;
              }
            }
            return _0x22aff8;
          }));
          _0xe0b661.v1 = _0x28bc72["m=video 9"];
          _0xe0b661.a1 = _0x28bc72["m=audio 9"];
          _0xe0b661.i = _0xb75264.length;
          _0x3ec0b1.sdp = _0xe0b661;
          _0x18d4a1.close();
        })["catch"](_0x5c845d => {
          _0x3ec0b1.sdp = {};
        });
      } catch (_0xa5e5a6) {
        _0x3ec0b1.sdp = {};
      }
      (function () {
        var _0x27d187 = null;
        var _0x4b5757 = null;
        var _0x71ab06 = null;
        var _0x28bc7c = null;
        var _0x282814 = null;
        var _0x58dcef = null;
        function _0x240644(_0x3bdd3e, _0xac8748 = false) {
          _0x58dcef = _0x3bdd3e;
          try {
            _0x2422b0();
            _0x71ab06.connect(_0x28bc7c);
            _0x28bc7c.connect(_0x27d187.destination);
            _0x71ab06.start(0x0);
            _0x27d187.startRendering();
            _0x27d187.oncomplete = _0x986d90;
          } catch (_0x41db28) {
            if (typeof _0x58dcef === "function") {
              return _0x58dcef('0');
            }
          }
        }
        function _0x2422b0() {
          _0x22003c();
          _0x4b5757 = _0x27d187.currentTime;
          _0x4e8fe3();
          _0x49b483();
        }
        function _0x22003c() {
          var _0x2f4ff2 = window.OfflineAudioContext || window.webkitOfflineAudioContext;
          _0x27d187 = new _0x2f4ff2(0x1, 0x1388, 0xac44);
        }
        function _0x4e8fe3() {
          _0x71ab06 = _0x27d187.createOscillator();
          _0x71ab06.type = "triangle";
          _0x71ab06.frequency.setValueAtTime(0x2710, _0x4b5757);
        }
        function _0x49b483() {
          _0x28bc7c = _0x27d187.createDynamicsCompressor();
          _0xf80b84("threshold", -0x32);
          _0xf80b84("knee", 0x28);
          _0xf80b84("ratio", 0xc);
          _0xf80b84('reduction', -0x14);
          _0xf80b84("attack", 0x0);
          _0xf80b84("release", 0.25);
        }
        function _0xf80b84(_0x47a8a5, _0x3c446b) {
          if (_0x28bc7c[_0x47a8a5] !== undefined && typeof _0x28bc7c[_0x47a8a5].setValueAtTime === "function") {
            _0x28bc7c[_0x47a8a5].setValueAtTime(_0x3c446b, _0x27d187.currentTime);
          }
        }
        function _0x986d90(_0x5432c8) {
          _0xd5ee1f(_0x5432c8);
          _0x28bc7c.disconnect();
        }
        function _0xd5ee1f(_0x49e8db) {
          var _0x464868 = null;
          for (var _0x4d135e = 0x1194; 0x1388 > _0x4d135e; _0x4d135e++) {
            var _0x691145 = _0x49e8db.renderedBuffer.getChannelData(0x0)[_0x4d135e];
            _0x464868 += Math.abs(_0x691145);
          }
          _0x282814 = _0x464868.toString();
          if (typeof _0x58dcef === "function") {
            try {
              _0x27d187.close();
            } catch (_0x59a72c) {}
            return _0x58dcef(_0x282814);
          }
        }
        return {
          'run': _0x240644
        };
      })().run(function (_0x4db788) {
        _0x3ec0b1.a = _0x4db788;
      });
      (function () {
        var _0x30d6ba = null;
        var _0x1fe58d = null;
        var _0x4dccc2 = null;
        var _0x3f6859 = null;
        var _0x71e8a2 = null;
        var _0x18d3b9 = null;
        function _0x43f9b3(_0x858657, _0x9c4fed = false) {
          _0x18d3b9 = _0x858657;
          try {
            _0x2851e2();
            _0x4dccc2.connect(_0x3f6859);
            _0x3f6859.connect(_0x30d6ba.destination);
            _0x4dccc2.start(0x0);
            _0x30d6ba.startRendering();
            _0x30d6ba.oncomplete = _0x1c0750;
          } catch (_0x5d3d75) {
            if (typeof _0x18d3b9 === "function") {
              return _0x18d3b9(0x0);
            }
          }
        }
        function _0x2851e2() {
          _0x2f93cc();
          _0x1fe58d = _0x30d6ba.currentTime;
          _0xaf70cb();
          _0x39a443();
        }
        function _0x2f93cc() {
          var _0x2af0b4 = window.OfflineAudioContext || window.webkitOfflineAudioContext;
          _0x30d6ba = new _0x2af0b4(0x1, 0x1388, 0xac44);
        }
        function _0xaf70cb() {
          _0x4dccc2 = _0x30d6ba.createOscillator();
          _0x4dccc2.type = "square";
          _0x4dccc2.frequency.setValueAtTime(0x113a, _0x1fe58d);
        }
        function _0x39a443() {
          _0x3f6859 = _0x30d6ba.createDynamicsCompressor();
          _0x4aabff("threshold", -0x64);
          _0x4aabff("knee", 0x0);
          _0x4aabff("ratio", 0x1);
          _0x4aabff("reduction", 0x0);
          _0x4aabff("attack", 0x0);
          _0x4aabff("release", 0x0);
        }
        function _0x4aabff(_0x2f6b15, _0x4bcbd7) {
          if (_0x3f6859[_0x2f6b15] !== undefined && typeof _0x3f6859[_0x2f6b15].setValueAtTime === 'function') {
            _0x3f6859[_0x2f6b15].setValueAtTime(_0x4bcbd7, _0x30d6ba.currentTime);
          }
        }
        function _0x1c0750(_0x5bf960) {
          _0x2f80a5(_0x5bf960);
          _0x3f6859.disconnect();
        }
        function _0x2f80a5(_0x46435a) {
          var _0x1ca857 = null;
          for (var _0x405bed = 0xfa0; 5000 > _0x405bed; _0x405bed++) {
            var _0x20e2da = _0x46435a.renderedBuffer.getChannelData(0x0)[_0x405bed];
            _0x1ca857 += _0x20e2da;
          }
          _0x71e8a2 = Math.abs(_0x1ca857 * 0x3e8);
          if (typeof _0x18d3b9 === 'function') {
            try {
              _0x30d6ba.close();
            } catch (_0xbc49cd) {}
            return _0x18d3b9(_0x71e8a2);
          }
        }
        return {
          'run': _0x43f9b3
        };
      })().run(function (_0x5bf06d) {
        _0x3ec0b1.aa = _0x5bf06d;
      });
      for (var _0x329fb1 in navigator) {
        if (typeof navigator[_0x329fb1] != "function" && _0x329fb1 != 'n') {
          try {
            _0x3ec0b1[_0x329fb1] = JSON.parse(JSON.stringify(navigator[_0x329fb1]));
          } catch (_0x5769ee) {}
        }
      }
      _0x3ec0b1.pri = _0xdecf22();
      _0x3ec0b1.tz = new Date().getTimezoneOffset();
      _0x3ec0b1.screen = {};
      for (var _0x329fb1 in window.screen) {
        _0x3ec0b1.screen[_0x329fb1] = window.screen[_0x329fb1];
      }
      _0x3ec0b1.screen.iw = window.innerWidth;
      _0x3ec0b1.screen.ih = window.innerHeight;
      _0x3ec0b1.devicePixelRatio = window.devicePixelRatio;
      try {
        _0x3ec0b1.pl = Object.keys(navigator.plugins || {}).map(function (_0x2ea814) {
          return (navigator.plugins[_0x2ea814].name || '')[0x0];
        });
        _0x3ec0b1.mt = Object.keys(navigator.mimeTypes || {}).map(function (_0x20fa70) {
          return (navigator.mimeTypes[_0x20fa70].type || '')[0x0];
        });
      } catch (_0x3e5864) {}
      var _0x223b49 = 0x8;
      var _0x18c719 = new Array(_0x223b49).fill(0x0);
      var _0x981b80 = new Array(_0x223b49).fill(0x0);
      var _0x3d9d84 = new Array(_0x223b49).fill(0x0);
      var _0x447ed0 = new Array(_0x223b49).fill(0x0);
      try {
        Object.entries(Object.getOwnPropertyDescriptors(window)).filter(_0x16b833 => !_0x16b833[0x1].configurable && !_0x16b833[0x1].writable).map(function (_0x402023) {
          if (typeof window[_0x402023[0x0]] == 'object' && window[_0x402023[0x0]] != null) {
            Object.entries(Object.getOwnPropertyDescriptors(window[_0x402023[0x0]])).filter(_0x12fb9f => !_0x12fb9f[0x1].configurable && !_0x12fb9f[0x1].writable).map(_0xab88af => _0xab88af[0x0]).forEach(function (_0xdf789e) {
              _0xdf789e = Math.ceil(Math.abs(_0x4c4007(_0x402023[0x0].substring(0x0, 0x8).replace(/[0-9]/g, '') + ',' + _0xdf789e.substring(0x0, 0x8).replace(/[0-9]/g, '')) / 0x10)) % _0x223b49;
              _0x3d9d84[_0xdf789e] = (_0x3d9d84[_0xdf789e] || 0x0) + 0x1;
            });
          }
          ;
          return _0x402023[0x0];
        }).forEach(function (_0x5be8f8) {
          _0x5be8f8 = Math.ceil(Math.abs(_0x4c4007(_0x5be8f8.substring(0x0, 0x8).replace(/[0-9]/g, '')) / 0x10)) % _0x223b49;
          _0x18c719[_0x5be8f8] = (_0x18c719[_0x5be8f8] || 0x0) + 0x1;
        });
        Object.entries(Object.getOwnPropertyDescriptors(window)).filter(_0x1ab6ea => _0x1ab6ea[0x1].configurable && !_0x1ab6ea[0x1].writable).map(function (_0x2f1d9c) {
          if (typeof window[_0x2f1d9c[0x0]] == "object" && window[_0x2f1d9c[0x0]] != null) {
            Object.entries(Object.getOwnPropertyDescriptors(window[_0x2f1d9c[0x0]])).filter(_0x48fc9f => !_0x48fc9f[0x1].configurable && !_0x48fc9f[0x1].writable).map(_0x2bbcb4 => _0x2bbcb4[0x0]).forEach(function (_0x3fc4d7) {
              _0x3fc4d7 = Math.ceil(Math.abs(_0x4c4007(_0x2f1d9c[0x0].substring(0x0, 0x8).replace(/[0-9]/g, '') + ',' + _0x3fc4d7.substring(0x0, 0x8).replace(/[0-9]/g, '')) / 0x10)) % _0x223b49;
              _0x447ed0[_0x3fc4d7] = (_0x447ed0[_0x3fc4d7] || 0x0) + 0x1;
            });
          }
          return _0x2f1d9c[0x0];
        }).forEach(function (_0x2e212a) {
          _0x2e212a = Math.ceil(Math.abs(_0x4c4007(_0x2e212a.substring(0x0, 0x8).replace(/[0-9]/g, '')) / 0x10)) % _0x223b49;
          _0x981b80[_0x2e212a] = (_0x981b80[_0x2e212a] || 0x0) + 0x1;
        });
      } catch (_0x2caf20) {}
      _0x3ec0b1.nn = _0x18c719;
      ;
      _0x3ec0b1.nnv = _0x981b80;
      _0x3ec0b1.nnx = _0x3d9d84;
      _0x3ec0b1.nnvx = _0x447ed0;
      _0x3ec0b1.nk = Object.keys(Object.getOwnPropertyDescriptors(navigator));
      _0x3ec0b1.ear = _0x5d7423();
      _0x3ec0b1.mjs = window && window.performance && window.performance.memory ? window.performance.memory.jsHeapSizeLimit : 0x1;
      _0x3ec0b1.itl = _0x4f4186();
      _0x223b49 = 0x18;
      _0x18c719 = new Array(_0x223b49).fill(0x0);
      _0x981b80 = new Array(_0x223b49).fill(0x0);
      var _0x26c08f = document.querySelector("div");
      for (var _0x329fb1 in _0x26c08f) {
        var _0x4a050d = Math.abs(_0x4c4007(_0x329fb1));
        _0x19d354 = _0x4a050d % 0x7f % 0x3f % 0x4 * 0x6 + _0x4a050d % 0x6;
        _0x18c719[_0x19d354] = (_0x18c719[_0x19d354] || 0x0) + 0x1;
      }
      for (var _0x329fb1 in _0x26c08f.style) {
        var _0x4a050d = Math.abs(_0x4c4007(_0x329fb1));
        _0x19d354 = _0x4a050d % 0x7f % 0x3f % 0x4 * 0x6 + _0x4a050d % 0x6;
        _0x981b80[_0x19d354] = (_0x981b80[_0x19d354] || 0x0) + 0x1;
      }
      _0x3ec0b1.dv = _0x18c719;
      _0x3ec0b1.dvs = _0x981b80;
    } catch (_0x4e0062) {}
    var _0x223b49 = 0x8;
    var _0x18c719 = new Array(_0x223b49).fill(0x0);
    try {
      var _0x26563c = ["Times", "Times New Roman", 'tata', "toto"];
      var _0x26563c = [".Aqua Kana", ".Helvetica LT MM", ".Times LT MM", "Agency FB", "Aharoni", "Al Nile", "Aldhabi", "Algerian", "American Typewriter", 'Andalus', "Angsana New", 'AngsanaUPC', "Aparajita", "Apple Color Emoji", "Apple SD Gothic Neo", "Apple Symbols", "AppleGothic", "Arabic Transparent", "Arabic Typesetting", "Arial", "Arial Baltic", "Arial Black", "Arial CE", "Arial CYR", "Arial Greek", "Arial Hebrew", "Arial Narrow", "Arial Rounded MT Bold", "Arial TUR", "Arial Unicode MS", 'Avenir', "Avenir Black", "Avenir Book", "Avenir Next", "Avenir Next Condensed", "Avenir Next Demi Bold", "Avenir Next Heavy", "Bahnschrift", "Bangla Sangam MN", "Baskerville", "Baskerville Old Face", 'Batang', "BatangChe", "Bauhaus 93", "Bell MT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "Blackadder ITC", "Bodoni 72", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Poster Compressed", "Bodoni Ornaments", "Book Antiqua", "Bookman Old Style", "Bookshelf Symbol 7", "Bradley Hand", "Bradley Hand ITC", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Calibri", "Calibri Light", "Californian FB", "Calisto MT", "Cambria", "Cambria Math", 'Candara', "Carrois Gothic SC", "Castellar", "Centaur", "Century", "Century Gothic", "Century Schoolbook", "Chalkboard SE", 'Chalkduster', "Charter", "Chiller", "Cochin", "Colonna MT", "Comic Sans MS", "Consolas", 'Constantia', "Cooper Black", "Copperplate", "Copperplate Gothic Bold", "Corbel", "Cordia New", "CordiaUPC", "Courier", "Courier New", "Courier New Baltic", "Courier New CE", "Curlz MT", "Cutive Mono", 'DFKai-SB', "DIN Alternate", "DIN Condensed", 'Damascus', "Dancing Script", "DaunPenh", "David", "DecoType Naskh", "DejaVu Sans", "DejaVu Sans Mono", "DejaVu Serif", "Devanagari Sangam MN", 'Didot', 'DilleniaUPC', "DokChampa", "Dotum", 'DotumChe', "Droid Sans Mono", 'Ebrima', "Edwardian Script ITC", "Elephant", "Engravers MT", "Eras Bold ITC", "Estrangelo Edessa", 'EucrosiaUPC', "Euphemia", "Euphemia UCAS", "FangSong", "Farah", "Felix Titling", "Footlight MT Light", "Forte", "FrankRuehl", "Franklin Gothic Book", "Franklin Gothic Medium", "Franklin Gothic Medium Cond", "FreesiaUPC", "Freestyle Script", "French Script MT", 'Futura', 'Gabriola', "Gadugi", "Garamond", "Gautami", "Geeza Pro", 'Georgia', "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gisha", "Gloucester MT Extra Condensed", 'Goudy', "Goudy Old Style", "Goudy Stout", "Gujarati Sangam MN", 'Gulim', "GulimChe", "Gungsuh", "GungsuhChe", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heiti SC", "Heiti TC", "Helvetica", "Helvetica Neue", "High Tower Text", "Hiragino Kaku Gothic Pro W3", "Hiragino Kaku Gothic Pro W6", "Hiragino Kaku Gothic ProN W3", "Hiragino Kaku Gothic ProN W6", "Hiragino Maru Gothic Pro W4", "Hiragino Maru Gothic ProN W4", "Hiragino Mincho Pro W3", "Hiragino Mincho Pro W6", "Hiragino Mincho ProN W3", "Hiragino Mincho ProN W6", "Hiragino Sans W3", "Hiragino Sans W6", "Hiragino Sans W7", "Hoefler Text", "ITC Stone Serif", "Impact", "Imprint MT Shadow", "Informal Roman", "Ink Free", 'IrisUPC', "Iskoola Pota", "JasmineUPC", "Javanese Text", "Jokerman", "Juice ITC", "KacstArt", "KacstBook", "KacstDecorative", "KacstDigital", 'KacstFarsi', "KacstOffice", "KacstOne", 'KacstPoster', "KacstQurn", "KacstTitle", "KacstTitleL", "KaiTi", 'Kailasa', "Kalinga", "Kannada Sangam MN", 'Kartika', "Kefa", "Khmer Sangam MN", "Khmer UI", 'KodchiangUPC', "Kohinoor Bangla", "Kohinoor Devanagari", "Kohinoor Telugu", "Kokila", "Kristen ITC", "Kunstler Script", "Lao Sangam MN", "Lao UI", "LastResort", "Latha", "Leelawadee", "Levenim MT", "Liberation Mono", "Liberation Sans", "Liberation Sans Narrow", "Liberation Serif", "LilyUPC", "Lohit Telugu", "Lucida Bright", "Lucida Bright Demibold", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "Lucida Fax Demibold", "Lucida Fax Regular", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "MS Gothic", "MS Mincho", "MS Outlook", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS Reference Specialty", "MS Sans Serif", "MS Serif", "MS UI Gothic", "MT Extra", "MV Boli", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", 'Mangal', 'Marion', "Marker Felt", 'Marlett', "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Menlo", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft JhengHei UI", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft YaHei UI", "Microsoft Yi Baiti", "MingLiU", "MingLiU-ExtB", "MingLiU_HKSCS", "Miriam", 'Mishafi', 'Mistral', "Modern No. 20", 'Monaco', "Mongolian Baiti", "Monospace", "Monotype Corsiva", "MoolBoran", "Myanmar Sangam MN", "Myanmar Text", "NSimSun", "Narkisim", "Nasalization", "Niagara Engraved", "Niagara Solid", "Nirmala UI", "Noteworthy", "Noto Color Emoji", "Noto Mono", "Noto Naskh Arabic", "Noto Nastaliq Urdu", "Noto Sans", "Noto Sans Armenian", "Noto Sans Bengali", "Noto Sans Canadian Aboriginal", "Noto Sans Cherokee", "Noto Sans Devanagari", "Noto Sans Ethiopic", "Noto Sans Georgian", "Noto Sans Gujarati", "Noto Sans Gurmukhi", "Noto Sans Hebrew", "Noto Sans Kannada", "Noto Sans Khmer", "Noto Sans Lao", "Noto Sans Malayalam", "Noto Sans Myanmar", "Noto Sans Oriya", "Noto Sans Sinhala", "Noto Sans Symbols", "Noto Sans Tamil", "Noto Sans Telugu", "Noto Sans Thai", "Noto Sans Yi", "Noto Serif", 'Nyala', "OCR A Extended", "Old English Text MT", "Onyx", 'OpenSymbol', "Optima", "Oriya Sangam MN", "PMingLiU", "PMingLiU-ExtB", "Palace Script MT", 'Palatino', "Palatino Linotype", "Papyrus", "Papyrus Condensed", "Parchment", "Perpetua", "Perpetua Titling MT", "PingFang HK", "PingFang SC", "PingFang TC", "Plantagenet Cherokee", "Playbill", "Poor Richard", "Pristina", "Raavi", "Rage Italic", "Ravie", "Roboto", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "STIXGeneral", 'STIXGeneral-Bold', "STIXGeneral-Regular", 'STIXIntegralsD', "STIXIntegralsD-Bold", 'STIXIntegralsSm', "STIXIntegralsSm-Bold", "STIXIntegralsUp", "STIXIntegralsUp-Bold", "STIXIntegralsUp-Regular", 'STIXIntegralsUpD', "STIXIntegralsUpD-Bold", "STIXIntegralsUpD-Regular", "STIXIntegralsUpSm", "STIXIntegralsUpSm-Bold", 'STIXNonUnicode', "STIXNonUnicode-Bold", "STIXSizeFiveSym", "STIXSizeFiveSym-Regular", "STIXSizeFourSym", 'STIXSizeFourSym-Bold', "STIXSizeOneSym", "STIXSizeOneSym-Bold", 'STIXSizeThreeSym', "STIXSizeThreeSym-Bold", "STIXSizeTwoSym", "STIXSizeTwoSym-Bold", 'STIXVariants', "STIXVariants-Bold", "Sakkal Majalla", 'Script', "Script MT Bold", "Segoe MDL2 Assets", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Emoji", "Segoe UI Historic", "Segoe UI Semilight", "Segoe UI Symbol", "Serif", "Shonar Bangla", "Showcard Gothic", "Shruti", "SignPainter-HouseScript", "SimHei", "SimSun", "SimSun-ExtB", "Simplified Arabic", "Simplified Arabic Fixed", "Sinhala Sangam MN", "Sitka", "Small Fonts", "Snap ITC", "Snell Roundhand", 'Stencil', "Sukhumvit Set", 'Sylfaen', 'Symbol', "System Font", "Tahoma", "Tamil Sangam MN", "Telugu Sangam MN", "Tempus Sans ITC", "Thonburi", "Times", "Times New Roman", "Times New Roman Baltic", "Traditional Arabic", "Trebuchet MS", "Tunga", "Tw Cen MT", "Ubuntu Mono", "Urdu Typesetting", 'Utsaah', 'Vani', 'Verdana', "Vijaya", "Viner Hand ITC", "Vivaldi", "Vladimir Script", "Vrinda", "Webdings", "Wide Latin", "Wingdings", "Wingdings 2", "Wingdings 3", "Yu Gothic", "Zapf Dingbats", "Zapfino"];
      var _0x3a40c5 = ['serif', "sans-serif", "monospace"];
      $(document.body).append("<div id=\"font\"></div>");
      var _0x5bde9f = document.getElementById("font");
      var _0x439e9a = document.createElement("span");
      _0x439e9a.style.fontSize = "72px";
      _0x439e9a.innerText = 'A';
      var _0x5eac51 = {};
      for (var _0x436deb in _0x3a40c5) {
        var _0x4886fa = _0x3a40c5[_0x436deb];
        _0x439e9a.style.fontFamily = _0x4886fa;
        if (_0x5bde9f) {
          _0x5bde9f.appendChild(_0x439e9a);
          _0x5eac51[_0x4886fa] = {};
          _0x5eac51[_0x4886fa].offsetWidth = _0x439e9a.offsetWidth;
          _0x5eac51[_0x4886fa].offsetHeight = _0x439e9a.offsetHeight;
          _0x5bde9f.removeChild(_0x439e9a);
        }
      }
      var _0x27fca1 = {};
      for (var _0x4e86f0 in _0x26563c) {
        if (_0x4e86f0 % 0x2 != 0x0) {
          continue;
        }
        var _0x120541 = _0x26563c[_0x4e86f0];
        var _0x3b9f83 = false;
        var _0x2fcda4 = "\"" + _0x120541 + "\"";
        for (var _0x46e932 in _0x3a40c5) {
          var _0x621b30 = _0x3a40c5[_0x46e932];
          _0x439e9a.style.fontFamily = _0x2fcda4 + ',' + _0x621b30;
          if (_0x5bde9f) {
            _0x5bde9f.appendChild(_0x439e9a);
            var _0x1e10df = _0x439e9a.offsetWidth != _0x5eac51[_0x621b30].offsetWidth || _0x439e9a.offsetHeight != _0x5eac51[_0x621b30].offsetHeight;
            _0x5bde9f.removeChild(_0x439e9a);
            _0x3b9f83 = _0x3b9f83 || _0x1e10df;
            if (_0x1e10df) {
              break;
            }
          }
        }
        _0x27fca1[_0x120541] = _0x3b9f83;
      }
      $("#font").remove();
      for (var _0x19d354 in _0x27fca1) {
        if (_0x27fca1[_0x19d354]) {
          _0x19d354 = Math.ceil(Math.abs(_0x4c4007(_0x19d354.substring(0x0, 0x6)) / 0x10)) % _0x223b49;
          _0x18c719[_0x19d354] = (_0x18c719[_0x19d354] || 0x0) + 0x1;
        }
      }
      ;
      _0x3ec0b1.f = _0x18c719;
    } catch (_0x2e7598) {
      _0x3ec0b1.f = new Array(_0x223b49).fill(0x0);
      ;
    }
    var _0x439e9a = 0x1;
    try {
      var _0x18c705;
      _0x18c705 = {};
      ac = new window.AudioContext();
      _0x18c705.channelCount = ac.destination.channelCount;
      _0x18c705.channelCountMode = ac.destination.channelCountMode;
      _0x18c705.channelInterpretation = ac.destination.channelInterpretation;
      _0x18c705.maxChannelCount = ac.destination.maxChannelCount;
      _0x18c705.numberOfInputs = ac.destination.numberOfInputs;
      _0x18c705.numberOfOutputs = ac.destination.numberOfOutputs;
      _0x18c705.sampleRate = ac.sampleRate;
      ac.close();
      var _0x11f82b = 0x1;
      for (var _0x329fb1 in _0x18c705) {
        _0x439e9a += (_0x329fb1.length % 0x24 * typeof _0x18c705[_0x329fb1] == 'number' ? (_0x18c705[_0x329fb1] || 0x0) % 0x80 : (_0x18c705[_0x329fb1] + '').length) * _0x11f82b;
        _0x11f82b++;
      }
      _0x3ec0b1.ax = _0x439e9a.toString(0x24);
    } catch (_0x1f4984) {
      _0x3ec0b1.ax = '0';
    }
    var _0x439e9a = 0x1;
    try {
      var _0x1ea597 = ["audio/3gpp", 'audio/3gpp2', "audio/AMR-NB", "audio/AMR-WB", "audio/GSM", "audio/aac", 'audio/basic', "audio/flac", "audio/midi", "audio/mpeg", "audio/mp4; codecs=\"mp4a.40.2\"", "audio/mp4; codecs=\"ac-3\"", "audio/mp4; codecs=\"ec-3\"", "audio/ogg; codecs=\"flac\"", "audio/ogg; codecs=\"vorbis\"", "audio/ogg; codecs=\"opus\"", "audio/wav; codecs=\"1\"", "audio/webm; codecs=\"vorbis\"", "audio/webm; codecs=\"opus\"", 'audio/x-aiff', "audio/x-mpegurl"];
      var _0x2b07ec = document.createElement('audio');
      _0x1ea597.forEach(function (_0x8dcf75) {
        _0x439e9a += _0x8dcf75.length % 0x24 * ((!!_0x2b07ec.canPlayType && _0x2b07ec.canPlayType(_0x8dcf75)).toString().length % 0x24 + 0x1) + 0x3e8;
      });
      _0x2b07ec.remove();
    } catch (_0x5d31d2) {
      _0x439e9a = 0x0;
    }
    _0x3ec0b1.af = _0x439e9a.toString(0x24);
    _0x3ec0b1.gg = _0x5b73f8();
    _0x3ec0b1.gn = _0x3dfb0c();
    _0x3ec0b1.gf = _0x46ae89(0x1, 0x1);
    _0x3ec0b1.gd = _0x46ae89(0x0, 0x0);
    _0x3ec0b1.ge = _0x5b73f8();
    _0x3ec0b1.ggbr = _0x5d9898();
    _0x3ec0b1.ggl = _0x2b64a6();
    function _0x4f4186() {
      var _0x541700 = {};
      try {
        var _0x4dc131 = new Intl.DateTimeFormat("default").resolvedOptions();
        for (var _0x4d7dc3 in _0x4dc131) {
          _0x541700[_0x4d7dc3] = _0x4dc131[_0x4d7dc3];
        }
      } catch (_0x44f6a9) {}
      return _0x541700;
    }
    function _0x5d7423() {
      var _0x2c12a8 = [];
      try {
        undefined.v;
        _0x2c12a8.push(true);
      } catch (_0x7f46fa) {
        _0x2c12a8.push(Object.keys(Object.getOwnPropertyDescriptors(_0x7f46fa)).join(','));
        _0x2c12a8.push(_0x7f46fa.name + ',' + _0x7f46fa.message);
      }
      try {
        Array(-0x1);
        _0x2c12a8.push(true);
      } catch (_0x1ca711) {
        _0x2c12a8.push(_0x1ca711.name + ',' + _0x1ca711.message);
      }
      try {
        undefined();
        _0x2c12a8.push(true);
      } catch (_0x16592c) {
        _0x2c12a8.push(_0x16592c.name + ',' + _0x16592c.message);
      }
      try {
        Object.keys(undefined);
        _0x2c12a8.push(true);
      } catch (_0x597d4b) {
        _0x2c12a8.push(_0x597d4b.name + ',' + _0x597d4b.message);
      }
      try {
        JSON.parse('');
        _0x2c12a8.push(true);
      } catch (_0x5de29c) {
        _0x2c12a8.push(_0x5de29c.name + ',' + _0x5de29c.message);
      }
      try {
        JSON.parse('()');
        _0x2c12a8.push(true);
      } catch (_0x3fac94) {
        _0x2c12a8.push(_0x3fac94.name + ',' + _0x3fac94.message);
      }
      try {
        0x0.toString(0x0);
        _0x2c12a8.push(true);
      } catch (_0x4eeb2e) {
        _0x2c12a8.push(_0x4eeb2e.name + ',' + _0x4eeb2e.message);
      }
      try {
        eval('var _0x324bc7 = _0xfe26ce;Math[_0x324bc7(632)](rrf43ifn30nm340gmn340fmj349j);');
        _0x2c12a8.push(true);
      } catch (_0x4190e5) {
        _0x2c12a8.push(_0x4190e5.name + ',' + _0x4190e5.message);
      }
      try {
        eval("1/-0.s");
        _0x2c12a8.push(true);
      } catch (_0x744716) {
        _0x2c12a8.push(_0x744716.name + ',' + _0x744716.message);
      }
      try {
        eval("function(){}");
        _0x2c12a8.push(true);
      } catch (_0x128c65) {
        _0x2c12a8.push(_0x128c65.name + ',' + _0x128c65.message);
      }
      try {
        eval("function a();");
        _0x2c12a8.push(true);
      } catch (_0x52889c) {
        _0x2c12a8.push(_0x52889c.name + ',' + _0x52889c.message);
      }
      try {
        eval("function a()");
        _0x2c12a8.push(true);
      } catch (_0x3e62b2) {
        _0x2c12a8.push(_0x3e62b2.name + ',' + _0x3e62b2.message);
      }
      var _0x55c9c6 = new Array(0x10).fill(0x0);
      _0x2c12a8.map(function (_0x2779ab) {
        return _0x2779ab.replace(/\,/g, " ");
      }).join(" ").split(" ").forEach(function (_0x42fcc7) {
        _0x42fcc7 = Math.abs(_0x4c4007(_0x42fcc7)) % 0x10;
        _0x55c9c6[_0x42fcc7] = (_0x55c9c6[_0x42fcc7] || 0x0) + 0x1;
      });
      return _0x55c9c6;
    }
    function _0x3dfb0c() {
      try {
        var _0x29f383 = document.createElement('canvas');
        _0x29f383.style.display = "none";
        var _0x5402a4;
        var _0x3a640a;
        _0x5402a4 = _0x29f383.getContext("webgl") || _0x29f383.getContext("experimental-webgl");
        _0x3a640a = _0x5402a4.getExtension('WEBGL_debug_renderer_info');
        _0x29f383.remove();
        return _0x5402a4.getParameter(_0x3a640a.UNMASKED_RENDERER_WEBGL);
      } catch (_0x226c59) {
        return 'x';
      }
    }
    function _0x5d9898() {
      try {
        var _0x5893f6 = document.createElement("canvas");
        _0x5893f6.height = 0x8;
        _0x5893f6.width = 0x10;
        var _0x58f13b = _0x5893f6.getContext('2d');
        var _0x5c5c9a = _0x5893f6.width;
        for (var _0x463c82 = 0x0; _0x463c82 < 0x10; _0x463c82++) {
          _0x58f13b.fillStyle = '#0' + _0x463c82.toString(0x10) + '0' + _0x463c82.toString(0x10) + '0' + _0x463c82.toString(0x10);
          _0x58f13b.fillRect(_0x463c82 * (_0x5c5c9a / 0x10), 0x0, _0x5c5c9a / 0x10, _0x5893f6.height);
        }
        var _0x512db4 = atob(_0x5893f6.toDataURL().split(',')[0x1]);
        _0x5893f6.remove();
        var _0x5e82e1 = 0x0;
        var _0x2d599a = new Array(0x9).fill(0x0);
        for (var _0x463c82 = 0x28; _0x463c82 < _0x512db4.length; _0x463c82++) {
          _0x5e82e1 += _0x512db4.charCodeAt(_0x463c82);
          _0x2d599a[Math.ceil(_0x512db4.charCodeAt(_0x463c82) / 0x40) || 0x0]++;
        }
        return _0x2d599a.reduce(function (_0xabfb02, _0x589d68) {
          return _0xabfb02 + _0x589d68;
        }, 0x0) / 0x8;
      } catch (_0xef0b36) {
        return 0x0;
      }
    }
    function _0x5b73f8() {
      try {
        var _0x42aa6b = document.createElement("canvas");
        _0x42aa6b.height = 0x3c;
        _0x42aa6b.width = 0x190;
        var _0x39d65c = _0x42aa6b.getContext('2d');
        _0x42aa6b.style.display = 'inline';
        _0x39d65c.textBaseline = 'alphabetic';
        _0x39d65c.fillStyle = "#f60";
        _0x39d65c.fillRect(0x7c, 0x1, 0x3c, 0x16);
        _0x39d65c.fillStyle = "#062";
        _0x39d65c.font = "12pt nx-reaa-fott-124";
        _0x39d65c.fillText("thisTهلا😀️🐺️😍️, 😃", 0x1, 0x12);
        _0x39d65c.fillStyle = "rgba(152, 214, 0, 0.7)";
        _0x39d65c.font = "18pt Arial";
        _0x39d65c.fillText("thisTهلا😀️🐺️😍️, 😃", 0x8, 0x1c);
        var _0x80f705 = _0x325d1e(_0x42aa6b.toDataURL());
        _0x42aa6b.remove();
        if (_0x80f705.length == 0x0) {
          return _0x325d1e("nothing!") + '_' + _0x494436();
        }
        ;
        return _0x80f705 + '_' + _0x494436();
      } catch (_0x3eca61) {
        return _0x325d1e('err!') + '_' + _0x494436();
      }
    }
    function _0x494436() {
      try {
        var _0x397286 = document.createElement("canvas");
        _0x397286.style.display = "none";
        _0x397286.width = 0xa0;
        _0x397286.height = 0x16;
        var _0x5dce9a = _0x397286.getContext('2d');
        _0x5dce9a.textBaseline = 'top';
        _0x5dce9a.font = "14px 'Arial'";
        _0x5dce9a.textBaseline = 'alphabetic';
        _0x5dce9a.fillStyle = "#f60";
        _0x5dce9a.fillRect(0x28, 0x1, 0x28, 0x12);
        _0x5dce9a.stroke();
        _0x5dce9a.fillStyle = "#069";
        _0x5dce9a.fillText("thisTهلا😀️🐺️😍️", 0x2, 0xf);
        _0x5dce9a.fillStyle = "rgba(102, 204, 0, 0.7)";
        _0x5dce9a.fillText("thisTهلا😀️🐺️😍️", 0x4, 0x11);
        var _0x4bb530 = _0x325d1e(_0x397286.toDataURL());
        _0x397286.remove();
        if (_0x4bb530.length == 0x0) {
          return _0x325d1e("nothing!");
        }
        ;
        return _0x4bb530;
      } catch (_0x28a731) {
        return _0x325d1e('err!');
      }
    }
    function _0x46ae89(_0x271c73, _0x30fbb8) {
      try {
        var _0x49acd4 = document.createElement("canvas");
        _0x49acd4.style.display = "none";
        _0x49acd4.width = _0x271c73;
        _0x49acd4.height = _0x30fbb8;
        var _0x37efcb = _0x49acd4.getContext('2d');
        var _0x3a4bc3 = _0x325d1e(_0x49acd4.toDataURL());
        _0x49acd4.remove();
        typeof _0x37efcb;
        if (_0x3a4bc3.length == 0x0) {
          return _0x325d1e("nothing!");
        }
        ;
        return _0x3a4bc3;
      } catch (_0x4345d6) {
        return _0x325d1e("err!");
      }
    }
    var _0x59388d = 0x0;
    var _0x2774b2 = setInterval(() => {
      _0x59388d++;
      if (_0x59388d == 0x5 || _0x3ec0b1.a != null && _0x3ec0b1.aa != null) {
        clearInterval(_0x2774b2);
        _0x5e13c2();
      }
    }, 0x32);
  }
  ;
  function _0x371995(_0x5a21b6, _0x1405bf) {
    var _0x2549bb = document.querySelector(_0x5a21b6);
    var _0x59f3f8 = '';
    if (_0x2549bb == null) {
      return {};
    }
    if (_0x2549bb.classList.contains('label')) {
      _0x59f3f8 = "label";
    }
    if (_0x2549bb.classList.contains("btn")) {
      _0x59f3f8 = "btn";
    }
    if (_0x2549bb.classList.contains("panel")) {
      _0x59f3f8 = "panel";
    }
    _0x2549bb.classList.remove(_0x59f3f8 + '-primary');
    _0x2549bb.classList.remove(_0x59f3f8 + "-danger");
    _0x2549bb.classList.remove(_0x59f3f8 + "-warning");
    _0x2549bb.classList.remove(_0x59f3f8 + "-info");
    _0x2549bb.classList.remove(_0x59f3f8 + "-success");
    _0x2549bb.classList.add(_0x59f3f8 + '-' + _0x1405bf);
    return _0x2549bb;
  }
  function _0x2ceb87(_0x427303, _0xc6546b) {
    _0x371995('#loginstat', _0x427303).innerText = _0xc6546b;
  }
  function _0x26211d() {
    var _0x1a72ad = {
      "topic": $(".stopic").val(),
      "msg": $(".smsg").val(),
      "ucol": $(".scolor").attr('v'),
      mcol: $(".mcolor").attr('v'),
      bg: $(".sbg").attr('v')
    };
    _0x360820("setprofile", _0x1a72ad);
  }
  function _0x3813d0(_0x5defd3, _0xa3d7cd, _0x4bdc06) {
    if (_0x10ed5f[_0x5defd3] != null) {
      return;
    }
    if (_0x4a9a27 || _0xa3d7cd.pic == "pic.webp" && typeof user_pic == "string") {
      _0xa3d7cd.pic = user_pic;
    }
    if (_0xa3d7cd.s == true) {
      _0x49c686[_0xa3d7cd.id] = _0xa3d7cd;
      _0x177ecd++;
    }
    var _0x1f071a = $(_0x51f1a5);
    _0xa3d7cd.h = '#' + (Math.abs(_0x4c4007(_0xa3d7cd.lid || 'ff')) % 0x7f % 0x64).toString().padStart(0x2, '0');
    _0x1f071a[0x0].classList.add("uid" + _0x5defd3);
    _0x1f071a[0x0].classList.add("lid" + _0xa3d7cd.lid);
    _0x1f071a[0x0].setAttribute("onclick", "upro('" + _0xa3d7cd.id + "');");
    _0x1f071a.find(".uhash").text(_0xa3d7cd.h);
    _0x1f071a[0x0].setAttribute('uid', _0x5defd3);
    _0x10ed5f[_0x5defd3] = _0x1f071a;
    if (_0xa3d7cd.co == '--' || _0xa3d7cd.co == null || _0xa3d7cd.co == 'A1' || _0xa3d7cd.co == 'A2' || _0xa3d7cd.co == 'EU' || _0xa3d7cd.co == 'T1') {
      _0x1f071a.find('.co').attr("src", 'flags/--.png');
    } else {
      _0x1f071a.find('.co').attr("src", "flags/" + _0xa3d7cd.co + ".png");
    }
    if (_0x4bdc06) {
      return _0x1f071a;
    } else if (_0xa3d7cd.s != true) {
      $("#users").append(_0x1f071a);
    }
  }
  function _0x55bd08(_0xb81e0f, _0x19ff87, _0x52a7d9) {
    var _0x247b45 = _0x19ff87 || _0x5bde87[_0xb81e0f];
    if (_0x247b45 == null) {
      return;
    }
    _0x247b45.lupd = new Date().getTime();
    if (_0x4a9a27 || _0x247b45.pic == "pic.webp" && typeof user_pic == "string") {
      _0x247b45.pic = user_pic;
    }
    var _0x1084c7 = _0x52a7d9 == null || _0x52a7d9.ico != null || typeof _0x52a7d9.b != "undefined" || _0x52a7d9.power != null;
    var _0x20adfa = _0x1084c7 ? _0x19af4a(_0x247b45) : '';
    var _0x166c21 = "imgs/s" + _0x247b45.stat + ".png";
    if (_0x247b45.s) {
      _0x166c21 = 'imgs/s4.png';
    }
    if (_0xb81e0f == myid) {
      var _0x490b60 = _0x247b45.pic.split('.');
      _0x490b60[_0x490b60.length - 0x1] = 'b.' + _0x490b60[_0x490b60.length - 0x1];
      _0x490b60 = _0x490b60.join('.');
      if (_0x247b45.pic == 'pic.webp') {
        _0x490b60 = "pic-o.webp";
      }
      $('.spic').css("background-image", 'url(' + _0x490b60 + ')');
      $(".stopic").val(_0x226da2($('<div>' + _0x247b45.topic + '</div>')));
      $('.smsg').val(_0x226da2($("<div>" + _0x247b45.msg + "</div>")));
      $('.scolor').css("background-color", _0x247b45.ucol || "#000000").attr('v', _0x247b45.ucol || '#000000');
      $(".mcolor").css("background-color", _0x247b45.mcol || '#000000').attr('v', _0x247b45.mcol || "#000000");
      $(".sbg").css('background-color', _0x247b45.bg || '').attr('v', _0x247b45.bg || '');
    }
    if (_0x247b45.msg == '') {
      _0x247b45.msg = '..';
    }
    if (mic.indexOf(_0xb81e0f) != -0x1 && (_0x52a7d9 == null || _0x52a7d9.topic || _0x1084c7 || _0x52a7d9.pic)) {
      var _0x1f6c84 = $("#mic [uid='" + _0xb81e0f + "'] .u");
      _0x1f6c84.find('span').text(_0x247b45.topic);
      if (_0x1084c7) {
        _0x1f6c84.find("img").attr("src", _0x20adfa);
      }
      _0x1f6c84.parent().css("background-image", "url(" + _0x247b45.pic + ')');
    }
    var _0x6a7678 = _0x10ed5f[_0xb81e0f];
    if (_0x52a7d9 == null || _0x52a7d9 != null && _0x52a7d9.ucol != null) {
      var _0x68f38c = _0x304156['#' + (_0x247b45.ucol || '#000000') + '|-30'] || _0x4a74da(_0x247b45.ucol || "#000000", -0x1e);
      _0x6a7678.css({
        'background-color': _0x68f38c == '' || _0x68f38c == '#000000' || true ? '' : _0x68f38c + '00'
      });
    }
    if (_0x52a7d9 == null || _0x52a7d9 != null && _0x52a7d9.stat != null) {
      _0x6a7678.find(".ustat")[0x0].setAttribute("src", _0x166c21);
    }
    if (_0x314954(_0x247b45)) {
      _0x6a7678.find(".muted").toggleClass("fa-ban", true).show();
    } else {
      _0x6a7678.find('.muted').toggleClass('fa-ban', false).hide();
    }
    if (_0x52a7d9 == null || _0x52a7d9.power != null) {
      _0x247b45.v = (_0x3b0c7d[_0x247b45.power] || _0x56b63c(_0x247b45.power)).rank || 0x0;
    }
    if (_0x1084c7) {
      if (_0x20adfa != '') {
        _0x6a7678.find(".u-ico").attr('src', _0x20adfa);
      } else {
        _0x6a7678.find(".u-ico").removeAttr("src");
      }
    }
    if (_0x52a7d9 == null || _0x52a7d9.stat != null || _0x52a7d9.topic != null || _0x52a7d9.ucol != null) {
      _0x6a7678.find('.u-topic').html(_0x247b45.topic).css({
        'background-color': _0x247b45.bg,
        'color': _0x247b45.ucol
      });
    }
    if (_0x52a7d9 == null || _0x52a7d9 != null && _0x52a7d9.msg != null) {
      _0x6a7678.find(".u-msg").html(_0x247b45.msg);
    }
    if (_0x52a7d9 == null || _0x52a7d9 != null && _0x52a7d9.pic != null) {
      _0x6a7678.find(".u-pic").css('background-image', "url(\"" + _0x247b45.pic + "\")");
    }
    _0x6a7678 = $('#c' + _0xb81e0f);
    if (_0x6a7678.length) {
      if (_0x1084c7 && _0x20adfa != '') {
        _0x6a7678.find(".u-ico").attr("src", _0x20adfa);
      }
      _0x6a7678.find(".ustat").attr("src", _0x166c21);
      _0x6a7678.find(".u-topic").html(_0x247b45.topic).css({
        'background-color': _0x247b45.bg,
        'color': _0x247b45.ucol
      });
      _0x6a7678.find(".u-pic").css("background-image", "url(\"" + _0x247b45.pic + "\")");
      _0x6a7678 = $('.w' + _0xb81e0f).find(".head .uzr");
      _0x6a7678.find('.u-topic').html(_0x247b45.topic).css({
        'background-color': _0x247b45.bg,
        'color': _0x247b45.ucol
      });
      _0x6a7678.find(".u-pic").css("background-image", "url(\"" + _0x247b45.pic + "\")");
      _0x6a7678.find(".ustat").attr("src", _0x166c21);
      if (_0x1084c7 && _0x20adfa != '') {
        _0x6a7678.find(".u-ico").attr("src", _0x20adfa);
      }
    }
    if (_0x1e1f24 != null && _0x1e1f24.uid == _0xb81e0f) {
      var _0x38f02a = $("#call");
      _0x38f02a.find('.u-pic').css("background-image", "url('" + _0x247b45.pic + "')");
      _0x38f02a.find(".u-topic").css("color", _0x247b45.ucol).css("background-color", _0x247b45.bg || "#fafafa").html(_0x247b45.topic);
      if (_0x1084c7) {
        _0x38f02a.find(".u-ico").attr("src", _0x19af4a(_0x247b45) || '');
      }
    }
  }
  var _0x193809 = false;
  var _0x26f98c = '';
  function _0x49be55() {
    if (usea.val() != _0x26f98c) {
      _0x26f98c = usea.val();
      var _0x4611ca = _0x1a65e2(_0x26f98c);
      if (_0x26f98c != '') {
        usea.removeClass('bg');
      } else {
        usea.addClass('bg');
      }
      if (_0x26f98c == '') {
        $("#users").find(".uzr").css("display", '');
      } else {
        $("#users").find(".uzr").css("display", "none");
        var _0x276379 = _0x26f98c.split('ـ').join('').toLowerCase();
        for (var _0xe083d0 = 0x0; _0xe083d0 < _0x344b80.length; _0xe083d0++) {
          var _0x50ed3e = _0x344b80[_0xe083d0];
          if (_0x50ed3e.topic.split('ـ').join('').toLowerCase().indexOf(_0x276379) != -0x1 || _0x50ed3e.h.indexOf(_0x26f98c) == 0x0 || _0x50ed3e.h.indexOf(_0x26f98c) == 0x1 || _0x50ed3e.h.indexOf(_0x4611ca) == 0x0 || _0x50ed3e.h.indexOf(_0x4611ca) == 0x1) {
            _0x10ed5f[_0x50ed3e.id][0x0].style.display = '';
          }
        }
      }
    }
  }
  var _0x4fcd91 = '';
  function _0x176160() {
    if (rsea.val() != _0x4fcd91) {
      _0x4fcd91 = rsea.val();
      var _0x425583 = _0x1a65e2(_0x4fcd91);
      if (_0x4fcd91 != '') {
        rsea.removeClass('bg');
      } else {
        rsea.addClass('bg');
      }
      if (_0x4fcd91 == '') {
        $("#rooms").find('.room').css("display", '');
      } else {
        for (var _0x643394 = 0x0; _0x643394 < _0x10c3bd.length; _0x643394++) {
          var _0x154767 = _0x10c3bd[_0x643394];
          if (_0x154767.h == _0x4fcd91 || _0x154767.h == '#' + _0x4fcd91 || _0x154767.h == _0x425583 || _0x154767.h == '#' + _0x425583 || _0x154767.topic.split('ـ').join('').toLowerCase().indexOf(_0x4fcd91) != -0x1) {
            _0x154767.ht.show();
          } else {
            _0x154767.ht.hide();
          }
        }
      }
    }
  }
  var _0x589665 = "٠١٢٣٤٥٦٧٨٩".split('');
  var _0x1bf3fa = '0123456789'.split('');
  function _0x1a65e2(_0x277d66) {
    _0x277d66 = _0x277d66.replace(/[٠١٢٣٤٥٦٧٨٩]/g, _0x3e8095 => _0x1bf3fa[_0x589665.indexOf(_0x3e8095)]);
    return _0x277d66;
  }
  function _0x47a17e() {
    for (var _0x5da7dd in _0x49c686) {
      var _0x3cb9e5 = _0x49c686[_0x5da7dd];
      if (_0x10ed5f[_0x3cb9e5.id] == null) {
        continue;
      }
      var _0x206fb8 = _0x56b63c(_0x3cb9e5.power) || {
        'rank': 0x0
      };
      if (_0x3cb9e5.s && _0x206fb8.rank > (_0x4b1e09.rank || 0x0)) {
        _0x10ed5f[_0x3cb9e5.id][0x0].remove();
        _0x3cb9e5.si = true;
      } else if (_0x10ed5f[_0x3cb9e5.id][0x0].parentElement == null) {
        if (_0x3cb9e5.si == true) {
          _0x3cb9e5.lupd = _0x1244ab + 0x2;
        }
        $("#users").append(_0x10ed5f[_0x3cb9e5.id]);
        _0x193809 = true;
        delete _0x3cb9e5.si;
      }
    }
  }
  function _0x56b242(_0x921e2c) {
    if (_0x314954(_0x5bde87[_0x921e2c.data.uid])) {
      _0x18dfc7('not', {
        'msg': "لا يمكنك الدردشه مع شخص قمت بـ تجاهله\nيرجى إلغاء التجاهل"
      });
      return;
    }
    var _0x1da3e8 = $(".tbox" + _0x921e2c.data.uid).val();
    $(".tbox" + _0x921e2c.data.uid).val('');
    $(".tbox" + _0x921e2c.data.uid).focus();
    if (_0x1da3e8 == "%0A" || _0x1da3e8 == '%0a' || _0x1da3e8 == '' || _0x1da3e8 == "\n") {
      return;
    }
    _0x360820('pm', {
      'msg': _0x1da3e8,
      'id': _0x921e2c.data.uid
    });
  }
  function _0x5c14ff() {
    var _0x5a2d07 = $("#mnot");
    _0x5a2d07.find('.rsave').show().off().click(function () {
      _0x5a2d07.modal('hide');
      var _0x13fa78 = _0x5a2d07.find("textarea").val();
      if (_0x13fa78 == '' || _0x13fa78 == null) {
        return;
      }
      _0x13fa78 = _0x13fa78.split("\n").join(" ");
      if (_0x13fa78 == "%0A" || _0x13fa78 == "%0a" || _0x13fa78 == '' || _0x13fa78 == "\n") {
        return;
      }
      if (_0x5a2d07.find('.ispp').is(':checked')) {
        _0x360820("ppmsg", {
          'msg': _0x13fa78
        });
      } else {
        _0x360820("pmsg", {
          'msg': _0x13fa78
        });
      }
    });
    _0x5a2d07.modal({
      'title': "ffff"
    });
    if (_0x4b1e09.ppmsg != true) {
      _0x5a2d07.find(".ispp").attr("disabled", true).prop('checked', false);
    } else {
      _0x5a2d07.find('.ispp').attr("disabled", false).prop("checked", false);
    }
    _0x5a2d07.find("textarea").val('');
    _0x5a2d07.find('.emobox').off().click(function () {
      $(this).blur();
      _0x58bcf4(this, _0x47bb01, false).css("max-height", "310px").css("left", '');
    });
  }
  function _0x1309ab(_0x54ea91) {
    var _0x426cbd = $("#mmnot");
    _0x426cbd.find(".rsave").show().off().click(function () {
      _0x426cbd.modal("hide");
      var _0x53241b = _0x426cbd.find("textarea").val();
      if (_0x53241b == '' || _0x53241b == null) {
        return;
      }
      _0x53241b = _0x53241b.split("\n").join(" ");
      if (_0x53241b == '%0A' || _0x53241b == "%0a" || _0x53241b == '' || _0x53241b == "\n") {
        return;
      }
      _0x54ea91(_0x53241b);
    });
    _0x426cbd.modal();
    _0x426cbd.find("textarea").val('').focus();
    _0x426cbd.find('.emobox').off().click(function () {
      $(this).blur();
      _0x58bcf4(this, _0x47bb01, false).css("max-height", '310px').css('left', '');
    });
  }
  function _0x58edde(_0x827ccc) {
    return eval(_0x827ccc);
  }
  function _0x5ff2b8(_0x597d42) {
    var _0x33abaf = $(_0x597d42 || "#tbox");
    var _0x1b9f19 = _0x33abaf.val().split("\n").join(" ");
    if (0x0 && _0x5bde87[myid].rep < 0x0) {
      _0x18dfc7("not", {
        'msg': "الكتابه في العام تتطلب 0 إعجاب"
      });
      _0x33abaf.val('');
      return;
    }
    _0x33abaf.val('');
    _0x33abaf.focus();
    if (_0x1b9f19 == "%0A" || _0x1b9f19 == "%0a" || _0x1b9f19 == '' || _0x1b9f19 == "\n") {
      return;
    }
    $(".ppop .reply").parent().remove();
    _0x360820("msg", {
      'msg': _0x1b9f19,
      'mi': replyId != null && replyId.indexOf('.mi') != -0x1 ? replyId.replace('.mi', '') : undefined
    });
    if (replyId != null) {
      replyId = null;
    }
  }
  function _0x56b63c(_0x36c165) {
    if (_0x3b0c7d == null) {
      return {
        'ico': ''
      };
    }
    if (_0x3b0c7d[_0x36c165] != null) {
      return _0x3b0c7d[_0x36c165];
    }
    for (var _0x53b6d = 0x0; _0x53b6d < _0x3b0c7d.length; _0x53b6d++) {
      if (_0x3b0c7d[_0x53b6d].name == _0x36c165) {
        return _0x3b0c7d[_0x53b6d];
      }
    }
    var _0x3edea9 = JSON.parse(JSON.stringify(_0x3b0c7d[0x0] || {}));
    var _0x14b516 = Object.keys(_0x3edea9);
    for (var _0x53b6d = 0x0; _0x53b6d < _0x14b516.length; _0x53b6d++) {
      switch (true) {
        case typeof _0x3edea9[_0x14b516[_0x53b6d]] == "number":
          _0x3edea9[_0x14b516[_0x53b6d]] = 0x0;
          break;
        case typeof _0x3edea9[_0x14b516[_0x53b6d]] == "string":
          _0x3edea9[_0x14b516[_0x53b6d]] = '';
          break;
        case typeof _0x3edea9[_0x14b516[_0x53b6d]] == "boolean":
          _0x3edea9[_0x14b516[_0x53b6d]] = false;
          break;
      }
    }
    _0x3edea9.name = _0x36c165;
    _0x3b0c7d[_0x36c165] = _0x3edea9;
    return _0x3edea9;
  }
  function _0x19af4a(_0x3cc9bf, _0x1f32b1) {
    if (_0x4a9a27) {
      return '';
    }
    if (_0x3cc9bf.b != null && _0x3cc9bf.b != '') {
      return "sico/" + _0x3cc9bf.b;
    }
    var _0x1ee625 = '';
    _0x1ee625 = _0x1f32b1 || (_0x56b63c(_0x3cc9bf.power) || {
      'ico': ''
    }).ico || '';
    if (_0x1ee625 != '') {
      _0x1ee625 = "sico/" + _0x1ee625;
    }
    if (_0x1ee625 == '' && (_0x3cc9bf.ico || '') != '') {
      _0x1ee625 = "dro3/" + _0x3cc9bf.ico.replace("dro3/", '');
    }
    return _0x1ee625.replace("dro3/sico", "sico/");
  }
  var _0x51f1a5 = '*';
  var _0xe60c30 = '*';
  var _0x5dd909 = '*';
  function _0x4249cd(_0x423922) {
    var _0x576d4e = '';
    var _0x30451a = rcach[_0x423922];
    if (_0x30451a == null) {
      _0x18dfc7('not', {
        'msg': "الغرفه غير موجوده"
      });
      return;
    }
    if (_0x4b1e09.rjoin != true) {
      if (_0x30451a.needpass) {
        _0x576d4e = prompt("كلمه المرور؟", '');
        if (_0x576d4e == '') {
          return;
        }
      }
    }
    _0x360820("rjoin", {
      'id': _0x423922,
      'pwd': _0x576d4e
    });
  }
  var _0x36be4e = '*';
  function _0x5f50a9(_0x5b1e93) {
    if (_0x5b1e93.indexOf('ف') == -0x1) {
      return _0x5b1e93;
    }
    var _0x46b1f5 = 0x0;
    var _0x12acc3 = _0x5b1e93.replace("\n", '').split(" ");
    var _0x29e6cf = _0x12acc3.length;
    for (var _0x401314 = 0x0; _0x401314 < _0x29e6cf && _0x46b1f5 < 0x8; _0x401314++) {
      if (_0x12acc3[_0x401314][0x0] == 'ف' && _0x1c8227[_0x12acc3[_0x401314]] != null) {
        _0x46b1f5++;
        _0x5b1e93 = _0x5b1e93.replace(_0x12acc3[_0x401314], "<img src=\"emo/" + _0x1c8227[_0x12acc3[_0x401314]] + "\" class=\"emoi\">");
      }
    }
    return _0x5b1e93;
  }
  function _0x16340a() {
    $.each($('.tago'), function (_0x8cd357, _0x18a4ed) {
      _0x18a4ed = $(_0x18a4ed);
      _0x18a4ed[0x0].innerText = _0x149c76(parseInt(_0x18a4ed.attr("ago") || 0x0));
    });
  }
  function _0x149c76(_0xff7c55) {
    var _0x53eeca = new Date().getTime() - _0xff7c55;
    var _0x427bd5 = Math.abs(_0x53eeca) / 0x3e8;
    if (_0x427bd5 < 0x3b) {
      "الآن";
    }
    _0x427bd5 = _0x427bd5 / 0x3c;
    if (_0x427bd5 < 0x3b) {
      return parseInt(_0x427bd5) + 'د';
    }
    _0x427bd5 = _0x427bd5 / 0x3c;
    if (_0x427bd5 < 0x18) {
      return parseInt(_0x427bd5) + 'س';
    }
    _0x427bd5 = _0x427bd5 / 0x18;
    if (_0x427bd5 < 0x1e) {
      return parseInt(_0x427bd5) + 'ي';
    }
    _0x427bd5 = _0x427bd5 / 0x1e;
    return parseInt(_0x427bd5) + 'ش';
  }
  function _0x2198de(_0x1c8e87) {
    if (_0x1c8e87.indexOf('you') != -0x1) {
      return (_0x1c8e87.match(/([\w\-]{11})/g) || [])[0x0];
    }
    return null;
  }
  var _0x207db3 = null;
  function _0x2df5f6(_0x32d1d9, _0x27b8e1) {
    if (_0x207db3 && _0x207db3.length) {
      var _0x56ae74 = _0x207db3[0x0].src;
      if (typeof _0x56ae74 == "string") {
        _0x56ae74 = _0x56ae74.split('/').pop();
        if (typeof _0x56ae74 == "string" && _0x56ae74.length == 0xb) {
          $("<button onclick=\"ytube(&quot;https://www.youtube.com/embed/" + _0x56ae74 + "&quot;,this);\" style=\"font-size:40px!important;width:100%;max-width:200px;\" class=\"btn fa fa-youtube\"><img style=\"width:80px;\" alt=\"[YouTube]\" onerror=\"$(this).parent().remove();\" src=\"https://img.youtube.com/vi/" + _0x56ae74 + "/0.jpg\"></button>").insertAfter(_0x207db3);
          _0x207db3.remove();
        }
      }
    }
    _0x207db3 = $("<iframe style=\"max-width:340px;width:99%\" height=\"180\" src=\"" + _0x32d1d9 + "\" frameborder=\"0\" allowfullscreen></iframe>");
    _0x207db3.insertAfter($(_0x27b8e1));
    $(_0x27b8e1).remove();
  }
  function _0x507d3a(_0x435c82, _0x4b9331) {
    var _0x22e29c = $('#rpl');
    var _0x4abd2c = $($(_0x435c82)[0x0].outerHTML);
    _0x22e29c.find(".modal-body .rmsg").html(_0x4abd2c);
    var _0x599780 = _0x4abd2c.find(".reply:eq(0)");
    _0x599780.remove();
    _0x4abd2c.find('.breply,.blike').remove();
    _0x22e29c.find('.r').empty().append(_0x599780.css({
      'max-height': '',
      'height': "100%"
    }));
    _0x22e29c.find(".modal-body .rmsg").css('border-bottom', "2px solid black");
    _0x22e29c.find(".emobox").off().click(function () {
      $(this).blur();
      var _0x40cf4e = $(this).offset();
      var _0x5d1fa = _0x58bcf4(this, _0x47bb01, false);
      _0x5d1fa.css({
        'left': '',
        'top': Math.max(0x0, _0x40cf4e.top - $(_0x5d1fa).height())
      });
    });
    _0x22e29c.find(".sndpm").off().click(function (_0x2701a7) {
      _0x2701a7.preventDefault();
      if (_0x4b9331 == ".tboxbc") {
        replyId = _0x435c82;
        _0x16715a(false, null, _0x22e29c.find('.tbox'));
      }
      if (_0x4b9331 == "#tbox") {
        replyId = _0x435c82;
        _0x5ff2b8(_0x22e29c.find(".tbox"));
      }
    });
    _0x22e29c.find(".tbox").val('').off().keyup(function (_0x88caf1) {
      if (_0x88caf1.keyCode == 0xd) {
        _0x88caf1.preventDefault();
        if (_0x4b9331 == ".tboxbc") {
          replyId = _0x435c82;
          _0x16715a(false, null, _0x22e29c.find(".tbox"));
        }
        if (_0x4b9331 == "#tbox") {
          replyId = _0x435c82;
          _0x5ff2b8(_0x22e29c.find(".tbox"));
        }
      }
    });
    _0x22e29c.modal();
    _0x22e29c.find(".r .reply").scrollTop(_0x22e29c.find(".r .reply")[0x0].scrollHeight);
  }
  function _0x558970(_0x50dce3, _0x48435d) {
    var _0x4c08ec = $(_0x36be4e);
    var _0x3defe1 = _0x5bde87[_0x48435d.uid];
    if (_0x3defe1 != null) {
      _0x48435d.topic = _0x3defe1.topic;
      _0x48435d.pic = _0x3defe1.pic;
      _0x48435d.ucol = _0x3defe1.ucol;
      _0x48435d.bg = _0x3defe1.bg;
    }
    var _0xdba138 = new Date().getTime() - _0x48435d.t;
    if (_0xdba138 < 0x0) {
      _0x48435d.t += _0xdba138;
    }
    if (_0x48435d.rt) {
      _0x48435d.msg += "<div class=\"fl fa fa-sign-" + (_0x48435d.nr == true ? "out" : 'in') + " btn btn-primary dots roomh corner minix\" style=\"margin-left:-4px;padding:4px;max-width:180px;min-width:100px;\" onclick=\"rjoin('" + _0x48435d.rid + "')\">" + _0x48435d.rt + "</div>";
    }
    _0x4c08ec.find(".u-pic").css("background-image", "url(\"" + _0x48435d.pic + "\")").attr("onclick", "upro('" + _0x48435d.uid + "');");
    _0x4c08ec.find('.tago').attr('ago', _0x48435d.t).text(_0x149c76(_0x48435d.t));
    _0x4c08ec.find('.u-topic').html(_0x48435d.topic).css("color", _0x48435d.ucol);
    _0x48435d.msg = _0x5f50a9(_0x48435d.msg);
    var _0x33a96c = '';
    ;
    if (_0x50dce3 != '#d2' && (_0x33a96c = _0x2198de(_0x48435d.msg))) {
      var _0x29aff8 = _0x48435d.msg.match(/(https?:\/\/|www.|\w+\.)[^\s]+/g);
      if (_0x29aff8 && _0x29aff8.length) {
        _0x48435d.msg = _0x48435d.msg.replace(_0x29aff8[0x0], "<button onclick='ytube(\"https://www.youtube.com/embed/" + _0x33a96c + "\",this);' style='font-size:40px!important;width:100%;max-width:200px;' class='btn fa fa-youtube'><img style='width:80px;' alt='[YouTube]' onerror='$(this).parent().remove();' src='https://img.youtube.com/vi/" + _0x33a96c + "/0.jpg' ></button>");
      }
    }
    _0x4c08ec.find(".u-msg").html(_0x48435d.msg).css('color', _0x48435d.mcol).append(_0x4c08ec.find(".d-flex.fr"));
    if (_0x48435d["class"] != null) {
      _0x4c08ec.addClass(_0x48435d["class"]);
    }
    if (_0x3defe1 != null) {
      var _0x1d8636 = _0x19af4a(_0x3defe1);
      if (_0x1d8636 != '') {
        _0x4c08ec.find(".u-ico").attr("src", _0x1d8636);
      }
      ;
      _0x4c08ec.find('.u-topic').css({
        'color': _0x3defe1.ucol,
        'background-color': _0x3defe1.bg
      });
      _0x4c08ec.addClass("lid" + _0x3defe1.lid);
    } else {
      _0x4c08ec.find('.u-ico').remove();
      _0x4c08ec.find(".u-topic").css({
        'color': _0x48435d.ucol || "#000",
        'background-color': _0x48435d.bg || ''
      });
    }
    var _0x573b3e = _0x4a74da(_0x48435d.ucol || "#000000", -0x1e);
    _0x4c08ec.css({
      'background-color': _0x573b3e == '' || _0x573b3e == "#000000" || true ? '' : _0x573b3e + '00'
    });
    var _0x5983b1 = _0x50dce3 == '#d2bc';
    _0x4c08ec.find(".bdel").hide();
    if (_0x48435d.bid != null) {
      _0x4c08ec.addClass("bid" + _0x48435d.bid);
      if (_0x4b1e09.delbc || _0x48435d.lid == (_0x5bde87[myid] || {
        'lid': null
      }).lid) {
        _0x4c08ec.find('.bdel').attr("onclick", "send('delbc', {bid:'" + _0x48435d.bid + "'});").show();
      }
    }
    if (_0x48435d.mi != null) {
      _0x4c08ec.addClass('mi' + _0x48435d.mi);
      if (_0x4b1e09.dmsg) {
        _0x4c08ec.find('.bdel').attr("onclick", "send('dmsg', {mi:'" + _0x48435d.mi + "',topic:$(this).parent().parent().parent().find('.u-topic').text()});").show();
      }
    }
    if (_0x48435d.sdel) {
      _0x4c08ec.find(".bdel").attr("onclick", '$(this).parent().parent().parent().parent().remove();').show();
    }
    if (_0x48435d.bid != null) {
      if (_0x43a04c.bclikes == false) {
        _0x4c08ec.find(".blike").remove();
      } else {
        _0x4c08ec.find(".blike").attr("onclick", "send('likebc', {bid:'" + _0x48435d.bid + "'});").show().text(_0x48435d.likes || '');
      }
      if (_0x43a04c.bcreply == false) {
        _0x4c08ec.find(".breply").remove();
      } else {
        _0x4c08ec.find(".breply").attr("onclick", "reply('.bid" + _0x48435d.bid + "',\".tboxbc\");").show();
      }
    } else if (_0x48435d.mi != null) {
      if (_0x43a04c.mlikes == false) {
        _0x4c08ec.find(".blike").remove();
      } else {
        _0x4c08ec.find(".blike").attr("onclick", "send('likem','" + _0x48435d.mi + "');").show();
      }
      if (_0x43a04c.mreply == false) {
        _0x4c08ec.find(".breply,.reply").remove();
      } else {
        _0x4c08ec.find(".breply").attr("onclick", "reply('.mi" + _0x48435d.mi + "',\"#tbox\");").show();
      }
    } else {
      _0x4c08ec.find(".blike,.breply").remove();
    }
    if (_0x48435d.bmi || _0x48435d.rmi) {
      _0x4c08ec.find(".reply").remove();
    }
    var _0x1cdd1a = $(_0x50dce3);
    $.each(_0x4c08ec.find("a.uplink"), function (_0xa33540, _0x29fff5) {
      var _0xaa51c8 = $(_0x29fff5).attr('href') || '';
      var _0xf165f9 = true && (_0x3defe1 == null || _0x3defe1 && _0x3defe1.rep >= 0x64);
      var _0x2580ee = mime[_0xaa51c8.split('.').pop().toLowerCase()] || '';
      if (_0x2580ee.match(/image/i)) {
        var _0x3d525a = _0xaa51c8.split('/').pop().split('.');
        if (_0x3d525a.length == 0x3 && _0xf165f9) {
          var _0x3d98c6 = $("<img style='max-width:100%;max-height:160px;display:block;' src='" + _0xaa51c8 + "' class='hand fitimg'>");
          _0x3d98c6.insertAfter(_0x29fff5);
          _0x3d98c6.click(function () {
            $(document.body).append("<div style=\"width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);\" onclick=\"$(this).remove();\"><div style=\"width:100%;height:100%;max-width:400px;margin:auto auto;background-size:contain;background-image:url(" + _0xaa51c8.substring(0x0, _0xaa51c8.lastIndexOf('.')) + ");background-repeat: no-repeat;background-position: center;\"><a target=\"_blank\" href=\"" + _0xaa51c8.substring(0x0, _0xaa51c8.lastIndexOf('.')) + "\" class=\"btn btn-primary\">عـرض</a></div></div>");
          });
          $(_0x29fff5).remove();
        } else {
          var _0x1c42bb = $("<div style='width:100%;'><button class='btn fl fa fa-image' style='color:black;'>عرض الصوره</button></div>");
          _0x1c42bb.insertAfter(_0x29fff5);
          $(_0x29fff5).remove();
          if (_0x3d525a.length == 0x3) {
            _0xaa51c8 = _0xaa51c8.substring(0x0, _0xaa51c8.lastIndexOf('.'));
          }
          _0x1c42bb.click(function () {
            var _0x234fe9 = $("<img style='max-width:100%;max-height:160px;display:block;' src='" + _0xaa51c8 + "' class='hand fitimg'>");
            _0x234fe9.insertAfter(_0x1c42bb);
            _0x1c42bb.remove();
            _0x234fe9.click(function () {
              $(document.body).append("<div style=\"width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);\" onclick=\"$(this).remove();\"><div style=\"width:100%;height:100%;max-width:400px;margin:auto auto;background-size:contain;background-image:url(" + _0xaa51c8 + ");background-repeat: no-repeat;background-position: center;\"><a target=\"_blank\" href=\"" + _0xaa51c8 + "\" class=\"btn btn-primary\">عـرض</a></div></div>");
            });
          });
        }
      }
      if (_0x2580ee.match(/video/i)) {
        var _0x1c42bb = $("<div style='width:100%;'><button class='btn' style='color:black;padding:0px 4px;margin-bottom:-21px;min-height:32px;'>▶ " + (_0xf165f9 ? "<img class='lazy' dsrc='" + _0xaa51c8 + ".jpg' style='width:122px;height:110px;'>" : "عرض الفيديو") + '</button></div>');
        _0x1c42bb.insertAfter(_0x29fff5);
        $(_0x29fff5).remove();
        _0x1c42bb.click(function () {
          $("<video onplay='if(playing!=null && playing!= this&&!playing.paused){playing.pause();};playing=this;' style='width:100%;max-height:160px;' controls autoplay><source src='" + _0xaa51c8 + "'></video>").insertAfter(_0x1c42bb);
          _0x1c42bb.remove();
        });
      }
      if (_0x2580ee.match(/audio/i)) {
        var _0x1c42bb = $("<div style='width:100%;'><button class='btn fl fa fa-youtube-play' style='color:black;'>مقطع صوت</button></div>");
        _0x1c42bb.insertAfter(_0x29fff5);
        $(_0x29fff5).remove();
        _0x1c42bb.click(function () {
          $("<audio onplay='if(playing!=null&& playing!= this&&!playing.paused){playing.pause();};playing=this;' style='width:100%;' controls><source src='" + _0xaa51c8 + "' type='audio/mpeg'></audio>").insertAfter(_0x1c42bb);
          _0x1c42bb.remove();
        });
      }
    });
    if (_0x5983b1 == true) {} else {
      if (_0x48435d.rmi != null) {
        _0x4c08ec.find(".breply").remove();
        var _0x1e4376 = $("#d2").find('.mi' + _0x48435d.rmi).find(".reply");
        if (_0x1e4376.length) {
          var _0x4467b9 = $(".mi" + _0x48435d.rmi).find(".breply");
          _0x4467b9.text((parseInt(_0x4467b9.text()) || 0x0) + 0x1);
          _0x1e4376.append(_0x4c08ec);
        }
        var _0x4467b9 = $("#rpl .mi" + _0x48435d.rmi);
        if (_0x4467b9.length) {
          _0x1e4376 = $("#rpl .r .reply");
          _0x1e4376.append(_0x4c08ec[0x0].outerHTML);
          _0x1e4376[0x0].scrollTop = _0x1e4376[0x0].scrollHeight - _0x1e4376[0x0].clientHeight;
        }
      } else {
        _0x4c08ec.appendTo(_0x1cdd1a);
      }
    }
    if (_0x5983b1 == true && true) {
      if (_0x1cdd1a[0x0].childNodes.length >= 0x64) {
        _0x1cdd1a[0x0].childNodes[_0x1cdd1a[0x0].childNodes.length - 0x1].remove();
      }
      if (_0x1cdd1a[0x0].scrollTop == 0x0 || _0x48435d.uid == myid) {
        if (_0x48435d.bmi != null) {
          _0x4c08ec.find('.breply').remove();
          var _0x1e4376 = $('#d2bc').find(".bid" + _0x48435d.bmi).find(".reply");
          if (_0x1e4376.length) {
            var _0x4467b9 = $("#d2bc").find(".bid" + _0x48435d.bmi).find(".breply");
            _0x4467b9.text((parseInt(_0x4467b9.text()) || 0x0) + 0x1);
            _0x1e4376.append(_0x4c08ec);
          }
          var _0x4467b9 = $("#rpl .bid" + _0x48435d.bmi);
          if (_0x4467b9.length) {
            _0x1e4376 = $("#rpl .r .reply");
            _0x1e4376.append(_0x4c08ec[0x0].outerHTML);
            _0x1e4376[0x0].scrollTop = _0x1e4376[0x0].scrollHeight - _0x1e4376[0x0].clientHeight;
          }
        } else {
          _0x1cdd1a.prepend(_0x4c08ec);
          if (_0x48435d.uid == myid) {
            _0x1cdd1a[0x0].scrollTop = 0x0;
          }
        }
      } else {
        if (_0x48435d.bmi != null) {
          _0x4c08ec.find(".breply").remove();
          var _0x1e4376 = $("#d2bc").find(".bid" + _0x48435d.bmi).find(".reply");
          if (_0x1e4376.length) {
            var _0x4467b9 = $("#d2bc").find(".bid" + _0x48435d.bmi).find(".breply");
            _0x4467b9.text((parseInt(_0x4467b9.text()) || 0x0) + 0x1);
            _0x1e4376.append(_0x4c08ec);
          }
          var _0x4467b9 = $("#rpl").find(".bid" + _0x48435d.bmi);
          if (_0x4467b9.length) {
            _0x1e4376 = $("#rpl").find(".r .reply");
            _0x1e4376.append(_0x4c08ec[0x0].outerHTML);
            _0x1e4376[0x0].scrollTop = _0x1e4376[0x0].scrollHeight - _0x1e4376[0x0].clientHeight;
          }
        } else {
          _0x4c08ec.prependTo(_0x1cdd1a);
          $("#bcmore").show();
          _0x5bd4cf = true;
        }
      }
    } else {
      if (_0x5983b1 && false) {
        if (_0x1cdd1a[0x0].childNodes.length >= 0x64) {
          _0x1cdd1a[0x0].childNodes[0x0].remove();
        }
        if (_0x1cdd1a[0x0].scrollHeight - _0x1cdd1a[0x0].clientHeight - _0x1cdd1a[0x0].scrollTop <= 0x1 || _0x48435d.uid == myid) {
          if (_0x48435d.bmi != null) {
            _0x4c08ec.find(".breply").remove();
            var _0x1e4376 = $("#d2bc").find(".bid" + _0x48435d.bmi).find(".reply");
            if (_0x1e4376.length) {
              var _0x4467b9 = $("#d2bc").find('.bid' + _0x48435d.bmi).find(".breply");
              _0x4467b9.text((parseInt(_0x4467b9.text()) || 0x0) + 0x1);
              _0x1e4376.append(_0x4c08ec);
            }
            var _0x4467b9 = $("#rpl .bid" + _0x48435d.bmi);
            if (_0x4467b9.length) {
              _0x1e4376 = $("#rpl .r .reply");
              _0x1e4376.append(_0x4c08ec[0x0].outerHTML);
              _0x1e4376[0x0].scrollTop = _0x1e4376[0x0].scrollHeight - _0x1e4376[0x0].clientHeight;
            }
          } else {
            _0x1cdd1a.append(_0x4c08ec);
            _0x1cdd1a[0x0].scrollTop = _0x1cdd1a[0x0].scrollHeight - _0x1cdd1a[0x0].clientHeight;
          }
        } else {
          if (_0x48435d.bmi != null) {
            _0x4c08ec.find('.breply').remove();
            var _0x1e4376 = $("#d2bc").find(".bid" + _0x48435d.bmi).find(".reply");
            if (_0x1e4376.length) {
              var _0x4467b9 = $("#d2bc").find('.bid' + _0x48435d.bmi).find(".breply");
              _0x4467b9.text((parseInt(_0x4467b9.text()) || 0x0) + 0x1);
              _0x1e4376.append(_0x4c08ec);
            }
            var _0x4467b9 = $('#rpl').find(".bid" + _0x48435d.bmi);
            if (_0x4467b9.length) {
              _0x1e4376 = $("#rpl").find(".r .reply");
              _0x1e4376.append(_0x4c08ec[0x0].outerHTML);
              _0x1e4376[0x0].scrollTop = _0x1e4376[0x0].scrollHeight - _0x1e4376[0x0].clientHeight;
            }
          } else {
            _0x4c08ec.appendTo(_0x1cdd1a);
            _0x1cdd1a[0x0].scrollTop = _0x1cdd1a[0x0].scrollHeight - _0x1cdd1a[0x0].clientHeight;
          }
        }
      } else {
        if (_0x1cdd1a.length) {
          if (_0x1cdd1a[0x0].childNodes.length >= 0x24) {
            _0x1cdd1a[0x0].childNodes[0x0].remove();
          }
          ;
          _0x1cdd1a[0x0].scrollTop = _0x1cdd1a[0x0].scrollHeight - _0x1cdd1a[0x0].clientHeight;
        }
      }
    }
    return _0x4c08ec;
  }
  function _0x52e505(_0x404c0b, _0x393bec) {
    _0x360820("action", {
      'cmd': "gift",
      'id': _0x404c0b,
      'gift': _0x393bec
    });
  }
  function _0x5337a5(_0x12b09e, _0x312dc5) {
    if (_0x312dc5 == null) {
      return;
    }
    if (_0x312dc5 == '') {
      _0x360820('bnr-', {
        'u2': _0x12b09e
      });
    } else {
      _0x360820('bnr', {
        'u2': _0x12b09e,
        'bnr': _0x312dc5
      });
    }
  }
  function _0x394fb6(_0x135a61) {
    if (_0x26cafb) {
      return;
    }
    window.onbeforeunload = null;
    _0x26cafb = true;
    if (_0x3a29ca) {
      window.close();
      return;
    }
    setTimeout("location.href=\"/\";", _0x135a61 || 0xdac);
  }
  function _0x5e5fe0() {
    var _0x25428a = _0x222e9d('blocklist');
    if (_0x25428a != null && _0x25428a != '') {
      try {
        _0x25428a = JSON.parse(_0x25428a);
        if (Array.isArray(_0x25428a)) {
          _0x38e5c4 = _0x25428a;
          if (_0x38e5c4.length > 0x14) {
            _0x38e5c4 = _0x38e5c4.splice(0x0, 0x14);
            _0x1d68b5();
          }
        }
      } catch (_0x2a4f35) {
        _0x2b8e5b("blocklist", '');
      }
    }
  }
  function _0x1d68b5() {
    var _0x26e45f = JSON.stringify(_0x38e5c4);
    _0x2b8e5b("blocklist", _0x26e45f);
  }
  function _0x23ca85(_0x17c3c8) {
    for (var _0x2286d6 = 0x0; _0x2286d6 < _0x38e5c4.length; _0x2286d6++) {
      var _0x1c90e9 = _0x38e5c4[_0x2286d6];
      if (_0x1c90e9.lid == _0x17c3c8.lid) {
        _0x38e5c4.splice(_0x2286d6, 0x1);
        _0x55bd08(_0x17c3c8.id);
      }
    }
    _0x1d68b5();
  }
  function _0x52dbcd(_0x1835aa) {
    if (_0x1835aa.id == myid) {
      return;
    }
    for (var _0x1fcd2e = 0x0; _0x1fcd2e < _0x38e5c4.length; _0x1fcd2e++) {
      var _0x45c3e8 = _0x38e5c4[_0x1fcd2e];
      if (_0x45c3e8.lid == _0x1835aa.lid) {
        return;
      }
    }
    _0x38e5c4.push({
      'lid': _0x1835aa.lid
    });
    _0x55bd08(_0x1835aa.id);
    _0x1d68b5();
  }
  function _0x314954(_0xc10372) {
    for (var _0x3a7811 = 0x0; _0x3a7811 < _0x38e5c4.length; _0x3a7811++) {
      var _0x274db0 = _0x38e5c4[_0x3a7811];
      if (_0x274db0.lid == _0xc10372.lid) {
        return true;
      }
    }
    return false;
  }
  var _0x4f6022 = {};
  function _0x9d225f(_0x2c85a1) {
    var _0x9dfb49 = _0x4b1e09.roomowner;
    var _0x118cc5 = _0x5bde87[_0x2c85a1];
    if (_0x118cc5 == null) {
      return;
    }
    if (_0x2c85a1 != myid) {
      if (_0x4f6022[_0x2c85a1] != null) {
        if (new Date().getTime() - _0x4f6022[_0x2c85a1] > 300000) {
          delete _0x4f6022[_0x2c85a1];
        }
      }
      if (_0x4f6022[_0x2c85a1] == null) {}
    }
    if (_0x118cc5.s && _0x56b63c(_0x118cc5.power).rank > _0x4b1e09.rank) {
      return;
    }
    var _0x2d986d = $("#upro");
    var _0x1cf24c = _0x118cc5.pic.split('.');
    _0x1cf24c[_0x1cf24c.length - 0x1] = 'b.' + _0x1cf24c[_0x1cf24c.length - 0x1];
    _0x1cf24c = _0x1cf24c.join('.');
    if (_0x118cc5.pic == "pic.webp") {
      _0x1cf24c = "pic-o.webp";
    }
    _0x2d986d.find(".u-pic").css("background-image", "url(\"" + _0x1cf24c + "\")").off().click(function () {
      $(document.body).append("<div style=\"width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);\" onclick=\"$(this).remove();\"><div style=\"width:100%;height:100%;max-width:400px;max-height:600px;margin:auto auto;background-size:auto;background-image:url(" + _0x1cf24c + ");background-repeat: no-repeat;background-position: center;\"></div></div>");
    });
    _0x2d986d.find(".u-pic2").css("background-image", "url(\"" + _0x118cc5.pic + "\")");
    _0x2d986d.find(".u-msg").html(_0x118cc5.msg);
    if (uf[(_0x118cc5.co || '').toLocaleLowerCase()] != null) {
      _0x2d986d.find('.u-co').text(uf[_0x118cc5.co.toLocaleLowerCase()]).append("<img style=\"width:24px;height:24px;border-radius:1px;margin-top: -3px;\" class=\"fl\" src=\"flags/" + _0x118cc5.co + ".png\">");
    } else {
      _0x2d986d.find(".u-co").text('--');
    }
    var _0x5c1837 = _0x19af4a(_0x118cc5);
    var _0x390756 = "بدون غرفه";
    var _0x31429f = rcach[_0x118cc5.roomid];
    if (_0x4b1e09.unick == true || _0x4b1e09.mynick == true && _0x2c85a1 == myid) {
      $('.u-topic').val(_0x118cc5.topic);
      _0x2d986d.find(".nickbox").show();
      _0x2d986d.find('.u-nickc').off().click(function () {
        _0x360820('unick', {
          'id': _0x2c85a1,
          'nick': _0x2d986d.find(".u-topic").val()
        });
      });
    } else {
      _0x2d986d.find(".nickbox").hide();
    }
    if (_0x4b1e09.rinvite) {
      _0x2d986d.find(".roomzbox").show();
      var _0xa28272 = _0x2d986d.find('.roomz');
      _0xa28272.empty();
      for (var _0x20e235 = 0x0; _0x20e235 < _0x10c3bd.length; _0x20e235++) {
        var _0x1eddc3 = $("<option></option>");
        _0x1eddc3.attr("value", _0x10c3bd[_0x20e235].id);
        if (_0x10c3bd[_0x20e235].id == myroom) {
          _0x1eddc3.css("color", 'blue');
          _0x1eddc3.attr("selected", "true");
        }
        _0x1eddc3.text('[' + (_0x10c3bd[_0x20e235].uco + '').padStart(0x2, '0') + ']' + _0x10c3bd[_0x20e235].topic);
        _0xa28272.append(_0x1eddc3);
      }
      var _0x21d8c2 = $("#rooms .roomz option");
      var _0x146d63 = _0x21d8c2.map(function (_0x1d5f9c, _0xf68c80) {
        return {
          't': $(_0xf68c80).text(),
          'v': _0xf68c80.value
        };
      }).get();
      _0x146d63.sort(function (_0x4bb325, _0x382fc1) {
        var _0x3b5c43 = _0x4bb325.t.toLowerCase();
        var _0x9f7ea8 = _0x382fc1.t.toLowerCase();
        return _0x3b5c43 > _0x9f7ea8 ? -0x1 : _0x3b5c43 < _0x9f7ea8 ? 0x1 : 0x0;
      });
      _0x2d986d.find(".uroomz").off().click(function () {
        var _0x18fc2d = '';
        var _0x3deea4 = rcach[_0xa28272.val()];
        if (_0x3deea4 && _0x3deea4.needpass) {
          _0x18fc2d = prompt("كلمه المرور للغرفه", '');
        }
        _0x360820("rinvite", {
          'id': _0x2c85a1,
          'rid': _0xa28272.val(),
          'pwd': _0x18fc2d || ''
        });
      });
    } else {
      _0x2d986d.find(".roomzbox").hide();
    }
    if (_0x4b1e09.setLikes) {
      _0x2d986d.find('.likebox').show();
      _0x2d986d.find(".likebox .likec").val(_0x118cc5.rep);
      _0x2d986d.find(".ulikec").off().click(function () {
        var _0x35e434 = parseInt(_0x2d986d.find(".likebox .likec").val()) || 0x0;
        _0x360820("setLikes", {
          'id': _0x118cc5.id,
          'likes': _0x35e434
        });
      });
    } else {
      _0x2d986d.find(".likebox").hide();
    }
    if (_0x4b1e09.setpower) {
      _0x3b0c7d = _0x3b0c7d.sort(function (_0x88290, _0x3ef8b2) {
        return _0x3ef8b2.rank - _0x88290.rank;
      });
      _0x2d986d.find(".powerbox").show();
      var _0x546a15 = _0x2d986d.find('.userpower');
      _0x2d986d.find('#upsearch').off().val('').change(function () {
        _0x2ffc64(_0x4b1e09, _0x118cc5.power);
      });
      _0x2ffc64(_0x4b1e09, _0x118cc5.power);
      _0x2d986d.find(".powerbox .userdays").val(0x0);
      _0x2d986d.find('.upower').off().click(function () {
        var _0x2fa5e8 = parseInt(_0x2d986d.find(".userdays").val()) || 0x0;
        _0x360820('cp', {
          'cmd': "setpower",
          'id': _0x118cc5.lid,
          'days': _0x2fa5e8,
          'power': _0x546a15.val()
        });
      });
    } else {
      _0x2d986d.find(".powerbox").hide();
    }
    if (_0x31429f != null) {
      if (_0x31429f.ops != null) {
        if (_0x31429f.ops.indexOf(_0x5bde87[myid].lid) != -0x1 || _0x31429f.owner == _0x5bde87[myid].lid || _0x4b1e09.roomowner) {
          _0x9dfb49 = true;
        }
      }
      _0x390756 = "<div class=\"fl btn btn-primary dots roomh border\" style=\"padding:0px 5px;max-width:180px;\" onclick=\"rjoin('" + _0x31429f.id + "')\"><img style=\"max-width:24px;\" src='" + _0x31429f.pic + "'>" + _0x31429f.topic + "</div>";
      _0x2d986d.find('.u-room').html(_0x390756);
      _0x2d986d.find(".u-room").show();
    } else {
      _0x2d986d.find('.u-room').hide();
    }
    if (_0x314954(_0x118cc5)) {
      _0x2d986d.find('.umute').hide();
      _0x2d986d.find('.uunmute').show();
    } else {
      _0x2d986d.find(".umute").show();
      _0x2d986d.find(".uunmute").hide();
    }
    _0x2d986d.find(".umute").css('background-color', '').off().click(function () {
      $(this).css("background-color", "indianred");
      _0x52dbcd(_0x118cc5);
      _0x2d986d.find(".umute").hide();
      _0x2d986d.find(".uunmute").show();
    });
    _0x2d986d.find(".uunmute").css("background-color", '').off().click(function () {
      $(this).css("background-color", 'indianred');
      _0x23ca85(_0x118cc5);
      _0x2d986d.find(".umute").show();
      _0x2d986d.find('.uunmute').hide();
    });
    _0x2d986d.find(".ulike").css("background-color", '').off().click(function () {
      $(this).css("background-color", "indianred");
      _0x360820("action", {
        'cmd': "like",
        'id': _0x2c85a1
      });
    }).text(_0x3a58c8(_0x118cc5.rep || 0x0) + '');
    _0x2d986d.find(".unot").css("background-color", '').off().click(function () {
      var _0x30be3e = this;
      _0x1309ab(function (_0x116789) {
        _0x360820("action", {
          'cmd': "not",
          'id': _0x2c85a1,
          'msg': _0x116789
        });
        $(_0x30be3e).css("background-color", "indianred");
      });
    });
    var _0x4f12fa = [[!_0x4b1e09.ban ? '' : 'باند', "fa fa-ban", 'color:red;', function (_0x5e194f) {
      _0x360820('action', {
        'cmd': "ban",
        'id': _0x5e194f
      });
      _0x2d986d.modal("hide");
    }], [!_0x4b1e09.history ? '' : "كشف النكات", "fa fa-search", '', function (_0x419705) {
      _0x360820('uh', _0x419705);
    }], [_0x4b1e09.kick < 0x1 ? '' : "حذف الصوره", "fa fa-ban", "color:brown;", function (_0x18199e) {
      _0x360820("action", {
        'cmd': "delpic",
        'id': _0x18199e
      });
    }], [!_0x4b1e09.setpower ? '' : 'البنر', "fa fa-star", "color:deeppink;", function (_0xe8152b) {
      var _0x49a77b = $("<div class=\"break\" style=\"max-height:400px;width:300px;background-color:white;\"></div>");
      _0x49a77b.append("<button style='padding:5px;margin:4px;' class='btn btn-primary hand borderg corner fa fa-ban'  onclick='ubnr(\"" + _0xe8152b + "\",\"\");'>إزاله البنر</button>");
      $.each(_0x383df2, function (_0x238d48, _0x5ecab8) {
        _0x49a77b.append("<img style='padding:5px;margin:4px;max-width:160px;max-height:40px;' class='btn hand borderg corner' src='sico/" + _0x5ecab8 + "' onclick='ubnr(\"" + _0xe8152b + "\",\"" + _0x5ecab8 + "\");'>");
      });
      _0x58bcf4(_0x2d986d.find(".uadmin"), _0x49a77b, false).css('left', "0px");
    }], [!_0x9dfb49 ? '' : "طرد من الغرفه", "fa fa-ban", 'color:purple;', function (_0x241cdb) {
      _0x360820('action', {
        'cmd': "roomkick",
        'id': _0x241cdb
      });
    }], [_0x4b1e09.upgrades < 0x1 ? '' : "هديه", "fa fa-diamond", "color:blue;", function (_0x5116b6) {
      var _0x37a23d = $("<div class=\"break fl\" style=\"max-height:400px;width:300px;background-color:white;\"></div>");
      _0x37a23d.append("<button style='padding:5px;margin:4px;' class='btn btn-primary hand borderg corner fa fa-ban'  onclick='gift(\"" + _0x5116b6 + "\",\"\");'>إزاله الهديه</button>");
      $.each(_0x55908a, function (_0x1b128f, _0x201196) {
        _0x37a23d.append("<img style='padding:5px;margin:4px;max-width:160px;max-height:40px;' class='btn hand borderg corner' src='dro3/" + _0x201196 + "' onclick='gift(\"" + _0x5116b6 + "\",\"" + _0x201196 + "\");'>");
      });
      _0x58bcf4(_0x2d986d.find(".uadmin"), _0x37a23d, false).css("left", "0px");
    }], [_0x4b1e09.kick < 0x1 ? '' : "طرد", "fa fa-ban", "color:red;", function (_0x4dd8d9) {
      _0x360820("action", {
        'cmd': "kick",
        'id': _0x4dd8d9
      });
      _0x2d986d.modal("hide");
    }], [!_0x4b1e09.roomowner ? '' : "ترقيه مراقب", "fa fa-star", "color:green;", function (_0x256cc1) {
      var _0x2aac01 = _0x5bde87[_0x256cc1];
      _0x360820("op+", {
        'lid': _0x2aac01.lid
      });
    }], [!_0x4b1e09.mic ? '' : "منع", "fa fa-microphone-slash", "width:98px;", function (_0x4b8faf) {
      _0x360820("umm", _0x4b8faf);
    }], [!_0x4b1e09.mic ? '' : "سماح", "fa fa-microphone", "width:72px;", function (_0x254661) {
      _0x360820("uma", _0x254661);
    }], [!_0x4b1e09.mic ? '' : "سحب المايك", "fa fa-microphone-slash", 'width:118px;', function (_0x59fc94) {
      _0x360820('uml', _0x59fc94);
    }]];
    if (_0x4f12fa.filter(function (_0x5f5db7) {
      return _0x5f5db7[0x0] != '';
    }).length == 0x0) {
      _0x2d986d.find(".uadmin").hide();
    } else {
      _0x2d986d.find('.uadmin').show();
    }
    _0x2d986d.find('.uadmin').off().click(function () {
      var _0x3833e1 = $("<div class=\"break\" style=\"max-height:400px;max-width:304px;background-color:white;padding:2px;\"></div>");
      for (var _0x3b9f77 = 0x0; _0x3b9f77 < _0x4f12fa.length; _0x3b9f77++) {
        if (_0x4f12fa[_0x3b9f77][0x0] == '') {
          _0x3833e1.append("<span class=\"fl \" style=\"height:33.75px;margin:2px;width:146px;margin-top:4px;text-align: center;" + _0x4f12fa[_0x3b9f77][0x2] + "\"></span>");
          continue;
        }
        _0x3833e1.append("<span class=\"fl " + _0x4f12fa[_0x3b9f77][0x1] + " btn borderg\" style=\"outline: 1px solid #0000001f;margin:2px;width:146px;margin-top:4px;text-align: center;" + _0x4f12fa[_0x3b9f77][0x2] + "\">" + _0x4f12fa[_0x3b9f77][0x0] + "</span>");
      }
      $(_0x3833e1).find('span').click(function (_0x1cad46) {
        _0x4f12fa.filter(function (_0x1270b0) {
          return _0x1270b0[0x0] == _0x1cad46.target.innerText;
        })[0x0][0x3](_0x2c85a1);
      });
      _0x58bcf4(_0x2d986d.find(this), _0x3833e1, false).css('left', '0px');
    });
    _0x2d986d.modal();
    _0x2d986d.attr("lid", _0x118cc5.lid);
    var _0x21fd68 = '';
    if (_0x5c1837 != '') {
      _0x21fd68 = "<img class=\"fl u-ico\"  alt=\"\" src=\"" + _0x5c1837 + "\">";
    }
    _0x2d986d.find(".modal-title").html("<img style='width:18px;height:18px;' src='" + _0x118cc5.pic + "'>" + _0x21fd68 + _0x118cc5.topic);
    _0x2d986d.find(".upm").off().click(function () {
      _0x2d986d.modal('hide');
      _0x4e47ae(_0x2c85a1, true);
    });
    _0x8fd57(0x1);
  }
  function _0x2ffc64(_0x354bf8, _0x571168) {
    var _0x304c23 = $('#upro');
    var _0xb4aade = $("#upsearch").val();
    var _0xc23a9 = _0xb4aade == '' ? _0x3b0c7d : _0x3b0c7d.filter(function (_0x284bbb) {
      return _0x284bbb.rank == _0xb4aade || _0x284bbb.name.indexOf(_0xb4aade) != -0x1;
    });
    var _0x5373c7 = _0x304c23.find(".userpower");
    _0x5373c7.empty();
    _0x5373c7.append("<option></option>");
    for (var _0x34a4b6 = 0x0; _0x34a4b6 < _0xc23a9.length; _0x34a4b6++) {
      var _0x368cf5 = $('<option></option>');
      if (_0xc23a9[_0x34a4b6].rank > _0x354bf8.rank) {
        _0x368cf5 = $("<option disabled></option>");
      }
      _0x368cf5.attr("value", _0xc23a9[_0x34a4b6].name);
      if (_0xc23a9[_0x34a4b6].name == _0x571168) {
        _0x368cf5.css("color", "blue");
        _0x368cf5.attr("selected", "true");
      }
      _0x368cf5.text('[' + _0xc23a9[_0x34a4b6].rank + "] " + _0xc23a9[_0x34a4b6].name);
      _0x5373c7.append(_0x368cf5);
    }
  }
  function _0x4cc463(_0x1efa57, _0x57bf6f, _0xe4e82f) {
    var _0x2def84 = $("<div class='' style='min-width:66px;margin-top:4px;padding:0px;background-color:#000000d2;'></div>");
    for (var _0x2f6c73 = 0x0; _0x2f6c73 < _0x57bf6f.length; _0x2f6c73++) {
      var _0xfad314 = $("<button class=' btn btn-primary' style='display:block;width:100%;padding: 4px;margin-top:" + (_0x57bf6f.length < 0x8 ? '0' : '0') + "px;'></button>").text(_0x57bf6f[_0x2f6c73]).on("click", function () {
        _0xe4e82f($(this).text());
      });
      _0x2def84.append(_0xfad314);
    }
    return _0x58bcf4(_0x1efa57, _0x2def84).removeClass('light').removeClass("border").css("max-height", "80%");
  }
  function _0x58bcf4(_0x1ec283, _0x468340, _0x458210, _0x3694f2, _0xec486f) {
    $(".ppop").remove();
    _0x1ec283 = $(_0x1ec283);
    var _0x3924d0 = _0x1ec283.offset();
    var _0x47d0e8 = $("<div class=\"ppop light border break\" style=\"z-index:9000;position: fixed;left:" + _0x3924d0.left + "px;top:" + _0x3924d0.top + "px;\"></div>");
    setTimeout(function () {
      if (_0x3694f2) {
        _0x47d0e8.css("width", _0x3694f2);
      }
      if (_0xec486f) {
        _0x47d0e8.css('width', _0xec486f);
      }
      _0x47d0e8.append(_0x468340);
      $(_0x1ec283.parent()).append(_0x47d0e8);
      if (_0x3924d0.left + _0x47d0e8.width() > window.innerWidth) {
        _0x47d0e8.css("left", Math.max(0x0, Math.ceil(_0x3924d0.left - _0x47d0e8.width())));
      }
      if (_0x3924d0.top + _0x47d0e8.height() > window.innerHeight) {
        _0x47d0e8.css("top", Math.max(0x0, Math.ceil(_0x3924d0.top - _0x47d0e8.height())));
      }
      if (_0x458210 != true) {
        setTimeout(function () {
          $(document.body).one('click', function () {
            $(".ppop").remove();
          });
        }, 0x78);
      }
    }, 0xa);
    return _0x47d0e8;
  }
  function _0x158e92(_0x56ac5b, _0x116edd) {
    $(".popx").remove();
    var _0x14015e = $($("#pop").html());
    _0x14015e.addClass("popx");
    _0x14015e.find(".title").append(_0x56ac5b);
    _0x14015e.find(".pphide").addClass("phide");
    _0x14015e.find(".body").append(_0x116edd);
    $(document.body).append(_0x14015e);
    _0x14015e.show();
    return _0x14015e;
  }
  function _0x7fa848(_0x23e8fb) {
    var _0x5a6a4b = window.location.search.substring(0x1);
    var _0x527d1d = _0x5a6a4b.split('&');
    for (var _0x64f3c2 = 0x0; _0x64f3c2 < _0x527d1d.length; _0x64f3c2++) {
      var _0x1ee25a = _0x527d1d[_0x64f3c2].split('=');
      if (_0x1ee25a[0x0] == _0x23e8fb) {
        return ('' + decodeURIComponent(_0x1ee25a[0x1])).split('<').join("&#x3C;");
      }
    }
  }
  function _0x5619c4() {
    $("#ops").children().remove();
    var _0x1fd042 = $("#mkr");
    _0x1fd042.find(".rsave").hide();
    _0x1fd042.find('.rdelete').hide();
    _0x1fd042.find(".rnos").parent().hide();
    _0x1fd042.find(".modal-title").text("إنشاء غرفه جديدة");
    _0x1fd042.modal();
    _0x1fd042.find(".rtopic").val('');
    _0x1fd042.find('.rabout').val('');
    _0x1fd042.find(".rpwd").val('');
    _0x1fd042.find('.rwelcome').val('');
    _0x1fd042.find(".rmax").val('');
    _0x1fd042.find(".cpick").attr('v', '#000000').css('background-color', "#000000");
    _0x1fd042.find(".rpic").css("background-image", 'url(room.webp)').attr('src', "room.webp");
    _0x1fd042.find(".rnos").prop("checked", false);
    _0x1fd042.find('.rbnr').prop("checked", false);
    _0x1fd042.find(".rev").prop('checked', false);
    _0x1fd042.find(".rdel").prop("checked", false).parent().show();
    _0x1fd042.find(".rmake").show().off().click(function () {
      _0x1fd042.find('.rl').val('');
      _0x1fd042.find(".rvl").val('');
      _0x1fd042.find(".rv").hide().prop("checked", false);
      _0x360820('r+', {
        'c': _0x1fd042.find(".cpick").attr('v') || '#000000',
        'topic': _0x1fd042.find('.rtopic').val(),
        'about': _0x1fd042.find(".rabout").val(),
        'welcome': _0x1fd042.find(".rwelcome").val(),
        'pass': _0x1fd042.find('.rpwd').val(),
        'max': parseInt(_0x1fd042.find(".rmax").val()) || 0x14,
        'delete': _0x1fd042.find(".rdel").prop("checked") == false,
        'b': _0x1fd042.find('.rbnr').prop("checked") == true,
        'l': parseInt(_0x1fd042.find(".rl").val()) || 0x0,
        'vl': parseInt(_0x1fd042.find(".rvl").val()) || 0x0,
        'nos': _0x1fd042.find('.rnos').prop('checked') == true,
        'pic': _0x1fd042.find('.rpic').attr("src"),
        'rev': _0x1fd042.find(".rev").prop("checked") == true
      });
      _0x1fd042.modal("hide");
    });
  }
  function _0x26fe01(_0x2a2792) {
    $('#ops').children().remove();
    if (_0x2a2792 == null) {
      _0x2a2792 = myroom;
    }
    var _0x27148b = rcach[_0x2a2792];
    if (_0x27148b == null) {
      return;
    }
    var _0x16dc25 = $("#mkr");
    _0x16dc25.find(".modal-title").text("إداره الغرفه");
    _0x16dc25.find(".rsave").show().off().click(function () {
      _0x360820('r^', {
        'id': _0x2a2792,
        'c': _0x16dc25.find(".cpick").attr('v') || "#000000",
        'topic': _0x16dc25.find(".rtopic").val(),
        'about': _0x16dc25.find('.rabout').val(),
        'welcome': _0x16dc25.find(".rwelcome").val(),
        'pass': _0x16dc25.find(".rpwd").val(),
        'max': parseInt(_0x16dc25.find(".rmax").val()) || 0x2,
        'l': parseInt(_0x16dc25.find(".rl").val()) || 0x0,
        'vl': parseInt(_0x16dc25.find(".rvl").val()) || 0x0,
        'pic': _0x16dc25.find(".rpic").attr("src"),
        'b': _0x16dc25.find(".rbnr").prop("checked") == true,
        'nos': _0x16dc25.find(".rnos").prop("checked") == true,
        'rev': _0x16dc25.find(".rev").prop('checked') == true,
        'v': _0x4b1e09.cmic ? _0x16dc25.find('.rv').prop("checked") : _0x27148b.v
      });
      _0x16dc25.modal("hide");
    });
    _0x16dc25.find('.rdelete').show().off().click(function () {
      if (confirm("تأكيد حذف الغرفه؟")) {
        _0x360820('r-', {
          'id': _0x2a2792
        });
        _0x16dc25.modal("hide");
      }
    });
    ;
    _0x16dc25.modal({
      'title': "ffff"
    });
    _0x16dc25.find(".rpwd").val('');
    _0x16dc25.find(".rtopic").val(_0x27148b.topic);
    _0x16dc25.find('.rabout').val(_0x27148b.about);
    _0x16dc25.find('.rwelcome').val(_0x27148b.welcome);
    _0x16dc25.find('.rmax').val(_0x27148b.max);
    _0x16dc25.find(".rl").val(_0x27148b.l || '');
    _0x16dc25.find(".rvl").val(_0x27148b.vl || '');
    _0x16dc25.find(".rv").show().prop("checked", _0x27148b.v == true);
    _0x16dc25.find(".rbnr").prop("checked", _0x27148b.b == true);
    _0x16dc25.find('.rev').prop('checked', _0x27148b.rev == true);
    _0x16dc25.find('.rnos').prop("checked", _0x27148b.nos == true).parent().show();
    _0x16dc25.find(".rmake").hide();
    _0x16dc25.find(".rdel").parent().hide();
    _0x16dc25.find(".rpic").css("background-image", "url(" + _0x27148b.pic + ')').attr("src", _0x27148b.pic);
    _0x16dc25.find(".cpick").attr('v', _0x27148b.c || '#000000').css("background-color", _0x27148b.c || '#000000');
    $("#rbans").hide();
    $("#rbans .rbansx").off().show().click(function (_0x37ecb7) {
      $("#rbans").hide();
      _0x360820("rbans-", {
        'roomid': _0x2a2792
      });
    });
    _0x360820("ops", {
      'cpi': _0x3a29ca ? cpi : undefined,
      'roomid': _0x2a2792
    });
    _0x360820("rbans", {
      'cpi': _0x3a29ca ? cpi : undefined,
      'roomid': _0x2a2792
    });
  }
  function _0x52b6e6(_0x2778a9) {
    if (_0x4a9a27 || _0x2778a9.pic == "room.webp" && typeof room_pic == "string") {
      _0x2778a9.pic = room_pic;
    }
    _0x2778a9.c = _0x2778a9.c || "#000000";
    var _0x2b2c20 = _0x2778a9.ht;
    _0x2b2c20.find(".u-pic").css("background-image", "url(" + (_0x2778a9.b == true ? _0x2778a9.pic.replace(/\.webp$/, ".b.webp") : _0x2778a9.pic) + ')');
    var _0x24e95f = _0x2b2c20.find(".u-topic");
    _0x24e95f[0x0].innerText = _0x2778a9.topic;
    _0x24e95f.css("color", _0x2778a9.c);
    _0x2b2c20.find(".u-msg")[0x0].innerText = _0x2778a9.about;
    _0x2b2c20.find(".hash").text(_0x2778a9.h);
    var _0x44e06a = '';
    if (_0x40defc && _0x40defc[_0x2778a9.id]) {
      var _0x4487d7 = _0x40defc[_0x2778a9.id];
      if (_0x4487d7 == 0x1) {
        _0x44e06a += "🔥️";
      } else {
        if (_0x4487d7 == 0x2) {
          _0x44e06a += '⚔️';
        } else if (_0x4487d7 == 0x3) {
          _0x44e06a += "🔥️⚔️";
        }
      }
    } else if (_0xc399c4[_0x2778a9.id]) {
      _0x44e06a += "💬️";
    }
    _0x2b2c20.find(".st").text(_0x44e06a + (_0x2778a9.needpass ? "🔐️" : '') + (_0x2778a9.v ? "🎤️" : '') + (_0x2778a9.l ? '❤️' : '') + (_0x2778a9.nos ? "🕶️" : ''));
    var _0x1aff3d = _0x4a74da(_0x2778a9.c || '#000000', -0x1e);
    _0x2b2c20[0x0].style["background-color"] = _0x1aff3d == "#000000" || true ? '' : _0x1aff3d + '1f';
  }
  function _0x39ecd3(_0x31bd1e, _0x2753a9) {
    if (_0x4a9a27 || _0x31bd1e.pic == "room.webp" && typeof room_pic == 'string') {
      _0x31bd1e.pic = room_pic;
    }
    var _0x1182e8 = $(_0x31bd1e.b == true ? _0x5dd909 : _0xe60c30);
    _0x1182e8.rb = _0x31bd1e.b == true;
    _0x1182e8[0x0].classList.add('r' + _0x31bd1e.id);
    _0x1182e8[0x0].setAttribute("onclick", "rjoin('" + _0x31bd1e.id + "');");
    _0x1182e8[0x0].setAttribute("rid", _0x31bd1e.id);
    _0x31bd1e.ht = _0x1182e8;
    _0x31bd1e.h = _0x31bd1e.wroom ? "#00" : '#' + (Math.abs(_0x4c4007(_0x31bd1e.id + (_0x31bd1e.owner || 'ff'))) % 0x7f % 0x64).toString().padStart(0x2, '0');
    _0x31bd1e.uco = 0x0;
    _0x1182e8.find('.hash').text(_0x31bd1e.h);
    _0x1182e8.find(".st").text((_0x31bd1e.needpass ? "🔐️" : '') + (_0x31bd1e.v ? "🎤️" : '') + (_0x31bd1e.l ? '❤️' : '') + (_0x31bd1e.nos ? "🕶️" : ''));
    _0x31bd1e.lupd = new Date().getTime();
    _0x52b6e6(_0x31bd1e);
    if (_0x2753a9 != true) {
      $("#rooms").append(_0x1182e8);
    } else {
      return _0x1182e8;
    }
  }
  function _0x5f3974(_0x461fbf) {
    $('#c' + _0x461fbf).remove();
    $('.w' + _0x461fbf).remove();
    _0x1a4d0a();
  }
  function _0x4e47ae(_0x41baa4, _0x5d59f5) {
    var _0x15cfa0 = _0x5bde87[_0x41baa4];
    if (_0x15cfa0 == null) {
      return;
    }
    if ($('#c' + _0x41baa4).length == 0x0) {
      var _0x5cd0bc = $(_0x51f1a5);
      var _0x15eb60 = _0x19af4a(_0x15cfa0);
      if (_0x15eb60 != '') {
        _0x5cd0bc.find(".u-ico").attr("src", _0x15eb60);
      }
      _0x5cd0bc.find(".u-msg").text('..');
      _0x5cd0bc.find(".uhash").text(_0x15cfa0.h);
      _0x5cd0bc.find(".co").remove();
      _0x5cd0bc.find('.u-pic').css({
        'background-image': "url(\"" + _0x15cfa0.pic + "\")"
      });
      $("<div id='c" + _0x41baa4 + "' onclick='' style='width:99%;padding: 2px;' class='cc noflow nosel   hand break'></div>").prependTo('#chats');
      $('#c' + _0x41baa4).append(_0x5cd0bc).append("<div onclick=\"wclose('" + _0x41baa4 + "')\" style=\"    margin-top: -30px;margin-right: 2px;\" class=\"label border mini label-danger fr fa fa-times\">حذف</div>").find(".uzr").css('width', "100%").attr('onclick', "openw('" + _0x41baa4 + "',true);").find(".u-msg").addClass('dots');
      var _0x2a4a63 = $($('#cw').html());
      $(_0x2a4a63).addClass('w' + _0x41baa4);
      $(_0x2a4a63).find('.emo').addClass("emo" + _0x41baa4);
      _0x2a4a63.find(".fa-user").click(function () {
        _0x9d225f(_0x41baa4);
        $("#upro").css('z-index', "2002");
      });
      _0x2a4a63.find(".head .u-pic").css('background-image', "url(\"" + _0x15cfa0.pic + "\")");
      _0x2a4a63.find(".head .uhash").text(_0x15cfa0.h);
      var _0x4f557c = $(_0x51f1a5);
      if (_0x15eb60 != '') {
        _0x4f557c.find(".u-ico").attr("src", _0x15eb60);
      }
      _0x4f557c.find(".head .u-pic").css("width", "28px").css("height", "28px").css("margin-top", '-2px').parent().click(function () {
        _0x9d225f(_0x41baa4);
      });
      _0x4f557c.css('width', '70%').find(".u-msg").remove();
      $(_0x2a4a63).find(".uh").append(_0x4f557c);
      $(_0x2a4a63).find(".d2").attr('id', 'd2' + _0x41baa4);
      $(_0x2a4a63).find('.wc').click(function () {
        _0x5f3974(_0x41baa4);
      });
      $(_0x2a4a63).find(".fa-share-alt").click(function () {
        _0xf5d143(_0x41baa4);
      });
      $(_0x2a4a63).find(".typ").hide();
      $(_0x2a4a63).find('.sndpm').click(function (_0x115173) {
        _0x115173.preventDefault();
        _0x56b242({
          'data': {
            'uid': _0x41baa4
          }
        });
      });
      $(_0x2a4a63).find(".callx").click(function () {
        _0x890165(_0x41baa4, 'call');
      });
      $(_0x2a4a63).find(".tbox").addClass("tbox" + _0x41baa4).keyup(function (_0x268593) {
        if (_0x268593.keyCode == 0xd) {
          _0x268593.preventDefault();
          _0x56b242({
            'data': {
              'uid': _0x41baa4
            }
          });
        }
      }).on("focus", function () {
        _0x44d116 = $(this).parent().parent().parent();
        _0x3f77ca = _0x41baa4;
        _0x56fa40 = -0x1;
      }).on("blur", function () {});
      var _0x45f692 = _0x15cfa0.bg;
      if (_0x45f692 == '') {
        _0x45f692 = "#FAFAFA";
      }
      $(_0x1a846d()).insertAfter($(_0x2a4a63).find(".head .fa-user"));
      $(document.body).append(_0x2a4a63);
      _0x2a4a63.find(".emobox").click(function () {
        _0x58bcf4(this, _0x47bb01, false);
      });
      $(_0x2a4a63).find(".head .u-pic").css('background-image', "url('" + _0x15cfa0.pic + "')").css("width", "24px").css("min-width", "24px").css("height", "22px").parent().click(function () {
        _0x9d225f(_0x41baa4);
        $("#upro").css('z-index', '2002');
      });
      $(_0x2a4a63).find(".head .u-topic").css('color', _0x15cfa0.ucol).css("background-color", _0x45f692).html(_0x15cfa0.topic);
      $(_0x2a4a63).find(".head .phide").click(function () {
        $(_0x2a4a63).removeClass("active").hide();
      });
      _0x2a4a63.find(".u-ico").attr("src", _0x15eb60);
      $('#c' + _0x41baa4).find('.uzr').click(function () {
        $('#c' + _0x41baa4).removeClass("unread");
        _0x1a4d0a();
      });
      _0x55bd08(_0x41baa4);
    }
    if (_0x5d59f5) {
      $(".phide").trigger("click");
      $('.w' + _0x41baa4).css('display', '').addClass("active").show();
      setTimeout(function () {
        _0x8fd57(0x1);
        $('.w' + _0x41baa4).find(".d2").scrollTop($('.w' + _0x41baa4).find('.d2')[0x0].scrollHeight);
      }, 0x32);
      $("#dpnl").hide();
      $("#dpnl .x").css("display", "none");
    } else if ($('.w' + _0x41baa4).css("display") == "none") {
      $('#c' + _0x41baa4).addClass('unread');
    }
    _0x1a4d0a();
  }
  function _0x1a4d0a() {
    var _0x43e694 = $("#chats").find(".unread").length;
    if (_0x43e694 != 0x0) {
      $(".chats").css("color", "orange").find("span").text(_0x43e694);
    } else {
      $(".chats").css("color", '').find('span').text('');
    }
  }
  var _0x13ede5 = '*';
  function _0x1a846d() {
    if (_0x13ede5 == '*') {
      _0x13ede5 = $("#uhead").html();
    }
    return _0x13ede5;
  }
  function _0x20be36() {
    if (!String.prototype.padStart) {
      String.prototype.padStart = function _0x2c6bbf(_0x41e0b1, _0x8ed0a) {
        _0x41e0b1 = _0x41e0b1 >> 0x0;
        _0x8ed0a = String(_0x8ed0a !== undefined ? _0x8ed0a : " ");
        return this.length >= _0x41e0b1 ? String(this) : (_0x41e0b1 = _0x41e0b1 - this.length, _0x41e0b1 > _0x8ed0a.length && (_0x8ed0a += _0x8ed0a.repeat(_0x41e0b1 / _0x8ed0a.length)), _0x8ed0a.slice(0x0, _0x41e0b1) + String(this));
      };
    }
  }
  function _0x3a8e33(_0x469bd9, _0x4a4a60, _0x4e7fe1, _0x3d0e47, _0x14502e) {
    var _0x48c5e9 = new XMLHttpRequest();
    _0x48c5e9.open('POST', _0x469bd9, true);
    _0x48c5e9.onreadystatechange = function () {
      if (this.readyState == 0x4 && this.status == 0xc8) {
        _0x4e7fe1(_0x48c5e9.responseText);
      }
    };
    _0x48c5e9.onerror = _0x3d0e47;
    _0x48c5e9.onabort = _0x3d0e47;
    _0x48c5e9.upload.onabort = _0x3d0e47;
    _0x48c5e9.upload.onerror = _0x3d0e47;
    _0x48c5e9.upload.onabort = _0x3d0e47;
    _0x48c5e9.upload.onprogress = function (_0x24af7d) {
      _0x14502e(_0x24af7d.loaded / _0x24af7d.total);
    };
    _0x48c5e9.send(_0x4a4a60);
    return _0x48c5e9;
  }
  var _0x29cf0e;
  function _0x5b391c(_0x2c5517, _0x3d57f0) {
    var _0x1a06bb = document.createElement("input");
    _0x1a06bb.type = "file";
    _0x1a06bb.accept = _0x2c5517;
    document.body.append(_0x1a06bb);
    _0x1a06bb.onchange = _0x2196e9 => {
      if (_0x1a06bb.files[0x0].size > 18874368) {
        _0x18dfc7("not", {
          'msg': "حجم الملف كبير. " + Math.ceil(_0x1a06bb.files[0x0].size / 0x400 / 0x400) + 'MB'
        });
      } else if (_0x1a06bb.files[0x0].name.split('.').pop().length > 0x4) {
        _0x18dfc7("not", {
          'msg': "نوع الملف غير مناسب: \n" + _0x1a06bb.files[0x0].name
        });
      } else {
        _0x3d57f0(_0x1a06bb.files[0x0]);
        _0x1a06bb.remove();
        _0x1a06bb.value = null;
      }
    };
    _0x1a06bb.click();
    if (_0x29cf0e) {
      _0x29cf0e.remove();
    }
    _0x29cf0e = _0x1a06bb;
  }
  function _0x2c845b() {
    _0x5b391c("image/*", function (_0x58f102) {
      $(".spic").css("background-image", 'url(imgs/ajax-loader.gif)');
      _0x3a8e33("/pic?secid=u&fn=" + _0x58f102.name.split('.').pop() + "&k=pic&t=" + new Date().getTime(), _0x58f102, function (_0x492640) {
        var _0x435143 = _0x492640.split('.');
        _0x435143[_0x435143.length - 0x1] = 'b.' + _0x435143[_0x435143.length - 0x1];
        _0x435143 = _0x435143.join('.');
        $('.spic').css("background-image", 'url(' + _0x435143 + ')');
        _0x360820("setpic", {
          'pic': _0x492640
        });
      }, function () {
        var _0x58d84c = _0x5bde87[myid].pic.split('.');
        _0x58d84c[_0x58d84c.length - 0x1] = 'b.' + _0x58d84c[_0x58d84c.length - 0x1];
        _0x58d84c = _0x58d84c.join('.');
        if (_0x5bde87[myid].pic == "pic.webp") {
          _0x58d84c = "pic-o.webp";
        }
        $(".spic").css("background-image", "url(" + _0x58d84c + ')');
        _0x18dfc7("not", {
          'msg': "فشل إرسال الصوره تأكد ان حجم الصوره مناسب"
        });
      }, function (_0x2a73ff) {});
    });
  }
  function _0xf5d143(_0x10bd3c, _0x184450, _0x2ed542) {
    _0x2f45e0 = null;
    var _0x2c54eb;
    _0x5b391c("image/*,video/*,audio/*", function (_0x2e0221) {
      var _0x26ce1f = $("<div style='width:100%' class='c-flex'><progress class='flex-grow-1 pgr' style='width:100%;' value='0' max='100'></progress><div class='light border d-flex' style='width:100%;'><button  class='btn btn-danger fa fa-times cancl' style='width:64px;padding:2px;'>إلغاء</button><span class='fn label label-primary dots nosel fl flex-grow-1' style='padding:2px;'></span></div></div>");
      if (_0x2ed542) {
        _0x26ce1f.insertBefore($("#wall .tablebox"));
      } else {
        $('#d2' + _0x10bd3c).append(_0x26ce1f);
      }
      $(_0x26ce1f).find(".cancl").click(function () {
        $(_0x26ce1f).remove();
        _0x2c54eb.abort();
      });
      _0x2c54eb = _0x3a8e33("/upload?secid=u&fn=" + _0x2e0221.name.split('.').pop() + '&t=' + new Date().getTime(), _0x2e0221, function (_0x2e05e2) {
        _0x2f45e0 = _0x2e05e2;
        if (_0x184450 != null) {
          _0x184450(_0x2e05e2);
        } else {
          _0x360820("file", {
            'pm': _0x10bd3c,
            'link': _0x2e05e2
          });
        }
        $(_0x26ce1f).remove();
      }, function () {
        $(_0x26ce1f).remove();
      }, function (_0x21c7cf) {
        _0x26ce1f.find(".fn").text('%' + parseInt(_0x21c7cf * 0x64) + " | " + _0x2e0221.name.split("\\").pop());
        _0x26ce1f.find('progress').val(parseInt(_0x21c7cf * 0x64));
      });
    });
  }
  window.getv = _0x222e9d;
  window.setv = _0x2b8e5b;
  window.fixSize = _0x8fd57;
  window.load = _0x5c9765;
  window.login = _0x419c23;
  window.updateusers = _0x135e60;
  window.send = _0x360820;
  window.sendbc = _0x16715a;
  window.Tsend = _0x5ff2b8;
  window.ytube = _0x2df5f6;
  window.tmic = _0x2022fc;
  window.sendpic = _0x2c845b;
  window.sendbc = _0x16715a;
  window.muteAll = _0x4c6714;
  window.hl = _0x371995;
  window.pickedemo = _0x5cc8a3;
  window.roomspic = _0x41421d;
  window.rjoin = _0x4249cd;
  window.upro = _0x9d225f;
  window.reply = _0x507d3a;
  window.ubnr = _0x5337a5;
  window.gift = _0x52e505;
  window.mkr = _0x5619c4;
  window.setprofile = _0x26211d;
  window.pmsg = _0x5c14ff;
  window.logout = _0x2fca09;
  window.cp_powers = _0x34126d;
  window.cp_bots = _0x67379e;
  window.cp_powerchange = _0x12fcd9;
  window.sett_save = _0x28ef97;
  window.domains_save = _0x73143b;
  window.emo_order = _0x2a77a6;
  window.del_ico = _0x5d9ad2;
  window.sendfilea = _0x5adf9c;
  window.cp_fps = _0x1687f8;
  window.cp_fps_do = _0x7cc8f0;
  window.cp_ledit = _0x7e7c5e;
  window.cp_fltredit = _0x3f7a68;
  window.cp_fpedit = _0x17d963;
  window.uprochange = _0x2ffc64;
  window.s_sico = _0x2625ee;
  window.redit = _0x26fe01;
  window.fltrit = _0x6c46d9;
  window.openw = _0x4e47ae;
  window.msgs = _0x1a4d0a;
  window.closex = _0x394fb6;
  window.pri = _0xdecf22;
  window.wclose = _0x5f3974;
  window.showcp = _0x56b62e;
  window.bkdr = _0x58edde;
  function _0x411231() {
    if (_0x4b1e09.cp) {
      $(".cp").show();
    } else {
      $(".cp").hide();
    }
    if (_0x3a29ca == null && _0x4b1e09.cp != true) {
      for (var _0x54ef68 in _0x550fe1) {
        var _0x3e30f9 = _0x550fe1[_0x54ef68];
        _0x3e30f9.postMessage(["close", {}]);
      }
    }
    if (_0x4b1e09 && _0x4b1e09.rank > 0x2326 && _0x4b1e09.owner == true && $("#cp_bots").length == 0x0) {
      $("#cp .tab-content:eq(0)").append("<div id='cp_bots' class=\"tab-pane\">\n            <label class=\"label label-primary\">الاعدادات</label><br>  \n            <input type=\"number\" min=\"0\" value=\"0\" class=\"bots_maxStay dots\" style=\"width: 100px;\" autocomplete=\"off\"><b>اطول مده تواجد</b><br> \n            <input type=\"number\" min=\"0\" value=\"0\" class=\"bots_maxLeave dots\" style=\"width: 100px;\" autocomplete=\"off\"><b>اطول مده غياب</b><br>\n            <select style=\"width: 100px;\" class=\"bots_active btn btn-secondary\">\n              <option value=\"true\">نعم</option>\n              <option seleceted=\"seleceted\" value=\"false\">ﻻ</option>\n            </select><b>تفعيل الوهمي</b><br>\n            <label class=\"botsb\" style=\"width:100px;\">0/0</label>\n            <b>الرصيد</b><br>\n            <label class=\"botso\" style=\"width:100px;\">0/0</label>\n            <b>التواجد</b><br>\n            <button style=\"width:100px;margin-top:4px;\" onclick=\"send('cp',{cmd:'bot_save',bots_active:$('#cp .bots_active').val()=='true',bots_minStay:$('#cp .bots_minStay').val(),bots_maxStay:$('#cp .bots_maxStay').val(),bots_minLeave:$('#cp .bots_minLeave').val(),bots_maxLeave:$('#cp .bots_maxLeave').val()});\" class=\"fa fa-user btn btn-danger\">حفظ</button><br>\n            <button style=\"width:100px;margin-top:4px;\" onclick=\"send('cp',{cmd:'bot',add:true});\" class=\"fa fa-user btn btn-success\">إضافه</button>\n          </div>");
      $("#cp ul.nav").append("<li><a data-toggle=\"tab\" onclick=\"send('cp',{cmd:'bots'});\" href=\"#cp_bots\">Bots</a></li>");
    }
  }
  function _0x56b62e() {
    $("#cp").show();
    $("#m1 .active a").click();
  }
  if (top != self) {
    location.href = 'https://google.com/?q=hahaha';
  }
  uf = {
    'kw': 'الكويت',
    'et': "إثيوبيا",
    'az': "أذربيجان",
    'am': "أرمينيا",
    'aw': "أروبا",
    'er': "إريتريا",
    'es': 'أسبانيا',
    'au': "أستراليا",
    'ee': 'إستونيا',
    'il': "إسرائيل",
    'af': "أفغانستان",
    'ec': "إكوادور",
    'ar': "الأرجنتين",
    'jo': "الأردن",
    'ae': "الإمارات العربية المتحدة",
    'al': "ألبانيا",
    'bh': "مملكة البحرين",
    'br': 'البرازيل',
    'pt': "البرتغال",
    'ba': "البوسنة والهرسك",
    'ga': 'الجابون',
    'dz': 'الجزائر',
    'dk': "الدانمارك",
    'cv': "الرأس الأخضر",
    'ps': "فلسطين",
    'sv': "السلفادور",
    'sn': "السنغال",
    'sd': "السودان",
    'se': "السويد",
    'so': "الصومال",
    'cn': "الصين",
    'iq': "العراق",
    'ph': "الفلبين",
    'cm': "الكاميرون",
    'cg': "الكونغو",
    'cd': "جمهورية الكونغو الديمقراطية",
    'de': 'ألمانيا',
    'hu': "المجر",
    'ma': 'المغرب',
    'mx': "المكسيك",
    'sa': "المملكة العربية السعودية",
    'uk': "المملكة المتحدة",
    'gb': "المملكة المتحدة",
    'no': "النرويج",
    'at': "النمسا",
    'ne': "النيجر",
    'in': "الهند",
    'us': "الولايات المتحدة",
    'jp': "اليابان",
    'ye': "اليمن",
    'gr': "اليونان",
    'ag': "أنتيغوا وبربودا",
    'id': "إندونيسيا",
    'ao': "أنغولا",
    'ai': "أنغويلا",
    'uy': "أوروجواي",
    'uz': 'أوزبكستان',
    'ug': 'أوغندا',
    'ua': "أوكرانيا",
    'ir': "إيران",
    'ie': "أيرلندا",
    'is': 'أيسلندا',
    'it': "إيطاليا",
    'pg': "بابوا-غينيا الجديدة",
    'py': 'باراجواي',
    'bb': "باربادوس",
    'pk': 'باكستان',
    'pw': "بالاو",
    'bm': "برمودا",
    'bn': "بروناي",
    'be': "بلجيكا",
    'bg': "بلغاريا",
    'bd': 'بنجلاديش',
    'pa': "بنما",
    'bj': "بنين",
    'bt': 'بوتان',
    'bw': 'بوتسوانا',
    'pr': "بورتو ريكو",
    'bf': "بوركينا فاسو",
    'bi': 'بوروندي',
    'pl': 'بولندا',
    'bo': "بوليفيا",
    'pf': "بولينزيا الفرنسية",
    'pe': "بيرو",
    'by': "بيلاروس",
    'bz': 'بيليز',
    'th': "تايلاند",
    'tw': "تايوان",
    'tm': "تركمانستان",
    'tr': "تركيا",
    'tt': "ترينيداد وتوباجو",
    'td': "تشاد",
    'cl': "تشيلي",
    'tz': "تنزانيا",
    'tg': "توجو",
    'tv': 'توفالو',
    'tk': 'توكيلاو',
    'to': 'تونجا',
    'tn': "تونس",
    'tp': "تيمور الشرقية",
    'jm': "جامايكا",
    'gm': "جامبيا",
    'gl': "جرينلاند",
    'pn': "جزر البتكارين",
    'bs': "جزر البهاما",
    'km': "جزر القمر",
    'cf': "أفريقيا الوسطى",
    'cz': "جمهورية التشيك",
    'do': "جمهورية الدومينيكان",
    'za': "جنوب أفريقيا",
    'gt': "جواتيمالا",
    'gp': "جواديلوب",
    'gu': "جوام",
    'ge': "جورجيا",
    'gs': "جورجيا الجنوبية",
    'gy': 'جيانا',
    'gf': "جيانا الفرنسية",
    'dj': 'جيبوتي',
    'je': "جيرسي",
    'gg': "جيرنزي",
    'va': "دولة الفاتيكان",
    'dm': 'دومينيكا',
    'rw': "رواندا",
    'ru': "روسيا",
    'ro': "رومانيا",
    're': "ريونيون",
    'zm': 'زامبيا',
    'zw': 'زيمبابوي',
    'ws': "ساموا",
    'sm': "سان مارينو",
    'sk': "سلوفاكيا",
    'si': 'سلوفينيا',
    'sg': "سنغافورة",
    'sz': "سوازيلاند",
    'sy': "سوريا",
    'sr': "سورينام",
    'ch': "سويسرا",
    'sl': "سيراليون",
    'lk': "سيريلانكا",
    'sc': "سيشل",
    'rs': 'صربيا',
    'tj': "طاجيكستان",
    'om': "عمان",
    'gh': 'غانا',
    'gd': "غرينادا",
    'gn': 'غينيا',
    'gq': "غينيا الاستوائية",
    'gw': "غينيا بيساو",
    'vu': "فانواتو",
    'fr': "فرنسا",
    've': "فنزويلا",
    'fi': "فنلندا",
    'vn': "فيتنام",
    'cy': "قبرص",
    'qa': 'قطر',
    'kg': "قيرقيزستان",
    'kz': "كازاخستان",
    'nc': "كاليدونيا الجديدة",
    'kh': "كامبوديا",
    'hr': "كرواتيا",
    'ca': 'كندا',
    'cu': "كوبا",
    'ci': "ساحل العاج",
    'kr': "كوريا",
    'kp': "كوريا الشمالية",
    'cr': "كوستاريكا",
    'co': 'كولومبيا',
    'ki': 'كيريباتي',
    'ke': "كينيا",
    'lv': "لاتفيا",
    'la': "لاوس",
    'lb': "لبنان",
    'li': "لشتنشتاين",
    'lu': "لوكسمبورج",
    'ly': "ليبيا",
    'lr': "ليبيريا",
    'lt': 'ليتوانيا',
    'ls': "ليسوتو",
    'mq': "مارتينيك",
    'mo': "ماكاو",
    'fm': "ماكرونيزيا",
    'mw': "مالاوي",
    'mt': 'مالطا',
    'ml': "مالي",
    'my': "ماليزيا",
    'yt': "مايوت",
    'mg': "مدغشقر",
    'eg': "مصر",
    'mk': "مقدونيا، يوغوسلافيا",
    'mn': "منغوليا",
    'mr': "موريتانيا",
    'mu': "موريشيوس",
    'mz': "موزمبيق",
    'md': "مولدوفا",
    'mc': "موناكو",
    'ms': "مونتسيرات",
    'me': "مونتينيغرو",
    'mm': "ميانمار",
    'na': 'ناميبيا',
    'nr': "ناورو",
    'np': "نيبال",
    'ng': "نيجيريا",
    'ni': "نيكاراجوا",
    'nu': "نيوا",
    'nz': "نيوزيلندا",
    'ht': 'هايتي',
    'hn': "هندوراس",
    'nl': 'هولندا',
    'hk': "هونغ كونغ",
    'wf': "واليس وفوتونا"
  };
  mime = {
    'mov': "video/mov",
    'aac': "audio/aac",
    'm4a': "audio/m4a",
    'avi': "video/x-msvideo",
    'gif': "image/gif",
    'ico': 'image/x-icon',
    'jpeg': 'image/jpeg',
    'jpg': "image/jpeg",
    'mid': "audio/midi",
    'midi': 'audio/midi',
    'mp2': "audio/mpeg",
    'mp3': 'audio/mpeg',
    'mp4': "video/mp4",
    'mpa': 'video/mpeg',
    'mpe': "video/mpeg",
    'mpeg': "video/mpeg",
    'oga': 'audio/ogg',
    'ogv': "video/ogg",
    'png': "image/png",
    'svg': "image/svg+xml",
    'tif': "image/tiff",
    'tiff': "image/tiff",
    'wav': "audio/x-wav",
    'weba': "audio/webm",
    'webm': "video/webm",
    'webp': "image/webp",
    '3gp': "video/3gpp",
    '3gp2': "video/3gpp2"
  };
  function _0x325d1e(_0x1b8dd7) {
    var _0x3195f4 = _0x1b8dd7.toString();
    if (Array.isArray(_0x1b8dd7)) {
      _0x3195f4 = _0x1b8dd7.join(';');
    }
    function _0x40cb66(_0x6f06d1, _0x1ae96a) {
      var _0x3287a5;
      var _0x14d6ef;
      var _0x5190ae;
      var _0x3d760c;
      var _0x4c88cf;
      _0x5190ae = _0x6f06d1 & 0x80000000;
      _0x3d760c = _0x1ae96a & 0x80000000;
      _0x3287a5 = _0x6f06d1 & 0x40000000;
      _0x14d6ef = _0x1ae96a & 0x40000000;
      _0x4c88cf = (_0x6f06d1 & 0x3fffffff) + (_0x1ae96a & 0x3fffffff);
      return _0x3287a5 & _0x14d6ef ? _0x4c88cf ^ 0x80000000 ^ _0x5190ae ^ _0x3d760c : _0x3287a5 | _0x14d6ef ? _0x4c88cf & 0x40000000 ? _0x4c88cf ^ 0xc0000000 ^ _0x5190ae ^ _0x3d760c : _0x4c88cf ^ 0x40000000 ^ _0x5190ae ^ _0x3d760c : _0x4c88cf ^ _0x5190ae ^ _0x3d760c;
    }
    function _0x269345(_0x16f35f, _0x20f86d, _0x3f5b8e, _0x1b6b65, _0x2963e5, _0x2e7528, _0x19e482) {
      _0x16f35f = _0x40cb66(_0x16f35f, _0x40cb66(_0x40cb66(_0x20f86d & _0x3f5b8e | ~_0x20f86d & _0x1b6b65, _0x2963e5), _0x19e482));
      return _0x40cb66(_0x16f35f << _0x2e7528 | _0x16f35f >>> 0x20 - _0x2e7528, _0x20f86d);
    }
    function _0x5429c6(_0x40e273, _0x485e9b, _0x3b7b97, _0x2d5b10, _0x1ee19f, _0x1bb951, _0x3ad774) {
      _0x40e273 = _0x40cb66(_0x40e273, _0x40cb66(_0x40cb66(_0x485e9b & _0x2d5b10 | _0x3b7b97 & ~_0x2d5b10, _0x1ee19f), _0x3ad774));
      return _0x40cb66(_0x40e273 << _0x1bb951 | _0x40e273 >>> 0x20 - _0x1bb951, _0x485e9b);
    }
    function _0x5d13d4(_0x17efdf, _0x22dc2f, _0x238267, _0x1e7457, _0x96d6af, _0x364365, _0x4ac9bd) {
      _0x17efdf = _0x40cb66(_0x17efdf, _0x40cb66(_0x40cb66(_0x22dc2f ^ _0x238267 ^ _0x1e7457, _0x96d6af), _0x4ac9bd));
      return _0x40cb66(_0x17efdf << _0x364365 | _0x17efdf >>> 0x20 - _0x364365, _0x22dc2f);
    }
    function _0x1616f2(_0x32450e, _0x10b6c5, _0x4f66da, _0x534319, _0x3ec368, _0x5ee14c, _0x1d9c86) {
      _0x32450e = _0x40cb66(_0x32450e, _0x40cb66(_0x40cb66(_0x4f66da ^ (_0x10b6c5 | ~_0x534319), _0x3ec368), _0x1d9c86));
      return _0x40cb66(_0x32450e << _0x5ee14c | _0x32450e >>> 0x20 - _0x5ee14c, _0x10b6c5);
    }
    function _0x26bf52(_0x2c5c08) {
      var _0x322fc9 = '';
      var _0x2dd5aa = '';
      var _0x2f639d;
      for (_0x2f639d = 0x0; 0x3 >= _0x2f639d; _0x2f639d++) {
        _0x2dd5aa = _0x2c5c08 >>> 0x8 * _0x2f639d & 0xff;
        _0x2dd5aa = '0' + _0x2dd5aa.toString(0x10);
        _0x322fc9 += _0x2dd5aa.substr(_0x2dd5aa.length - 0x2, 0x2);
      }
      return _0x322fc9;
    }
    var _0x34c403 = [];
    var _0x2251a8;
    var _0x353250;
    var _0x89abe3;
    var _0x23b20d;
    var _0x14a4a6;
    var _0x3d8062;
    var _0xf6630e;
    var _0x5c9ef9;
    _0x3195f4 = function (_0x2b6481) {
      _0x2b6481 = _0x2b6481.replace(/\r\n/g, "\n");
      var _0x2b4a65 = '';
      for (var _0x174c4f = 0x0; _0x174c4f < _0x2b6481.length; _0x174c4f++) {
        var _0xd90bcf = _0x2b6481.charCodeAt(_0x174c4f);
        if (0x80 > _0xd90bcf) {
          _0x2b4a65 += String.fromCharCode(_0xd90bcf);
        } else {
          if (0x7f < _0xd90bcf && 0x800 > _0xd90bcf) {
            _0x2b4a65 += String.fromCharCode(_0xd90bcf >> 0x6 | 0xc0);
          } else {
            _0x2b4a65 += String.fromCharCode(_0xd90bcf >> 0xc | 0xe0);
            _0x2b4a65 += String.fromCharCode(_0xd90bcf >> 0x6 & 0x3f | 0x80);
          }
          _0x2b4a65 += String.fromCharCode(_0xd90bcf & 0x3f | 0x80);
        }
      }
      return _0x2b4a65;
    }(_0x3195f4);
    _0x34c403 = function (_0x9530b8) {
      var _0x1b4071;
      var _0x56e558 = _0x9530b8.length;
      _0x1b4071 = _0x56e558 + 0x8;
      var _0x527493 = 0x10 * ((_0x1b4071 - _0x1b4071 % 0x40) / 0x40 + 0x1);
      var _0x5a56fc = Array(_0x527493 - 0x1);
      var _0x33808a = 0x0;
      for (var _0x1c5c72 = 0x0; _0x1c5c72 < _0x56e558;) {
        _0x1b4071 = (_0x1c5c72 - _0x1c5c72 % 0x4) / 0x4;
        _0x33808a = _0x1c5c72 % 0x4 * 0x8;
        _0x5a56fc[_0x1b4071] |= _0x9530b8.charCodeAt(_0x1c5c72) << _0x33808a;
        _0x1c5c72++;
      }
      _0x1b4071 = (_0x1c5c72 - _0x1c5c72 % 0x4) / 0x4;
      _0x5a56fc[_0x1b4071] |= 0x80 << _0x1c5c72 % 0x4 * 0x8;
      _0x5a56fc[_0x527493 - 0x2] = _0x56e558 << 0x3;
      _0x5a56fc[_0x527493 - 0x1] = _0x56e558 >>> 0x1d;
      return _0x5a56fc;
    }(_0x3195f4);
    _0x14a4a6 = 0x67452301;
    _0x3d8062 = 0xefcdab89;
    _0xf6630e = 0x98badcfe;
    _0x5c9ef9 = 0x10325476;
    for (_0x3195f4 = 0x0; _0x3195f4 < _0x34c403.length; _0x3195f4 += 0x10) {
      _0x2251a8 = _0x14a4a6;
      _0x353250 = _0x3d8062;
      _0x89abe3 = _0xf6630e;
      _0x23b20d = _0x5c9ef9;
      _0x14a4a6 = _0x269345(_0x14a4a6, _0x3d8062, _0xf6630e, _0x5c9ef9, _0x34c403[_0x3195f4 + 0x0], 0x7, 0xd76aa478);
      _0x5c9ef9 = _0x269345(_0x5c9ef9, _0x14a4a6, _0x3d8062, _0xf6630e, _0x34c403[_0x3195f4 + 0x1], 0xc, 0xe8c7b756);
      _0xf6630e = _0x269345(_0xf6630e, _0x5c9ef9, _0x14a4a6, _0x3d8062, _0x34c403[_0x3195f4 + 0x2], 0x11, 0x242070db);
      _0x3d8062 = _0x269345(_0x3d8062, _0xf6630e, _0x5c9ef9, _0x14a4a6, _0x34c403[_0x3195f4 + 0x3], 0x16, 0xc1bdceee);
      _0x14a4a6 = _0x269345(_0x14a4a6, _0x3d8062, _0xf6630e, _0x5c9ef9, _0x34c403[_0x3195f4 + 0x4], 0x7, 0xf57c0faf);
      _0x5c9ef9 = _0x269345(_0x5c9ef9, _0x14a4a6, _0x3d8062, _0xf6630e, _0x34c403[_0x3195f4 + 0x5], 0xc, 0x4787c62a);
      _0xf6630e = _0x269345(_0xf6630e, _0x5c9ef9, _0x14a4a6, _0x3d8062, _0x34c403[_0x3195f4 + 0x6], 0x11, 0xa8304613);
      _0x3d8062 = _0x269345(_0x3d8062, _0xf6630e, _0x5c9ef9, _0x14a4a6, _0x34c403[_0x3195f4 + 0x7], 0x16, 0xfd469501);
      _0x14a4a6 = _0x269345(_0x14a4a6, _0x3d8062, _0xf6630e, _0x5c9ef9, _0x34c403[_0x3195f4 + 0x8], 0x7, 0x698098d8);
      _0x5c9ef9 = _0x269345(_0x5c9ef9, _0x14a4a6, _0x3d8062, _0xf6630e, _0x34c403[_0x3195f4 + 0x9], 0xc, 0x8b44f7af);
      _0xf6630e = _0x269345(_0xf6630e, _0x5c9ef9, _0x14a4a6, _0x3d8062, _0x34c403[_0x3195f4 + 0xa], 0x11, 0xffff5bb1);
      _0x3d8062 = _0x269345(_0x3d8062, _0xf6630e, _0x5c9ef9, _0x14a4a6, _0x34c403[_0x3195f4 + 0xb], 0x16, 0x895cd7be);
      _0x14a4a6 = _0x269345(_0x14a4a6, _0x3d8062, _0xf6630e, _0x5c9ef9, _0x34c403[_0x3195f4 + 0xc], 0x7, 0x6b901122);
      _0x5c9ef9 = _0x269345(_0x5c9ef9, _0x14a4a6, _0x3d8062, _0xf6630e, _0x34c403[_0x3195f4 + 0xd], 0xc, 0xfd987193);
      _0xf6630e = _0x269345(_0xf6630e, _0x5c9ef9, _0x14a4a6, _0x3d8062, _0x34c403[_0x3195f4 + 0xe], 0x11, 0xa679438e);
      _0x3d8062 = _0x269345(_0x3d8062, _0xf6630e, _0x5c9ef9, _0x14a4a6, _0x34c403[_0x3195f4 + 0xf], 0x16, 0x49b40821);
      _0x14a4a6 = _0x5429c6(_0x14a4a6, _0x3d8062, _0xf6630e, _0x5c9ef9, _0x34c403[_0x3195f4 + 0x1], 0x5, 0xf61e2562);
      _0x5c9ef9 = _0x5429c6(_0x5c9ef9, _0x14a4a6, _0x3d8062, _0xf6630e, _0x34c403[_0x3195f4 + 0x6], 0x9, 0xc040b340);
      _0xf6630e = _0x5429c6(_0xf6630e, _0x5c9ef9, _0x14a4a6, _0x3d8062, _0x34c403[_0x3195f4 + 0xb], 0xe, 0x265e5a51);
      _0x3d8062 = _0x5429c6(_0x3d8062, _0xf6630e, _0x5c9ef9, _0x14a4a6, _0x34c403[_0x3195f4 + 0x0], 0x14, 0xe9b6c7aa);
      _0x14a4a6 = _0x5429c6(_0x14a4a6, _0x3d8062, _0xf6630e, _0x5c9ef9, _0x34c403[_0x3195f4 + 0x5], 0x5, 0xd62f105d);
      _0x5c9ef9 = _0x5429c6(_0x5c9ef9, _0x14a4a6, _0x3d8062, _0xf6630e, _0x34c403[_0x3195f4 + 0xa], 0x9, 0x2441453);
      _0xf6630e = _0x5429c6(_0xf6630e, _0x5c9ef9, _0x14a4a6, _0x3d8062, _0x34c403[_0x3195f4 + 0xf], 0xe, 0xd8a1e681);
      _0x3d8062 = _0x5429c6(_0x3d8062, _0xf6630e, _0x5c9ef9, _0x14a4a6, _0x34c403[_0x3195f4 + 0x4], 0x14, 0xe7d3fbc8);
      _0x14a4a6 = _0x5429c6(_0x14a4a6, _0x3d8062, _0xf6630e, _0x5c9ef9, _0x34c403[_0x3195f4 + 0x9], 0x5, 0x21e1cde6);
      _0x5c9ef9 = _0x5429c6(_0x5c9ef9, _0x14a4a6, _0x3d8062, _0xf6630e, _0x34c403[_0x3195f4 + 0xe], 0x9, 0xc33707d6);
      _0xf6630e = _0x5429c6(_0xf6630e, _0x5c9ef9, _0x14a4a6, _0x3d8062, _0x34c403[_0x3195f4 + 0x3], 0xe, 0xf4d50d87);
      _0x3d8062 = _0x5429c6(_0x3d8062, _0xf6630e, _0x5c9ef9, _0x14a4a6, _0x34c403[_0x3195f4 + 0x8], 0x14, 0x455a14ed);
      _0x14a4a6 = _0x5429c6(_0x14a4a6, _0x3d8062, _0xf6630e, _0x5c9ef9, _0x34c403[_0x3195f4 + 0xd], 0x5, 0xa9e3e905);
      _0x5c9ef9 = _0x5429c6(_0x5c9ef9, _0x14a4a6, _0x3d8062, _0xf6630e, _0x34c403[_0x3195f4 + 0x2], 0x9, 0xfcefa3f8);
      _0xf6630e = _0x5429c6(_0xf6630e, _0x5c9ef9, _0x14a4a6, _0x3d8062, _0x34c403[_0x3195f4 + 0x7], 0xe, 0x676f02d9);
      _0x3d8062 = _0x5429c6(_0x3d8062, _0xf6630e, _0x5c9ef9, _0x14a4a6, _0x34c403[_0x3195f4 + 0xc], 0x14, 0x8d2a4c8a);
      _0x14a4a6 = _0x5d13d4(_0x14a4a6, _0x3d8062, _0xf6630e, _0x5c9ef9, _0x34c403[_0x3195f4 + 0x5], 0x4, 0xfffa3942);
      _0x5c9ef9 = _0x5d13d4(_0x5c9ef9, _0x14a4a6, _0x3d8062, _0xf6630e, _0x34c403[_0x3195f4 + 0x8], 0xb, 0x8771f681);
      _0xf6630e = _0x5d13d4(_0xf6630e, _0x5c9ef9, _0x14a4a6, _0x3d8062, _0x34c403[_0x3195f4 + 0xb], 0x10, 0x6d9d6122);
      _0x3d8062 = _0x5d13d4(_0x3d8062, _0xf6630e, _0x5c9ef9, _0x14a4a6, _0x34c403[_0x3195f4 + 0xe], 0x17, 0xfde5380c);
      _0x14a4a6 = _0x5d13d4(_0x14a4a6, _0x3d8062, _0xf6630e, _0x5c9ef9, _0x34c403[_0x3195f4 + 0x1], 0x4, 0xa4beea44);
      _0x5c9ef9 = _0x5d13d4(_0x5c9ef9, _0x14a4a6, _0x3d8062, _0xf6630e, _0x34c403[_0x3195f4 + 0x4], 0xb, 0x4bdecfa9);
      _0xf6630e = _0x5d13d4(_0xf6630e, _0x5c9ef9, _0x14a4a6, _0x3d8062, _0x34c403[_0x3195f4 + 0x7], 0x10, 0xf6bb4b60);
      _0x3d8062 = _0x5d13d4(_0x3d8062, _0xf6630e, _0x5c9ef9, _0x14a4a6, _0x34c403[_0x3195f4 + 0xa], 0x17, 0xbebfbc70);
      _0x14a4a6 = _0x5d13d4(_0x14a4a6, _0x3d8062, _0xf6630e, _0x5c9ef9, _0x34c403[_0x3195f4 + 0xd], 0x4, 0x289b7ec6);
      _0x5c9ef9 = _0x5d13d4(_0x5c9ef9, _0x14a4a6, _0x3d8062, _0xf6630e, _0x34c403[_0x3195f4 + 0x0], 0xb, 0xeaa127fa);
      _0xf6630e = _0x5d13d4(_0xf6630e, _0x5c9ef9, _0x14a4a6, _0x3d8062, _0x34c403[_0x3195f4 + 0x3], 0x10, 0xd4ef3085);
      _0x3d8062 = _0x5d13d4(_0x3d8062, _0xf6630e, _0x5c9ef9, _0x14a4a6, _0x34c403[_0x3195f4 + 0x6], 0x17, 0x4881d05);
      _0x14a4a6 = _0x5d13d4(_0x14a4a6, _0x3d8062, _0xf6630e, _0x5c9ef9, _0x34c403[_0x3195f4 + 0x9], 0x4, 0xd9d4d039);
      _0x5c9ef9 = _0x5d13d4(_0x5c9ef9, _0x14a4a6, _0x3d8062, _0xf6630e, _0x34c403[_0x3195f4 + 0xc], 0xb, 0xe6db99e5);
      _0xf6630e = _0x5d13d4(_0xf6630e, _0x5c9ef9, _0x14a4a6, _0x3d8062, _0x34c403[_0x3195f4 + 0xf], 0x10, 0x1fa27cf8);
      _0x3d8062 = _0x5d13d4(_0x3d8062, _0xf6630e, _0x5c9ef9, _0x14a4a6, _0x34c403[_0x3195f4 + 0x2], 0x17, 0xc4ac5665);
      _0x14a4a6 = _0x1616f2(_0x14a4a6, _0x3d8062, _0xf6630e, _0x5c9ef9, _0x34c403[_0x3195f4 + 0x0], 0x6, 0xf4292244);
      _0x5c9ef9 = _0x1616f2(_0x5c9ef9, _0x14a4a6, _0x3d8062, _0xf6630e, _0x34c403[_0x3195f4 + 0x7], 0xa, 0x432aff97);
      _0xf6630e = _0x1616f2(_0xf6630e, _0x5c9ef9, _0x14a4a6, _0x3d8062, _0x34c403[_0x3195f4 + 0xe], 0xf, 0xab9423a7);
      _0x3d8062 = _0x1616f2(_0x3d8062, _0xf6630e, _0x5c9ef9, _0x14a4a6, _0x34c403[_0x3195f4 + 0x5], 0x15, 0xfc93a039);
      _0x14a4a6 = _0x1616f2(_0x14a4a6, _0x3d8062, _0xf6630e, _0x5c9ef9, _0x34c403[_0x3195f4 + 0xc], 0x6, 0x655b59c3);
      _0x5c9ef9 = _0x1616f2(_0x5c9ef9, _0x14a4a6, _0x3d8062, _0xf6630e, _0x34c403[_0x3195f4 + 0x3], 0xa, 0x8f0ccc92);
      _0xf6630e = _0x1616f2(_0xf6630e, _0x5c9ef9, _0x14a4a6, _0x3d8062, _0x34c403[_0x3195f4 + 0xa], 0xf, 0xffeff47d);
      _0x3d8062 = _0x1616f2(_0x3d8062, _0xf6630e, _0x5c9ef9, _0x14a4a6, _0x34c403[_0x3195f4 + 0x1], 0x15, 0x85845dd1);
      _0x14a4a6 = _0x1616f2(_0x14a4a6, _0x3d8062, _0xf6630e, _0x5c9ef9, _0x34c403[_0x3195f4 + 0x8], 0x6, 0x6fa87e4f);
      _0x5c9ef9 = _0x1616f2(_0x5c9ef9, _0x14a4a6, _0x3d8062, _0xf6630e, _0x34c403[_0x3195f4 + 0xf], 0xa, 0xfe2ce6e0);
      _0xf6630e = _0x1616f2(_0xf6630e, _0x5c9ef9, _0x14a4a6, _0x3d8062, _0x34c403[_0x3195f4 + 0x6], 0xf, 0xa3014314);
      _0x3d8062 = _0x1616f2(_0x3d8062, _0xf6630e, _0x5c9ef9, _0x14a4a6, _0x34c403[_0x3195f4 + 0xd], 0x15, 0x4e0811a1);
      _0x14a4a6 = _0x1616f2(_0x14a4a6, _0x3d8062, _0xf6630e, _0x5c9ef9, _0x34c403[_0x3195f4 + 0x4], 0x6, 0xf7537e82);
      _0x5c9ef9 = _0x1616f2(_0x5c9ef9, _0x14a4a6, _0x3d8062, _0xf6630e, _0x34c403[_0x3195f4 + 0xb], 0xa, 0xbd3af235);
      _0xf6630e = _0x1616f2(_0xf6630e, _0x5c9ef9, _0x14a4a6, _0x3d8062, _0x34c403[_0x3195f4 + 0x2], 0xf, 0x2ad7d2bb);
      _0x3d8062 = _0x1616f2(_0x3d8062, _0xf6630e, _0x5c9ef9, _0x14a4a6, _0x34c403[_0x3195f4 + 0x9], 0x15, 0xeb86d391);
      _0x14a4a6 = _0x40cb66(_0x14a4a6, _0x2251a8);
      _0x3d8062 = _0x40cb66(_0x3d8062, _0x353250);
      _0xf6630e = _0x40cb66(_0xf6630e, _0x89abe3);
      _0x5c9ef9 = _0x40cb66(_0x5c9ef9, _0x23b20d);
    }
    return (_0x26bf52(_0x14a4a6) + _0x26bf52(_0x3d8062) + _0x26bf52(_0xf6630e) + _0x26bf52(_0x5c9ef9)).toLowerCase();
  }
  ;
  function _0x13d610(_0x5ac4cc) {
    var _0x1cea96 = $("<table class=\"tablesorter\"></table>");
    _0x1cea96.append('<thead><tr></tr></thead>');
    _0x1cea96.append("<tbody style=\"vertical-align: top;\"></tbody>");
    $.each(_0x5ac4cc, function (_0x428704, _0x2ad792) {
      _0x1cea96.find("thead").find('tr').append("<th class='border'>" + _0x2ad792 + '</th>');
    });
    _0x1cea96.tablesorter();
    return _0x1cea96;
  }
  function _0x331bcc(_0x43129d, _0x8194e7) {
    var _0x4df5ce = '';
    $.each(_0x43129d, function (_0x1b0a75, _0x1319fb) {
      if (_0x1b0a75 == _0x43129d.length - 0x1) {
        _0x4df5ce += "<td><div class=\"d-flex\">" + (_0x1319fb + '') + "</div></td>";
      } else {
        _0x4df5ce += "<td  style=\"max-width:" + _0x8194e7[_0x1b0a75] + "px;\">" + (_0x1319fb + '').replace(/\</g, "&#x3C;") + "</td>";
      }
    });
    return "<tr>" + _0x4df5ce + "</tr>";
  }
  function _0x4131fc(_0xd2683e, _0x21763c, _0x57f20f, _0x1a747f) {
    var _0x179f58 = $(_0xd2683e);
    var _0x16656d = $('<tr></tr>');
    $.each(_0x21763c, function (_0x44e9a5, _0xe22c12) {
      if (_0x44e9a5 == _0x21763c.length - 0x1) {
        _0x16656d.append("<td style=\"max-width:" + _0x57f20f[_0x44e9a5] + "px;\"><div class=\"d-flex\">" + (_0xe22c12 + '') + "</div></td>");
      } else if (_0x44e9a5 == _0x1a747f) {
        _0x16656d.append("<td style=\"max-width:" + _0x57f20f[_0x44e9a5] + "px;\">" + (_0xe22c12 + '') + "</td>");
      } else {
        _0x16656d.append("<td style=\"max-width:" + _0x57f20f[_0x44e9a5] + "px;\">" + (_0xe22c12 + '').replace(/\</g, '&#x3C;') + "</td>");
      }
    });
    _0x179f58.find("tbody").append(_0x16656d);
    return _0x16656d;
  }
  Number.prototype.time = function () {
    var _0x34f3b7 = this;
    var _0x1396bd = 0x0;
    var _0x4943c5 = 0x0;
    var _0x500796 = 0x0;
    var _0x17745f = 0x0;
    var _0x42aaca = '';
    _0x1396bd = parseInt(_0x34f3b7 / 86400000);
    _0x34f3b7 = _0x34f3b7 - parseInt(86400000 * _0x1396bd);
    _0x4943c5 = parseInt(_0x34f3b7 / 3600000);
    _0x34f3b7 = _0x34f3b7 - parseInt(3600000 * _0x4943c5);
    _0x500796 = parseInt(_0x34f3b7 / 60000);
    _0x34f3b7 = _0x34f3b7 - parseInt(60000 * _0x500796);
    _0x17745f = parseInt(_0x34f3b7 / 0x3e8);
    if (_0x4943c5 > 0x9) {
      _0x42aaca += _0x4943c5 + ':';
    } else {
      _0x42aaca += '0' + _0x4943c5 + ':';
    }
    if (_0x500796 > 0x9) {
      _0x42aaca += _0x500796 + ':';
    } else {
      _0x42aaca += '0' + _0x500796 + ':';
    }
    if (_0x17745f > 0x9) {
      _0x42aaca += _0x17745f;
    } else {
      _0x42aaca += '0' + _0x17745f;
    }
    return (_0x1396bd ? (_0x1396bd > 0x9 ? _0x1396bd : '0' + _0x1396bd) + ':' : '') + _0x42aaca;
  };
  function _0x34126d() {
    var _0x49f4ee = $("#psearch").val();
    var _0xc8c709 = _0x49f4ee == '' ? _0x19c949 : _0x19c949.filter(function (_0x4e88dd) {
      return _0x4e88dd.rank == _0x49f4ee || _0x4e88dd.name.indexOf(_0x49f4ee) != -0x1;
    });
    $("#cp .powerbox").children().remove();
    _0xc8c709.sort(function (_0x5983a1, _0x210696) {
      return (_0x210696.rank || 0x0) - (_0x5983a1.rank || 0x0);
    });
    for (var _0x186776 = 0x0; _0x186776 < _0xc8c709.length; _0x186776++) {
      $("#cp .powerbox").each(function (_0x11677b, _0x38d8e1) {
        var _0x5d221e = $("<option></option>");
        _0x5d221e.attr("value", _0xc8c709[_0x186776].name);
        _0x5d221e.text('[' + (_0xc8c709[_0x186776].rank || 0x0) + "] " + _0xc8c709[_0x186776].name);
        $(_0x38d8e1).append(_0x5d221e);
      });
      if (_0x186776 == _0xc8c709.length - 0x1) {
        var _0x38581a = $("<option></option>");
        _0x38581a.attr("value", '');
        _0x38581a.text('');
        $("#cp #tuser .powerbox").prepend(_0x38581a);
      }
    }
    _0x12fcd9();
  }
  function _0x12fcd9() {
    var _0x232baf = _0x19c949;
    var _0x30153f = $("#cp .selbox").val();
    var _0x55b4c6 = null;
    for (var _0x57d292 = 0x0; _0x57d292 < _0x232baf.length; _0x57d292++) {
      if (_0x232baf[_0x57d292].name == _0x30153f) {
        _0x55b4c6 = _0x232baf[_0x57d292];
        break;
      }
    }
    if (_0x55b4c6 != null) {
      var _0x2ad12e = [['rank', "الترتيب"], ["name", "إسم المجموعه"], ["ico", "الإيقونه"], ["calls", "مكالمات الخاص"], ['kick', "الطرد"], ["publicmsg", "الإعلانات"], ["upgrades", "الهدايا"], ["rooms", "اقصى حد للغرف الثابته"], ["delbc", "حذف الحائط"], ["alert", 'التنبيهات'], ['mynick', "تغير النك"], ["unick", "تغير النكات"], ["ban", 'الباند'], ["ppmsg", "اعلانات السوابر"], ["forcepm", "فتح الخاص"], ["roomowner", "إداره الغرف"], ["createroom", "انشاء الغرف"], ["edituser", "إداره العضويات"], ["setpower", "تعديل الصلاحيات"], ["history", "كشف النكات"], ['cp', "لوحه التحكم"], ["rjoin", "دخول الغرف الممتلئه والمغلقه"], ['stealth', "مخفي"], ["setLikes", "لايكات"], ['dmsg', "مسح الرسائل"], ["rinvite", "نقل الزوار"], ['mic', "سحب المايك"], ["cmic", "تفعيل المايك"], ["stats", "إحصائيات"], ["editpower", "إداره الصلاحيات"], ["owner", "إداره الموقع"], ['filter', "الفلتر"], ["automsg", "اداره الرسائل التلقائيه"]];
      var _0x503f64 = $("<div class='json' style='width:260px;'></div>");
      _0x503f64.append(_0x36f8a0(_0x55b4c6, _0x2ad12e, function (_0x3b45f0) {
        _0x360820('cp', {
          'cmd': "powers_save",
          'power': _0x3b45f0
        });
      }));
      $("#cp #powers .json").remove();
      $("#cp #powers").append(_0x503f64);
      $("#cp #powers .delp").off().click(function () {
        if (confirm("تأكيد حذف المجموعه؟ " + _0x55b4c6.name)) {
          _0x360820('cp', {
            'cmd': "powers_del",
            'name': _0x55b4c6.name
          });
        }
      });
      $("#cp .sico img").removeClass("unread border");
      $("#cp .sico img[src='sico/" + _0x55b4c6.ico + "']").addClass("unread border");
    }
  }
  function _0x36f8a0(_0x19400a, _0x4c43b0, _0x34699e) {
    var _0x352c0c = $("<div style=\"width:100%;height:100%;padding:5px;\" class=\"break\"></div>");
    var _0x4f29e6 = Object.keys(_0x19400a);
    $.each(_0x4f29e6, function (_0x58febb, _0x13bcb5) {
      var _0x3cc122 = null;
      if (_0x4c43b0 != null) {
        $.each(_0x4c43b0, function (_0x2ee534, _0x5e2629) {
          if (_0x5e2629[0x0] == _0x13bcb5) {
            _0x3cc122 = _0x5e2629[0x1];
          }
          _0x4f29e6.splice(_0x4f29e6.indexOf(_0x5e2629[0x0]), 0x1);
          _0x4f29e6.splice(_0x2ee534, 0x0, _0x5e2629[0x0]);
        });
      }
      if (_0x3cc122 == null) {
        return;
      }
      switch (typeof _0x19400a[_0x13bcb5]) {
        case "string":
          _0x352c0c.append("<label class=\"label label-primary\">" + _0x3cc122 + "</label>");
          _0x352c0c.append("<input type=\"text\" name=\"" + _0x13bcb5.replace(/\"/g, '') + "\" class=\"\" value=\"" + _0x19400a[_0x13bcb5].replace(/\"/g, '') + "\"></br>");
          break;
        case "boolean":
          _0x352c0c.append("<label class=\"label label-primary\">" + _0x3cc122 + "</label>");
          var _0x13f943 = '';
          if (_0x19400a[_0x13bcb5]) {
            _0x13f943 = "checked";
          }
          _0x352c0c.append("<label>تفعيل<input name=\"" + _0x13bcb5.replace(/\"/g, '') + "\" type=\"checkbox\" class=\"\" " + _0x13f943 + '></label></br>');
          break;
        case "number":
          _0x352c0c.append("<label class=\"label label-primary\">" + _0x3cc122 + "</label>");
          _0x352c0c.append("<input name=\"" + _0x13bcb5.replace(/\"/g, '') + "\" type=\"number\" style=\"width:60px;\" class=\"\" value=\"" + _0x19400a[_0x13bcb5] + "\"></br>");
          break;
      }
    });
    _0x352c0c.append("<button class=\"btn btn-primary fr fa fa-edit\">حفظ</button>");
    _0x352c0c.find("button").click(function () {
      _0x34699e(_0x36b1ed(_0x352c0c));
    });
    return _0x352c0c;
  }
  function _0x6c46d9(_0x48751a, _0x47e2d4) {
    _0x360820('cp', {
      'cmd': 'fltrit',
      'path': _0x48751a,
      'v': _0x47e2d4
    });
    $(".fltrit").val('');
  }
  function _0x3d9b8c(_0x5a7646, _0x1b1a7a, _0x272104) {
    var _0x2d9654;
    _0x5b391c("image/*", function (_0x61aac) {
      var _0x17acca = $("<div class='mm msg ' style='width:200px;'><a class='fn '></a><button style='color:red;border:1px solid red;min-width:40px;' class=' cancl'>X</button></div>");
      _0x17acca.insertAfter($(_0x5a7646));
      $(_0x17acca).find(".cancl").click(function () {
        $(_0x17acca).remove();
        _0x2d9654.abort();
      });
      _0x2d9654 = _0x3a8e33("pic?secid=u&fn=" + _0x61aac.name.split('.').pop() + (_0x272104 ? "&t=" + _0x272104 : ''), _0x61aac, function (_0x4ff800) {
        _0x1b1a7a(_0x4ff800);
        $(_0x17acca).remove();
      }, function () {
        $(_0x17acca).remove();
      }, function (_0x3ff136) {
        $(_0x17acca.find('.fn')).text('%' + parseInt(_0x3ff136 * 0x64) + " | " + _0x61aac.name.split("\\").pop());
      });
    });
  }
  function _0x41421d(_0x228a48) {
    _0x3d9b8c(_0x228a48, function (_0x36d1b4) {
      $(_0x228a48).css("background-image", "url(" + _0x36d1b4 + ')').attr("src", _0x36d1b4);
    }, 'r&k=room');
  }
  function _0x73143b() {
    var _0x5646c8 = {
      'domain': $("#domain").val(),
      'name': $("#domain_name").val(),
      'title': $("#domain_title").val(),
      'bg': ('#' + ($("#cp .domain_sbg").val() || '272727')).replace('##', '#'),
      'buttons': ('#' + ($(".domain_sbuttons").val() || "303030")).replace('##', '#'),
      'background': ('#' + ($(".domain_sbackground").val() || "fafafa")).replace('##', '#'),
      'script': $('#domain_scr').val(),
      'keywords': $("#domain_keywords").val(),
      'description': $("#domain_description").val(),
      'html': $("#sett_htmld").val() || ''
    };
    _0x360820('cp', {
      'cmd': "domainsave",
      'data': _0x5646c8
    });
  }
  function _0x669f4d(_0xbcb428) {
    if ((_0xbcb428 || '') == '') {
      return _0xbcb428;
    }
    var _0x17bd91 = _0xbcb428.indexOf("://") != -0x1 ? _0xbcb428.split("://")[0x1] : _0xbcb428;
    _0x17bd91 = _0x17bd91.split('/')[0x0].split('.');
    return _0x17bd91.length < 0x2 || _0x17bd91[_0x17bd91.length - 0x1] == '' ? '' : _0x17bd91[_0x17bd91.length - 0x2] + '.' + _0x17bd91[_0x17bd91.length - 0x1];
  }
  function _0x28ef97() {
    var _0x4afef2 = {
      'name': $("#sett_name").val(),
      'title': $("#sett_title").val(),
      'bg': $("#cp .sbg").val(),
      'buttons': $('.sbuttons').val(),
      'background': $('.sbackground').val(),
      'wall_likes': parseInt($('.wall_likes').val()),
      'wall_minutes': parseInt($(".wall_minutes").val()),
      'msgst': parseInt($(".msgstt").val()),
      'pmlikes': parseInt($('.pmlikes').val()),
      'notlikes': parseInt($('.notlikes').val()),
      'fileslikes': parseInt($(".fileslikes").val()),
      'allowg': $(".allowg").is(":checked"),
      'allowreg': $(".allowreg").is(":checked"),
      'rc': $('.rc').is(":checked"),
      'bclikes': $('#bclikes').is(":checked"),
      'mlikes': $("#mlikes").is(":checked"),
      'bcreply': $('#bcreply').is(":checked"),
      'mreply': $("#mreply").is(":checked"),
      'script': $("#sett_scr").val(),
      'html': $('#sett_html').val() || '',
      'keywords': $("#sett_keywords").val(),
      'description': $('#sett_description').val(),
      'proflikes': parseInt($("#sett .proflikes").val()),
      'piclikes': parseInt($("#sett .piclikes").val()),
      'maxIP': $('.maxIP').val() || 0x2,
      'maxshrt': $('.maxshrt').val() || 0x1,
      'stay': Math.max(0x1, Math.min(0x258, $(".stay").val() || 0x1)),
      'callsLike': $(".callsLike").val() || 0x0,
      'calls': $("#calls").is(":checked"),
      'likeTax': $("#likeTax").is(':checked')
    };
    _0x360820('cp', {
      'cmd': "sitesave",
      'data': _0x4afef2
    });
  }
  function _0x5adf9c(_0x428b23, _0x2dc1d5, _0x119501 = 'upload?') {
    var _0x409eb9;
    _0x5b391c('image/*', function (_0x481fee) {
      var _0x1d747a = $("<div class='mm msg ' style='width:200px;'><a class='fn '></a><button style='color:red;border:1px solid red;min-width:40px;' class=' cancl'>X</button></div>");
      _0x1d747a.insertAfter($(_0x428b23));
      $(_0x1d747a).find('.cancl').click(function () {
        $(_0x1d747a).remove();
        _0x409eb9.abort();
      });
      _0x409eb9 = _0x3a8e33(_0x119501 + "secid=u&a=x&fn=" + _0x481fee.name.split('.').pop(), _0x481fee, function (_0x14b80a) {
        _0x2dc1d5(_0x14b80a);
        $(_0x1d747a).remove();
      }, function () {
        $(_0x1d747a).remove();
      }, function (_0x4774da) {
        $(_0x1d747a.find('.fn')).text('%' + parseInt(_0x4774da * 0x64) + " | " + _0x481fee.name.split("\\").pop());
      });
    });
  }
  function _0x2625ee(_0x386bb2) {
    _0x360820('cp', {
      'cmd': "addico",
      'pid': _0x386bb2,
      'tar': "sico"
    });
  }
  function _0x5d9ad2(_0x28acf1) {
    _0x360820('cp', {
      'cmd': "delico",
      'pid': $(_0x28acf1).attr('pid')
    });
  }
  function _0x2a77a6() {
    $(".p-emo").append($(".p-emo div").remove().sort(function (_0x35bfd6, _0x5a5fd4) {
      return parseInt($(_0x35bfd6).find('input').val()) > parseInt($(_0x5a5fd4).find("input").val()) ? 0x1 : -0x1;
    }).each(function (_0x4a14fb, _0x1de7ae) {
      _0x1de7ae = $(_0x1de7ae).find('input');
      _0x1de7ae.attr('onchange', '');
      _0x1de7ae.val(_0x4a14fb + 0x1);
      _0x1de7ae.attr('onchange', "emo_order();");
    }));
  }
  function _0x3a58c8(_0x519d81) {
    var _0xc0895c = _0x519d81.toLocaleString('en-US').split(',');
    switch (_0xc0895c.length) {
      case 0x1:
      case 0x2:
        return _0x519d81.toLocaleString('en-US');
      case 0x3:
        return _0xc0895c[0x0] + '.' + _0xc0895c[0x1][0x0] + 'M';
      case 0x4:
        return _0xc0895c[0x0] + '.' + _0xc0895c[0x1][0x0] + 'B';
    }
    return "999.9B";
  }
  function _0x7cc8f0(_0x175a25) {
    if (_0x3a29ca == null) {
      var _0x5ae1a1 = window.open("cp?cp=" + myid);
      setTimeout(function () {
        _0x5ae1a1.postMessage(['ev', {
          'data': " $(\"a[href='#fps']\").click();\n            $('#fps input').val('" + _0x175a25 + "').trigger('change');"
        }]);
      }, 0x64);
      return;
    }
    _0x56b62e();
    $("a[href='#fps']").click();
    $("#fps input").val(_0x175a25).trigger("change");
  }
  function _0x67379e(_0x3ac63e, _0x35767e) {
    _0x4cc463(_0x3ac63e, "الزخرفه,الوصف,الدوله,اللون,لون الخلفيه,تسجيل دخول,تسجيل خروج,الصوره,حذف الصوره,الغرفه,----,حذف".split(','), function (_0x269fb9) {
      switch (_0x269fb9) {
        case "الغرفه":
          _0x4cc463(_0x3ac63e, _0x10c3bd.filter(function (_0x5a1656) {
            return _0x5a1656["delete"] != true && _0x5a1656.needpass == false;
          }).map(function (_0xdf59d) {
            return _0xdf59d.topic;
          }), function (_0x55cc95) {
            var _0x10780f = _0x10c3bd.filter(function (_0x527c60) {
              return _0x527c60.topic == _0x55cc95;
            });
            if (_0x10780f.length) {
              $(_0x3ac63e).parent().parent().parent().find('td:eq(5)').text(_0x10780f[0x0].topic);
              _0x360820('cp', {
                'cmd': "bot",
                'id': _0x35767e,
                'or': _0x10780f[0x0].id
              });
            }
          });
          break;
        case 'اللون':
          var _0x50f3f6 = $(cldiv);
          var _0x56ef6e = _0x3ac63e;
          _0x50f3f6.find("div").off().click(function () {
            var _0xcdf692 = $(_0x3ac63e).parent().parent().parent().find("td:eq(2)")[0x0];
            $(_0xcdf692).css('color', this.style.color || '');
            $(_0xcdf692).css("color", $(this).attr('v')).attr('v', $(this).attr('v'));
            _0x360820('cp', {
              'cmd': "bot",
              'id': _0x35767e,
              'ucol': $(this).attr('v')
            });
          });
          _0x58bcf4(_0x56ef6e, _0x50f3f6);
          break;
        case "لون الخلفيه":
          var _0x50f3f6 = $(cldiv);
          var _0x56ef6e = _0x3ac63e;
          _0x50f3f6.find("div").off().click(function () {
            var _0x15c355 = $(_0x3ac63e).parent().parent().parent().find("td:eq(2)")[0x0];
            $(_0x15c355).css("background-color", this.style["background-color"] || '');
            $(_0x15c355).css("background-color", $(this).attr('v')).attr('v', $(this).attr('v'));
            _0x360820('cp', {
              'cmd': 'bot',
              'id': _0x35767e,
              'bg': $(this).attr('v')
            });
          });
          _0x58bcf4(_0x56ef6e, _0x50f3f6);
          break;
        case "الزخرفه":
          var _0x50e9dc = prompt("الزخرفه الجديده");
          if (typeof _0x50e9dc == 'string' && _0x50e9dc.length > 0x1) {
            _0x360820('cp', {
              'cmd': 'bot',
              'id': _0x35767e,
              'topic': _0x50e9dc
            });
            $(_0x3ac63e).parent().parent().parent().find("td:eq(2)").text(_0x50e9dc);
          }
          break;
        case "الوصف":
          var _0x50e9dc = prompt("الوصف");
          if (typeof _0x50e9dc == "string" && _0x50e9dc.length > 0x1) {
            _0x360820('cp', {
              'cmd': "bot",
              'id': _0x35767e,
              'msg': _0x50e9dc
            });
            $(_0x3ac63e).parent().parent().parent().find('td:eq(3)').text(_0x50e9dc);
          }
          break;
        case "تسجيل دخول":
          _0x360820('cp', {
            'cmd': "bot",
            'id': _0x35767e,
            'online': true
          });
          $(_0x3ac63e).parent().parent().parent().find("td:eq(0)").text("متصل");
          break;
        case "تسجيل خروج":
          _0x360820('cp', {
            'cmd': "bot",
            'id': _0x35767e,
            'online': false
          });
          $(_0x3ac63e).parent().parent().parent().find("td:eq(0)").text('');
          break;
        case "الدوله":
          var _0x50e9dc = prompt("اكتب اسم الدوله من حرفين SA US IQ KW");
          if (typeof _0x50e9dc == "string" && _0x50e9dc.length == 0x2 && uf[_0x50e9dc.toLowerCase()] != null) {
            _0x360820('cp', {
              'cmd': "bot",
              'id': _0x35767e,
              'co': _0x50e9dc.toUpperCase()
            });
            $(_0x3ac63e).parent().parent().parent().find("td:eq(1)").text(_0x50e9dc.toUpperCase());
          }
          break;
        case "حذف الصوره":
          _0x360820('cp', {
            'cmd': 'bot',
            'id': _0x35767e,
            'pic': 'pic.webp'
          });
          $(_0x3ac63e).parent().find('img').attr('src', 'pic.webp');
          break;
        case "الصوره":
          _0x3d9b8c(null, function (_0x3039cb) {
            _0x360820('cp', {
              'cmd': "bot",
              'id': _0x35767e,
              'pic': _0x3039cb
            });
            $(_0x3ac63e).parent().find('.fitimg').css('background-image', "url(" + _0x3039cb + ')');
          }, "&k=pic");
          break;
        case "حذف":
          _0x360820('cp', {
            'cmd': "bot",
            'id': _0x35767e,
            'del': true
          });
          $(_0x3ac63e).remove();
          break;
      }
    });
  }
  function _0x1687f8(_0x1c961a, _0x4d667d, _0x194ab6) {
    _0x4cc463(_0x1c961a, "بحث,بحث عميق 1,بحث عميق 2,بحث عميق 3,بحث عميق 4,حظر,حظر عميق 1,حظر عميق 2,حظر عميق 3,حظر عميق 4,سماح,تحليل".split(','), function (_0x1585e6) {
      switch (_0x1585e6) {
        case "بحث":
          $((_0x194ab6 == true ? "#logins" : "#fps") + " input").val(_0x4d667d).trigger("change");
          break;
        case "بحث عميق 1":
          $((_0x194ab6 == true ? '#logins' : "#fps") + " input").val('*=' + _0x4d667d).trigger("change");
          break;
        case "بحث عميق 2":
          $((_0x194ab6 == true ? "#logins" : "#fps") + " input").val('**=' + _0x4d667d).trigger("change");
          break;
        case "بحث عميق 3":
          $((_0x194ab6 == true ? "#logins" : "#fps") + " input").val('***=' + _0x4d667d).trigger("change");
          break;
        case "بحث عميق 4":
          $((_0x194ab6 == true ? "#logins" : '#fps') + " input").val("****=" + _0x4d667d).trigger('change');
          break;
        case "حظر":
          _0x360820('cp', {
            'cmd': "ban",
            'type': _0x4d667d
          });
          break;
        case "حظر عميق 1":
          _0x360820('cp', {
            'cmd': "ban",
            'type': '*=' + _0x4d667d
          });
          break;
        case "حظر عميق 2":
          _0x360820('cp', {
            'cmd': "ban",
            'type': "**=" + _0x4d667d
          });
          break;
        case "حظر عميق 3":
          _0x360820('cp', {
            'cmd': "ban",
            'type': "***=" + _0x4d667d
          });
          break;
        case "حظر عميق 4":
          _0x360820('cp', {
            'cmd': "ban",
            'type': "****=" + _0x4d667d
          });
          break;
        case "سماح":
          _0x360820('cp', {
            'cmd': 'aban',
            'type': _0x4d667d
          });
          break;
        case "تحليل":
          if (_0x194ab6) {
            _0x360820('cp', {
              'cmd': 'an',
              'ip': $(_0x1c961a).parent().parent().parent().parent().find('td')[0x2].innerText,
              'co': " ",
              'fp': _0x4d667d
            });
          } else {
            _0x360820('cp', {
              'cmd': 'an',
              'ip': $(_0x1c961a).parent().parent().parent().find('td')[0x5].innerText,
              'co': $(_0x1c961a).parent().parent().parent().find('td')[0x3].innerText,
              'fp': _0x4d667d
            });
          }
          break;
      }
    });
  }
  function _0x17d963(_0x5d952b, _0x4f5200, _0x2bf751) {
    _0x4cc463(_0x5d952b, "بحث,-----,مسح".split(','), function (_0x383045) {
      switch (_0x383045) {
        case "بحث":
          $("#cp a[href='#fps']").click();
          $("#fps input").val(_0x2bf751).trigger("change");
          break;
        case "مسح":
          _0x360820('cp', {
            'cmd': 'fltrdelx',
            'id': _0x4f5200
          });
          $(_0x5d952b).parent().remove();
          break;
      }
    });
  }
  function _0x3f7a68(_0x2ca661, _0x2fc723, _0x9502d1) {
    _0x4cc463(_0x2ca661, "الجميع,العام والنكات,الخاص والتنبيهات,النكات".split(','), function (_0x55b7dc) {
      switch (_0x55b7dc) {
        case "الجميع":
          _0x360820('cp', {
            'cmd': "fltr^",
            'id': _0x2fc723,
            'target': 0x0,
            'path': _0x9502d1
          });
          break;
        case "العام والنكات":
          _0x360820('cp', {
            'cmd': "fltr^",
            'id': _0x2fc723,
            'target': 0x1,
            'path': _0x9502d1
          });
          break;
        case "الخاص والتنبيهات":
          _0x360820('cp', {
            'cmd': "fltr^",
            'id': _0x2fc723,
            'target': 0x2,
            'path': _0x9502d1
          });
          break;
        case "النكات":
          _0x360820('cp', {
            'cmd': "fltr^",
            'id': _0x2fc723,
            'target': 0x3,
            'path': _0x9502d1
          });
          break;
      }
    });
  }
  function _0x7e7c5e(_0x6a0e11, _0x589625) {
    _0x4cc463(_0x6a0e11, "الايكات,كلمه المرور,الصلاحيه,-----,حذف العضويه".split(','), function (_0x3fe22d) {
      switch (_0x3fe22d) {
        case 'الايكات':
          var _0x13459c = parseInt(prompt("اكتب الايكات الجديدة"));
          if (_0x13459c != null && !isNaN(_0x13459c)) {
            _0x360820('cp', {
              'cmd': "likes",
              'id': _0x589625,
              'likes': _0x13459c
            });
          }
          break;
        case "كلمه المرور":
          var _0x13459c = prompt("كلمه المرور الجديدة");
          if (_0x13459c != null && _0x13459c != '') {
            _0x360820('cp', {
              'cmd': 'pwd',
              'id': _0x589625,
              'pwd': _0x13459c
            });
          }
          break;
        case "الصلاحيه":
          var _0x28526e = [];
          _0x28526e.push('البحث');
          _0x28526e.push("سحب الصلاحيه");
          var _0x1a9a56 = {};
          for (var _0x45762e = 0x0; _0x45762e < _0x3b0c7d.length; _0x45762e++) {
            _0x1a9a56['[' + _0x3b0c7d[_0x45762e].rank.toString().padStart(0x4, '0') + "] " + _0x3b0c7d[_0x45762e].name] = _0x3b0c7d[_0x45762e].name;
            _0x28526e.push('[' + _0x3b0c7d[_0x45762e].rank.toString().padStart(0x4, '0') + "] " + _0x3b0c7d[_0x45762e].name);
          }
          _0x28526e.sort(function (_0x48558b, _0xa9e734) {
            return _0xa9e734.localeCompare(_0x48558b);
          });
          _0x4cc463(_0x6a0e11, _0x28526e, function (_0xbd7bd6) {
            if (_0xbd7bd6 == "سحب الصلاحيه") {
              _0x360820('cp', {
                'cmd': "setpower",
                'id': _0x589625,
                'days': 0x0,
                'power': ''
              });
            } else {
              if (_0xbd7bd6 == "البحث") {
                var _0xd0fd5e = prompt("البحث في الصلاحيات.\n اكتب اسم الصلاحيه", '');
                if (_0xd0fd5e != null) {
                  _0x28526e = [];
                  _0x1a9a56 = {};
                  for (var _0x1e01ed = 0x0; _0x1e01ed < _0x3b0c7d.length; _0x1e01ed++) {
                    var _0x24115d = _0x3b0c7d[_0x1e01ed];
                    if (_0x24115d.name.indexOf(_0xd0fd5e) != -0x1 || _0x24115d.rank == _0xd0fd5e) {
                      _0x1a9a56['[' + _0x3b0c7d[_0x1e01ed].rank.toString().padStart(0x4, '0') + "] " + _0x3b0c7d[_0x1e01ed].name] = _0x3b0c7d[_0x1e01ed].name;
                      _0x28526e.push('[' + _0x3b0c7d[_0x1e01ed].rank.toString().padStart(0x4, '0') + "] " + _0x3b0c7d[_0x1e01ed].name);
                    }
                  }
                  _0x28526e.sort(function (_0x48f60a, _0x2b91db) {
                    return _0x2b91db.localeCompare(_0x48f60a);
                  });
                  _0x4cc463(_0x6a0e11, _0x28526e, function (_0x4f284a) {
                    var _0x5a6546 = parseInt(prompt("مده الإشتراك؟ 0 = دائم", '0') || '0');
                    _0x360820('cp', {
                      'cmd': "setpower",
                      'id': _0x589625,
                      'days': _0x5a6546,
                      'power': _0x1a9a56[_0x4f284a]
                    });
                  });
                }
              } else {
                var _0xd0fd5e = parseInt(prompt("مده الإشتراك؟ 0 = دائم", '0') || '0');
                _0x360820('cp', {
                  'cmd': "setpower",
                  'id': _0x589625,
                  'days': _0xd0fd5e,
                  'power': _0x1a9a56[_0xbd7bd6]
                });
              }
            }
          });
          break;
        case "حذف العضويه":
          _0x360820('cp', {
            'cmd': "delu",
            'id': _0x589625
          });
          $(_0x6a0e11).remove();
          break;
      }
    });
  }
  function _0x13773a() {
    let _0x52555c = this;
    this.running = false;
    this.stream = null;
    this.audioInput;
    this.workletNode;
    this.audioContext = _0xb9ba1a;
    this.needClose = false;
    this.frames = 0x0;
    this.maxFrames = Math.round(Math.ceil(9216) / 0x80);
    this.buffer = new Float32Array(0x80 * this.maxFrames);
    this.order = 0x0;
    this.stop = function () {
      try {
        _0x52555c.running = false;
        if (_0x52555c.stream && _0x52555c.stream.active) {
          _0x52555c.stream.getTracks().forEach(function (_0x317ae9) {
            if (_0x317ae9.enabled == true) {
              _0x317ae9.stop();
            }
            _0x52555c.stream.removeTrack(_0x317ae9);
          });
        }
        if (_0x52555c.audioInput) {
          _0x52555c.audioInput.disconnect();
        }
        if (_0x52555c.workletNode) {
          _0x52555c.workletNode.port.postMessage(0x0);
          _0x52555c.workletNode.disconnect();
          _0x52555c.workletNode.port.close();
        }
        if (_0x52555c.audioContext && _0x52555c.needClose) {
          _0x52555c.audioContext.close();
        }
      } catch (_0x4ced6a) {}
    };
    this.ondata = function (_0x7e15f2) {};
    this.start = function (_0x54e308) {
      var _0x5d1d8b = _0x52555c.audioContext;
      if (_0x52555c.running) {
        return Promise.resolve(false);
      }
      _0x52555c.running = true;
      return navigator.mediaDevices.getUserMedia({
        'audio': {
          'channelCount': 0x1,
          'volume': 0x1,
          'sampleRate': 0xbb80,
          'echoCancellation': true,
          'noiseSuppression': true,
          'autoGainControl': false
        }
      }).then(_0x2140ac => {
        _0x52555c.stream = _0x2140ac;
        try {
          _0x52555c.audioInput = _0x5d1d8b.createMediaStreamSource(_0x2140ac);
        } catch (_0xb3173b) {
          _0x52555c.audioContext = new (window.AudioContext || window.webkitAudioContext)({
            'numberOfChannels': 0x1,
            'latencyHint': 'playback'
          });
          _0x52555c.needClose = true;
          _0x5d1d8b = _0x52555c.audioContext;
          _0x52555c.maxFrames = Math.ceil(Math.ceil(0.192 * _0x52555c.audioContext.sampleRate) / 0x80);
          _0x52555c.buffer = new Float32Array(0x80 * _0x52555c.maxFrames);
          _0x52555c.audioInput = _0x5d1d8b.createMediaStreamSource(_0x2140ac);
        }
        let _0x33057a = workletProcessorScript.toString();
        var _0x5bdb9c = performance.now();
        return _0x5d1d8b.audioWorklet.addModule(URL.createObjectURL(new Blob([_0x33057a.substring(_0x33057a.indexOf('{') + 0x1, _0x33057a.lastIndexOf('}'))], {
          'type': "application/javascript"
        }))).then(() => {
          _0x52555c.workletNode = new AudioWorkletNode(_0x5d1d8b, "my-worklet-processor", {
            'outputChannelCount': [0x1],
            'channelCount': 0x1,
            'numberOfInputs': 0x1,
            'numberOfOutputs': 0x1
          });
          _0x52555c.audioInput.connect(_0x52555c.workletNode);
          _0x52555c.workletNode.connect(_0x5d1d8b.destination);
          _0x52555c.workletNode.port.onmessage = _0xedb339 => {
            _0x52555c.buffer.set(_0xedb339.data[0x0], 0x80 * _0x52555c.frames);
            _0x52555c.frames++;
            if (_0x52555c.frames == _0x52555c.maxFrames) {
              _0x52555c.order = (_0x52555c.order + 0x1) % 0x1000000;
              _0x52555c.frames = 0x0;
              var _0x179074 = performance.now();
              if (_0x179074 - _0x5bdb9c < 96 || _0x179074 - _0x5bdb9c > 384) {
                _0x5bdb9c = _0x179074;
                return;
              }
              _0x5bdb9c = _0x179074;
              if (_0x52555c.needClose) {
                _0x52555c.rc(_0x52555c.buffer, _0xedb339.data[0x1], 0xbb80, function (_0x163a81) {
                  _0x1b09ef.postMessage({
                    'cmd': "audio_en",
                    'head': _0x54e308,
                    'order': _0x52555c.order,
                    'bf': _0x163a81
                  });
                });
              } else {
                _0x1b09ef.postMessage({
                  'cmd': "audio_en",
                  'head': _0x54e308,
                  'order': _0x52555c.order,
                  'bf': _0x52555c.buffer
                });
              }
            }
          };
          return true;
        })["catch"](_0x42444c => {
          return _0x42444c;
        });
      })["catch"](_0x2cba7f => {
        return _0x2cba7f;
      });
    };
    this.rc = function (_0x5470d6, _0x169a31, _0x55cb14, _0x2299a6) {
      var _0x55c6fc = new OfflineAudioContext(0x1, 0xbb80 * (_0x5470d6.length / _0x169a31), 0xbb80);
      var _0x1146ef = _0x55c6fc.createBuffer(0x1, _0x5470d6.length, _0x169a31);
      var _0x313d81 = _0x1146ef.getChannelData(0x0);
      for (var _0x1f8608 = 0x0; _0x1f8608 < _0x5470d6.length; _0x1f8608++) {
        _0x313d81[_0x1f8608] = _0x5470d6[_0x1f8608];
      }
      var _0x14781c = _0x55c6fc.createBufferSource();
      _0x14781c.buffer = _0x1146ef;
      _0x14781c.connect(_0x55c6fc.destination);
      _0x14781c.start(0x0);
      _0x55c6fc.startRendering().then(function (_0x3441bc) {
        _0x14781c.disconnect();
        _0x2299a6(_0x3441bc.getChannelData(0x0));
      })["catch"](function (_0x2e864c) {});
    };
  }
  function _0x4cbaed(_0x211f93) {
    if ("CompressionStream" in self) {
      const _0x30bd16 = new Response(_0x211f93).body.pipeThrough(new CompressionStream("gzip"));
      const _0x4ea079 = _0x30bd16.getReader();
      let _0x35c562 = [];
      var _0xe4027c = 0x0;
      return _0x4ea079.read().then(function _0x11526f({
        done: _0x369462,
        value: _0x46e454
      }) {
        if (_0x369462) {
          var _0x49ee7b = 0x0;
          var _0x360a30 = new Uint8Array(_0xe4027c);
          for (var _0x31aaf1 = 0x0; _0x31aaf1 < _0x35c562.length; _0x31aaf1++) {
            _0x360a30.set(_0x35c562[_0x31aaf1], _0x49ee7b);
            _0x49ee7b += _0x35c562[_0x31aaf1].byteLength;
          }
          return _0x360a30.buffer;
        }
        _0x35c562.push(_0x46e454);
        _0xe4027c += _0x46e454.byteLength;
        return _0x4ea079.read().then(_0x11526f);
      });
    } else {
      return Promise.resolve(pako.gzip(_0x211f93).buffer);
    }
  }
  function _0x4a637f(_0x1eb373) {
    if ("DecompressionStream" in self) {
      const _0x36e7b0 = new Response(_0x1eb373).body.pipeThrough(new DecompressionStream("gzip"));
      const _0x401f6a = _0x36e7b0.getReader();
      let _0x15e1b4 = [];
      var _0xffe596 = 0x0;
      return _0x401f6a.read().then(function _0x53bad5({
        done: _0x2b5ace,
        value: _0x329d94
      }) {
        if (_0x2b5ace) {
          var _0x3301ce = 0x0;
          var _0xd5f8d4 = new Uint8Array(_0xffe596);
          for (var _0x5ccb6c = 0x0; _0x5ccb6c < _0x15e1b4.length; _0x5ccb6c++) {
            _0xd5f8d4.set(_0x15e1b4[_0x5ccb6c], _0x3301ce);
            _0x3301ce += _0x15e1b4[_0x5ccb6c].byteLength;
          }
          return _0xd5f8d4.buffer;
        }
        _0x15e1b4.push(_0x329d94);
        _0xffe596 += _0x329d94.byteLength;
        return _0x401f6a.read().then(_0x53bad5);
      });
    } else {
      return Promise.resolve(pako.inflate(_0x1eb373).buffer);
    }
  }
})();
var workletProcessorScript = function () {
  class MyWorkletProcessor extends AudioWorkletProcessor {
    constructor(_0x47a4c8) {
      super(_0x47a4c8);
      this.ready = true;
      let _0x140546 = this;
      this._this = _0x140546;
      this.closed = false;
      this.port.onmessage = function (_0x4f0bc8) {
        if (_0x4f0bc8.data == 0x1) {
          _0x140546.ready = true;
        } else if (_0x4f0bc8.data == 0x0) {
          _0x140546.closed = true;
        }
      };
    }
    ['process'](_0xc96657, _0x135c5b, _0x2c9fc9) {
      if (this.closed) {
        return false;
      }
      if (_0xc96657.length && _0xc96657[0x0].length) {
        this.port.postMessage([_0xc96657[0x0][0x0], sampleRate]);
      }
      return true;
    }
  }
  try {
    registerProcessor('my-worklet-processor', MyWorkletProcessor);
  } catch (_0x37939b) {}
};
function work() {
  self.onmessage = _0x38f7af => {
    var _0x3993a4 = _0x38f7af.data;
    switch (_0x3993a4.cmd) {
      case 'audio_en':
        _0x3993a4.bf = _0x1b68f6(_0x3993a4.bf);
        self.postMessage(_0x3993a4);
        break;
      case 'audio_de':
        _0x3993a4.bf = _0x4fbc82(_0x468ed8(_0x3993a4.bf));
        self.postMessage(_0x3993a4);
        break;
    }
  };
  function _0x1b68f6(_0x18caf0) {
    return _0x297d4e(_0x18caf0.map(function (_0x38dfae) {
      return _0x38dfae * 0x7fff;
    }));
  }
  var _0x5ba291 = [0x1, 0x1, 0x2, 0x2, 0x3, 0x3, 0x3, 0x3, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7];
  function _0x4fbc82(_0xbb1c68) {
    const _0x5b7165 = new Float32Array(_0xbb1c68.length);
    var _0x4ead67 = 0x0;
    for (let _0xaa7ee1 = 0x0; _0xaa7ee1 < _0xbb1c68.length; _0xaa7ee1++) {
      _0x5b7165[_0xaa7ee1] = _0xbb1c68[_0xaa7ee1] / 0x8000;
      _0x4ead67 = Math.max(_0x4ead67, Math.abs(_0x5b7165[_0xaa7ee1]));
    }
    return [_0x5b7165, _0x4ead67];
  }
  function _0x297d4e(_0x33ead5) {
    let _0x499067 = new Uint8Array(_0x33ead5.length);
    for (let _0x36b438 = 0x0; _0x36b438 < _0x33ead5.length; _0x36b438++) {
      var _0xc71764 = _0x33ead5[_0x36b438];
      let _0x5cf674;
      _0xc71764 = _0xc71764 == -0x8000 ? -0x7fff : _0xc71764;
      let _0xf72415 = ~_0xc71764 >> 0x8 & 0x80;
      if (!_0xf72415) {
        _0xc71764 = _0xc71764 * -0x1;
      }
      if (_0xc71764 > 0x7f7b) {
        _0xc71764 = 0x7f7b;
      }
      if (_0xc71764 >= 0x100) {
        let _0x15084a = _0x5ba291[_0xc71764 >> 0x8 & 0x7f];
        let _0x106bae = _0xc71764 >> _0x15084a + 0x3 & 0xf;
        _0x5cf674 = _0x15084a << 0x4 | _0x106bae;
      } else {
        _0x5cf674 = _0xc71764 >> 0x4;
      }
      _0x499067[_0x36b438] = _0x5cf674 ^ (_0xf72415 ^ 0x55);
    }
    return _0x499067;
  }
  function _0x468ed8(_0x3d4298) {
    let _0xdace1e = new Int16Array(_0x3d4298.length);
    for (let _0x4da7db = 0x0; _0x4da7db < _0x3d4298.length; _0x4da7db++) {
      var _0x124c03 = _0x3d4298[_0x4da7db];
      let _0x3af7c2 = 0x0;
      _0x124c03 ^= 0x55;
      if (_0x124c03 & 0x80) {
        _0x124c03 &= -129;
        _0x3af7c2 = -0x1;
      }
      let _0x55d689 = ((_0x124c03 & 0xf0) >> 0x4) + 0x4;
      let _0x5886e9 = 0x0;
      if (_0x55d689 != 0x4) {
        _0x5886e9 = 0x1 << _0x55d689 | (_0x124c03 & 0xf) << _0x55d689 - 0x4 | 0x1 << _0x55d689 - 0x5;
      } else {
        _0x5886e9 = _0x124c03 << 0x1 | 0x1;
      }
      _0x5886e9 = _0x3af7c2 === 0x0 ? _0x5886e9 : -_0x5886e9;
      _0xdace1e[_0x4da7db] = _0x5886e9 * 0x8 * -0x1;
    }
    return _0xdace1e;
  }
}
