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
export type FaChessProps = typeof __propDef.props;
export type FaChessEvents = typeof __propDef.events;
export type FaChessSlots = typeof __propDef.slots;
export default class FaChess extends SvelteComponentTyped<FaChessProps, FaChessEvents, FaChessSlots> {
}
export {};
