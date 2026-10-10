# EasyBeat.School — Releases

Репозиторий для скачивания программы **EasyBeat.School** (Tabs Player, метроном, теория, заметки).
Здесь лежат только готовые сборки и файлы для магазинов. Исходный код пока закрыт.

Download page for **EasyBeat.School** builds. Source code is closed for now.

## Скачать / Download

Все сборки — на странице [Releases](../../releases).

| Платформа / Platform | Файл / File | Статус / Status |
|---|---|---|
| Linux (x86_64) | `.AppImage`, `.flatpak` | тестовая 0.7.1 / test build 0.7.1 |
| Windows | `.exe` | позже / later |
| macOS | `.dmg` | позже / later |
| Android | `.apk` | позже / later |

Сейчас сборки предназначены в первую очередь для тестирования.
Builds are currently intended mainly for testing.

## Установка на Linux / Install on Linux

**Flatpak:**
```bash
flatpak install --user EasyBeat.School-0.7.1-x86_64.flatpak
flatpak run school.easybeat.TabsPlayer
```

**AppImage:**
```bash
chmod +x EasyBeat.School-0.7.1-x86_64.AppImage
./EasyBeat.School-0.7.1-x86_64.AppImage
```

Контрольные суммы — в `SHA256SUMS.txt`. Файлы упаковки Flatpak — в папке [flatpak](flatpak).
Checksums are in `SHA256SUMS.txt`. Flatpak packaging files are in [flatpak](flatpak).

Вход через Google открывается в браузере по умолчанию и возвращает в программу сам. Во Flatpak это работает из коробки; в AppImage — только если система знает ссылку `easybeat-school://`.

## Сайт / Website

https://easybeat.school

## Лицензия / License

Программа бесплатная. Пользоваться и распространять её можно кому угодно и где угодно, в неизменном виде; изменять программу нельзя. Подробно — в [LICENSE](LICENSE).
The software is free. Anyone may use and redistribute it anywhere, unmodified; modifying it is not allowed. See [LICENSE](LICENSE).
