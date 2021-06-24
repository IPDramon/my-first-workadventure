/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// You can write your WorkAdventure script here, if any.
// The "WA" global object is available from anywhere.

console.log('Script started successfully');
// WA.openCoWebSite('https://workadventu.re');

const ZONE_TEST = "popupTest";
const URL_LIVESTREAM = "https://duckduckgo.com";

let currentPopup: any = undefined;

WA.onEnterZone(ZONE_TEST, () => {
    currentPopup = WA.openPopup("popupTest", "Open Youtube live stream in new tab.", [
        {
            label: "Open tab",
            className: "normal",
            callback: (popup => {
                WA.openTab(URL_LIVESTREAM);
            })
        }
    ]);
});

WA.onLeaveZone(ZONE_TEST, closePopUp);

function closePopUp() {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}