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
export type GiBoltEyeProps = typeof __propDef.props;
export type GiBoltEyeEvents = typeof __propDef.events;
export type GiBoltEyeSlots = typeof __propDef.slots;
export default class GiBoltEye extends SvelteComponentTyped<GiBoltEyeProps, GiBoltEyeEvents, GiBoltEyeSlots> {
}
export {};
