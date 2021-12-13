"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/accessToken";
exports.ids = ["pages/api/auth/accessToken"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable prefer-const */ /* eslint-disable import/no-mutable-exports */ \nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        default: \"user\"\n    },\n    root: {\n        type: Boolean,\n        default: false\n    },\n    avatar: {\n        type: String,\n        default: \"https://res.cloudinary.com/mendoanindonesia/image/upload/v1638602986/avatar_d6aglv.png\"\n    }\n}, {\n    timestamps: true\n});\nlet Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.user) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"user\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvdXNlck1vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEVBQWlDLGdDQUNqQyxFQUE4Qyw2Q0FDZjtBQUUvQixLQUFLLENBQUNDLFVBQVUsR0FBRyxHQUFHLENBQUNELHdEQUFlLENBQ3BDLENBQUM7SUFDQ0csUUFBUSxFQUFFLENBQUM7UUFDVEMsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUM7SUFDREMsS0FBSyxFQUFFLENBQUM7UUFDTkgsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO1FBQ2RFLE1BQU0sRUFBRSxJQUFJO0lBQ2QsQ0FBQztJQUNEQyxRQUFRLEVBQUUsQ0FBQztRQUNUTCxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFLElBQUk7SUFDaEIsQ0FBQztJQUNESSxJQUFJLEVBQUUsQ0FBQztRQUNMTixJQUFJLEVBQUVDLE1BQU07UUFDWk0sT0FBTyxFQUFFLENBQU07SUFDakIsQ0FBQztJQUNEQyxJQUFJLEVBQUUsQ0FBQztRQUNMUixJQUFJLEVBQUVTLE9BQU87UUFDYkYsT0FBTyxFQUFFLEtBQUs7SUFDaEIsQ0FBQztJQUVERyxNQUFNLEVBQUUsQ0FBQztRQUNQVixJQUFJLEVBQUVDLE1BQU07UUFDWk0sT0FBTyxFQUNMLENBQXdGO0lBQzVGLENBQUM7QUFDSCxDQUFDLEVBQ0QsQ0FBQztJQUNDSSxVQUFVLEVBQUUsSUFBSTtBQUNsQixDQUFDO0FBR0gsR0FBRyxDQUFDQyxPQUFPLEdBQUdoQiw2REFBb0IsSUFBSUEscURBQWMsQ0FBQyxDQUFNLE9BQUVDLFVBQVU7QUFDdkUsaUVBQWVlLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lbmRvYW4vLi9tb2RlbHMvdXNlck1vZGVsLmpzPzk2MTciXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgdXNlcm5hbWU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB1bmlxdWU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICByb2xlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogXCJ1c2VyXCIsXHJcbiAgICB9LFxyXG4gICAgcm9vdDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIH0sXHJcblxyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL21lbmRvYW5pbmRvbmVzaWEvaW1hZ2UvdXBsb2FkL3YxNjM4NjAyOTg2L2F2YXRhcl9kNmFnbHYucG5nXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9LFxyXG4pO1xyXG5cclxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMudXNlciB8fCBtb25nb29zZS5tb2RlbChcInVzZXJcIiwgdXNlclNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQ7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJyb2xlIiwiZGVmYXVsdCIsInJvb3QiLCJCb29sZWFuIiwiYXZhdGFyIiwidGltZXN0YW1wcyIsIkRhdGFzZXQiLCJtb2RlbHMiLCJ1c2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/userModel.js\n");

/***/ }),

