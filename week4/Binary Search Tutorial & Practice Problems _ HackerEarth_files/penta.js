$(document).on("click","div[name='helpful']",function(a){"use strict",$("#thumbsdown").addClass("opacity-5"),$("#thumbsdown-circle").addClass("opacity-5"),$("#thumbsup").hasClass("opacity-5")&&$("#thumbsup").removeClass("opacity-5"),$("#thumbsup-circle").hasClass("opacity-5")&&$("#thumbsup-circle").removeClass("opacity-5"),$("#thumbsdown").hasClass("red-text")&&($("#thumbsdown").removeClass("red-text"),$("#thumbsdown").addClass("light")),$("#thumbsdown").hasClass("white-text")&&($("#thumbsdown").removeClass("white-text"),$("#thumbsdown").addClass("light")),$("#thumbsdown").hasClass("fa-thumbs-down")&&($("#thumbsdown").removeClass("fa-thumbs-down"),$("#thumbsdown").addClass("fa-thumbs-o-down")),$("#thumbsdown-circle").hasClass("red-text")&&($("#thumbsdown-circle").removeClass("red-text"),$("#thumbsdown-circle").addClass("light")),$("#thumbsdown-circle").hasClass("white-text")&&($("#thumbsdown-circle").removeClass("white-text"),$("#thumbsdown-circle").addClass("light")),$("#thumbsdown-circle").hasClass("fa-circle")&&($("#thumbsdown-circle").removeClass("fa-circle"),$("#thumbsdown-circle").addClass("fa-circle-thin")),$("#thumbsdown-text").hasClass("dark")&&($("#thumbsdown-text").removeClass("dark"),$("#thumbsdown-text").addClass("light")),$("#thumbsup-text").hasClass("light")&&($("#thumbsup-text").removeClass("light"),$("#thumbsup-text").addClass("dark")),$("#thumbsup").hasClass("green-text")&&$("#thumbsup-circle").hasClass("fa-circle-thin")&&($("#thumbsup").removeClass("green-text"),$("#thumbsup").addClass("white-text"),$("#thumbsup").removeClass("fa-thumbs-o-up"),$("#thumbsup").addClass("fa-thumbs-up"),$("#thumbsup-circle").removeClass("fa-circle-thin"),$("#thumbsup-circle").addClass("fa-circle")),$("#thumbsup").hasClass("light")&&$("#thumbsup-circle").hasClass("fa-circle-thin")&&($("#thumbsup").removeClass("light"),$("#thumbsup").addClass("white-text"),$("#thumbsup").removeClass("fa-thumbs-o-up"),$("#thumbsup").addClass("fa-thumbs-up"),$("#thumbsup-circle").removeClass("light"),$("#thumbsup-circle").addClass("green-text"),$("#thumbsup-circle").removeClass("fa-circle-thin"),$("#thumbsup-circle").addClass("fa-circle"))}),$(document).on("click","div[name='not-helpful']",function(a){"use strict",$("#thumbsup").addClass("opacity-5"),$("#thumbsup-circle").addClass("opacity-5"),$("#thumbsdown").hasClass("opacity-5")&&$("#thumbsdown").removeClass("opacity-5"),$("#thumbsdown-circle").hasClass("opacity-5")&&$("#thumbsdown-circle").removeClass("opacity-5"),$("#thumbsup").hasClass("green-text")&&($("#thumbsup").removeClass("green-text"),$("#thumbsup").addClass("light")),$("#thumbsup").hasClass("white-text")&&($("#thumbsup").removeClass("white-text"),$("#thumbsup").addClass("light")),$("#thumbsup").hasClass("fa-thumbs-up")&&($("#thumbsup").removeClass("fa-thumbs-up"),$("#thumbsup").addClass("fa-thumbs-o-up")),$("#thumbsup-circle").hasClass("green-text")&&($("#thumbsup-circle").removeClass("green-text"),$("#thumbsup-circle").addClass("light")),$("#thumbsup-circle").hasClass("white-text")&&($("#thumbsup-circle").removeClass("white-text"),$("#thumbsup-circle").addClass("light")),$("#thumbsup-circle").hasClass("fa-circle")&&($("#thumbsup-circle").removeClass("fa-circle"),$("#thumbsup-circle").addClass("fa-circle-thin")),$("#thumbsup-text").hasClass("dark")&&($("#thumbsup-text").removeClass("dark"),$("#thumbsup-text").addClass("light")),$("#thumbsdown-text").hasClass("light")&&($("#thumbsdown-text").removeClass("light"),$("#thumbsdown-text").addClass("dark")),$("#thumbsdown").hasClass("red-text")&&$("#thumbsdown-circle").hasClass("fa-circle-thin")&&($("#thumbsdown").removeClass("red-text"),$("#thumbsdown").addClass("white-text"),$("#thumbsdown").removeClass("fa-thumbs-o-down"),$("#thumbsdown").addClass("fa-thumbs-down"),$("#thumbsdown-circle").removeClass("fa-circle-thin"),$("#thumbsdown-circle").addClass("fa-circle")),$("#thumbsdown").hasClass("light")&&$("#thumbsdown-circle").hasClass("fa-circle-thin")&&($("#thumbsdown").removeClass("light"),$("#thumbsdown").addClass("white-text"),$("#thumbsdown").removeClass("fa-thumbs-o-down"),$("#thumbsdown").addClass("fa-thumbs-down"),$("#thumbsdown-circle").removeClass("light"),$("#thumbsdown-circle").addClass("red-text"),$("#thumbsdown-circle").removeClass("fa-circle-thin"),$("#thumbsdown-circle").addClass("fa-circle"))});