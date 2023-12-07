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
export type GiBeastEyeProps = typeof __propDef.props;
export type GiBeastEyeEvents = typeof __propDef.events;
export type GiBeastEyeSlots = typeof __propDef.slots;
export default class GiBeastEye extends SvelteComponentTyped<GiBeastEyeProps, GiBeastEyeEvents, GiBeastEyeSlots> {
}
export {};
