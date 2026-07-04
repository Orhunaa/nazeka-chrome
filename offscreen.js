// Copyright 2017; Licensed under the Apache License, Version 2.0: https://www.apache.org/licenses/LICENSE-2.0
'use strict';

// This page is created on demand by the background service worker
// (chrome.offscreen.createDocument) purely because it has a real DOM,
// which the service worker itself lacks. It has no visible UI.

const paste_target = document.querySelector("#nazeka-paste-target");

paste_target.addEventListener("paste", (event) =>
{
    // skip event if there's no plaintext; thanks github.com/kmltml/clipboard-inserter
    let text = event.clipboardData.getData("text/plain");
    event.preventDefault();
    chrome.runtime.sendMessage({type: "offscreen_pasted_text", text: text});
});

chrome.runtime.onMessage.addListener((req) =>
{
    if(req.type == "offscreen_do_paste")
    {
        paste_target.textContent = "";
        paste_target.focus();
        document.execCommand("paste");
    }
    else if(req.type == "offscreen_play_audio")
    {
        let audio = new Audio(req.host);
        audio.volume = req.volume;
        audio.play();
    }
});
