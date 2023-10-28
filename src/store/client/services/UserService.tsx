import { HttpAxios } from "../../../utils/http/HttpAxios";
import { UserDataUrl, UserNameListUrl } from "../../endpoint/UrlEndPoints";

class LoginUserService {
  // list of users
  async GetUserData(obj: any) {
    return HttpAxios.get(
      UserDataUrl + `?limit=${obj.limit}&pageNo=${obj.pageNo}&sort=${obj.sort}`
    );
  }
  // list of names
  async GetUserName() {
    return HttpAxios.get(UserNameListUrl);
  }
  // submit user data
  async SubmitData(obj: any) {
    return HttpAxios.post(UserDataUrl, obj);
  }
  // delete user data
  async DeleteUser(obj: any) {
    return HttpAxios.delete(UserDataUrl + `/${obj}`, obj);
  }
  // edit the duser data
  async EditData(obj: any) {
    return HttpAxios.put(UserDataUrl + `/${obj.id}`, obj);
  }
}

export default new LoginUserService();
