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
export type GiPopcornProps = typeof __propDef.props;
export type GiPopcornEvents = typeof __propDef.events;
export type GiPopcornSlots = typeof __propDef.slots;
export default class GiPopcorn extends SvelteComponentTyped<GiPopcornProps, GiPopcornEvents, GiPopcornSlots> {
}
export {};
