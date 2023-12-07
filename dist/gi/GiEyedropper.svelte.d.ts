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
export type GiEyedropperProps = typeof __propDef.props;
export type GiEyedropperEvents = typeof __propDef.events;
export type GiEyedropperSlots = typeof __propDef.slots;
export default class GiEyedropper extends SvelteComponentTyped<GiEyedropperProps, GiEyedropperEvents, GiEyedropperSlots> {
}
export {};
