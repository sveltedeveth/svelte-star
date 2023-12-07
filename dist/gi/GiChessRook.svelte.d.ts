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
export type GiChessRookProps = typeof __propDef.props;
export type GiChessRookEvents = typeof __propDef.events;
export type GiChessRookSlots = typeof __propDef.slots;
export default class GiChessRook extends SvelteComponentTyped<GiChessRookProps, GiChessRookEvents, GiChessRookSlots> {
}
export {};
