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
export type FaPlusSquareProps = typeof __propDef.props;
export type FaPlusSquareEvents = typeof __propDef.events;
export type FaPlusSquareSlots = typeof __propDef.slots;
export default class FaPlusSquare extends SvelteComponentTyped<FaPlusSquareProps, FaPlusSquareEvents, FaPlusSquareSlots> {
}
export {};
