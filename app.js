const counters = [...document.querySelectorAll('.number')];
const speed = 500;
counters.forEach(counter => {
  const updateCount = () => {
    const value = parseInt(counter.dataset.value);
    const count = parseInt(counter.innerText);
    const increment = Math.ceil(value / speed);

    if (count < value) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = value;
    }
  };
  updateCount();
});