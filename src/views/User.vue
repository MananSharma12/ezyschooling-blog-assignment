<template>
  <div>
      <b-card :title="`Email: ${userData.email}`" style="max-width: 70vw;" class="mx-auto mt-2" >
            <b-card-text>
                Name: {{userData.name}}
            </b-card-text>
        </b-card>
  </div>
</template>

<script>
export default {
    name: 'User',
    data () {
        return {
            commentData: [],
        }
    },
    created() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.query.postId}/comments`)
            .then(response => response.json())
                .then(data => this.commentData = data)
    },
    computed: {
        userData() {
            return this.commentData.find(comment => comment.id == this.$route.query.id)
        }
    }
}
</script>

<style>

</style>