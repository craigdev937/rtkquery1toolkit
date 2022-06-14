import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { NotFound } from "../components/NotFound";
import { PostList } from "../containers/PostList";
import { AddForm } from "../containers/AddForm";
import { SinglePost } from "../containers/SinglePost";
import { EditForm } from "../containers/EditForm";
import { UserList } from "../containers/UserList";
import { UserPage } from "../containers/UserPage";

export const Main = () => (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<PostList />} />
            <Route path="post">
                <Route index element={<AddForm />} />
                <Route path=":postId" element={<SinglePost />} />
                <Route path="edit/:postId" element={<EditForm />} />
            </Route>
            <Route path="user">
                <Route index element={<UserList />} />
                <Route path=":userId" element={<UserPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
);



