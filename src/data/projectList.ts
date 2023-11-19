interface IProjectList {
  key: string | number;
  image: string;
  alt: string;
  title: string;
  content: string;
}

const projectList: IProjectList[] = [
  {
    key: 1,
    image: "http://placekitten.com/200/200",
    alt: "placeholder Kitten",
    title: "CAVE Official Website",
    content: "Building a website to introduce individuals to cave.",
  },
  {
    key: 2,
    image: "http://placekitten.com/200/200",
    alt: "placeholder Kitten",
    title: "Loops",
    content:
      "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat.",
  },
  {
    key: 3,
    image: "http://placekitten.com/200/200",
    alt: "placeholder Kitten",
    title: "Arrays",
    content:
      "Q. Why did the programmer quit his job? A. Because he didn't get arrays.",
  },
  {
    key: 4,
    image: "http://placekitten.com/200/200",
    alt: "placeholder Kitten",
    title: "Hardware vs. Software",
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software.",
  },
  {
    key: 5,
    image: "http://placekitten.com/200/200",
    alt: "placeholder Kitten",
    title: "Big ideas",
    content: "Games that help people learn Javascript?",
  },
];

export default projectList;
