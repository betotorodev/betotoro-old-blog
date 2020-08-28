import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// import { Tags } from '@tryghost/helpers-gatsby'
// import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    const POST = post.tags[0].name
    // const readingTime = readingTimeHelper(post)
    return (
        <Link to={url} className="post-card">
            <header className="post-card-header">
                <h2>{post.created_at_pretty}</h2>
                {/* {post.feature_image &&
                    <div className="post-card-image" style={{
                        backgroundImage: `url(${post.feature_image})` ,
                    }}></div>}
                {post.tags && <div className="post-card-tags"> <Tags post={post} visibility="public" autolink={false} /></div>}
                {post.featured && <span>Featured</span>} */}
            </header>
            <section className="post-card-excerpt">
                <h2 className="post-card-title">{post.title}</h2>
            </section>
            <footer className="post-card-footer">
                {/* <div className="post-card-avatar">
                        {post.primary_author.profile_image ? (
                            <img
                                className="author-profile-image"
                                src={post.primary_author.profile_image}
                                alt={post.primary_author.name}
                            />
                        ) : (
                            <img
                                className="default-avatar"
                                src="/images/icons/avatar.svg"
                                alt={post.primary_author.name}
                            />
                        )}
                    </div> */}
                    
                <span className="post-card-footer-author">By {post.primary_author.name}</span>
                <span className="post-card-footer-author">{POST}</span>
       
                {/* <div className="post-card-footer-right">
                    <div>{post.created_at_pretty}</div>
                </div> */}
            </footer>
        </Link>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        created_at_pretty: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard
