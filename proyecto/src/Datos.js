class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            User: '',
            Email:'',
            UserName:'',
            UserLastName:'',
            UserPass:'',
            BloodType:'',
            Allergies:'',
            HeartIssue:'',
            BloodThiner:'',
            Pregnant:'',
            PossitiveCovid:'',
            comments: ''
        }
    }
    render(){
        return(
            <div className = "form">
                <div className="AccountInfo">
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"></input>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Name</label>
                            <input type="user" className="form-control" id="userName"></input>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Last Name</label>
                            <input type="user" className="form-control" id="userLastName"></input>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" className="form-label">DPI</label>
                            <input type="user" className="form-control" id="dpi"></input>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="pass"></input>
                        </div>
                        <select class="form-select" aria-label="Default select example" id="blood">
                            <option selected>Select Your blood type</option>
                            <option value="1">A+</option>
                            <option value="2">A-</option>
                            <option value="3">O+</option>
                            <option value="4">O-</option>
                            <option value="5">B+</option>
                            <option value="6">B-</option>
                            <option value="7">AB+</option>
                            <option value="8">AB-</option>
                        </select>
                        <select class="form-select" aria-label="Default select example" id="allergy">
                            <option selected>Do you have an Allergy?</option>
                            <option value="1">No</option>
                            <option value="2">Yes</option>
                        </select>
                        <select class="form-select" aria-label="Default select example" id="heart">
                            <option selected>Do you have any hearth complication?</option>
                            <option value="1">No</option>
                            <option value="2">Yes</option>
                        </select>
                        <select class="form-select" aria-label="Default select example" id="thiner">
                            <option selected>Do you use blood thiners?</option>
                            <option value="1">No</option>
                            <option value="2">Yes</option>
                        </select>
                        <select class="form-select" aria-label="Default select example" id="pregnant">
                            <option selected>Are you pregnant?</option>
                            <option value="1">No</option>
                            <option value="2">Yes</option>
                        </select>
                        <select class="form-select" aria-label="Default select example" id="covid">
                            <option selected>Have you had Covid-19 before?</option>
                            <option value="1">No</option>
                            <option value="2">Yes</option>
                        </select>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Write any Comments:</label>
                            <textarea class="form-control" id="comments" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={
                            ()=>{
                                this.setState({User: document.querySelector("#dpi"), Email: document.querySelector("#email"), UserName: document.querySelector("#userName"), UserLastName: document.querySelector("#userLastName"), UserPass: document.querySelector("#pass"), BloodType: document.querySelector("#blood"), Allergies: document.querySelector("#allergy"), HeartIssue: document.querySelector("#heart"), BloodThiner: document.querySelector("#thiner"), Pregnant: document.querySelector("#pregnant"), PossitiveCovid: document.querySelector("#covid"), Comments: document.querySelector("#comments")});
                            }
                        }>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}