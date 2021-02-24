import { describe, it } from 'mocha';
import request from 'supertest';
import { expect } from 'chai';
import app from '../index';

process.env.NODE_ENV = 'test';

describe('GET /api/todo', () => {
  it('should return an array of todos', async () => {
    const response = await request(app).get('/api/todo');
    expect(response.status).equal(200);
    expect(response.body).to.be.an('array');
  });

  it('should return an object of a todo', async () => {
    const response = await request(app).get('/api/todo/5');
    expect(response.status).equal(200);
    expect(response.body).to.be.an('object');
  });
  it('should return an error message', async () => {
    const response = await request(app).get('/api/todo/qw');
    expect(response.status).equal(500);
  });

  it('should return Todo not found', async () => {
    const response = await request(app).get('/api/todo/100000');
    expect(response.status).equal(404);
    expect(response.body.message).equal('Todo with specified ID not found');
  });
});

describe('POST /api/todo', () => {
  it('should add a new todo ', async () => {
    const response = await request(app).post('/api/todo/').send({
      title: 'test todo',
      description: 'a todo used in testing',
      priority: 'LOW',
    });
    expect(response.status).equal(201);
    expect(response.body).to.be.an('object');
    expect(response.body.message).equal('todo successfully created');
  });
  it('should return an error message', async () => {
    const response = await request(app).post('/api/todo/').send({
      title: '',
      description: '',
      priority: 'LOW',
    });
    expect(response.status).equal(400);
  });
  it('should return 500 when value entered is different from value in enum', async () => {
    const response = await request(app).post('/api/todo/').send({
      title: 'todo1',
      description: 'description of todo',
      priority: 'low',
    });
    expect(response.status).equal(500);
  });
});

describe('UPDATE /api/todo', () => {
  // it('should update existing todo', async () => {
  //   const response = await request(app).put('/api/todo/1').send({
  //     title: 'make unit test',
  //     description: 'add unit tests with a coverage of 60%',
  //     priority: 'MEDIUM',
  //   });
  //   expect(response.status).equal(200);
  // });

  it('should return Todo not found', async () => {
    const response = await request(app).put('/api/todo/1000').send({
      title: 'make unit test',
      description: 'add unit tests with a coverage of 60%',
      priority: 'LOW',
    });
    expect(response.status).equal(400);
  });
  it('should return 500 when value entered is different from value in enum', async () => {
    const response = await request(app).post('/api/todo/').send({
      title: 'todo1',
      description: 'description of todo',
      priority: 'low',
    });
    expect(response.status).equal(500);
  });
});

describe('DELETE /api/todo', () => {
  it('should return Todo not found', async () => {
    const response = await request(app).delete('/api/todo/1000');
    expect(response.status).equal(400);
  });

  it('should return error ', async () => {
    const response = await request(app).delete('/api/todo/qw');
    expect(response.status).equal(500);
  });
});
