import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
let count = null;
class Home extends Component {
     /* state = {
        count: 1
    } */
    
    componentDidMount() {
        //console.log("props",this.props)
        if(!count){axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            //console.log(res)
            let posts = res.data.slice(0,10)
            //console.log(posts)
            this.props.fetchPost(posts) 
        })
        .then(count = 1)
    } }

    render() {
        //console.log(this.props)
        const {posts} = this.props
        const postList = posts.length ? (
            posts.map(post => {
               return (<div className="post card" key={post.id}>
                <div className="card-content">
                    <Link to={`/posts/${post.id}`}><span className="card-title">{post.title}</span></Link>
                    <p>{post.body}</p>
                </div>
            </div>)
        })
        ) : (
            <div className="center">No posts yet</div>
        )

        return (
            <div className="container">
                <h4 className="center">Home page</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost : (posts) => {dispatch({type:"FETCH_POSTS", posts: posts})},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
