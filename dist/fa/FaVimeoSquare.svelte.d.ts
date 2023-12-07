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
export type FaVimeoSquareProps = typeof __propDef.props;
export type FaVimeoSquareEvents = typeof __propDef.events;
export type FaVimeoSquareSlots = typeof __propDef.slots;
export default class FaVimeoSquare extends SvelteComponentTyped<FaVimeoSquareProps, FaVimeoSquareEvents, FaVimeoSquareSlots> {
}
export {};
