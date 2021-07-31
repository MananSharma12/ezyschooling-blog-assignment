<template>
    <b-card :title="post.title" tag="article" class="mx-auto mb-2" style="max-width: 80vw;" >
        <b-button href="#" variant="primary">
            <router-link :to="`/post?id=` + post.id">
                <span style="color:white">Open Post</span>
            </router-link>
        </b-button>
    </b-card>
</template>

<script>
export default {
    name: 'PostCard',
    props: {
        post: Object
    }
}
</script>

<style>

</style>