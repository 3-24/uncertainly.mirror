[카잉 달력(BOJ)](https://www.acmicpc.net/problem/6064)

x에다가 M을 계속 더해가는 식으로 구성했는데 어디선가 자꾸 틀리네요. 다른 풀이 찾아서 따라써보고 이건 일단 포기했습니다. 반례 테스트 케이스를 준다면 좋을텐데 ㅜㅜㅜ

여담으로, 극한의 효율성을 추구한다면 Extended Euclid Algorithm을 찾아써도 좋을 것 같아요. 최대공약수를 구하는 과정에서 문제에서 요구하는 값인 Bezout's coefficient를 자연스럽게 얻을 수 있기 때문입니다.

```c++
#include <stdio.h>

int gcd(int a, int b){
  if (b == 0){
    return a;
  }
  else{
    int r = a % b;
    return gcd(b,r);
  }
}

long long int lcm(int a, int b){
  return a*b/gcd(a,b);
}

long long int year(int a, int b, int x, int y){
  long long int L = lcm(a,b);
  for (int i=0;i<=L/x;i++){
    long long int z = x+a*i;
    if ((z-y)%b == 0 && z-y >= 0){
      if (z <= L){
        return z;
      }
    }
  }
  return -1;
}

int main(){
  int T;
  scanf("%d",&T);
  int M,N,x,y;
  while (T--){
    scanf("%d %d %d %d",&M,&N,&x,&y);
    printf("%lld\n",year(M,N,x,y));
  }
  return 0;
}

```