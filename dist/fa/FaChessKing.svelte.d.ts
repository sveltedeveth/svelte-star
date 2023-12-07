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
export type FaChessKingProps = typeof __propDef.props;
export type FaChessKingEvents = typeof __propDef.events;
export type FaChessKingSlots = typeof __propDef.slots;
export default class FaChessKing extends SvelteComponentTyped<FaChessKingProps, FaChessKingEvents, FaChessKingSlots> {
}
export {};
