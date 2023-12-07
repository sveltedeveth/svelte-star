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
export type GiRazorBladeProps = typeof __propDef.props;
export type GiRazorBladeEvents = typeof __propDef.events;
export type GiRazorBladeSlots = typeof __propDef.slots;
export default class GiRazorBlade extends SvelteComponentTyped<GiRazorBladeProps, GiRazorBladeEvents, GiRazorBladeSlots> {
}
export {};
