import * as React from 'react';
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
import 'draft-js/dist/Draft.css';

const heroItem = ({hero, index}) => {
  const [heroFirstName, setHeroFirstName] = React.useState(hero.first_name);
  const [heroDescription, setHeroDescription] = React.useState(
    hero.description,
  );
  const [isUnderEdition, setIsUnderEdition] = React.useState(false);
  const animateClassname = `hero-page__list__item animate animate-delay__${index}`;

  const preventPanelToggle = (e) => {
    e.stopPropagation();
  };

  const editHeroName = (e) => {
    e.stopPropagation();
    const {value} = e.target;
    setHeroFirstName(value);
  };

  const editHeroDescription = (e) => {
    e.stopPropagation();
    setHeroDescription(e.target.value);
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const editHero = (e) => {
    e.stopPropagation();
    setIsUnderEdition(!isUnderEdition);
  };

  return (
    <Card className={`${animateClassname} mb-2`}>
      <CardHeader
        className="d-flex align-items-center justify-content-between"
        onClick={toggle}
      >
        {isUnderEdition ? (
          <Input
            className="hero-name__input"
            type="text"
            name={hero.id}
            value={heroFirstName}
            onClick={preventPanelToggle}
            onChange={editHeroName}
          />
        ) : (
          <span className="hero-name__text">{heroFirstName}</span>
        )}

        <ButtonGroup size="sm">
          <Button outline onClick={editHero}>
            {isUnderEdition ? 'save' : 'edit'}
          </Button>
        </ButtonGroup>
      </CardHeader>
      <Collapse isOpen={isOpen}>
        <CardBody className="hero__card-body">
          {isUnderEdition ? (
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              value={heroDescription}
              onClick={preventPanelToggle}
              onChange={editHeroDescription}
              className="hero__text-area"
            />
          ) : (
            <CardText className="hero__card-text">{heroDescription}</CardText>
          )}
        </CardBody>
      </Collapse>
    </Card>
  );
};

export default heroItem;
