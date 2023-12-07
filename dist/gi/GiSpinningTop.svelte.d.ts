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
export type GiSpinningTopProps = typeof __propDef.props;
export type GiSpinningTopEvents = typeof __propDef.events;
export type GiSpinningTopSlots = typeof __propDef.slots;
export default class GiSpinningTop extends SvelteComponentTyped<GiSpinningTopProps, GiSpinningTopEvents, GiSpinningTopSlots> {
}
export {};
