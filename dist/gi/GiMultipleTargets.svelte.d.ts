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
export type GiMultipleTargetsProps = typeof __propDef.props;
export type GiMultipleTargetsEvents = typeof __propDef.events;
export type GiMultipleTargetsSlots = typeof __propDef.slots;
export default class GiMultipleTargets extends SvelteComponentTyped<GiMultipleTargetsProps, GiMultipleTargetsEvents, GiMultipleTargetsSlots> {
}
export {};
