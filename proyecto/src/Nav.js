class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            User: '',
            showLinks: false,
            setShowLinks: false
        }
    }
    render(){
        return(
            <div className = "Navbar">
                <div className="left">
                    <div className="links" id={this.state.showLinks ? "hidden" : ""}>
                        <a href="index.html">Home</a>
                        <a href="news.html">News</a>
                        <a href="info.html">Information</a>
                        <a href="contact.html">Contact</a>
                    </div>
                    <button type="button" class="btn btn-outline-dark" onClick={()=> this.setState({showLinks: !this.state.showLinks})}>Menu</button>
                </div>
                <div className="right">
                    <a href={this.state.User ? '' : "register.html"}>{this.state.User ? "" : "Register"}</a>
                    <a href={this.state.User ? "account.html" : "login.html"}>{this.state.User ? "Account" : "Login"}</a>
                    Hello {this.state.User || 'Guest' }!
                </div>
            </div>
        )
    }
}