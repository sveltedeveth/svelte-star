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
export type GiBarbedCoilProps = typeof __propDef.props;
export type GiBarbedCoilEvents = typeof __propDef.events;
export type GiBarbedCoilSlots = typeof __propDef.slots;
export default class GiBarbedCoil extends SvelteComponentTyped<GiBarbedCoilProps, GiBarbedCoilEvents, GiBarbedCoilSlots> {
}
export {};
