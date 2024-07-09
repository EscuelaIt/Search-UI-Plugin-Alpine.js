# Search UI Plugin Alpine.js

This plugin creates a custom directive x-search-ui to implement a search user interface on an input.

# How to use

## Installation

### Via CDN

```html
<script defer src="https://cdn.jsdelivr.net/npm/alpine-plugin-search-ui@1.x.x/dist/cdn.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### Via npm

```bash
npm i alpine-plugin-search-ui
```

```javascript
import Alpine from 'alpinejs'
import searchUiPlugin from 'alpine-plugin-search-ui'; 

window.Alpine = Alpine
Alpine.plugin(searchUiPlugin)
Alpine.start()
``` 

## Using the x-search-ui directive

```html
<div x-data>
  <div x-search-ui class="search-container">
    <input type="text" placeholder="Search...">
  </div>
</div>
```

### Modifiers

To change icon color use these modifiers:

- black
- white

```html
<div x-data>
  <div x-search-ui.black class="search-container">
    <input type="text" placeholder="Search...">
  </div>
</div>
```
