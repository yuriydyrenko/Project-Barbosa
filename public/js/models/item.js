var Item = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  scheduled_at: DS.attr('string'),
  location_name: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number')
});

module.exports = Item;

