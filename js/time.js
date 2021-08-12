const getTime = () => {
  /* eslint-disable no-undef */
  const { DateTime } = luxon;
  const dt = DateTime.now();
  /* eslint-disable no-undef */

  const getOrdinal = (param) => {
    param = Number(param).toString();
    const splitPop = param.split('').pop();
    const splitShift = param.split('').shift();
    const len = param.length;
    if (splitPop === '1' && len === 1) {
      return 'st';
    } if (
      len === 2
      && splitPop === '1'
      && (splitShift === '2' || splitShift === '3')
    ) {
      return 'st';
    } if (splitPop === '2' && len === 1) {
      return 'nd';
    } if (len === 2 && splitPop === '2' && splitShift === '2') {
      return 'nd';
    } if (splitPop === '3' && len === 1) {
      return 'rd';
    } if (len === 2 && splitPop === '3' && splitShift === '2') {
      return 'rd';
    }

    return 'th';
  };

  const amPm = (hr) => {
    let pmAm = 'pm';
    if (hr < 12) {
      pmAm = 'am';
    }
    return pmAm;
  };

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const month = `${months[dt.month - 1]} `;
  const date = `${dt.day + getOrdinal(dt.date)} `;
  const year = `${dt.year}, `;
  let hr = dt.hour;
  hr = hr > 11 ? hr - 12 : hr;
  let sec = dt.second;
  let min = dt.minute;
  if (min.toString().length === 1) {
    min = `0${min}`;
  }
  if (hr.toString().length === 1) {
    hr = `0${hr}`;
  }
  if (sec.toString().length === 1) {
    sec = `0${sec}`;
  }
  const time = `${hr}:${min}:${sec} `;
  const pmAm = amPm(dt.hour);

  return (month + date + year + time + pmAm);
};
setInterval(() => {
  document.querySelector('.time-date').textContent = getTime();
}, 1000);