/***/ "./pages/api/auth/accessToken.js":
/*!***************************************!*\
  !*** ./pages/api/auth/accessToken.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/connectDB */ \"./utils/connectDB.js\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/userModel */ \"./models/userModel.js\");\n/* harmony import */ var _utils_generateToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/generateToken */ \"./utils/generateToken.js\");\n/* eslint-disable no-undef */ /* eslint-disable no-underscore-dangle */ /* eslint-disable consistent-return */ \n\n\n\n(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        const rf_token = req.cookies.refreshtoken;\n        if (!rf_token) return res.status(400).json({\n            err: 'Please login now!'\n        });\n        const result = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(rf_token, \"mendoansecret123248111secret91817681\");\n        if (!result) {\n            return res.status(400).json({\n                err: 'Your token is incorrect or has expired.'\n            });\n        }\n        const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(result.id);\n        if (!user) return res.status(400).json({\n            err: 'User not found.'\n        });\n        const access_token = (0,_utils_generateToken__WEBPACK_IMPORTED_MODULE_3__.createAccessToken)({\n            id: user._id\n        });\n        res.json({\n            access_token,\n            user: {\n                username: user.username,\n                email: user.email,\n                role: user.role,\n                avatar: user.avatar,\n                root: user.root\n            }\n        });\n    } catch (err) {\n        if (!result) return res.status(500).json({\n            err: err.message\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9hY2Nlc3NUb2tlbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxFQUE2Qiw0QkFDN0IsRUFBeUMsd0NBQ3pDLEVBQXNDLHFDQUNSO0FBQ2tCO0FBQ0g7QUFDbUI7QUFFaEVDLDREQUFTO0FBRVQsaUVBQU0sT0FBZ0JHLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDbEMsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUNDLFFBQVEsR0FBR0YsR0FBRyxDQUFDRyxPQUFPLENBQUNDLFlBQVk7UUFDekMsRUFBRSxHQUFHRixRQUFRLEVBQUUsTUFBTSxDQUFDRCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLEdBQUcsRUFBRSxDQUFtQjtRQUFDLENBQUM7UUFFdkUsS0FBSyxDQUFDQyxNQUFNLEdBQUdaLDBEQUFVLENBQUNNLFFBQVEsRUFBRVEsc0NBQWdDO1FBQ3BFLEVBQUUsR0FBR0YsTUFBTSxFQUFFLENBQUM7WUFDWixNQUFNLENBQUNQLEdBQUcsQ0FDUEksTUFBTSxDQUFDLEdBQUcsRUFDVkMsSUFBSSxDQUFDLENBQUM7Z0JBQUNDLEdBQUcsRUFBRSxDQUF5QztZQUFDLENBQUM7UUFDNUQsQ0FBQztRQUVELEtBQUssQ0FBQ00sSUFBSSxHQUFHLEtBQUssQ0FBQ2Ysa0VBQWMsQ0FBQ1UsTUFBTSxDQUFDTyxFQUFFO1FBQzNDLEVBQUUsR0FBR0YsSUFBSSxFQUFFLE1BQU0sQ0FBQ1osR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxHQUFHLEVBQUUsQ0FBaUI7UUFBQyxDQUFDO1FBRWpFLEtBQUssQ0FBQ1MsWUFBWSxHQUFHakIsdUVBQWlCLENBQUMsQ0FBQztZQUFDZ0IsRUFBRSxFQUFFRixJQUFJLENBQUNJLEdBQUc7UUFBQyxDQUFDO1FBQ3ZEaEIsR0FBRyxDQUFDSyxJQUFJLENBQUMsQ0FBQztZQUNSVSxZQUFZO1lBQ1pILElBQUksRUFBRSxDQUFDO2dCQUNMSyxRQUFRLEVBQUVMLElBQUksQ0FBQ0ssUUFBUTtnQkFDdkJDLEtBQUssRUFBRU4sSUFBSSxDQUFDTSxLQUFLO2dCQUNqQkMsSUFBSSxFQUFFUCxJQUFJLENBQUNPLElBQUk7Z0JBQ2ZDLE1BQU0sRUFBRVIsSUFBSSxDQUFDUSxNQUFNO2dCQUNuQkMsSUFBSSxFQUFFVCxJQUFJLENBQUNTLElBQUk7WUFDakIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLENBQUMsS0FBSyxFQUFFZixHQUFHLEVBQUUsQ0FBQztRQUNiLEVBQUUsR0FBR0MsTUFBTSxFQUFFLE1BQU0sQ0FBQ1AsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxHQUFHLEVBQUVBLEdBQUcsQ0FBQ2dCLE9BQU87UUFBQyxDQUFDO0lBQy9ELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVuZG9hbi8uL3BhZ2VzL2FwaS9hdXRoL2FjY2Vzc1Rva2VuLmpzPzlmNGIiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQic7XHJcbmltcG9ydCBVc2VycyBmcm9tICcuLi8uLi8uLi9tb2RlbHMvdXNlck1vZGVsJztcclxuaW1wb3J0IHsgY3JlYXRlQWNjZXNzVG9rZW4gfSBmcm9tICcuLi8uLi8uLi91dGlscy9nZW5lcmF0ZVRva2VuJztcclxuXHJcbmNvbm5lY3REQigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJmX3Rva2VuID0gcmVxLmNvb2tpZXMucmVmcmVzaHRva2VuO1xyXG4gICAgaWYgKCFyZl90b2tlbikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyOiAnUGxlYXNlIGxvZ2luIG5vdyEnIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGp3dC52ZXJpZnkocmZfdG9rZW4sIHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fU0VDUkVUKTtcclxuICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgIHJldHVybiByZXNcclxuICAgICAgICAuc3RhdHVzKDQwMClcclxuICAgICAgICAuanNvbih7IGVycjogJ1lvdXIgdG9rZW4gaXMgaW5jb3JyZWN0IG9yIGhhcyBleHBpcmVkLicgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJzLmZpbmRCeUlkKHJlc3VsdC5pZCk7XHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycjogJ1VzZXIgbm90IGZvdW5kLicgfSk7XHJcblxyXG4gICAgY29uc3QgYWNjZXNzX3Rva2VuID0gY3JlYXRlQWNjZXNzVG9rZW4oeyBpZDogdXNlci5faWQgfSk7XHJcbiAgICByZXMuanNvbih7XHJcbiAgICAgIGFjY2Vzc190b2tlbixcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgIHJvbGU6IHVzZXIucm9sZSxcclxuICAgICAgICBhdmF0YXI6IHVzZXIuYXZhdGFyLFxyXG4gICAgICAgIHJvb3Q6IHVzZXIucm9vdCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgaWYgKCFyZXN1bHQpIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycjogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiand0IiwiY29ubmVjdERCIiwiVXNlcnMiLCJjcmVhdGVBY2Nlc3NUb2tlbiIsInJlcSIsInJlcyIsInJmX3Rva2VuIiwiY29va2llcyIsInJlZnJlc2h0b2tlbiIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJyZXN1bHQiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiUkVGUkVTSF9UT0tFTl9TRUNSRVQiLCJ1c2VyIiwiZmluZEJ5SWQiLCJpZCIsImFjY2Vzc190b2tlbiIsIl9pZCIsInVzZXJuYW1lIiwiZW1haWwiLCJyb2xlIiwiYXZhdGFyIiwicm9vdCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/accessToken.js\n");

