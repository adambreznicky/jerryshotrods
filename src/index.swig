<!DOCTYPE html>
<html>
  <head>
    <title>Jerry's Hot Rods</title>
    <meta name="theme-color" content="#ffffff">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="favicon.ico" type="image/x-icon" />

    {% if isProd %}
      <link rel="stylesheet" type="text/css" href="/assets/styles.css">
    {% endif %}

  </head>
  <body>
    <div id="jhr">
      <noscript>
          <p>
          Sorry, the Flood Information Viewer requires Javascript to function.
          </p>
      </noscript>
    </div>
    <script src="assets/app.bundle.js" type="text/javascript"></script>
  </body>
</html>
