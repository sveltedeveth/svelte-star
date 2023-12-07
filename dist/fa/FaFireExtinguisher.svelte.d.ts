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
export type FaFireExtinguisherProps = typeof __propDef.props;
export type FaFireExtinguisherEvents = typeof __propDef.events;
export type FaFireExtinguisherSlots = typeof __propDef.slots;
export default class FaFireExtinguisher extends SvelteComponentTyped<FaFireExtinguisherProps, FaFireExtinguisherEvents, FaFireExtinguisherSlots> {
}
export {};
