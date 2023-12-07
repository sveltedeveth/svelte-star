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
export type GiSurroundedEyeProps = typeof __propDef.props;
export type GiSurroundedEyeEvents = typeof __propDef.events;
export type GiSurroundedEyeSlots = typeof __propDef.slots;
export default class GiSurroundedEye extends SvelteComponentTyped<GiSurroundedEyeProps, GiSurroundedEyeEvents, GiSurroundedEyeSlots> {
}
export {};
