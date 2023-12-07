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
export type FaPenSquareProps = typeof __propDef.props;
export type FaPenSquareEvents = typeof __propDef.events;
export type FaPenSquareSlots = typeof __propDef.slots;
export default class FaPenSquare extends SvelteComponentTyped<FaPenSquareProps, FaPenSquareEvents, FaPenSquareSlots> {
}
export {};
