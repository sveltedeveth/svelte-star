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
export type GiWhipProps = typeof __propDef.props;
export type GiWhipEvents = typeof __propDef.events;
export type GiWhipSlots = typeof __propDef.slots;
export default class GiWhip extends SvelteComponentTyped<GiWhipProps, GiWhipEvents, GiWhipSlots> {
}
export {};
