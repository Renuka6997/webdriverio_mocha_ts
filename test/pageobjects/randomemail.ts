class RandomEmail {

    randommail() {
        var emailValue = "abcdefghijklmnopqrstuvwxyz1234567890.";
        var email = "";
        var temp;
        for(var i=0;i<10;i++) {
            temp = emailValue.charAt(Math.round(emailValue.length*Math.random()));
            email = email+temp;
        }
        email = email + "@gmail.com";
        return email;
    }
}
export default new RandomEmail();