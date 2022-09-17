import Form from 'react-bootstrap/Form';

function SelectBasicExample({onChange}) {
  return (
    <Form.Select 
    aria-label="Default select example" 
    onChange={onChange}>
      <option>Open this select menu</option>
      <option value="images">Images</option>
      <option value="favoriteImages">Favorite images</option>
    </Form.Select>
  );
}

export default SelectBasicExample;