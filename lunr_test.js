// Initialize the Lunr.js index
var idx = lunr(function () {
  this.ref('id'); // 이 부분을 다시 추가해야 합니다.
  this.field('title');
  this.field('content');

  // Add documents to the index
  this.add({
    'id': 1,
    'title': 'The History of Lunr.js',
    'content': 'Lunr.js has been used since 2013 to provide full-text search in the browser.'
  });

  this.add({
    'id': 2,
    'title': 'Lunr.js Features',
    'content': 'Lunr.js offers features such as tokenization, stemming, and index serialization.'
  });

  this.add({
    'id': 3,
    'title': 'Lunr.js vs Solr',
    'content': 'Unlike Solr, Lunr.js does not require a dedicated backend server.'
  });

  this.add({
    'id': 4,
    'title': 'Integrating Lunr.js with React',
    'content': 'Integrate Lunr.js in a React application to add search functionality without a server.'
  });

  this.add({
    'id': 5,
    'title': 'Performance of Lunr.js',
    'content': 'Lunr.js is lightweight and provides fast search capabilities for small to medium-sized datasets.'
  });

  this.add({
    'id': 6,
    'title': 'Advanced Searching with Lunr.js',
    'content': 'Lunr.js supports field-based queries and wildcard searches.'
  });

  this.add({
    'id': 7,
    'title': 'Customizing Lunr.js',
    'content': 'You can customize the tokenizer, stemmer, and search pipeline in Lunr.js.'
  });

  this.add({
    'id': 8,
    'title': 'Multilingual Support in Lunr.js',
    'content': 'Lunr.js can be extended to support multiple languages for search.'
  });

  this.add({
    'id': 9,
    'title': 'Lunr.js in Static Sites',
    'content': 'Static sites benefit from Lunr.js as it doesn’t require server-side code for search.'
  });

  this.add({
    'id': 10,
    'title': 'Building a Search Interface with Lunr.js',
    'content': 'Create a user-friendly search interface using Lunr.js to enhance site navigation.'
  });

  // Add more documents as needed
});

// 검색 함수를 구현합니다.
function search(query) {
  return idx.search(query).map(function (result) {
    return idx.documentStore.getDoc(result.ref);
  });
}

// 검색 결과를 표시할 함수를 구현합니다.
function displayResults(results) {
  var searchResults = document.querySelector('#search-results');
  searchResults.innerHTML = ''; // 이전 검색 결과를 클리어합니다.

  results.forEach(function (result) {
    var li = document.createElement('li');
    li.textContent = result.title; // 검색 결과의 제목을 표시합니다.
    searchResults.appendChild(li);
  });
}

// 검색 바 요소에 'keypress' 이벤트 리스너를 추가합니다.
document.querySelector('#search-input').addEventListener('keypress', function(e) {
  if (e.keyCode === 13) { // 엔터 키 코드는 13입니다.
    e.preventDefault(); // 폼 제출을 방지합니다.
    var query = this.value; // 사용자 입력을 가져옵니다.
    console.log(query);
    var results = search(query); // 검색 함수를 호출합니다.
    console.log(results);
    displayResults(results); // 결과를 표시합니다.
  }
});

