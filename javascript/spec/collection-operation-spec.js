const { teachers, courses, scores, students } = require("../data");

describe("collection operation", function () {

    it("查询student表中的所有记录的sname、Ssex和class列。", function () {
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

});
