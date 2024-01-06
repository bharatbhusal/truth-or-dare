import { cleanEnv, str } from "envalid";

export default cleanEnv(process.env, {
    REACT_APP_TRUTH_API: str(),
    REACT_APP_DARE_API: str(),
    REACT_APP_WYR_API: str(),
    REACT_APP_NHIE_API: str(),
    REACT_APP_P_API: str(),
});