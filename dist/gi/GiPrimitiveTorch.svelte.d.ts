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
export type GiPrimitiveTorchProps = typeof __propDef.props;
export type GiPrimitiveTorchEvents = typeof __propDef.events;
export type GiPrimitiveTorchSlots = typeof __propDef.slots;
export default class GiPrimitiveTorch extends SvelteComponentTyped<GiPrimitiveTorchProps, GiPrimitiveTorchEvents, GiPrimitiveTorchSlots> {
}
export {};
