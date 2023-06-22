/* eslint-disable react-refresh/only-export-components */
import { App, View } from "framework7-react";
import { routes } from "~/routes";
import { useBrowserBack } from "~/hooks";

export default () => {
  useBrowserBack();
  return (
    <App theme="md" name="app" routes={routes}>
      <View
        browserHistory
        browserHistorySeparator=""
        url={location.pathname + location.search}
      />
    </App>
  );
};
