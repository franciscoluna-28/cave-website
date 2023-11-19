/* A type is a way to represent something with Typescript. This offer us some befenits like:
1. Automatic code suggestions
2. Well defined types save you time during development
3. Types like languages such as C++ or Java, because Javascript doesn't have built in types */

/* Similarly, we have interfaces. Interfaces are pretty much the same as types, but they can be extended, meaning
that you can "orchestrate" different interfaces and extend types*/

// StepList interface
interface IStepList {
  key: number | string; // This is an union type. Meaning that the key can be either a string or a number
  step: string; // This isn only a string
  imageURL: string;
  imageAlt: string;
}

/**To add type or interface definitions you use the ":" before declaring the variable. In this case,
 * you're telling typescript that stepList has its respective type "StepList" and it's an array of objects
 */
const stepList: IStepList[] = [
  {
    key: 1,
    step: "1. Join the CAVE discord",
    imageURL: "https://picsum.photos/200/150",
    imageAlt: "Filler pic",
  },
  {
    key: 2,
    step: "2. Complete Onboarding, including posting an introduction",
    imageURL: "https://picsum.photos/200/150",
    imageAlt: "Filler pic",
  },
  {
    key: 3,
    step: "3. Check out project proposals or propose a project yourself",
    imageURL: "https://picsum.photos/200/150",
    imageAlt: "Filler pic",
  },
  {
    key: 4,
    step: "4. Join a team",
    imageURL: "https://picsum.photos/200/150",
    imageAlt: "Filler pic",
  },
  {
    key: 5,
    step: "5. Work together until project is finished",
    imageURL: "https://picsum.photos/200/150",
    imageAlt: "Filler pic",
  },
  {
    key: 6,
    step: "6. Any profit divided among every collaborator according to pre-agreed percentages",
    imageURL: "https://picsum.photos/200/150",
    imageAlt: "Filler pic",
  },
];

export default stepList;
