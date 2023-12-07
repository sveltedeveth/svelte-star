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
export type GiTorchProps = typeof __propDef.props;
export type GiTorchEvents = typeof __propDef.events;
export type GiTorchSlots = typeof __propDef.slots;
export default class GiTorch extends SvelteComponentTyped<GiTorchProps, GiTorchEvents, GiTorchSlots> {
}
export {};
