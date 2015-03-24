(function(e, t, n, r) {
    n.swipebox = function(i, s) {
        var o, u = {
                useCSS: true,
                useSVG: true,
                initialIndexOnArray: 0,
                closeBySwipe: true,
                hideBarsOnMobile: true,
                hideBarsDelay: 3e5,
                videoMaxWidth: 1140,
                vimeoColor: "CCCCCC",
                beforeOpen: null,
                afterOpen: null,
                afterClose: null
            },
            a = this,
            f = [],
            l, c = i.selector,
            h = n(c),
            p = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),
            d = p !== null || t.createTouch !== r || "ontouchstart" in e || "onmsgesturechange" in e || navigator.msMaxTouchPoints,
            v = !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
            m = e.innerWidth ? e.innerWidth : n(e).width(),
            g = e.innerHeight ? e.innerHeight : n(e).height(),
            y = '<div id="swipebox-overlay">					<div id="swipebox-slider"></div>					<div id="swipebox-caption"></div>					<div id="swipebox-action">						<a id="swipebox-close"></a>						<a id="swipebox-prev"></a>						<a id="swipebox-next"></a>					</div>			</div>';
        a.settings = {};
        a.init = function() {
            a.settings = n.extend({}, u, s);
            if (n.isArray(i)) {
                f = i;
                o.target = n(e);
                o.init(a.settings.initialIndexOnArray)
            } else {
                n(t).on("click", c, function(e) {
                    if (e.target.parentNode.className === "slide current") {
                        return false
                    }
                    if (!n.isArray(i)) {
                        o.destroy();
                        l = n(c);
                        o.actions()
                    }
                    f = [];
                    var t, r, s;
                    if (!s) {
                        r = "data-rel";
                        s = n(this).attr(r)
                    }
                    if (!s) {
                        r = "rel";
                        s = n(this).attr(r)
                    }
                    if (s && s !== "" && s !== "nofollow") {
                        l = h.filter("[" + r + '="' + s + '"]')
                    } else {
                        l = n(c)
                    }
                    l.each(function() {
                        var e = null,
                            t = null;
                        if (n(this).attr("title")) {
                            e = n(this).attr("title")
                        }
                        if (n(this).attr("href")) {
                            t = n(this).attr("href")
                        }
                        f.push({
                            href: t,
                            title: e
                        })
                    });
                    t = l.index(n(this));
                    e.preventDefault();
                    e.stopPropagation();
                    o.target = n(e.target);
                    o.init(t)
                })
            }
        };
        o = {
            init: function(e) {
                if (a.settings.beforeOpen) {
                    a.settings.beforeOpen()
                }
                this.target.trigger("swipebox-start");
                n.swipebox.isOpen = true;
                this.build();
                this.openSlide(e);
                this.openMedia(e);
                this.preloadMedia(e + 1);
                this.preloadMedia(e - 1);
                if (a.settings.afterOpen) {
                    a.settings.afterOpen()
                }
            },
            build: function() {
                var e = this,
                    t;
                n("body").append(y);
                if (e.doCssTrans()) {
                    n("#swipebox-slider").css({
                        "-webkit-transition": "left 0.4s ease",
                        "-moz-transition": "left 0.4s ease",
                        "-o-transition": "left 0.4s ease",
                        "-khtml-transition": "left 0.4s ease",
                        transition: "left 0.4s ease"
                    });
                    n("#swipebox-overlay").css({
                        "-webkit-transition": "opacity 1s ease",
                        "-moz-transition": "opacity 1s ease",
                        "-o-transition": "opacity 1s ease",
                        "-khtml-transition": "opacity 1s ease",
                        transition: "opacity 1s ease"
                    });
                    n("#swipebox-action, #swipebox-caption").css({
                        "-webkit-transition": "0.5s",
                        "-moz-transition": "0.5s",
                        "-o-transition": "0.5s",
                        "-khtml-transition": "0.5s",
                        transition: "0.5s"
                    })
                }
                if (v && a.settings.useSVG === true) {
                    t = n("#swipebox-action #swipebox-close").css("background-image");
                    t = t.replace("png", "svg");
                    n("#swipebox-action #swipebox-prev,#swipebox-action #swipebox-next,#swipebox-action #swipebox-close").css({
                        "background-image": t
                    })
                }
                if (p && a.settings.hideBarsOnMobile === true) {
                    n("#swipebox-action, #swipebox-caption").hide()
                }
                n.each(f, function() {
                    n("#swipebox-slider").append('<div class="slide"></div>')
                });
                e.setDim();
                e.actions();
                if (d) {
                    e.gesture()
                }
                e.keyboard();
                e.animBars();
                e.resize()
            },
            setDim: function() {
                var t, r, i = {};
                if ("onorientationchange" in e) {
                    e.addEventListener("orientationchange", function() {
                        if (e.orientation === 0) {
                            t = m;
                            r = g
                        } else if (e.orientation === 90 || e.orientation === -90) {
                            t = g;
                            r = m
                        }
                    }, false)
                } else {
                    t = e.innerWidth ? e.innerWidth : n(e).width();
                    r = e.innerHeight ? e.innerHeight : n(e).height()
                }
                i = {
                    width: t,
                    height: r
                };
                n("#swipebox-overlay").css(i)
            },
            resize: function() {
                var t = this;
                n(e).resize(function() {
                    t.setDim()
                }).resize()
            },
            supportTransition: function() {
                var e = "transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" "),
                    n;
                for (n = 0; n < e.length; n++) {
                    if (t.createElement("div").style[e[n]] !== r) {
                        return e[n]
                    }
                }
                return false
            },
            doCssTrans: function() {
                if (a.settings.useCSS && this.supportTransition()) {
                    return true
                }
            },
            gesture: function() {
                var e = this,
                    t = null,
                    r = null,
                    i = false,
                    s = 10,
                    o = 50,
                    u = {},
                    f = {},
                    l = n("#swipebox-caption, #swipebox-action"),
                    c = n("#swipebox-slider");
                l.addClass("visible-bars");
                e.setTimeout();
                n("body").bind("touchstart", function(e) {
                    n(this).addClass("touching");
                    f = e.originalEvent.targetTouches[0];
                    u.pageX = e.originalEvent.targetTouches[0].pageX;
                    u.pageY = e.originalEvent.targetTouches[0].pageY;
                    n(".touching").bind("touchmove", function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        f = e.originalEvent.targetTouches[0];
                        if (a.settings.closeBySwipe) {
                            r = f.pageY - u.pageY;
                            if (Math.abs(r) >= o || i) {
                                var t = .75 - Math.abs(r) / c.height();
                                c.css({
                                    top: r + "px"
                                });
                                c.css({
                                    opacity: t
                                });
                                i = true
                            }
                        }
                    });
                    return false
                }).bind("touchend", function(o) {
                    o.preventDefault();
                    o.stopPropagation();
                    if (a.settings.closeBySwipe) {
                        if (c.css("opacity") <= .5) {
                            var h = r > 0 ? c.height() : -c.height();
                            c.velocity({
                                top: h + "px",
                                opacity: 0
                            }, 300, function() {
                                e.closeSlide()
                            })
                        } else {
                            c.velocity({
                                top: 0,
                                opacity: 1
                            }, 300)
                        } if (i) {
                            i = false;
                            return
                        }
                    }
                    t = f.pageX - u.pageX;
                    if (t >= s) {
                        e.getPrev()
                    } else if (t <= -s) {
                        e.getNext()
                    } else {
                        if (!l.hasClass("visible-bars")) {
                            e.showBars();
                            e.setTimeout()
                        } else {
                            e.clearTimeout()
                        }
                    }
                    n(".touching").off("touchmove").removeClass("touching")
                })
            },
            setTimeout: function() {
                if (a.settings.hideBarsDelay > 0) {
                    var t = this;
                    t.clearTimeout();
                    t.timeout = e.setTimeout(function() {}, a.settings.hideBarsDelay)
                }
            },
            clearTimeout: function() {
                e.clearTimeout(this.timeout);
                this.timeout = null
            },
            showBars: function() {
                var e = n("#swipebox-caption, #swipebox-action");
                if (this.doCssTrans()) {} else {
                    setTimeout(function() {}, 1e3)
                }
            },
            hideBars: function() {
                var e = n("#swipebox-caption, #swipebox-action");
                if (this.doCssTrans()) {} else {
                    setTimeout(function() {}, 1e3)
                }
            },
            animBars: function() {
                var e = this,
                    t = n("#swipebox-caption, #swipebox-action");
                e.setTimeout();
                n("#swipebox-slider").click(function() {
                    if (!t.hasClass("visible-bars")) {
                        e.showBars();
                        e.setTimeout()
                    }
                });
                n("#swipebox-action").hover(function() {
                    e.showBars();
                    e.clearTimeout()
                }, function() {
                    e.setTimeout()
                })
            },
            keyboard: function() {
                var t = this;
                n(e).bind("keyup", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (e.keyCode === 37) {
                        t.getPrev()
                    } else if (e.keyCode === 39) {
                        t.getNext()
                    } else if (e.keyCode === 27) {
                        t.closeSlide()
                    }
                })
            },
            actions: function() {
                var e = this,
                    t = "touchend click";
                if (f.length < 2) {
                    n("#swipebox-prev, #swipebox-next").hide()
                } else {
                    n("#swipebox-prev").bind(t, function(t) {
                        t.preventDefault();
                        t.stopPropagation();
                        e.getPrev();
                        e.setTimeout()
                    });
                    n("#swipebox-next").bind(t, function(t) {
                        t.preventDefault();
                        t.stopPropagation();
                        e.getNext();
                        e.setTimeout()
                    })
                }
                n("#swipebox-close,.slide").bind(t, function() {
                    e.closeSlide()
                })
            },
            setSlide: function(e, t) {
                t = t || false;
                var r = n("#swipebox-slider");
                if (this.doCssTrans()) {
                    r.css({
                        left: -e * 100 + "%"
                    })
                } else {
                    r.velocity({
                        left: -e * 100 + "%"
                    })
                }
                n("#swipebox-slider .slide").removeClass("current");
                n("#swipebox-slider .slide").eq(e).addClass("current");
                this.setTitle(e);
                if (t) {
                    r.fadeIn()
                }
                n("#swipebox-prev, #swipebox-next").removeClass("disabled");
                if (e === 0) {
                    n("#swipebox-prev").addClass("disabled")
                } else if (e === f.length - 1) {
                    n("#swipebox-next").addClass("disabled")
                }
            },
            openSlide: function(t) {
                n("html").addClass("swipebox-html");
                if (d) {
                    n("html").addClass("swipebox-touch")
                }
                n(e).trigger("resize");
                this.setSlide(t, true)
            },
            preloadMedia: function(e) {
                var t = this,
                    n = null;
                if (f[e] !== r) {
                    n = f[e].href
                }
                if (!t.isVideo(n)) {
                    setTimeout(function() {
                        t.openMedia(e)
                    }, 1e3)
                } else {
                    t.openMedia(e)
                }
            },
            openMedia: function(e) {
                var t = this,
                    i = null;
                if (f[e] !== r) {
                    i = f[e].href
                }
                if (e < 0 || e >= f.length) {
                    return false
                }
                if (!t.isVideo(i)) {
                    t.loadMedia(i, function() {
                        n("#swipebox-slider .slide").eq(e).html(this)
                    })
                } else {
                    n("#swipebox-slider .slide").eq(e).html(t.getVideo(i))
                }
            },
            setTitle: function(e) {
                var t = null;
                n("#swipebox-caption").empty();
                if (f[e] !== r) {
                    t = f[e].title
                }
                if (t) {
                    n("#swipebox-caption").append(t)
                }
            },
            isVideo: function(e) {
                if (e) {
                    if (e.match(/youtube\.com\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/vimeo\.com\/([0-9]*)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)) {
                        return true
                    }
                }
            },
            getVideo: function(e) {
                var t = "",
                    n = e.match(/watch\?v=([a-zA-Z0-9\-_]+)/),
                    r = e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/),
                    i = e.match(/vimeo\.com\/([0-9]*)/);
                if (n || r) {
                    if (r) {
                        n = r
                    }
                    t = '<iframe width="560" height="315" src="//www.youtube.com/embed/' + n[1] + '" frameborder="0" allowfullscreen></iframe>'
                } else if (i) {
                    t = '<iframe width="560" height="315"  src="//player.vimeo.com/video/' + i[1] + "?byline=0&portrait=0&color=" + a.settings.vimeoColor + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
                }
                return '<div class="swipebox-video-container" style="max-width:' + a.settings.videomaxWidth + 'px"><div class="swipebox-video">' + t + "</div></div>"
            },
            loadMedia: function(e, t) {
                if (!this.isVideo(e)) {
                    var r = n("<img>").on("load", function() {
                        t.call(r)
                    });
                    r.attr("src", e)
                }
            },
            getNext: function() {
                var e = this,
                    t = n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current"));
                if (t + 1 < f.length) {
                    t++;
                    e.setSlide(t);
                    e.preloadMedia(t + 1)
                } else {
                    n("#swipebox-slider").addClass("rightSpring");
                    setTimeout(function() {
                        n("#swipebox-slider").removeClass("rightSpring")
                    }, 500)
                }
            },
            getPrev: function() {
                var e = n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current"));
                if (e > 0) {
                    e--;
                    this.setSlide(e);
                    this.preloadMedia(e - 1)
                } else {
                    n("#swipebox-slider").addClass("leftSpring");
                    setTimeout(function() {
                        n("#swipebox-slider").removeClass("leftSpring")
                    }, 500)
                }
            },
            closeSlide: function() {
                n("html").removeClass("swipebox-html");
                n("html").removeClass("swipebox-touch");
                n(e).trigger("resize");
                this.destroy()
            },
            destroy: function() {
                n(e).unbind("keyup");
                n("body").unbind("touchstart");
                n("body").unbind("touchmove");
                n("body").unbind("touchend");
                n("#swipebox-slider").unbind();
                n("#swipebox-overlay").remove();
                if (!n.isArray(i)) {
                    i.removeData("_swipebox")
                }
                if (this.target) {
                    this.target.trigger("swipebox-destroy")
                }
                n.swipebox.isOpen = false;
                if (a.settings.afterClose) {
                    a.settings.afterClose()
                }
            }
        };
        a.init()
    };
    n.fn.swipebox = function(e) {
        if (!n.data(this, "_swipebox")) {
            var t = new n.swipebox(this, e);
            this.data("_swipebox", t)
        }
        return this.data("_swipebox")
    }
})(window, document, jQuery)