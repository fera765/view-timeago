import React, { useState, CSSProperties } from 'react';

import locales, { ILanguages } from './translate';
import compare from './utils';

import useInterval from './hooks';

interface ITimeAgo {
  /**
   * time: only accepts date type.
   */
  time: Date | string;
  /**
   * interval: set the number of seconds for the next update, only accepts number type.
   */
  interval?: number;
  style?: CSSProperties;
  /**
   * language: set the language to be used, some language pt | en.
   */
  language?: ILanguages;
}

const TimeAgo = ({
  time,
  interval = 60000,
  language = 'en-US',
  style,
}: ITimeAgo) => {
  const [update, setUpdate] = useState<number>(0);

  const compareLLanguage = compare(language, locales) as ILanguages;
  const translate = locales[compareLLanguage];

  function convertDateUTC(date: Date) {
    const newDate = new Date(
      date.getTime() + date.getTimezoneOffset() * 60 * 1000,
    );

    const offset = date.getTimezoneOffset() / 60;
    const hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;
  }

  function convertDateToTimeAgo(stringDate: Date) {
    if (typeof stringDate !== 'object') {
      stringDate = new Date(stringDate);
    }

    const sec = Math.floor((new Date().getTime() - Number(stringDate)) / 1000);

    if (sec < 60) return translate.now;
    const min = sec / 60;
    if (min < 60)
      return `${parseInt(String(min), 10)} ${
        parseInt(String(min), 10) > 1
          ? `${translate.minute}s`
          : translate.minute
      } ${translate.ago}`;
    const h = min / 60;
    if (h < 24)
      return `${parseInt(String(h), 10)} ${
        parseInt(String(h), 10) > 1 ? `${translate.hour}s` : translate.hour
      } ${translate.ago}`;
    const d = h / 24;
    if (d < 30)
      return `${parseInt(String(d), 10)} ${
        parseInt(String(d), 10) > 1 ? `${translate.day}s` : translate.day
      } ${translate.ago}`;
    const m = d / 30;
    if (m < 12)
      return `${parseInt(String(m), 10)} ${
        parseInt(String(m), 10) > 1 ? `${translate.month}s` : translate.month
      } ${translate.ago}`;
    const y = m / 12;
    return `${parseInt(String(y), 10)} ${
      parseInt(String(y), 10) > 1 ? `${translate.year}s` : translate.year
    } ${translate.ago}`;
  }

  const date = convertDateUTC(new Date(time));

  useInterval(() => {
    setUpdate(update + 1);
  }, interval);

  return <div style={style}>{convertDateToTimeAgo(date)}</div>;
};

export default React.memo(TimeAgo);
