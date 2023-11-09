// Initialize the Lunr.js index
var idx = lunr(function () {
  this.ref('id');
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

// Lunr.js를 사용하여 검색 인덱스를 초기화합니다.
var idx = lunr(function () {
  this.field('title');
  this.field('content');
  // 여기에 추가 콘텐츠 필드를 인덱싱할 수 있습니다.
  // 사이트의 모든 페이지와 포스트에 대한 인덱싱 로직을 추가합니다.
});

// 검색 결과를 표시할 함수를 구현합니다.
function search(query) {
  return idx.search(query).map(function (result) {
    return idx.documentStore.getDoc(result.ref);
  });
}

// 검색 바 요소에 이벤트 리스너를 추가합니다.
document.querySelector('#search-input').addEventListener('input', function(e) {
  // 사용자 입력을 가져옵니다.
  var query = e.target.value;

  // 디바운싱을 적용합니다.
  clearTimeout(this.delay);
  this.delay = setTimeout(function () {
    var results = search(query);
    displayResults(results); // 결과를 표시하는 함수를 호출합니다.
  }, 300); // 디바운싱 지연 시간을 300ms로 설정합니다.
});

// 검색 결과를 사용자에게 보여주는 함수를 구현합니다.
function displayResults(results) {
  var searchResults = document.querySelector('#search-results');
  // 이전 검색 결과를 클리어합니다.
  searchResults.innerHTML = '';

  // 새 검색 결과를 추가합니다.
  results.forEach(function (result) {
    var li = document.createElement('li');
    li.textContent = result.title; // 검색 결과의 제목을 표시합니다.
    searchResults.appendChild(li);
  });
}
