import { shortenText } from '../utils/functions';
import { wordCount, attachUserName } from '../../server/utils';
import { shortText, longText, posts, users } from './__data__/testData';

test('shortenText should not alter a string with less than 100 characters', () => {
    let shortLen = shortText.length;
    expect(shortenText(shortText)).toHaveLength(shortLen);
});

test('shortenText should cut off extra characters after 100 and add three periods', () => {
    const shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
});

test('wordCount should count the number of words in an array of posts', () => {
    expect(wordCount(posts)).toBe(233);
});

//   test( ' attachUserName: the first post returned has a property displayName', () => {
//       let result = attachUserName(users,posts);
//       expect(result[0].displayName).toBeTruthy();
//   });

test(' attachUserName: the first post returned has a property displayName', () => {
    let result = attachUserName(users, posts);
    expect(result[0]).toHaveProperty('displayName');
});


