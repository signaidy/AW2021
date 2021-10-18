class Img extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url: 'https://via.placeholder.com/1850x600',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.   '
        }
    }
    render(){
        return(
            <div classname="img">
                <div className="card bg-dark text-white">
                    <img src={this.state.url} className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <h5 className="card-title">UmU</h5>
                        <p className="card-text">{this.state.text}</p>
                    </div>
                </div>
                <h2>Title</h2>
                <p>{this.state.text}</p>
            </div>
        )
    }
}