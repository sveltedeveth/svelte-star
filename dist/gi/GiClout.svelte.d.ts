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
export type GiCloutProps = typeof __propDef.props;
export type GiCloutEvents = typeof __propDef.events;
export type GiCloutSlots = typeof __propDef.slots;
export default class GiClout extends SvelteComponentTyped<GiCloutProps, GiCloutEvents, GiCloutSlots> {
}
export {};
