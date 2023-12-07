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
export type GiBurningEyeProps = typeof __propDef.props;
export type GiBurningEyeEvents = typeof __propDef.events;
export type GiBurningEyeSlots = typeof __propDef.slots;
export default class GiBurningEye extends SvelteComponentTyped<GiBurningEyeProps, GiBurningEyeEvents, GiBurningEyeSlots> {
}
export {};
