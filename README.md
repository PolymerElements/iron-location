iron-page-url
=============

The `iron-page-url` element manages binding to and from the current URL.

When the URL is: `/search?query=583#details` its properties will be:

  - path: `'/search'`
  - params: `{query: '583'}`
  - hash: `'details'`

These bindings are bidirectional, so modifying them will in turn modify the URL.

This element is only active while it is attached to the document.
