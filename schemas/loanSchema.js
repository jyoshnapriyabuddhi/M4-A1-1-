//Student name: Jyoshnapriya Buddhi
//Student ID: 1222488072
//Date Created: 10/08/2022
//Short Description: Project is based on how to use mongoose and different data types available in MongoDB and the usage of MongoDB Atlas

import mongoose from 'mongoose';
const { Schema } = mongoose;

const loanSchema = new Schema({
  customerName: String,
  phoneNumber: String,
  address: String,
  loanAmount: String,
  interest: String,
  loanTermYears : String,
  loanType: String,
  description: String,
});


