import { getShortName, getTeamId } from './team-utils';

describe('team utils', () => {
  describe('getShortName', () => {
    it('should trim the \'FC\' from the team name', () => {
      const testName = 'The Team FC';
      const results = getShortName(testName);

      expect(results).toBe('The Team');
    });

    it('should leave name unchanged if it does not end with \'FC\'', () => {
      const testName = 'The Team';
      const results = getShortName(testName);

      expect(results).toBe(testName);
    });
  });

  describe('getTeamId', () => {
    it('should', () => {
      const teamId = 103;
      const endpoint = `api/football/team/${teamId}`;
      const id = getTeamId(endpoint);

      expect(id).toBe(teamId);
    });
  });
});
