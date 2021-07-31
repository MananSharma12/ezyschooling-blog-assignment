<template>
    <div>
        <div v-for="(post, i) in posts" :key="i">
            <PostCard :post="post" />
        </div>
    </div>
</template>

<script>
import PostCard from '../components/PostCard.vue'

export default {
    name: 'Home',
    data() {
        return {
            posts: []
        }
    },
    components: {
        PostCard
    },
    created() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
                .then(data => this.posts = data)
    },
}
</script>

<style>

</style>