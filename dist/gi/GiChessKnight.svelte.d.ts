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
export type GiChessKnightProps = typeof __propDef.props;
export type GiChessKnightEvents = typeof __propDef.events;
export type GiChessKnightSlots = typeof __propDef.slots;
export default class GiChessKnight extends SvelteComponentTyped<GiChessKnightProps, GiChessKnightEvents, GiChessKnightSlots> {
}
export {};
