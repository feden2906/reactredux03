import React from "react";
import { useDispatch, useSelector } from "react-redux";
//Імпортуємо actions константи з папки
import {
  startPostsLoading,
  setPosts,
  stopPostsLoading,
  setPostsError
} from "../action-creators";

export const Posts = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  //На початку порожньо
  console.log("Спочатку data", data);

  const postsFetcher = async () => {
    try {
      dispatch(startPostsLoading());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log("Отримуємо об'єкти з fetch", data);
      dispatch(setPosts(data));
    } catch (e) {
      console.log(e);
      dispatch(setPostsError("Помилка завантаження публікацій"));
    } finally {
      dispatch(stopPostsLoading());
    }
  };
  React.useEffect(() => {
    postsFetcher();
  }, []);
  //Якщо видасть помилку то поверне все що в контейнері h1 про помилку
  if (data.error) {
    return <h1>Помилка завантаження</h1>;
  }
  if (data.isPostLoading) {
    return <h2>Публікації з jsonplaceholder успішно завантажені!</h2>;
  }

  return (
    <div>
      {data.posts.map(({ id, title, body }) => (
        <p key={id}>
          {title}---{body}
        </p>
      ))}
    </div>
  );
};
