/* eslint-disable import/no-named-as-default */
import dbClient from '../../utils/db';

describe('+ DBClient utility', () => {
  before(function (done) {
    this.timeout(10000);
    Promise.all([dbClient.usersCollection(), dbClient.filesCollection()])
      .then(([usersCollection, filesCollection]) => {
        Promise.all([usersCollection.deleteMany({}), filesCollection.deleteMany({})])
          .then(() => done())
          .catch((deleteErr) => done(deleteErr));
      }).catch((connectErr) => done(connectErr));
  });

  it('+ Client is alive', () => {
    expect(dbClient.isAlive()).to.equal(true);
  });
