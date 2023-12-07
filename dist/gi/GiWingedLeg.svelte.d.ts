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
export type GiWingedLegProps = typeof __propDef.props;
export type GiWingedLegEvents = typeof __propDef.events;
export type GiWingedLegSlots = typeof __propDef.slots;
export default class GiWingedLeg extends SvelteComponentTyped<GiWingedLegProps, GiWingedLegEvents, GiWingedLegSlots> {
}
export {};
