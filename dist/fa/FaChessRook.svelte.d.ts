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
export type FaChessRookProps = typeof __propDef.props;
export type FaChessRookEvents = typeof __propDef.events;
export type FaChessRookSlots = typeof __propDef.slots;
export default class FaChessRook extends SvelteComponentTyped<FaChessRookProps, FaChessRookEvents, FaChessRookSlots> {
}
export {};
