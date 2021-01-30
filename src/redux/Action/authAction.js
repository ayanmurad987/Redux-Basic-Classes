const updateUser = (user) => {
    return {
        type: "UPDATE_DATA",
        user
    }
  }

const deleteUser = () => {
    return {
        type: 'REMOVE_DATA'
    }
}

export {
    updateUser,
    deleteUser
}