import SalaryStructure from "../models/salaryStructure.model.js";

/* Create/Update salary */
export const setSalary = async (req, res) => {
  const salary = await SalaryStructure.findOneAndUpdate(
    { employee: req.body.employee },
    req.body,
    { new: true, upsert: true }
  );

  res.json(salary);
};

/* Get salary for employee */
export const getSalary = async (req, res) => {
  const salary = await SalaryStructure.findOne({ employee: req.params.empId });
  res.json(salary);
};
