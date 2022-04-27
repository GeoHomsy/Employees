const express = require("express");
const router = express.Router();
const pool = require("../Database/dbConn");


router.get('/', async(req,res) => {
    try {
      
      const allEmployees = await pool.query('select * from "Employee"');
      res.json(allEmployees.rows);

    } catch (error) {
      console.error(error.message);
    }
});

router.post('/', async(req,res) => {
    try {
      const rbody = req.body;
      const newEmployee = await pool.query('insert into "Employee" ("FullName","Tel","id") values ($1,$2,$3) RETURNING *',[rbody.FullName,rbody.Tel,Math.random()]);
      res.json(newEmployee.rows[0]);
    } catch (error) {
      console.error(error.message);
    }
});

router.get('/:id',async(req,res) => {
  try {
    const reqParam = req.params.id
    const returnEmployee = await pool.query('select * from "Employee" where id = $1',[reqParam]);
    res.json(returnEmployee.rows);
  } catch (error) {
    console.error(error.message);
  }
});

router.put('/:id',async(req,res) => {
  try {
    const reqParam = req.params.id;
    const newFullName = req.body;
    const updateEmployee = await pool.query('update "Employee" set "FullName" = $1 where id = $2',[newFullName.FullName,reqParam]);
    res.json("Employee " + reqParam + " has been updated");
  } catch (error) {
    console.error(error.message);
  }
});

router.delete('/:id',async(req,res) => {
  try {
    const reqParam = req.params.id
    const delEmployee = await pool.query('delete from "Employee" where id = $1',[reqParam]);
    res.json("Employee " + reqParam + " has been deleted");
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;