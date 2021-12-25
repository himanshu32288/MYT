const Venue = require('../models/venue');


const createNewVenue = async (req, res, next) => {
    const { name, pitchtype, pitchfavour, team_batting_first_wins, avgscore } = req.body;
    let existingPitch;
    try {
        existingPitch = await Venue.findOne({ name: name })
    } catch (err) {
        return next("Error while loading venue");
    }
    if (existingPitch) {
        return next("Pitch exist update instead")
    }
    const createdVenue = new Venue({
        name,
        pitchtype,
        pitchfavour,
        team_batting_first_wins,
        avgscore
    })
    try {
        await createdVenue.save();
    } catch (err) {
        const error = "Not able to save ";
        return next(error);
    }
    res.status(201).json({
        name,
        pitchtype,
        pitchfavour,
        team_batting_first_wins,
        avgscore
    });

}
const updateVenue = async (req, res, next) => {
    const { name, pitchtype, pitchfavour, team_batting_first_wins, avgscore } = req.body;
    const venueId = req.params.id;
    let venue;
    try {
        venue = await Venue.findById(venueId);
    } catch (err) {
        return next("error");
    }
    if (!venue)
        return next("Couldn't find Venue by provided Id");
    venue.name = name;
    venue.pitchtype = pitchtype;
    venue.pitchfavour = pitchfavour;
    venue.team_batting_first_wins = team_batting_first_wins;
    venue.avgscore = avgscore;
    venue.save();
    res.status(200).json(venue);
}

const getVenueByID = async (req, res, next) => {
    const venueId = req.params.id;
    let venue;
    try {
        venue = await Venue.findById(venueId);
    } catch (err) {
        return next(err);
    }
    if (!venue)
        return next("Couldn't find Venue by provided Id");

    res.status(200).json(venue);
}
exports.createNewVenue = createNewVenue;
exports.updateVenue = updateVenue;
exports.getVenueByID = getVenueByID;