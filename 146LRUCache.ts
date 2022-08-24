/** middle 146. LRU 缓存 */
class LRUCache {
  private capacity: number = 0;
  /**
   * 其实可以直接使用 Map 数据类型，使用 map.set 和 map.get
   * 需要看一下 Map 实现的原理，是不是也是双向链表
   */
  private map: Record<number, number> = {};
  private keyQuene: number[] = [];

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get(key: number): number {
    if (!this.keyQuene.includes(key)) {
      return -1;
    }
    this.changePriority(key);
    return this.map[key];
  }

  put(key: number, value: number): void {
    this.map[key] = value;
    this.changePriority(key);
  }

  private changePriority(key: number): void {
    const index = this.keyQuene.findIndex((item) => item === key);
    // 之前存在，修改
    if (index !== -1) {
      this.keyQuene.splice(index, 1);
      this.keyQuene.unshift(key);
      return;
    }
    // 插入，判断是否超过最大存储值
    // 未超过直接插入
    if (this.keyQuene.length < this.capacity) {
      this.keyQuene.unshift(key);
      return;
    }
    // 超过则逐出最后一个
    const dropKey = this.keyQuene.pop();
    this.keyQuene.unshift(key);
    this.map[dropKey] = undefined;
    return;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
