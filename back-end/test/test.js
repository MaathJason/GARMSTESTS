import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js'; 

describe('Carro API', () => {
   let createdCarroId = 3;
//   // Teste para criar um carro
//   it('Deve criar novo carro', (done) => {
//     request(app)
//       .post('/carros')
//       .send({ nome: 'Q5', marca: 'Audi', ano: 2024, placa: 'BKF-0921' })
//       .expect(201)
//       .end((err, res) => {
//         if (err) return done(err);
//         expect(res.body).to.have.property('carro', 'Q5');
//         createdCarroId = res.body.id; 
//         done();
//       });
//   });

  // Teste para obter todos os carros
  it('Deve puxar todos os carros', (done) => {
    request(app)
      .get('/carros')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  // Teste para obter um carro específico
  it('Deve pegar um carro pelo id', (done) => {
    request(app)
      .get(`/carros/${createdCarroId}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property('carro', 'Q5');
        done();
      });
  });


});