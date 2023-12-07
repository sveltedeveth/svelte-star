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
export type GiSwimfinsProps = typeof __propDef.props;
export type GiSwimfinsEvents = typeof __propDef.events;
export type GiSwimfinsSlots = typeof __propDef.slots;
export default class GiSwimfins extends SvelteComponentTyped<GiSwimfinsProps, GiSwimfinsEvents, GiSwimfinsSlots> {
}
export {};
