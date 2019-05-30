import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "speech2Text";
  recordingStarted: boolean = false;
  recordingEnabled: boolean = false;
  defaultLang = "English-US";
  onclickRecord() {
    console.log("Record clicked");
    this.recordingEnabled = !this.recordingEnabled;
    this.recordingStarted = true;
    console.log("recoding in progress: " + this.recordingStarted);
  }
  onclickStopRecord() {
    console.log("Stop Recording clicked");
    this.recordingEnabled = !this.recordingEnabled;
    this.recordingStarted = false;
    console.log("recoding in progress: " + this.recordingStarted);
  }
  ChangingValue(event) {
    this.defaultLang = event.target.value;
  }
}
