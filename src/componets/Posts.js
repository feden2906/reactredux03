import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//Імпортуємо actions константи з папки
import { startPostsLoading, setPosts, stopPostsLoading, setPostsError } from "../redux";

export const Posts = () => {
  const {error, isPostsLoading, posts} = useSelector(({ posts }) => (posts));
  const dispatch = useDispatch();

  const postsFetcher = async () => {
    try {
      dispatch(startPostsLoading());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      // console.log("Отримуємо об'єкти з fetch", data);
      dispatch(setPosts(data));
    } catch (e) {
      console.log(e);
      dispatch(setPostsError("Помилка завантаження публікацій"));
    } finally {
      dispatch(stopPostsLoading());
    }
  };

  useEffect(() => {
    postsFetcher();
  }, []);
  //Якщо видасть помилку то поверне все що в контейнері h1 про помилку
  if (error) {
    return <h1>Помилка завантаження</h1>;
  }

  if (isPostsLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {posts.map(({ id, title, body }) => (
        <p key={id}>
          {title}---{body}
        </p>
      ))}
    </div>
  );
};
