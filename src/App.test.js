import Game, {newGame} from './Game';


it('import without crashing', () => {
  expect(Game).toBeTruthy();
});

it('gives me a 0 score when I miss everything', () => {
  expect(new Game().score()).toBe(0);
});

it('can roll', () => {
  const game = new Game();
  game.roll(1);
});

it('rolling increase scoring', () => {
  const game = new Game();
  game.roll(1);
  expect(game.score()).toBe(1);
});

it('rolling accumulates scoring', () => {
  const game = new Game();
  game.roll(1);
  game.roll(3);
  expect(game.score()).toBe(4);
});

it('game has 10 frames', () => {
  const game = newGame();
  expect(game.length).toBe(10);
})

it('frames should have the right amount of scores',() => {
  const frames = newGame();
  // First nine frames have 2 scores 
  frames.slice(-1)
  .forEach(frame => expect(frames[0].length)
  .toBe(2));
  // Last frames has 3 scores
  expect(frames[9].length).toBe(3);
});