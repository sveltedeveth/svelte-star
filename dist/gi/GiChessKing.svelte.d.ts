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
export type GiChessKingProps = typeof __propDef.props;
export type GiChessKingEvents = typeof __propDef.events;
export type GiChessKingSlots = typeof __propDef.slots;
export default class GiChessKing extends SvelteComponentTyped<GiChessKingProps, GiChessKingEvents, GiChessKingSlots> {
}
export {};
