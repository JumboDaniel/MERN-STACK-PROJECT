class IssueFilter extends React.Component{
        render(){
                return(
                        <div>This is a placeholder</div>
                );
        }
}
class IssueRow extends React.Component{        
        render(){
                const style= this.props.rowStyle;
                return(
                     <tr>
                       <td style={style}>{this.props.issue_id}</td>
                       <td style={style}>{this.props.issue_title}</td>
                     </tr>
                ) 
         }
}

class IssueTable extends React.Component{
        render(){
            const style= {border: "4 solid black", padding:4}
                return(
                <table>
                        <thead>
                        <tr>
                                <th style={style}>ID</th>
                                <th style={style}>Title</th>
                        </tr>      
                        </thead>
                        <tbody>
                        <IssueRow rowStyle={style} issue_id={1} issue_title="error in console when clicking add"/> {/* somehow pass Issue 1 data to this */}
                        <IssueRow rowStyle={style} issue_id={2} issue_title="Missing bottom border"/> {/* somehow pass Issue 1 data to this */}
                        </tbody>            
                </table>
                );
                
        }
}

class IssueAdd extends React.Component{
        render(){
                return(<div>This is a placeholder for a table of issue</div>);
        }
}

class IssueList extends React.Component{
        render(){
                return(
                        <React.Fragment>
                                <h1>Issue Tracker</h1>
                                <IssueFilter/>
                                <hr/>
                                <IssueTable/>
                                <hr/>
                                <IssueAdd/>
                        </React.Fragment>
                )
        }
}
        ReactDOM.render(<IssueList/>, document.getElementById('contents'));