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
export type GiMetalDiscProps = typeof __propDef.props;
export type GiMetalDiscEvents = typeof __propDef.events;
export type GiMetalDiscSlots = typeof __propDef.slots;
export default class GiMetalDisc extends SvelteComponentTyped<GiMetalDiscProps, GiMetalDiscEvents, GiMetalDiscSlots> {
}
export {};
