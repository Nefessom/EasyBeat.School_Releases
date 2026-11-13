# EasyBeat.School — Releases

Репозиторий для скачивания программы **EasyBeat.School** (Tabs Player, метроном, теория, заметки).
Здесь лежат только готовые сборки и файлы для магазинов. Исходный код пока закрыт.

Download page for **EasyBeat.School** builds. Source code is closed for now.

## Скачать / Download

Все сборки — на странице [Releases](../../releases); самая новая — [Latest](../../releases/latest).
All builds are on the [Releases](../../releases) page; the newest is [Latest](../../releases/latest).

В имени каждого файла есть версия (`X`) и система / Every file name carries the version (`X`) and the system:

| Платформа / Platform | Файл / File |
|---|---|
| Windows (x64 + ARM64, один установщик / one installer) | `EasyBeat-School-X-win.exe` |
| macOS (Intel + Apple Silicon) | `EasyBeat-School-X-mac-universal.pkg` (или / or `.zip`) |
| Linux x86_64 | `EasyBeat.School-X-linux-x86_64.AppImage`, `.flatpak`, `.tar.gz` |
| Linux ARM64 | `EasyBeat.School-X-linux-arm64.AppImage`, `.flatpak`, `.tar.gz` |
| Android | `EasyBeat-School-X-android.apk` |

Программа на Windows, macOS и Linux (AppImage) и APK на Android обновляются сами: когда выходит новая версия, появляется кнопка «Обновить». Flatpak и tar.gz показывают кнопку «Скачать» — новую версию нужно поставить так же, как первую.
The Windows, macOS and Linux (AppImage) programs and the Android APK update themselves: when a new version is out, an "Update" button appears. Flatpak and tar.gz show a "Download" button — install the new version the same way as the first.

## Установка на Linux / Install on Linux

Вместо `X` — номер версии из имени скачанного файла; для ARM64 — `arm64` вместо `x86_64`.
Replace `X` with the version from the file you downloaded; on ARM64 use `arm64` instead of `x86_64`.

**AppImage:**
```bash
chmod +x EasyBeat.School-X-linux-x86_64.AppImage
./EasyBeat.School-X-linux-x86_64.AppImage
```

**Flatpak:**
```bash
flatpak install --user EasyBeat.School-X-linux-x86_64.flatpak
flatpak run school.easybeat.App
```

**tar.gz** (готовая программа, не исходники / the built program, not sources):
```bash
tar -xzf EasyBeat.School-X-linux-x86_64.tar.gz
cd linux-unpacked          # ARM64: linux-arm64-unpacked
./easybeat-school
```

Контрольная сумма SHA-256 каждого файла показана на странице выпуска рядом с файлом. Файлы упаковки Flatpak — в папке [flatpak](flatpak).
The SHA-256 of every file is shown next to it on the release page. Flatpak packaging files are in [flatpak](flatpak).

Вход через Google открывается в браузере по умолчанию и возвращает в программу сам. Во Flatpak это работает из коробки; в AppImage — только если система знает ссылку `easybeat-school://`.

## Сайт / Website

https://easybeat.school

## Лицензия / License

Программа бесплатная. Пользоваться и распространять её можно кому угодно и где угодно, в неизменном виде; изменять программу нельзя. Подробно — в [LICENSE](LICENSE).
The software is free. Anyone may use and redistribute it anywhere, unmodified; modifying it is not allowed. See [LICENSE](LICENSE).
