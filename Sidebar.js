import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span><br/><br/>
            <img className="img"  src="https://images.unsplash.com/photo-1574788170925-c2586e1c510d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFwcHklMjBnaXJsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="img"/>
            <p>
              I'm your new social media bestie.My mission
              is to help small and medium-sized businesses through social media.  
            </p><br/>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div><br/>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
        </div>
        <div className="sidebarSocial">
          <center>
        <i className="sidebarIcon fa-brands fa-facebook"></i>
       <i className="sidebarIcon fa-brands fa-instagram"></i>
       <i className="sidebarIcon fa-brands fa-twitter"></i>
       </center>
        </div>
    </div>
  )
}
