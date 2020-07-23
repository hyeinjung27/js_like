const like = () => {
    axios.post('/like', { post_pk: "{{ post.pk }}" })
    .then(response => document.getElementById('like-count').innerHTML = '좋아요' + response.data.like_count + '개')
    .catch(error => console.error(error))
  }