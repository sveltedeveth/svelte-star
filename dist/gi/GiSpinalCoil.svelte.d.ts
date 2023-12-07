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
export type GiSpinalCoilProps = typeof __propDef.props;
export type GiSpinalCoilEvents = typeof __propDef.events;
export type GiSpinalCoilSlots = typeof __propDef.slots;
export default class GiSpinalCoil extends SvelteComponentTyped<GiSpinalCoilProps, GiSpinalCoilEvents, GiSpinalCoilSlots> {
}
export {};
