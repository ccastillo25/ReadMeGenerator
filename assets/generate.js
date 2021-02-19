function generateInfo(data, gitHubData) {
    return `
      
      # **${data.title}**
      ${data.badge}
      ## Description
      ${data.description}
      ## Table of Contents
      -[description](#description)
      -[installation](#installation)
      -[usage](#usage)
      -[license](#license)
      -[contribute](#contribute)
      -[test](#test)
      -[github](#github)
      ## Installation
      ${data.installation}
      ## Usage
      ${data.usage}
      ## License
      ${data.license}
      ## Contributors 
      ${data.contribute}
      ## Test
      ${data.test}
      ## GitHub
      ![GitHub Profile Image](${gitHubData.gitHubImage})
      -${gitHubData.name}
      -${gitHubData.profile}
      -${gitHubData.email}
      `;
  }
  
  module.exports = generateInfo;