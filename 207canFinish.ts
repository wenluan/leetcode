/** middle 207. 课程表 */
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // 拓扑排序

  // 1. 建立入度数组和邻接表
  const inDegree: number[] = new Array(numCourses).fill(0);
  const nearMap: Record<number, number[]> = {};
  // 遍历依赖数组，计算每个节点的入度
  for (let i = 0; i < prerequisites.length; i++) {
    const course = prerequisites[i][1];
    const dependenceCourse = prerequisites[i][0];

    inDegree[dependenceCourse]++;
    if (nearMap[course]) {
      nearMap[course].push(dependenceCourse);
    } else {
      nearMap[course] = [dependenceCourse];
    }
  }

  // 2. 建立队列，存放入度为 0 的节点
  const quene = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      quene.push(i);
    }
  }

  // 3. 遍历队列，直到没有入度为 0 的节点（没有不需要依赖就可以上的课程）
  while (quene.length) {
    const course = quene.shift();
    const depenCourse = nearMap[course];
    depenCourse?.forEach((item) => {
      inDegree[item]--;
      if (inDegree[item] === 0) {
        quene.push(item);
      }
    });
  }

  // 4. 判断是否还有课程有依赖
  let result = true;
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] !== 0) {
      result = false;
      break;
    }
  }
  return result;
}
