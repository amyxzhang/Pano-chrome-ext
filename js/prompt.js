"use strict";

function truncate(str, length) {
    if (str.length > length) {
        return str.substring(0, length);
    } else {
        return str;
    }
}

function createTrackPrompt(url, baseUrl) {

    var divHtml = "";
    divHtml += "<div id='eyebrowse-frame' style='";
    divHtml += "z-index: 2147483647 !important; ";
    divHtml += "position: fixed !important; ";
    divHtml += "display: block !important; ";
    divHtml += "background-color: #333333 !important; ";
    divHtml += "right: 26px !important; ";
    divHtml += "top: 12px !important; ";
    divHtml += "padding: 2px 11px 8px 11px !important; ";
    divHtml += "width: 250px !important; ";
    divHtml += "height: 120px !important; ";
    divHtml += "text-align: center !important; ";
    divHtml += "-webkit-border-radius: 13px !important; ";
    divHtml += "-moz-border-radius: 13px !important; ";
    divHtml += "border-radius: 13px !important; ";
    divHtml += "'>";

    divHtml += "<span style='font-size: 12px !important; font-family: verdana !important; color: #ffffff !important;'>";
    divHtml += "<span>Track activity from <br /> " + new URL(url).hostname + "</span> ";
    divHtml += "<p><button style='";
    divHtml += "color: #fff !important;";
    divHtml += "background-color: #5cb85c !important;";
    divHtml += "background: #5cb85c !important;";
    divHtml += "border-color: #4cae4c !important;";
    divHtml += "padding: 6px 12px !important;";

    divHtml += "margin: 3px 3px 3px 3px !important;";
    divHtml += "box-shadow: 0px 0px 0px 0px !important;";
    divHtml += "text-transform: capitalize !important;";
    divHtml += "font-weight: none !important;";
    divHtml += "line-height: 14px !important;";
    divHtml += "width: auto !important;";
    divHtml += "height: auto !important;";

    divHtml += "font-size: 14px !important;";
    divHtml += "cursor: pointer !important;";
    divHtml += "border: 1px solid transparent !important;";
    divHtml += "border-radius: 4px !important;' ";
    divHtml += "id='eyebrowse-allow-btn' type='button' value='Yes'>Yes</button>";
    divHtml += " <button style='";
    divHtml += "color: #fff !important;";
    divHtml += "background-color: #f0ad4e !important;";
    divHtml += "background: #f0ad4e !important;";
    divHtml += "border-color: #eea236 !important;";
    divHtml += "padding: 6px 12px !important;";

    divHtml += "width: auto !important;";
    divHtml += "height: auto !important;";

    divHtml += "margin: 3px 3px 3px 3px !important;";
    divHtml += "box-shadow: 0px 0px 0px 0px !important;";
    divHtml += "text-transform: capitalize !important;";
    divHtml += "font-weight: none !important;";
    divHtml += "line-height: 14px !important;";

    divHtml += "font-size: 14px !important;";
    divHtml += "cursor: pointer !important;";
    divHtml += "border: 1px solid transparent !important;";
    divHtml += "border-radius: 4px !important;' ";
    divHtml += "id='eyebrowse-deny-btn' type='button' value='No'>No</button>";
    divHtml += "</p></div>";
    return divHtml;
}

function createLoginPrompt(baseUrl) {

    console.log("login");
    var divHtml = "";
    divHtml += "<div id='eyebrowse-frame' style='";
    divHtml += "z-index: 999999999 !important; ";
    divHtml += "position: fixed !important; ";
    divHtml += "display: block !important; ";
    divHtml += "background-color: #333333 !important; ";
    divHtml += "right: 26px !important; ";
    divHtml += "top: 12px !important; ";
    divHtml += "padding: 2px 11px 8px 11px !important; ";
    divHtml += "width: 250px !important; ";
    divHtml += "height: 120px !important; ";
    divHtml += "text-align: center !important; ";
    divHtml += "-webkit-border-radius: 13px !important; ";
    divHtml += "-moz-border-radius: 13px !important; ";
    divHtml += "border-radius: 13px !important; ";
    divHtml += "'>";

    divHtml += "<span style='font-size: 12px !important; font-family: verdana !important; color: #ffffff !important;'>You\'ve been logged out of Eyebrowse. Log back in by clicking the icon above.</span>";
    divHtml += "<br /><p><button style='";
    divHtml += "color: #fff !important;";
    divHtml += "background-color: #f0ad4e !important;";
    divHtml += "border-color: #eea236 !important;";
    divHtml += "padding: 6px 12px !important;";

    divHtml += "margin: 3px 3px 3px 3px !important;";
    divHtml += "box-shadow: 0px 0px 0px 0px !important;";
    divHtml += "text-transform: capitalize !important;";
    divHtml += "font-weight: none !important;";
    divHtml += "line-height: 14px !important;";

    divHtml += "font-size: 14px !important;";
    divHtml += "cursor: pointer !important;";
    divHtml += "border: 1px solid transparent !important;";
    divHtml += "border-radius: 4px !important;' ";
    divHtml += "id='eyebrowse-ignore-btn' type='button' value='Ignore'>Ignore</button>";
    divHtml += "</p></div>";

    return divHtml;
}

