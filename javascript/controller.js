import MainDataView from "./views/MainDataView";
import OverviewDataView from "./views/OverviewDataView";
import {overviewData, statsData} from "./model";

const overview = () => {
  MainDataView.render(statsData)
  OverviewDataView.render(overviewData)
}

const init = () => {
  overview()
}

init()