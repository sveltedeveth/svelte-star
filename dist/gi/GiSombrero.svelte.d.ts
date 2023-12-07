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
export type GiSombreroProps = typeof __propDef.props;
export type GiSombreroEvents = typeof __propDef.events;
export type GiSombreroSlots = typeof __propDef.slots;
export default class GiSombrero extends SvelteComponentTyped<GiSombreroProps, GiSombreroEvents, GiSombreroSlots> {
}
export {};
