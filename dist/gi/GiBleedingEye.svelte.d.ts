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
export type GiBleedingEyeProps = typeof __propDef.props;
export type GiBleedingEyeEvents = typeof __propDef.events;
export type GiBleedingEyeSlots = typeof __propDef.slots;
export default class GiBleedingEye extends SvelteComponentTyped<GiBleedingEyeProps, GiBleedingEyeEvents, GiBleedingEyeSlots> {
}
export {};
