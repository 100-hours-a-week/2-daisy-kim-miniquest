/*
📌 자바스크립트 코드가 웹 페이지에서 실행되는 과정

자바스크립트는 브라우저의 자바스크립트 엔진을 통해 실행됩니다.
이 과정은 다음 단계로 이루어집니다.

1️⃣ HTML 파싱
- 브라우저는 HTML을 읽고 DOM(Document Object Model)을 생성합니다.  
- HTML 내 `<script>` 태그를 만나면 자바스크립트 코드를 실행합니다.

2️⃣ 자바스크립트 코드 실행 (자바스크립트 엔진)  
- 자바스크립트 엔진(V8, SpiderMonkey 등)이 코드를 두 단계로 실행합니다.
     1. 해석(Parsing & Compilation)  
    - 코드 문법을 분석하고, 실행 가능한 형태로 변환합니다.
     2. 실행(Execution)  
    - 변수 선언, 함수 실행, 이벤트 처리 등을 수행합니다.

3️⃣ 메모리 할당 및 실행 컨텍스트 생성  
- 콜 스택(Call Stack): 코드 실행 순서를 관리합니다.  
- 힙 메모리(Heap Memory): 객체 및 변수 데이터를 저장합니다.

4️⃣ 비동기 작업 처리  
- 브라우저의 Web APIs (예: setTimeout, fetch)를 활용하여 비동기 작업을 실행합니다.  
- 이벤트 루프(Event Loop)가 완료된 작업을 콜백 큐에서 꺼내 실행합니다.

📌 자바스크립트 엔진의 역할  
- 자바스크립트 코드를 해석하고 실행합니다.  
- 최신 엔진(V8, SpiderMonkey 등)은 JIT(Jus-I-Time) 컴파일러를 사용하여 코드 실행 속도를 최적화합니다.

📌 결론  
- 자바스크립트는 HTML과 CSS와 함께 동작하며,  
- 자바스크립트 엔진이 코드 실행을 담당하고,  
- 브라우저의 Web APIs와 협력하여 동적인 웹 페이지를 생성합니다.
*/
