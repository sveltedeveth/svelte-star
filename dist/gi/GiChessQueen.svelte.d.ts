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
export type GiChessQueenProps = typeof __propDef.props;
export type GiChessQueenEvents = typeof __propDef.events;
export type GiChessQueenSlots = typeof __propDef.slots;
export default class GiChessQueen extends SvelteComponentTyped<GiChessQueenProps, GiChessQueenEvents, GiChessQueenSlots> {
}
export {};
