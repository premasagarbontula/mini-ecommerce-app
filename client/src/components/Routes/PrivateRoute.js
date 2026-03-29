import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get("/api/v1/auth/user-auth");
        console.log(res);
        setOk(res.data.ok);
      } catch (error) {
        setOk(false);
      }
    };

    authCheck();
  }, []);

  return ok ? <Outlet /> : <Spinner />;
}
