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
export type GiChessBishopProps = typeof __propDef.props;
export type GiChessBishopEvents = typeof __propDef.events;
export type GiChessBishopSlots = typeof __propDef.slots;
export default class GiChessBishop extends SvelteComponentTyped<GiChessBishopProps, GiChessBishopEvents, GiChessBishopSlots> {
}
export {};
