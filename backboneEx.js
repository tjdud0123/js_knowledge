// 참고 - https://gist.github.com/daniel-234/d6ed0cf947a6f42fac073bf01a35af47

// Model
var Food = Backbone.Model.extend({
    idAttribute: '_id',
    defaults: {
        brandName: '',
        itemName: '',
        itemCalories: '',
        itemWeight: ''
    }
});

// Collection
var FoodList = Backbone.Collection.extend({
    model: app.Food,
    url: 'https://api.nutritionix.com/v1_1/search',
    
    parse: function(response) {
        // console.log(response);
  
        let newData = []
        _.each(response.hits, function(item, index) {

            member[_id] = index;
            // Set the defaul attributes.
            member[brandName] = item.fields.brand_name;
            member[itemName] = item.fields.item_name;
            member[itemCalories] = item.fields.nf_calories;
            member[itemWeight] = item.fields.nf_serving_weight_grams;

            newData.push(member);
        });

        return newData  //this.models;
    }
});
