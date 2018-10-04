const world = 'hello';

export function hello(word: string = world) {
    return `Hello ${world}!`;
}