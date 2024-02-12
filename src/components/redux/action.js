function addCart(post) {
    return {
        type: "ADD_CART",
        payload: { test: post.data }
    }
}

export { addCart }