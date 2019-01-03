import { PanelCtrl } from 'app/plugins/sdk';
import _ from 'lodash';

const panelDefaults = {
  tvMode : {
    pluginPanel: false,
    dashboardTitle: false,
    actionButtons: false,
    cycleViewButton: false,
    datePicker: true,
    timeRangeZoomButton: true,
    refreshButton: true
  },
  kioskMode: {
    pluginPanel: false,
    dashboardTitle: false,
    actionButtons: false,
    cycleViewButton: false,
    datePicker: true,
    timeRangeZoomButton: true,
    refreshButton: true
  }
}
export class CustomizeHeaderCtrl extends PanelCtrl {
  static templateUrl = 'module.html';

  constructor($scope, $injector, contextSrv, datasourceSrv, variableSrv) {
    super($scope, $injector);
    _.defaults(this.panel, panelDefaults);
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
  }

  updatePanel() {
    this.render();
  }

  onInitEditMode() {
    this.addEditorTab('Customize Header', 'public/plugins/grafana-navigation-bar-options/partials/editor.html', 2);
  }
}