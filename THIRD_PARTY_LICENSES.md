# Third-party licenses

EasyBeat.School uses the components below. Each remains under its own license.
The full list of npm packages of the web part ships inside the app
(Settings → Licenses, file `licenses/npm-licenses.json`).

## Used by all versions

| Component | License | Source |
|---|---|---|
| alphaTab v1.8.4 (patched build) | MPL-2.0 | https://www.alphatab.net |
| alphaTab integrated libraries | MIT / BSD-3-Clause | https://github.com/CoderLine/alphaTab |
| Bravura music font | SIL Open Font License 1.1 | https://github.com/steinbergmedia/bravura |
| Inter, Archivo Black | SIL Open Font License 1.1 | https://fonts.google.com |
| lamejs | LGPL-3.0 | https://github.com/zhuker/lamejs |
| heic-to (libheif) | LGPL-3.0 | https://github.com/hoppergee/heic-to |
| Tesseract OCR (tesseract.js) | Apache-2.0 | https://github.com/naptha/tesseract.js |
| Transformers.js and ONNX Runtime Web | Apache-2.0 / MIT | https://github.com/huggingface/transformers.js |
| Whisper tiny (onnx-community/whisper-tiny) | MIT | https://huggingface.co/onnx-community/whisper-tiny |
| PDF.js | Apache-2.0 | https://mozilla.github.io/pdf.js/ |
| Phosphor Icons | MIT | https://phosphoricons.com |
| Instrument icons (SVG Repo, Noto Emoji) | per icon | https://www.svgrepo.com |
| SoundFont: MuseScore_General.sf3 | MIT, parts public domain / CC0 | https://musescore.org/en/handbook/3/soundfonts-and-sfz-files |
| Metronome sounds (BigSoundBank, Pixabay) | CC0 1.0 / Pixabay Content License | https://bigsoundbank.com |
| Kokoro-82M | Apache-2.0 | https://huggingface.co/hexgrad/Kokoro-82M |
| DiceBear avatars (Pixel Art style) | CC0 1.0 (design), MIT (code) | https://www.dicebear.com/styles/pixel-art |
| Google Sign-In and Google Drive API | Google APIs Terms of Service | https://developers.google.com/terms |
| Tuning reference values (tune-bot.com) | reference data | https://tune-bot.com |
| Capacitor, AndroidX | MIT / Apache-2.0 | https://capacitorjs.com |
| Brand and service logos | trademarks of their owners | — |

## Desktop versions only (Linux builds in this repository)

| Component | License | Source |
|---|---|---|
| Electron 41 | MIT | https://github.com/electron/electron — `LICENSE.electron.txt` in the package |
| Chromium (inside Electron) | BSD-3-Clause and others | `LICENSES.chromium.html` in the package |
| ONNX Runtime for Node.js (onnxruntime-node) | MIT | https://github.com/microsoft/onnxruntime |
| sharp | Apache-2.0 | https://github.com/lovell/sharp |
| libvips (@img/sharp-libvips-linux-x64) | LGPL-3.0-or-later | https://github.com/libvips/libvips |
| @napi-rs/canvas (Skia) | MIT / BSD-3-Clause | https://github.com/Brooooooklyn/canvas |
| Other npm packages in the desktop app | MIT, ISC, BSD-2/3-Clause, Apache-2.0, BlueOak-1.0.0, 0BSD, Unlicense | inside `resources/app.asar` |

## LGPL components

lamejs, heic-to (libheif) and libvips are used unmodified as separate libraries.
Their source code is available at the links above. On Linux, libvips is a separate
shared library (`resources/app.asar.unpacked/node_modules/@img/sharp-libvips-linux-x64`)
and can be replaced by the user.
