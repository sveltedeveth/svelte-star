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
export type FaRegPlusSquareProps = typeof __propDef.props;
export type FaRegPlusSquareEvents = typeof __propDef.events;
export type FaRegPlusSquareSlots = typeof __propDef.slots;
export default class FaRegPlusSquare extends SvelteComponentTyped<FaRegPlusSquareProps, FaRegPlusSquareEvents, FaRegPlusSquareSlots> {
}
export {};
