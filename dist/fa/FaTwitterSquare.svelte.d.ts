import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FaTwitterSquareProps = typeof __propDef.props;
export type FaTwitterSquareEvents = typeof __propDef.events;
export type FaTwitterSquareSlots = typeof __propDef.slots;
export default class FaTwitterSquare extends SvelteComponentTyped<FaTwitterSquareProps, FaTwitterSquareEvents, FaTwitterSquareSlots> {
}
export {};
