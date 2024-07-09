# Search UI Plugin Alpine.js

This plugin creates a custom directive x-search-ui to implement a search user interface on an input.

# How to use

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
