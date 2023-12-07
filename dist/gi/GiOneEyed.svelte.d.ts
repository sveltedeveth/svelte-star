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
export type GiOneEyedProps = typeof __propDef.props;
export type GiOneEyedEvents = typeof __propDef.events;
export type GiOneEyedSlots = typeof __propDef.slots;
export default class GiOneEyed extends SvelteComponentTyped<GiOneEyedProps, GiOneEyedEvents, GiOneEyedSlots> {
}
export {};
