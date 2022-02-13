import styled from "styled-components";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Background = styled.main`
  background-color: #282c34;
  width: 100vw;
  min-height: 100vh;
  display: flex;
`;

const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #fdfdfd;
  padding: 0.75rem;
  margin: auto;
  width: 90vw;
  border: none;
  font-family: "Roboto", sans-serif;
  @media screen and (min-width: 900px) {
    width: 50vw;
    padding: 1.5rem;
  }
`;
const FormHeading = styled.h2`
  color: rgba(250, 159, 66, 0.95);
  text-align: center;
  margin: 0.25rem 0;
  font-weight: 700;
  font-size: 2rem;
  @media screen and (min-width: 900px) {
    margin: 1rem 0;
  }
  font-family: "Gideon Roman", serif;
`;
const Entry = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  font-weight: 400;
  &:last-of-type {
    margin-bottom: 1rem;
  }
`;

const Label = styled.label`
  display: inline-block;
`;

const Input = styled.input`
  width: 30%;
  text-align: end;
  border: 1px solid rgba(49, 49, 49, 0.45);
  border-radius: 3px;
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  margin-top: 0.25rem;
  padding: 0.25rem;
  border: 1px solid rgba(49, 49, 49, 0.45);
  border-radius: 3px;
  resize: vertical;
`;

const Submit = styled.button`
  padding: 0.75rem;
  max-width: 11rem;
  background-color: #d62839;
  color: #fdfdfd;
  font-size: 1rem;
  margin: auto;
  border: none;
  font-weight: 600;
`;

const FormDivider = styled.hr`
  border-radius: 10%;
  padding: 1px 0;
  background-color: rgba(250, 159, 66, 0.65);
  width: 100%;
  border: none;
  margin: 1rem 0;
`;

const EndFormDivider = styled(FormDivider)`
  border-radius: 10%;
  padding: 1px 0;
  background-color: rgba(49, 49, 49, 0.45);
  width: 100%;
  border: none;
`;
const Total = styled.div`
  width: 15%;
  text-align: end;
  font-weight: 500;
  border: 1px solid rgba(49, 49, 49, 0.45);
  border-radius: 3px;
`;

const TotalLabel = styled(Label)`
  font-weight: 700;
`;

