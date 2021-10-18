class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            User: '',
            UserPass:'',
        }
    }
    render(){
        return(

            <div className = "form">
                <div className="AccountInfo">
                    <h1 className="title">Log into you Account!</h1>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" className="form-label">DPI</label>
                            <input type="user" className="form-control" id="dpi"></input>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="pass"></input>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={
                            ()=>{
                                this.setState({User: document.querySelector("#dpi"), UserPass: document.querySelector("#pass")});
                            }
                        }>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}