function createPopupPrompt(data, baseUrl) {

    if (data.active_users.length === 0 && data.message === "") {
        return "";
    }

    var div_html = "";
    div_html += "<style> #eyebrowse-frame:after {content: '';position: absolute !important;border-style: solid !important;border-width: 0 10px 10px !important;border-color: #FFFFFF transparent !important;display: block !important;width: 0 !important;z-index: 1 !important;top: -7px !important;right: 7px !important;}";
    div_html += "#eyebrowse-frame:before {content: ''; position: absolute !important; border-style: solid !important; border-width: 0 11px 11px !important; border-color: #333333 transparent !important;display: block !important;width: 0 !important;z-index: 0 !important;top: -12px !important;right: 6px !important;}</style>";

    var num = (data.active_users.length * 24) + 10;
    if (data.message === "") {
        if (num === 34) {
            num = 45;
        }
    } else {
        num += 195;
    }

    div_html += "<div id='eyebrowse-frame' style='";
    div_html += "z-index: 999999999 !important; ";
    div_html += "position: fixed !important; ";
    div_html += "right: 26px !important; ";
    div_html += "top: 12px !important; ";
    div_html += "padding: 3px 2px 4px 4px !important; ";
    div_html += "max-width: 390px !important; ";
    div_html += "min-width: 40px !important; ";
    div_html += "width: " + num.toString() + "px !important; ";
    div_html += "height: 32px !important; ";
    div_html += "text-align: center !important; ";
    div_html += "background: #FFFFFF !important; ";
    div_html += "-webkit-border-radius: 13px !important; ";
    div_html += "-moz-border-radius: 13px !important; ";
    div_html += "border-radius: 13px !important; ";
    div_html += "border: #333333 solid 3px !important; ";

    div_html += "webkit-box-sizing: border-box !important; ";
    div_html += "-moz-box-sizing: border-box !important; ";
    div_html += "box-sizing: border-box !important; ";

    div_html += "'>";

    if (data.message !== "") {
        div_html += "<div style='font-size: 9px !important; font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif !important; line-height: 11px !important; display: inline-block !important; max-width: 160px !important; height: 22px !important; position: relative !important; top: -10px !important;'>";

        if (data.user_url === "") {
            div_html += truncate(data.message, 78);
        } else {
            div_html += truncate(data.message, 51);
            div_html += " - <a href='" + data.user_url + "' title='" + data.username + "' target='_blank'>" + data.username + "</a> ";
        }
        div_html += data.about_message;
        div_html += "</div>";
    }


    if (data.message !== "" && data.active_users.length > 0) {
        div_html += "<div style='position: relative !important; top: -5px !important; height: 30px !important; display: inline-block !important; width: 2px !important; background-color: #000000 !important; margin: 0px 5px 0px 5px !important;'></div>";
    }

    if (data.active_users.length > 0) {
        div_html += "<div style='display: inline-block !important; position: relative !important;";

        if (data.message !== "") {
            div_html += "top: -15px !important; ";
        } else {
            div_html += "top: 0px !important; ";
        }

        div_html += "height: 22px !important;'>";
        for (var i = 0; i < data.active_users.length; i++) {
            var user = data.active_users[i];
            div_html += "<a href='" + user.url + "' target='_blank' title='" + user.username + " - " + user.time_ago + " ago'>";
            div_html += "<img style='";
            div_html += "margin: 1px !important; ";
            div_html += "border: 0px !important; ";
            div_html += "padding: 0px !important; ";
            if (user.old_level === 0) {
                div_html += "width: 18px !important; ";
                div_html += "height: 18px !important; ";
                div_html += "border: #ffff00 solid 2px !important; margin: 0px !important;'";
                div_html += "src='" + user.pic_url + "'></a>";
            } else if (user.old_level === 1) {
                div_html += "width: 20px !important; ";
                div_html += "height: 20px !important; ";
                div_html += "opacity: .9 !important;'src = '" + user.pic_url + "' > < /a>";
            } else if (user.old_level === 2) {
                div_html += "width: 20px !important; ";
                div_html += "height: 20px !important; ";
                div_html += "opacity: .75 !important;'src='" + user.pic_url + "'></a > ";
            } else if (user.old_level === 3) {
                div_html += "width: 20px!important;";
                div_html += "height: 20px!important;";
                div_html += "opacity: .6!important;'src='" + user.pic_url + "'></a>";
            }
        }
    }
    div_html += "</div>";

    div_html += "</div>";


    return div_html;
}


