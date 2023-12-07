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
export type GiAqueductProps = typeof __propDef.props;
export type GiAqueductEvents = typeof __propDef.events;
export type GiAqueductSlots = typeof __propDef.slots;
export default class GiAqueduct extends SvelteComponentTyped<GiAqueductProps, GiAqueductEvents, GiAqueductSlots> {
}
export {};
