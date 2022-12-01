type Variant = 'localStorage' | 'sessionStorage';
type LocalStorage = typeof window.localStorage;
type SessionStorage = typeof window.sessionStorage;

/**
 * storage api를 감싼 wrapper입니다.
 * 자동으로 저장시 JSON.parse, JSON.stringify되므로
 * 추가적인 설정이 필요 없습니다.
 */
class Storage {
  private readonly storage: LocalStorage | SessionStorage;

  constructor(variant: Variant = 'localStorage') {
    this.storage =
      variant === 'localStorage' ? window.localStorage : window.sessionStorage;
  }

  getItem<T>(key: string, initialValue: T) {
    try {
      const value = JSON.parse(this.storage.getItem(key) || '') as T;

      if (!value) {
        return initialValue;
      }

      return value;
    } catch {
      return initialValue;
    }
  }

  setItem<T>(key: string, value: T) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
  }
}

export default Storage;
