
const MAX_REQUESTS_PER_HOUR = 2;
const ONE_HOUR_IN_MS = 3.6e+6;

type CacheData = {
  requestCount: number;
  /**
  * Unix Epoch Timestamp
  * */
  firstRequestAt: number;
}

class RateLimitCache {
  /**
   * IP Address Based Caching.
   * Key is IP, Value is Requests Made This Hour and When Those Request Started
   * */
  private cache: Map<string, CacheData>;

  constructor() {
    this.cache = new Map();
  }

  requestAllowed(ip: string): boolean {
    const prevCacheData = this.cache.get(ip);

    if (!prevCacheData) {
      this.cache.set(ip, { requestCount: 1, firstRequestAt: Date.now() });
      return true;
    }

    if (Date.now() - prevCacheData.firstRequestAt > ONE_HOUR_IN_MS) {
      this.cache.set(ip, { requestCount: 1, firstRequestAt: Date.now() });
      return true;
    }

    if (prevCacheData.requestCount >= MAX_REQUESTS_PER_HOUR) {
      return false;
    }

    this.cache.set(
      ip,
      {
        firstRequestAt: prevCacheData.firstRequestAt,
        requestCount: prevCacheData.requestCount + 1
      }
    );
    return true;
  }
}

export default RateLimitCache;
