import {render,screen} from "@testing-library/react"
import MyNameComp from "./MyNameComp"

describe("MyName Component",()=>{
    test("render it",()=>{
        render(<MyNameComp/>);
            let createElement = screen.getByText(/This is MyName/i);
            expect(createElement).toBeInTheDocument();
    });

    test("render with props name",()=>{
        render(<MyNameComp name="sankaresh" post="FullStack Developer" />);
            let createElement = screen.getByText(/My Name is:Sankaresh/i);
            expect(createElement).toBeInTheDocument();
    });

    test("render with props post",()=>{
        render(<MyNameComp name="sankaresh" post="FullStack Developer" />);
            let createElement = screen.getByText(/I am:FullStack Developer/i);
            expect(createElement).toBeInTheDocument();
    });

}); 