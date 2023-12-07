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
export type GiDjinnProps = typeof __propDef.props;
export type GiDjinnEvents = typeof __propDef.events;
export type GiDjinnSlots = typeof __propDef.slots;
export default class GiDjinn extends SvelteComponentTyped<GiDjinnProps, GiDjinnEvents, GiDjinnSlots> {
}
export {};
