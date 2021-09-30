# Overleave

This project is a Chrome extension that, when in an Overleaf project, opens the compiled pdf in a new tab. I built this because I prefer the local TeX experience where I can typeset in one window and leave the compiled pdf in another window; however, Overleaf doesn't have this functionality.

Features:

* Supports private Overleaf projects
* Automatically rerenders pdf when the Overleaf project recompiles

## Setup

You can download the latest release from the Chrome extension store (TODO). To run in developer mode, you can:

1. Clone this repository
2. Navigate to [chrome://extensions/](chrome://extensions/)
3. Enable the "Developer mode" switch in the top right
4. Click "Load Unpacked" in the left hand side
5. Upload the project

## Contributing

It's pretty hacky Javascript right now, so if you're interested in making it better, feel free to make a PR!
