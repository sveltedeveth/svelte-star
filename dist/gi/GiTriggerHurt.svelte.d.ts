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
export type GiTriggerHurtProps = typeof __propDef.props;
export type GiTriggerHurtEvents = typeof __propDef.events;
export type GiTriggerHurtSlots = typeof __propDef.slots;
export default class GiTriggerHurt extends SvelteComponentTyped<GiTriggerHurtProps, GiTriggerHurtEvents, GiTriggerHurtSlots> {
}
export {};
