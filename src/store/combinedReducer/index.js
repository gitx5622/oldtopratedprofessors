import { combineReducers } from "redux"
import authReducer from "../auth/reducers/authReducer";
import orderReducer from "../order/reducers/orderReducer";
import walletReducer from "../wallet/reducers/walletReducer";
import levelReducer from "../level/reducers/levelReducer";
import spacingReducer from "../spacing/reducers/spacingReducer";
import pageReducer from "../pages/reducers/pageReducer";
import serviceReducer from "../service/reducers/serviceReducer";
import sourceReducer from "../sources/reducers/sourceReducer";
import styleReducer from "../style/reducers/styleReducer";
import subjectReducer from "../subject/reducers/subjectReducer";
import typeReducer from "../type/reducers/typeReducer";
import urgencyReducer from "../urgency/reducers/urgencyReducer";
import languageReducer from "../language/reducers/languageReducer";

const reducer = combineReducers({
    Level: levelReducer,
    Spacing: spacingReducer,
    Page: pageReducer,
    Service: serviceReducer,
    Sources: sourceReducer,
    Style: styleReducer,
    Subject: subjectReducer,
    Type: typeReducer,
    Urgency : urgencyReducer,
    Language: languageReducer,
    Auth: authReducer,
    Order: orderReducer,
    Wallet: walletReducer,
});

export default reducer
