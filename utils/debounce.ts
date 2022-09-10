export default function debounce(
  this: any,
  callback: (...a: any) => void,
  timeout = 300
) {
  let timer: NodeJS.Timer;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback.apply(this, args), timeout);
  };
}
