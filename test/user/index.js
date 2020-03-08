module.exports = (expect, request, app) => {
  describe('ROUTER USER', () => {

    describe('List all user', () => {
      it('user ckeck keys', (done) => {
        request(app)
          .get('/api/all/user')
          .set('content-type', 'application/json')
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.body.success).equal(true);
            expect(...res.body.return).to.have.keys(['_id', 'name', 'last', 'email']);
            done();
          });
      });
    });
  });

  describe('find and update', () => {
    it('find', (done) => {
      request(app)
        .post('/api/find/user')
        .set('Accept-Language', 'br')
        .set('content-type', 'application/json')
        .send({ 'name': 'Alfon' })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body.success).equal(true);
          console.log(res.body.return)
          expect(...res.body.return).to.equal({
            _id: '5ddada8895d569efe81b34a4',
            name: 'Alfon',
            last: 'Aglaia',
            email: 'Alfon@Protestantism.com',
            status: false
          });
          done();
        });

      // console.log(user._id);
      // done();
    });


  });


};