function App() {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = ({
    generalOffering,
    tithes,
    youthMinistry,
    womensMinistry,

    option1,
    option2,
    option3,
    option4,
    other,
    comments,
  }) => {
    if ((total) => 1) {
      alert(`Total: ${total}
    General Offering: ${generalOffering}
    Tithes: ${tithes}
    Youth Ministry: ${youthMinistry}
    Women's Ministry: ${womensMinistry}
    Option 1: ${option1}
    Option 2: ${option2}
    Option 3: ${option3}
    Option 4: ${option4}
    Other: ${other}
    Comments: ${comments}
    `);
    } else {
      alert(`Minimum donation is $1.`);
    }
  };

  let [generalOffering, setGeneralOffering] = useState(50);
  let [tithes, setTithes] = useState(50);
  let [youthMinistry, setYouthMinistry] = useState(50);
  let [womensMinistry, setWomensMinistry] = useState(50);

  let [option1, setOption1] = useState(0);
  let [option2, setOption2] = useState(0);
  let [option3, setOption3] = useState(0);
  let [option4, setOption4] = useState(0);
  let [other, setOther] = useState(0);
  let [comments, setComments] = useState("");
  let [total, setTotal] = useState(200);

  useEffect(() => {
    const values = [
      generalOffering,
      tithes,
      youthMinistry,
      womensMinistry,

      option1,
      option2,
      option3,
      option4,
      other,
    ];

    let newSum = 0;
    values.forEach((value) => {
      if (Number.isInteger(value) || Number.isInteger(parseInt(value))) {
        newSum = newSum + parseInt(value);
      } else {
        newSum = newSum + 0;
      }
    });
    setTotal(newSum);
  }, [
    generalOffering,
    tithes,
    youthMinistry,
    womensMinistry,
    option1,
    option2,
    option3,
    option4,
    other,
  ]);

  const updateState = (event, changeState) => {
    changeState(event.target.value);
  };

  const handleKeyDown = (event) => {
    const acceptableKeys = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      ".",
      "ArrowLeft",
      "ArrowRight",
      "Backspace",
      "Delete",
      "Tab",
    ];
    console.log(comments);
    console.log(event.key);
    if (
      acceptableKeys.includes(parseInt(event.key)) ||
      acceptableKeys.includes(event.key)
    ) {
      return;
    } else {
      event.preventDefault();
    }
    console.log(
      `Does it pass? ${acceptableKeys.includes(parseInt(event.key))}`
    );
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    // {pattern: /^[0-9]*$/} OLD REGEX PATTERN VALIDATION
    <Background>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <FormHeading>
          Greater Love
          <br /> Apostolic Temple
        </FormHeading>
        <FormDivider />
        <Entry>
          <Label>General Offering</Label>
          <Input
            defaultValue={50}
            onKeyDown={handleKeyDown}
            {...register("generalOffering")}
            onChange={(e) => {
              updateState(e, setGeneralOffering);
            }}
          />
        </Entry>

        <Entry>
          <Label>Tithes</Label>
          <Input
            defaultValue={50}
            onKeyDown={handleKeyDown}
            {...register("tithes")}
            onChange={(e) => {
              updateState(e, setTithes);
            }}
          />
        </Entry>
        <Entry>
          <Label>Youth Ministry </Label>
          <Input
            defaultValue={50}
            onKeyDown={handleKeyDown}
            {...register("youthMinistry")}
            onChange={(e) => {
              updateState(e, setYouthMinistry);
            }}
          />
        </Entry>
        <Entry>
          <Label>Women's Ministry</Label>
          <Input
            defaultValue={50}
            onKeyDown={handleKeyDown}
            {...register("womensMinistry")}
            onChange={(e) => {
              updateState(e, setWomensMinistry);
            }}
          />
        </Entry>
        <Entry>
          <Label>Option</Label>
          <Input
            defaultValue={0}
            onKeyDown={handleKeyDown}
            {...register("option1")}
            onChange={(e) => {
              updateState(e, setOption1);
            }}
          />
        </Entry>
        <Entry>
          <Label>Option</Label>
          <Input
            defaultValue={0}
            onKeyDown={handleKeyDown}
            {...register("option2")}
            onChange={(e) => {
              updateState(e, setOption2);
            }}
          />
        </Entry>
        <Entry>
          <Label>Option</Label>
          <Input
            defaultValue={0}
            onKeyDown={handleKeyDown}
            {...register("option3")}
            onChange={(e) => {
              updateState(e, setOption3);
            }}
          />
        </Entry>

        <Entry>
          <Label>Option</Label>
          <Input
            defaultValue={0}
            onKeyDown={handleKeyDown}
            {...register("option4")}
            onChange={(e) => {
              updateState(e, setOption4);
            }}
          />
        </Entry>

        <Entry>
          <Label>Other</Label>
          <Input
            defaultValue={0}
            onKeyDown={handleKeyDown}
            {...register("other")}
            onChange={(e) => {
              updateState(e, setOther);
            }}
          />
        </Entry>

        <Label>Comments</Label>
        <TextArea
          defaultValue="..."
          {...register("comments", { maxLength: 500 })}
          onChange={(e) => {
            updateState(e, setComments);
          }}
        ></TextArea>
        <EndFormDivider />
        <Entry>
          <TotalLabel>Total</TotalLabel>
          <Total>{total}</Total>
        </Entry>
        <Submit type="submit">CONFIRM & PAY</Submit>

        {/* include validation with required or other standard HTML validation rules */}
        {/* <Input {...register("exampleRequired", { required: true })} /> */}
        {/* errors will return when field validation fails  */}
        {/* {errors.exampleRequired && <span>This field is required</span>} */}
      </Form>
    </Background>
  );
}

export default App;

// const { register, formState: { errors }, handleSubmit } = useForm();

// return (
//   <form onSubmit={handleSubmit(onSubmit)}>
//     <input {...register("firstName", { required: true })} />
//     {errors.firstName?.type === 'required' && "First name is required"}

//     <input {...register("lastName", { required: true })} />
//     {errors.lastName && "Last name is required"}

//     <input type="submit" />
//   </form>
// );
