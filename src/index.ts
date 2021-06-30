/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// You can write your WorkAdventure script here, if any.
// The "WA" global object is available from anywhere.

console.log('Script started successfully');
// WA.openCoWebSite('https://workadventu.re');

const ZONE_LIVESTREAM = "zoneLivestream";
const POPUP_LIVESTREAM = "popupLivestream";
const ZONE_CONTROLS = "zoneControls";
const POPUP_CONTROLS = "popupControls";
const ZONE_MATE = "zoneMate";
const POPUP_MATE = "popupMate";
const URL_LIVESTREAM = "https://youtu.be/4itNTTCd_EE";

let currentPopup: any = undefined;

WA.onEnterZone(ZONE_LIVESTREAM, () => {
    currentPopup = WA.openPopup(POPUP_LIVESTREAM, "Open Youtube live stream in new tab.", [
        {
            label: "Open tab",
            className: "normal",
            callback: (popup => {
                WA.openTab(URL_LIVESTREAM);
            })
        }
    ]);
});

WA.onEnterZone(ZONE_CONTROLS, () => {
    currentPopup = WA.openPopup(POPUP_CONTROLS, "Move: W/A/S/D or Arrow keys; Run: Hold Shift; Zoom: Scroll wheel", []);
});

WA.onEnterZone(ZONE_MATE, () => {
    currentPopup = WA.openPopup(POPUP_MATE, "Club Mate = 1€", []);
});

WA.onLeaveZone(ZONE_LIVESTREAM, closePopUp);
WA.onLeaveZone(ZONE_CONTROLS, closePopUp);
WA.onLeaveZone(ZONE_MATE, closePopUp);

function closePopUp() {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}