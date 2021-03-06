import React, { useContext, useEffect, useState } from "react";
import Blog from "./components/blog/blog";
import BlogRow from "./components/blogs-row/blogs-row";
import "./index.css";
import Layout from "./components/layout"
import PageIndicator from "./components/ui/page-indicator/pageIndicator";

import { FirebaseContext } from "./components/firebase";



// const blogs = [
//   <Blog key={0} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
//   <Blog key={1} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
//   <Blog key={2} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
//   <Blog key={3} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
//   <Blog key={4} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
//   <Blog key={5} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
//   <Blog key={6} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
//   <Blog key={7} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
//   <Blog key={8} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
// ]





//TODO use navbar and sidebar as component of layout
const App = (props) => {
  const [blogs, setBlogs] = useState(0);
  const fb = useContext(FirebaseContext);
  const blogRef = fb.db.collection('blogs');
  useEffect(() => {
    (async () => {
      const blogSnapshot = await blogRef.orderBy('createdAt').limit(10).get();
      const blogComps = [];
      blogSnapshot.forEach(doc => {
        blogComps.push(<Blog key={doc.id} content={doc.data().content} title={doc.data().title} />);
      });
      setBlogs(blogComps);
    })();
  },[]);
  console.log(props);
  return (
    <>
      <Layout mobile={props.isMobile}>
        <BlogRow header="Recently Added" content={blogs} />
        <PageIndicator pages={4} />
      </Layout>
    </>
  )
}

export default App;
