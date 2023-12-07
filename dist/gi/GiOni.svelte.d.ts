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
export type GiOniProps = typeof __propDef.props;
export type GiOniEvents = typeof __propDef.events;
export type GiOniSlots = typeof __propDef.slots;
export default class GiOni extends SvelteComponentTyped<GiOniProps, GiOniEvents, GiOniSlots> {
}
export {};
