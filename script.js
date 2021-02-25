require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
      var camera = new Camera({
        position: [
           -71.0972,
          42.3467,
          2500// elevation in meters
        ],
        tilt:0,
        heading: 0
      })
      
      var camera2 = new Camera({
        position: {
         x: -71.1054,
         y: 42.3505, 
         z: 2500// elevation in meters
        },
        tilt: 0,
        heading: 0
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [fen, bos, v3].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    bos.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
    
    fen.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });
 
  v3.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: -71.038678,
          y: 42.358820, 
          z: 2500
        },
        tilt: 20,
        heading: -100
      });
    });


    });
