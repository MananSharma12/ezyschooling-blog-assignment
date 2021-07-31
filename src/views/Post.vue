<template>
  <div>
    <b-card :title="postData.title" tag="article" style="max-width: 95vw;" class="mx-auto mb-2 mt-4" >
      <b-card-text>
        {{postData.body}}
      </b-card-text>

    </b-card>
    <h3 class="mt-1 ml-4">Comments:</h3>
    <div v-for="(comment, i) in comments" :key="i">
      <Comment :comment="comment" />
    </div>
  </div>
</template>

<script>
import Comment from '../components/Comment.vue'

export default {
  name: 'Post',
  data () {
    return {
      postData: [],
      comments: []
    }
  },
  components: {
    Comment
  },
  created () {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.query.id}`)
      .then(response => response.json())
        .then(data => this.postData = data)

    fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.query.id}/comments`)
      .then(response => response.json())
        .then(data => this.comments = data)
  }
}
</script>

<style>

</style>