import clsx from 'clsx';

const bind =
  (styles) =>
  (...args) =>
    clsx(
      ...args.map((arg) => {
        if (typeof arg === 'string') {
          return styles[arg];
        } else if (typeof arg === 'object') {
          return Object.keys(arg).reduce((acc, key) => {
            acc[styles[key]] = arg[key];
            return acc;
          }, {});
        }
        return arg;
      }),
    );

export default bind;
