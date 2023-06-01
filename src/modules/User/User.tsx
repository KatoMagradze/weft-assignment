import React, { useEffect, useState } from "react";
import "./User.scss";
import { useParams } from "react-router-dom";
import { IPost, useGetPosts } from "../../services/posts";
import { useDebouncedCallback } from "use-debounce";
import { CloseCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

export const User = () => {
  const { id } = useParams();
  const { posts } = useGetPosts(id);
  const [postsArr, setPostsArr] = useState<IPost[]>();

  useEffect(() => {
    setPostsArr(posts);
  }, [posts]);

  const onSearch = useDebouncedCallback((e: any) => {
    setPostsArr(
      posts?.filter(
        (item) =>
          item.title
            ?.toLowerCase()
            .trim()
            .indexOf(e.target.value?.toLowerCase().trim()) > -1
      )
    );
  }, 200);

  return (
    <div className={"user-posts-container"}>
      <Input
        className={"search-input"}
        placeholder={"search..."}
        suffix={<SearchOutlined />}
        onChange={(e) => onSearch(e)}
      />
      {postsArr?.map((post) => {
        return (
          <div className={"post-wrapper"} key={post.id}>
            <div
              className={"close-icon"}
              onClick={() => {
                setPostsArr((prev) =>
                  prev?.filter((item) => item.id !== post.id)
                );
              }}
            >
              <CloseCircleOutlined />
            </div>
            <div className={"post-title"}>
              <span>
                <b>Title: </b>
              </span>
              {post.title}
            </div>
            <div className={"post-body"}>
              <span>
                <b>Body: </b>
              </span>
              {post.body}
            </div>
          </div>
        );
      })}
    </div>
  );
};
