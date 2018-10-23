import * as assert from "assert";
import * as sinon from "sinon";
import * as changeThemeWrapper from "../../serviceObjects/changeTheme";
import * as fs from "fs";
import { DAY_THEME, NIGHT_THEME } from "../../util/Constants";
import { watchForThemeChange } from "../../serviceObjects/watchForThemeChange";

suite("watchForThemeChange", () => {
  test("Sets theme to watchfile content (N), then updates as the contents change (N->D->N)", done => {
    const fsReadFileStub = sinon
      .stub(fs, "readFile")
      .onFirstCall()
      .callsArgWith(2, null, "N")
      .onSecondCall()
      .callsArgWith(2, null, "D")
      .onThirdCall()
      .callsArgWith(2, null, "N");
    const fwWatchStub = sinon.stub(fs, "watch").callsFake((...args) => {
      const callback: (...args: any) => void = args[2];
      setTimeout(callback, 300);
      setTimeout(callback, 600);
    });
    const changeThemeStub = sinon.stub(changeThemeWrapper, "changeTheme");
    watchForThemeChange();
    setTimeout(() => {
      assert(changeThemeStub.calledThrice);
      assert(changeThemeStub.firstCall.calledWith(NIGHT_THEME));
      assert(changeThemeStub.secondCall.calledWith(DAY_THEME));
      assert(changeThemeStub.thirdCall.calledWith(NIGHT_THEME));
      fsReadFileStub.restore();
      fwWatchStub.restore();
      changeThemeStub.restore();
      done();
    }, 1000);
  });
});