/*
    Call the eyebrowse server to get an iframe with a prompt
    Can either be a login or track type prompt.
*/
function setup(baseUrl, promptType, user, host, url) {
    if ($("#eyebrowse-frame").length) {
        $("#eyebrowse-frame").css("z-index", 999999999);
        return;
    }

    var frame;

    if (promptType === "trackPrompt") {
        frame = createTrackPrompt(url, baseUrl);
        $("body").append(frame);

        $("#eyebrowse-frame").css("visibility", "visible");
        setFade();

        chrome.extension.sendMessage(JSON.stringify({
            "action": "nag",
            "url": window.document.URL
        }));

        $("#eyebrowse-allow-btn").click(function() {
            $("#eyebrowse-frame").remove();
            var msg = {
                "action": "filterlist",
                "type": "whitelist",
                "url": url
            };
            chrome.extension.sendMessage(JSON.stringify(msg));
        });

        $("#eyebrowse-deny-btn").click(function() {
            $("#eyebrowse-frame").remove();
            var msg = {
                "action": "filterlist",
                "type": "blacklist",
                "url": url
            };
            chrome.extension.sendMessage(JSON.stringify(msg));
        });

    } else if (promptType === "loginPrompt") {
        frame = createLoginPrompt(baseUrl);
        $("body").append(frame);

        $("#eyebrowse-frame").css("visibility", "visible");
        setFade();

        $("#eyebrowse-ignore-btn").click(function() {
            $("#eyebrowse-frame").remove();
            msg = {
                "action": "ignore"
            };
            chrome.extension.sendMessage(JSON.stringify(msg));
        });

    } else {
        $.ajax({
            url: baseUrl + "/ext/popupInfo/",
            type: "POST",
            data: {
                "url": url,
                "csrfmiddlewaretoken": user.csrf,
            },
            success: function(data) {
                frame = createPopupPrompt(data, baseUrl);
                $("body").append(frame);

                $("#eyebrowse-frame").css("visibility", "visible");
                setFade();
            }
        });

    }

}


function setFade() {

    var fadeTime = 3000; //8 seconds
    var $popup = $("#eyebrowse-frame");

    var fadePopup = setTimeout(function() {
        fade($popup);
    }, fadeTime);

    $popup.hover(function() {
        clearInterval(fadePopup);
        $popup.stop();
        $popup.css("opacity", 1.0);
    });

    $popup.mouseleave(function() {
        fadePopup = setTimeout(function() {
            fade($popup);
        }, fadeTime);
    });
}

function fade(el) {
    var $popup = $("#eyebrowse-frame");
    el.fadeOut(1000, function() {
        $popup.animate({
            "top": $("#eyebrowse-frame").css("top") - 120
        }, 500);
        $("#eyebrowse-frame").remove();
    });
}


chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    var host = window.location.host;
    var protocol = window.location.protocol;
    var action = request.action;
    var url = document.URL;

    if (action === "prompt" && protocol === "http:") {
        setup(request.baseUrl, request.type, request.user, host, url);
    }
});
