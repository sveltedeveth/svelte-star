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
export type GiTiaraProps = typeof __propDef.props;
export type GiTiaraEvents = typeof __propDef.events;
export type GiTiaraSlots = typeof __propDef.slots;
export default class GiTiara extends SvelteComponentTyped<GiTiaraProps, GiTiaraEvents, GiTiaraSlots> {
}
export {};
