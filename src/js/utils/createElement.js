const $ = document;

export default function createElement(tag, innerText, ...classNames) {
  const elem = $.createElement(tag);
  if (classNames.length > 0) {
    elem.classList.add(classNames);
  }
  elem.innerHTML = innerText;
  return elem;
}
