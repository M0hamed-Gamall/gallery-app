import express from 'express';
import path from "path";
import config from "./config";

import indexRouter from './routes/index.route';

import './couldinary'
const app = config.app;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'assets')));

app.use('/', indexRouter);

config.runApp();