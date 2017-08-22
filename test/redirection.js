import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <iron-location hash="{{hash}}"></iron-location>
`,

  is: 'redirect-hash',

  properties: {
    hash: {
      value: '',
      observer: 'hashChanged'
    }
  },

  hashChanged: function(hash) {
    this.hash = 'redirectedTo';
  }
});
Polymer({
  _template: `
    <iron-location path="{{path}}"></iron-location>
`,

  is: 'redirect-path',

  properties: {
    path: {
      value: '',
      observer: 'pathChanged'
    }
  },

  pathChanged: function(path) {
    this.path = '/redirectedTo';
  }
});
Polymer({
  _template: `
    <iron-location query="{{query}}"></iron-location>
`,

  is: 'redirect-query',

  properties: {
    query: {
      value: '',
      observer: 'queryChanged'
    }
  },

  queryChanged: function(query) {
    this.query = 'redirectedTo';
  }
});
