Meteor.publish('courses', function () {
    return Courses.find();
});

Meteor.publish('publishedCourses', function () {
    return Courses.find({"published": "Published"});
});

Meteor.publish('taggedCourses', function (tag) {
    return Courses.find({'keywords': tag});
});

Meteor.publish('singleCourse', function (id) {
    return Courses.find(id);
});
