# Nazeka (Chrome port)

This is an **unofficial port of [Nazeka](https://github.com/wareya/nazeka)** — a rikai-replacement
Japanese popup dictionary extension originally written by [wareya](https://github.com/wareya) for
Firefox — adapted to run on Chrome under Manifest V3.

This is a community port, not an official release, and is not affiliated with or endorsed by
the original author. If you're on Firefox, use the
[original addon](https://addons.mozilla.org/en-US/firefox/addon/nazeka/) instead.

## Installation

1. Download the [latest release](../../releases) zip (or clone this repo).
2. Go to `chrome://extensions`, enable **Developer mode**, and click **Load unpacked**
   (or drag the zip in, if using the packed `.crx`/store build).
3. See the [original tutorial](https://github.com/wareya/nazeka/blob/master/tutorial.md) for
   how to use it. Usage is identical to the Firefox version.

## Known limitation

Chrome can terminate the background service worker after a period of inactivity. When that
happens, the (large, in-memory) JMdict/frequency-list data gets rebuilt from the bundled local
files on the next lookup, which is fast but can cause a brief delay after the extension has
been idle for a while. This is a Manifest V3 platform constraint, not a bug in this port.

## Credits & License

- Original extension: [wareya/nazeka](https://github.com/wareya/nazeka), licensed under the
  [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0). This port modifies
  files from that project under the terms of that license; see individual file headers for the
  original copyright notice. Changes made in this port are described above.
- Dictionary data: this extension bundles [JMdict](https://www.edrdg.org/jmdict/j_jmdict.html),
  Copyright © The Electronic Dictionary Research and Development Group, used and redistributed
  under the [EDRDG license](https://www.edrdg.org/edrdg/licence.html), which permits bundling and
  commercial use provided the source is acknowledged. This notice constitutes that acknowledgement.
- This port itself is made available under the same Apache License, Version 2.0, as the
  upstream project.