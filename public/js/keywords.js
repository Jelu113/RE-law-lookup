const newFormHandler = async (event) => {
  event.preventDefault();

  const keyword = document.querySelector('#keyword-name').value.trim();
  const additionalText = document.querySelector('#additional-text').value.trim();
  const statutesUrl = document.querySelector('#statutes-url').value.trim();

  if (keyword && additionalText && statutesUrl) {
    const response = await fetch(`/api/keywords`, {
      method: 'POST',
      body: JSON.stringify({ keyword, additionalText, statutesUrl }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/keywords');
    } else {
      alert('Failed to create keyword');
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/keywords/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/keywords');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

document
  .querySelector('#new-keyword-form')
  .addEventListener('click', newFormHandler);

document
  .querySelector('.keyword-list')
  // .addEventListener('click', delButtonHandler);