/***/ }),

/***/ "./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        console.log(\"Already connected\");\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://mendoanid:mendoan123@cluster0.q0kx1.mongodb.net/mendoan_id?retryWrites=true&w=majority\", {\n        useCreateIndex: true,\n        useFindAndModify: false,\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    }, (err)=>{\n        if (err) throw err;\n        console.log(\"Connected to mongodb.\");\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb25uZWN0REIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLEtBQUssQ0FBQ0MsU0FBUyxPQUFTLENBQUM7SUFDdkIsRUFBRSxFQUFFRCwyRUFBa0MsRUFBRSxDQUFDO1FBQ3ZDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFtQjtRQUMvQixNQUFNO0lBQ1IsQ0FBQztJQUNETCx1REFBZ0IsQ0FDZE8sc0dBQXVCLEVBQ3ZCLENBQUM7UUFDQ0csY0FBYyxFQUFFLElBQUk7UUFDcEJDLGdCQUFnQixFQUFFLEtBQUs7UUFDdkJDLGVBQWUsRUFBRSxJQUFJO1FBQ3JCQyxrQkFBa0IsRUFBRSxJQUFJO0lBQzFCLENBQUMsR0FDQUMsR0FBRyxHQUFLLENBQUM7UUFDUixFQUFFLEVBQUVBLEdBQUcsRUFBRSxLQUFLLENBQUNBLEdBQUc7UUFDbEJWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQXVCO0lBQ3JDLENBQUM7QUFFTCxDQUFDO0FBRUQsaUVBQWVKLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lbmRvYW4vLi91dGlscy9jb25uZWN0REIuanM/YzYxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBjb25uZWN0REIgPSAoKSA9PiB7XHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBjb25uZWN0ZWRcIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIG1vbmdvb3NlLmNvbm5lY3QoXHJcbiAgICBwcm9jZXNzLmVudi5NT05HT0RCX1VSTCxcclxuICAgIHtcclxuICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcbiAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxyXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICAoZXJyKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gbW9uZ29kYi5cIik7XHJcbiAgICB9LFxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJMIiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/connectDB.js\n");

