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
export type FaRegSquareProps = typeof __propDef.props;
export type FaRegSquareEvents = typeof __propDef.events;
export type FaRegSquareSlots = typeof __propDef.slots;
export default class FaRegSquare extends SvelteComponentTyped<FaRegSquareProps, FaRegSquareEvents, FaRegSquareSlots> {
}
export {};
