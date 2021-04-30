"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const MailTemplateProvider_1 = require("../../providers/MailTemplateProvider");
const UsersRepository_1 = require("../../repositories/UsersRepository");
tsyringe_1.container.registerSingleton('UsersRepository', UsersRepository_1.UsersRepository);
tsyringe_1.container.registerSingleton('MailTemplateProvider', MailTemplateProvider_1.MailTemplateProvider);
