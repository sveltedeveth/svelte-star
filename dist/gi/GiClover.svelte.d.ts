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
export type GiCloverProps = typeof __propDef.props;
export type GiCloverEvents = typeof __propDef.events;
export type GiCloverSlots = typeof __propDef.slots;
export default class GiClover extends SvelteComponentTyped<GiCloverProps, GiCloverEvents, GiCloverSlots> {
}
export {};
