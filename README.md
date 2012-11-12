# Web Audio Package Manager

This project has 3 components -- a RESTful package manager service, a CLI interface for pushing and querying, and a web app to display available packages and try out the web audio packages in real-time.

The service and CLI components are pulled out into different repositories rather than smashing them all into the same repo:

[wapm-service](https://github.com/wapm/wapm-service)
[wapm-cli](https://github.com/wapm/wapm-cli)

## TODO

* Cache github responses and check against last updated and store the module scripts once on server and serve those, rather than banging GitHub
* Use font-awesome instead of bootstrap icons
