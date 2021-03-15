/* 참고 -  */ 


//Promise 선언
var _deferred = function(param) {
  var dfd = $.Deferred();  // 1

  // 비동기 처리
  setTimeout(function() {
    // 2
    param ? dfd.resolve("resolved!") : dfd.reject(new Error("Error occurred!"));
  }, 2000);

  return dfd.promise();  // 3
};

//Promise 실행
_deferred(false)
  .done(function(data) {
    // resolve가 실행된 경우(성공), resolve 함수에 전달된 값이 data에 저장된다
    console.log(data);
  })
  .fail(function(error) {
    // reject가 실행된 경우(실패), reject 함수에 전달된 값이 error에 저장된다
    console.error(error);
  })
  .always(function() {
    console.log('always');
  });
