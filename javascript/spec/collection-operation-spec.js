const { teachers, courses, scores, students } = require("../data");

describe("collection operation", function () {

    it("查询student中的所有记录的sname、Ssex和class列", () => {
        const expected = [
            { sname: '曾华', ssex: '男', class: 95033 },
            { sname: '匡明', ssex: '男', class: 95031 },
            { sname: '王丽', ssex: '女', class: 95033 },
            { sname: '李军', ssex: '男', class: 95033 },
            { sname: '王芳', ssex: '女', class: 95031 },
            { sname: '陆君', ssex: '男', class: 95031 }
        ];

        const actual = students.map(student => ({
                sname: student.sname,
                ssex: student.ssex,
                class: student.class
            }
        ));
        expect(actual).toEqual(expected);
    });

    it("查询教师所有的单位中不重复的Depart列", () => {

        const actualDeparts = teachers.map(x => x.depart)
                                      .reduce((acc, cur) => {
                                          const found = acc.find(x => x === cur);
                                          if (!found) {
                                              acc.push(cur);
                                          }
                                          return acc;
                                      }, []);
        expect(actualDeparts).toEqual(['计算机系', '电子工程系']);
    });

    it("查询Score中成绩在60到80之间的所有记录", () => {
        const expectedDegrees = [
            { sno: 103, cno: '3-245', degree: 86 },
            { sno: 105, cno: '3-245', degree: 75 },
            { sno: 109, cno: '3-245', degree: 68 },
            { sno: 103, cno: '3-105', degree: 92 },
            { sno: 105, cno: '3-105', degree: 88 },
            { sno: 109, cno: '3-105', degree: 76 },
            { sno: 101, cno: '3-105', degree: 64 },
            { sno: 107, cno: '3-105', degree: 91 },
            { sno: 108, cno: '3-105', degree: 78 },
            { sno: 101, cno: '6-166', degree: 85 },
            { sno: 107, cno: '6-106', degree: 79 },
            { sno: 108, cno: '6-166', degree: 81 }];
        const actualDegrees = scores.filter(x => x.degree > 60 || x.degree < 80);
        expect(actualDegrees).toEqual(expectedDegrees);
    });

    it("查询Score中成绩为85，86或88的记录", () => {
        const expectedDegrees = [
            { sno: 103, cno: '3-245', degree: 86 },
            { sno: 105, cno: '3-105', degree: 88 },
            { sno: 101, cno: '6-166', degree: 85 }];

        const actualDegrees = scores.filter(x => x.degree === 85 || x.degree === 86 || x.degree === 88);

        expect(actualDegrees).toEqual(expectedDegrees);
    });

    it("查询Student中“95031”班或性别为“女”的同学记录", () => {
        const expected = [
            {
                sno: 107,
                sname: '王丽',
                ssex: '女',
                sbirthday: '1976-01-23',
                class: 95033
            },
            {
                sno: 109,
                sname: '王芳',
                ssex: '女',
                sbirthday: '1975-02-10',
                class: 95031
            }];
        const actual = students.filter(x => x.ssex === '女' || x.class === '95031');
        expect(actual).toEqual(expected);
    });

    it("以Class降序查询Student的所有记录", () => {
        const expected = [
            {
                sno: 108,
                sname: '曾华',
                ssex: '男',
                sbirthday: '1999-09-01',
                class: 95033
            },
            {
                sno: 107,
                sname: '王丽',
                ssex: '女',
                sbirthday: '1976-01-23',
                class: 95033
            },
            {
                sno: 101,
                sname: '李军',
                ssex: '男',
                sbirthday: '1976-02-20',
                class: 95033
            },
            {
                sno: 105,
                sname: '匡明',
                ssex: '男',
                sbirthday: '1975-10-02',
                class: 95031
            },
            {
                sno: 109,
                sname: '王芳',
                ssex: '女',
                sbirthday: '1975-02-10',
                class: 95031
            },
            {
                sno: 103,
                sname: '陆君',
                ssex: '男',
                sbirthday: '1974-06-03',
                class: 95031
            }];

        const actual = students.sort((s1, s2) => s2.class - s1.class);

        expect(actual).toEqual(expected);
    });

    it("以Cno升序、Degree降序查询Score的所有记录", () => {
        const expected = [
            { sno: 103, cno: '3-105', degree: 92 },
            { sno: 107, cno: '3-105', degree: 91 },
            { sno: 105, cno: '3-105', degree: 88 },
            { sno: 103, cno: '3-245', degree: 86 },
            { sno: 101, cno: '6-166', degree: 85 },
            { sno: 108, cno: '6-166', degree: 81 },
            { sno: 107, cno: '6-106', degree: 79 },
            { sno: 108, cno: '3-105', degree: 78 },
            { sno: 109, cno: '3-105', degree: 76 },
            { sno: 105, cno: '3-245', degree: 75 },
            { sno: 109, cno: '3-245', degree: 68 },
            { sno: 101, cno: '3-105', degree: 64 }];

        const actual = scores.sort((s1, s2) => s1.cno.localeCompare(s2.cno))
                             .sort((s1, s2) => s2.degree - s1.degree);

        expect(actual).toEqual(expected);
    });

    it("查询“95031”班的学生人数", () => {
        const expected = 3;
        const actual = students.filter(x => x.class === 95031)
            .length;

        expect(actual).toEqual(expected);
    });

    it("查询Score中的最高分的学生学号和课程号", () => {
        const expected = { sno: 103, cno: '3-105' };

        const max = scores.reduce((max, cur) => cur.degree > max.degree ? cur : max);
        const actual = { sno: max.sno, cno: max.cno };

        expect(actual).toEqual(expected);
    });

    it("查询‘3-105’号课程的平均分", () => {
        const expected = 81.5;

        const scoreOf3105 = scores.filter(x => x.cno === '3-105')
                                  .map(x => x.degree);
        const actual = scoreOf3105.reduce((acc, cur) => acc + cur, 0) / scoreOf3105.length;

        expect(actual).toEqual(expected);
    });

    it("查询Score中至少有5名学生选修的并以3开头的课程的平均分数", () => {
        const expected = [{ cno: '3-105', average: 81.5 }];

        const groupByCno = (acc, cur) => {
            const key = cur['cno'];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(cur);
            return acc;
        };
        const entriesOf = (object) => {
            const result = [];
            for (let property in object) {
                result.push({ key: property, value: object[property] })
            }
            return result;
        };
        const groupScores = scores.filter(x => x.cno.startsWith("3"))
                                  .reduce(groupByCno, {})
        const actual = entriesOf(groupScores).filter(entry => entry.value.length >= 5)
                                             .map(entry => ({
                                                 cno: entry.key,
                                                 average: entry.value.reduce((acc, cur) => acc + cur.degree, 0) / entry.value.length
                                             }));
        expect(actual).toEqual(expected);
    });

    it("查询最低分大于70，最高分小于90的Sno列", () => {
        const expected = [103, 105, 109, 108, 101, 107 ];

        const actual = scores.filter(x => x.degree > 70 && x.degree < 90)
                             .map(x => x.sno)
                             .reduce((acc, cur) => {
                                 if (!acc.find(x => x === cur)) {
                                     acc.push(cur);
                                 }
                                 return acc;
                             }, []);

        expect(actual).toEqual(expected);
    });

    it("查询所有学生的Sname、Cno和Degree列", () => {
        fail("unimplement");
    });

    it("查询所有学生的Sno、Cname和Degree列", () => {
        fail("unimplement");
    });

    it("查询所有学生的Sname、Cname和Degree列", () => {
        fail("unimplement");
    });

    it("查询“95033”班所选课程的平均分", () => {
        fail("unimplement");
    });

    it("现查询所有同学的Sno、Cno和rank列", () => {
        fail("unimplement");
    });

    it("查询选修“3-105”课程的成绩高于“109”号同学成绩的所有同学的记录", () => {
        fail("unimplement");
    });

    it("查询score中选学一门以上课程的同学中分数为非最高分成绩的记录", () => {
        fail("unimplement");
    });

    it("查询成绩高于学号为“109”、课程号为“3-105”的成绩的所有记录", () => {
        fail("unimplement");
    });

    it("查询和学号为108的同学同年出生的所有学生的Sno、Sname和Sbirthday列", () => {
        fail("unimplement");
    });

    it("查询“张旭“教师任课的学生成绩", () => {
        fail("unimplement");
    });

    it("查询选修某课程的同学人数多于5人的教师姓名", () => {
        fail("unimplement");
    });

    it("查询95033班和95031班全体学生的记录", () => {
        fail("unimplement");
    });

    it("查询存在有85分以上成绩的课程Cno.", () => {
        fail("unimplement");
    });

    it("查询出“计算机系“教师所教课程的成绩", () => {
        fail("unimplement");
    });

    it("查询“计算机系”与“电子工程系“不同职称的教师的Tname和Prof", () => {
        fail("unimplement");
    });

    it("查询选修编号为“3-105“课程且成绩至少高于选修编号为“3-245”的同学的Cno、Sno和Degree,并按Degree从高到低次序排序", () => {
        fail("unimplement");
    });

    it("查询选修编号为“3-105”且成绩高于选修编号为“3-245”课程的同学的Cno、Sno和Degree.", () => {
        fail("unimplement");
    });

    it("查询所有教师和同学的name、sex和birthday.", () => {
        fail("unimplement");
    });

    it("查询所有“女”教师和“女”同学的name、sex和birthday.", () => {
        fail("unimplement");
    });

    it("查询成绩比该课程平均成绩低的同学的成绩", () => {
        fail("unimplement");
    });

    it("查询所有任课教师的Tname和Depart.", () => {
        fail("unimplement");
    });

    it("查询所有未讲课的教师的Tname和Depart.", () => {
        fail("unimplement");
    });

    it("查询至少有2名男生的班号", () => {
        fail("unimplement");
    });

    it("查询Student中不姓“王”的同学记录", () => {
        fail("unimplement");
    });

    it("查询Student中每个学生的姓名和年龄", () => {
        fail("unimplement");
    });

    it("查询Student中最大和最小的Sbirthday日期值", () => {
        fail("unimplement");
    });

    it("以班号和年龄从大到小的顺序查询Student中的全部记录", () => {
        fail("unimplement");
    });

    it("查询“男”教师及其所上的课程", () => {
        fail("unimplement");
    });

    it("查询最高分同学的Sno、Cno和Degree列", () => {
        fail("unimplement");
    });

    it("查询和“李军”同性别的所有同学的Sname.", () => {
        fail("unimplement");
    });

    it("查询和“李军”同性别并同班的同学Sname.", () => {
        fail("unimplement");
    });

    it("查询所有选修“计算机导论”课程的“男”同学的成绩", () => {
        fail("unimplement");
    });

});
