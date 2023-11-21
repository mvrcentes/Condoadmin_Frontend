import React from "react";
import AdminView from "../../components/View/AdminView";
import ResidentView from "../../components/View/ResidentView";
import { NewView } from "../../components/NewView/NewView";
import { Header } from "../../components/Header/Header";

export const AnnoucementByID = ({ admin }) => {
  console.log(`admin en announce by id`, admin);

  return (
    <>
      {admin ? (
        <AdminView>
          <NewView />
        </AdminView>
      ) : (
        <ResidentView>
          <NewView />
        </ResidentView>
      )}
    </>
  );
};
