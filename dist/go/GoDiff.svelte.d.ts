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
export type GoDiffProps = typeof __propDef.props;
export type GoDiffEvents = typeof __propDef.events;
export type GoDiffSlots = typeof __propDef.slots;
export default class GoDiff extends SvelteComponentTyped<GoDiffProps, GoDiffEvents, GoDiffSlots> {
}
export {};
