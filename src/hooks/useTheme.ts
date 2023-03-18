import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../provider/themeSlice";
import colors from "../config/colors";

export default () => {
  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;
  return {
    backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
    color: theme ? colors.black : colors.darkTxt,
    theme,
    handleSwitchTheme,
  };
};
