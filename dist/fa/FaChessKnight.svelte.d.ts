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
export type FaChessKnightProps = typeof __propDef.props;
export type FaChessKnightEvents = typeof __propDef.events;
export type FaChessKnightSlots = typeof __propDef.slots;
export default class FaChessKnight extends SvelteComponentTyped<FaChessKnightProps, FaChessKnightEvents, FaChessKnightSlots> {
}
export {};