/***/ }),

/***/ "./utils/generateToken.js":
/*!********************************!*\
  !*** ./utils/generateToken.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAccessToken\": () => (/* binding */ createAccessToken),\n/* harmony export */   \"createRefreshToken\": () => (/* binding */ createRefreshToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst createAccessToken = (payload)=>jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, \"mendoan1239295812650630158\", {\n        expiresIn: \"15m\"\n    })\n;\nconst createRefreshToken = (payload)=>jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, \"mendoansecret123248111secret91817681\", {\n        expiresIn: \"7d\"\n    })\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9nZW5lcmF0ZVRva2VuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEI7QUFFdkIsS0FBSyxDQUFDQyxpQkFBaUIsSUFBSUMsT0FBTyxHQUFLRix3REFBUSxDQUFDRSxPQUFPLEVBQUVFLDRCQUErQixFQUFFLENBQUM7UUFDaEdHLFNBQVMsRUFBRSxDQUFLO0lBQ2xCLENBQUM7O0FBQ00sS0FBSyxDQUFDQyxrQkFBa0IsSUFBSU4sT0FBTyxHQUFLRix3REFBUSxDQUFDRSxPQUFPLEVBQUVFLHNDQUFnQyxFQUFFLENBQUM7UUFDbEdHLFNBQVMsRUFBRSxDQUFJO0lBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZW5kb2FuLy4vdXRpbHMvZ2VuZXJhdGVUb2tlbi5qcz9kZDQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFjY2Vzc1Rva2VuID0gKHBheWxvYWQpID0+IGp3dC5zaWduKHBheWxvYWQsIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQsIHtcclxuICBleHBpcmVzSW46IFwiMTVtXCIsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgY3JlYXRlUmVmcmVzaFRva2VuID0gKHBheWxvYWQpID0+IGp3dC5zaWduKHBheWxvYWQsIHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fU0VDUkVULCB7XHJcbiAgZXhwaXJlc0luOiBcIjdkXCIsXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiand0IiwiY3JlYXRlQWNjZXNzVG9rZW4iLCJwYXlsb2FkIiwic2lnbiIsInByb2Nlc3MiLCJlbnYiLCJBQ0NFU1NfVE9LRU5fU0VDUkVUIiwiZXhwaXJlc0luIiwiY3JlYXRlUmVmcmVzaFRva2VuIiwiUkVGUkVTSF9UT0tFTl9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/generateToken.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/accessToken.js"));
module.exports = __webpack_exports__;

})();