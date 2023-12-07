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
export type GiShowerProps = typeof __propDef.props;
export type GiShowerEvents = typeof __propDef.events;
export type GiShowerSlots = typeof __propDef.slots;
export default class GiShower extends SvelteComponentTyped<GiShowerProps, GiShowerEvents, GiShowerSlots> {
}
export {};
