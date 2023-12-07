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
export type FaViadeoSquareProps = typeof __propDef.props;
export type FaViadeoSquareEvents = typeof __propDef.events;
export type FaViadeoSquareSlots = typeof __propDef.slots;
export default class FaViadeoSquare extends SvelteComponentTyped<FaViadeoSquareProps, FaViadeoSquareEvents, FaViadeoSquareSlots> {
}
export {};
