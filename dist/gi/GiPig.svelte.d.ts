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
export type GiPigProps = typeof __propDef.props;
export type GiPigEvents = typeof __propDef.events;
export type GiPigSlots = typeof __propDef.slots;
export default class GiPig extends SvelteComponentTyped<GiPigProps, GiPigEvents, GiPigSlots> {
}
export {};
