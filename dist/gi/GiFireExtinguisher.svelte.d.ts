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
export type GiFireExtinguisherProps = typeof __propDef.props;
export type GiFireExtinguisherEvents = typeof __propDef.events;
export type GiFireExtinguisherSlots = typeof __propDef.slots;
export default class GiFireExtinguisher extends SvelteComponentTyped<GiFireExtinguisherProps, GiFireExtinguisherEvents, GiFireExtinguisherSlots> {
}
export {};
