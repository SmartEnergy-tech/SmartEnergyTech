import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import { Loader } from "../../components/common/loader";
import { setIsAuthenticated } from "../../store";

export const ActivateUserPage = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const code = params.get("code");

  useEffect(() => {
    if (!code) {
      navigate("/");
    }

    (async () => {
      try {
        const res = await axios.post("/auth/activate-user", { code });
        toast.success("Email was confirmed with success.");
        localStorage.setItem("jwt", res.data.token);
        setIsAuthenticated(res.data.toke);
        navigate("/dashboard");
      } catch (error: any) {
        console.error(error);
        const message = error.response.data.message || "Unknown error";
        toast.error(`Failed to register: ${message}`);
      }
    })();
  }, [code]);

  return (
    <Container>
      <Loader size={48} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
