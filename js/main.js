const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max < 0 || max <= min) {
    return 'Ошибка! Значение max не может быть меньшим или быть равным по отношению к значению min';
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
} // Функция частично скопирована с https://developer.mozilla.org/



const getRandomFloat = (min, max, shot) => {
  if (min < 0 || max < 0 || max <= min) {
    return 'Ошибка! Значение max не может быть меньшим или быть равным по отношению к значению min';
  } else {
    return (Math.random() * (max - min) + min).toFixed(shot);
  }
}

