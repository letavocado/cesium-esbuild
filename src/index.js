window.CESIUM_BASE_URL = "http://localhost.net/static/Cesium";
import { Viewer, Cartesian3, Math } from "cesium";

let la = 0;
let ln = 0;
let alt = 0;
let pit = 0.0;
let yaw = 0.0;
const viewer = new Viewer("cesiumContainer", {});

// Just test the evaluateJavascript from Android
export function jstest() {
  console.log("Android Native called evaluateJavascript");
  console.log(viewer);
}

// Just test the JSInterface call from android
export function testd() {
  la = D.lat();
  ln = D.lon();
  alt = D.alt();
  pit = D.cpit();
  yaw = D.cyaw();
  viewer.camera.flyTo({
    destination: Cartesian3.fromDegrees(ln, la, alt),
    orientation: {
      heading: Math.toRadians(yaw),
      pitch: Math.toRadians(pit),
    },
  });
  console.log(pit);
  console.log(yaw);
  console.log(Math.toRadians(yaw));
}
setInterval(testd, 200);
