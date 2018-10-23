import * as assert from "assert";
import * as sinon from "sinon";
import * as fs from "fs";
import { isNightcallInstalled } from "../../serviceObjects/isNightcallInstalled";

suite("isNightcallInstalled", () => {
  test("Recognizes that nightcall is installed", done => {
    const fsAccessStub = sinon.stub(fs, "access").callsArgWith(2, null);
    isNightcallInstalled().then((nightcallInstalled: boolean) => {
      assert(nightcallInstalled);
      fsAccessStub.restore();
      done();
    });
  });

  test("Recognizes that nightcall is not installed", done => {
    const fsAccessStub = sinon.stub(fs, "access").callsArgWith(2, "error");
    isNightcallInstalled().then((nightcallInstalled: boolean) => {
      assert(!nightcallInstalled);
      fsAccessStub.restore();
      done();
    });
  });
});
