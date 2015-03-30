(function() {
    'use strict';

    angular
        .module("ArulInstitute.courses")
        .factory('Courses', Courses);

    function Courses() {
        var service = {
            getCourses: getCourses
        };

        return service;

        function getCourses() {
            var courses = [{

                title: "Information for +2 Students",
                hasAdmissionCriteria: true,
                admissionCriteria: "Admission criteria for our coaching classes is based on the tenth standard public marks",
                batches: [{

                    location: "Pallavaram",
                    batchTimings: [{
                        name: "Batch 1",
                        timeStart: "6.00 am",
                        timeEnd: "8.00 am",
                        forGirlsOnly: false
                    }, {
                        name: "Batch 2",
                        timeStart: "5.15 pm",
                        timeEnd: "7.15 pm",
                        forGirlsOnly: true
                    }, {
                        name: "Batch 3",
                        timeStart: "7.30 pm",
                        timeEnd: "9.30 pm",
                        forGirlsOnly: false
                    }]
                }, {

                    location: "East Tambaram",
                    batchTimings: [{
                        name: "Batch 4",
                        timeStart: "6.00 am",
                        timeEnd: "8.00 am",
                        forGirlsOnly: false
                    }, {
                        name: "Batch 5",
                        timeStart: "5.15 pm",
                        timeEnd: "7.15 pm",
                        forGirlsOnly: true
                    }, {
                        name: "Batch 6",
                        timeStart: "7.30 pm",
                        timeEnd: "9.30 pm",
                        forGirlsOnly: false
                    }],
                }],
                hasConsession: true,
                consessionCriteria: "Concession in fees would be given based on the percentage of marks scored by the student in the first 20 weekly tests.",
                consessionOffered: [{
                    percentageRange: "95% & above",
                    offeredPrice: 4000
                }, {
                    percentageRange: "90% to 94%",
                    offeredPrice: 4000
                }, {
                    percentageRange: "85% to 89%",
                    offeredPrice: 2000
                }, {
                    percentageRange: "80% to 84%",
                    offeredPrice: 1000
                }],
                importantDates: [{
                    title: "Classes commence",
                    note: "Any change in the date of commencement of classes would be intimated by SMS",
                    date: function() {
                        return getDate(15, 4)
                    },
                }, {
                    title: "Last date for Application submission",
                    note: "Admissions will be closed earlier if sufficient number of students have enrolled",
                    date: function() {
                        return getDate(12, 4)
                    },
                }],
            }, {
                title: "Information for +1 Students",
                hasAdmissionCriteria: true,
                admissionCriteria: "Admission criteria for our coaching classes is based on the tenth standard public marks",
                batches: [{

                    location: "Pallavaram",
                    batchTimings: [{
                        name: "Batch 1",
                        timeStart: "6.00 am",
                        timeEnd: "7.30 am",
                        forGirlsOnly: false
                    }]
                }, {

                    location: "East Tambaram",
                    batchTimings: [{
                        name: "Batch 2",
                        timeStart: "5.30 am",
                        timeEnd: "7.00 am",
                        forGirlsOnly: false
                    }],
                }],
                hasConsession: true,
                consessionCriteria: "Concession in fees would be given based on the percentage of marks scored by the student in the first 20 weekly tests.",
                consessionOffered: [{
                    percentageRange: "95% & above",
                    offeredPrice: 1200
                }, {
                    percentageRange: "90% to 94%",
                    offeredPrice: 1000
                }, {
                    percentageRange: "85% to 89%",
                    offeredPrice: 800
                }, {
                    percentageRange: "80% to 84%",
                    offeredPrice: 600
                }],
                importantDates: [{
                    title: "Classes commence",
                    note: "Any change in the date of commencement of classes would be intimated by SMS",
                    date: function() {
                        return getDate(17, 6)
                    },
                }, {
                    title: "Last date for application submission",
                    note: "Admissions will be closed earlier if sufficient number of students have enrolled",
                    date: function() {
                        return getDate(14, 6)
                    }
                }],
            }];

            return courses;

            function getDate(date, month) {
                var day = new Date(),
                    today = new Date(),
                    monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ];

                day.setDate(date);
                day.setMonth(month);                

                if (day < today) {
                    day.setYear(day.getFullYear() + 1);
                }

                return {
                    date: day.getDate(),
                    month: monthNames[day.getMonth()],
                    year: day.getFullYear(),
                    ordinal: ([, 'st', 'nd', 'rd'][/1?.$/.exec(day.getDate())] || 'th')
                }
            }
        }
    }
})();