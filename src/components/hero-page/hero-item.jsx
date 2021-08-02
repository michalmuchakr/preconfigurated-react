import {useState} from 'react';
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
  const [heroFirstName, setHeroFirstName] = useState(hero.first_name);
  const [heroDescription, setHeroDescription] = useState(hero.description);
  const [isUnderEdition, setIsUnderEdition] = useState(false);
  const animateClassname = `hero-page__list__item animate animate-delay__${index}`;

  const editHeroName = (e) => {
    e.stopPropagation();
    const {value} = e.target;
    setHeroFirstName(value);
  };

  const editHeroDescription = (e) => {
    e.stopPropagation();
    setHeroDescription(e.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);
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
            onChange={(e) => editHeroName(e)}
          />
        ) : (
          <span>{heroFirstName}</span>
        )}

        <ButtonGroup size="sm">
          <Button outline onClick={(e) => editHero(e)}>
            {isUnderEdition ? 'save' : 'edit'}
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
