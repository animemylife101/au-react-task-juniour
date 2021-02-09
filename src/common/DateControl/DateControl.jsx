export const getDate = () => {
  let arr = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'ноября',
    'декабря',
  ];

  function getMonth(date) {
    let month = date.getMonth() + 1;
    return month < 10 ? '0' + month : '';
  }

  const month = arr[getMonth(new Date())[1] - 1];
  const day = String(new Date().getDate()).padStart(2, '0')[0] == 0 ? String(new Date().getDate()).padStart(2, '0')[1] : String(new Date().getDate()).padStart(2, '0');
  const year = (new Date()).getFullYear();
  const minutes = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

  return `последние изменения ${day} ${month} ${year} в ${minutes}`;
}