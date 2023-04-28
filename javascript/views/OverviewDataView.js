import View from "./View.js";
import { downIcon, upIcon } from "../../assets";

class OverviewDataView extends View {
  _parentElement = document.querySelector(".stats-cards-container");
  //
  _handleNegativePercentageFormat(percent) {
    return `${Math.abs(percent)}%`
  }
  _handlePositivePercentageFormat(percent) {
    return `${percent}%`
  }
  //
  _generateMarkup() {
    return this._data
      .map((stats) => {
        let value = false;
        stats?.percentage < 0 ? (value = true) : (value = false);
        return `<div class="stats-card">
            <div class="stats-card__left">
              <h4 class="sml-text">${stats?.statType}</h4>
              <p class="secondary-data-text">${stats?.mainStat}</p>
            </div>
            <div class="stats-card__right">
              <img src="${stats?.socialIcon}" alt="icon-facebook" />
              <div class="stats-card-percentage">
                <img src="${value ? downIcon : upIcon}" alt="up-or-down-icon" />
                <p class="xtra-sml-text ${
                  value ? "negative-text" : "positive-text"
                }">${
          stats?.percentage < 0
            ? this._handleNegativePercentageFormat(stats?.percentage)
            : this._handlePositivePercentageFormat(stats?.percentage)
        }</p>
              </div>
            </div>
          </div>`;
      })
      .join("");
  }
}

export default new OverviewDataView();
