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
export type GiDeadEyeProps = typeof __propDef.props;
export type GiDeadEyeEvents = typeof __propDef.events;
export type GiDeadEyeSlots = typeof __propDef.slots;
export default class GiDeadEye extends SvelteComponentTyped<GiDeadEyeProps, GiDeadEyeEvents, GiDeadEyeSlots> {
}
export {};
