"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const myREsponse = [
    {
        slackUsername: "sirObed",
        backend: true,
        age: 30,
        bio: "Full stack web developer",
    },
    {
        slackUsername: "sirObed",
        backend: true,
        age: 30,
        bio: "Full stack web developer",
    },
];
router.get("/", function (req, res, next) {
    res.send(JSON.stringify(myREsponse));
});
exports.default = router;
//# sourceMappingURL=users.js.map