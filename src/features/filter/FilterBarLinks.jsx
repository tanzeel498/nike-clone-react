import { useSearchParams } from "react-router-dom";
import ButtonLink from "../../ui/ButtonLink";

function FilterBarLinks() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(category) {
    searchParams.set("category", category);
    setSearchParams(searchParams);
  }

  return (
    <div className="mb-8 flex flex-col gap-1">
      <ButtonLink
        style={{ textAlign: "left" }}
        border={false}
        onClick={() => handleClick("Jordan")}
      >
        Jordan
      </ButtonLink>
      <ButtonLink
        style={{ textAlign: "left" }}
        border={false}
        onClick={() => handleClick("Lifestyle")}
      >
        Lifestyle
      </ButtonLink>
      <ButtonLink
        style={{ textAlign: "left" }}
        border={false}
        onClick={() => handleClick("Running")}
      >
        Running
      </ButtonLink>
      <ButtonLink
        style={{ textAlign: "left" }}
        border={false}
        onClick={() => handleClick("Basketball")}
      >
        Basketball
      </ButtonLink>
      <ButtonLink
        style={{ textAlign: "left" }}
        border={false}
        onClick={() => handleClick("Training & Gym")}
      >
        Training & Gym
      </ButtonLink>
      <ButtonLink
        style={{ textAlign: "left" }}
        border={false}
        onClick={() => handleClick("Walking")}
      >
        Walking
      </ButtonLink>
      <ButtonLink
        style={{ textAlign: "left" }}
        border={false}
        onClick={() => handleClick("Soccer")}
      >
        Soccer
      </ButtonLink>
      <ButtonLink
        style={{ textAlign: "left" }}
        border={false}
        onClick={() => handleClick("Skateboarding")}
      >
        Skateboarding
      </ButtonLink>
      <ButtonLink
        style={{ textAlign: "left" }}
        border={false}
        onClick={() => handleClick("Football")}
      >
        Football
      </ButtonLink>
      <ButtonLink
        style={{ textAlign: "left" }}
        border={false}
        onClick={() => handleClick("Tennis")}
      >
        Tennis
      </ButtonLink>
      <ButtonLink
        style={{ textAlign: "left" }}
        border={false}
        onClick={() => handleClick("Golf")}
      >
        Golf
      </ButtonLink>
      <ButtonLink
        style={{ textAlign: "left" }}
        border={false}
        onClick={() => handleClick("Baseball")}
      >
        Baseball
      </ButtonLink>
      <ButtonLink
        style={{ textAlign: "left" }}
        border={false}
        onClick={() => handleClick("Slides")}
      >
        Sandals & Slides
      </ButtonLink>
    </div>
  );
}

export default FilterBarLinks;
