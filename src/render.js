const { userList, userDetails } = require('./render');

const userHtml = document.querySelector('#user-list');

const render = ({ userList, userDetails }) => {
  const html = `
   ${userList.map((user, idx) => `
     <li>
     <a href = '#${idx}' > ${user} </a>
       <ul>
         <li>
          ${userDetails[user]} 
         </li>
       </ul>
     </li>
   `).join('')}
  `;
  userHtml.innerHTML = html;
};


module.exports = render

