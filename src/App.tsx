/* eslint-disable react-refresh/only-export-components */
import { App, View } from "framework7-react";
import { routes } from "~/routes";
import { useBrowserBack } from "~/hooks";

export default () => {
  useBrowserBack();

  return (
    <App dark theme="ios" name="app" routes={routes}>
      <View browserHistory browserHistorySeparator="" />
    </App>
  );
};
