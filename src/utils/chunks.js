import fs from 'fs';

let chunksStats = [];

export const getChunks = () => chunksStats;

const waitWatchFile = ({ path, onChange, timeout = 60000 } = {}) => {
  const watch = (loaded, timeleft) => new Promise((resolve, reject) => {
    if (timeleft < 0) {
      loaded = true;
      return reject(new Error(`waitFile: timeout (${timeout}ms): ${path}`));
    }

    // Simple first read for production
    if (!loaded) {
      fs.access(path, fs.constants.R_OK, err => {
        if (!err && !loaded) {
          fs.readFile(path, 'utf8', (err2, data) => {
            if (err2) return reject(err2);
            loaded = true;
            return resolve(data);
          });
        }
      });
    }

    // eslint-disable-next-line no-undef
    if (!__DEVELOPMENT__) {
      return true;
    }

    try {
      const watcher = fs.watch(path, 'utf8', eventType => {
        if (eventType !== 'change') return;
        fs.readFile(path, 'utf8', (err2, data) => {
          if (err2) return onChange(err2);
          loaded = true;
          return onChange(null, data);
        });
      });

      setTimeout(() => {
        watcher.close();
        if (!loaded) {
          loaded = true;
          return reject(new Error(`waitFile: timeout (${timeout}ms): ${path}`));
        }
        return false;
      }, timeleft);
    } catch (err) {
      if (err.code === 'ENOENT') {
        return setTimeout(() => resolve(watch(loaded, timeleft - 100)), 100);
      }
      loaded = true;
      return reject(err);
    }

    return null;
  });

  return watch(false, timeout);
};

const parse = json => {
  try {
    return JSON.parse(json);
  } catch (e) {
    return chunksStats;
  }
};

export const waitChunks = async (chunksPath, timeout) => {
  const chunksStatsJson = await waitWatchFile({
    path: chunksPath,
    onChange: (err, stats) => {
      if (err) {
        throw new Error('Unable to load chunks');
      }
      chunksStats = parse(stats);
    },
    timeout,
  });

  chunksStats = parse(chunksStatsJson);

  return chunksStats;
};
