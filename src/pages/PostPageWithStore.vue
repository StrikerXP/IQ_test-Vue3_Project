<!-- @format -->

<template>
    <div>
        <h1>Posts page</h1>
        <my-input
            v-focus
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
            placeholder="Search"
        />
        <div class="main__buttons">
            <my-button @click="showDialogue">Create post</my-button>
            <my-select
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
                :options="sortOptions"
            />
        </div>
        <my-dialogue v-model:show="dialogueVisible">
            <post-form @create="createPost" />
        </my-dialogue>
        <post-list
            v-if="!isPostsLoading"
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
        >
        </post-list>
        <div v-else><span style="font-size: 30px">Loading...</span></div>
        <div v-intersection="loadMorePosts"></div>
        <div v-if="isLoadMore && !isPostsLoading"><span style="font-size: 30px">More posts is loading...</span></div>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
    components: {
        PostForm,
        PostList,
    },
    // section data
    data() {
        return {
            dialogueVisible: false,
        };
    },
    // section methods
    methods: {
        ...mapMutations({
            setPage: "post/setPage",
            setSearchQuery: "post/setSearchQuery",
            setSelectedSort: "post/setSelectedSort",
        }),
        ...mapActions({
            loadMorePosts: "post/loadMorePosts",
            fetchPosts: "post/fetchPosts",
        }),
        createPost(post) {
            this.posts.push(post);
            this.dialogueVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        showDialogue() {
            this.dialogueVisible = true;
        },
        // changePage(pageNumber) {
        //     this.page = pageNumber;
        //     this.fetchPosts();
        // },
    },
    // section mounted
    mounted() {
        this.fetchPosts();
    },
    // section computed
    computed: {
        ...mapState({
            posts: state => state.post.posts,
            isPostsLoading: state => state.post.isPostsLoading,
            isLoadMore: state => state.post.isLoadMore,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
            searchQuery: state => state.post.searchQuery,
            selectedSort: state => state.post.selectedSort,
            sortOptions: state => state.post.sortOptions,
        }),
        ...mapGetters({
            sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
        }),
    },
    // section watch
    watch: {
        // page() {
        //     this.fetchPosts();
        // }
    },
};
</script>

<style>
.main__buttons {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}
.page-wrapper {
    display: grid;
    justify-content: flex-start;
    grid-template-columns: repeat(auto-fill, 2.2em);
}
.page-wrapper__select {
    border: 0.12em solid #4d6d38;
    text-align: center;
    margin-top: 10px;
    margin-right: -0.5px;
    margin-left: -0.5px;
    padding: 0.2em 0.5em;
    cursor: pointer;
}
.page-wrapper__current {
    background: rgba(69, 178, 39, 0.93);
}
</style>
