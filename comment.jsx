import React from 'react';
class Comment extends React.Component {
    componentDidMount() {
        (function () { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://www-nodetpoint-com.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    }
    render() {
        return (
            <div>
                <div className="col-md-12">
                    <hr />
                    <div className="col-md-12">
                        <div id="disqus_thread"></div>
                        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment;