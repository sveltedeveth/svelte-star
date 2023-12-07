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
export type FaChessQueenProps = typeof __propDef.props;
export type FaChessQueenEvents = typeof __propDef.events;
export type FaChessQueenSlots = typeof __propDef.slots;
export default class FaChessQueen extends SvelteComponentTyped<FaChessQueenProps, FaChessQueenEvents, FaChessQueenSlots> {
}
export {};
