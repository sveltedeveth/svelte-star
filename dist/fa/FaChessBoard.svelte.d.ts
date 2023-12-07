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
export type FaChessBoardProps = typeof __propDef.props;
export type FaChessBoardEvents = typeof __propDef.events;
export type FaChessBoardSlots = typeof __propDef.slots;
export default class FaChessBoard extends SvelteComponentTyped<FaChessBoardProps, FaChessBoardEvents, FaChessBoardSlots> {
}
export {};
