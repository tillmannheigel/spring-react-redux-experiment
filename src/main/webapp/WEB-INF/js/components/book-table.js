import React from 'react'
import {connect} from 'react-redux';

class BookTable extends React.Component {

    render() {
        return <table>
            <thead>
            <tr>
                <th> Title</th>
                <th> Author</th>
            </tr>
            </thead>
            <tbody>
            {Object.keys(this.props.books).map((value, key) => (
                <tr key={key}>
                    <td>{this.props.books[value].title}</td>
                    <td>{this.props.books[value].author}</td>
                </tr>
            ))}
            </tbody>
        </table>;
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookTable);
