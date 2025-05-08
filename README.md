# Navicar API 🌐

Uma API RESTful para um marketplace de carros, construída com **Node.js**, **Express.js** e **TypeScript**. Hospedada na **Vercel**, ela gerencia anúncios de veículos, autenticação de usuários e upload de imagens via **Cloudinary**, com dados armazenados em **PostgreSQL** (Supabase). É um backend robusto e organizado, projetado para suportar aplicações dinâmicas.

![Node.js](https://img.shields.io/badge/Node.js-18-green) ![Express](https://img.shields.io/badge/Express.js-4-000) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## Sobre o Projeto

A Navicar API é o motor de um marketplace de carros, oferecendo endpoints rápidos e seguros para criar contas, gerenciar anúncios e acessar dados de usuários. Desenvolvida com **Prisma ORM** para interagir com **Supabase**, ela segue padrões RESTful, usa **JWT** para autenticação e integra **Multer** com **Cloudinary** para uploads. Configuração de **CORS** e tratamento de erros garantem uma integração confiável com frontends.

## Funcionalidades Principais

- **Gestão de Anúncios**: Crie, leia, atualize e delete anúncios de carros.
- **Autenticação Segura**: Registre usuários, faça login e acesse detalhes protegidos.
- **Upload de Imagens**: Adicione fotos aos anúncios com Cloudinary.
- **Acesso a Dados**: Liste todos os anúncios disponíveis com um único endpoint.

## Tecnologias que Movem a API

- **Node.js & Express.js**: Servidor leve e escalável.
- **TypeScript**: Código tipado e confiável.
- **Prisma ORM**: Gerenciamento simplificado do banco.
- **PostgreSQL (Supabase)**: Banco de dados relacional robusto.
- **JWT**: Autenticação segura e stateless.
- **Multer & Cloudinary**: Upload eficiente de imagens.
- **CORS**: Conexão segura com frontends.

## Decisões Técnicas

- Escolhi **Prisma ORM** com **Supabase** para um banco escalável e migrations fáceis.
- Usei **JWT** com middleware de autenticação para proteger rotas sensíveis.
- Integração com **Cloudinary** via **Multer** otimizou o upload de imagens.
- Configurei **CORS** cuidadosamente para suportar integrações cross-origin sem falhas.
