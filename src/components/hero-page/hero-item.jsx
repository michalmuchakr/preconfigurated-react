import React, {useState} from 'react';
import {
  Collapse,
  Button,
  ButtonGroup,
  CardBody,
  CardText,
  CardHeader,
  Card,
  Input,
} from 'reactstrap';

const heroItem = ({hero, index}) => {
  const [heroFirstName, setHeroFirstName] = useState(hero.first_name);
  const [heroDescription, setHeroDescription] = useState(hero.description);
  const [isUnderEdition, setIsUnderEdition] = useState(false);
  const animateClassname = `example-page__list__item animate animate-delay__${index}`;

  const editHeroName = (e) => {
    const {name, value} = e.target;
    setHeroFirstName(value);
  };

  const editHeroDescription = (e) => {
    const {name, value} = e.target;
    setHeroDescription(value);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card className={`${animateClassname} mb-2`}>
      <CardHeader className="d-flex align-items-center justify-content-between">
        {isUnderEdition ? (
          <Input
            className="hero-name__input"
            type="text"
            name={hero.id}
            value={heroFirstName}
            onChange={(e) => editHeroName(e)}
          />
        ) : (
          <span>{heroFirstName}</span>
        )}

        <ButtonGroup size="sm">
          <Button outline onClick={() => setIsUnderEdition(!isUnderEdition)}>
            {isUnderEdition ? 'Save' : 'Edit'}
          </Button>
          <Button outline onClick={toggle}>
            Toggle
          </Button>
        </ButtonGroup>
      </CardHeader>
      <Collapse isOpen={isOpen}>
        <CardBody>
          <CardText>
            {isUnderEdition ? (
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                value={heroDescription}
                onChange={(e) => editHeroDescription(e)}
              />
            ) : (
              <span>{heroDescription}</span>
            )}
          </CardText>
        </CardBody>
      </Collapse>
    </Card>
  );
};

export default heroItem;
