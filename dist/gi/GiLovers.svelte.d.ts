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
export type GiLoversProps = typeof __propDef.props;
export type GiLoversEvents = typeof __propDef.events;
export type GiLoversSlots = typeof __propDef.slots;
export default class GiLovers extends SvelteComponentTyped<GiLoversProps, GiLoversEvents, GiLoversSlots> {
}
export {};
