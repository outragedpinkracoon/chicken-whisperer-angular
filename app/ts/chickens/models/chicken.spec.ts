import { Chicken } from './chicken';
describe('Chicken', () => {
  it('has name 1', () => {
    let chicken: Chicken = {id: 1, name: 'Super Cat', speed: 2, scare:1};
    expect(chicken.name).toEqual('Super Cat');
  });
  it('has id 2', () => {
    let chicken: Chicken = {id: 1, name: 'Super Cat', speed:3, scare:2};
    expect(chicken.id).toEqual(1);
  });
});