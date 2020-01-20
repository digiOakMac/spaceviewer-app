import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import shortid from 'shortid'
import axios from 'axios'
import moment from 'moment'
import { Button, Header, Image, Label, Modal, Table } from 'semantic-ui-react'
import './App.css';

const MainContainer = styled.div`
  padding: 3rem;
`

const ScrollableDiv = styled.div`
  max-height: 200px;
  overflow-y: auto;
`

const ImageWrapper = (props) => {
  const { item } = props
  return (
    <Modal trigger={<Image src={item.previewUrl} rounded size='small'></Image>}>
    <Modal.Header>{item.title}</Modal.Header>
    <Modal.Content image>
      <Image size='large' rounded src={item.previewUrl} />
      <Modal.Description>
        <Header>ID</Header>
        <p>{ item.nasaId }</p>
        <Header>Source</Header>
        <p>{ item.center }</p>
        <Header>Date created</Header>
        <p>{ moment(item.dateCreated).format("M/DD/YYYY") }&nbsp;&nbsp;({moment(item.dateCreated).fromNow()})</p>
        <Header>Description</Header>
        <ScrollableDiv>
          <p>
            {item.longDescription}
          </p>
        </ScrollableDiv>
      </Modal.Description>
    </Modal.Content>
  </Modal>
  )
}

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get('https://images-assets.nasa.gov/popular.json')
      const data = response.data.collection.items.map(item => (
        {
          title: item.data[0].title,
          keyWords: item.data[0].keywords,
          shortDescription: item.data[0].description_508,
          longDescription: item.data[0].description,
          previewUrl: item.links[0] && item.links[0].href,
          center: item.data[0].center,
          nasaId: item.data[0].nasa_id,
          dateCreated: item.data[0].date_created
        }
      ))
      setData(data)
    })();
  }, [])

  return (
    <div className="App">
      <MainContainer>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='2'>NASA Images</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { data.map(item => (
              <Table.Row key={shortid.generate()}>
                <Table.Cell style={{ verticalAlign: 'top' }}>
                  <ImageWrapper item={item}></ImageWrapper>
                </Table.Cell>
                <Table.Cell style={{ verticalAlign: 'top' }}>
                  <h3>{ item.title }</h3>
                  { item.keyWords && item.keyWords.map(keyWord => (
                    <Label key={shortid.generate()}>{ keyWord }</Label>
                  )) }
                  <br/>
                  <br/>
                  <p> { item.shortDescription }</p>
                </Table.Cell>
              </Table.Row>
            )) }
          </Table.Body>
        </Table>
      </MainContainer>
    </div>
  );
}

export default App;
