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
export type GiWarlockEyeProps = typeof __propDef.props;
export type GiWarlockEyeEvents = typeof __propDef.events;
export type GiWarlockEyeSlots = typeof __propDef.slots;
export default class GiWarlockEye extends SvelteComponentTyped<GiWarlockEyeProps, GiWarlockEyeEvents, GiWarlockEyeSlots> {
}
export {};
