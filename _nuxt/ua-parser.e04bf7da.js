function hi(v,_){for(var p=0;p<_.length;p++){const d=_[p];if(typeof d!="string"&&!Array.isArray(d)){for(const k in d)if(k!=="default"&&!(k in v)){const x=Object.getOwnPropertyDescriptor(d,k);x&&Object.defineProperty(v,k,x.get?x:{enumerable:!0,get:()=>d[k]})}}}return Object.freeze(Object.defineProperty(v,Symbol.toStringTag,{value:"Module"}))}var gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R={},vi={get exports(){return R},set exports(v){R=v}};(function(v,_){(function(p,d){var k="1.0.33",x="",Q="?",$="function",D="undefined",V="object",M="string",di="major",o="model",a="name",i="type",e="vendor",r="version",f="architecture",O="console",b="mobile",t="tablet",m="smarttv",T="wearable",ii="embedded",G=350,F="Amazon",z="Apple",ei="ASUS",oi="BlackBerry",y="Browser",P="Chrome",ui="Edge",q="Firefox",C="Google",ai="Huawei",W="LG",H="Microsoft",ri="Motorola",U="Opera",Y="Samsung",ti="Sharp",B="Sony",Z="Xiaomi",X="Zebra",si="Facebook",mi=function(s,l){var n={};for(var u in s)l[u]&&l[u].length%2===0?n[u]=l[u].concat(s[u]):n[u]=s[u];return n},j=function(s){for(var l={},n=0;n<s.length;n++)l[s[n].toUpperCase()]=s[n];return l},ni=function(s,l){return typeof s===M?A(l).indexOf(A(s))!==-1:!1},A=function(s){return s.toLowerCase()},pi=function(s){return typeof s===M?s.replace(/[^\d\.]/g,x).split(".")[0]:d},K=function(s,l){if(typeof s===M)return s=s.replace(/^\s\s*/,x),typeof l===D?s:s.substring(0,G)},S=function(s,l){for(var n=0,u,w,L,c,N,g;n<l.length&&!N;){var li=l[n],ci=l[n+1];for(u=w=0;u<li.length&&!N;)if(N=li[u++].exec(s),N)for(L=0;L<ci.length;L++)g=N[++w],c=ci[L],typeof c===V&&c.length>0?c.length===2?typeof c[1]==$?this[c[0]]=c[1].call(this,g):this[c[0]]=c[1]:c.length===3?typeof c[1]===$&&!(c[1].exec&&c[1].test)?this[c[0]]=g?c[1].call(this,g,c[2]):d:this[c[0]]=g?g.replace(c[1],c[2]):d:c.length===4&&(this[c[0]]=g?c[3].call(this,g.replace(c[1],c[2])):d):this[c]=g||d;n+=2}},J=function(s,l){for(var n in l)if(typeof l[n]===V&&l[n].length>0){for(var u=0;u<l[n].length;u++)if(ni(l[n][u],s))return n===Q?d:n}else if(ni(l[n],s))return n===Q?d:n;return s},fi={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},bi={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},wi={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[r,[a,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[r,[a,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[a,r],[/opios[\/ ]+([\w\.]+)/i],[r,[a,U+" Mini"]],[/\bopr\/([\w\.]+)/i],[r,[a,U]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[a,r],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[r,[a,"UC"+y]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[r,[a,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[r,[a,"WeChat"]],[/konqueror\/([\w\.]+)/i],[r,[a,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[r,[a,"IE"]],[/yabrowser\/([\w\.]+)/i],[r,[a,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[a,/(.+)/,"$1 Secure "+y],r],[/\bfocus\/([\w\.]+)/i],[r,[a,q+" Focus"]],[/\bopt\/([\w\.]+)/i],[r,[a,U+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[r,[a,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[r,[a,"Dolphin"]],[/coast\/([\w\.]+)/i],[r,[a,U+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[r,[a,"MIUI "+y]],[/fxios\/([-\w\.]+)/i],[r,[a,q]],[/\bqihu|(qi?ho?o?|360)browser/i],[[a,"360 "+y]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[a,/(.+)/,"$1 "+y],r],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],r],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[a,r],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[a],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[a,si],r],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[a,r],[/\bgsa\/([\w\.]+) .*safari\//i],[r,[a,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[r,[a,P+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[a,P+" WebView"],r],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[r,[a,"Android "+y]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[a,r],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[r,[a,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[r,a],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[a,[r,J,fi]],[/(webkit|khtml)\/([\w\.]+)/i],[a,r],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[a,"Netscape"],r],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[r,[a,q+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[a,r],[/(cobalt)\/([\w\.]+)/i],[a,[r,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,A]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[f,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/windows (ce|mobile); ppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[f,/ower/,x,A]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[f,A]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[o,[e,Y],[i,t]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[o,[e,Y],[i,b]],[/\((ip(?:hone|od)[\w ]*);/i],[o,[e,z],[i,b]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[o,[e,z],[i,t]],[/(macintosh);/i],[o,[e,z]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[o,[e,ai],[i,t]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[o,[e,ai],[i,b]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[o,/_/g," "],[e,Z],[i,b]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[o,/_/g," "],[e,Z],[i,t]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[o,[e,"OPPO"],[i,b]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[o,[e,"Vivo"],[i,b]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[o,[e,"Realme"],[i,b]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[o,[e,ri],[i,b]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[o,[e,ri],[i,t]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[o,[e,W],[i,t]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[o,[e,W],[i,b]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[o,[e,"Lenovo"],[i,t]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[o,/_/g," "],[e,"Nokia"],[i,b]],[/(pixel c)\b/i],[o,[e,C],[i,t]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[o,[e,C],[i,b]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[o,[e,B],[i,b]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[o,"Xperia Tablet"],[e,B],[i,t]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[o,[e,"OnePlus"],[i,b]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[o,[e,F],[i,t]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[o,/(.+)/g,"Fire Phone $1"],[e,F],[i,b]],[/(playbook);[-\w\),; ]+(rim)/i],[o,e,[i,t]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[o,[e,oi],[i,b]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[o,[e,ei],[i,t]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[o,[e,ei],[i,b]],[/(nexus 9)/i],[o,[e,"HTC"],[i,t]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],[e,[o,/_/g," "],[i,b]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[o,[e,"Acer"],[i,t]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[o,[e,"Meizu"],[i,b]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[o,[e,ti],[i,b]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[e,o,[i,b]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[e,o,[i,t]],[/(surface duo)/i],[o,[e,H],[i,t]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[o,[e,"Fairphone"],[i,b]],[/(u304aa)/i],[o,[e,"AT&T"],[i,b]],[/\bsie-(\w*)/i],[o,[e,"Siemens"],[i,b]],[/\b(rct\w+) b/i],[o,[e,"RCA"],[i,t]],[/\b(venue[\d ]{2,7}) b/i],[o,[e,"Dell"],[i,t]],[/\b(q(?:mv|ta)\w+) b/i],[o,[e,"Verizon"],[i,t]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[o,[e,"Barnes & Noble"],[i,t]],[/\b(tm\d{3}\w+) b/i],[o,[e,"NuVision"],[i,t]],[/\b(k88) b/i],[o,[e,"ZTE"],[i,t]],[/\b(nx\d{3}j) b/i],[o,[e,"ZTE"],[i,b]],[/\b(gen\d{3}) b.+49h/i],[o,[e,"Swiss"],[i,b]],[/\b(zur\d{3}) b/i],[o,[e,"Swiss"],[i,t]],[/\b((zeki)?tb.*\b) b/i],[o,[e,"Zeki"],[i,t]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[e,"Dragon Touch"],o,[i,t]],[/\b(ns-?\w{0,9}) b/i],[o,[e,"Insignia"],[i,t]],[/\b((nxa|next)-?\w{0,9}) b/i],[o,[e,"NextBook"],[i,t]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[e,"Voice"],o,[i,b]],[/\b(lvtel\-)?(v1[12]) b/i],[[e,"LvTel"],o,[i,b]],[/\b(ph-1) /i],[o,[e,"Essential"],[i,b]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[o,[e,"Envizen"],[i,t]],[/\b(trio[-\w\. ]+) b/i],[o,[e,"MachSpeed"],[i,t]],[/\btu_(1491) b/i],[o,[e,"Rotor"],[i,t]],[/(shield[\w ]+) b/i],[o,[e,"Nvidia"],[i,t]],[/(sprint) (\w+)/i],[e,o,[i,b]],[/(kin\.[onetw]{3})/i],[[o,/\./g," "],[e,H],[i,b]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[o,[e,X],[i,t]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[o,[e,X],[i,b]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[e,o,[i,O]],[/droid.+; (shield) bui/i],[o,[e,"Nvidia"],[i,O]],[/(playstation [345portablevi]+)/i],[o,[e,B],[i,O]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[o,[e,H],[i,O]],[/smart-tv.+(samsung)/i],[e,[i,m]],[/hbbtv.+maple;(\d+)/i],[[o,/^/,"SmartTV"],[e,Y],[i,m]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[e,W],[i,m]],[/(apple) ?tv/i],[e,[o,z+" TV"],[i,m]],[/crkey/i],[[o,P+"cast"],[e,C],[i,m]],[/droid.+aft(\w)( bui|\))/i],[o,[e,F],[i,m]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[o,[e,ti],[i,m]],[/(bravia[\w ]+)( bui|\))/i],[o,[e,B],[i,m]],[/(mitv-\w{5}) bui/i],[o,[e,Z],[i,m]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[e,K],[o,K],[i,m]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[i,m]],[/((pebble))app/i],[e,o,[i,T]],[/droid.+; (glass) \d/i],[o,[e,C],[i,T]],[/droid.+; (wt63?0{2,3})\)/i],[o,[e,X],[i,T]],[/(quest( 2)?)/i],[o,[e,si],[i,T]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[e,[i,ii]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[o,[i,b]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[o,[i,t]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[i,t]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[i,b]],[/(android[-\w\. ]{0,9});.+buil/i],[o,[e,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[r,[a,ui+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[r,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[a,r],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[r,a]],os:[[/microsoft (windows) (vista|xp)/i],[a,r],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[a,[r,J,bi]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[a,"Windows"],[r,J,bi]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[r,/_/g,"."],[a,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[a,"Mac OS"],[r,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[r,a],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[a,r],[/\(bb(10);/i],[r,[a,oi]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[r,[a,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[r,[a,q+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[r,[a,"webOS"]],[/crkey\/([\d\.]+)/i],[r,[a,P+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[a,"Chromium OS"],r],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[a,r],[/(sunos) ?([\w\.\d]*)/i],[[a,"Solaris"],r],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[a,r]]},h=function(s,l){if(typeof s===V&&(l=s,s=d),!(this instanceof h))return new h(s,l).getResult();var n=s||(typeof p!==D&&p.navigator&&p.navigator.userAgent?p.navigator.userAgent:x),u=l?mi(wi,l):wi;return this.getBrowser=function(){var w={};return w[a]=d,w[r]=d,S.call(w,n,u.browser),w.major=pi(w.version),w},this.getCPU=function(){var w={};return w[f]=d,S.call(w,n,u.cpu),w},this.getDevice=function(){var w={};return w[e]=d,w[o]=d,w[i]=d,S.call(w,n,u.device),w},this.getEngine=function(){var w={};return w[a]=d,w[r]=d,S.call(w,n,u.engine),w},this.getOS=function(){var w={};return w[a]=d,w[r]=d,S.call(w,n,u.os),w},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(w){return n=typeof w===M&&w.length>G?K(w,G):w,this},this.setUA(n),this};h.VERSION=k,h.BROWSER=j([a,r,di]),h.CPU=j([f]),h.DEVICE=j([o,e,i,O,b,m,t,T,ii]),h.ENGINE=h.OS=j([a,r]),v.exports&&(_=v.exports=h),_.UAParser=h;var E=typeof p!==D&&(p.jQuery||p.Zepto);if(E&&!E.ua){var I=new h;E.ua=I.getResult(),E.ua.get=function(){return I.getUA()},E.ua.set=function(s){I.setUA(s);var l=I.getResult();for(var n in l)E.ua[n]=l[n]}}})(typeof window=="object"?window:gi)})(vi,R);const xi=R,ki=hi({__proto__:null,default:xi},[R]);export{ki as u};