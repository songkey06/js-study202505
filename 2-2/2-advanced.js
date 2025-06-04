// 커뮤니티 게시판 게시글
let article1 = {
  title: '요새 재밌는 영화 추천좀...',
  content: '요즘에 재밌는 영화를 보고 싶은데 찾기가 어렵네요',
  writer: {
    name: '잔망루피',
    account: 'loopy1234',
    joinDate: '2020-11-30',
    grade: 'GOLD',
    emailVerify: true
  },
  viewCount: 14,
  likeCount: 3,
  dislikeCount: 30,
  regDate: '2025-06-02',
  hashTags: ['질문', '취미']
};

article1.title = '제목없음';
article1.hashTags.splice(1,0,'뻘글')
console.log(article1);
