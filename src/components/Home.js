import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
class Home extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state={
                title:''
        };
    }
    setStatus=(event)=>
    {
         this.setState({
                title:event.target.value
            });
      }
  render()
 {
    const {auth}=this.props;
    if(!auth.uid)
        return <Redirect to='/signin'/>
    let title=this.state.title;
    const taskList=
        (title === 'react') ? 
                (<div className='information'>
                    React (also known as React.js or ReactJS) is an open-source JavaScript library for building user
                    interfaces or UI components. It is maintained by Facebook and a community of individual developers
                    and companies.React can be used as a base in the development of single-page or mobile applications.
                    However, React is only concerned with rendering data to the DOM, and so creating React applications
                    usually requires the use of additional libraries for state management and routing.Redux and React 
                    Router are respective examples of such libraries.
                </div>) 
        : (title === 'node') ? 
                (<div className='information'>
                    Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript
                    code outside a web browser. Node.js lets developers use JavaScript to write command line tools and
                    for server-side scripting—running scripts server-side to produce dynamic web page content before the 
                    page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" 
                    paradigm,unifying web-application development around a single programming language, rather than 
                    different languages for server- and client-side scripts.
                </div>)
        : (title === 'java') ? 
                (<div className='information'>
                    Java is a class-based, object-oriented programming language that is designed to have as few implementation
                    dependencies as possible. It is a general-purpose programming language intended to let application developers
                    write once, run anywhere (WORA),meaning that compiled Java code can run on all platforms that support
                    Java without the need for recompilation.Java applications are typically compiled to bytecode that 
                    can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax
                    of Java is similar to C and C++, but it has fewer low-level facilities than either of them. As of 2019, 
                    Java was one of the most popular programming languages in use according to GitHub,particularly 
                    for client-server web applications, with a reported 9 million developers.
                </div>)        
        :(<div className='information'>
                Select options from the select bar and it will give you information according to your selection.
        </div>)
    return (
        <div>
                <select id="choices" onChange={this.setStatus} className="browser-default">
                    <option value='' defaultValue className='options'>Select</option>
                    <option value="react" className='options'>ReactJs</option>
                    <option value="node" className='options'>NodeJs</option>
                    <option value="java" className='options'>Java</option>
                </select>
               {taskList}
        </div>
        
    );
  }

}

const mapStateToProps=(state)=>{
    return {
        auth:state.firebase.auth,
    }
}

export default connect(mapStateToProps)(Home);
