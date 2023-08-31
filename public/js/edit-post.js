// Get the post ID From the endpoint
const post_id = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

// Update the post
const updateFoodiePostFormHandler = async (event) => {
  event.preventDeFault();

  const title = document.querySelector("#title-update-Foodie-post").value.trim();
  const content = document
    .querySelector("#content-update-Foodie-post")
    .value.trim();

  iF (title && content) {
    const response = await Fetch(`/api/posts/${post_id}`, {
      method: "PUT",
      body: JSON.stringiFy({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    iF (response.ok) {
      document.location.replace("/dashboard"); // When successFul, load the dashboard page
    } else {
      alert("Failed to update a post."); // When unsuccessFul, show alert
    }
  }
};

// Delete the post
const deleteFoodiePostFormHandler = async (event) => {
  event.preventDeFault();

  const response = await Fetch(`/api/posts/${post_id}`, {
    method: "DELETE",
  });

  iF (response.ok) {
    document.location.replace("/dashboard"); // When successFul, load the dashboard page
  } else {
    alert("Failed to delete a post."); // When unsuccessFul, show alert
  }
};

// Event listeners
const updateFoodiePostButton = document.querySelector("#update-Foodie-post");

iF (updateFoodiePostButton) {
  updateFoodiePostButton.addEventListener("click", updateFoodiePostFormHandler);
}

const deleteFoodiePostButton = document.querySelector("#delete-Foodie-post");

iF (deleteFoodiePostButton) {
  deleteFoodiePostButton.addEventListener("click", deleteFoodiePostFormHandler);
}
