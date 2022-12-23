/*
 Navicat Premium Data Transfer

 Source Server         : apitest
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : apitest

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 23/12/2022 11:46:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for activity
-- ----------------------------
DROP TABLE IF EXISTS `activity`;
CREATE TABLE `activity`  (
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_croatian_ci NOT NULL,
  `time1` datetime NULL DEFAULT NULL,
  `address` varchar(50) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `text` varchar(100) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `need` varchar(100) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `time2` datetime NULL DEFAULT NULL,
  `callnub` varchar(30) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_croatian_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of activity
-- ----------------------------
INSERT INTO `activity` VALUES ('老刘', '2022-04-18 10:30:06', '济宁市太白楼', '培养宠物感情', '携带宠物', 1, '2022-04-17 13:37:19', '125456323');
INSERT INTO `activity` VALUES ('老王', '2022-04-18 10:47:08', '济宁市太白路蜜雪冰城', '培养宠物感情', '携带宠物', 2, '2022-04-18 14:47:13', '21312313');

-- ----------------------------
-- Table structure for ax
-- ----------------------------
DROP TABLE IF EXISTS `ax`;
CREATE TABLE `ax`  (
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `time` varchar(50) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_croatian_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ax
-- ----------------------------
INSERT INTO `ax` VALUES ('wta123321', '欢迎使用评论区功能', '2022/4/17');
INSERT INTO `ax` VALUES ('zxc', '阿松大', '2022/4/17 11:48:54');
INSERT INTO `ax` VALUES ('zxc', '我张浩是爱宠人士', '2022/4/17 13:14:41');
INSERT INTO `ax` VALUES ('user2', '王他', '2022/4/29 15:29:36');
INSERT INTO `ax` VALUES ('user1', 'asdasdas', '2022-04-29T19:01:02.000Z');
INSERT INTO `ax` VALUES ('user1', 'awdasdasd', '2022-04-21T16:00:00.000Z');
INSERT INTO `ax` VALUES (NULL, '1233213', '2022/12/19 15:50:54');
INSERT INTO `ax` VALUES (NULL, '1233213', '2022/12/19 15:50:55');

-- ----------------------------
-- Table structure for axios_demo
-- ----------------------------
DROP TABLE IF EXISTS `axios_demo`;
CREATE TABLE `axios_demo`  (
  `user_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_croatian_ci NOT NULL,
  `user_password` varchar(20) CHARACTER SET utf8 COLLATE utf8_croatian_ci NOT NULL,
  `user_callnub` varchar(20) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `user_address` varchar(20) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `user_byQQ` varchar(20) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `user_city` varchar(50) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `user_pav` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_croatian_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of axios_demo
-- ----------------------------
INSERT INTO `axios_demo` VALUES ('wta123321', 'wta123321', '17853727205', '青岛市', '2220575685', '崂山区', 1, '用户0001', '管理员');
INSERT INTO `axios_demo` VALUES ('user1', '666666', '17853727205', '青岛市', '2220556852', '山东省青岛市青岛科技大学北苑', 2, '用户002', '普通用户');
INSERT INTO `axios_demo` VALUES ('zh123321', 'wta123321', '14306524241', '青岛市', '2745616132', '崂山区青岛科技大学北苑', 3, '用户003', '普通用户');
INSERT INTO `axios_demo` VALUES ('zxc', 'zxczxc', '12321426523', '济宁市', '2220654235', '曲阜', 4, '用户004', '普通用户');
INSERT INTO `axios_demo` VALUES ('user2', 'ppp222', '17832428284', 'beijing', '23123123', '锦江', 5, '用户005', '普通用户');
INSERT INTO `axios_demo` VALUES ('user3', 'wta123321', '12331234123', NULL, NULL, NULL, 6, '用户006', '普通用户');
INSERT INTO `axios_demo` VALUES ('wtagly', '111111', '17853727205', '山东省济宁市', '2220575685', '山东省济宁市金乡县', 8, '用户008', '普通用户');
INSERT INTO `axios_demo` VALUES ('admin', 'admin1', NULL, NULL, NULL, NULL, 11, NULL, '管理员');
INSERT INTO `axios_demo` VALUES ('admin1', 'admin1', NULL, NULL, NULL, NULL, 12, NULL, '管理员');
INSERT INTO `axios_demo` VALUES ('admin2', 'admin2', NULL, NULL, NULL, NULL, 13, NULL, '管理员');
INSERT INTO `axios_demo` VALUES ('user5', 'wta123321', NULL, NULL, NULL, NULL, 17, NULL, '普通用户');

-- ----------------------------
-- Table structure for jiyangkui
-- ----------------------------
DROP TABLE IF EXISTS `jiyangkui`;
CREATE TABLE `jiyangkui`  (
  `user_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_croatian_ci NOT NULL,
  `user_text` varchar(60) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `user_time` date NULL DEFAULT NULL,
  `user_type` varchar(20) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `user_day` int NULL DEFAULT NULL,
  `user_result` varchar(10) CHARACTER SET utf8 COLLATE utf8_croatian_ci NOT NULL,
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_other` varchar(20) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `user_address` varchar(20) CHARACTER SET utf8 COLLATE utf8_croatian_ci NOT NULL,
  `userB_callnub` varchar(20) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `userA_callnub` varchar(20) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `userA_byQQ` varchar(20) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `userB_byQQ` varchar(20) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `user_time1` datetime NULL DEFAULT NULL,
  `user_time2` datetime NULL DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = utf8 COLLATE = utf8_croatian_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of jiyangkui
-- ----------------------------
INSERT INTO `jiyangkui` VALUES ('zxc', '因工作原因,须将宠物寄养5天,', '2022-04-17', '柯基', 6, '已完成', 14, 'wta123321', '济宁市', '116515652', '12321426523', '2220654235', '16166565', '2022-01-20 21:54:33', NULL, 'http://localhost:3000/public/images/5.png');
INSERT INTO `jiyangkui` VALUES ('zxc', '工作原因,须将宠物寄养20天', '2022-04-18', '英短', 20, 'green', 15, 'zxc', '济宁市', '12321426523', '12321426523', '2220654235', '2220654235', '2022-01-20 21:54:33', NULL, 'http://localhost:3000/public/images/5.png');
INSERT INTO `jiyangkui` VALUES ('wta123321', '考试期间,安心学习.', '2022-04-17', '乌龟', 4, 'green', 16, 'zxc', '青岛市', '12321426523', '116515652', '16166565', '2220654235', '2022-01-20 21:54:33', NULL, 'http://localhost:3000/public/images/5.png');
INSERT INTO `jiyangkui` VALUES ('zxc', '工作原因', '2022-04-18', '金鱼', 11, 'blue', 17, 'wta123321', '济宁市', '17853727205', '12321426523', '2220654235', '2220575685', '2022-01-20 21:54:33', '2022-12-21 00:31:38', 'http://localhost:3000/public/images/5.png');
INSERT INTO `jiyangkui` VALUES ('zxc', '流浪猫好可怜,求好心人收留', '2022-04-19', '流浪猫', 0, 'green', 20, 'zxc', '青岛市', '12321426523', '18532414520', '33354210365', '2220654235', '2022-01-20 21:54:33', NULL, 'http://localhost:3000/public/images/9.png');
INSERT INTO `jiyangkui` VALUES ('zxc', '流浪狗好可怜', '2022-04-19', '流浪狗', 0, 'green', 21, 'user2', '济宁市', '17832428284', '14523414025', '2235142654', '23123123', '2022-01-20 21:54:33', NULL, 'http://localhost:3000/public/images/11.png');
INSERT INTO `jiyangkui` VALUES ('zxc', '流浪猫好可怜,有没有好心人收留一下', '2022-04-18', '流浪猫', 0, 'green', 22, 'zxc', '青岛市', '12321426523', '14523541254', '2223654125', '2220654235', '2022-01-20 21:54:33', NULL, 'http://localhost:3000/public/images/11.png');
INSERT INTO `jiyangkui` VALUES ('wtagly', '因工作问题,需要离开10天', '2022-12-20', '猫', 10, 'green', 24, 'wtagly', '山东省济宁市', '17853727205', '17853727205', '2220575685', '2220575685', '2022-01-20 21:54:33', NULL, 'http://localhost:3000/public/images/5.png');
INSERT INTO `jiyangkui` VALUES ('wta123321', '工作问题', '2022-12-22', '狗 ', 12, 'yellow', 27, NULL, '青岛市', NULL, '17853727205', '2220575685', NULL, '2022-12-20 21:54:33', NULL, 'http://localhost:3000/public/images/4.png');
INSERT INTO `jiyangkui` VALUES ('wta123321', '111', '2022-12-21', '流浪狗', 0, 'yellow', 28, NULL, '青岛市崂山区', NULL, '17853727205', '2220575685', NULL, '2022-12-21 13:36:29', NULL, 'http://localhost:3000/public/images/11.png');
INSERT INTO `jiyangkui` VALUES ('wta123321', '信息', '2022-12-21', '流浪猫', 0, 'yellow', 29, NULL, '青岛崂山', NULL, '17854437237', '2220575685', NULL, '2022-12-21 13:36:29', NULL, 'http://localhost:3000/public/images/9.png');
INSERT INTO `jiyangkui` VALUES ('wta123321', '好可怜', '2022-12-22', '流浪猫', 0, 'yellow', 30, NULL, '济宁市金乡县金水湖附近', '', '123123123', '123123123', NULL, '2022-12-22 20:17:22', NULL, 'http://localhost:3000/public/images/5.png');
INSERT INTO `jiyangkui` VALUES ('wta123321', '工作问题', '2022-12-24', ' 猫', 18, 'yellow', 31, NULL, '青岛市', NULL, '17853727205', '2220575685', NULL, '2022-12-22 21:44:56', NULL, 'http://localhost:3000/public/images/5.png');
INSERT INTO `jiyangkui` VALUES ('wta123321', '就在宿舍楼底下趴着', '2022-12-22', '流浪猫', 0, 'red', 33, NULL, '青岛科技大学北苑8号楼下草坪', NULL, '17854727323', '2223122333', NULL, '2022-12-22 23:07:26', NULL, 'http://localhost:3000/public/images/1671721644851.png');
INSERT INTO `jiyangkui` VALUES ('wta123321', '123123123213', '2022-12-24', ' 狗', 29, 'yellow', 34, NULL, '青岛市', NULL, '17853727205', '2220575685', NULL, '2022-12-23 10:08:50', NULL, 'http://localhost:3000/public/images/1671761368168.png');

SET FOREIGN_KEY_CHECKS = 1;
