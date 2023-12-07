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
export type GiElfEarProps = typeof __propDef.props;
export type GiElfEarEvents = typeof __propDef.events;
export type GiElfEarSlots = typeof __propDef.slots;
export default class GiElfEar extends SvelteComponentTyped<GiElfEarProps, GiElfEarEvents, GiElfEarSlots> {
}
export {};
