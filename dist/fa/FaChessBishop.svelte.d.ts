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
export type FaChessBishopProps = typeof __propDef.props;
export type FaChessBishopEvents = typeof __propDef.events;
export type FaChessBishopSlots = typeof __propDef.slots;
export default class FaChessBishop extends SvelteComponentTyped<FaChessBishopProps, FaChessBishopEvents, FaChessBishopSlots> {
}
export {};
