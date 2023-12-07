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
export type GiElfHelmetProps = typeof __propDef.props;
export type GiElfHelmetEvents = typeof __propDef.events;
export type GiElfHelmetSlots = typeof __propDef.slots;
export default class GiElfHelmet extends SvelteComponentTyped<GiElfHelmetProps, GiElfHelmetEvents, GiElfHelmetSlots> {
}
export {};
