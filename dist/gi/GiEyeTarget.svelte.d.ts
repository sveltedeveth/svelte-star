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
export type GiEyeTargetProps = typeof __propDef.props;
export type GiEyeTargetEvents = typeof __propDef.events;
export type GiEyeTargetSlots = typeof __propDef.slots;
export default class GiEyeTarget extends SvelteComponentTyped<GiEyeTargetProps, GiEyeTargetEvents, GiEyeTargetSlots> {
}
export {};
