var DOMAIN = "https://i.jandan.net/"
var URL = DOMAIN + "?oxwlxojflwblxbsapi=jandan."

module.exports = {
  getPicURL: function (pageNum) {
    return URL + "get_pic_comments&page=" + pageNum;
  },
  getVoteURL: function (){
    return DOMAIN+"jandan-vote.php";
  },
  getDuanURL: function (pageNum) {
    return URL + "get_duan_comments&page=" + pageNum;
  },
  getTucaoURL:function (id){
    return "https://jandan.net/tucao/" + id
  },
  getMeiziURL:function(pageNum){
    return URL + "get_ooxx_comments&page=" + pageNum;
  }
}
