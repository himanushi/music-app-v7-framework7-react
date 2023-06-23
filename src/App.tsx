/* eslint-disable react-refresh/only-export-components */
import { App, View } from "framework7-react";
import { routes } from "~/routes";
import { useBrowserBack } from "~/hooks";

export default () => {
  useBrowserBack();

  return (
    <App
      dark
      theme="md"
      name="app"
      routes={routes}
      popup={{ closeOnEscape: true }}
      sheet={{ closeOnEscape: true }}
      popover={{ closeOnEscape: true }}
      actions={{ closeOnEscape: true }}
      panel={{ swipe: true }}
    >
      <View browserHistory browserHistorySeparator="" />
    </App>
  );
};
