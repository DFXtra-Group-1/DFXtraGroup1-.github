export default class GraduateModel {
    constructor(_id, uuid, available, firstName, lastName, dateOfBirth, gender, nationality, personality, phone, linkedIn, gitHub, personalEmail, digitalFuturesEmail, degrees, schoolQualifications, workExperience, certificatesAndAwards, portfolio, personalSummary, cohort, learningPath, trainer, trainingFinishDate) {
        this._id = _id;
        this.uuid = uuid
        this.available = available;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.nationality = nationality;
        this.personality = personality;
        this.phone = phone;
        this.linkedIn = linkedIn;
        this.gitHub = gitHub;
        this.personalEmail = personalEmail;
        this.digitalFuturesEmail = digitalFuturesEmail;
        this.degrees = degrees;
        this.schoolQualifications = schoolQualifications;
        this.workExperience = workExperience;
        this.certificatesAndAwards = certificatesAndAwards;
        this.portfolio = portfolio;
        this.personalSummary = personalSummary;
        this.cohort = cohort;
        this.learningPath = learningPath;
        this.trainer = trainer;
        this.trainingFinishDate = trainingFinishDate;
    }
}