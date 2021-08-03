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

  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  function editHeroOnClick(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    setIsUnderEdition(!isUnderEdition);
  }

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
            name={`hero-name__${id}`}
            value={heroFirstName}
            onClick={preventPanelToggle}
            onChange={editHeroName}
          />
        ) : (
          <span className="hero-name__text">{heroFirstName}</span>
        )}

        <ButtonGroup size="sm">
          <Button outline onClick={editHeroOnClick}>
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
              onChange={editHeroDescriptionOnClick}
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
