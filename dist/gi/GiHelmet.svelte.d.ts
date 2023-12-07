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
export type GiHelmetProps = typeof __propDef.props;
export type GiHelmetEvents = typeof __propDef.events;
export type GiHelmetSlots = typeof __propDef.slots;
export default class GiHelmet extends SvelteComponentTyped<GiHelmetProps, GiHelmetEvents, GiHelmetSlots> {
}
export {};
