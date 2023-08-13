const userName = 'TokisakiNinoVn';

function fetchRepositories() {
  fetch(`https://api.github.com/users/${userName}/repos`)
    .then(response => response.json())
    .then(data => {
      displayRepositories(data);
    })
    .catch(error => {
      console.error('Error fetching repositories:', error);
    });
}

function displayRepositories(repositories) {
  const repositoriesDiv = document.getElementById('repositories');

  repositories.forEach(repo => {
    const repoDiv = document.createElement('div');
    repoDiv.classList.add('repository');

    const nameElement = document.createElement('h3');
    const nameLink = document.createElement('a');
    nameLink.href = repo.html_url;
    nameLink.textContent = repo.name;
    nameElement.appendChild(nameLink);
    repoDiv.appendChild(nameElement);

    const languageElement = document.createElement('p');
    languageElement.textContent = `Language: ${repo.language || 'N/A'}`;
    repoDiv.appendChild(languageElement);

    const updatedAtElement = document.createElement('p');
    const updatedAt = new Date(repo.updated_at).toLocaleString();
    updatedAtElement.textContent = `Last Updated: ${updatedAt}`;
    repoDiv.appendChild(updatedAtElement);

    repositoriesDiv.appendChild(repoDiv);
  });
}
window.addEventListener('load', fetchRepositories);



