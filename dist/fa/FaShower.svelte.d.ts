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
export type FaShowerProps = typeof __propDef.props;
export type FaShowerEvents = typeof __propDef.events;
export type FaShowerSlots = typeof __propDef.slots;
export default class FaShower extends SvelteComponentTyped<FaShowerProps, FaShowerEvents, FaShowerSlots> {
}
export {};
