let choreList = [
  "Washing dishes",
  "Cleaning the kitchen",
  "Vacuuming",
  "Laundry",
];

module.exports = {
  getchoreList: (req, res) => {
    console.log("gchlist HIT");

    res.status(200).send(choreList);
  },

  postChorename: (req, res) => {
    console.log("postchorename HIT");
    choreList.push(req.body.choreName);

    res.status(200).send(choreList);
  },

  removeChore: (req, res) => {
    console.log("removeChore HIT");
    let deletedname = req.params.name;
    const index = choreList.findIndex(
      (chore) => deletedname.toLowerCase() === chore.toLowerCase()
    );
    if (index > -1) {
      choreList.splice(index, 1);
      res.status(200).send(choreList);
    } else {
      res.status(400).send("Not found in Chore list, try again!");
    }
  },
};
