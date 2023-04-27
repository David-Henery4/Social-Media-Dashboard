import View from "./View";
import { downIcon, upIcon } from "../../assets";

class MainDataView extends View {
  _parentElement = document.querySelector(".main-stats");
  //
  _handleNegativeDiffFormat(numDiff) {
    return `${Math.abs(numDiff)} Today`;
  }
  _handlePositiveDiffFormat(numDiff) {
    return `${numDiff} Today`;
  }
  //
  _generateMarkup() {
    return this._data
      .map((stats) => {
        let value = false;
        stats?.changeDiff < 0 ? value = true : value = false
        return `<div class="overview-card">
        <div class="overview-card-border ${stats?.colorBorder}"></div>
          <div class="overview-card__top">
            <img src="${stats?.socialIcon}" alt="icon-facebook" />
            <p class="xtra-sml-text">${stats?.username}</p>
          </div>
          <div class="overview-card__middle">
            <h2 class="main-data-text">${stats?.mainStat}</h2>
            <p class="main-data-sub-text">${stats?.statType}</p>
          </div>
          <div class="overview-card__bottom">
              <img src="${value ? downIcon : upIcon}" alt="up-or-down-icon" />
              <p class="xtra-sml-text ${
                value ? "negative-text" : "positive-text"
              }">${
          stats?.changeDiff < 0
            ? this._handleNegativeDiffFormat(stats?.changeDiff)
            : this._handlePositiveDiffFormat(stats?.changeDiff)
        }</p>
          </div>
        </div>`;
      })
      .join("");
  }
}

export default new MainDataView();
