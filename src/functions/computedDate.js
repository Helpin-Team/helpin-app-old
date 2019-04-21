import moment from 'moment/min/moment-with-locales';

const computedDate = (timestamp) => {
  moment.locale('pt');

  return moment(timestamp).format('ll');
};

export default computedDate;
