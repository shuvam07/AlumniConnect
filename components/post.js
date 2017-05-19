export default () => (
	 <div className="right">
      	<Link prefetch href="/post"><a className="post">Post</a></Link>
      	<style jsx>{`
      		.right {
		        flex: 1;
		        text-align: right;
		     }
		     a.post {
		        padding: 10px;
		        display: inline-block;
		        font-size: 15px;
		        text-transform: uppercase;
		        text-decoration: none;
		        color: #000;
		      }

		      .post:hover {
		        color: #fff;
		      }
      	`}</style>
    </div>

)