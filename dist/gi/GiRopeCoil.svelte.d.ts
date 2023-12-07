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
export type GiRopeCoilProps = typeof __propDef.props;
export type GiRopeCoilEvents = typeof __propDef.events;
export type GiRopeCoilSlots = typeof __propDef.slots;
export default class GiRopeCoil extends SvelteComponentTyped<GiRopeCoilProps, GiRopeCoilEvents, GiRopeCoilSlots> {
}
export {};
