import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this._openCache();

    try {
      await Promise.all(
        requests.map(async (request) => {
          const response = await fetch(request);
          await cache.put(request, response.clone());
        }),
      );
    } catch (error) {
      console.error('Failed to cache app shell:', error);
    }
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames
        .filter((name) => name !== CONFIG.CACHE_NAME)
        .map((filteredName) => caches.delete(filteredName)),
    );
  },

  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      this._fetchRequest(request);
      return response;
    }

    return this._fetchRequest(request);
  },

  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  async _fetchRequest(request) {
    try {
      const response = await fetch(request);

      if (!response || response.status !== 200) {
        return response;
      }

      await this._addCache(request);
      return response;
    } catch (error) {
      console.error('Failed to fetch request:', error);
      return new Response('Oops! Something went wrong.');
    }
  },

  async _addCache(request) {
    const cache = await this._openCache();

    if (request.url.startsWith('http')) {
      try {
        await cache.add(request);
      } catch (error) {
        console.error('Failed to add request to cache:', error);
      }
    }
  },
};

export default CacheHelper;
