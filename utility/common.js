import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import "dayjs/locale/vi";
import {
  grey,
  pink,
  green,
  red,
  amber,
  purple,
  indigo,
  blue,
  teal,
  deepOrange,
  lightBlue,
  orange,
  yellow,
  cyan,
} from "@mui/material/colors";
import lightTheme from "styles/theme/lightTheme";

// ----- VN date config -----
dayjs.extend(updateLocale);
dayjs.updateLocale("vi", {
  relativeTime: {
    future: "%s tới",
    past: "%s trước",
    s: "vài giây",
    ss: "vài giây",
    m: "1 phút",
    mm: "%d phút",
    h: "1 giờ",
    hh: "%d giờ",
    d: "1 ngày",
    dd: "%d ngày",
    M: "1 tháng",
    MM: "%d tháng",
    y: "1 năm",
    yy: "%d năm",
  },
});

const thresholds = [
  { l: "s", r: 1 },
  { l: "ss", r: 59, d: "second" },
  { l: "m", r: 1 },
  { l: "mm", r: 59, d: "minute" },
  { l: "h", r: 1 },
  { l: "hh", r: 23, d: "hour" },
  { l: "d", r: 1 },
  { l: "dd", r: 29, d: "day" },
  { l: "M", r: 1 },
  { l: "MM", r: 11, d: "month" },
  { l: "y" },
  { l: "yy", d: "year" },
];
const config = {
  thresholds: thresholds,
};

dayjs.locale("vi");
dayjs.extend(relativeTime, config);

export function viewsFormat(views) {
  const THOUSAND = 1000;
  const MILLION = 1000000;

  if (views >= THOUSAND && views < MILLION) {
    return parseFloat(views / THOUSAND).toFixed(1) + "K";
  } else if (views >= MILLION) {
    return parseFloat(views / MILLION).toFixed(1) + "M";
  } else {
    return views;
  }
}

export function timesFromNow(dateString) {
  const date = new Date(dateString);
  return dayjs(date).fromNow();
}

export function rankingColor(rank) {
  switch (rank) {
    case 1:
      return red[500];
    case 2:
      return orange[700];
    case 3:
      return green["A700"];
    default:
      return lightTheme.palette.form.main;
  }
}
