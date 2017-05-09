import Link from 'next/link'

export default () => (
  <ul>
    <Item href="/jobs">Jobs</Item>
    <Item href="/posts">post</Item>
    <Item href="/people">people</Item>
    <Item href="/ask">ask</Item>
    <Item href="/submit">submit</Item>

    <style jsx>{`
      ul {
        list-style-type: none;
        float: right;
      }
    `}</style>
  </ul>
)

const Item = ({ href, children }) => (
  <li>
    <Link prefetch href={href}>
      <a>{ children }</a>
    </Link>

    <style jsx>{`
      li {
        display: inline-block;
      }

      a {
        display: inline-block;
        padding: 10px;
        font-size: 15px;
        text-transform: uppercase;
        text-decoration: none;
        color: #000;
        font-weight: bold;
      }

      a:hover {
        color: #fff;
      }
    `}</style>
  </li>
)
