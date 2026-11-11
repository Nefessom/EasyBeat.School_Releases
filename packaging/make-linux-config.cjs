// Builds the electron-builder config for Linux from the app's package.json.
// Usage (from the EasyBeat.School checkout), once per processor: every release ships x86_64 AND arm64 (owner, 11.11.2026):
//   EB_LINUX_ARCH=x64   node <this file> > /tmp/eb-linux-x64.json   && npx electron-builder --linux AppImage --x64   --publish never --config /tmp/eb-linux-x64.json
//   EB_LINUX_ARCH=arm64 node <this file> > /tmp/eb-linux-arm64.json && npx electron-builder --linux AppImage --arm64 --publish never --config /tmp/eb-linux-arm64.json
// The x64 AppImage updates itself from latest-linux.yml, the arm64 one from latest-linux-arm64.yml (electron-updater picks by arch).
// Differences from package.json "build":
//  - no fileAssociations: lists of extensions break the Linux packer (desktop file gets mime types instead)
//  - onnxruntime-node ships only linux/<this arch> without CUDA/TensorRT (562 -> 305 MB AppImage)
//  - AppImage starts with --no-sandbox: chrome-sandbox cannot be setuid inside an AppImage
const path = require('path');
const ARCH = process.env.EB_LINUX_ARCH || 'x64';
if (!['x64', 'arm64'].includes(ARCH)) throw new Error(`EB_LINUX_ARCH must be x64 or arm64, not ${ARCH}`);
const OTHER = ARCH === 'x64' ? 'arm64' : 'x64';
// The name people know on Linux: x86_64 / arm64 (AppImage, Flathub).
const LINUX_NAME = ARCH === 'x64' ? 'x86_64' : 'arm64';
const b = require(path.resolve('package.json')).build;
delete b.fileAssociations;
b.directories = { output: 'release/linux' };
b.linux = {
  ...b.linux,
  target: ['AppImage'],
  executableName: 'easybeat-school',
  // Linux icon: the logo without the faint outer glow, enlarged to fill the square (the stock one looked small in the panel).
  icon: path.join(__dirname, '..', 'flatpak', 'icons'),
  executableArgs: ['--no-sandbox'],
  artifactName: `EasyBeat.School-${'${version}'}-${LINUX_NAME}.${'${ext}'}`,
  // Embedded .desktop (Gear Lever and other AppImage installers copy it): name, window match,
  // and the Google sign-in return link.
  desktop: {
    Name: 'EasyBeat.School',
    StartupWMClass: 'EasyBeat.School',
    MimeType: 'x-scheme-handler/easybeat-school;application/x-guitar-pro;application/x-easybeat-score;application/x-capella;application/vnd.recordare.musicxml+xml;',
    Categories: 'AudioVideo;Audio;Music;Education;',
  },
};
// Wayland app_id comes from desktopName (Electron sets CHROME_DESKTOP from it): the panel then
// shows EasyBeat.School instead of the executable name.
b.extraMetadata = { ...(b.extraMetadata || {}), desktopName: 'EasyBeat.School.desktop' };
delete b.linux.fileAssociations;
b.files = [
  ...b.files,
  '!node_modules/onnxruntime-node/bin/napi-v3/{darwin,win32}/**',
  `!node_modules/onnxruntime-node/bin/napi-v3/linux/${OTHER}/**`,
  `!node_modules/onnxruntime-node/bin/napi-v3/linux/${ARCH}/libonnxruntime_providers_{cuda,tensorrt}.so`,
  `!node_modules/@napi-rs/canvas-linux-${ARCH}-musl/**`,
  `!node_modules/@napi-rs/canvas-linux-${OTHER}-*/**`,
];
process.stdout.write(JSON.stringify(b, null, 2));
