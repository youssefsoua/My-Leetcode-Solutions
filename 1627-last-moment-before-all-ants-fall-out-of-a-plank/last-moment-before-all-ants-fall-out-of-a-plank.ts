function getLastMoment(n: number, left: number[], right: number[]): number {
  const MaxRightDistance = n - Math.min(...right);
  const MaxLeftDistance = Math.max(...left);
  return Math.max(MaxRightDistance, MaxLeftDistance);
};