/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '../iron-location.js';

import '@polymer/polymer/polymer-legacy.js';
import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  is: 'default-value',
  properties: {value: {type: String, notify: true, value: 'default-value'}},
});

Polymer({
  is: 'on-attached',
  properties:
      {val: {type: String, notify: true, value: 'on-attached-default-value'}},
  attached: function() {
    if (this.val === 'on-attached-default-value') {
      this.val = 'on-attached';
    }
  }
});

Polymer({
  is: 'on-ready',
  properties:
      {val: {type: String, notify: true, value: 'on-ready-default-value'}},

  ready: function() {
    this.val = 'on-ready';
  }
});

Polymer({
  is: 'on-timeout',
  properties:
      {val: {type: String, notify: true, value: 'on-timeout-default-value'}},
  attached: function() {
    setTimeout(function() {
      this.val = 'on-timeout';
    }.bind(this), 10);
  }
})
Polymer({
  _template: html`
    <default-value value="{{val}}"></default-value>
    <iron-location query="{{val}}"></iron-location>
`,

  is: 'default-before',
  properties: {val: {type: String}}
});
Polymer({
  _template: html`
    <on-attached val="{{val}}"></on-attached>
    <iron-location query="{{val}}"></iron-location>
`,

  is: 'attached-before',
  properties: {val: {type: String}}
});
Polymer({
  _template: html`
    <on-ready val="{{val}}"></on-ready>
    <iron-location query="{{val}}"></iron-location>
`,

  is: 'ready-before',
  properties: {val: String}
});
Polymer({
  _template: html`
    <on-timeout val="{{val}}"></on-timeout>
    <iron-location query="{{val}}"></iron-location>
`,

  is: 'timeout-before',
  properties: {val: {type: String}}
});
Polymer({
  _template: html`
    <iron-location query="{{val}}"></iron-location>
    <default-value value="{{val}}"></default-value>
`,

  is: 'default-after',
  properties: {val: {type: String}}
});
Polymer({
  _template: html`
    <iron-location query="{{val}}"></iron-location>
    <on-attached val="{{val}}"></on-attached>
`,

  is: 'attached-after',
  properties: {val: {type: String}}
});
Polymer({
  _template: html`
    <iron-location query="{{val}}"></iron-location>
    <on-ready val="{{val}}"></on-ready>
`,

  is: 'ready-after',
  properties: {val: String}
});
Polymer({
  _template: html`
    <iron-location query="{{val}}"></iron-location>
    <on-timeout val="{{val}}"></on-timeout>
`,

  is: 'timeout-after',
  properties: {val: {type: String}}
});
Polymer({
  _template: html`
    <iron-location query="{{val}}">
      <default-value value="{{val}}"></default-value>
    </iron-location>
`,

  is: 'default-below',
  properties: {val: {type: String}}
});
Polymer({
  _template: html`
    <iron-location query="{{val}}">
      <on-attached val="{{val}}"></on-attached>
    </iron-location>
`,

  is: 'attached-below',
  properties: {val: {type: String}}
});
Polymer({
  _template: html`
    <iron-location query="{{val}}">
      <on-ready val="{{val}}"></on-ready>
    </iron-location>
`,

  is: 'ready-below',
  properties: {val: String}
});
Polymer({
  _template: html`
    <iron-location query="{{val}}">
      <on-timeout val="{{val}}"></on-timeout>
    </iron-location>
`,

  is: 'timeout-below',
  properties: {val: {type: String}}
});
Polymer({
  _template: html`
    <default-value value="{{val}}">
      <iron-location query="{{val}}"></iron-location>
    </default-value>
`,

  is: 'default-above',
  properties: {val: {type: String}}
});
Polymer({
  _template: html`
    <on-attached val="{{val}}">
      <iron-location query="{{val}}">
      </iron-location>
    </on-attached>
`,

  is: 'attached-above',
  properties: {val: {type: String}}
});
Polymer({
  _template: html`
    <on-ready val="{{val}}">
      <iron-location query="{{val}}"></iron-location>
    </on-ready>
`,

  is: 'ready-above',
  properties: {val: String}
});
Polymer({
  _template: html`
    <on-timeout val="{{val}}">
      <iron-location query="{{val}}"></iron-location>
    </on-timeout>
`,

  is: 'timeout-above',
  properties: {val: {type: String}}
});
Polymer({
  _template: html`
    <iron-location query="{{val}}"></iron-location>
`,

  is: 'default-container',
  properties: {val: {type: String, value: 'default-container-val'}}
});
Polymer({
  _template: html`
    <iron-location query="{{val}}"></iron-location>
`,

  is: 'attached-container',
  properties: {val: {type: String, value: 'container-attached-default-val'}},

  attached: function() {
    if (this.val === 'container-attached-default-val') {
      this.val = 'attached-container-val';
    }
  }
});
Polymer({
  _template: html`
    <iron-location query="{{val}}"></iron-location>
`,

  is: 'ready-container',
  properties: {val: String},

  ready: function() {
    this.val = 'ready-container-val';
  }
});
Polymer({
  _template: html`
    <iron-location query="{{val}}"></iron-location>
`,

  is: 'timeout-container',
  properties: {val: {type: String, notify: true}},

  attached: function() {
    setTimeout(function() {
      this.val = 'on-timeout';
    }.bind(this), 10);
  }
});
