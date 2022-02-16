import React from "react";
import { TextInput } from "react-native";
import { create } from "react-test-renderer"
import { Signup } from "./Signup"

const onChange = jest.fn();

describe("Signup default props",()=>{
    it("handles Email Input",()=>{
        const {root} = create(<Signup navigation />);
        expect(root.findAllByType(TextInput)[0].props.autoFocus).toBeFalsy();
    })
    it("handles Password Input",()=>{
        const {root} = create(<Signup navigation />);
        expect(root.findAllByType(TextInput)[1].props.autoFocus).toBeFalsy();
        expect(root.findAllByType(TextInput)[1].props.secureTextEntry).toBeTruthy();
    })
})