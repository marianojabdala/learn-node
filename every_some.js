/**
var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]

    // `checkUsersValid` is the function you'll define
    var testAllValid = checkUsersValid(goodUsers)

    testAllValid([
      { id: 2 },
      { id: 1 }
    ])
    // => true

    testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ])

    module.exports = function checkUsersValid(goodUsers) {
        return function(submittedUsers) {
          return submittedUsers.every(function(submittedUser) {
            return goodUsers.some(function(goodUser) {
              return goodUser.id === submittedUser.id
            })
          })
        }
      }

**/

function checkUsersValid(goodUsers) {
      return function(submittedUsers) {
        if ( submittedUsers.length < goodUsers.length){
            return submittedUsers.some( function ( element ,index){
                return element.id == goodUsers[index].id;
            });
        }else{
            return submittedUsers.every( function ( element ,index){
                return element.id == goodUsers[index].id;
            });
        }
      };
    }

    module.exports = checkUsersValid
