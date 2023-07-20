window.CESIUM_BASE_URL = "http://localhost:8000/static/Cesium";
import { Viewer, Cartesian3, Math } from "cesium";

let la = 0;
let ln = 0;
let alt = 0;

const viewer = new Viewer("cesiumContainer", {});

// Just test the evaluateJavascript from Android
function jstest() {
  console.log("Android Native called evaluateJavascript");
  console.log(viewer);
}

// Just test the JSInterface call from android
function testd() {
  ln = D.lon().toFixed(6);
  la = D.lat().toFixed(6);
  alt = D.alt() + 1;
  viewer.camera.flyTo({
    destination: Cartesian3.fromDegrees(ln, la, alt),
    orientation: {
      heading: Math.toRadians(0.0),
      pitch: Math.toRadians(0),
    },
  });
  console.log(ln);
}
setInterval(jstest, 5000);
