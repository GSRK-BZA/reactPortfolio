// src/components/Footer.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright © 2099 I am Siva Rama Krishna | Design: <a href="https://www.apple.in" target='_blank '>apple is superior</a></p>
      <div className="social-icons">
        
        <a href="https://www.linkedin.com/in/siva-rama-krishna-gogineni-2a688a281/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg></a>
        <a href="https://leetcode.com/u/gsrkbza/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.02 3.02 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.7 2.7 0 0 1 .066-.523a2.55 2.55 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg></a>
        <a href="https://www.hackerrank.com/profile/gsrkrocky" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 0c1.714 0 13 6.516 13.854 8c.859 1.484.859 14.516 0 16S17.713 32 16 32c-1.714 0-13-6.516-13.859-8c-.854-1.484-.854-14.516 0-16C3 6.516 14.287 0 16 0m3.063 9.068a.344.344 0 0 0-.349.344v5.167h-5.427v-5.37h.932a.34.34 0 0 0 .339-.344a.347.347 0 0 0-.161-.292l-2.099-2.01a.386.386 0 0 0-.302-.146a.35.35 0 0 0-.276.141L9.48 8.574a.343.343 0 0 0 .183.636h.938l.01 13.38c0 .193.146.344.339.344h1.99a.343.343 0 0 0 .344-.344v-5.339h5.432v5.536h-.932a.343.343 0 0 0-.183.636l2.104 2.016c.057.083.188.146.302.146s.208-.063.276-.146l2.24-2.016a.343.343 0 0 0 .161-.292a.347.347 0 0 0-.344-.344h-.938l-.01-13.375a.34.34 0 0 0-.339-.349h-1.99z"/></svg></a>
        <a href="https://codeforces.com/profile/who_am_i_222" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5z"/></svg></a>
      </div>
      
    </footer>
  );
};

export default Footer;
