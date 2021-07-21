import { SearchPipe } from './search.pipe';
import { Student } from '../student';

describe('SearchPipe', () => {
  const pipe = new SearchPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should return [] for falsies`, () => {
    // @ts-ignore
    const students = pipe.transform(null, 'peu importe');
    expect(students).toEqual([]);
    // @ts-ignore
    const studentsUndefined = pipe.transform(undefined, 'peu importe');
    expect(studentsUndefined).toEqual([]);
  });

  it(`should return [] for []`, () => {
    const students = pipe.transform([], 'peu importe');
    expect(students).toEqual([]);
  });

  it(`should return [] for non existing string`, () => {
    const s1 = new Student({nom: 'T1'});
    const s2 = new Student({nom: 'Test2'});
    const s3 = new Student({nom: 'TEST3'});
    const s4 = new Student({nom: 'TU 4'});
    const s5 = new Student({nom: 'test5'});
    const students = [s1, s2, s3, s4, s5];
    const result = pipe.transform(students, 'TEST UNITAIRE');
    expect(result).toEqual([]);
  });

  it(`should return All for T`, () => {
    const s1 = new Student({nom: 'T1'});
    const s2 = new Student({nom: 'Test2'});
    const s3 = new Student({nom: 'TEST3'});
    const s4 = new Student({nom: 'TU 4'});
    const s5 = new Student({nom: 'test5'});
    const students = [s1, s2, s3, s4, s5];
    const result = pipe.transform(students, 'T');
    expect(result).toEqual(students);
  });

  it(`should return All for test`, () => {
    const s1 = new Student({nom: 'T1'});
    const s2 = new Student({nom: 'Test2'});
    const s3 = new Student({nom: 'TEST3'});
    const s4 = new Student({nom: 'TU 4'});
    const s5 = new Student({nom: 'test5'});
    const students = [s1, s2, s3, s4, s5];
    const result = pipe.transform(students, 'test');
    expect(result).toEqual([s2, s3, s5]);
  });
});
