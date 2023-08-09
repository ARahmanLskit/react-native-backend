"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
/**
 * Get the list of users from the JSON file in db/users.json and return it as a Promise
 * @returns {Promise<User[]>} List of users
 */
var getUsers = function () {
  var promise = new Promise(function (resolve, reject) {
    var filename = path_1.default.join(__dirname, "./users.json");
    fs_1.default.readFile(
      filename,
      { encoding: "utf-8" },
      function (err, data) {
        if (err) {
          reject(err);
        }
        resolve(JSON.parse(data));
      }
    );
  });
  return promise;
};
exports.db = {
  getUsers: getUsers,
};
