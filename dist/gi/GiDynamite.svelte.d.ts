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
export type GiDynamiteProps = typeof __propDef.props;
export type GiDynamiteEvents = typeof __propDef.events;
export type GiDynamiteSlots = typeof __propDef.slots;
export default class GiDynamite extends SvelteComponentTyped<GiDynamiteProps, GiDynamiteEvents, GiDynamiteSlots> {
}
export {};
