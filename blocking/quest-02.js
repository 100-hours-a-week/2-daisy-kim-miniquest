// 블로킹 논블로킹, 동기 비동기 미니퀘스트 2번
console.log("Start");

setTimeout(() => {
  console.log("Async Operation Complete");
}, 1000);

console.log("End");

/*
✅ 실행 결과
Start
End
(1초 후) Async Operation Complete

💬 결과 설명
1.	console.log('Start')
    동기 코드로 즉시 실행 → 'Start'가 출력됨
2.	setTimeout(..., 1000)
	비동기 함수 → 실행을 예약하지만 즉시 실행되지 않음
	1초 후 실행될 콜백을 Web APIs 영역에 등록한 후 바로 다음 코드로 넘어감
3.	console.log('End')
	setTimeout 이후 코드로 즉시 실행 → 'End'가 먼저 출력됨
4.	(1초 후) setTimeout 콜백 실행
	1초가 지나고 나서 이벤트 루프가 콜백을 실행 → 'Async Operation Complete'가 출력됨
*/
