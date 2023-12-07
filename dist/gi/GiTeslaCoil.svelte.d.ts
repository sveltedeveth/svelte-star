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
export type GiTeslaCoilProps = typeof __propDef.props;
export type GiTeslaCoilEvents = typeof __propDef.events;
export type GiTeslaCoilSlots = typeof __propDef.slots;
export default class GiTeslaCoil extends SvelteComponentTyped<GiTeslaCoilProps, GiTeslaCoilEvents, GiTeslaCoilSlots> {
}
export {};
