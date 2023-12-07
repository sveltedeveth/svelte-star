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
export type GiPropellerBeanieProps = typeof __propDef.props;
export type GiPropellerBeanieEvents = typeof __propDef.events;
export type GiPropellerBeanieSlots = typeof __propDef.slots;
export default class GiPropellerBeanie extends SvelteComponentTyped<GiPropellerBeanieProps, GiPropellerBeanieEvents, GiPropellerBeanieSlots> {
}
export {};
