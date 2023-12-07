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
export type GiFactoryProps = typeof __propDef.props;
export type GiFactoryEvents = typeof __propDef.events;
export type GiFactorySlots = typeof __propDef.slots;
export default class GiFactory extends SvelteComponentTyped<GiFactoryProps, GiFactoryEvents, GiFactorySlots> {
}
export {};
