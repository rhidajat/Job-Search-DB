var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var statusSchema = new Schema({
    date: Date,
    status: {
        type: String,
        enum: ['Started Application', 'Submitted Application', 'Rejected', 'Received Interests',
            'Initial Call', 'Phone Screen', 'Onsite Interview', 'Received Job Offer',
            'Accepted Job Offer', 'Declined Job Offer']
    },
    contactPerson: String,
    comment: String
});

var JobApplicationSchema = new Schema({
    companyName: String,
    jobTitle: String,
    jobDescription: String,
    city: String,
    region: String,
    country: String,
    url: String,
    comment: String,
    progress: [statusSchema]
});

module.exports = mongoose.model('JobApplication', JobApplicationSchema);