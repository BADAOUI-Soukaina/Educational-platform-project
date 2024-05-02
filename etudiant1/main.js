const userIcon = document.querySelector('.user-icon');
const userList = document.getElementById('user-list');

userIcon.addEventListener('mouseover', () => {
  userList.style.display = 'block';
});

userIcon.addEventListener('mouseout', () => {
  // Check if the mouse is still hovering over the list or its child elements
  if (!userList.contains(event.target)) {
    userList.style.display = 'none';
  }
});

userList.addEventListener('mouseover', (event) => {
  // Prevent the list from hiding when the mouse moves within the list
  userList.style.display = 'block';
});

userList.addEventListener('mouseout', (event) => {
  // Check if the mouse is leaving the list entirely, not just moving within it
  if (event.target === userList && !userList.contains(event.relatedTarget)) {
    userList.style.display = 'none';
  }
});
