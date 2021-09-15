export const $id = function (id) {
  const element = document.getElementById(id);
  if (element) {
    return element;
  } else {
    console.log(`the id "${id}" not correct!`);
  }
};

export const $css = function (css) {
  const element = document.querySelector(css);
  if (element) {
    return element;
  } else {
    console.log(`the css selector "${css}" not correct!`);
  }
};

export const $query = function (elem, css) {
  if (!elem) {
    console.log(`the html element "${elem}" not found!`);
    return;
  } else {
    const element = elem.querySelector(css);
    if (element) {
      return element;
    } else {
      console.log(`the css selector "${css}" not correct!`);
    }
  }
};

export const $all = function (css) {
  const element = document.querySelector(css);
  if (element) {
    return element;
  } else {
    console.log(`the css selector "${css}" not correct!`);
  }
};
