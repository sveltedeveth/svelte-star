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
export type GiOakProps = typeof __propDef.props;
export type GiOakEvents = typeof __propDef.events;
export type GiOakSlots = typeof __propDef.slots;
export default class GiOak extends SvelteComponentTyped<GiOakProps, GiOakEvents, GiOakSlots> {
}
export {};
