// Builds the electron-builder config for Linux from the app's package.json.
// Usage (from the EasyBeat.School checkout):
//   node <this file> > /tmp/eb-linux.json && npx electron-builder --linux AppImage --x64 --publish never --config /tmp/eb-linux.json
// Differences from package.json "build":
//  - no fileAssociations: lists of extensions break the Linux packer (desktop file gets mime types instead)
//  - onnxruntime-node ships only linux/x64 without CUDA/TensorRT (562 -> 305 MB AppImage)
//  - AppImage starts with --no-sandbox: chrome-sandbox cannot be setuid inside an AppImage
const path = require('path');
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
  artifactName: 'EasyBeat.School-${version}-x86_64.${ext}',
  // Embedded .desktop (Gear Lever and other AppImage installers copy it): name, window match,
  // and the Google sign-in return link.
  desktop: {
    Name: 'EasyBeat.School',
    StartupWMClass: 'EasyBeat.School',
    MimeType: 'x-scheme-handler/easybeat-school;',
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
  '!node_modules/onnxruntime-node/bin/napi-v3/linux/arm64/**',
  '!node_modules/onnxruntime-node/bin/napi-v3/linux/x64/libonnxruntime_providers_{cuda,tensorrt}.so',
  '!node_modules/@napi-rs/canvas-linux-x64-musl/**',
];
process.stdout.write(JSON.stringify(b, null, 2));
