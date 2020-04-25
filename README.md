# java-racingcar

https://taenykim.github.io/java-racingCar-1/

```
java-racingCar-1
├── src
│   ├── components
│   │   ├── Processes.tsx (실행과정만 출력)
│   │   ├── Result.tsx (실행결과만 출력)
│   ├── containers
│   │   ├── App.test.tsx
│   │   ├── App.tsx (메인 컨테이너)
│   ├── modules
│   │   ├── Car.test.ts
│   │   ├── Car.ts (Car 객체)
│   │   ├── formValidator.test.ts
│   │   ├── formValidator.ts (사용자 인풋 검증)
│   │   ├── racingCar.test.tsx
│   │   ├── racingCar.tsx (자동차 관련 함수)
```

> MVC 패턴 (백엔드)

![](./src/images/mvc.png)

- 액션이 일어나는 곳은 컨트롤러. 인풋뷰는 액션이며 프론트역할. (데이터가 들어오는 것은 컨트롤러의 역할이 아니라 컨트롤러에게 전해지는 액션일뿐?)

- 양방향

> MVVM 패턴 (프론트)

![](./src/images/mvvm.png)

- 액션이 일어나는 곳은 뷰. 버튼,form,input 등등으로 액션을 실행함. 액션에 따라 뷰모델에 의해 뷰가 변경됨.

- 양방향

> FLUX 패턴

![](./src/images/flux.png)

- 액션이 일어나는 곳은 뷰. 액션이 실행되면 뷰모델을 통해 뷰를 '변경'하는 MVVM과 다르게 뷰를 갈아엎음.(덮어쓰기)

- 단방향

