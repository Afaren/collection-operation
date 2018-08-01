const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const chai = require('chai');

chai.use(deepEqualInAnyOrder);

const {expect} = chai;

const { fetchStudents, fetchCourses, fetchScores, fetchTeachers } = require("../data");


describe("JS 集合操作练习", () => {

    test("查询student中的所有记录的sname、Ssex和class列", () => {
        const expected = [
            { sname: '曾华', ssex: '男', class: 95033 },
            { sname: '匡明', ssex: '男', class: 95031 },
            { sname: '王丽', ssex: '女', class: 95033 },
            { sname: '李军', ssex: '男', class: 95033 },
            { sname: '王芳', ssex: '女', class: 95031 },
            { sname: '陆君', ssex: '男', class: 95031 }
        ];

       return fetchStudents().then(students => {
            const actual = students.map(student => ({
                    sname: student.sname,
                    ssex: student.ssex,
                    class: student.class
                }
            ));
            expect(actual).to.deep.equalInAnyOrder(expected);
        })
    });

    test("查询教师所有的单位中不重复的Depart列", () => {
        fail("unimplement");
    });

    test("查询Student的所有记录", () => {
        fail("unimplement");
    });

    test("查询Score中成绩在60到80之间的所有记录", () => {
        fail("unimplement");
    });

    test("查询Score中成绩为85，86或88的记录", () => {
        fail("unimplement");
    });

    test("查询Student中“95031”班或性别为“女”的同学记录", () => {
        fail("unimplement");
    });

    test("以Class降序查询Student的所有记录", () => {
        fail("unimplement");
    });

    test("以Cno升序、Degree降序查询Score的所有记录", () => {
        fail("unimplement");
    });

    test("查询“95031”班的学生人数", () => {
        fail("unimplement");
    });

    test("查询Score中的最高分的学生学号和课程号", () => {
        fail("unimplement");
    });

    test("查询‘3-105’号课程的平均分", () => {
        fail("unimplement");
    });

    test("查询Score中至少有5名学生选修的并以3开头的课程的平均分数", () => {
        fail("unimplement");
    });

    test("查询最低分大于70，最高分小于90的Sno列", () => {
        fail("unimplement");
    });

    test("查询所有学生的Sname、Cno和Degree列", () => {
        fail("unimplement");
    });

    test("查询所有学生的Sno、Cname和Degree列", () => {
        fail("unimplement");
    });

    test("查询所有学生的Sname、Cname和Degree列", () => {
        fail("unimplement");
    });

    test("查询“95033”班所选课程的平均分", () => {
        fail("unimplement");
    });

    test("现查询所有同学的Sno、Cno和rank列", () => {
        fail("unimplement");
    });

    test("查询选修“3-105”课程的成绩高于“109”号同学成绩的所有同学的记录", () => {
        fail("unimplement");
    });

    test("查询score中选学一门以上课程的同学中分数为非最高分成绩的记录", () => {
        fail("unimplement");
    });

    test("查询成绩高于学号为“109”、课程号为“3-105”的成绩的所有记录", () => {
        fail("unimplement");
    });

    test("查询和学号为108的同学同年出生的所有学生的Sno、Sname和Sbirthday列", () => {
        fail("unimplement");
    });

    test("查询“张旭“教师任课的学生成绩", () => {
        fail("unimplement");
    });

    test("查询选修某课程的同学人数多于5人的教师姓名", () => {
        fail("unimplement");
    });

    test("查询95033班和95031班全体学生的记录", () => {
        fail("unimplement");
    });

    test("查询存在有85分以上成绩的课程Cno.", () => {
        fail("unimplement");
    });

    test("查询出“计算机系“教师所教课程的成绩", () => {
        fail("unimplement");
    });

    test("查询“计算机系”与“电子工程系“不同职称的教师的Tname和Prof", () => {
        fail("unimplement");
    });

    test("查询选修编号为“3-105“课程且成绩至少高于选修编号为“3-245”的同学的Cno、Sno和Degree,并按Degree从高到低次序排序", () => {
        fail("unimplement");
    });

    test("查询选修编号为“3-105”且成绩高于选修编号为“3-245”课程的同学的Cno、Sno和Degree.", () => {
        fail("unimplement");
    });

    test("查询所有教师和同学的name、sex和birthday.", () => {
        fail("unimplement");
    });

    test("查询所有“女”教师和“女”同学的name、sex和birthday.", () => {
        fail("unimplement");
    });

    test("查询成绩比该课程平均成绩低的同学的成绩", () => {
        fail("unimplement");
    });

    test("查询所有任课教师的Tname和Depart.", () => {
        fail("unimplement");
    });

    test("查询所有未讲课的教师的Tname和Depart.", () => {
        fail("unimplement");
    });

    test("查询至少有2名男生的班号", () => {
        fail("unimplement");
    });

    test("查询Student中不姓“王”的同学记录", () => {
        fail("unimplement");
    });

    test("查询Student中每个学生的姓名和年龄", () => {
        fail("unimplement");
    });

    test("查询Student中最大和最小的Sbirthday日期值", () => {
        fail("unimplement");
    });

    test("以班号和年龄从大到小的顺序查询Student中的全部记录", () => {
        fail("unimplement");
    });

    test("查询“男”教师及其所上的课程", () => {
        fail("unimplement");
    });

    test("查询最高分同学的Sno、Cno和Degree列", () => {
        fail("unimplement");
    });

    test("查询和“李军”同性别的所有同学的Sname.", () => {
        fail("unimplement");
    });

    test("查询和“李军”同性别并同班的同学Sname.", () => {
        fail("unimplement");
    });

    test("查询所有选修“计算机导论”课程的“男”同学的成绩", () => {
        fail("unimplement");
    });

});
