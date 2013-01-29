var app = app || {};
app.views = {};
app.models = {};
app.collections = {};
app.templates = {};

app.config = {
  development : {
    apiURL: 'http://localhost:8000/'
  },
  production : {
    apiURL: 'http://web-audio-components-api.jit.su/'
  }
};

app.config = app.config[ENV || 'development'];
