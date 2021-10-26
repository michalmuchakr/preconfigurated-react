import * as React from 'react';
import {Accordion, Button, ButtonGroup, Card, Form} from 'react-bootstrap';
import HeroItemType from '../../types/hero/hero-item-type';

export const HeroItem = ({
  id,
  orderNumber,
  firstName,
  description,
}: HeroItemType): JSX.Element => {
  const [heroFirstName, setHeroFirstName] = React.useState(firstName);
  const [heroDescription, setHeroDescription] = React.useState(description);
  const [isUnderEdition, setIsUnderEdition] = React.useState(false);
  const animateClassname = `hero-page__list__item animate animate-delay__${orderNumber}`;

  const preventPanelToggle = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  function editHeroName(e: React.ChangeEvent<HTMLInputElement>) {
    e.stopPropagation();
    const {value} = e.target;
    setHeroFirstName(value);
  }

  function editHeroDescriptionOnClick(e: React.ChangeEvent<HTMLInputElement>) {
    e.stopPropagation();
    setHeroDescription(e.target.value);
  }

  function editHeroOnClick(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    setIsUnderEdition(!isUnderEdition);
  }

  return (
    <Card className={`${animateClassname} mb-2`}>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {isUnderEdition ? (
              <Form.Control
                className="hero-name__input"
                type="text"
                name={`hero-name__${id}`}
                value={heroFirstName}
                onClick={preventPanelToggle}
                onChange={editHeroName}
              />
            ) : (
              <span className="hero-name__text">{heroFirstName}</span>
            )}

            <ButtonGroup size="sm" className="edit-save__btn">
              <Button onClick={editHeroOnClick}>
                {isUnderEdition ? 'save' : 'edit'}
              </Button>
            </ButtonGroup>
          </Accordion.Header>

          <Accordion.Body>
            {isUnderEdition ? (
              <Form.Control
                type="textarea"
                name="text"
                id="exampleText"
                value={heroDescription}
                onClick={preventPanelToggle}
                onChange={editHeroDescriptionOnClick}
                className="hero__text-area"
              />
            ) : (
              <Card.Text className="hero__card-text">
                {heroDescription}
              </Card.Text>
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Card>
  );
};
