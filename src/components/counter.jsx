import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count : 0,
        tags : ['tag1','tag2','tag3'],
        //imageUrl: 'https://picsum.photos/200'
     };

    //  styles = {
    //     fontSize :40,
    //     fontWeight:"bold"
    //  };

    render() { 
        //React.createElement('div');
        return (
            <div>
                {/* <img src={this.state.imageUrl} alt=""/> */}
                <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{ tag } </li>)}
                </ul>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-4 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formateCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;