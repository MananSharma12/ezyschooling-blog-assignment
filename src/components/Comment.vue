<template>
  <b-list-group style="max-width: 75vw;" class="mx-auto">      
      <router-link :to="`/user?postId=${comment.postId}&id=${comment.id}`" style="color: grey; text-decoration: none;">
        <b-list-group-item class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ comment.name }}</h5>
            <small>{{ comment.email }}</small>
          </div>

          <p class="mb-1">
            {{ comment.body }}
          </p>

        </b-list-group-item>
      </router-link>
    </b-list-group>
</template>

<script>
export default {
    name: 'Comment',
    props: {
      comment: Object
    }
}
</script>

<style>

</style>