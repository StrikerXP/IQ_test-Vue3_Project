/** @format */
import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [],
        isPostsLoading: false,
        isLoadMore: false,
        page: 1,
        limit: 10,
        totalPages: 0,
        searchQuery: "",
        selectedSort: "",
        sortOptions: [
            {
                value: "title",
                name: "By name",
            },
            {
                value: "body",
                name: "By description",
            },
            {
                value: "id",
                name: "By ID",
            },
        ],
    }),
    getters: {
        sortedPosts(state) {
            const sortBy = state.selectedSort;
            const posts = state.posts.slice();
            if (sortBy === "id") {
                return posts.sort((a, b) => a[sortBy] - b[sortBy]);
            } else {
                return posts.sort((a, b) => a[sortBy]?.localeCompare(b[sortBy]));
            }
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post =>
                post.title.toLowerCase().includes(state.searchQuery.toLowerCase()),
            );
        },
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, bool) {
            state.isPostsLoading = bool;
        },
        setIsLoadMore(state, bool) {
            state.isLoadMore = bool;
        },
        setPage(state, page) {
            state.page = page;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
    },
    actions: {
        async fetchPosts({state, commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    },
                });
                commit('setTotalPages', Math.ceil(response.headers["x-total-count"] / state.limit));
                commit('setPosts', response.data);
            } catch (e) {
                alert(`Error ${e}`);
            } finally {
                commit('setLoading', false);
            }
        },
        async loadMorePosts({state, commit}) {
            try {
                commit('setPage', state.page += 1);
                commit('setIsLoadMore', true);
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    },
                });
                commit('setTotalPages', Math.ceil(response.headers["x-total-count"] / state.limit));
                commit('setPosts', [...state.posts, ...response.data]);
            } catch (e) {
                alert(`Error ${e}`);
            } finally {
                commit('setIsLoadMore', false);
            }
        },
    },
    namespaced: true
};
