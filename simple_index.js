const lunr = require('lunr');

var documents = [{
  "name": "Lunr",
  "text": "Like Solr, but much smaller, and not as bright."
}, {
  "name": "React",
  "text": "A JavaScript library for building user interfaces."
}, {
  "name": "Lodash",
  "text": "A modern JavaScript utility library delivering modularity, performance & extras."
}]

var idx = lunr(function () {
  this.ref('name')
  this.field('text')

  documents.forEach(function (doc) {
    this.add(doc)
  }, this)
})
//- `var idx = lunr(function () { ... })`: Lunr.js를 사용하여 검색 색인을 생성하고 `idx` 변수에 저장.
//- `this.ref('name')`: 색인에서 각 문서를 고유하게 식별할 필드를 'name'으로 설정.
//- `this.field('text')`: 'text' 필드를 검색 가능하게 색인에 추가.
//- `documents.forEach(...)`: 'documents' 배열의 모든 문서를 순회하면서 색인에 추가.
//- `this.add(doc)`: 반복문 안에서 각 문서를 색인에 추가하는 함수 호출.
//

// 인덱스를 사용하여 검색을 실행
var result = idx.search("JavaScript");
console.log(result);
