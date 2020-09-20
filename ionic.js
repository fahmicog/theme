'use strict';
/** @type {!Array} */
var _0xe6f1 = ["href", "location", "origin", "/", "/?m=1", "match", "isPage", "isPost", "isMultipleItems", "isPreview", "log", "i", "c", "d", "f", "k", "!isPreview", "j", "scrollTop", "show", "addClass", ".totop", "removeClass", "scroll", "0", "animate", "html,body", "click", "data-src", "removeAttr", "src", "data", "attr", "each", "img", "HTML3", "getElementById", "igniplexTengah", "add", "classList", ".igniplexTengah", "querySelectorAll", ".post-body br, .post-body p", "length", "from", "slice", 
"nodeName", "P", "insertBefore", "parentNode", "nextSibling", "Next", "Previous", "Latest", "a.blog-pager-newer-link", "a.blog-pager-older-link", ".home-link", "ripple", "<span>", "</span> <span>", "text", "first", ".post .post-title", "find", "</span>", "html", "get", ".post-title", "stream", "parent", "substring", "search", "&", "split", "=", ".ignielPagination", '<div class="ignielPagination" style="display:none;">Blogspot Pagination by igniel.com</div>', "before", '<div id="ignielPagination"></div><div class="clear"></div>', 
"after", "last", "page", "e", "hide", "eq", '<a href="', "pathname", "?", '" title="Page ', '" rel="nofollow">', "</a>", "append", "#ignielPagination", '<span class="selected">1</span>', "replaceWith", "#ignielPagination > a", '<span class="selected">', "script", "createElement", "type", "text/javascript", "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", "async", "onload", "a", "b", "l", "appendChild", "head", "getElementsByTagName", "tampilan_per_halaman", "halaman_bernomor", 
"tampilan_nomor_navigasi", "firstText", "lastText", "", "numPages", "h", "undefined", "First", "Last", "perPage", '<a href="/" class="first" title="', '">', '<a href="/search/label/', "?max-results=", '" class="first" title="', '<a href="/" title="Page 1">1</a>', '" title="Page 1">1</a>', '<span class="dot">...</span>', '<span class="current">', '<a onclick="rain.h.d(', ');return false" title="Page ', '<a onclick="rain.h.e(', '<a class="last" onclick="rain.h.d(', ');return false" title="', "</a></span>", 
"pageArea", "getElementsByName", "blog-pager", "innerHTML", "number", "feed", "openSearch$totalResults", "/search/label/", "indexOf", "?updated-max", "?max", "?q=", "#page=", "/feeds/posts/summary?max-results=1&alt=json-in-script&callback=rain.h.b", "body", "label", "max-results=", "/feeds/posts/summary/-/", "?alt=json-in-script&callback=rain.h.b&max-results=1", "/feeds/posts/summary?start-index=", "&max-results=1&alt=json-in-script&callback=rain.h.f", "setAttribute", "?start-index=", "entry", "$t", 
"published", "/search?updated-max=", "&max-results=", "?updated-max=", "pakai", "adblock", "adsbygoogle", "AdSense terpasang...", "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", "onerror", "div", "id", "ignielAdBlock", '<div class="isiAds"><svg viewBox="0 0 24 24"><path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path></svg>', "</div>", "overflow", "style", "hidden", "Tidak ada AdSense...", ".igniplexShare", "https://source.igniel.com/sharecounter", 
"POST", "json", "link[rel=canonical]", "font-size", "26px", "css", "facebook", "ignielShare", "pinterest", ".igniplexShare .total", "Terjadi kesalahan. Cek koneksi internet atau refresh halaman, kak.", "ajax", "#igniplexHeader .header-inner .igniplexMenu .MenuList ul li a:not(:only-child)", "ul", "next", "preventDefault", "slideToggle", "open", "toggleClass", "g", "addEventListener", "load", "attachEvent", "unwrap", "contents", "#comments p"];
var rain = {
  a : function() {
    let displayFormat = window[_0xe6f1[1]][_0xe6f1[0]];
    let fullwithauthor = window[_0xe6f1[1]][_0xe6f1[2]] + _0xe6f1[3];
    let encyclopedia = window[_0xe6f1[1]][_0xe6f1[2]] + _0xe6f1[4];
    let _0x7cbax5;
    let _0x7cbax6;
    let _0x7cbax7;
    let _0x7cbax8;
    let _0x7cbax9;
    let _0x7cbaxa;
    let _0x7cbaxb;
    let artistTrack = /(\/\d+\/)/gi;
    let GET_AUTH_URL_TIMEOUT = /(\/\d+\/\d+\/)/gi;
    let numKeysDeleted = /(\/\d+\/\d+\/\S+[\\.]html)/gi;
    let postDateGmt = /(\/p\/.*)/gi;
    let _maskLayer = /(\/search([//?])q.*)/gi;
    let _maskLayerSimulate = /(\/search\/label\/.*)/gi;
    let topShowDialog = /(\/search([//?])updated.*)/gi;
    let button2Component = /(\/b\/post-preview.*)/gi;
    if (displayFormat[_0xe6f1[5]](postDateGmt)) {
      _0x7cbax5 = _0xe6f1[6];
    } else {
      if (displayFormat[_0xe6f1[5]](numKeysDeleted)) {
        _0x7cbax5 = _0xe6f1[7];
      } else {
        if (displayFormat == fullwithauthor || displayFormat == encyclopedia || displayFormat[_0xe6f1[5]](_maskLayer) || displayFormat[_0xe6f1[5]](_maskLayerSimulate) || displayFormat[_0xe6f1[5]](topShowDialog) || displayFormat[_0xe6f1[5]](artistTrack) || displayFormat[_0xe6f1[5]](GET_AUTH_URL_TIMEOUT)) {
          _0x7cbax5 = _0xe6f1[8];
        } else {
          if (displayFormat[_0xe6f1[5]](button2Component)) {
            _0x7cbax5 = _0xe6f1[9];
          }
        }
      }
    }
    if (_0x7cbax5 == _0xe6f1[8]) {
      console[_0xe6f1[10]](_0xe6f1[8]);
      rain[_0xe6f1[11]]();
    } else {
      if (_0x7cbax5 == _0xe6f1[7] || _0x7cbax5 == _0xe6f1[9]) {
        console[_0xe6f1[10]](_0xe6f1[7]);
        rain[_0xe6f1[12]]();
        rain[_0xe6f1[13]]();
        rain[_0xe6f1[14]]();
        rain[_0xe6f1[15]]();
      } else {
        if (_0x7cbax5 == _0xe6f1[6] || _0x7cbax5 == _0xe6f1[9]) {
          console[_0xe6f1[10]](_0xe6f1[6]);
        }
      }
    }
    if (_0x7cbax5 != _0xe6f1[9]) {
      console[_0xe6f1[10]](_0xe6f1[16]);
      rain[_0xe6f1[17]]();
    }
  },
  b : function() {
    $(document)[_0xe6f1[23]](function() {
      return $(document)[_0xe6f1[18]]() > 300 ? $(_0xe6f1[21])[_0xe6f1[20]](_0xe6f1[19]) : $(_0xe6f1[21])[_0xe6f1[22]](_0xe6f1[19]);
    });
    $(_0xe6f1[21])[_0xe6f1[27]](function() {
      return $(_0xe6f1[26])[_0xe6f1[25]]({
        scrollTop : _0xe6f1[24]
      });
    });
    $(_0xe6f1[34])[_0xe6f1[33]](function() {
      $(this)[_0xe6f1[32]](_0xe6f1[30], $(this)[_0xe6f1[31]](_0xe6f1[30]))[_0xe6f1[29]](_0xe6f1[28]);
    });
  },
  c : function() {
    if (document[_0xe6f1[36]](_0xe6f1[35])) {
      document[_0xe6f1[36]](_0xe6f1[35])[_0xe6f1[39]][_0xe6f1[38]](_0xe6f1[37]);
    }
    let conf_lang_text = document[_0xe6f1[41]](_0xe6f1[40]);
    if (conf_lang_text) {
      setTimeout(function() {
        let signedTransactions = document[_0xe6f1[41]](_0xe6f1[42]);
        let slice = conf_lang_text[_0xe6f1[43]] + 1;
        let GUTTER_SIZE = signedTransactions[_0xe6f1[43]] / slice;
        c = Array[_0xe6f1[44]]({
          length : slice
        }, (canCreateDiscussions, isSlidingUp) => {
          return isSlidingUp + 1;
        });
        d = c[_0xe6f1[45]](0, -1);
        for (let i = 0; i < d[_0xe6f1[43]]; i++) {
          let MINOR_INTERVAL_RATIO = d[i];
          let signedTransactionsCounter = parseInt(GUTTER_SIZE * MINOR_INTERVAL_RATIO);
          if (signedTransactions[signedTransactionsCounter][_0xe6f1[46]] == _0xe6f1[47]) {
            signedTransactions[signedTransactionsCounter][_0xe6f1[49]][_0xe6f1[48]](conf_lang_text[i], signedTransactions[signedTransactionsCounter]);
          } else {
            signedTransactions[signedTransactionsCounter][_0xe6f1[49]][_0xe6f1[48]](conf_lang_text[i], signedTransactions[signedTransactionsCounter][_0xe6f1[50]]);
          }
        }
      }, 100);
    }
  },
  d : function() {
    !function(f) {
      var _0x7cbax1d = _0xe6f1[51];
      var _0x7cbax1e = _0xe6f1[52];
      var _0x7cbax1f = _0xe6f1[53];
      var dependencyTargetCommentKey = f(_0xe6f1[54]);
      var targetDependencyCommentKey = f(_0xe6f1[55]);
      var $realtime = $(_0xe6f1[56]);
      f[_0xe6f1[66]](dependencyTargetCommentKey[_0xe6f1[32]](_0xe6f1[0]), function(widthCtrl) {
        dependencyTargetCommentKey[_0xe6f1[65]](_0xe6f1[58] + _0x7cbax1d + _0xe6f1[59] + f(widthCtrl)[_0xe6f1[63]](_0xe6f1[62])[_0xe6f1[61]]()[_0xe6f1[60]]() + _0xe6f1[64])[_0xe6f1[22]](_0xe6f1[57]);
      }, _0xe6f1[65]);
      f[_0xe6f1[66]](targetDependencyCommentKey[_0xe6f1[32]](_0xe6f1[0]), function(widthCtrl) {
        targetDependencyCommentKey[_0xe6f1[65]](_0xe6f1[58] + _0x7cbax1e + _0xe6f1[59] + f(widthCtrl)[_0xe6f1[63]](_0xe6f1[62])[_0xe6f1[61]]()[_0xe6f1[60]]() + _0xe6f1[64])[_0xe6f1[22]](_0xe6f1[57]);
      }, _0xe6f1[65]);
      $realtime[_0xe6f1[65]](_0xe6f1[58] + _0x7cbax1f + _0xe6f1[59] + $(_0xe6f1[67])[_0xe6f1[61]]()[_0xe6f1[60]]() + _0xe6f1[64])[_0xe6f1[22]](_0xe6f1[57]);
      dependencyTargetCommentKey[_0xe6f1[69]]()[_0xe6f1[22]](_0xe6f1[57])[_0xe6f1[20]](_0xe6f1[68]);
      targetDependencyCommentKey[_0xe6f1[69]]()[_0xe6f1[22]](_0xe6f1[57])[_0xe6f1[20]](_0xe6f1[68]);
      $realtime[_0xe6f1[69]]()[_0xe6f1[22]](_0xe6f1[57])[_0xe6f1[20]](_0xe6f1[68]);
    }(jQuery);
  },
  e : function(n) {
    let _0x7cbax22 = decodeURIComponent(window[_0xe6f1[1]][_0xe6f1[71]][_0xe6f1[70]](1));
    let PL$13 = _0x7cbax22[_0xe6f1[73]](_0xe6f1[72]);
    let data;
    for (let PL$17 = 0; PL$17 < PL$13[_0xe6f1[43]]; PL$17++) {
      data = PL$13[PL$17][_0xe6f1[73]](_0xe6f1[74]);
      if (data[0] === n) {
        return data[1] === undefined ? true : data[1];
      }
    }
  },
  f : function() {
    let zIncLen = $(_0xe6f1[75])[_0xe6f1[43]];
    if (zIncLen != 0) {
      $(_0xe6f1[75])[_0xe6f1[61]]()[_0xe6f1[77]](_0xe6f1[76]);
      $(_0xe6f1[75])[_0xe6f1[80]]()[_0xe6f1[79]](_0xe6f1[78]);
      let command_codes = $(_0xe6f1[75]);
      let artistTrack = _0xe6f1[81];
      let data = rain[_0xe6f1[82]](artistTrack);
      command_codes[_0xe6f1[83]]();
      if (data === undefined) {
        command_codes[_0xe6f1[84]](0)[_0xe6f1[83]]();
        command_codes[_0xe6f1[84]](1)[_0xe6f1[19]]();
      } else {
        command_codes[_0xe6f1[84]](data)[_0xe6f1[19]]();
      }
      /** @type {number} */
      i = 1;
      for (; i <= zIncLen; i++) {
        $(_0xe6f1[92])[_0xe6f1[91]]($(_0xe6f1[85] + window[_0xe6f1[1]][_0xe6f1[86]] + _0xe6f1[87] + artistTrack + _0xe6f1[74] + i + _0xe6f1[88] + i + _0xe6f1[89] + i + _0xe6f1[90]));
      }
      if (data == undefined) {
        $(_0xe6f1[95])[_0xe6f1[84]](0)[_0xe6f1[94]](function() {
          return $(_0xe6f1[93]);
        });
      } else {
        $(_0xe6f1[95])[_0xe6f1[84]](rain[_0xe6f1[82]](artistTrack) - 1)[_0xe6f1[94]](function() {
          return $(_0xe6f1[96] + rain[_0xe6f1[82]](artistTrack) + _0xe6f1[64]);
        });
      }
    } else {
      $(_0xe6f1[92])[_0xe6f1[83]]();
    }
  },
  g : function() {
    let artistTrack = document[_0xe6f1[98]](_0xe6f1[97]);
    artistTrack[_0xe6f1[99]] = _0xe6f1[100];
    artistTrack[_0xe6f1[30]] = _0xe6f1[101];
    /** @type {boolean} */
    artistTrack[_0xe6f1[102]] = true;
    /**
     * @return {undefined}
     */
    artistTrack[_0xe6f1[103]] = function() {
      rain[_0xe6f1[104]]();
      rain[_0xe6f1[105]]();
      rain[_0xe6f1[106]]();
      otherScript();
    };
    document[_0xe6f1[109]](_0xe6f1[108])[0][_0xe6f1[107]](artistTrack);
  },
  h : {
    perPage : function() {
      return config[_0xe6f1[111]][_0xe6f1[110]];
    }(),
    numPages : function() {
      return config[_0xe6f1[111]][_0xe6f1[112]];
    }(),
    firstText : function() {
      return config[_0xe6f1[111]][_0xe6f1[113]];
    }(),
    lastText : function() {
      return config[_0xe6f1[111]][_0xe6f1[114]];
    }(),
    a : function(s) {
      var embed = _0xe6f1[115];
      /** @type {number} */
      var whiteRating = parseInt(rain[_0xe6f1[117]][_0xe6f1[116]] / 2);
      if (typeof firstText == _0xe6f1[118]) {
        firstText = _0xe6f1[119];
      }
      if (typeof lastText == _0xe6f1[118]) {
        lastText = _0xe6f1[120];
      }
      if (whiteRating == rain[_0xe6f1[117]][_0xe6f1[116]] - whiteRating) {
        /** @type {number} */
        rain[_0xe6f1[117]][_0xe6f1[116]] = whiteRating * 2 + 1;
      }
      /** @type {number} */
      pageStart = currentPageNo - whiteRating;
      if (pageStart < 1) {
        /** @type {number} */
        pageStart = 1;
      }
      /** @type {number} */
      lastPageNo = parseInt(s / rain[_0xe6f1[117]][_0xe6f1[121]]) + 1;
      if (lastPageNo - 1 == s / rain[_0xe6f1[117]][_0xe6f1[121]]) {
        /** @type {number} */
        lastPageNo = lastPageNo - 1;
      }
      /** @type {number} */
      pageEnd = pageStart + rain[_0xe6f1[117]][_0xe6f1[116]] - 1;
      if (pageEnd > lastPageNo) {
        /** @type {number} */
        pageEnd = lastPageNo;
      }
      /** @type {number} */
      var _0x7cbax29 = parseInt(currentPageNo) - 1;
      if (currentPageNo > 1) {
        if (currentPage == _0xe6f1[81]) {
          embed = embed + (_0xe6f1[122] + firstText + _0xe6f1[123] + firstText + _0xe6f1[90]);
        } else {
          embed = embed + (_0xe6f1[124] + postLabel + _0xe6f1[125] + rain[_0xe6f1[117]][_0xe6f1[121]] + _0xe6f1[126] + firstText + _0xe6f1[123] + firstText + _0xe6f1[90]);
        }
      }
      if (pageStart > 1) {
        if (currentPage == _0xe6f1[81]) {
          embed = embed + _0xe6f1[127];
        } else {
          embed = embed + (_0xe6f1[124] + postLabel + _0xe6f1[125] + rain[_0xe6f1[117]][_0xe6f1[121]] + _0xe6f1[128]);
        }
      }
      if (pageStart > 2) {
        embed = embed + _0xe6f1[129];
      }
      /** @type {number} */
      var vp = pageStart;
      for (; vp <= pageEnd; vp++) {
        if (currentPageNo == vp) {
          embed = embed + (_0xe6f1[130] + vp + _0xe6f1[64]);
        } else {
          if (vp == 1) {
            if (currentPage == _0xe6f1[81]) {
              embed = embed + _0xe6f1[127];
            } else {
              embed = embed + (_0xe6f1[124] + postLabel + _0xe6f1[125] + rain[_0xe6f1[117]][_0xe6f1[121]] + _0xe6f1[128]);
            }
          } else {
            if (currentPage == _0xe6f1[81]) {
              embed = embed + (_0xe6f1[131] + vp + _0xe6f1[132] + vp + _0xe6f1[123] + vp + _0xe6f1[90]);
            } else {
              embed = embed + (_0xe6f1[133] + vp + _0xe6f1[132] + vp + _0xe6f1[123] + vp + _0xe6f1[90]);
            }
          }
        }
      }
      if (pageEnd < lastPageNo - 1) {
        embed = embed + _0xe6f1[129];
      }
      if (pageEnd < lastPageNo) {
        if (currentPage == _0xe6f1[81]) {
          embed = embed + (_0xe6f1[131] + lastPageNo + _0xe6f1[132] + lastPageNo + _0xe6f1[123] + lastPageNo + _0xe6f1[90]);
        } else {
          embed = embed + (_0xe6f1[133] + lastPageNo + _0xe6f1[132] + lastPageNo + _0xe6f1[123] + lastPageNo + _0xe6f1[90]);
        }
      }
      /** @type {number} */
      var _0x7cbax2b = parseInt(currentPageNo) + 1;
      if (currentPageNo < lastPageNo) {
        if (currentPage == _0xe6f1[81]) {
          embed = embed + (_0xe6f1[134] + lastPageNo + _0xe6f1[135] + lastText + _0xe6f1[123] + lastText + _0xe6f1[136]);
        } else {
          embed = embed + (_0xe6f1[134] + lastPageNo + _0xe6f1[135] + lastText + _0xe6f1[123] + lastText + _0xe6f1[90]);
        }
      }
      var PL$13 = document[_0xe6f1[138]](_0xe6f1[137]);
      var payloadKeyObject = document[_0xe6f1[36]](_0xe6f1[139]);
      /** @type {number} */
      var PL$17 = 0;
      for (; PL$17 < PL$13[_0xe6f1[43]]; PL$17++) {
        PL$13[PL$17][_0xe6f1[140]] = embed;
      }
      if (PL$13 && PL$13[_0xe6f1[43]] > 0) {
        embed = _0xe6f1[115];
      }
      if (payloadKeyObject) {
        payloadKeyObject[_0xe6f1[140]] = embed;
        payloadKeyObject[_0xe6f1[39]][_0xe6f1[38]](_0xe6f1[141]);
      }
    },
    b : function(dt) {
      var d = dt[_0xe6f1[142]];
      /** @type {number} */
      var whiteRating = parseInt(d[_0xe6f1[143]].$t, 10);
      rain[_0xe6f1[117]][_0xe6f1[104]](whiteRating);
    },
    c : function() {
      var _0x7cbax32 = window[_0xe6f1[1]][_0xe6f1[0]];
      if (_0x7cbax32[_0xe6f1[145]](_0xe6f1[144]) != -1) {
        if (_0x7cbax32[_0xe6f1[145]](_0xe6f1[146]) != -1) {
          postLabel = _0x7cbax32[_0xe6f1[70]](_0x7cbax32[_0xe6f1[145]](_0xe6f1[144]) + 14, _0x7cbax32[_0xe6f1[145]](_0xe6f1[146]));
        } else {
          if (_0x7cbax32[_0xe6f1[145]](_0xe6f1[147]) != -1) {
            postLabel = _0x7cbax32[_0xe6f1[70]](_0x7cbax32[_0xe6f1[145]](_0xe6f1[144]) + 14, _0x7cbax32[_0xe6f1[145]](_0xe6f1[147]));
          } else {
            postLabel = _0x7cbax32[_0xe6f1[70]](_0x7cbax32[_0xe6f1[145]](_0xe6f1[144]) + 14);
          }
        }
      }
      if (_0x7cbax32[_0xe6f1[145]](_0xe6f1[148]) == -1) {
        if (_0x7cbax32[_0xe6f1[145]](_0xe6f1[144]) == -1) {
          currentPage = _0xe6f1[81];
          if (window[_0xe6f1[1]][_0xe6f1[0]][_0xe6f1[145]](_0xe6f1[149]) != -1) {
            currentPageNo = window[_0xe6f1[1]][_0xe6f1[0]][_0xe6f1[70]](window[_0xe6f1[1]][_0xe6f1[0]][_0xe6f1[145]](_0xe6f1[149]) + 6, window[_0xe6f1[1]][_0xe6f1[0]][_0xe6f1[43]]);
          } else {
            /** @type {number} */
            currentPageNo = 1;
          }
          let artistTrack = document[_0xe6f1[98]](_0xe6f1[97]);
          artistTrack[_0xe6f1[99]] = _0xe6f1[100];
          artistTrack[_0xe6f1[30]] = _0xe6f1[150];
          /** @type {boolean} */
          artistTrack[_0xe6f1[102]] = true;
          document[_0xe6f1[109]](_0xe6f1[151])[0][_0xe6f1[107]](artistTrack);
        } else {
          currentPage = _0xe6f1[152];
          if (_0x7cbax32[_0xe6f1[145]](_0xe6f1[153]) == -1) {
            /** @type {number} */
            rain[_0xe6f1[117]][_0xe6f1[121]] = 20;
          }
          if (window[_0xe6f1[1]][_0xe6f1[0]][_0xe6f1[145]](_0xe6f1[149]) != -1) {
            currentPageNo = window[_0xe6f1[1]][_0xe6f1[0]][_0xe6f1[70]](window[_0xe6f1[1]][_0xe6f1[0]][_0xe6f1[145]](_0xe6f1[149]) + 6, window[_0xe6f1[1]][_0xe6f1[0]][_0xe6f1[43]]);
          } else {
            /** @type {number} */
            currentPageNo = 1;
          }
          let artistTrack = document[_0xe6f1[98]](_0xe6f1[97]);
          artistTrack[_0xe6f1[99]] = _0xe6f1[100];
          artistTrack[_0xe6f1[30]] = _0xe6f1[154] + postLabel + _0xe6f1[155];
          /** @type {boolean} */
          artistTrack[_0xe6f1[102]] = true;
          document[_0xe6f1[109]](_0xe6f1[151])[0][_0xe6f1[107]](artistTrack);
        }
      }
    },
    d : function(n) {
      /** @type {number} */
      jsonstart = (n - 1) * rain[_0xe6f1[117]][_0xe6f1[121]];
      /** @type {number} */
      noPage = n;
      var command_codes = document[_0xe6f1[109]](_0xe6f1[108])[0];
      var data = document[_0xe6f1[98]](_0xe6f1[97]);
      data[_0xe6f1[99]] = _0xe6f1[100];
      data[_0xe6f1[158]](_0xe6f1[30], _0xe6f1[156] + jsonstart + _0xe6f1[157]);
      command_codes[_0xe6f1[107]](data);
    },
    e : function(n) {
      /** @type {number} */
      jsonstart = (n - 1) * rain[_0xe6f1[117]][_0xe6f1[121]];
      /** @type {number} */
      noPage = n;
      var command_codes = document[_0xe6f1[109]](_0xe6f1[108])[0];
      var data = document[_0xe6f1[98]](_0xe6f1[97]);
      data[_0xe6f1[99]] = _0xe6f1[100];
      data[_0xe6f1[158]](_0xe6f1[30], _0xe6f1[154] + postLabel + _0xe6f1[159] + jsonstart + _0xe6f1[157]);
      command_codes[_0xe6f1[107]](data);
    },
    f : function(name) {
      post = name[_0xe6f1[142]][_0xe6f1[160]][0];
      var nodeName = post[_0xe6f1[162]][_0xe6f1[161]][_0xe6f1[70]](0, 19) + post[_0xe6f1[162]][_0xe6f1[161]][_0xe6f1[70]](23, 29);
      /** @type {string} */
      var urlSafeNodeName = encodeURIComponent(nodeName);
      if (currentPage == _0xe6f1[81]) {
        var _0x7cbax38 = _0xe6f1[163] + urlSafeNodeName + _0xe6f1[164] + rain[_0xe6f1[117]][_0xe6f1[121]] + _0xe6f1[149] + noPage;
      } else {
        _0x7cbax38 = _0xe6f1[144] + postLabel + _0xe6f1[165] + urlSafeNodeName + _0xe6f1[164] + rain[_0xe6f1[117]][_0xe6f1[121]] + _0xe6f1[149] + noPage;
      }
      window[_0xe6f1[1]][_0xe6f1[0]] = _0x7cbax38;
    },
    g : function() {
      let _0x7cbax39;
      let _0x7cbax3a;
      let _0x7cbax3b;
      let _0x7cbax3c;
    }
  },
  i : function() {
    if (config[_0xe6f1[111]][_0xe6f1[166]]) {
      rain[_0xe6f1[117]][_0xe6f1[12]]();
    }
  },
  j : function() {
    if (config[_0xe6f1[167]][_0xe6f1[166]]) {
      if (window[_0xe6f1[168]]) {
        console[_0xe6f1[10]](_0xe6f1[169]);
        let artistTrack = document[_0xe6f1[98]](_0xe6f1[97]);
        artistTrack[_0xe6f1[99]] = _0xe6f1[100];
        artistTrack[_0xe6f1[30]] = _0xe6f1[170];
        /** @type {boolean} */
        artistTrack[_0xe6f1[102]] = true;
        /**
         * @return {undefined}
         */
        artistTrack[_0xe6f1[171]] = function() {
          let artistTrack = document[_0xe6f1[98]](_0xe6f1[172]);
          artistTrack[_0xe6f1[173]] = _0xe6f1[174];
          artistTrack[_0xe6f1[140]] = _0xe6f1[175] + config[_0xe6f1[167]][_0xe6f1[60]] + _0xe6f1[176];
          document[_0xe6f1[151]][_0xe6f1[91]](artistTrack);
          document[_0xe6f1[151]][_0xe6f1[178]][_0xe6f1[177]] = _0xe6f1[179];
        };
        document[_0xe6f1[109]](_0xe6f1[108])[0][_0xe6f1[107]](artistTrack);
      } else {
        console[_0xe6f1[10]](_0xe6f1[180]);
      }
    }
  },
  k : function() {
    if ($(_0xe6f1[181])) {
      $[_0xe6f1[194]]({
        url : _0xe6f1[182],
        type : _0xe6f1[183],
        dataType : _0xe6f1[184],
        data : {
          id : $(_0xe6f1[185])[_0xe6f1[32]](_0xe6f1[0])
        },
        success : function(retu_data) {
          $(_0xe6f1[192])[_0xe6f1[65]](retu_data[_0xe6f1[190]][_0xe6f1[189]] + retu_data[_0xe6f1[190]][_0xe6f1[191]])[_0xe6f1[188]](_0xe6f1[186], _0xe6f1[187]);
        },
        error : function() {
          console[_0xe6f1[10]](_0xe6f1[193]);
        }
      });
    }
  },
  l : function() {
    let _0x7cbax3e = $(_0xe6f1[195]);
    _0x7cbax3e[_0xe6f1[197]](_0xe6f1[196])[_0xe6f1[83]]();
    _0x7cbax3e[_0xe6f1[27]](function(canCreateDiscussions) {
      canCreateDiscussions[_0xe6f1[198]]();
      $(this)[_0xe6f1[197]](_0xe6f1[196])[_0xe6f1[199]](300);
      $(this)[_0xe6f1[69]]()[_0xe6f1[201]](_0xe6f1[200]);
    });
  }
};
/**
 * @return {undefined}
 */
function igniel() {
  rain[_0xe6f1[202]]();
}
if (window[_0xe6f1[203]]) {
  window[_0xe6f1[203]](_0xe6f1[204], igniel);
} else {
  if (window[_0xe6f1[205]]) {
    window[_0xe6f1[205]](_0xe6f1[103], igniel);
  }
}
/**
 * @return {undefined}
 */
function otherScript() {
  $(function() {
    $(_0xe6f1[208])[_0xe6f1[63]](_0xe6f1[104])[_0xe6f1[207]]()[_0xe6f1[206]]();
  });
}
;
