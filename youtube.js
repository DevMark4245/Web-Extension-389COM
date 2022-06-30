const DownloadButtonText = "Download";
function Download() { window.open(`https://loader.to/?link=${ location.href }&f=7&s=1&e=1&r=loader`); }
 
const cssText = `
    .download-button {
        display: flex;
        flex-direction: row;
        cursor: pointer;
        background-color: var(--yt-spec-10-percent-layer);
        color: var(--yt-spec-text-secondary);
        border-radius: 2px;
        padding: var(--yt-button-padding);
        margin: auto var(--ytd-subscribe-button-margin, 4px);
        white-space: nowrap;
        font-size: var(--ytd-tab-system-font-size, 1.4rem);
        font-weight: var(--ytd-tab-system-font-weight, 500);
        letter-spacing: var(--ytd-tab-system-letter-spacing, .007px);
        text-transform: var(--ytd-tab-system-text-transform, uppercase);
    }
    .download-button-text {
        --yt-formatted-string-deemphasize_-_display: initial;
        --yt-formatted-string-deemphasize-color: var(--yt-spec-text-secondary);
        --yt-formatted-string-deemphasize_-_margin-left: 4px;
    }
    .download-button-container {
        display: flex;
        flex-direction: row;
        cursor: grabbing;
    }
`;
 
 
(function() {
    'use strict';
    window.addEventListener("yt-navigate-finish", () => {
        setTimeout(() => {

            //Apply css
            const style = document.createElement("style");
            style.type = "text/css";
            style.innerHTML = cssText;
            document.head.appendChild(style);

            document.querySelectorAll("#analytics-button:not(.download-panel)").forEach(panel => {
                panel.classList.add("download-panel");

                //Download button
                const buttonDownload = document.createElement("div");   //Create button
                buttonDownload.classList.add("download-button");
                buttonDownload.addEventListener("click", Download);
                const textDownload = document.createElement("span");    //text
                textDownload.classList.add("download-button-text");
                textDownload.innerHTML = DownloadButtonText;
                buttonDownload.appendChild(textDownload);               //append text to button

                //outer container (to keep buttons side-by-side)
                const container = document.createElement("div");
                container.classList.add("download-button-container");
                container.appendChild(buttonDownload);
                panel.insertBefore(container, panel.firstElementChild);
            });
        }, 200);
    });
})();