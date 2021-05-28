
import { updateJson } from '../../../utils/updateJson';
import people from '../../../data.json';

export default async function handler(req, res) {
  const { method } = req;
  if (method === 'POST') {
    const id = +people[people.length - 1].id + 1;
    req.body.id = '' + id;
    people.push(req.body);
    await updateJson('data.json', people);
    res.status(200).json(people)
    return;
  }
  res.status(200).json(people)
}
