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
export type GiTemplarEyeProps = typeof __propDef.props;
export type GiTemplarEyeEvents = typeof __propDef.events;
export type GiTemplarEyeSlots = typeof __propDef.slots;
export default class GiTemplarEye extends SvelteComponentTyped<GiTemplarEyeProps, GiTemplarEyeEvents, GiTemplarEyeSlots> {
}
export {};
