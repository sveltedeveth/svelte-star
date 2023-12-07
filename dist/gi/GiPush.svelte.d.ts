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
export type GiPushProps = typeof __propDef.props;
export type GiPushEvents = typeof __propDef.events;
export type GiPushSlots = typeof __propDef.slots;
export default class GiPush extends SvelteComponentTyped<GiPushProps, GiPushEvents, GiPushSlots> {
}
export {};
