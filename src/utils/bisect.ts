/**
 * @description
 * 정렬되어 있는 배열에서 target보다 작거나 같은 가장 왼쪽의 인덱스를 반환합니다.
 * ANCHOR - 현재는 배열의 요소가 숫자인 경우에 대해서만 동작을 보장합니다.
 * @param arr 정렬되어 있는 배열(number)
 * @param target 기준이 되는 요소(number)
 * @param lo 배열의 낮은 범위, 기본 값은 0
 * @param hi 배열의 높은 범위, 기본 값은 배열의 길이
 * @returns target 요소보다 작거나 같은 가장 작은 인덱스
 */
export function bisectLeft<T>(arr: T[], target: T, lo = 0, hi?: number) {
  let start = lo;
  let end = hi || arr.length;

  if (start < 0) {
    throw new Error(`'lo' can't be lower than 0.`);
  }

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

/**
 *  @description
 * 정렬되어 있는 배열에서 target보다 작거나 같은 가장 왼쪽의 인덱스를 반환합니다.
 * ANCHOR - 현재는 배열의 요소가 숫자인 경우에 대해서만 동작을 보장합니다.
 * @param arr 정렬되어 있는 배열(number)
 * @param target 기준이 되는 요소(number)
 * @param lo 배열의 낮은 범위, 기본 값은 0
 * @param hi 배열의 높은 범위, 기본 값은 배열의 길이
 * @returns target 요소보다 큰 인덱스 + 1
 */
export function bisectRight<T>(arr: T[], target: T, lo = 0, hi?: number) {
  let start = lo;
  let end = hi || arr.length;

  if (start < 0) {
    throw new Error(`'lo' can't be lower than 0.`);
  }

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start;
}

/**
 * 이분 탐색으로 위치를 찾고, 같은 것이 있다면 가장 왼쪽에 타겟을 삽입합니다.
 * ANCHOR - 현재는 배열의 요소가 숫자인 경우에 대해서만 동작을 보장합니다.
 * @param arr 정렬되어 있는 배열(number)
 * @param target 기준이 되는 요소(number)
 * @param lo 배열의 낮은 범위, 기본 값은 0
 * @param hi 배열의 높은 범위, 기본 값은 배열의 길이
 */
export function insortLeft<T>(arr: T[], target: T, lo = 0, hi?: number) {
  const start = bisectLeft(arr, target, lo, hi);
  arr.splice(start, 0, target);
}

/**
 * 이분 탐색으로 위치를 찾고, 같은 것이 있다면 가장 오른쪽에 타겟을 삽입합니다.
 * ANCHOR - 현재는 배열의 요소가 숫자인 경우에 대해서만 동작을 보장합니다.
 * @param arr 정렬되어 있는 배열(number)
 * @param target 기준이 되는 요소(number)
 * @param lo 배열의 낮은 범위, 기본 값은 0
 * @param hi 배열의 높은 범위, 기본 값은 배열의 길이
 */
export function insortRight<T>(arr: T[], target: T, lo = 0, hi?: number) {
  const start = bisectRight(arr, target, lo, hi);
  arr.splice(start, 0, target);
}
