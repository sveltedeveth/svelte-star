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
export type GiCongressProps = typeof __propDef.props;
export type GiCongressEvents = typeof __propDef.events;
export type GiCongressSlots = typeof __propDef.slots;
export default class GiCongress extends SvelteComponentTyped<GiCongressProps, GiCongressEvents, GiCongressSlots> {
}
export {};
